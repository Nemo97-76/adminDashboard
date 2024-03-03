import * as React from 'react';
import { useColorScheme } from '@mui/joy/styles';
import { IconButton } from '@mui/joy';
import { Tooltip } from '@mui/joy';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';

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
        <Tooltip
            arrow
            title={
                mode === "dark" ? "light mode" : " dark mode"
            }
            variant='outlined'
        >
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
        </Tooltip>

    );
}
export default ColorSchemeToggle