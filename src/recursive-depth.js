module.exports = class DepthCalculator {
    calculateDepth(array) {
      let mas=[];
      var bdsa=[];
      var area={
        list:'zero',
      };
      bdsa.push(area);
      var count=1;
      let rec=function(arr){
  
        if(bdsa.findIndex((item, index, arr)=>arr[index]["list"]==arr)==-1)
        {
          area={};
          area.list=arr;
          area.count=count;
          bdsa.push(area);
          area={}
        }
        if(arr.length==0)
        {
          mas.push(count);
        }
        for(let i=0;i<arr.length;i++){
          if(bdsa.findIndex((item, index, r)=>r[index]["list"]==arr)!=-1)
          {
              let m=bdsa.findIndex(( item, index, r)=>r[index]["list"]==arr); 
              count=bdsa[m]["count"];
          }
          let element=arr[i];
          if (Array.isArray(element)==true)
          {
            count++;
            rec(element);
          }
          else
          {
            mas.push(count)
          }
        }
      }
      rec(array);
      mas=mas.sort( (a, b) => a - b );
      return mas[mas.length-1];    
    }    
  };