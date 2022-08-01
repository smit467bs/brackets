module.exports = function check(str, bracketsConfig) {

  var brackets = {};
  var stack = [];

  if (str.length % 2 !== 0) return false;

  for (let i = 0; i < bracketsConfig.length; i++) {

    brackets[`${bracketsConfig[i][1]}`] = bracketsConfig[i][0];

  }

  for (let i =  0; i < str.length; i++) {

    const curr = str[i];
    const topElement = stack[stack.length - 1];
    
    if (brackets[curr] === topElement && stack.length > 0){

      stack.pop();
      
    }
      else{

        stack.push(curr);
      
      }
  }

  return stack.length === 0;
}
  



