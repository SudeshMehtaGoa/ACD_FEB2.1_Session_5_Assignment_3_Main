/*
    Storing values of employee object and printing them in console.
    employeeAddress object in nested in employee object
*/

function firstFunction() {
    var employee = {
        employeeName : "Rakesh Kumar",
        employeeAge : 30,
        employeeSalary : 25000,
        employeeAddress : {
            employeeCity : "Puna",
            employeeState : "Maharashtra",
            employeePincode : 411007
        }
    };
    console.log("Employee.Name :" + employee.employeeName);
    console.log("Employee.Age :" + employee.employeeAge);
    console.log("Employee.Salary :" + employee.employeeSalary);
    console.log("Employee.Address.City :"  + employee.employeeAddress.employeeCity);
    console.log("Employee.Address.State :"  + employee.employeeAddress.employeeState);
    console.log("Employee.Address.Pincode :"  + employee.employeeAddress.employeePincode);
    console.log("Printing Employee object :" , employee);
    console.log("Printing Employee address object :" , employee.employeeAddress);

}