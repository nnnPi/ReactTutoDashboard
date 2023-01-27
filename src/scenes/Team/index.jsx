import { Box, Typography,useTheme,CssBaseline} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";
import {tokens,Mood} from "../../theme";
import {mockDataTeam} from "../../components/Datas/mockData/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Elements/Header/Header";


const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns= [
        { field:"id", headerName:"ID"},
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
        {   field:"access",
            headerName:"Access Level",
            flex:1, 
            renderCell:({row:{access}})=>
            {
                return (
                    <Box
                        width="60%"
                        m="0 auto"
                        p="5px"
                        display="flex"
                        justifyContent="center"
                        backgroundColor={
                            access==="admin"
                                ? colors.greenAccent[600]
                                : colors.greenAccent[700]                                
                        }
                        borderRadius="4px"
                    >
                        {access==="admin" && <AdminPanelSettingsOutlinedIcon/>}
                        {access==="manager" && <SecurityOutlinedIcon/>}
                        {access==="user" && <LockOpenOutlinedIcon/>}
                        <Typography color ={colors.grey[100]} sx={{ml:"5px"}}>
                            {access}
                        </Typography>
                    </Box>
                )
            }      
        },
    ];

    return (
        
        <Box m="20px">
            <CssBaseline/>
            <Header title="TEAM" subtitle="Managing the Team Members"/>
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
                            transition: `background ${Mood.Fancy.Timesec}s`,
                        },
                        "& .MuiDataGrid-footerContainer":{
                            borderTop: "none",
                            backgroundColor: colors.primary[800],
                            transition: `background ${Mood.Fancy.Timesec*2}s`,
                        },
                        "& .name-column--cell" : {
                            color : colors.greenAccent[300],
                            transition: `color ${Mood.Fancy.Timesec}s`,
                            transitionDelay: `color ${Mood.Fancy.Delaysec/2}s`,
                        }, 
                       

                       
                }}>


                <DataGrid
                    checkboxSelection
                    rows={mockDataTeam}
                    columns={columns}
                    sx={{
                        "& .MuiDataGrid-cell": {
                            borderBottom:"none",  
                            transition: `color ${Mood.Fancy.Timesec}s`,
                            transitionDelay: `${Mood.Fancy.Delaysec}s`,                         
                        },
                        "& .MuiDataGrid-cell:focus-within" :{
                            outline : "none",

                        },
                        "&.MuiDataGrid-cell:focus":{
                            outline :"none",

                        },
                        "& .MuiDataGrid-columnHeaderTitleContainer":{
                            transition: `color ${Mood.Fancy.Timesec}s`,
                            transitionDelay: `${Mood.Fancy.Delaysec/2}s`,  

                        },
                        


                       
                }}
                    
                />
            </Box>
        </Box>
    )

};

export default Team;