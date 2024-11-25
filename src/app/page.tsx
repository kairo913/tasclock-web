import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import InputAdornment from "@mui/material/InputAdornment";
import Fab from "@mui/material/Fab";

export default function Home() {
    return (
        <Box
            sx={{
                display: "flex",
                position: "relative",
                flexDirection: "column",
                height: { xs: "calc(100vh - 56px)", sm: "calc(100vh - 64px)" },
                p: 3,
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mb: 3,
                }}
            >
                <TextField
                    label="Search"
                    variant="outlined"
                    sx={{ width: "100%", maxWidth: "500px" }}
                    slotProps={{
                        input: {
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton aria-label="Search Button" edge="end">
                                        <SearchIcon fontSize="medium" />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        },
                    }}
                />
            </Box>
            <Card variant="outlined" sx={{ p: 2, width: "100%" }}>
                <Typography variant="h5">Active Task</Typography>
                <Typography variant="body1">This is a task that is currently active.</Typography>
            </Card>
            <Fab
                size="large"
                color="primary"
                aria-label="Add Task"
                sx={{ position: "absolute", bottom: 0, right: 0, m: 3 }}
            >
                <AddIcon />
            </Fab>
        </Box>
    );
}
