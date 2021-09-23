import { makeStyles } from "@material-ui/core";
import { rootStyles } from "./rootStyles";

const { blue, lightgrey } = rootStyles;

export const useTicketViewStyles = makeStyles(() => ({
    container: {
        width: "90%",
        margin: "0 auto",
    },
    innerContainer: {
        width: "100%",
        display: "flex",
    },

    loadingContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        height: "40vh"
    },
    circularProgress: {
        color: blue
    },

    mainContent: {
        width: "55%",
        margin: "0 1%",
    },
    sideContent: {
        width: "41%",
        margin: "0 1%",
    },
    
    backButtonWrapper: {
        width: "100%",
        marginBottom: "10px",
    },
    backButton: {
        display: "inline-flex",
        textDecoration: "none",
        color: blue,
        fontWeight: "500",
        marginLeft: "-7px"
    },
    backButtonText: {
        lineHeight: "1.5rem"
    },

    breadcrumbLink: {
        color: "inherit",
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        "&:hover": {
            textDecoration: "underline"
        }
    },
    breadcrumbWrapper: {
        marginBottom: "10px"
    },

    ticketName: {
        fontSize: "2rem",
        fontWeight: "500",
        marginBottom: "10px"
    },
    ticketActions: {
        display: "flex",
        marginBottom: "10px",
        flexWrap: "wrap",
        "& > div": {
            cursor: "pointer",
            margin: "0.5rem 0.5rem 0 0"
        }
    },
    ticketDescription: {
        lineHeight: "24px",
        maxHeight: "300px",
        scrollbarWidth: "thin",
        overflowY: "scroll",
        paddingRight: "5px",
        marginBottom: "20px"
    },
    
    button: {
        display: "inline-flex",
        fontWeight: "600",
        color: blue,
        padding: "5px 10px",
        borderRadius: "100px",
        transition: "0.25s",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: lightgrey
        }
    },
    subtaskProgressDone: {
        paddingBottom: "5px",
        color: "grey"
    },
    subtasksWrapper: {
        display: 'flex',
        flexWrap: "wrap",
        gap: "5px"
    },
    ticketStatus: {
        display: "flex",
        cursor: "pointer",
        alignItems: "center",
        padding: "0 6px",
        borderRadius: "100px",
        transition: "0.25s",
        "&:hover": {
            backgroundColor: lightgrey,
        }
    },
    ticketStatusText: {
        fontWeight: "600",
        textTransform: "uppercase"
    },
    ticketStatusIconWrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around"
    },
    ticketStatusIcon: {
        width: "20px",
        height: "20px",
    },
    ticketStatusMenuItem: {
        fontFamily: "montserrat",
        textTransform: "uppercase",
        fontWeight: "500",
    },
    noSubtasks: {
        textAlign: 'center',
        width: "100%",
        margin: "2rem 0",
        fontWeight: "500"
    },
    uploadPlusIconWrapper: {
        display: 'flex',
        alignItems: 'center',
        cursor: "pointer"
    },

    attachmentsWrapper: {
        display: "flex",
        flexWrap: "wrap"
    },
    attachmentFileWrapper: {
        width: "49%",
        margin: "0.5%",
        display: "flex",
        boxSizing: "border-box",
        alignItems: 'center',
        border: "1px solid lightgrey"
    },
    attachmentFileIconWrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent:"space-around",
        height: "100%",
        "& > svg.svg-inline--fa": {
            width: "1.25rem",
            height: "1.25rem",
        },
        flex: "0 0 40px",
    },
    attachmentFileName: {
        flex: "1 1 0",
        fontSize: "0.8125rem",
        cursor: "pointer",
        wordWrap: "break-word",
        "&:hover": {
            textDecoration: "underline"
        }
    },
    removeAttachmentIconWrapper: {
        width: "40px",
        height: "40px",
        display:"flex",
        alignItems: "center",
        justifyContent: "space-around",
        flex: "0 0 40px",
        borderRadius: "100px",
        cursor:"pointer",
        transition: "0.25s",
    },
    removeAttachmentIconDiv: {
        width: "1.75rem",
        height: "1.75rem",
        borderRadius: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        transition: "0.25s",
        "&:hover":{
            backgroundColor: "lightgrey"
        }
    },
    attachedImage: {
        height: "100%",
        width: "100%",
        objectFit: "cover",
        borderRadius: "5px",
    },
    attachedImageWrapper: {
        width: "2rem",
        height: '2rem',
        objectFit: "cover"
    }
}))