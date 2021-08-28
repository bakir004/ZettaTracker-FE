import React, {useState} from 'react'
import {useTicketStyles} from "../styles/ticketStyles"
import Chip from "./chip"
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import Tooltip from '@material-ui/core/Tooltip';
import { priorities } from './ticketEnums';
import { rootStyles } from "../styles/rootStyles"

const { red, orange, green } = rootStyles;

const Ticket = (props) => {
    const styles = useTicketStyles();

    return ( 
        <>
            <TableRow className={styles.tableRow}>
                <TableCell>
                    <div className={styles.iconCell} onClick={() => props.toggleOpen(props.id)}>
                        <ExpandMoreIcon className={!props.ticketInfo.open ? styles.icon : styles.rotatedIcon}></ExpandMoreIcon>
                    </div>
                </TableCell>
                <TableCell>{props.ticketInfo.name}</TableCell>
                <TableCell>
                    <Chip type="avatar" color="#24C6DC" avatar={props.ticketInfo.assignee.image} >{props.ticketInfo.assignee.name}</Chip>    
                </TableCell>
                <TableCell>
                    <Chip type="basic" color={props.ticketInfo.priority === priorities.HIGH ? red : props.ticketInfo.priority === priorities.MEDIUM ? orange : green}>{props.ticketInfo.priority}</Chip>
                </TableCell>
                <TableCell>{props.ticketInfo.dueDate.toString()}</TableCell>
                <TableCell>{props.ticketInfo.status}</TableCell>
            </TableRow>
            <TableRow className={styles.ticket} style={{display: props.ticketInfo.open ? "" : "none"}}>
                <TableCell></TableCell>
                <TableCell colspan={3} style={{fontWeight: "400"}}>
                    <div className={styles.header}>Description</div>
                    <div className={styles.content}>
                        {props.ticketInfo.description}
                    </div>
                </TableCell>
                <TableCell colspan={3} style={{verticalAlign: "top"}}>
                    <div className={styles.imagesAndActionsCell}>
                        <div className={styles.header}>
                            <div className={styles.title}>Images</div>
                            <div className={styles.actions}>
                                <div className={styles.action}>
                                    <Tooltip title="Edit" arrow placement="top">
                                        <EditOutlinedIcon></EditOutlinedIcon>
                                    </Tooltip>
                                </div>
                                <div className={styles.action}>
                                    <Tooltip title="Favorite" arrow placement="top">
                                        <StarOutlineIcon></StarOutlineIcon>
                                    </Tooltip>
                                </div>
                            </div>
                        </div>
                        <div className={styles.content}>
                        </div>
                    </div>
                </TableCell>
            </TableRow>
        </>
    )
}

export default Ticket;