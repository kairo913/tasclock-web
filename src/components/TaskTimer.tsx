import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import React from "react";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";

interface Task {
    elapsed: number;
}

interface TaskTimerProps {
    task?: Task;
}

function formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
}

export default function TaskTimer({ task }: TaskTimerProps) {
    return task ? (
        <Box
            sx={{
                p: 2,
                position: "relative",
                display: "flex",
                justifyContent: "space-between",
            }}
        >
            <Box>
                <Typography variant="caption">Current Time</Typography>
                <Typography variant="h5">{formatTime(task.elapsed)}</Typography>
            </Box>
            <IconButton>
                <PlayCircleOutlineOutlinedIcon fontSize="large" />
            </IconButton>
        </Box>
    ) : null;
}
