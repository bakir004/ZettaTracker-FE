import { makeStyles } from "@material-ui/core";
import { rootStyles } from "./rootStyles";

const { blue, lightgrey } = rootStyles;

export const useTicketViewStyles = makeStyles(() => ({
    container: {
        width: "90%",
        margin: "0 auto",
    },
    innerContainer: {
        width: "100%",
        display: "flex",
    },

    loadingContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        height: "40vh"
    },
    circularProgress: {
        color: blue
    },

    mainContent: {
        width: "55%",
        margin: "0 1%",
    },
    sideContent: {
        width: "41%",
        margin: "0 1%",
    },
    
    backButtonWrapper: {
        width: "100%",
        marginBottom: "10px",
    },
    backButton: {
        display: "inline-flex",
        textDecoration: "none",
        color: blue,
        fontWeight: "500",
        marginLeft: "-7px"
    },
    backButtonText: {
        lineHeight: "1.5rem"
    },

    breadcrumbLink: {
        color: "inherit",
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        "&:hover": {
            textDecoration: "underline"
        }
    },
    breadcrumbWrapper: {
        marginBottom: "10px"
    },

    ticketName: {
        fontSize: "2rem",
        fontWeight: "500",
        marginBottom: "10px"
    },
    ticketActions: {
        display: "flex",
        marginBottom: "10px",
        flexWrap: "wrap",
        "& > div": {
            cursor: "pointer",
            margin: "0.5rem 0.5rem 0 0"
        }
    },
    ticketDescription: {
        lineHeight: "24px",
        maxHeight: "300px",
        scrollbarWidth: "thin",
        overflowY: "scroll",
        paddingRight: "5px",
        marginBottom: "20px"
    },
    
    button: {
        display: "inline-flex",
        fontWeight: "600",
        color: blue,
        padding: "5px 10px",
        borderRadius: "100px",
        transition: "0.25s",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: lightgrey
        }
    },
    subtaskProgressDone: {
        marginBottom: "5px",
        color: "grey"
    },
    collapsible: {
        maxHeight: "100%",
        transition: "0.5s",
        opacity: "1",
        overflow:'visible',
    },
    collapsed: {
        maxHeight: "0%",
        transition: "0.5s",
        overflow: "hidden",
        opacity: "0",
    },
    ticketStatus: {
        display: "flex",
        cursor: "pointer",
        alignItems: "center",
        padding: "0 6px",
        borderRadius: "100px",
        transition: "0.25s",
        "&:hover": {
            backgroundColor: lightgrey,
        }
    },
    ticketStatusText: {
        fontWeight: "600",
        textTransform: "uppercase"
    },
    ticketStatusIconWrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around"
    },
    ticketStatusIcon: {
        width: "20px",
        height: "20px",
    },
    ticketStatusMenuItem: {
        fontFamily: "montserrat",
        textTransform: "uppercase",
        fontWeight: "500",
    },
}))