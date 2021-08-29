import { makeStyles } from "@material-ui/core";
import { rootStyles } from "./rootStyles";

const { darkestBlue, blue } = rootStyles;

export const useTicketStyles = makeStyles(() => ({
    tableRow: {
        height: "40px",
        borderBottom: "1px solid #d1d1d1",
        "& > th": {
            padding: "12px 12px",
            fontFamily: "Montserrat",
            fontWeight: "600",
            color: darkestBlue,
        },
        "& > td": {
            padding: "12px 12px",
            fontWeight: "400",
            fontFamily: "Montserrat",
            color: darkestBlue,
        }
    },
    iconCell: {
        width: "24px",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
    },
    icon: {
        width: "100%",
        height: "100%",
        borderRadius: "4px",
        transition: "0.25s"
    },
    ticket: {
        transition: "0.25s",
        "& > th": {
            padding: "12px 12px",
            fontFamily: "Montserrat",
            fontWeight: "600",
            color: darkestBlue,
        },
        "& > td": {
            padding: "12px 12px",
            fontWeight: "500",
            fontFamily: "Montserrat",
            color: darkestBlue,
        }
    },
    ticketTitleDiv: {
        display: "flex",
        cursor: "pointer",
        transition: "0.125s",
        alignItems: "center",
        justifyContent: "space-between",
        "&:hover": {
            color: blue,
            "& div:nth-child(2) svg": {
                opacity:"1",
                color: blue
            }
        }
    },
    ticketTitleIconDiv: {
        height: "20px"
    },
    ticketTitleExpandIcon: {
        transform: "rotate(270deg)",
        width: "20px",
        height: "20px",
        opacity: "0",
        transition: "0.125s",
        color: darkestBlue
    },
    imagesAndActionsCell: {
        width: "100%",
        height: "100%",
    },
    header: {
        height: "30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontWeight: "600"
    },
    actions: {
        height: "30px",
        display: "flex"
    },
    action: {
        height: "30px",
        width: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        cursor:"pointer",
        borderRadius: "50px",
        transition: "0.25s",
        margin: "0 2px",
        "&:hover": {
            backgroundColor: "lightgrey"
        }
    },
    content: {
        marginTop: "10px"
    },
    button: {
        lineHeight: "30px",
        margin: "0 10px",
        padding: "0 15px",
        borderRadius: "100px",
        transition: "0.25s",    
        cursor:"pointer",
        color: blue,
        "&:hover": {
            backgroundColor: "lightgrey",
        }
    },
}))