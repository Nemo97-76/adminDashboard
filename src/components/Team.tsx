import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Autocomplete from '@mui/joy/Autocomplete';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import ChipDelete from '@mui/joy/ChipDelete';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import List from '@mui/joy/List';
import Stack from '@mui/joy/Stack';
import Divider from '@mui/joy/Divider';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemContent from '@mui/joy/ListItemContent';
import RadioGroup from '@mui/joy/RadioGroup';
import Radio from '@mui/joy/Radio';
import Slider from '@mui/joy/Slider';
import Sheet from '@mui/joy/Sheet';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails, {
    accordionDetailsClasses,
} from '@mui/joy/AccordionDetails';
import AccordionSummary, {
    accordionSummaryClasses,
} from '@mui/joy/AccordionSummary';

import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import FolderRoundedIcon from '@mui/icons-material/FolderRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

import Layout from './TaemLayout.tsx';

export default function TeamExample() {
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const peopleData = [
        {
            name: 'Andrew Smith',
            position: 'UI Designer',
            avatar2x: 'https://i.pravatar.cc/80?img=7',
            companyData: [
                {
                    role: 'Senior designer',
                    name: 'Dribbble',
                    logo: 'https://www.vectorlogo.zone/logos/dribbble/dribbble-icon.svg',
                    years: '2015-now',
                },
                {
                    role: 'Designer',
                    name: 'Pinterest',
                    logo: 'https://www.vectorlogo.zone/logos/pinterest/pinterest-icon.svg',
                    years: '2012-2015',
                },
            ],
            skills: ['UI design', 'Illustration'],
        },
        {
            name: 'John Doe',
            position: 'Frontend Developer',
            avatar2x: 'https://i.pravatar.cc/80?img=8',
            companyData: [
                {
                    role: 'UI Engineer',
                    name: 'Google',
                    logo: 'https://www.vectorlogo.zone/logos/google/google-icon.svg',
                    years: '2018-now',
                },
                {
                    role: 'Frontend Developer',
                    name: 'Amazon',
                    logo: 'https://www.vectorlogo.zone/logos/amazon/amazon-icon.svg',
                    years: '2015-2018',
                },
            ],
            skills: ['HTML', 'CSS', 'JavaScript'],
        },
        {
            name: 'Alice Johnson',
            position: 'Product Manager',
            avatar2x: 'https://i.pravatar.cc/80?img=9',
            companyData: [
                {
                    role: 'Product Manager',
                    name: 'Microsoft',
                    logo: 'https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg',
                    years: '2016-now',
                },
                {
                    role: 'Product Analyst',
                    name: 'IBM',
                    logo: 'https://www.vectorlogo.zone/logos/ibm/ibm-icon.svg',
                    years: '2013-2016',
                },
            ],
            skills: ['Product Management', 'Market Analysis'],
        },
        {
            name: 'Eva Brown',
            position: 'Graphic Designer',
            avatar2x: 'https://i.pravatar.cc/80?img=10',
            companyData: [
                {
                    role: 'Art Director',
                    name: 'Adobe',
                    logo: 'https://www.vectorlogo.zone/logos/adobe/adobe-icon.svg',
                    years: '2019-now',
                },
                {
                    role: 'Graphic Designer',
                    name: 'Apple',
                    logo: 'https://www.vectorlogo.zone/logos/apple/apple-icon.svg',
                    years: '2016-2019',
                },
            ],
            skills: ['Graphic Design', 'Illustration'],
        },
    ];

    return (
        <CssVarsProvider disableTransitionOnChange>
            <CssBaseline />
            <Stack
                id="tab-bar"
                direction="row"
                justifyContent="space-around"
                spacing={1}
                sx={{
                    display: { xs: 'flex', sm: 'none' },
                    zIndex: '999',
                    bottom: 0,
                    position: 'fixed',
                    width: '100dvw',
                    py: 2,
                    backgroundColor: 'background.body',
                    borderTop: '1px solid',
                    borderColor: 'divider',
                }}
            >
                <Button
                    variant="plain"
                    color="neutral"
                    component="a"
                    href="/joy-ui/getting-started/templates/email/"
                    size="sm"
                    startDecorator={<EmailRoundedIcon />}
                    sx={{ flexDirection: 'column', '--Button-gap': 0 }}
                >
                    Email
                </Button>
                <Button
                    variant="plain"
                    color="neutral"
                    aria-pressed="true"
                    component="a"
                    href="/joy-ui/getting-started/templates/team/"
                    size="sm"
                    startDecorator={<PeopleAltRoundedIcon />}
                    sx={{ flexDirection: 'column', '--Button-gap': 0 }}
                >
                    Team
                </Button>
                <Button
                    variant="plain"
                    color="neutral"
                    component="a"
                    href="/joy-ui/getting-started/templates/files/"
                    size="sm"
                    startDecorator={<FolderRoundedIcon />}
                    sx={{ flexDirection: 'column', '--Button-gap': 0 }}
                >
                    Files
                </Button>
            </Stack>

            <Box
                sx={{
                    p: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Typography level="title-lg" textColor="text.secondary" component="h1">
                    People
                </Typography>
            </Box>
            <Box

            >

            </Box>
            <Box>
                {peopleData.map((person, index) => (
                    <Sheet
                        key={index}
                        component="li"
                        variant="outlined"
                        sx={{
                            borderRadius: 'sm',
                            p: 2,
                            listStyle: 'none',
                        }}
                    >
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Avatar
                                variant="outlined"
                                src={person.avatar2x}
                                srcSet={`${person.avatar2x} 2x`}
                                sx={{ borderRadius: '50%' }}
                            />
                            <div>
                                <Typography level="title-md">{person.name}</Typography>
                                <Typography level="body-xs">{person.position}</Typography>
                            </div>
                        </Box>
                        <Divider component="div" sx={{ my: 2 }} />
                        <List sx={{ '--ListItemDecorator-size': '40px', gap: 2 }}>
                            {person.companyData.map((company, companyIndex) => (
                                <ListItem key={companyIndex} sx={{ alignItems: 'flex-start' }}>
                                    <ListItemDecorator
                                        sx={{
                                            '&::before': {
                                                content: '""',
                                                position: 'absolute',
                                                height: '100%',
                                                width: '1px',
                                                bgcolor: 'divider',
                                                left: 'calc(var(--ListItem-paddingLeft) + 12px)',
                                                top: '50%',
                                            },
                                        }}
                                    >
                                        <Avatar
                                            src={company.logo}
                                            sx={{ '--Avatar-size': '24px' }}
                                        />
                                    </ListItemDecorator>
                                    <ListItemContent>
                                        <Typography level="title-sm">{company.role}</Typography>
                                        <Typography level="body-xs">{company.name}</Typography>
                                    </ListItemContent>
                                    <Typography level="body-xs">{company.years}</Typography>
                                </ListItem>
                            ))}
                        </List>
                        <Divider component="div" sx={{ my: 2 }} />
                        <Typography level="title-sm">Skills tags:</Typography>
                        <Box sx={{ mt: 1.5, display: 'flex', gap: 1 }}>
                            {person.skills.map((skill, skillIndex) => (
                                <Chip
                                    key={skillIndex}
                                    variant="outlined"
                                    color="neutral"
                                    size="sm"
                                >
                                    {skill}
                                </Chip>
                            ))}
                        </Box>
                    </Sheet>
                ))}
            </Box>
        </CssVarsProvider>
    );
}
