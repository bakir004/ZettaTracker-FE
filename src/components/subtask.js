import React, {useState, useRef, useEffect} from 'react'
import {useSubtaskStyles} from "../styles/subtaskStyles"
import {rootStyles} from "../styles/rootStyles"
import Paper from "@material-ui/core/Paper"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from "@material-ui/core/Tooltip"
import { statuses } from './ticketEnums';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

//eslint-disable-next-line
const { darkestBlue, red, blue, green, orange } = rootStyles;

const useFocus = () => {
    const htmlElRef = useRef(null)
    const setFocus = () => {htmlElRef.current &&  htmlElRef.current.focus()}

    return [ htmlElRef, setFocus ] 
}

const Subtask = (props) => {
    const styles = useSubtaskStyles()
    const [editing, setEditing] = useState(false)
    const [inputRef, setInputFocus] = useFocus()

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (index, status) => {
        props.setSubtaskStatus(index, status)
        setAnchorEl(null);
    };

    const handleEdit = () => {
        setEditing(true)
    }
    const handleChange = (e) => {
        props.handleChange(e.target.value, props.index)
    }
    const handleKeyPress = (e) => {
        if(e.charCode === 13) 
            setEditing(false)
    }
    const handleInputBlur = () => {
        setEditing(false)
    }

    useEffect(() => {
        if(editing) 
            setInputFocus()
        //eslint-disable-next-line
    }, [editing])

    return (
        <Paper className={styles.subtask}>
            <div className={styles.subtaskNameWrapper}>
                {editing ? 
                    <input ref={inputRef} className={styles.editingInput} value={props.subtask.name} onChange={e => handleChange(e)} onBlur={() => handleInputBlur()} onKeyPress={e => handleKeyPress(e)}></input> :
                    <div className={styles.subtaskName}>
                        {props.subtask.name}
                        <EditIcon className={styles.subtaskNameEditIcon} onClick={handleEdit}></EditIcon>
                    </div>
                }
            </div>
            <div className={styles.subtaskStatusAndRemove}>
                <div className={styles.subtaskStatus} onClick={handleClick}>
                    <div className={styles.subtaskStatusText} style={{color: props.subtask.status === statuses.OPEN ? red : props.subtask.status === statuses.IN_PROGRESS ? orange : green}}>{props.subtask.status}</div>
                    <div className={styles.subtaskStatusIconWrapper}>
                        <ExpandMoreIcon className={styles.subtaskStatusIcon} style={{color: props.subtask.status === statuses.OPEN ? red : props.subtask.status === statuses.IN_PROGRESS ? orange : green}}></ExpandMoreIcon>
                    </div>
                </div>
                <div className={styles.removeSubtaskWrapper}>
                    <Tooltip title="Remove subtask" arrow className={styles.removeSubtask}>
                        <CloseIcon onClick={() => props.removeSubtask()}></CloseIcon>
                    </Tooltip>
                </div>
            </div>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={() => handleClose(-1, "")}
            >
                <MenuItem onClick={() => handleClose(props.index, statuses.OPEN)} className={styles.subtaskStatusMenuItem} style={{color: red}}>Open</MenuItem>
                <MenuItem onClick={() => handleClose(props.index, statuses.IN_PROGRESS)} className={styles.subtaskStatusMenuItem} style={{color: orange}}>In progress</MenuItem>
                <MenuItem onClick={() => handleClose(props.index, statuses.COMPLETED)} className={styles.subtaskStatusMenuItem} style={{color: green}}>Completed</MenuItem>
            </Menu>
        </Paper>
    )
}

export default Subtask;