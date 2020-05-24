
//We dont add parantheses here bcoz we dont want to execute it inside the module rather we need to pass the function instance and
//let the calling module decide when it wants to execute the function
module.exports.getDate = function() {
  const today = new Date();
  const options = {weekday: 'long',day: 'numeric',month:'long'};
  return today.toLocaleDateString("en-US",options);
}
//If module.exports = getDate; --it's bound to only getDate function, we can't access the 2nd function


module.exports.getDay = function()
{
  const today = new Date();
  const options = {weekday: 'long'};
  return today.toLocaleDateString("en-US",options);
}
