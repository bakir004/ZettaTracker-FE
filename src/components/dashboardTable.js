import React from 'react';
import { useDashboardTableStyles } from "../styles/dashboardTableStyles"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Ticket from './ticket';
import Chip from './chip';
import { rootStyles } from '../styles/rootStyles';
import { priorities } from './ticketEnums';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Tooltip from '@material-ui/core/Tooltip';
import FilterListIcon from '@material-ui/icons/FilterList';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import Paper from '@material-ui/core/Paper';

const { red, orange, green } = rootStyles;

const DashboardTable = (props) => {
    const styles = useDashboardTableStyles()
    
    return (
        <Paper>
            <Table stickyHeader>
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
                                            <ImportExportIcon onClick={() => props.sortTickets("priority")}></ImportExportIcon>
                                        </Tooltip>
                                    </div>
                                    <div className={styles.action}>
                                        <Tooltip arrow title="Filter" placement="top">
                                            <FilterListIcon onClick={props.handleClick}></FilterListIcon>
                                        </Tooltip>
                                        <Menu
                                            id="simple-menu"
                                            anchorEl={props.anchorEl}
                                            keepMounted
                                            open={Boolean(props.anchorEl)}
                                            onClose={props.handleClose}
                                        >
                                            <MenuItem onClick={() => props.handleFiltering("priority", "")}>None</MenuItem>
                                            <MenuItem onClick={() => props.handleFiltering("priority", priorities.HIGH)}>
                                                <Chip type="basic" color={red}>High</Chip>
                                            </MenuItem>
                                            <MenuItem onClick={() => props.handleFiltering("priority", priorities.MEDIUM)}>
                                                <Chip type="basic" color={orange}>Medium</Chip>
                                            </MenuItem>
                                            <MenuItem onClick={() => props.handleFiltering("priority", priorities.LOW)}>
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
                    {props.filteredTickets.length <= 0 ? props.tickets.map((ticket, i) => (
                        <Ticket ticketInfo={ticket} key={i} id={i} toggleDrawer={props.toggleDrawer}></Ticket>
                    )) : props.filteredTickets.map((ticket, i) => (
                        <Ticket ticketInfo={ticket} key={i} id={i} toggleDrawer={props.toggleDrawer}></Ticket>
                    ))}
                    {/* TICKET MAPPER END*/}
                    
                </TableBody>
            </Table>
        </Paper>
    )
}

export default DashboardTable;