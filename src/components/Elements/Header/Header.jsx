import {Typography, Box, useTheme} from "@mui/material";
import {tokens,Mood} from "../../../theme.js";

const Header =({title, subtitle }) => {
    const theme = useTheme ();
    const colors = tokens(theme.palette.mode);
    return (
        <Box mb="30px">
            <Typography
                variant="h2"
                color={colors.grey[100]} 
                fontWeight="bold" 
                sx ={{
                    mb:"5px",
                    transition: `color ${Mood.Fancy.Timesec}s`,
                    transitionDelay: `${Mood.Fancy.Delaysec/2}s`,
                }}
            >
                {title}
            </Typography>
            <Typography
                variant="h5" 
                color={colors.greenAccent[400]}
                sx ={{
                    transition: `color ${Mood.Fancy.Timesec}s`,
                    transitionDelay: `${Mood.Fancy.Delaysec/2}s`,
                    }}>
                {subtitle}
            </Typography>
    
        </Box>
    );
};

export default Header