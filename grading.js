//Write a function that prompts the user to input student marks. 
//The input should be between 0 and 100. 
//The output should correspond the correct grade, as shown below:

//A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

function dertermineGradeOfStudent(marks){
     const msg = 'Your grade is'
     if (marks> 100){
        return 'Not valid marks'
     }
    else if(marks > 79 ){
        return 'A'
    }
    else if (marks >= 60 && marks  <=79 ){

        return 'B'

    }
    else if (marks <= 59 && marks >= 49){
        return 'C'
    }
    else if (marks >= 40 && marks <=49){

      return 'D'

    }
    else{
        return 'E'
    }
}
dertermineGradeOfStudent()
 //console.log(dertermineGradeOfStudent(0))