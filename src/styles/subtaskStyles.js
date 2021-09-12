import { makeStyles } from "@material-ui/core";

export const useSubtaskStyles = makeStyles(() => ({
    subtask: {
        padding: "0.5rem 0.75rem",
        fontWeight: "500",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "5px 0"
    },
    subtaskName: {
        display: 'flex',
        fontSize: "1rem",
        alignItems: "center"
    },
    subtaskNameEditIcon: {
        width: "1rem",
        height: "1rem",
        marginLeft: "5px",
        cursor: "pointer",
    },
    subtaskStatus: {
        display: "flex",
        cursor: "pointer",
        alignItems: "center",
        padding: "0 6px 0 12px",
        borderRadius: "100px",
        transition: "0.25s",
        "&:hover": {
            backgroundColor: "lightgrey",
        }
    },
    subtaskStatusText: {
        fontWeight: "600",
        textTransform: "uppercase"
    },
    subtaskStatusIconWrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around"
    },
    subtaskStatusIcon: {
        width: "20px",
        height: "20px",
    },
    subtaskStatusMenuItem: {
        fontFamily: "montserrat",
        textTransform: "uppercase",
        fontWeight: "500",
    },
    subtaskStatusAndRemove: {
        display: "flex"
    },
    removeSubtask: {
        transition: "0.25s",
        borderRadius: "100px",
        cursor: "pointer",
        padding: "3px",
        opacity: "0.8",
        "&:hover": {
            backgroundColor: 'lightgrey'
        }
    },
    removeSubtaskWrapper: {
        display: "flex",
        alignItems: "center",
        marginLeft: "5px",
    },
    editingInput: {
        fontFamily: "montserrat",
        fontWeight: "500",
        border: "none",
        fontSize: "1rem"
    }
}))