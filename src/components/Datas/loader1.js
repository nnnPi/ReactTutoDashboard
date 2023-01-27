import React from "react"
import Keys from "./Veggies/VeggiesKey"
import PotatoRaw from "./Veggies/PotatoFolder/potato"
import CarrotRaw from "./Veggies/CarrotFolder/carrot"
import CucumberRaw from "./Veggies/CucumberFolder/Cucumber"
import * as VeggiesList from "./Veggies/VeggiesList"


const SomeData = () => {

  const makeVegetable = sourceArr => {
  const newVege = {};
  Keys.forEach((element, index) => {
  newVege[element] = sourceArr[index];
  });
  console.log(newVege)
  return newVege;
  };
  
  const LoadedVeggies = {};
  Object.keys(VeggiesList).forEach(key => {
  LoadedVeggies[key] = makeVegetable(VeggiesList[key]);
  })
  console.log(LoadedVeggies)
  return <div></div>
  }

  export default SomeData