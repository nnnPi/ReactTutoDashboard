import { useState,useEffect } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
    Box,
    List,
    ListItem,
    ListItemText,
    Typography,
    useTheme
}from "@mui/material";

import Header from "../../components/Elements/Header/Header";
import{tokens,Mood} from "../../theme";

const Calendar = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentEvents, setCurrentEvents] = useState([]);

    // manual color correction on calendar
    const Effect = useEffect(() => {   
     
                    // by default can't see white on white
                    //var(--fc-page-bg-color, #000);}

        document.documentElement.style.setProperty('--fc-page-bg-color',theme.palette.background.default);
        document.documentElement.style.setProperty('--fc-list-event-hover-bg-color',colors.grey[500]);
        
            
        
        {/* document.documentElement.style.setProperty('--fc-today-bg-color',colors.primary[500],); */}
        {/* Does not properly replace today's background color as the grid of the calendar misses a border if not default color*/}  
    
    }, [theme.palette.background.default,theme.palette.neutral.dark])
        
    // Click on date logic
        // adding something
    const handleDateClick = (selected) => {
        const title = prompt("Please enter something to put in the calendar");
        const calendarApi = selected.view.calendar;
            calendarApi.unselect();
            
            if (title) {
                calendarApi.addEvent ({
                    id :`${selected.dateStr}-${title}`,
                    title,
                    start : selected.start,
                    end : selected.endStr,
                    allDay : selected.allDay,              
                });
            }
        };
        //removing something
        const handleEventClick = (selected) => {
            if(window.confirm(`Are you sure you want to remove that stuff '${selected.event.title}'`)
            ){
                selected.event.remove();
                }
        };

    return <Box m="20px">
    <Header title="CALENDAR" subtitle="full Calendar Interactive Page"/>
        <Box display="flex" justifyContent="space-between">

            {/*Calendar Sidebar */}
                {/*title*/}
            <Box 
                flex ="1 1 20%"
                backgroundColor={colors.primary[400]}
                p="15px"
                borderRadius="4px"
                    sx={{
                        transition: `background ${Mood.Fancy.Timesec}s`,
                        height:"75vh",
                        overflowY:"scroll",                        
                    }}
            >

            <Typography variant="h5" 
                sx ={{ 
                    transition: `color ${Mood.Fancy.Timesec}s`,
                    transitionDelay: `${Mood.Fancy.Delaysec/2}s`,
                }}>
                    Events
            </Typography>



                {/*event boxes*/}

            <List>
                {currentEvents.map((event)=>(
                    <ListItem
                        key={event.id}
                        sx={{ backgroundColor : colors.primary[800],
                             margin:"10px 0",
                             borderRadius:"4px",
                             transition: `background ${Mood.Fancy.Timesec}s`,
                            }}
                    >
                        <ListItemText
                            sx ={{  transition: `color ${Mood.Fancy.Timesec}s`,
                                    transitionDelay: `${Mood.Fancy.Delaysec/2}s`,
                                }}
                            primary={event.title}
                            secondary={
                                <Typography>
                                    {formatDate(event.start,{
                                        year:"numeric",
                                        month:"short",
                                        day:"numeric",
                                    })}
                                </Typography>
                            }
                        >
                        </ListItemText>
                    </ListItem>
                ))} 
            </List>
            </Box>

            {/* CALENDAR */}
            <Box flex="1 1 100%" ml="15px"

            sx ={{ 
                transition: `color ${Mood.Fancy.Timesec}s`,
                transitionDelay: `${Mood.Fancy.Delaysec/2}s`,

                "& .fc .fc-list-sticky .fc-list-day > *:hover":
                {
                    backgroundColor : colors.grey[300],
                    transition: `background ${Mood.Fancy.Timesec}s`, 
                },
                "& .fc .fc-list-event >*": 
                {
                    backgroundColor : colors.grey[800],
                    transition: `background ${Mood.Fancy.Timesec}s`, 
                },
            }}           
            >  
                <FullCalendar
                    height="75vh"
                    plugins={[
                        dayGridPlugin,
                        timeGridPlugin,
                        interactionPlugin,
                        listPlugin
                    ]}
                    headerToolbar={{
                        left:"prev,next,today",
                        center:"title",
                        right:"dayGridMonth,timeGridWeek,timeGridDay,listMonth",
                    }}
                    initialView="dayGridMonth"
                    editable ={true}
                    selectable ={true}
                    selectMirror={true}
                    dayMaxEvents ={true}
                    select={handleDateClick}
                    eventClick={handleEventClick}
                    eventsSet = {(events)=> setCurrentEvents(events)}
                    initialEvents={[
                        { id:"1234", title:"All-day event", date :"2022-11-31"},
                        { id:"4321", title:"Time event", date: "2022-11-31"},
                    ]}
                />                
            </Box>
        </Box>
    </Box>
};

export default Calendar;