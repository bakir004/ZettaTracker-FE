import { makeStyles } from "@material-ui/core";
import { rootStyles } from "./rootStyles";

const { darkestBlue, blue } = rootStyles;

export const useDashboardProjectsStyles = makeStyles(() => ({
    container: {
        width: "100%",
        marginTop: "15px"
    },
    cardListContainer: {
        display: "flex",
        flexWrap: "wrap"
    },
}))