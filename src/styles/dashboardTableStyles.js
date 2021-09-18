import { makeStyles } from "@material-ui/core";
import { rootStyles } from "./rootStyles";

const { darkestBlue } = rootStyles;

export const useDashboardTableStyles = makeStyles(() => ({    
    tableRow: {
        height: "40px",
        borderBottom: "1px solid lightgrey",
        "& > th": {
            padding: "12px 12px",
            fontFamily: "Montserrat",
            fontWeight: "600",
            color: darkestBlue,
            fontSize: "1rem"
        },
        "& > td": {
            padding: "12px 12px",
            fontWeight: "400",
            fontFamily: "Montserrat",
            color: darkestBlue,
        }
    },
    tableHeaderCell: {
        display: "flex",
        justifyContent: "space-between",
        minWidth: "150px"
    },
    tableHeaderCellText: {
        display: "flex",
        alignItems: "center",
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
}))