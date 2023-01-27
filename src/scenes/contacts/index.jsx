import { Box } from "@mui/material";
import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import {tokens,Mood} from "../../theme";
import {mockDataContacts} from "../../components/Datas/mockData/mockData";
import Header from "../../components/Elements/Header/Header";
import { useTheme } from "@emotion/react";


const Contacts = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns= [
        { field:"id", headerName:"ID", flex:0.5},
        { field: "registrarId", headerName : "Registrar ID"},
        {   field:"name",
            headerName:"Name",
            flex:1,
            cellClassName:"name-column--cell",
        },
        {   field:"age",
            headerName:"age",
            type:"number",
            headerAlign:"left",
            align:"left",
        },
        {   field:"phone",
            headerName:"Phone Number",
            flex:1,        
        },
        {   field:"email",
            headerName:"Email",
            flex:1,        
        },
        {   field:"address",
            headerName:"Address",
            flex:1,        
        },
        {   field:"city",
            headerName:"City",
            flex:1,        
        },
        {   field:"zipCode",
            headerName:"ZipCode",
            flex:1,        
        },
        
];

    return (        
        <Box m="20px">            
            <Header title="CONTACTS" subtitle="List of Contacts for Future things"/>
            <Box
                m="40px 0 0 0"
                height="75vh" sx={{
                        "& .MuiDataGrid-root": {
                            border:"none",
                        },
                        "& .MuiDataGrid-cell": {
                            borderBottom:"none", 
                        },            
                        "& .MuiDataGrid-columnHeaders": {
                            backgroundColor: colors.primary[800],
                            transition: `background ${Mood.Fancy.Timesec*2}s`,
                        },
                        "& .MuiDataGrid-virtualScroller":{
                            backgroundColor: colors.primary[400],
                            transition: `${Mood.Fancy.Timesec}s`,
                        },
                        "& .MuiDataGrid-footerContainer":{
                            borderTop: "none",
                            backgroundColor: colors.primary[800],
                            transition: `background ${Mood.Fancy.Timesec*2}s`,
                        },
                        "& .name-column--cell" : {
                            color : colors.greenAccent[300],
                            transition: `color ${Mood.Fancy.Timesec}s`,
                            transitionDelay: ` ${Mood.Fancy.Delaysec/2}s`,
                        },                      
    
                }}>

                <DataGrid
                    checkboxSelection
                    rows={mockDataContacts}
                    columns={columns}
                    sx={{
                        "& .MuiDataGrid-cell": {
                            borderBottom:"none",  
                            transition: `color ${Mood.Fancy.Timesec}s`,
                            transitionDelay: `${Mood.Fancy.Delaysec/2}s`,                         
                        },
                        "& .MuiDataGrid-cell:focus-within" :{
                            outline : "none",

                        },
                        "&.MuiDataGrid-cell:focus":{
                            outline :"none",

                        },
                        "& .MuiDataGrid-columnHeaderTitleContainer":{
                            transition: `color ${Mood.Fancy.Timesec}s`,
                            transitionDelay: ` ${Mood.Fancy.Delaysec/2}s`,  

                        },
                        "& .MuiDataGrid-toolbarContainer .MuiButton-text":{
                            color:`${colors.grey[100]} !important`,
                            transition: `color ${Mood.Fancy.Timesec}s !important`,
                            transitionDelay: `${Mood.Fancy.Delaysec/2}s !important`,
                        },                       
                    }}
                    components={{Toolbar:GridToolbar}}                    
                />        
            </Box>
        </Box>
    )
};

export default Contacts;