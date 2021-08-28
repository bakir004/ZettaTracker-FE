import { makeStyles } from "@material-ui/core";
import { rootStyles } from "./rootStyles";

const { darkestBlue } = rootStyles;

export const useTicketStyles = makeStyles(() => ({
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
    iconCell: {
        width: "24px",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        cursor:"pointer",
        transition: "0.25s",
        borderRadius: "50px",
        "&:hover": {
            backgroundColor: "lightgrey"
        }
    },
    icon: {
        width: "100%",
        height: "100%",
        borderRadius: "4px",
        transition: "0.25s"
    },
    rotatedIcon: {
        width: "100%",
        height: "100%",
        borderRadius: "4px",
        transition: "0.25s",
        transform: "rotate(-180deg)"
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
    }
}))