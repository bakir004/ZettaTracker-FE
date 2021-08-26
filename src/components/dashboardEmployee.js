import React, {useState} from 'react';
import {useDashboardStyles} from "../styles/dashboardStyles"
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import FilterListIcon from '@material-ui/icons/FilterList';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import Menu from '@material-ui/core/Menu';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import MyChip from "./chip"
import Image from "../assets/image.png"
import Ticket from "./ticket";
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: '#FF7070',
      color: "white",
      fontSize: "0.75rem",
      fontFamily: "Montserrat",
    },
  }));

const Dashboard = () => {

    const priorities = {
        HIGH: "High",
        MEDIUM: "Medium",
        LOW: "Low"
    }
    const statuses = {
        OPEN: "Open",
        IN_PROGRESS: "In Progress",
        CLOSED: "Closed"
    }

    const styles = useDashboardStyles();
    const [activeTab, setActiveTab] = useState(0);
    const [active, setActive] = useState(false);
    const [tabs, setTabs] = useState(["Projects", "My tickets", "Closed tickets", "Ticket timeline"]);
    const [tickets, setTickets] = useState(
        [
            {
                name: "Create UI",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                priority: priorities.HIGH,
                dueDate: new Date(),
                status: statuses.OPEN,
                assignee: {
                    name: "Zakir Cinjarevic",
                    image: Image
                },
                open: false,
            },
            {
                name: "Make Backend",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                priority: priorities.MEDIUM,
                dueDate: new Date(),
                status: statuses.IN_PROGRESS,
                assignee: {
                    name: "Zakir Cinjarevic",
                    image: Image
                },
                open: false,
            },
            {
                name: "Finish frontend",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                priority: priorities.LOW,
                dueDate: new Date(),
                status: statuses.CLOSED,
                assignee: {
                    name: "Zakir Cinjarevic",
                    image: Image
                },
                open: false,
            },
        ]
    )
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return ( 
        <div className={styles.container}>
            <div className={styles.headerWithTabs}>
                <div className={styles.communityImageDiv}>
                    <img className={styles.communityImage} src="https://source.unsplash.com/random/300x300"></img>
                </div>
                <div className={styles.communityNameWithTabs}>
                    <div className={styles.communityName}>ZettaFirm - QE23OP</div>
                    <div className={styles.tabs}>
                        {tabs ? tabs.map((item, i) => {
                            return <div className={activeTab === i ? styles.activeTab : styles.inactiveTab} onClick={() => setActiveTab(i)}>{item}</div>
                        }) : null}
                    </div>
                </div>
            </div>
            <div className={styles.headerWithActions}>
                <div className={styles.addTicket}>+ Add ticket</div>
                <input className={styles.inputField} placeholder="Search"></input>
            </div>





            <Table aria-label="simple table">
                <colgroup>
                    <col width="auto" />
                    <col width="auto" />
                    <col width="auto" />
                </colgroup>
                <TableHead>
                    <TableRow className={styles.tableRow}>
                        <TableCell className={styles.iconCell}>
                            <div className={styles.icon}></div>
                        </TableCell>
                        <TableCell>Ticket name</TableCell>
                        <TableCell>Assignee</TableCell>
                        <TableCell>
                            <div className={styles.tableHeaderCell}>
                                <div className={styles.tableHeaderCellText}>Priority</div>
                                <div className={styles.tableHeaderActions}>
                                    <div className={styles.action}>
                                        <Tooltip arrow title="Sort" placement="top">
                                            <ImportExportIcon onClick={handleClick}></ImportExportIcon>
                                        </Tooltip>
                                        
                                        <Menu
                                            id="simple-menu"
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={Boolean(anchorEl)}
                                            onClose={handleClose}
                                        >
                                            <MenuItem onClick={handleClose}>High</MenuItem>
                                            <MenuItem onClick={handleClose}>Medium</MenuItem>
                                            <MenuItem onClick={handleClose}>Low</MenuItem>
                                        </Menu>
                                        
                                    </div>
                                    <div className={styles.action}>
                                        <Tooltip arrow title="Filter" placement="top">
                                            <FilterListIcon onClick={handleClick}></FilterListIcon>
                                        </Tooltip>
                                        <Menu
                                            id="simple-menu"
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={Boolean(anchorEl)}
                                            onClose={handleClose}
                                        >
                                            <MenuItem onClick={handleClose}>High</MenuItem>
                                            <MenuItem onClick={handleClose}>Medium</MenuItem>
                                            <MenuItem onClick={handleClose}>Low</MenuItem>
                                        </Menu>
                                    </div>
                                </div>
                            </div>
                        </TableCell>
                        <TableCell>Due date</TableCell>
                        <TableCell>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* TICKET MAPPER BEGIN*/}
                    {tickets.map((row, i) => (
                        <Ticket ticketInfo={row} key={i}></Ticket>
                    ))}
                    {/* TICKET MAPPER END*/}

                    
                </TableBody>
            </Table>
        </div>
     );
}
 
export default Dashboard;