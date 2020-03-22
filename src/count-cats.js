module.exports = function countCats(backyard) {
  let count=0;
  let rec=function(arr){
  for(let i=0;i<arr.length;i++){
    let element=arr[i];
    if(element=="^^")
    {
        count++;
    }
    if (Array.isArray(element)==true)
        rec(element);
  }
  }
  rec(backyard);
  return count;
};
