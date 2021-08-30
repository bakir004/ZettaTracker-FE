import React from 'react'
import { useDashboardProjectsStyles } from "../styles/dashboardProjectsStyles"
import Card from "./card"

const DashboardProjects = (props) => {
    const styles = useDashboardProjectsStyles()
    return (
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
    )
}

export default DashboardProjects