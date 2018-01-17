module.exports = function getBestRacer(distance) {
  const steps = array => {
    const arr = array; //
    const end = arr.length;

    let obj = {next: null};
    for(var i = arr.length; i; --i){
       obj.value = arr.pop();
       obj = {next: obj}
    }
    obj = obj.next;

    let step = 0;
    let point = 0;

    const frog = obj => {
      step++;
      point += obj.value;
      if (point > end) {
        return;
      }
      if (obj.next) {
        frog(obj.next);
      }
    }
    frog(obj);
    return step;
  }


  return distance.map(arr => steps(arr)).reduce((iMin, x, i, arr) => x < arr[iMin] ? i : iMin, 0);
}
