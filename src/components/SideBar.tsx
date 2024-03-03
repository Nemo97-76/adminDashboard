import * as React from 'react';
import GlobalStyles from '@mui/joy/GlobalStyles';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded';
import Divider from '@mui/joy/Divider';
import IconButton from '@mui/joy/IconButton';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton, { listItemButtonClasses } from '@mui/joy/ListItemButton';
import ListItemContent from '@mui/joy/ListItemContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import FolderRoundedIcon from '@mui/icons-material/FolderRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import SupportRoundedIcon from '@mui/icons-material/SupportRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import InsertDriveFileRoundedIcon from '@mui/icons-material/InsertDriveFileRounded';
import { useNavigate } from 'react-router';
import { LocalAirportRounded } from '@mui/icons-material';
import "../index.css"
import ColorSchemeToggle from './ColorSchemaToggle.tsx';
import { Tooltip } from '@mui/joy';
export default function Sidebar() {
    const x = useNavigate()
    return (
        <Sheet
            className="Sidebar"
            sx={{
                transform: {
                    xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))',
                    md: 'none',
                },
                transition: 'transform 0.4s, width 0.4s',
                height: '100dvh',
                width: 'var(--Sidebar-width)',
                top: 0,
                p: 2,
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                borderRight: '1px solid',
                borderColor: 'divider',
            }}
        >
            <GlobalStyles
                styles={(theme) => ({
                    ':root': {
                        '--Sidebar-width': '220px',
                        [theme.breakpoints.up('lg')]: {
                            '--Sidebar-width': '240px',
                        },
                    },
                })}
            />
            <div className='row'>
                <IconButton onClick={() => x("/home")} className="row LOGOBTN">
                    <div className='logo'></div>
                    <div className='logoText'>Travel Agency</div>
                </IconButton>
                <ColorSchemeToggle sx={{ height: "fit-content", width: "fit-content", marginTop: "9%" }} />
            </div>
            <Box
                sx={{
                    minHeight: 0,
                    overflow: 'hidden auto',
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    [`& .${listItemButtonClasses.root}`]: {
                        gap: 1.5,
                    },
                }}
            >
                <List
                    size="sm"
                    sx={{
                        gap: 1,
                        '--List-nestedInsetStart': '30px',
                        '--ListItem-radius': (theme) => theme.vars.radius.sm,
                    }}
                >
                    <ListItem>
                        <ListItemButton onClick={() => x("/home")}>
                            <DashboardRoundedIcon />
                            <ListItemContent>
                                <Typography level="title-sm">Dashboard</Typography>
                            </ListItemContent>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton onClick={() => x("/sections")}>
                            <FolderRoundedIcon />
                            <ListItemContent>
                                <Typography level="title-sm">Sections</Typography>
                            </ListItemContent>
                        </ListItemButton>
                    </ListItem>

                    <ListItem>
                        <ListItemButton onClick={() => x("/categories")} >
                            <InsertDriveFileRoundedIcon />
                            <ListItemContent>
                                <Typography level="title-sm">Categories</Typography>
                            </ListItemContent>
                        </ListItemButton>
                    </ListItem>

                    <ListItem>
                        <ListItemButton onClick={() => x("/trips")} >
                            <LocalAirportRounded />
                            <ListItemContent>
                                <Typography level="title-sm">Trips</Typography>
                            </ListItemContent>
                        </ListItemButton>
                    </ListItem>

                    <ListItem>
                        <ListItemButton onClick={() => x("/orders")}>
                            <InventoryRoundedIcon />
                            <ListItemContent>
                                <Typography level="title-sm">orders</Typography>
                            </ListItemContent>
                        </ListItemButton>
                    </ListItem>
                </List>
                <List
                    size="sm"
                    sx={{
                        mt: 'auto',
                        flexGrow: 0,
                        '--ListItem-radius': (theme) => theme.vars.radius.sm,
                        '--List-gap': '8px',
                        mb: 2,
                    }}
                >
                    <ListItem>
                        <ListItemButton onClick={() => x("/support")}>
                            <SupportRoundedIcon />
                            Support
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
            <Divider />
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <IconButton sx={{ p: "4px", gap: 0.5 }} onClick={() => x("/tasneem")}>
                    <Avatar
                        variant="outlined"
                        size="sm"
                    />
                    <Box sx={{ minWidth: 0, flex: 1 }}>
                        <Typography level="title-sm">tasneem Y.</Typography>
                        <Typography level="body-xs">tasneem@test.com</Typography>
                    </Box>
                </IconButton>
                <Tooltip arrow
                    title="sign out"
                    variant='outlined'
                >
                    <IconButton onClick={() => x("/")} size="sm" variant="plain" color="neutral">
                        <LogoutRoundedIcon />
                    </IconButton>
                </Tooltip>
            </Box>
        </Sheet>
    );
}
