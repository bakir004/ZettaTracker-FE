import { makeStyles } from "@material-ui/core";
import { rootStyles } from "./rootStyles";

const { blue } = rootStyles;

export const useTimelineStyles = makeStyles(() => ({
    mainTimeline: {
        "&::before": {
            backgroundColor: blue
        },
        padding: "0 auto",
        margin: "0",
    }
}))