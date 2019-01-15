import {getType} from '../util/index'

function compareBool ($cm, {tpl, target}) {
  return getType(tpl) === getType(target);
}

export {
  compareBool
}