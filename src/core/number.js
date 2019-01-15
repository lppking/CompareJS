import {getType} from '../util/index'

function compareNumber ($cm, {tpl, target}) {
  return getType(tpl) === getType(target);
}

export {
  compareNumber
}