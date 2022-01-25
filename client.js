const employees = [
  {
    name: 'Atticus',
    employeeNumber: '24050',
    annualSalary: '470000',
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

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

let bonusPercent = 0;
let bonusAmount = 0;

function calcBonus(employees, name) {

  let currentEmployee;
  
  for (let employee of employees) {
    
    if (employee.name === name) {
      // set variable to equal desired employee for evaluation
      currentEmployee = employee;
      console.log(currentEmployee);
    }
  }

  

 

// Determine bonus percentage based on review rating
  if (currentEmployee.reviewRating <= 2) {
    let final = new CreatedArray(currentEmployee.name, bonusAmount, currentEmployee.annualSalary, bonusAmount)
    return final;
  } 
  else if (currentEmployee.reviewRating = 3) {
    bonusPercent += 4;
    console.log(bonusPercent);
     if (currentEmployee.employeeNumber.length > 4 ) {
       bonusPercent += 5;
       console.log(bonusPercent);
       console.log(income(currentEmployee));
    }
  }
 } 


 function income(currentEmployee) {
   if (currentEmployee.annualSalary > 65000) {
    bonusPercent -= 1;
   }
   return bonusPercent
 }




// function seniority()

// function bonusScope()












// else if (currentEmployee.reviewRating = 4) {
// }
// else if (currentEmployee.reviewRating = 5) {
// }



// function CreateArray(name, bonusPercentage,totalCompensation,totalBonus) {
//   this.name = name;
//   this.bonusPercentage = bonusPercentage;
//   this.totalCompensation = totalCompensation;
//   this.totalBonus = totalBonus;
// }
// CreateArray('Jake',200,100,300);
// console.log(CreateArray('Jake',200,100,300))

console.log(calcBonus(employees, 'Atticus'));


