"use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const pages = [
    { name: 'Home', id: 'home-section' },
    { name: 'About Us', id: 'about-us-section' },
    { name: 'Services', id: 'services-section' },
    { name: 'Testimonials', id: 'testimonials-section' },
    { name: 'Contact', id: 'contact-section' },
]
function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleNavClick = (id: string) => {
        setAnchorElNav(null);
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <Box
                sx={{
                    position: "fixed",
                    top: 16,
                    left: 24,
                    zIndex: 1301,
                    display: "flex",
                    alignItems: "center",
                }}
            >
            </Box>
            <AppBar
                position="fixed"
                elevation={2}
                sx={{
                    background: "transparent",
                    boxShadow: "none",
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        maxWidth: "700px",
                        width: "100%",
                        margin: "0 auto",
                        borderRadius: "1rem",
                        background: "#222",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                        px: 2,
                    }}
                >
                    <Toolbar disableGutters sx={{ justifyContent: "center" }}>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: "center" }}>
                            <IconButton
                                size="large"
                                aria-label="menu"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{ display: { xs: 'block', md: 'none' } }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                        <Typography sx={{ textAlign: 'center' }}>{page.name}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "center" }}>
                            {pages.map((page) => (
                                <Button
                                    key={page.name}
                                    onClick={() => handleNavClick(page.id)}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page.name}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </Box>
            </AppBar>
        </>
    );
}
export default Navbar;