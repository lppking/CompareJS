import {getType} from '../util/index'

function compareArray ($cm, {tpl, target}) {
  if (tpl.length === 0 || target.length === 0) return true;

  for (let i = 0, len = target.length; i < len; i++) {
    let tplCore = tpl[i];
    let tarCore = target[i];
    if (getType(tplCore) !== getType(tarCore)) return false;

    let _result = $cm[getType(tplCore)]($cm, {
      tpl: tplCore,
      target: tarCore
    });

    if (!_result) return _result;
  }
  return true;
}

export {
  compareArray
}