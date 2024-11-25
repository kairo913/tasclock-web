"use client";
import { FormControl, MenuItem, Select, useColorScheme } from "@mui/material";
import React from "react";
import ComputerIcon from "@mui/icons-material/Computer";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function ThemeSwitcher() {
    const { mode, setMode } = useColorScheme();
    if (!mode) {
        return null;
    }

    return (
        <FormControl>
            <Select
                value={mode}
                onChange={(event) =>
                    setMode(event.target.value as "light" | "dark" | "system")
                }
                variant="standard"
                name="theme"
                sx={{
                    minWidth: 100,
                    "& .MuiSelect-select": {
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                    },
                }}
                disableUnderline
            >
                <MenuItem value="system" sx={{ gap: 1 }}>
                    <ComputerIcon
                        fontSize="small"
                        sx={{ verticalAlign: "middle" }}
                    />
                    自動
                </MenuItem>
                <MenuItem value="light" sx={{ gap: 1 }}>
                    <LightModeIcon
                        fontSize="small"
                        sx={{ verticalAlign: "middle" }}
                    />
                    ライト
                </MenuItem>
                <MenuItem value="dark" sx={{ gap: 1 }}>
                    <DarkModeIcon
                        fontSize="small"
                        sx={{ verticalAlign: "middle" }}
                    />
                    ダーク
                </MenuItem>
            </Select>
        </FormControl>
    );
}
