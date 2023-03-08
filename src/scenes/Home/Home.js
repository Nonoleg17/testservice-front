import {makeStyles, ThemeProvider} from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import ButtonBase from "@material-ui/core/ButtonBase";
import Header from "../../components/Header"
import LeftDrawer from "../../components/LeftDrawer";
import RightDrawer from "../../components/RightDrawer";
import {useState} from "react";
import Data from "../../data";
import defaultTheme, { customTheme } from "../../theme";
import React from "react"
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

export function Home() {
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

        </ThemeProvider>
    );
}