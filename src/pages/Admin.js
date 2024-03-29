import React from "react";
import "../index.css"
import { Box, CssBaseline, CssVarsProvider } from "@mui/joy";
import Sidebar from "../components/SideBar.tsx";
import MyProfile from "../components/profile.tsx";
const Admin = () => {

    return (
        <CssVarsProvider>
            <CssBaseline />
            <Box sx={{ display: "flex", minHeight: "100vh" }}>
                <Sidebar />
                <Box component="main"
                    className="MainContent"
                    sx={{
                        pt: { xs: 'calc(12px + var(--Header-height))', md: 3 },
                        pb: { xs: 2, sm: 2, md: 3 },
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        minWidth: 0,
                        height: '100dvh',
                        gap: 1,
                        overflow: 'auto',
                    }}>
                    <MyProfile />
                </Box>
            </Box>
        </CssVarsProvider>
    )
}
export default Admin