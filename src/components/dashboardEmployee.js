import React, {useState} from 'react';
import { useDashboardStyles } from "../styles/dashboardStyles"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import FilterListIcon from '@material-ui/icons/FilterList';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Image from "../assets/image.png"
import Ticket from "./ticket";
import Tooltip from '@material-ui/core/Tooltip';
import { priorities, statuses } from './ticketEnums';
import Chip from "./chip"
import { rootStyles } from "../styles/rootStyles"

const { red, orange, green } = rootStyles;

const DashboardEmployee = () => {
    const styles = useDashboardStyles();
    const [activeTab, setActiveTab] = useState(0);
    // eslint-disable-next-line
    const [tabs, setTabs] = useState(["Projects", "My tickets", "Closed tickets", "Ticket timeline"]);
    const [tickets, setTickets] = useState(
        [
            {
                name: "Create bro",
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
                name: "Make ligma",
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
                name: "Finish wigga",
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
            {
                name: "Create BRUH",
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
                name: "Make BRUH",
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
                name: "Finish BRUH",
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
                description: "Lorem I",
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
                description: "nigga",
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
    const [filteredTickets, setFilteredTickets] = useState([])
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
    }

    const handlePrioritySelect = (priority) => {
        if(priority) {
            const filtered = tickets.filter(item => item.priority === priority)
            setFilteredTickets([...filtered])
            setAnchorEl(null);
        } else {
            setFilteredTickets([])
            setAnchorEl(null);
        }
    }

    // MENU HANDLER BEGIN

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const toggleOpen = (id) => {
        const ticketsCopy = tickets;
        ticketsCopy[id].open = !ticketsCopy[id].open;
        setTickets([...ticketsCopy])
    }

    // MENU HANDLER END

    return ( 
        <div className={styles.container}>
            <div className={styles.headerWithTabs}>
                <div className={styles.communityImageDiv}>
                    <img className={styles.communityImage} src="https://source.unsplash.com/random/300x300" alt="Community"></img>
                </div>
                <div className={styles.communityNameWithTabs}>
                    <div className={styles.communityName}>ZettaFirm - QE23OP</div>
                    <div className={styles.tabs}>
                        {tabs ? tabs.map((item, i) => {
                            return <div key={i} className={activeTab === i ? styles.activeTab : styles.inactiveTab} onClick={() => setActiveTab(i)}>{item}</div>
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
                    <col></col>
                    <col width="20%"></col>
                    <col width="15%"></col>
                    <col width="10%"></col>
                    <col width="20%"></col>
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
                                            <ImportExportIcon onClick={() => sortTickets("priority")}></ImportExportIcon>
                                        </Tooltip>
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
                                            <MenuItem onClick={() => handlePrioritySelect("")}>None</MenuItem>
                                            <MenuItem onClick={() => handlePrioritySelect(priorities.HIGH)}>
                                                <Chip type="basic" color={red}>High</Chip>
                                            </MenuItem>
                                            <MenuItem onClick={() => handlePrioritySelect(priorities.MEDIUM)}>
                                                <Chip type="basic" color={orange}>Medium</Chip>
                                            </MenuItem>
                                            <MenuItem onClick={() => handlePrioritySelect(priorities.LOW)}>
                                                <Chip type="basic" color={green}>Low</Chip>
                                            </MenuItem>
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
                    {filteredTickets.length <= 0 ? tickets.map((ticket, i) => (
                        <Ticket ticketInfo={ticket} key={i} id={i} toggleOpen={toggleOpen}></Ticket>
                    )) : filteredTickets.map((ticket, i) => (
                        <Ticket ticketInfo={ticket} key={i} id={i} toggleOpen={toggleOpen}></Ticket>
                    ))}
                    {/* TICKET MAPPER END*/}
                    
                </TableBody>
            </Table>
        </div>
     );
}
 
export default DashboardEmployee;