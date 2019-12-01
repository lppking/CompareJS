import {getType} from '../util/index'

function compareBool ({tpl, target}) {
  return getType(tpl) === getType(target);
}

export {
  compareBool
}