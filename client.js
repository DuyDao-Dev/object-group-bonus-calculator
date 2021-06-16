const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

/**
 * CONSTRUCTOR: Create a new Employee object with specific properties from an existing employee object;
 * @param {object} employee { name: string, employeeNumber: string, annualSalary: string, reviewRating: number }
 */
function Employee(employee) {
  this.name = employee.name; // Employee.name is the same as the input;
  this.bonusPercentage = getBonusPercentage(employee); // function to be added later;
  this.totalBonus = employee.annualSalary * (this.bonusPercentage / 100);
  this.totalCompensation = new Number(employee.annualSalary) + this.totalBonus; // replace zero with bonus
  this.emailMessage = function () {
    return `Congrats, ${this.name}. Your bonus has been calculated as ${this.totalBonus}`;
  }
}

console.log(new Employee(employees[2]).emailMessage());


/**
 * Returns a number representing the percentage of the bonus
 * based on the employees rating.
 * @param {number} rating From 1 to 5;
 * @returns {number}
 */
function ratingBonus(rating) {
  // switch to define the categories of bonus levels:
  let percentage;
  console.log('Rating passed to ratingBonus()', rating);
  rating = Number(rating); // ensure the rating is a number;
  switch (rating) {
    case 3:
      percentage = 4;
      break;
    case 4:
      percentage = 6;
      break;
    case 5:
      percentage = 10;
      break;
    default:
      percentage = 0;
      break;
  }
  return percentage;
}

console.log(ratingBonus(employees[2].reviewRating));

/**
 * Evaluates length of employee number and returns
 * longevity bonus.
 * @param {number} employeeNumber
 * @returns {number bonus percentage
 */
function longevityBonus(employeeNumber) {

  return employeeNumber.length === 4 ? 5 : 0;

  // Acceptable answers:
  // let bonus = 0;
  // if(employeeNumber.length === 4) {
  //   bonus = 5;
  // }
  // return bonus;

  // if(employeeNumber.length === 4) {
  //   return 5;
  // } else {
  //   return 0;
  // }
}

// Test longevityBonus():
console.log('Positive longevity bonus: should be 5', longevityBonus('1234'));
console.log('Negative longevity bouns: should be 0', longevityBonus('12345'));
console.log(longevityBonus(employees[2].employeeNumber));
console.log(longevityBonus(employees[1].employeeNumber));

/**
 * Determine if
 * @param {number} annualSalary
 * @returns
 */
function whoaNelly(annualSalary) {
  return annualSalary > 65000 ? -1 : 0;
}

console.log('Makes more than 65,000, should be -1', whoaNelly(66000));
console.log('Makes less than 65001, should be 0', whoaNelly(65000));

/**
 * Validate the bonus percent does not exceed 13 or fall below 0.
 * @param {number} bonus
 * @returns {number} validated bonus percent
 */
function validateBonus(bonus) {
  if (bonus > 13) { // check if bonus more than 13%
    return 13; // cap at 13
  } else if (bonus < 0) { // check if bonus less than 0%;
    return 0; // don't take away annualSalary
  } else {
    return bonus; // give the full bonus;
  }
  // viable, but ugly ... yet hauntingly beautiful.
  // return bonus > 13 ? 13 : (bonus < 0 ? 0 : bonus);
}

// Testing validateBonus()
console.log('Expect 13', validateBonus(15));
console.log('Expect 12', validateBonus(12));
console.log('Expect zero', validateBonus(-13));
console.log('Expect 13', validateBonus(200));

/**
 * Process all of the business logic to create the total bonus percentage.
 * @param {employee} employee
 * @returns
 */
function getBonusPercentage(employee) {
  let bonus = 0;
  bonus = ratingBonus(employee.reviewRating); // Based on rating;
  bonus += longevityBonus(employee.employeeNumber); // Based on term of service;
  bonus += whoaNelly(employee.annualSalary); // Over 65K, take 1% off
  bonus = validateBonus(bonus); // pass in bonus, keep it within the limits;
  console.log(`Bonus amount for ${employee.name}`, bonus);
  return bonus; // anywhere from 0 to 13;
}

/**
 * Calculate the bonuses for all employees and returns an array of new Employee objects.
 * @param {employee[]} employeeList
 * @returns
 */
function calculateBonuses(employeeList) {
  let EmployeeList = []; // placeholder for new Employee objects;
  // iterate through the list of employees to create new Employee objects as required;
  for (const employee of employeeList) {
    const Emp = new Employee(employee); // Instantiating a new Employee object!
    EmployeeList.push(Emp);
    console.log('Employee Bonus Calculation Result:', Emp);
  }
  return EmployeeList;
}

calculateBonuses(employees);

const bigEarners = employees.filter(employee => {
  return employee.reviewRating > 2;
});

const alsoBigEarners = employees.filter(function (employee) {
  if(employee.reviewRating > 2) {
    return employee.name;
  };
});

const EmployeesWithBonus = function(employeeList) {
  const bonusPeeps = employeeList.filter(function (employee) {
    return employee.reviewRating > 2;
  });
  let list = [];
  for (const peep of bonusPeeps) {
    list.push(peep.name);
  }
  return list;
}

console.log(EmployeesWithBonus(employees));

console.log('Long-hand function: ', alsoBigEarners);

console.log('Employees with a bonus:', bigEarners);

// for (const employee of employees) { }

console.log( employees );