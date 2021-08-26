import { makeStyles } from "@material-ui/core";
import { rootStyles } from "./rootStyles";

const {darkBlue, darkestBlue, white} = rootStyles;

export const useSignupStyles = makeStyles(() => ({
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
        width: "550px",
        margin: "10vh 25vh 0 0",
    },
    halfInputsDiv: {
        width: "100%",
        display: "flex",
        "& > *": {
            width: "50%",
        }
    },
    inputDiv: {
        "&:first-of-type": {
            marginRight: "0.375rem"
        },
        "&:last-of-type": {
            marginLeft: "0.375rem"
        }
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
        color: darkBlue,
        display: "block",
        margin: "2px 0"
    },
    filledButton: {
        display: "block",
        margin: "0.5rem 0 0.25rem 0",
        width: "50%",
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