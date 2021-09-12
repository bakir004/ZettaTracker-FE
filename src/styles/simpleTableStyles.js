import { makeStyles } from "@material-ui/core";

export const useSimpleTableStyles = makeStyles(() => ({
    mainInfoRow: {
        width: "100%",
        display: "flex",
        marginBottom: "5px",
        minHeight: "2rem"
    },
    mainInfoField: {
        fontWeight: "500",
        minWidth: "100px",
        width: "35%",
        paddingRight: "5px",
        display: "flex",
        alignItems: "center"
    },
    mainInfoValue: {
        width: "65%",
        minWidth: "100px",
        paddingLeft: "5px",
        display: "flex",
        alignItems: "center"
    },
}))