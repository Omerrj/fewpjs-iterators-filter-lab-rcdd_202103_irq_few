// Code your solution here
const findMatching =(list, name) =>drivers.filter((driver) =>
     driver.toLowerCase() === name.toLowerCase());


const fuzzyMatch =(list, partialName)=> {
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