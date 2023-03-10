import React, {useState} from "react";
import defaultTheme, {customTheme} from "../theme";
import {makeStyles, ThemeProvider} from "@material-ui/core";
import Header from "./Header";
import LeftDrawer from "./LeftDrawer";
import Data from "../data";
import ButtonBase from "@material-ui/core/ButtonBase";
import RightDrawer from "./RightDrawer";
import {connect} from "react-redux";

const  useStyles = makeStyles(theme =>({
    container: {
        margin: "80px 20px 20px 15px",
        paddingLeft: defaultTheme.drawer.width,
        [defaultTheme.breakpoints.down("sm")]: {
            paddingLeft: 0
        }
        // width: `calc(100% - ${defaultTheme.drawer.width}px)`
    },
    containerFull: {
        paddingLeft: defaultTheme.drawer.miniWidth,
        [defaultTheme.breakpoints.down("sm")]: {
            paddingLeft: 0
        }
    },
    settingBtn: {
        top: 80,
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        color: "white",
        width: 48,
        right: 0,
        height: 48,
        opacity: 0.9,
        padding: 0,
        zIndex: 999,
        position: "fixed",
        minWidth: 48,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
    }
}))

export const Auth = (props) => {

    const classes = useStyles()
    const [navDrawerOpen, setNavDrawerOpen] = useState(true)
    const [rightDrawerOpen, setRightDrawerOpen] = useState(true)
    const [theme, setTheme] = useState(defaultTheme)
    const handleChangeTheme = (colorOption)=>{
        const newTheme = customTheme({
            palette: colorOption
        });
        setTheme(newTheme)
    }
    return (
        <ThemeProvider theme={theme}>
            <Header handleChangeNavDrawer={()=>setNavDrawerOpen(!navDrawerOpen)} navDrawerOpen={navDrawerOpen} />

            <LeftDrawer
                navDrawerOpen={navDrawerOpen}
                handleChangeNavDrawer={()=>setNavDrawerOpen(!navDrawerOpen)}
                menus={Data.menus}
            />
            <ButtonBase
                color="inherit"
                classes={{ root: classes.settingBtn }}
                onClick={()=>setNavDrawerOpen(!navDrawerOpen)}
            >
                <i className="fa fa-cog fa-3x" />
            </ButtonBase>
            <RightDrawer
                rightDrawerOpen={rightDrawerOpen}
                handleChangeRightDrawer={()=>setRightDrawerOpen(!rightDrawerOpen)}
                handleChangeTheme={handleChangeTheme}
            />
            {props.children}
        </ThemeProvider>

    );

};
export default Auth;