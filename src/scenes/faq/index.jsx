import {Box,useTheme,Typography} from "@mui/material";
import Header from "../../components/Elements/Header/Header"
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {tokens} from "../../theme"

const FAQ = () => {
    const theme= useTheme();
    const colors=tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions Page"/>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Have you ever heard of Mr Poux ?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        He is a piece of trash real estate manager who eat shit every day.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Does smashing Mr Poux's head on a pile of shit would make the pile of shit smell worse ?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        It is not known for sure, one would have to experiment and give us the results, it is estimated that the result would be a worse smelling pile of shit, but the predictions are diverging concerning the hypothesis of Mr Poux's head being smashed on a pile on his own shit.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Does you think the world would be a better place without Mr Poux ?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        That's again a very difficult question, of course for anyone that had to deal with the aforementionned parasite, the world would feel like a better place, but it also mean that one person one earth would become the shittest worker in the real estate field, so for that person maybe the world would suck.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        How may times do you have to ask Mr Poux a question before he answer ?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        If you try to stay polite, civil, or neutral, Mr Poux doesn't answer questions, even if he is required by the law to do so. But if you call him a miserable failure during one hour in front of his other colleagues and clients, then after a bit of bitching around he would eventually do the job for which he is paid. If it doesn't work try giving him a few low kicks in the leg , or tear his ear.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Why is Mr Poux such a piece of shit ?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        We tried asking the question to the piece of shit himself, and after a few low kicks he tried to justify his general mediocrity by cowardness and stupidity.
                    </Typography>
                </AccordionDetails>
            </Accordion>  
        </Box>
    );
};

export default FAQ;