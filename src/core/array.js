import {getType} from '../util/index'

function compareArray ($cm, {tpl, target}) {
  if (tpl.length === 0 || target.length === 0) return true;
  const tplCore = tpl[0];
  const tarCore = target[0];

  if (getType(tplCore) !== getType(tarCore)) return false;
  return $cm[getType(tplCore)]($cm, {
    tpl: tplCore,
    target: tarCore
  });
}

export {
  compareArray
}