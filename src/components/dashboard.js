import React, { useState, useEffect } from 'react';
import { useDashboardStyles } from "../styles/dashboardStyles"
import { priorities } from './ticketEnums';
import { rootStyles } from "../styles/rootStyles"
import TicketDrawer from './ticketDrawer';
import CloseIcon from '@material-ui/icons/Close';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { MuiThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import DashboardTable from './dashboardTable';
import DashboardProjects from './dashboardProjects';
import axios from "axios"
import CircularProgress from '@material-ui/core/CircularProgress';

const { blue } = rootStyles;

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
        {value === index && (
            <>
                {children}
            </>
        )}
        </div>
    );
}

const Dashboard = (props) => {
    const styles = useDashboardStyles();
    const theme = createTheme({
        palette: {
            primary: {
                main: blue
            }
        }
    });
    // eslint-disable-next-line
    const [tabs, setTabs] = useState(["My tickets", "My projects", "Closed tickets", "ZettaTracker timeline"]);
    const [tickets, setTickets] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // props.history.push("/")
        // console.log(window.location.pathname)
        axios.get("http://localhost:3001/ticket")
            .then(res => {
                const data = res.data
                data.forEach((ticket, i) => {
                    axios.get(`http://localhost:3001/user/${ticket.assigneeId}`)
                        .then(res => {
                            data[i].assignee = res.data.firstName + " " + res.data.lastName
                            setTickets(data)
                        })
                })
            })
    }, [])

    useEffect(() => {
        if(tickets.length > 0) {
            setTimeout(() => {
                setLoading(false)
            }, 750)
        }
    }, [tickets.length])

    //#region FILTER AND SORT
    const [sorted, setSorted] = useState(false)
    const sortTickets = (criteria) => {
        let ticketsCopy = [];
        let index = 0;
        switch(criteria) {
            case "priority": {
                if(!sorted) {
                    tickets.forEach(item => {
                        if(item.priority === priorities.LOW) {
                            ticketsCopy.unshift(item);
                            index++;
                        } else if(item.priority === priorities.HIGH) {
                            ticketsCopy.push(item);
                        } else {
                            ticketsCopy.splice(index, 0, item);
                        }
                    })
                } else {
                    ticketsCopy = tickets;
                    ticketsCopy.reverse();
                    setTickets([...ticketsCopy])
                }
                break;
            }
            default: {
                return null
            }
        }
        setTickets([...ticketsCopy])
        setSorted(true)
        handleClose()
    }
    const [filteredTickets, setFilteredTickets] = useState([])
    const handleFiltering = (criteriaName, criteriaValue) => {
        switch(criteriaName) {
            case "priority": {
                if(criteriaValue) {
                    const filtered = tickets.filter(item => item.priority === criteriaValue)
                    setFilteredTickets([...filtered])
                    setAnchorEl(null);
                } else {
                    setFilteredTickets([])
                    setAnchorEl(null);
                }
                break;
            }
            default: {
                return
            }
        }
        handleClose()
    }
    //#endregion

    //#region MENU HANDLERS

    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    //#endregion

    //#region DRAWER HANDLER
    const [openDrawer, setOpenDrawer] = useState(false)
    const [ticketInfo, setTicketInfo] = useState({})
    const toggleDrawer = (open, ticketInfo) => {
        setOpenDrawer(open)
        setTicketInfo(ticketInfo)
    }
    //#endregion

    //#region SEARCH
    const [search, setSearch] = useState("")
    const handleSearchChange = (string) => {
        setSearch(string)
        let filteredTickets = tickets.filter((item) => 
            item.name.toLowerCase().includes(string.toLowerCase()) ||
            item.priority.toLowerCase().includes(string.toLowerCase()) ||
            item.status.toLowerCase().includes(string.toLowerCase()) ||
            item.assignee.name.toLowerCase().includes(string.toLowerCase())
        )
        setFilteredTickets([...filteredTickets])
    }
    //#endregion

    //#region TABULATION

    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleChangeIndex = (index) => {
        setValue(index);
    };

    //#endregion

    return ( 
        <div className={styles.container}>
            <div className={styles.headerWithTabs}>
                <div className={styles.communityImageDiv}>
                    <img className={styles.communityImage} src="https://source.unsplash.com/random/300x300" alt="Community"></img>
                </div>
                <div className={styles.communityNameWithTabs}>
                    <div className={styles.communityName}>ZettaFirm - QE23OP</div>
                    <div className={styles.tabs}>
                        <MuiThemeProvider theme={theme}>
                            <Tabs
                                classes={{ root: styles.tabsRoot }}
                                value={value}
                                indicatorColor="primary"
                                textColor="primary"
                                onChange={handleChange}
                                aria-label="disabled tabs example"
                            >
                                {tabs ? tabs.map((item, i) => {
                                    return <Tab key={i} classes={{root: styles.tabRoot}} label={item}></Tab>
                                }) : null}
                            </Tabs>
                        </MuiThemeProvider>
                    </div>
                </div>
            </div>
            <SwipeableViews
                axis={'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0}>
                    <div className={styles.headerWithActions}>
                        <div className={styles.addTicket}>Add ticket</div>
                        <div className={styles.inputFieldDiv}>
                            <input className={styles.inputField} placeholder="Search" value={search} onChange={(e) => handleSearchChange(e.target.value)}></input>
                            <div className={styles.inputClear} onClick={() => handleSearchChange("")}>
                                <CloseIcon></CloseIcon>
                            </div>
                        </div>
                    </div>
                    {loading ? 
                    <div className={styles.loadingContainer}>
                        <CircularProgress classes={{root: styles.circularProgress}}/>
                    </div> :
                    <DashboardTable 
                        tickets={tickets} 
                        filteredTickets={filteredTickets} 
                        handleClick={handleClick} 
                        handleClose={handleClose} 
                        handleFiltering={handleFiltering}
                        anchorEl={anchorEl}
                        toggleDrawer={toggleDrawer}
                        sortTickets={sortTickets}
                    ></DashboardTable>}
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <DashboardProjects></DashboardProjects>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <DashboardTable 
                        tickets={tickets} 
                        filteredTickets={filteredTickets} 
                        handleClick={handleClick} 
                        handleClose={handleClose} 
                        handleFiltering={handleFiltering}
                        anchorEl={anchorEl}
                        toggleDrawer={toggleDrawer}
                        sortTickets={sortTickets}
                    ></DashboardTable>
                </TabPanel>
                <TabPanel value={value} index={3}>
                </TabPanel>
            </SwipeableViews>

            
            
            <TicketDrawer ticketInfo={ticketInfo} open={openDrawer} toggleDrawer={toggleDrawer}></TicketDrawer>
        </div>
     );
}
 
export default Dashboard;