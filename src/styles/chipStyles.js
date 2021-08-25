import { makeStyles } from "@material-ui/core";
import { rootStyles } from "./rootStyles";

const { darkBlue, darkestBlue, blue } = rootStyles;

export const useChipStyles = makeStyles(() => ({
    chip: {
        height: "28px",
        fontFamily: "montserrat",
        color: "white",
        display: "inline-flex",
        alignItems: "center",
        justifyContent:"flex-start",
        background: "#24C6DC",  /* fallback for old browsers */
        background: "-webkit-linear-gradient(to right, #514A9D, #24C6DC)",  /* Chrome 10-25, Safari 5.1-6 */
        background: "linear-gradient(to right, #514A9D, #4273B2)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        cursor: "pointer",
        fontSize: "0.8125rem",
        borderRadius: "50px",
        transition: "0.25s",
        whiteSpace: "nowrap",
        overflow: "hidden",

        // maxWidth: "28px",
        maxWidth: "300px",
        margin: "2px 2px 2px 0",

        "&:hover": {
            transition: "0.25s",
            fontSize: "0.8125rem",
            maxWidth: "300px",
            "& > div:nth-child(2)": {
                marginRight: "10px"
            }
        },
    },
    avatarImageDiv: {
        height: "22px",
        width: "22px",
        borderRadius: "50px",
        margin: "0 3px"
    },
    avatarImage: {
        height: "22px",
        width: "22px",
        borderRadius: "50px",
    },
    avatarLetterDiv: {
        height: "22px",
        width: "22px",
        borderRadius: "50px",
        margin: "0 3px",
    },
    avatarLetter: {
        height: "22px",
        width: "22px",
        borderRadius: "50px",
        background: "#4273B2",
        lineHeight: "22px",
        textAlign: "center"
    },
    text: {
        transition: "0.25s",
        marginRight: "10px",
        margin: "0 2px"
    }
}))