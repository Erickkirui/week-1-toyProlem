//Write a function that prompts the user to input student marks. 
//The input should be between 0 and 100. 
//The output should correspond the correct grade, as shown below:

//A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

function dertermineGradeOfStudent(marks){
    //a variable for the output message
     const msg = 'Your grade is'
     //return not valid if marks is over 100
     if (marks> 100){
        return 'Not valid marks'
     }
     //return A for marks over 79
    else if(marks > 79 ){
        return `${msg} (A) `
    }
    //return B if marks 60 t0 79
    else if (marks >= 60 && marks  <=79 ){

        return `${msg} (B) `

    }
    //return C -  59 to 49
    else if (marks <= 59 && marks >= 49){
        return `${msg} (C) `
    }

    // return D - 40 to 49
    else if (marks >= 40 && marks <=49){

        return `${msg} (D) `

    }
    // return E for less than 40
    else{
        return `${msg} (E) `
    }
}
dertermineGradeOfStudent()
console.log(dertermineGradeOfStudent(100))