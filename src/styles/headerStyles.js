import { makeStyles } from "@material-ui/core";
import { rootStyles } from "./rootStyles";

const {darkBlue, darkestBlue } = rootStyles;

export const useHeaderStyles = makeStyles(() => ({
    container: {
        width: "80%",
        display: "flex",
        margin: "2.5rem auto",
        textTransform: "uppercase",
    },
    halfHeader1: {
        display: "flex",
        width: '50%',
        flexDirection: "row"
    },
    halfHeader2: {
        display: "flex",
        width: '50%',
        flexDirection: "row-reverse"
    },
    button: {
        width: "8rem",
        textAlign: "center",
        textDecoration: "none",
        color: darkestBlue,
        fontWeight: "600",
        transition: "0.25s",
        "&:hover": {
            transform: "scale(1.2, 1.2)",
            color: darkBlue
        }
    },
    headerLogo: {
        position: "absolute",
        width: "80px",
        height: "70px",
        top: "1rem",
        left: "50%",
        transform: "translate(-50%, 0)",
    }
}))