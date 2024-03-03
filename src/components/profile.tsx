import React, { useState } from 'react';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Setting from './setting.tsx';
import Team from "./Team.tsx";
import { TabPanel } from '@mui/joy';
import "../index.css"
import Emails from './Emails.tsx';

export default function MyProfile() {
    return (
        <Box sx={{ flex: 1, width: '100%' }}>
            <Box
                sx={{
                    position: 'sticky',
                    top: { sm: -100, md: -110 },
                    bgcolor: 'background.body',
                    zIndex: 9995,
                }}
            >
                <Box sx={{ px: { xs: 2, md: 6 } }}>
                    <Breadcrumbs
                        size="sm"
                        aria-label="breadcrumbs"
                        separator={<ChevronRightRoundedIcon />}
                        sx={{ pl: 0 }}
                    >
                        <Link
                            underline="none"
                            color="neutral"
                            href="#some-link"
                            aria-label="Home"
                        >
                            <HomeRoundedIcon />
                        </Link>
                        <Typography color="primary" fontWeight={500} fontSize={12}>
                            profile
                        </Typography>
                    </Breadcrumbs>
                    <Typography level="h2" component="h1" sx={{ mt: 1, mb: 2 }}>
                        Admin profile
                    </Typography>
                </Box>
                <Tabs
                    sx={{ backgroundColor: "transparent" }}
                >
                    <TabList
                    >
                        <Tab>Settings</Tab>
                        <Tab>Team</Tab>
                        <Tab>Emails</Tab>
                    </TabList>
                    <TabPanel value={0}>
                        <Setting />
                    </TabPanel>
                    <TabPanel value={1}>
                        <Team />
                    </TabPanel>
                    <TabPanel value={2}>
                        <Emails />
                    </TabPanel>
                </Tabs>
            </Box>
        </Box>
    );
}
