import { makeStyles } from "@material-ui/core";
import { rootStyles } from "./rootStyles";

const { darkBlue, darkestBlue, blue } = rootStyles;

export const useDashboardStyles = makeStyles(() => ({
    container: {
        width: "90%",
        margin: "0 auto",
    },
    headerWithTabs: {
        display: "flex",
        height: "5rem",
        borderBottom: "1px solid #d1d1d1",
    },
    communityImageDiv: {
        width: "5rem",
        height: "5rem",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around"
    },
    communityImage: {
        width: "80%",
        height: "80%",
        borderRadius: "10px"
    },
    communityNameWithTabs: {
        width: "100%"
    },
    communityName: {
        fontWeight: "600",
        fontSize: "1.5rem",
        height: "2rem",
        marginTop: "0.5rem",
        paddingLeft: "0.5rem"
    },
    tabs: {
        height: "2.5rem",
        width: "100%",
        display: "flex",
        fontSize: "0.8125rem",
        fontWeight: "500",
    },
    tabsRoot: {
        minHeight: "2.5rem",
    },
    tabRoot: {
        fontFamily: "montserrat",
        minHeight: "2.5rem",
        minWidth: "80px",
        padding: "0 20px"
    },
    headerWithActions: {
        display: "flex",
        height: "4rem",
        borderBottom: "1px solid #d1d1d1"
    },
    addTicket: {
        margin: "auto 1rem",
        fontWeight: "600",
        cursor: "pointer",
        transition: "0.25s",
        color: blue,
        padding: "0.25rem 0.75rem",
        borderRadius: "100px",
        "&:hover": {
            backgroundColor:"lightgrey",
        }
    },
    inputFieldDiv: {
        position: "relative"
    },
    inputClear: {
        position: "absolute",
        right: "10px",
        top: "50%",
        transform: "translate(0, -50%)",
        width: "28px",
        height: "28px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        cursor: "pointer",
        color: darkestBlue,
        opacity: "0.8",
        transition: "0.25s",
        "&:hover": {
            opacity: "1"
        }
    },
    inputField: {
        height: "1rem",
        margin: "1rem 0.5rem",
        fontSize: "1rem",
        fontFamily: "Montserrat",
        fontWeight: "500",
        padding: "0.375rem 0.75rem",
        paddingRight: "28px",
        border: "2px solid " + darkestBlue,
        borderRadius: "4px",
        "&::placeholder": {
            color: darkestBlue,
            opacity: "0.8"
        }
    },    
    tableRow: {
        height: "40px",
        borderBottom: "1px solid #d1d1d1",
        "& > th": {
            padding: "12px 12px",
            fontFamily: "Montserrat",
            fontWeight: "600",
            color: darkestBlue,
            fontSize: "1rem"
        },
        "& > td": {
            padding: "12px 12px",
            fontWeight: "400",
            fontFamily: "Montserrat",
            color: darkestBlue,
        }
    },
    tableHeaderCell: {
        display: "flex",
        justifyContent: "space-between",
        minWidth: "150px"
    },
    tableHeaderCellText: {
        display: "flex",
        alignItems: "center",
    },
    tableHeaderActions: {
        display: "flex",
        alignItems: "center",
        height: "30px"
    },
    action: {
        height: "30px",
        width: "30px",
        cursor: "pointer",
        borderRadius: "50px",
        transition: "0.25s",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        "&:hover": {
            backgroundColor: "lightgrey"
        },
        "& > svg": {
            height: "26px",
            width: "26px"
        }
    },
    iconCell: {
        width: "24px",
    },
    icon: {
        backgroundColor: "#00CB8E",
        width: "18px",
        height: "18px",
        margin: "auto",
        transform: "rotate(45deg)",
        borderRadius: "4px"
    },
    assigneeChip:{
        '& span':{
            transition:'0.25s ease',
            fontSize:'0px',
            fontFamily: "Montserrat"
        },
        '&:hover':{
            '& span':{
                fontSize:'0.8125rem',
            }
        }
    },
    avatarChip: {
        fontFamily: "montserrat",
    },
    drawerDiv: {
        width: "400px",
        height: "100%",
        padding: "20px",
        fontFamily: "montserrat",
        textAlign: "center"
    },
    drawerTitleAndIcon: {
        display: "inline-flex",
    },
    drawerTitle: {
        paddingLeft: "5px",
        fontSize: "1.125rem",
        lineHeight: "2rem",
        fontWeight: "500",
        marginBottom: "30px"
    },
    drawerIconDiv: {
        height: "2rem",
        width: "2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around"
    },
    drawerIcon: {
        height: "1.5rem",
        width: "1.5rem"
    },
    drawerDescription: {
        fontSize: "0.9125rem"
    },
    drawerTable: {
        width: "90%",
        margin: "20px auto"
    },
    drawerTableRow: {
        display: "flex",
        height: "2rem",
        margin:"5px 0"
    },
    drawerTableRowLeftCell: {
        fontWeight: "500",
        width: "50%",
        textAlign: "right",
        lineHeight: "2rem",
        paddingRight: "10px"
    },
    drawerTableRowRightCell: {
        width: "50%",
        textAlign: "left",
        paddingLeft: "10px",
        lineHeight: "2rem"
    },
    button: {
        lineHeight: "30px",
        margin: "0 auto",
        padding: "0 15px",
        borderRadius: "100px",
        display: "inline-flex",
        alignItems: "center",
        transition: "0.25s",    
        cursor:"pointer",
        color: blue,
        fontWeight: "500",
        "&:hover": {
            backgroundColor: "lightgrey",
        }
    },
    buttonExpandIcon: {
        transform: "rotate(270deg)",
    },
}))