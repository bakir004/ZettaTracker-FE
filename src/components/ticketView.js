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
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Subtitle from "./subtitle"
import SimpleTable from "./simpleTable"
import Comment from "./comment"
import {Image} from "cloudinary-react"
import { saveAs } from "file-saver";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getIcon } from './fileExtensionIconGetter';
import CloseIcon from '@material-ui/icons/Close';
import Tooltip from "@material-ui/core/Tooltip";

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
            <Box width="100%" style={{paddingBottom: "5px"}}>
                {/* eslint-disable-next-line */}
                <LinearProgress variant="determinate" classes={{barColorPrimary: classes.root,determinate: classes.determinate}} {...props} />
            </Box>
        </Box>
    );
}

const TicketView = (props) => {
    const styles = useTicketViewStyles()
    const [ticket, setTicket] = useState({})
    const [loading, setLoading] = useState(true)
    const [progress, setProgress] = useState();

    //#region STATE-MANAGEMENT

    useEffect(() => {
        getTicket(props.match.params.ticketId)
        //eslint-disable-next-line
    }, [])

    const getTicket = (id) => {
        axios.get(`http://localhost:3001/ticket/${id}`)
            .then(response => {
                const data = response.data
                setTicket(data)
            })
    }

    useEffect(() => {
        if(ticket.name) {
            setTimeout(() => {
                setLoading(false)
                refreshSubtasksProgress()
            }, 750)
        }
        //eslint-disable-next-line
    }, [ticket.name])

    const updateTicket = (newTicket) => {
        console.log(newTicket)
        axios.put(`http://localhost:3001/ticket/`, newTicket ? newTicket : ticket)
            .then(res => {
                console.log("updated")
            })
    }

    const refreshSubtasksProgress = () => {
        const completedSubtasks = ticket.subtasks.filter((item) => item.status === statuses.COMPLETED || item.status === statuses.CLOSED).length
        const percentageCompleted = Math.round(completedSubtasks / ticket.subtasks.length * 100)
        setProgress(percentageCompleted)
    }

    //#endregion

    //#region SUBTASK-HANDLERS

    const setSubtaskStatus = (index, status) => {
        if(index === -1) return
        const ticketCopy = ticket
        ticketCopy.subtasks[index].status = status
        setTicket({...ticketCopy})
        updateTicket(ticketCopy)
        refreshSubtasksProgress()
    }
    const removeSubtask = (index) => {
        const ticketCopy = ticket
        ticketCopy.subtasks.splice(index, 1);
        setTicket({...ticketCopy})
        updateTicket(ticketCopy)
        refreshSubtasksProgress()
    }
    const addSubtask = () => {
        const ticketCopy = ticket
        ticketCopy.subtasks.push({
            name: "New subtask",
            status: statuses.OPEN
        })
        setTicket({...ticketCopy})
        updateTicket(ticketCopy)   
        refreshSubtasksProgress()     
    }
    const handleChange = (value, index) => {
        const ticketCopy = ticket
        ticketCopy.subtasks[index].name = value
        setTicket({...ticketCopy})
    }

    //#endregion

    //#region MENU-HANDLERS

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (status) => {
        if(status)
            ticket.status = status
        setAnchorEl(null);
    };

    //#endregion

    //#region FILE-UPLOAD

    const getExtension = (fileName) => {
        console.log(fileName)
        var re = /(?:\.([^.]+))?$/;
        console.log(re.exec(fileName)[1])
        return re.exec(fileName)[1]
    }

    const onFileUpload = (e) => {
        const formData = new FormData()
        formData.append("file", e.target.files[0])
        formData.append("upload_preset", "ZettaTracker")

        axios.post("https://api.cloudinary.com/v1_1/dhstlph6l/upload", formData)
            .then(res => {
                const file = {
                    url: res.data.secure_url, 
                    format: res.data.format ? res.data.format : getExtension(res.data.public_id), 
                    name: res.data.original_filename, 
                    public_id: res.data.public_id, 
                    icon: res.data.format ? getIcon(res.data.format) : getIcon(getExtension(res.data.public_id))
                }
                const ticketCopy = ticket
                ticketCopy.attachments.push(file)
                setTicket({...ticketCopy})
                updateTicket(ticketCopy)
            })
    }

    const downloadFile = ({fileName, url}) => {
        saveAs(url, fileName);
    }

    const onFileDestroy = (fileDetails) => {
        axios.post("http://localhost:3001/cloudinary/remove", fileDetails)
            .then(res => {
                console.log("done")
            })
    }

    //#endregion

    const assignToMe = () => {

    }

    const addComment = () => {
        const ticketCopy = ticket
        ticketCopy.comments.push({
            user: {
                _id: "6d67d0a888d4fc276cd2a430",
                firstName: "Zakir",
                lastName: "Cinjarevic",
                userInfo: "8d67d0a888d4fc276cd2a430"
            },
            timestamp: "Today",
            text: "",
            editing: true
        })
        setTicket({...ticketCopy})
    }

    const handleCommentChange = (value, index) => {
        const ticketCopy = ticket
        ticketCopy.comments[index].text = value
        setTicket({...ticketCopy})
    }
    const disableCommentEditing = (index) => {
        const ticketCopy = ticket
        delete ticketCopy.comments[index].editing
        setTicket({...ticketCopy})
        updateTicket(ticketCopy)
    }
    const handleRemoveComment = (index) => {
        const ticketCopy = ticket;
        ticketCopy.comments.splice(index, 1)
        setTicket({...ticketCopy})
        updateTicket(ticketCopy)
    }


    const removeAttachment = (file, index) => {
        onFileDestroy(file)
        const ticketCopy = ticket
        ticketCopy.attachments.splice(index, 1)
        setTicket({...ticketCopy})
        updateTicket()
    }

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
                        <Chip type="basic" color={darkestBlue} onClickFunc={addSubtask}>
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
                                    onClickFunction: addSubtask
                                },
                            ]
                        }
                    >Subtasks ({ticket.subtasks.length})</Subtitle>

                    {ticket.subtasks ? ticket.subtasks.length > 0 ? 
                        <>
                            <div className={styles.subtaskProgress}>
                                <div className={styles.subtaskProgressDone}>Done {progress}%</div>
                                <LinearProgressWithLabel value={progress}/>
                            </div>
                            <div className={styles.subtasksWrapper}>
                                {ticket.subtasks ? ticket.subtasks.map((item, i) => {
                                    return <Subtask subtask={item} key={i} index={i} updateTicket={updateTicket} handleChange={handleChange} removeSubtask={removeSubtask} setSubtaskStatus={setSubtaskStatus}></Subtask>
                                }) : null}
                            </div>
                        </> :
                        <div className={styles.noSubtasks}>No subtasks added to this ticket</div> : null
                    }
                    
                    <Subtitle 
                        actions={
                            [
                                {
                                    tooltip: "Add comment",
                                    icon: <AddIcon></AddIcon>,
                                    onClickFunction: () => addComment()
                                },
                            ]
                        }
                    >Comments ({ticket.comments.filter(comment => !comment.editing).length})</Subtitle>

                    <div className={styles.commentsWrapper}>
                        {ticket.comments.length > 0 ? ticket.comments.map((comment, i) => {
                            return <Comment key={i} index={i} handleRemoveComment={handleRemoveComment} disableCommentEditing={disableCommentEditing} updateTicket={updateTicket} handleChange={handleCommentChange} comment={comment}></Comment>
                        }) : <div>No comment</div>}
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
                    >Main info</Subtitle>

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
                                    value: <Chip type="avatar" avatar="" bgColor={blue}>{ticket.reporter.firstName + " " + ticket.reporter.lastName}</Chip>
                                },
                                {
                                    field: "Assignee",
                                    value: ticket.assignee ? (
                                        <Chip type="avatar" avatar="" bgColor={green}>{ticket.assignee.firstName + " " + ticket.assignee.lastName}</Chip> 
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
                    
                    <Subtitle 
                        actions={
                            [
                                {
                                    tooltip: "Add attachment",
                                    icon: <label htmlFor="file-upload" className={styles.uploadPlusIconWrapper}>
                                            <AddIcon></AddIcon>
                                          </label>,
                                    onClickFunction: function(){}
                                },
                            ]
                        }
                    >Attachments ({ticket.attachments.length})</Subtitle>
                    
                    <div className={styles.attachmentsWrapper}>
                        <input id="file-upload" type="file" style={{display: "none"}} onChange={(e) => onFileUpload(e)} />
                        {ticket.attachments.length > 0 ? ticket.attachments.map((file, i) => {
                            return (
                                <div key={i} className={styles.attachmentFileWrapper}>
                                    <div className={styles.attachmentFileIconWrapper}>
                                        {file.format === "webp" || file.format === "jpg" || file.format === "png" || file.format === "gif" ?
                                            <div className={styles.attachedImageWrapper}>
                                                <Image className={styles.attachedImage} cloudName="dhstlph6l" publicId={file.public_id}></Image>
                                            </div>
                                            : 
                                            <FontAwesomeIcon icon={file.icon} className={styles.attachmentFileIcon}></FontAwesomeIcon>
                                        }
                                    </div>
                                    <div className={styles.attachmentFileName} onClick={() => downloadFile(file)}>
                                        {file.name.length > 20 ? file.name.substring(0, 20) + "..." : file.name}
                                    </div>
                                    <div className={styles.removeAttachmentIconWrapper}>
                                        <Tooltip arrow title="Remove attachment">
                                            <div className={styles.removeAttachmentIconDiv}>
                                                <CloseIcon onClick={() => removeAttachment(file, i)}></CloseIcon>
                                            </div>
                                        </Tooltip>
                                    </div>
                                </div>
                            )
                        }) : null}
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