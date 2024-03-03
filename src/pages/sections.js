import { Box, Typography, Button } from "@mui/joy";
import React from "react";
import { Add, HouseRounded } from "@mui/icons-material"
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Sidebar from '../components/SideBar.tsx';
import { Breadcrumb } from "react-bootstrap";
import { useNavigate } from "react-router";
import SectionsList from "../components/sectionsList.tsx"
import SectionTable from "../components/sectionTable.tsx"
const Sections = () => {
    const x = useNavigate()
    return (
        <CssVarsProvider disableTransitionOnChange>
            <CssBaseline />
            <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
                <Sidebar />
                <Box
                    component="main"
                    className="MainContent"
                    sx={{
                        px: { xs: 2, md: 6 },
                        pt: {
                            xs: 'calc(12px + var(--Header-height))',
                            sm: 'calc(12px + var(--Header-height))',
                            md: 3,
                        },
                        pb: { xs: 2, sm: 2, md: 3 },
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        minWidth: 0,
                        height: '100dvh',
                        gap: 1,
                    }}
                >
                    <Breadcrumb>
                        <Typography level="text-sm" startDecorator={<HouseRounded />
                        } component="span">
                            Dashboard {">"} Sections
                        </Typography>
                    </Breadcrumb>
                    <Box
                        sx={{
                            display: 'flex',
                            mb: 1,
                            gap: 1,
                            flexDirection: { xs: 'column', sm: 'row' },
                            alignItems: { xs: 'start', sm: 'center' },
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Typography level="h2" component="h1">
                            Sections
                        </Typography>
                    </Box>
                    <Button startDecorator={<Add />} onClick={() => x("addsection")} className="AddBTN" >Add</Button>
                    <SectionTable />
                    <SectionsList />
                </Box>
            </Box>
        </CssVarsProvider>
    )
}
export default Sections