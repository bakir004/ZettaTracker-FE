import React from 'react'
import { useDashboardProjectsStyles } from "../styles/dashboardProjectsStyles"
import Card from "./card"
import Paper from '@material-ui/core/Paper';

const DashboardProjects = (props) => {
    const styles = useDashboardProjectsStyles()
    return (
        <Paper>
            <div className={styles.container}>
                <div className={styles.cardListContainer}>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
            </div>
        </Paper>
    )
}

export default DashboardProjects