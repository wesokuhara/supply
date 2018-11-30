function queryStringFromObject(obj) {
  function encodeParam(key) {
    if (Array.isArray(obj[key])) {
      return obj[key]
        .map(item => `${encodeURIComponent(`${key}[]`)}=${encodeURIComponent(item)}`)
        .join('&');
    }

    return `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`;
  }

  return Object.keys(obj)
    .filter(key => obj[key] !== null)
    .map(encodeParam)
    .join('&');
}

module.exports = {
  queryStringFromObject
}

