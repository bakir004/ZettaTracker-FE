import { makeStyles } from "@material-ui/core";
import { rootStyles } from "./rootStyles";

const {darkBlue, darkestBlue, white} = rootStyles;

export const useLandingStyles = makeStyles(() => ({
    backgroundImage: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: -1
    },
    content: {
        width: "550px",
        margin: "14rem 0 0 10rem",
    },
    title: {
        color: darkestBlue,
        fontSize: "6rem",
        fontWeight: "600"
    },
    description: {
        color: darkBlue,
        fontSize: "2.5rem",
        fontWeight: "500",
    },
    buttons: {
        marginTop: "25px",
        width: "100%",
        display: "flex",
        justifyContent: "space-between"
    },
    outlinedButton: {
        width: "47.5%",
        height: "40px",
        textAlign: "center",
        fontWeight: "500",
        lineHeight: "36px",
        textDecoration: "none",
        color: darkBlue,
        borderRadius: "10px",
        border: "3px solid " + darkBlue,
        boxSizing: "border-box",
        transition: "0.25s",
        "&:hover" : {
            backgroundColor: darkBlue,
            color: white
        }
    },
    filledButton: {
        width: "47.5%",
        fontWeight: "500",
        height: "40px",
        textAlign: "center",
        backgroundColor: darkBlue,
        lineHeight: "40px",
        textDecoration: "none",
        color: white,
        borderRadius: "10px"
    }
}))