import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Sidebar from '../components/SideBar.tsx';
import page from "../components/images/error-404-concept-landing-page_52683-12188-removebg-preview.png"
import "../index.css"
import { Box } from '@mui/joy';
export default function PageNotFound() {

    return (
        <CssVarsProvider defaultMode="dark" disableTransitionOnChange>
            <CssBaseline />
            <Sidebar />
            <Box className='a404'>
                <img src={page} alt='404 page not found' />
                <h2>Page not Found</h2>
            </Box>

        </CssVarsProvider>
    );
}
