import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useFirebase/useAuth/useAuth";

const Navigation = () => {
    const {user, logOut} = useAuth();
    return (
        <header>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color="secondary">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h4"
                            component="div"
                            sx={{ flexGrow: 1, fontFamily: 'Raleway, Arial', fontSize: '50px', padding: '10px 0px' }}
                            textAlign="left"
                            fontWeight="bold"
                        >
                            Florist <span style={{ color: "black" }}>Shop</span>
                        </Typography>
                        <NavLink
                            to="/home"
                            style={{
                                textDecoration: "none",
                                color: "white",
                                fontWeight: "bold",
                            }}
                            activeStyle={{
                                fontWeight: "bold",
                                color: "navy",
                                textDecoration: "none",
                            }}
                        >
                            <Button
                                color="inherit"
                                style={{ fontSize: "20px" }}
                            >
                                Home
                            </Button>
                        </NavLink>
                        {
                            user?.email ?
                            <Button
                                color="inherit"
                                style={{ fontSize: "20px" }}
                                onClick={logOut}
                            >
                                Logout
                            </Button>
                            :
                            <NavLink
                            to="/login"
                            style={{
                                textDecoration: "none",
                                color: "white",
                                fontWeight: "bold",
                            }}
                            activeStyle={{
                                fontWeight: "bold",
                                color: "navy",
                                textDecoration: "none",
                            }}
                        >
                            <Button
                                color="inherit"
                                style={{ fontSize: "20px" }}
                            >
                                Login
                            </Button>
                        </NavLink>}
                    </Toolbar>
                </AppBar>
            </Box>
        </header>
    );
};

export default Navigation;
