import {getType} from '../util/index'

function compareString ({tpl, target}) {
  return getType(tpl) === getType(target);
}

export {
  compareString
}