import React from 'react';
import * as teset from "C:/SCP/GPS2/src/components/Datas/Veggies/PotatoFolder/trash/Potato.json";
import txt from './Potato.csv';


const Jsonmak = () =>{
    

    console.log(teset)
    console.log(txt)


    var sentence = new FileReader();

var LGT = ""
var cut = ""

  
 for ( var i=0 ; i < sentence.length ; i++)
     {  
     LGT = LGT+sentence.charAt(i)  
     cut = sentence.charAt(i)
     
     if ( cut === ","){
        console.log(cut)
       break;}

     }
   
return <div>(`lu:{LGT} `);</div>
}



export default Jsonmak