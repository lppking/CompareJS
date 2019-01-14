const tpl = {
  head: {
    module: '',
    function: '',
    error_code: 0
  },
  body: {
    data: [],
    status: {
      name: '',
      age: 1,
      flags: []
    }
  }
};

const res = {
  head: {
    module: 'module',
    function: 'function',
    error_code: 0
  },
  body: {
    data: [{
      tag: 1,
      a: {}
    }],
    status: {
      name: 'lipeng',
      age: 18,
      flags: ['1', '2']
    }
  }
};

const $util = Object.create({});

$util.compare = (function () {

  const COMPARE_TYPE_TO_FUNC = {
    'array': compareArray,
    'object': compareObject,
    'string': compareString,
    'number': compareNumber,
    'boolean': compareBool
  };

  function compareArray ({tpl, target}) {
    if (tpl.length === 0 || target.length === 0) return true;
    const tplCore = tpl[0];
    const tarCore = target[0];

    if (getType(tplCore) !== getType(tarCore)) return false;
    return COMPARE_TYPE_TO_FUNC[getType(tplCore)]({tpl: tplCore, target: tarCore});
  }

  function compareObject ({tpl, target}) {
    const keys = Object.keys(tpl);
    for(let index = 0, len = keys.length; index < len; index++) {
      const item = keys[index];
      if (!target.hasOwnProperty(item) || getType(tpl[item]) !== getType(target[item])) {
        return false;
      }
      if (!COMPARE_TYPE_TO_FUNC[getType(tpl[item])]({tpl: tpl[item], target: target[item]})) return false;
    }
    return true;
  }

  function compareString ({tpl, target}) {
    return getType(tpl) === getType(target);
  }

  function compareNumber ({tpl, target}) {
    return getType(tpl) === getType(target);
  }

  function compareBool ({tpl, target}) {
    return getType(tpl) === getType(target);
  }

  function getType (value) {
    if (Array.isArray(value)) {
      return 'array';
    }
    return typeof value;
  }

  return function (tpl, target, deep) {
    const targetType = getType(target);
    const tplType = getType(tpl);

    // 不处理undefined、function、null、NaN
    if (
      tplType === 'undefined' ||
      tplType === 'function' ||
      targetType === 'undefined' ||
      targetType === 'function' ||
      Object.is(tpl, null) ||
      Object.is(target, null) ||
      Object.is(tpl, NaN) ||
      Object.is(target, NaN) ||
      targetType !== tplType
    ) {
      return false;
    }
    
    return COMPARE_TYPE_TO_FUNC[tplType]({
      tpl,
      target,
      tplType,
      targetType
    });
  }
})($util);

$util.compare(tpl, res, true);