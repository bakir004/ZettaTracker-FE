import React, {useState, useEffect} from 'react'
import axios from "axios"
import {useTicketViewStyles} from "../styles/ticketViewStyles"
import { CircularProgress } from '@material-ui/core'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { makeStyles } from '@material-ui/core';
import {Link} from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import {rootStyles} from "../styles/rootStyles"
import AttachmentIcon from '@material-ui/icons/Attachment';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Chip from "./chip"
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';
import Subtask from "./subtask"
import { statuses, priorities } from './ticketEnums';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
// import CheckIcon from '@material-ui/icons/Check';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Subtitle from "./subtitle"
import SimpleTable from "./simpleTable"

const { darkestBlue, red, blue, green, orange } = rootStyles;

const useStyles = makeStyles({
    root: {
        color: blue,
        backgroundColor: blue
    },
    determinate: {
        backgroundColor: "lightgrey"
    }
  });

function LinearProgressWithLabel(props) {
    const classes = useStyles()
    return (
      <Box display="flex" alignItems="center">
        <Box width="100%">
          <LinearProgress variant="determinate" classes={{barColorPrimary: classes.root,determinate: classes.determinate}} {...props} />
        </Box>
      </Box>
    );
}

const TicketView = (props) => {
    const styles = useTicketViewStyles()
    const [ticket, setTicket] = useState({})
    const [loading, setLoading] = useState(true)
    //eslint-disable-next-line
    const [progress, setProgress] = useState();
    //eslint-disable-next-line
    const [subtasks, setSubtasks] = useState([
        {
            name: "Add submit button",
            status: statuses.IN_PROGRESS,
        },
        {
            name: "Add create ticket endpoint",
            status: statuses.COMPLETED,
        },
    ])

    useEffect(() => {
        axios.get(`http://localhost:3001/ticket/${props.match.params.ticketId}`)
            .then(response => {
                const data = response.data
                axios.get(`http://localhost:3001/user/${data.reporterId}`)
                    .then(res1 => {
                        data.reporter = res1.data.firstName + " " + res1.data.lastName
                        axios.get(`http://localhost:3001/user/${data.assigneeId}`)
                        .then(res2 => {
                            data.assignee = res2.data.firstName + " " + res2.data.lastName
                            axios.get(`http://localhost:3001/project/${data.projectId}`)
                            .then(res3 => {
                                data.project = res3.data.name
                                setTicket(data)
                            })
                        })
                    })
            })
        
        const completedSubtasks = subtasks.filter((item) => item.status === statuses.COMPLETED).length
        const percentageCompleted = completedSubtasks / subtasks.length * 100
        setProgress(percentageCompleted)
        //eslint-disable-next-line
    }, [])

    useEffect(() => {
        if(ticket.name) {
            setTimeout(() => {
                setLoading(false)
            }, 750)
        }
    }, [ticket])

    const assignToMe = () => {

    }

    const setSubtaskStatus = (index, status) => {
        if(index === -1) return
        const subtasksCopy = subtasks
        subtasksCopy[index].status = status
        setSubtasks([...subtasksCopy])
        const completedSubtasks = subtasks.filter((item) => item.status === statuses.COMPLETED).length
        const percentageCompleted = completedSubtasks / subtasks.length * 100
        setProgress(percentageCompleted)
    }

    const removeSubtask = () => {

    }

    const handleChange = (value, index) => {
        const subtasksCopy = subtasks
        subtasksCopy[index].name = value
        setSubtasks([...subtasksCopy])
    }

    const [mainInfoOpen, setMainInfoOpen] = useState(true)
    const [subtasksOpen, setSubtasksOpen] = useState(true)
    const [commentsOpen, setCommentsOpen] = useState(true)
    const [attachmentsOpen, setAttachmentsOpen] = useState(true)

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (status) => {
        if(status)
            ticket.status = status
        setAnchorEl(null);
    };

    const toggleCommentsOpen = () => setCommentsOpen(!commentsOpen)
    const toggleSubtasksOpen = () => setSubtasksOpen(!subtasksOpen)
    const toggleMainInfoOpen = () => setMainInfoOpen(!mainInfoOpen)
    const toggleAttachmentsOpen = () => setAttachmentsOpen(!attachmentsOpen)

    return (
        <div className={styles.container}>
            <div className={styles.backButtonWrapper}>
                <Link className={styles.backButton} to="/dashboard">
                    <ChevronLeftIcon className={styles.backButtonArrow}></ChevronLeftIcon>
                    <div className={styles.backButtonText}>Back</div>
                </Link>
            </div>
            {loading ? <div className={styles.loadingContainer}>
                <CircularProgress classes={{root: styles.circularProgress}}></CircularProgress>
            </div> : 
            <div className={styles.innerContainer}>
                <div className={styles.mainContent}>
                    <div className={styles.breadcrumbWrapper}>
                        <Breadcrumbs aria-label="breadcrumb" style={{fontFamily: "montserrat"}}>
                            <Link className={styles.breadcrumbLink} to="/dashboard">
                                Projects
                            </Link>
                            <Link className={styles.breadcrumbLink} to={`/project/${ticket.projectId}`}>
                                <AccountTreeIcon style={{width: "20px", height: "20px", marginRight: "5px"}}></AccountTreeIcon>
                                ZettaTracker
                            </Link>
                            <Link className={styles.breadcrumbLink} to={`/project/${ticket.projectId}`}>
                                Frontend
                            </Link>
                            <Typography style={{fontFamily: "montserrat", color: darkestBlue}}>ZT-420</Typography>
                        </Breadcrumbs>
                    </div>

                    <div className={styles.ticketName}>
                        {ticket.name}
                    </div>

                    <div className={styles.ticketActions}>
                        <Chip type="basic" color={darkestBlue}>
                            <AttachmentIcon style={{width: "20px", height: "20px"}}></AttachmentIcon>
                            <div>Attach</div>
                        </Chip>
                        <Chip type="basic" color={darkestBlue}>
                            <LibraryAddCheckIcon></LibraryAddCheckIcon>
                            <div>Add subtask</div>
                        </Chip>
                        <Chip type="basic" color={darkestBlue}>
                            <EditIcon></EditIcon>
                            <div>Edit ticket</div>
                        </Chip>
                        <Chip type="basic" color={"white"} bgColor={red}>
                            <DeleteForeverIcon style={{width: "20px", height: "20px"}}></DeleteForeverIcon>
                            <div>Delete ticket</div>
                        </Chip>
                    </div>

                    <div className={styles.ticketDescription}>
                        {ticket.description}
                    </div>
                    
                    <Subtitle 
                        actions={
                            [
                                {
                                    tooltip: "Add subtask",
                                    icon: <AddIcon></AddIcon>,
                                    onClickFunction: function(){console.log("lmao")}
                                },
                            ]
                        }
                        expandableContent={true}
                        fieldOpen={subtasksOpen}
                        toggleFunction={toggleSubtasksOpen}
                    >Subtasks</Subtitle>

                    <div className={subtasksOpen ? styles.collapsible : styles.collapsed}>
                        <div className={styles.subtaskProgress}>
                            <div className={styles.subtaskProgressDone}>Done {progress}%</div>
                            <LinearProgressWithLabel value={progress}/>
                        </div>
                        <div className={styles.subtasksWrapper}>
                            {subtasks ? subtasks.map((item, i) => {
                                return <Subtask subtask={item} key={i} index={i} handleChange={handleChange} removeSubtask={removeSubtask} setSubtaskStatus={setSubtaskStatus}></Subtask>
                            }) : null}
                        </div>
                    </div>
                    
                    <Subtitle 
                        actions={
                            [
                                {
                                    tooltip: "Add comment",
                                    icon: <AddIcon></AddIcon>,
                                    onClickFunction: function(){console.log("lmao")}
                                },
                            ]
                        }
                        expandableContent={true}
                        fieldOpen={commentsOpen}
                        toggleFunction={toggleCommentsOpen}
                    >Comments</Subtitle>

                    <div className={commentsOpen ? styles.collapsible : styles.collapsed}>
                        coment
                    </div>
                </div>

                <div className={styles.sideContent}>
                    <Subtitle 
                        actions={
                            [
                                {
                                    tooltip: "Edit info",
                                    icon: <EditIcon style={{width: "18px", height: "18px"}}></EditIcon>,
                                    onClickFunction: function(){console.log("lmao")}
                                },
                            ]
                        }
                        expandableContent={true}
                        fieldOpen={mainInfoOpen}
                        toggleFunction={toggleMainInfoOpen}
                    >Main info</Subtitle>

                    <div className={mainInfoOpen ? styles.collapsible : styles.collapsed}>
                        <SimpleTable
                            rows={[
                                {
                                    field: "Priority",
                                    value: <Chip type="basic" bgColor={ticket.priority === priorities.HIGH ? red : ticket.priority === priorities.MEDIUM ? orange : green}>{ticket.priority}</Chip>
                                },
                                {
                                    field: "Status",
                                    value: (
                                        <div className={styles.ticketStatus} onClick={handleClick}>
                                            <div className={styles.ticketStatusText} style={{color: ticket.status === statuses.OPEN ? red : ticket.status === statuses.IN_PROGRESS ? orange : green}}>{ticket.status}</div>
                                            <div className={styles.ticketStatusIconWrapper}>
                                                <ExpandMoreIcon className={styles.ticketStatusIcon} style={{color: ticket.status === statuses.OPEN ? red : ticket.status === statuses.IN_PROGRESS ? orange : green}}></ExpandMoreIcon>
                                            </div>
                                        </div>
                                    )
                                },
                                {
                                    field: "Reporter",
                                    value: <Chip type="avatar" avatar="" bgColor={blue}>{ticket.reporter}</Chip>
                                },
                                {
                                    field: "Assignee",
                                    value: ticket.assignee ? (
                                        <Chip type="avatar" avatar="" bgColor={green}>{ticket.assignee}</Chip> 
                                    ) : (
                                        <div className={styles.button} onClick={assignToMe}>Assign to me</div>
                                    )
                                },
                                {
                                    field: "Project",
                                    value: <>
                                        <AccountTreeIcon style={{width: "18px", height: "18px", marginRight: "5px"}}></AccountTreeIcon>
                                        ZettaTracker
                                    </>
                                }
                            ]}
                        ></SimpleTable>
                    </div>
                    
                    <Subtitle 
                        actions={
                            [
                                {
                                    tooltip: "Add attachment",
                                    icon: <AddIcon></AddIcon>,
                                    onClickFunction: function(){console.log("lmao")}
                                },
                            ]
                        }
                        expandableContent={true}
                        fieldOpen={mainInfoOpen}
                        toggleFunction={toggleAttachmentsOpen}
                    >Attachments</Subtitle>
                    
                    <div>
                        atachmen
                    </div>
                </div>

                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={() => handleClose("")}
                >
                    <MenuItem onClick={() => handleClose(statuses.OPEN)} className={styles.ticketStatusMenuItem} style={{color: red}}>Open</MenuItem>
                    <MenuItem onClick={() => handleClose(statuses.IN_PROGRESS)} className={styles.ticketStatusMenuItem} style={{color: orange}}>In progress</MenuItem>
                    <MenuItem onClick={() => handleClose(statuses.COMPLETED)} className={styles.ticketStatusMenuItem} style={{color: green}}>Completed</MenuItem>
                </Menu>
            </div>
            }
        </div>
    )
}

export default TicketView;