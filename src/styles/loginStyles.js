import { makeStyles } from "@material-ui/core";
import { rootStyles } from "./rootStyles";

const {darkBlue, darkestBlue, white} = rootStyles;

export const useLoginStyles = makeStyles(() => ({
    backgroundImage: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: -1
    },
    container: {
        display:"flex",
        flexDirection: "row-reverse"
    },
    content: {
        width: "400px",
        margin: "10rem 25rem 0 0",
    },
    title: {
        color: darkestBlue,
        fontSize: "4rem",
        fontWeight: "600",
    },
    inputField: {
        margin: "0.5rem 0 0.25rem 0"
    },
    helperText: {
        textDecoration: "underline",
        color: darkBlue
    },
    filledButton: {
        display: "block",
        margin: "1rem 0 0.25rem 0",
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