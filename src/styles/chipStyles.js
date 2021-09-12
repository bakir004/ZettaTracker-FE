import { makeStyles } from "@material-ui/core";

export const useChipStyles = makeStyles(() => ({
    basicChip: {
        height: "24px",
        fontFamily: "montserrat",
        fontWeight: "500",
        color: "white",
        display: "inline-flex",
        alignItems: "center",
        borderRadius: "100px",
        padding: "2px 10px",
        gap: "4px",
        fontSize: "14px",
        "& svg": {
            height: "18px",
            width: "18px",
        },
        "& div": {
            height: "18px",
            lineHeight: "18px",
            paddingRight: "4px"
        }
    },
    avatarChip: {
        height: "24px",
        fontFamily: "montserrat",
        fontWeight: "500",
        color: "white",
        display: "inline-flex",
        alignItems: "center",
        cursor: "pointer",
        fontSize: "0.8125rem",
        borderRadius: "100px",
        padding: "2px 4px 2px 2px",
    },
    avatarImageDiv: {
        height: "24px",
        width: "24px",
        borderRadius: "50px",
        margin: "3px"
    },
    avatarImage: {
        height: "24px",
        width: "24px",
        borderRadius: "50px",
    },
    avatarLetterDiv: {
        height: "24px",
        width: "24px",
        borderRadius: "50px",
    },
    avatarLetter: {
        height: "24px",
        width: "24px",
        borderRadius: "50px",
        lineHeight: "24px",
        textAlign: "center"
    },
    avatarText: {
        transition: "0.25s",
        padding: "0 4px"
    },
}))