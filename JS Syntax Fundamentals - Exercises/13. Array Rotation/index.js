function arrayRotation(arr,rotationCount){
   for (let index = 0; index < rotationCount; index++) {
    const firstElement = arr.shift();
    arr.push(firstElement);
    
    
   }
   console.log(arr.join(" "));
}
arrayRotation([51,47,32,61,21],2);