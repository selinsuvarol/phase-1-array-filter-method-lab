const { stringMatching } = require("expect");

function findMatching(arr, string) {
    return arr.filter((arritem) => 
        arritem.toLowerCase() === string.toLowerCase());
  };

function fuzzyMatch(arr, string) {
    return arr.filter(
      (arritem) =>
        arritem.toLowerCase().indexOf(string.toLowerCase()) === 0
    );
  };
  
function matchName(arrOfObj,string) {
    return arrOfObj.filter((objElements)=> objElements.name === string)
};