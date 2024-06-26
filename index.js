// Code your solution in this file!

function distanceFromHqInBlocks(startBlock)  {
const destinationBlock = 42;
if (startBlock > destinationBlock ) {
  return (startBlock - destinationBlock)
} else {
  return (destinationBlock - startBlock)
}
}

function distanceFromHqInFeet(startBlock) {
    const distanceInBlocks = distanceFromHqInBlocks(startBlock);
    return distanceInBlocks * 264;
  }
  function distanceTravelledInFeet(startBlock, destinationBlock) {
    if (startBlock > destinationBlock ) {
      return (startBlock - destinationBlock) *264
    } else {
      return (destinationBlock - startBlock) *264
    }


  }
  
  function calculatesFarePrice(startBlock, destinationBlock) {
    const distance = distanceTravelledInFeet(startBlock, destinationBlock);
    if (distance <= 400) {
        return 0
    }
    else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;    
    }else if (distance > 400 && distance <= 2500) {
    return 25
   }else if ( distance >= 2500){
     return 'cannot travel that far'
   }
    
       
    
  }
   