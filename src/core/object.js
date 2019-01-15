import {getType} from '../util/index'

function compareObject ($cm, {tpl, target}) {
  const keys = Object.keys(tpl);
  for(let index = 0, len = keys.length; index < len; index++) {
    const item = keys[index];
    if (!target.hasOwnProperty(item) || getType(tpl[item]) !== getType(target[item])) {
      return false;
    }
    if (!$cm[getType(tpl[item])]($cm, {
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