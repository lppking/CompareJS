function getType (value) {
  if (Array.isArray(value)) {
    return 'array';
  }
  return typeof value;
}

function bindAPI (Compare, apis) {
  Object.keys(apis).forEach((item) => {
    Compare.prototype[item] = apis[item];
  });
}

export {
  getType,
  bindAPI
}