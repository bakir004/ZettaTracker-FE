import { makeStyles } from "@material-ui/core";
import { rootStyles } from "./rootStyles";

const { blue } = rootStyles;

export const useDrawerStyles = makeStyles(() => ({
    drawerDiv: {
        width: "400px",
        height: "100%",
        padding: "30px",
        fontFamily: "montserrat",
        textAlign: "center",
        overflowX: "hidden",
    },
    drawerTitleAndIcon: {
        display: "inline-flex",
    },
    drawerTitle: {
        paddingLeft: "5px",
        fontSize: "1.125rem",
        lineHeight: "2rem",
        fontWeight: "500",
        marginBottom: "30px"
    },
    drawerIconDiv: {
        height: "2rem",
        width: "2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around"
    },
    drawerIcon: {
        height: "1.5rem",
        width: "1.5rem"
    },
    drawerDescription: {
        fontSize: "0.9125rem"
    },
    drawerTable: {
        width: "90%",
        margin: "20px auto"
    },
    drawerTableRow: {
        display: "flex",
        margin:"5px 0"
    },
    drawerTableRowLeftCell: {
        fontWeight: "500",
        width: "35%",
        textAlign: "right",
        lineHeight: "2rem",
        paddingRight: "10px"
    },
    drawerTableRowRightCell: {
        width: "65%",
        textAlign: "left",
        paddingLeft: "10px",
        lineHeight: "2rem"
    },
    button: {
        lineHeight: "30px",
        margin: "0 auto",
        padding: "0 15px",
        borderRadius: "100px",
        display: "inline-flex",
        alignItems: "center",
        transition: "0.25s",    
        cursor:"pointer",
        color: blue,
        fontWeight: "600",
        marginBottom: "100px",
        textDecoration: "none",
        "&:hover": {
            backgroundColor: "lightgrey",
        }
    },
    buttonExpandIcon: {
        transform: "rotate(270deg)",
    }
}))