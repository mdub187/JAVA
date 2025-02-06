// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const clearEmployeesbtn = document.getElementById('#clear-employee-btn')
// Collect employee data
var employeeTable = document.getElementsByClassName("employee-table");
function collectEmployees() {
  const employeesArray = [];
  let addAnother = true;
  // while loop to add employees
  while (addAnother) {
    const firstName = prompt("Please enter the employee's first name:");
    const lastName = prompt("Please enter the employee's last name:");
    let salary = prompt("Please enter the employee's salary:");

    // Ensure salary is a number
    salary = isNaN(salary) ? 0 : parseFloat(salary);

    employeesArray.push({firstName, lastName, salary});

    addAnother = confirm("Would you like to add another employee?");
    // clear text function
    function clearTableText(employeeTable) {
      for (let i = 0; i < table.rows.length; i++) {
        const row = table.rows[i];
    
        for (let j = 0; j < row.cells.length; j++) {
          row.cells[j].innerHTML = "";
        }
      }
    }
  }

  return employeesArray;
}

// Display the average salary
function displayAverageSalary(employeesArray) {
  const totalSalary = employeesArray.reduce((total, employee) => total + employee.salary, 0);
  const averageSalary = totalSalary / employeesArray.length;

  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $${averageSalary.toFixed(2)}`);
}

// Select a random employee
function getRandomEmployee(employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];
  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
}


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.className = "firstName"
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.className = "lastName"
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    salaryCell.className = "salary"
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
