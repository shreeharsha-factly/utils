exports.getIds = (objectsList = []) => {
  if (!objectsList) {
    objectsList = [];
  }
  return getValues(objectsList, "id");
};

exports.getValues = (objectsList = [], key = "") => {
  if (!objectsList) {
    objectsList = [];
  }
  if (!key) {
    key = "";
  }
  return objectsList
    .map((obj) => obj[key])
    .flat()
    .filter((item) => item);
};

exports.deleteKeys = (objectsList = [], keys = []) => {
  if (!objectsList) {
    objectsList = [];
  }
  if (!keys) {
    keys = [];
  }
  return objectsList.map((obj) => {
    keys.forEach((key) => delete obj[key]);
    return obj;
  });
};

exports.buildObjectOfItems = (objectsList = []) => {
  if (!objectsList) {
    objectsList = [];
  }
  const objectOfItems = {};

  for (let obj of objectsList) {
    objectOfItems[obj.id] = obj;
  }
  return objectOfItems;
};

exports.unique = (listOfItems) => {
  return Array.from(new Set(listOfItems));
};
