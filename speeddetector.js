//Write a program that takes the speed of a car as input e.g 80. 
//If the speed is less than 70, it should print “Ok”. 
//Otherwise, for every 5 km/s above the speed limit (70),
// it should give the driver one demerit point and print the total number of demerit points.

function speedDetectorSystem(speed){
    // define speedLimit and demerit points
   let speedLimit = 70
    if (speed <= 70){
        return 'OK'
    }
  // displays the amount of demerit points and suspend lisence
 else {
    let demeritPoints = Math.floor((speed - speedLimit) / 5)

    if (demeritPoints >= 12) {
      return 'License suspended'
    } else {
      return `${demeritPoints} demerit points`
    }
  }
}
speedDetectorSystem()
console.log(speedDetectorSystem(100))
