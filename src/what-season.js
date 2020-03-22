module.exports = function getSeason(date) {
    let answer;
    if(Object.prototype.toString.call(date)=="[object Date]")
    {
        if(isNaN(date.valueOf()))
        {
            throw new RangeError("Error");   
        }
        else
        {
            let month=date.getMonth();
            if(month>=2 && month<5)
            {
                answer="spring";
            }
            if(month>=5 && month<8)
            {
                answer="summer";
            }
            if(month>=8 && month<11)
            {
                answer="autumn";
            }
            if(month>=11 || month==0 || month==1)
            {
                answer="winter";
            } 
        }
    }
    else
    {
      if(Object.prototype.toString.call(date)!="[object Undefined]")
      {
          throw new RangeError("Error");
      }
        else
        {
            answer='Unable to determine the time of year!';
        }
    }
    return answer;
};
