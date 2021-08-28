import { makeStyles } from "@material-ui/core";
import { rootStyles } from "./rootStyles";

const { darkBlue, darkestBlue } = rootStyles;

export const useDashboardStyles = makeStyles(() => ({
    container: {
        width: "90%",
        margin: "0 auto",
    },
    headerWithTabs: {
        display: "flex",
        height: "5rem",
        borderBottom: "1px solid #d1d1d1"
    },
    communityImageDiv: {
        width: "5rem",
        height: "5rem",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around"
    },
    communityImage: {
        width: "80%",
        height: "80%",
        borderRadius: "10px"
    },
    communityNameWithTabs: {
        width: "100%"
    },
    communityName: {
        fontWeight: "600",
        fontSize: "1.5rem",
        height: "2.5rem",
        marginTop: "0.5rem",
        paddingLeft: "0.5rem"
    },
    tabs: {
        height: "2rem",
        width: "100%",
        display: "flex"
    },
    activeTab: {
        display: "flex",
        width: "fit-content",
        height: "100%",
        alignItems: "center",
        padding: "0 0.5rem",
        borderBottom: "3px solid " + darkBlue,
        boxSizing: "border-box",
        fontWeight: "500",
        color: darkBlue,
        cursor: "pointer",
    },
    inactiveTab: {
        display: "flex",
        width: "fit-content",
        height: "100%",
        alignItems: "center",
        padding: "0 0.5rem",
        paddingBottom: "3px",
        boxSizing: "border-box",
        fontWeight: "400",
        color: darkestBlue,
        cursor: "pointer"
    },
    headerWithActions: {
        display: "flex",
        height: "4rem",
        borderBottom: "1px solid #d1d1d1"
    },
    addTicket: {
        height: "1rem",
        margin: "1rem 0.5rem",
        lineHeight: "1rem",
        fontWeight: "600",
        padding: "0.375rem 0.75rem",
        border: "2px solid " + darkestBlue,
        borderRadius: "5px",
        cursor: "pointer",
        transition: "0.25s",
        "&:hover": {
            backgroundColor: darkestBlue,
            color: "white"
        }
    },
    inputField: {
        height: "1rem",
        margin: "1rem 0.5rem",
        fontSize: "1rem",
        fontFamily: "Montserrat",
        fontWeight: "500",
        padding: "0.375rem 0.75rem",
        border: "2px solid " + darkestBlue,
        borderRadius: "4px",
        "&::placeholder": {
            color: darkestBlue,
            opacity: "0.8"
        }
    },
    selectField: {
        margin: "1rem 0.5rem",
        fontSize: "1rem",
        lineHeight: "100%",
        fontFamily: "Montserrat",
        fontWeight: "500",
        padding: "0.25rem 0.75rem",
        border: "2px solid " + darkestBlue,
        borderRadius: "4px",
    },
    filterLabel: {
        display: "flex",
        alignItems: "center",
        margin: "1rem 0.5rem",
        marginLeft: "2rem",
        fontSize: "1rem",
        lineHeight: "1rem",
        fontFamily: "Montserrat",
        fontWeight: "500",
    },  
    ticket: {
        transition: "0.25s",
        borderBottom: "1px solid #d1d1d1",
        borderLeft: "1px solid #d1d1d1",
        "& > th": {
            padding: "12px 12px",
            fontFamily: "Montserrat",
            fontWeight: "600",
            color: darkestBlue,
            borderRight: "1px solid #d1d1d1"
        },
        "& > td": {
            padding: "12px 12px",
            fontWeight: "500",
            fontFamily: "Montserrat",
            color: darkestBlue,
            borderRight: "1px solid #d1d1d1"
        }
    },
    tableRow: {
        height: "40px",
        borderBottom: "1px solid #d1d1d1",
        borderLeft: "1px solid #d1d1d1",
        "& > th": {
            padding: "12px 12px",
            fontFamily: "Montserrat",
            fontWeight: "600",
            color: darkestBlue,
            borderRight: "1px solid #d1d1d1"
        },
        "& > td": {
            padding: "12px 12px",
            fontWeight: "400",
            fontFamily: "Montserrat",
            color: darkestBlue,
            borderRight: "1px solid #d1d1d1"

        }
    },
    tableHeaderCell: {
        display: "flex",
        justifyContent: "space-between",
        minWidth: "150px"
    },
    tableHeaderCellText: {
        display: "flex",
        alignItems: "center"
    },
    tableHeaderActions: {
        display: "flex",
        alignItems: "center",
        height: "30px"
    },
    action: {
        height: "30px",
        width: "30px",
        cursor: "pointer",
        borderRadius: "50px",
        transition: "0.25s",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        "&:hover": {
            backgroundColor: "lightgrey"
        },
        "& > svg": {
            height: "26px",
            width: "26px"
        }
    },
    iconCell: {
        width: "24px",
    },
    icon: {
        backgroundColor: "#00CB8E",
        width: "18px",
        height: "18px",
        margin: "auto",
        transform: "rotate(45deg)",
        borderRadius: "4px"
    },
    assigneeChip:{
        '& span':{
            transition:'0.25s ease',
            fontSize:'0px',
            fontFamily: "Montserrat"
        },
        '&:hover':{
            '& span':{
                fontSize:'0.8125rem',
            }
        }
    },
    avatarChip: {
        fontFamily: "montserrat",
    }
}))