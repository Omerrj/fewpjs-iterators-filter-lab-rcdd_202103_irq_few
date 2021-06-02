// Code your solution here

const matchName=(drivers,name)=>{
   return drivers.filter((driver)=> {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}