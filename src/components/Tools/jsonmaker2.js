import React from 'react';
import fakeData from './Super.js'



const Jsonmak2 = () =>{
    
    const SuperRead = fakeData;
    console.log(SuperRead);

    console.log(SuperRead.length);

    const Test = SuperRead.join(" ");

    
   
return <div>(`lu:{Test} `);</div>
}



export default Jsonmak2