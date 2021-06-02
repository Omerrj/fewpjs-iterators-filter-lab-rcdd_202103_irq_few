// Code your solution here
const findMatching (list, name) {
  return list.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch (list, partialName) {
  let lengthOfName = partialName.length;
  return list.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === partialName;
  });
}

const matchName=(drivers,name)=>{
   return drivers.filter((driver)=> {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
};