import { makeStyles } from "@material-ui/core";

export const useSimpleTableStyles = makeStyles(() => ({
    tableRow: {
        width: "100%",
        display: "flex",
        paddingBottom: "5px",
        minHeight: "2rem"
    },
    tableField: {
        fontWeight: "500",
        minWidth: "100px",
        width: "35%",
        paddingRight: "5px",
        display: "flex",
        alignItems: "center"
    },
    tableValue: {
        width: "65%",
        minWidth: "100px",
        paddingLeft: "5px",
        display: "flex",
        alignItems: "center"
    },
}))