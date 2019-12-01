import {getType, bindAPI} from './util/index'
import {Compare} from './instance/index'
import {compareString} from './core/string'
import {compareNumber} from './core/number'
import {compareArray} from './core/array'
import {compareBool} from './core/boolean'
import {compareObject} from './core/object'

const $cm = new Compare();

bindAPI(Compare, {
  'array': compareArray.bind($cm),
  'object': compareObject.bind($cm),
  'string': compareString.bind($cm),
  'number': compareNumber.bind($cm),
  'boolean': compareBool.bind($cm)
});

export default function compare (tpl, target, deep) {
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

  return $cm[tplType]({
    tpl,
    target,
    tplType,
    targetType
  });
}