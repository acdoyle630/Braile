/*jshint esversion: 6*/

module.exports = ( str, find ) =>{
  str += str;
  console.log(str);
  if(str.indexOf(find)>-1){
    return true;
  }
};

