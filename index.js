// Write your solution in this file!
const employee = {
    name: "Hassan",
    streetAddress: "Garisa"
}

function updateEmployeeWithKeyAndValue(object, key, value){
    const newObj = { ...employee }
    newObj[key] = value
    return newObj
}

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value){
    object[key] = value
    return object
}

function deleteFromEmployeeByKey(object, key){
    const newObj = { ...employee }
    delete newObj[key]
    return newObj
}


function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}