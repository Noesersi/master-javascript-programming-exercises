function transformEmployeeData(array) {
  // your code here
  let result = [];
  array.forEach(employee => {
    let employeeObject = {};
    employee.forEach( info =>{
      employeeObject[info[0]] = info[1]
    })
    result.push(employeeObject)
  })
  return result
  
}
let output = transformEmployeeData([[['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']], [['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]]);
console.log(output); // --> [{ firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk' }, { firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager' }]