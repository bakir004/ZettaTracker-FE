import React from 'react'
import {useTicketStyles} from "../styles/ticketStyles"
import Chip from "./chip"
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { priorities } from './ticketEnums';
import { rootStyles } from "../styles/rootStyles"
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import { formatDate } from "./dateFormatter"

const { red, orange, green, blue } = rootStyles;

const Ticket = (props) => {
    const styles = useTicketStyles();

    return ( 
        <TableRow className={styles.tableRow}>
            <TableCell>
                <div className={styles.iconCell}>
                    <AssignmentOutlinedIcon className={styles.icon}></AssignmentOutlinedIcon>
                </div>
            </TableCell>
            <TableCell style={{fontWeight: "500", fontSize: "0.9rem"}}>
                <div className={styles.ticketTitleDiv} onClick={() => props.toggleDrawer(true, props.ticketInfo)}>
                    <div className={styles.ticketTitle}>
                        {props.ticketInfo.name}
                    </div>
                    <div className={styles.ticketTitleIconDiv}>
                        <ExpandMoreIcon className={styles.ticketTitleExpandIcon}></ExpandMoreIcon>
                    </div>
                </div>
            </TableCell>
            <TableCell>
                <Chip type="avatar" bgColor={blue} expandable={false}>{props.ticketInfo.assignee.firstName + " " + props.ticketInfo.assignee.lastName}</Chip>    
            </TableCell>
            <TableCell>
                <Chip type="basic" bgColor={props.ticketInfo.priority === priorities.HIGH ? red : props.ticketInfo.priority === priorities.MEDIUM ? orange : green}>{props.ticketInfo.priority}</Chip>
            </TableCell>
            <TableCell>{formatDate(props.ticketInfo.dueDate)}</TableCell>
            <TableCell>{props.ticketInfo.status}</TableCell>
        </TableRow>
    )
}

export default Ticket;