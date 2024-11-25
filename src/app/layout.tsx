import React from "react";
import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import "@fontsource-variable/noto-sans-jp";
import { Noto_Sans_JP } from "next/font/google";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import ClippedSidebar from "../components/Sidebar";
import "./global.css";

export const metadata: Metadata = {
    title: "Tasclock",
    description: "Task management for freelancers",
};

const notoSansJP = Noto_Sans_JP({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-noto-sans-jp",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={notoSansJP.variable}>
                <AppRouterCacheProvider options={{ enableCssLayer: true }}>
                    <ThemeProvider theme={theme}>
                        <InitColorSchemeScript attribute="class" />
                        <ClippedSidebar>{children}</ClippedSidebar>
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
