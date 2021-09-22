import { makeStyles } from "@material-ui/core";
import {rootStyles} from "./rootStyles";

const {blue} = rootStyles

export const useCommentStyles = makeStyles(() => ({
    container: {
        width:"100%",
        display: "flex",
        alignItems: "center",
        padding: "0.5rem 0"
    },
    letter: {
        width: "2.25rem",
        height: "2.25rem",
        backgroundColor: blue,
        display: 'flex',
        alignItems: "center",
        justifyContent: "space-around",
        borderRadius: "100px",
        color: "white",
        fontWeight: "500",
        fontSize: "1.25rem"
    },
    commentTextWrapper: {
        marginLeft: "0.5rem",
        width: "100%",
        fontSize: "0.9125rem"
    },
    commentHeader: {
        fontWeight: "500",
        display: "flex",
        gap: "1rem",
        lineHeight: "24px",
    },
    timestamp:{
        // color: "grey",
        fontWeight: "500"
    },
    commentUsername: {
        fontWeight: "600"
    },
    editingInput: {
        fontFamily: "montserrat",
        fontWeight: "500",
        fontSize: "1rem",
        padding: "0.5rem",
        width: "auto",
        marginTop: "5px"
    },
    textFieldRoot: {
        width: "100%"
    },
    commentActionsWrapper: {
        height: "24px",
        display: 'flex',
        alignItems: "center",
        color: 'grey'
    },
    commentActionIcon: {
        width: "18px",
        height: "18px"
    }
}))