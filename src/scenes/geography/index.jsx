import {Box} from "@mui/material";
import Header from  "../../components/Elements/Header/Header";
import GeographyChart from "../../components/Elements/GeographyChart";

const Geography =() => {
    
    return (
        <Box m="20px">
            <Header title="Geography Chart" subtitle ="Cool Responsive Choropleth" />
            <Box height="75vh">
                <GeographyChart/>
            </Box>


        </Box>
        


    )
}

export default Geography;