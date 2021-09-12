import { makeStyles } from "@material-ui/core";
import { rootStyles } from "./rootStyles";

const { lightgrey } = rootStyles;

export const useSubtitleStyles = makeStyles(() => ({
    subtitle: {
        fontSize: "1.25rem",
        fontWeight: "500",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid " + lightgrey,
        paddingBottom: "5px",
        margin: "1rem 0 0.5rem 0",
        transition: "0.5s"
    },
    rotated: {
        transform: "rotate(180deg)",
        transition: "0.25s"
    },
    unrotated: {
        transition: "0.25s"
    },
    subtitleActions: {
        display: "flex",
        gap: "4px",
        marginRight: "4px"
    },
    subtitleActionWrapper: {
        borderRadius: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        cursor: "pointer",
        transition: "0.25s",
        width: "24px",
        height: "24px",
        "&:hover": {
            backgroundColor: lightgrey
        }
    },
}))