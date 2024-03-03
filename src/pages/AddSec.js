import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import GlobalStyles from '@mui/joy/GlobalStyles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel, { formLabelClasses } from '@mui/joy/FormLabel';
import IconButton from '@mui/joy/IconButton';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import { useNavigate } from 'react-router';
import { Add } from '@mui/icons-material';

function ColorSchemeToggle(props) {
    const { onClick, ...other } = props;
    const { mode, setMode } = useColorScheme();
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) {
        return <IconButton size="sm" variant="outlined" color="neutral" disabled />;
    }
    return (
        <IconButton
            id="toggle-mode"
            size="sm"
            variant="outlined"
            color="neutral"
            aria-label="toggle light/dark mode"
            {...other}
            onClick={(event) => {
                if (mode === 'light') {
                    setMode('dark');
                } else {
                    setMode('light');
                }
                onClick?.(event);
            }}
        >
            {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
        </IconButton>
    );
}

export default function Addsec() {
    const x = useNavigate()
    const handleClick = () => {
        const loader = document.getElementById('loader');
        loader.style.display = "block";
        setTimeout(() => {
            loader.style.display = 'none';
            x(-1)
        }, 3000)
    }
    return (
        <CssVarsProvider defaultMode="dark" disableTransitionOnChange>
            <CssBaseline />
            <GlobalStyles
                styles={{
                    ':root': {
                        '--Collapsed-breakpoint': '769px', // form will stretch when viewport is below `769px`
                        '--Cover-width': '50vw', // must be `vw` only
                        '--Form-maxWidth': '800px',
                        '--Transition-duration': '0.4s', // set to `none` to disable transition
                    },
                }}
            />
            <Box
                className="AddBox"
                sx={(theme) => ({
                    width: "fit-content",
                    transition: 'width var(--Transition-duration)',
                    transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    backgroundColor: 'rgba(255 255 255 / 1)',
                    [theme.getColorSchemeSelector('dark')]: {
                        backgroundColor: 'rgba(19 19 24 / 1)',
                    },
                })}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: 'max-content',
                        width: "fit-content",
                        px: 2,
                    }}
                >
                    <Box
                        component="header"
                        sx={{
                            py: 3,
                            display: 'flex',
                            alignItems: 'left',
                            justifyContent: 'space-between',
                        }}
                    >
                        <ColorSchemeToggle className="toggle" />
                    </Box>
                    <Box
                        component="main"
                        sx={{
                            my: 'auto',
                            py: 2,
                            pb: 5,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            width: 400,
                            mx: 'auto',
                            borderRadius: 'sm',
                            '& form': {
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2,
                            },
                            [`& .${formLabelClasses.asterisk}`]: {
                                visibility: 'hidden',
                            },
                        }}
                    >
                        <Stack>
                            <Stack gap={1}>
                                <Typography level="h3">Add New section</Typography>
                            </Stack>
                        </Stack>

                        <Stack gap={4} sx={{ mt: 2 }}>
                            <form
                                onSubmit={(event) => {
                                    event.preventDefault();
                                }}
                            >
                                <FormControl required className="input">
                                    <FormLabel sx={{ fontSize: "20px" }}>section Name</FormLabel>
                                    <Input placeholder='Name' type="text" name="name" />
                                </FormControl>
                                <FormControl required className="input">
                                    <FormLabel sx={{ fontSize: "20px" }}>image</FormLabel>
                                    <Input sx={{ border: "none", all: "revert" }} placeholder='image' type="file" name="image" />
                                </FormControl>
                                <Stack sx={{ mt: 2 }}>
                                    <Button type="submit" className='SubmitADD' startDecorator={<Add />} onClick={handleClick}>
                                        Add
                                    </Button>
                                    <div class="three-body " id="loader" style={{ display: "none" }}>
                                        <div class="three-body__dot"></div>
                                        <div class="three-body__dot"></div>
                                        <div class="three-body__dot"></div>
                                    </div>
                                </Stack>
                            </form>
                        </Stack>
                    </Box>

                </Box>
            </Box>
            <Box
                className="blur-background"
                sx={(theme) => ({
                    backdropFilter: 'blur(12px)',
                    height: '100%',
                    width: "100%",
                    position: 'fixed',
                    transition:
                        'background-image var(--Transition-duration), left var(--Transition-duration) !important',
                    transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
                    backgroundColor: 'background.level1',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundImage:
                        'url(https://images.unsplash.com/photo-1527181152855-fc03fc7949c8?auto=format&w=1000&dpr=2)',
                    [theme.getColorSchemeSelector('dark')]: {
                        backgroundImage:
                            'url(https://images.unsplash.com/photo-1572072393749-3ca9c8ea0831?auto=format&w=1000&dpr=2)',
                    },
                })}
            />
        </CssVarsProvider>
    );
}
