let parkingState = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]

// Your code here
function getParkingLotState(matrix) {
  let totalSlots = 0;
  let availableSlots = 0;
  let occupiedSlots = 0;

  for (let i = 0; i < matrix.length; i++) {
    let rowParking = matrix[i];

    for (let j = 0; j < rowParking.length; j++) {
      if (rowParking[j] == 2) availableSlots += 1;
      if (rowParking[j] == 1) occupiedSlots += 1;

    }

  }



  totalSlots = 16 //matrix.length*rowParking.length;

  parking = {
    totalSlots: totalSlots,
    availableSlots: availableSlots,
    occupiedSlots: occupiedSlots
  }

  return parking;
}

console.log(getParkingLotState(parkingState))
