import React from 'react'
import { useDashboardProjectsStyles } from "../styles/dashboardProjectsStyles"
import Card from "./card"
import Paper from '@material-ui/core/Paper';

const DashboardProjects = (props) => {
    const styles = useDashboardProjectsStyles()
    return (
        <div className={styles.container}>
            <Paper style={{maxHeight: "65vh", overflow: "scroll", scrollbarWidth: "thin"}}>
                <div className={styles.cardListContainer}>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
            </Paper>
        </div>
    )
}

export default DashboardProjects