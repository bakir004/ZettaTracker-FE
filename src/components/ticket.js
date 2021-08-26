import React, {useState} from 'react'
import {useTicketStyles} from "../styles/ticketStyles"
import Chip from "./chip"
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Ticket = ({ticketInfo}) => {
    const styles = useTicketStyles();
    const [open, setOpen] = useState(false)

    const toggleOpen = () => {
        setOpen(!open)
    }

    return ( 
        <>
            <TableRow className={styles.tableRow}>
                <TableCell>
                    <div className={styles.iconCell} onClick={toggleOpen}>
                        <ExpandMoreIcon className={!open ? styles.icon : styles.rotatedIcon}></ExpandMoreIcon>
                    </div>
                </TableCell>
                <TableCell>{ticketInfo.name}</TableCell>
                <TableCell>
                    <Chip type="avatar" color="#24C6DC" avatar={ticketInfo.assignee.image} >{ticketInfo.assignee.name}</Chip>    
                </TableCell>
                <TableCell>
                    <Chip type="basic" color="#FF7070">{ticketInfo.priority}</Chip>
                </TableCell>
                <TableCell>{ticketInfo.dueDate.toString()}</TableCell>
                <TableCell>{ticketInfo.status}</TableCell>
            </TableRow>
            <TableRow className={styles.ticket} style={{display: open ? "" : "none"}}>
                <TableCell></TableCell>
                <TableCell colspan={3} style={{maxWidth: "400px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</TableCell>
                <TableCell colspan={3}>calories</TableCell>
            </TableRow>
        </>
    )
}

export default Ticket;