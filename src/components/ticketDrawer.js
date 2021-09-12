import React from 'react'
import Drawer from "@material-ui/core/Drawer"
import { useDrawerStyles } from "../styles/drawerStyles"
import Chip from "./chip"
import {rootStyles} from "../styles/rootStyles"
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { priorities } from './ticketEnums'
import {Link} from "react-router-dom"

const { red, orange, green, blue } = rootStyles;

const TicketDrawer = (props) => {
    const styles = useDrawerStyles()
    return (
        <Drawer anchor={"right"} open={props.open} onClose={() => props.toggleDrawer(false, props.ticketInfo)}>
            <div className={styles.drawerDiv}>
                <div className={styles.drawerTitleAndIcon}>
                    <div className={styles.drawerIconDiv}>
                        <AssignmentOutlinedIcon className={styles.drawerIcon}></AssignmentOutlinedIcon>
                    </div>
                    <div className={styles.drawerTitle}>{props.ticketInfo ? props.ticketInfo.name : ""}</div>
                </div>
                <div className={styles.drawerDescription}>
                    {props.ticketInfo ? props.ticketInfo.description : ""}
                </div>
                <div className={styles.drawerTable}>
                    <div className={styles.drawerTableRow}>
                        <div className={styles.drawerTableRowLeftCell}>Priority</div>
                        <div className={styles.drawerTableRowRightCell}>
                            <Chip type="basic" bgColor={props.ticketInfo ? props.ticketInfo.priority === priorities.HIGH ? red : props.ticketInfo.priority === priorities.MEDIUM ? orange : green : "white"}>{props.ticketInfo ? props.ticketInfo.priority : ""}</Chip>
                        </div>
                    </div>
                    <div className={styles.drawerTableRow}>
                        <div className={styles.drawerTableRowLeftCell}>Status</div>
                        <div className={styles.drawerTableRowRightCell}>
                            {props.ticketInfo ? props.ticketInfo.status : ""}
                        </div>
                    </div>
                    <div className={styles.drawerTableRow}>
                        <div className={styles.drawerTableRowLeftCell}>Assignee</div>
                        <div className={styles.drawerTableRowRightCell}>
                            <Chip type="avatar" bgColor={blue}>{props.ticketInfo.assigneeId ? props.ticketInfo.assigneeId : ""}</Chip>
                        </div>
                    </div>
                    <div className={styles.drawerTableRow}>
                        <div className={styles.drawerTableRowLeftCell}>Due date</div>
                        <div className={styles.drawerTableRowRightCell}>
                            {props.ticketInfo.dueDate ? props.ticketInfo.dueDate.toString() : ""}
                        </div>
                    </div>
                </div>
                <Link className={styles.button} to={`/ticket/${props.ticketInfo._id}`}>View ticket 
                    <ExpandMoreIcon className={styles.buttonExpandIcon}></ExpandMoreIcon>
                </Link>
            </div>
        </Drawer>
    )
}

export default TicketDrawer