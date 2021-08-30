import { makeStyles } from "@material-ui/core";
import { rootStyles } from "./rootStyles";

const { darkestBlue } = rootStyles;

export const useAppStyles = makeStyles(() => ({
    root: {
        fontFamily: "Montserrat",
        color: darkestBlue
    }
}))