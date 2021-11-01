import { makeStyles } from "@material-ui/core"

export const UseStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        height: '100vh',
        width: "50%",
        margin: "0 auto",
    },
    welcomeTitle: {
        fontFamily: "Open Sans, sans-serif",
        fontSize: "4rem",
        color: '#fff',
        fontWeight: "normal",
        display: "flex",
        justifyContent: "center",
        alignItems: "cemter",
        margin: "5px"
    },
    welcomeWoc: {
        fontFamily: "Open Sans, sans-serif",
        fontSize: "3rem",
        color: '#fff',
        fontWeight: "bold",
    },
    welcomeSubTitle: {
        fontFamily: "Open Sans, sans-serif",
        fontSize: "1.5rem",
        fontWeight: "normal",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    wocimagestyle: {
        width: "80%",
        height: "80%",
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "50%",
    },
    buttonStyle: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
    },
    wocimagestylemobile: {
        width: "100%",
        height: "100%",
    },
    welcomeTitleMobile: {
        fontFamily: "Open Sans, sans-serif",
        fontSize: "3.5rem",
        color: '#fff',
        fontWeight: "normal",
        display: "flex",
        justifyContent: "center",
        alignItems: "cemter",
        margin: "5px"
    },
    welcomeSubTitleMobile: {
        fontFamily: "Open Sans, sans-serif",
        fontSize: "1.3rem",
        fontWeight: "normal",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
}))