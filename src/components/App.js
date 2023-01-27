import React from "react";

//for tuto1+basic

    import CountButton from "./Elements/CountButton/CountButton";
    import SearchBar from "./Elements/SearchBar/SearchBar";
    import { useEffect, useState } from "react";
    import Button from "./Elements/Button/Button";
    //import Jsonmak from "./Tools/jsonmaker"
    //import Jsonmak2 from "./Tools/jsonmaker2"


//for light/dark theme

    import {ColorModeContext, useMode, Mood,tokens} from  "../theme"
    import {Box, CssBaseline , ThemeProvider} from "@mui/material";
    import Topbar from "../scenes/global/Topbar";


//for Dash

    import {Routes, Route} from "react-router-dom";
    import  Dashboard  from "../scenes/dashboard";
    import  Sidebar  from "../scenes/global/Sidebar";
    import  Team  from "../scenes/Team";
    import  Invoices  from "../scenes/invoices";
    import  Contacts  from "../scenes/contacts";
    import  Form  from "../scenes/form";
    import  Calendar from "../scenes/calendar";
    import  FAQ from "../scenes/faq";
    import  Bar  from "../scenes/bar";
    import  Pie  from "../scenes/pie";
    import  Line  from "../scenes/line";
    import  Geography  from "../scenes/geography";

//for custom data

    import SomeData from "./Datas/loader1";




//function App2 from tuto dark mode/light mode
function App2() {
    const [theme,ColorMode] = useMode();

    return (
        
        <ColorModeContext.Provider value={ColorMode}>
            <ThemeProvider theme ={theme}>
            <div className="large" style={{backgroundColor: `${theme.palette.background.default}` ,transition: `background ${Mood.Fancy.Timesec}s`}}>
            
            <CssBaseline/>
               
               
                
                    <div className="app">
                        <Sidebar />
                        <main className="content"  >  
                            
                            <Topbar />                             
                            <Routes>  
                                <Route path="/" element = {<Dashboard/>}/> 
                                <Route path="/team" element = {<Team/>}/>
                                <Route path="/contacts" element = {<Contacts/>}/> 
                                <Route path="/invoices" element = {<Invoices/>} />
                                <Route path="/form" element = {<Form/>} /> 
                                <Route path="/calendar" element = {<Calendar/>} /> 
                                <Route path="/faq" element = {<FAQ/>} /> 
                                <Route path="/bar" element = {<Bar/>} />  
                                <Route path="/pie" element = {<Pie/>} /> 
                                <Route path="/line" element = {<Line/>} />
                                <Route path="/geography" element = {<Geography/>} />


                            </Routes>

                            test                 
                        </main>                        
                    </div>
                    </div>               
            </ThemeProvider>            
        </ColorModeContext.Provider>  
        
    );
}

export {App2};






// set as const from tuto1 and test perso



const App = () =>
 {


    /*
    const Potato = require("./Datas/Veggies/Potato.json");
    console.log(Potato)
    */
    

 /*   
    const[productsState, setProductsState] = useState([])
    const hasProducts = productsState.length>0
 
    useEffect(()=>{

        fetch('https://fakestoreapi.com/products')
        .then((res)=>res.json())
        .then((productsArray) => 
        {
            const newProductState = productsArray.map((product)=>{return product.title })
            setProductsState(newProductState)       
        })      
        
        

         setTimeout (()=>{
            setProductsState([
                "tooth paste",
                "tooth brush",
                "mouth wash ",
                "dental floss",
                "mouth guard",
            ])
        },2000)  
        
    }, [])
*/
    
   
    return(
    <div>   
        
        <SomeData/>
        
        
        {/*   
        <Jsonmak/> 
        <Jsonmak2/>        
           


       
        <Button>yowold</Button> 
        <CountButton incrementBy= {1} buttonColor ={"blue"} />
        <CountButton incrementBy= {5} buttonColor ={"green"} />
        <CountButton incrementBy= {500} buttonColor ={"yellow"}/>
        

        {hasProducts ? <SearchBar products={productsState} /> : "loading"}        
         */}
         
        {/*  
        <SearchBar 
            products={ [
             'bike rack',
              "mountain bike",
              "tire ",
              "soccer stuff",
              "steroid",
            ]} />
        */}
        

   </div>
);

}
   

export default App