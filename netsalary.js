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
  else if (basicSalary > 32333){
     return payAsYouEarn = (basicSalary * 30/100)
    }

    // culculate NHIF deductions
    
    if (basicSalary < 5999){
        
        return nhifDeductions = 150

    }
    else if ( basicSalary > 6000 && basicSalary < 7999){

        return nhifDeductions = 300

    }
    else if(basicSalary > 8000 && basicSalary < 11999){

       return  nhifDeductions = 400   

    }
    else if( basicSalary > 12000 && basicSalary < 14999 ){

        return nhifDeductions = 500
    }

    else if (basicSalary > 15000 && basicSalary < 19999) {

           return nhifDeductions = 600
    }
    else if (basicSalary > 20000 && basicSalary < 24999){
        return nhifDeductions = 750
    }
    else if (basicSalary > 25000 && basicSalary < 29999){

        return nhifDeductions = 850
    }
    else if (basicSalary > 30000 && basicSalary < 34999){

        return nhifDeductions = 900
    }
    else if (basicSalary > 35000 && basicSalary < 39999){
        return nhifDeductions = 950
    }
    else if (basicSalary > 40000 && basicSalary < 44999){
        return nhifDeductions = 1000
    }
    else if (basicSalary > 45000  && basicSalary < 49999){
        return nhifDeductions =  1100
    }
    else if (basicSalary > 50000 && basicSalary < 59999){
        return nhifDeductions = 1200
    }
    else if (basicSalary > 60000 && basicSalary < 69999){
        return nhifDeductions = 1300
    }
    else if (basicSalary > 70000 && basicSalary < 79999){
        return nhifDeductions = 1400
    }
    else if (basicSalary > 80000 && basicSalary < 89999){
        return nhifDeductions = 1300
    }
    else if (basicSalary > 90000 && basicSalary < 99999){
        return nhifDeductions = 1300
    }
    else if (basicSalary > 100000){
        return nhifDeductions = 1700
    }
    // culculate NSSF deduction




    
}
calculateNetSalary()
console.log(calculateNetSalary(100000))
















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







