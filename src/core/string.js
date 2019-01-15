import {getType} from '../util/index'

function compareString ($cm, {tpl, target}) {
  return getType(tpl) === getType(target);
}

export {
  compareString
}