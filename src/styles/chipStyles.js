import { makeStyles } from "@material-ui/core";

export const useChipStyles = makeStyles(() => ({
    basicChip: {
        height: "28px",
        fontFamily: "montserrat",
        fontWeight: "500",
        color: "white",
        display: "inline-flex",
        alignItems: "center",
        justifyContent:"flex-start",

        fontSize: "0.8125rem",
        borderRadius: "50px",
        whiteSpace: "nowrap",
        overflow: "hidden",

        // maxWidth: "28px",
        maxWidth: "300px",
        margin: "2px",

        "&:hover": {
            transition: "0.25s",
            fontSize: "0.8125rem",
            maxWidth: "300px",
            "& > div:nth-child(2)": {
                marginRight: "10px"
            }
        },
    },
    avatarChip: {
        height: "28px",
        fontFamily: "montserrat",
        fontWeight: "500",
        color: "white",
        display: "inline-flex",
        alignItems: "center",
        justifyContent:"flex-start",

        cursor: "pointer",
        fontSize: "0.8125rem",
        borderRadius: "50px",
        transition: "0.25s",
        whiteSpace: "nowrap",
        overflow: "hidden",

        // maxWidth: "28px",
        maxWidth: "300px",
        margin: "2px",

        "&:hover": {
            transition: "0.25s",
            fontSize: "0.8125rem",
            maxWidth: "300px",
            "& > div:nth-child(2)": {
                marginRight: "10px"
            }
        },
    },
    expandableAvatarChip: {
        height: "28px",
        fontFamily: "montserrat",
        fontWeight: "500",
        color: "white",
        display: "inline-flex",
        alignItems: "center",
        justifyContent:"flex-start",
        background: "linear-gradient(to right, #514A9D, #4273B2)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        cursor: "pointer",
        fontSize: "0.8125rem",
        borderRadius: "50px",
        transition: "0.25s",
        whiteSpace: "nowrap",
        overflow: "hidden",

        maxWidth: "28px",
        // maxWidth: "300px",
        margin: "2px",

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
        margin: "3px"
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
        margin: "3px",
    },
    avatarLetter: {
        height: "22px",
        width: "22px",
        borderRadius: "50px",
        lineHeight: "22px",
        textAlign: "center"
    },
    avatarText: {
        transition: "0.25s",
        marginRight: "10px",
        margin: "0 2px"
    },
    basicText: {
        margin: "0 10px"
    }
}))