import { makeStyles } from "@material-ui/core";
import { rootStyles } from "./rootStyles";

const { darkestBlue, blue } = rootStyles;

export const useHeaderStyles = makeStyles(() => ({
    container: {
        width: "80%",
        display: "flex",
        margin: "2rem auto",
        textTransform: "uppercase",
    },
    halfHeader1: {
        display: "flex",
        width: '40%',
        flexDirection: "row"
    },
    headerLogo: {
        width: "80px",
        height: "70px",
        marginTop: "-15px"
    },
    halfHeader2: {
        display: "flex",
        width: '40%',
        flexDirection: "row-reverse"
    },
    headerLogoDiv: {
        width: "20%",
        display: "flex",
        justifyContent: "space-around"
    },
    button: {
        width: "8rem",
        textAlign: "center",
        textDecoration: "none",
        color: darkestBlue,
        fontWeight: "600",
        transition: "0.25s",
        marginTop: "10px",
        "&:hover": {
            transform: "scale(1.2, 1.2)",
            color: blue
        }
    },
    
}))