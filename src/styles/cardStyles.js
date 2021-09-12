import { makeStyles } from "@material-ui/core";
import { rootStyles } from "./rootStyles";

const { blue } = rootStyles;

export const useCardStyles = makeStyles(() => ({
    cardContainer: {
        minWidth: "250px",
        width: "24%",
        margin: "0.5%"
    },
    cardHeader: {
        display: "flex",
        padding: "12px"
    },
    cardHeaderIconWrapper: {
        width: "48px",
        height: "48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        borderRadius: "100px",
        backgroundColor: "lightgrey"
    },
    cardHeaderIcon: {
        width: "32px",
        height: "32px"
    },
    cardTitleAndSubtitle: {
        marginLeft: "12px"
    },
    cardTitle: {
        height: "1.75rem",
        fontSize: "1.5rem",
        fontWeight: "600",
    },
    cardSubtitle: {
        height: "1.25rem",
        fontSize: "1rem",
        opacity: "0.8",
        display: "flex",
        alignItems: "end" 
    },
    cardImageWrapper: {
        width: "100%"
    },
    cardImage: {
        width: "100%"
    },
    cardDescAndActionWrapper: {
        padding: "12px"
    },
    cardDescription: {
        fontSize: "1rem",
        opacity: "0.8"
    },
    cardActions: {
        marginTop: "8px",
        display: "flex",
        justifyContent: "space-between",
        height: "2rem"
    },
    cardButton: {
        paddingLeft: "1px",
        borderRadius: "100px",
        display: "inline-flex",
        alignItems: "center",
        transition: "0.25s",    
        cursor:"pointer",
        color: blue,
        fontWeight: "600",
        textDecoration: "none",
    },
    buttonExpandIcon: {
        transform: "rotate(270deg)"
    },
    cardIcons: {
        display: "flex"
    },
    cardIconWrapper: {
        height: "2rem",
        width: "2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        borderRadius: "100px",
        "&:hover": {
            backgroundColor: "lightgrey"
        }
    },
    cardIcon: {
        opacity: "0.8",
        cursor: "pointer",
        "&:hover": {
            opacity: "1"
        },
        width: "22px",
        height: "22px",
    }
}))