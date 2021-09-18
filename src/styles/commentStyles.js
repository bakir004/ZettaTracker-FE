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
        marginLeft: "0.5rem"
    },
    commentUser: {
        fontWeight: "500",
    },
    timestamp:{
        marginLeft: "1rem",
        color: "grey",
        fontWeight: "400"
    },
    commentText: {
        marginTop: "4px",
    }
}))