import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import ThemeSwitcher from "./ThemeSwitcher";
import Divider from "@mui/material/Divider";
import TaskTimer from "./TaskTimer";

const drawerWidth = 240;

interface ClippedDrawerProps {
    children?: React.ReactNode;
}

interface Task {
    elapsed: number;
}

export default function ClippedDrawer({ children }: ClippedDrawerProps) {
    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar position="fixed">
                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography variant="h6" noWrap component="div">
                        Tasclock
                    </Typography>
                    <ThemeSwitcher />
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: drawerWidth,
                        boxSizing: "border-box",
                        marginTop: "64px",
                    },
                    display: { xs: "none", sm: "block" },
                }}
            >
                {/* Todo: Add Fetch Task Logic */}
                <TaskTimer task={{ elapsed: 100 } as Task} />
                <Divider />
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText primary="ダッシュボード" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <AssignmentOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="タスク" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                }}
            >
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
}
