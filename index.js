// Write your solution in this file!
const employee = {
    name: "Flatiron School",
    streetAddress: "123 first street",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = { ...obj };
    newObj[key] = value;

    return newObj;
};

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;

    return obj;
}
function deleteFromEmployeeByKey(obj, key) {
    const newObj = { ...obj.key };
    delete newObj.streetAddress;

    return  newObj;
};

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj.name;

    return obj;
};