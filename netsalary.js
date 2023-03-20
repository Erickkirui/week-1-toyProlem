//Write a program whose major task is to calculate an individual’s Net Salary 
//by getting the inputs of basic salary and benefits. 
//Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 


// create function that culculate net salary
function calculateNetSalary(basicSalary){

    
    let payAsYouEarn = ""
    let nhifDeductions = ""

       // culculate PAYE
    
    if (basicSalary < 24000){

        return payAsYouEarn = (basicSalary * 10/100)
    }
    else if (basicSalary > 24000 && basicSalary < 32333){

        return payAsYouEarn = (basicSalary* 25/100)
    }
  else{
     return payAsYouEarn = (basicSalary * 30/100)
    }

    // culculate NHIF deductions
  

 


    
}
calculateNetSalary()
console.log(calculateNetSalary(4000))
















// function calculateNetSalary(basicSalary) {
//     // calculate benefits
//     let benefits = 0.2 * basicSalary;
  
//     // calculate gross salary
//     let grossSalary = basicSalary + benefits;
  
//     // calculate NSSF deductions
//     let nssfDeductions = Math.min(0.12 * grossSalary, 200);
  
//     // calculate NHIF deductions
//     let nhifDeductions = 0;
//     if (grossSalary < 6000) {
//         nhifDeductions = 150;
//     } else if (grossSalary < 8000) {
//         nhifDeductions = 300;
//     } else if (grossSalary < 12000) {
//         nhifDeductions = 400;
//     } else if (grossSalary < 15000) {
//         nhifDeductions = 500;
//     } else if (grossSalary < 20000) {
//         nhifDeductions = 600;
//     } else if (grossSalary < 25000) {
//         nhifDeductions = 750;
//     } else if (grossSalary < 30000) {
//         nhifDeductions = 850;
//     } else if (grossSalary < 35000) {
//         nhifDeductions = 900;
//     } else if (grossSalary < 40000) {
//         nhifDeductions = 950;
//     } else {
//         nhifDeductions = 1000;
//     }
  
//     // calculate payee (tax)
//     let taxableIncome = grossSalary - nssfDeductions - nhifDeductions - 2433.33;
//     let payee = 0;
//     if (taxableIncome <= 12298) {
//         payee = 0.1 * taxableIncome;
//     } else if (taxableIncome <= 23885) {
//         payee = 0.15 * (taxableIncome - 12298) + 1229.8;
//     } else if (taxableIncome <= 35472) {
//         payee = 0.2 * (taxableIncome - 23885) + 2886.95;
//     } else if (taxableIncome <= 47059) {
//         payee = 0.25 * (taxableIncome - 35472) + 5102.25;
//     } else {
//         payee = 0.3 * (taxableIncome - 47059) + 7914.7;
//     }
  
//     // calculate net salary
//     let netSalary = grossSalary - nssfDeductions - nhifDeductions - payee;
  
//     // return net salary
//     return netSalary;
//   }







