const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof(sampleActivity)=="string" && sampleActivity.match(/[a-zA-Z]{1}/g)==null)
  {
      if(sampleActivity.match(/[.]/g)!=null)
      {
          if(sampleActivity.match(/[.]/g).length>1)
          {
              let item=sampleActivity.search(/[.]/g)+1;
              sampleActivity=sampleActivity.split("").splice(0,sampleActivity.indexOf('.',item)).join("");
          }
      }
      if(+sampleActivity>0)
      {
          let k=0.693/HALF_LIFE_PERIOD;
          let t=Math.log(MODERN_ACTIVITY/+(sampleActivity))/k;
          if(t<0)
          {
              return false;
          }
          return Math.ceil(t);
      }
      else
      {
          return false;
      }
  }
  else
  {
      return false; 
  }
}; 
