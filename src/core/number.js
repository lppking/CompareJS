import {getType} from '../util/index'

function compareNumber ({tpl, target}) {
  return getType(tpl) === getType(target);
}

export {
  compareNumber
}