// Code your solution here
const findMatching =(list, name) =>drivers.filter((driver) =>
     driver.toLowerCase() === name.toLowerCase());


const fuzzyMatch =(list, partialName)=> 

   list.filter(function (driverName) 
     driverName.slice(0, partialName.length) === partialName);


const matchName=(drivers,name)=>{
   return drivers.filter((driver)=> {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
};