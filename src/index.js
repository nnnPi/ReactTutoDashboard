import React from "react";
// import App from "./components/App";
import {App2} from "./components/App";
import './Styles/global.css';
import './Styles/index.css';
import { createRoot } from 'react-dom/client';
import {BrowserRouter} from "react-router-dom"
//import { Box } from "@mui/material";
//import { tokens, Mood, useMode} from './theme';



const container = document.getElementById('root');
const root = createRoot(container); 
root.render(
  
            
    <BrowserRouter>
    <App2/>
    {/*<App tab="home" />*/}
    
    </BrowserRouter>
    
    
    
    );

    

