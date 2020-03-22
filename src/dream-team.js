module.exports = function createDreamTeam(members) {
  if(Array.isArray(members))
  {
      members=members.filter((item, index, array)=>typeof(array[index])=="string");
      for(let count=0;count<members.length;count++)
      {
          members[count]=members[count].trim();
      }
      members = members.map((item, index, array)=> array[index][0].toUpperCase()).sort().join('');
  }
  else
  {
      members=false;
  }
  return members;
};