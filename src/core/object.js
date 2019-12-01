import {getType} from '../util/index'

function compareObject ({tpl, target}) {
  const keys = Object.keys(tpl);
  for(let index = 0, len = keys.length; index < len; index++) {
    const item = keys[index];
    if (target[item] === null || !target.hasOwnProperty(item) || getType(tpl[item]) !== getType(target[item])) {
      return false;
    }
    if (!this[getType(tpl[item])]({
      tpl: tpl[item],
      target: target[item]
    })) {
      return false
    };
  }
  return true;
}

export {
  compareObject
}