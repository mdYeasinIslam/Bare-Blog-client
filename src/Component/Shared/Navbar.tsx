import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { ImBlogger } from 'react-icons/im';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useContextHook from '../../Hooks/useContextHook';
import toast from 'react-hot-toast';
import { IoMdSunny } from 'react-icons/io';
import { IoMoon } from 'react-icons/io5';

const pages = ['Home', 'Add_Blog', 'All_Blog', 'Featured_Blog', 'WishList'];
const mobileMenu = ['Home', 'Add_Blog', 'All_Blog', 'Featured_Blog', 'WishList'];
const authPages = ['Sign_In', 'Sign_Up']

function Navbar() {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const { user, signOutAuth, setDarkMode, darkMode } = useContextHook()
    const navigate =useNavigate()
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const signOut = () => {
        signOutAuth()
            .then(() => {
                navigate('/sign_in')
                toast.success('you are successfully loged out')
            })
            .catch(e => {
               
                toast.error(e.message)
            })
    }

    return (
        <AppBar position="static" className={`${darkMode ? 'dark' : ''} `}>
            <Container maxWidth="xl" className={` dark:bg-[#1F2937]`} >
                <Toolbar disableGutters className={` flex justify-between items-center   `}>

                    {/* Mobile device menu icons */}
                    <div className='flex items-center'>

                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
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
                            {mobileMenu.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <NavLink to={`${page.toLowerCase()}`}>

                                        <Typography sx={{ px: 2, py: 0.5, textAlign: 'center' }}>{page}</Typography>
                                    </NavLink>
                                </MenuItem>
                            ))}
                            {
                                user ?
                                    <>
                                        <MenuItem className=' '>
                                            <Button onClick={signOut} sx={{ px: 2, textAlign: 'center', color: 'black' }}
                                                className='navbar-dark'
                                            >Sign_Out</Button>
                                        </MenuItem>
                                    </>
                                    :
                                    <>
                                        {authPages.map((page) => (
                                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                                                <NavLink to={`${page.toLowerCase()}`}>

                                                    <Typography sx={{ px: 2, py: 0.5, textAlign: 'center' }}>{page}</Typography>
                                                </NavLink>
                                            </MenuItem>
                                        ))}
                                    </>
                            }


                        </Menu>
                    </Box>

                    <div className=' flex items-center'>
                        <ImBlogger className='w-7 h-7' />
                        <NavLink to={`/`}>
                    <Typography
                                variant="h6"
                        noWrap
                                component="a"
                        sx={{
                            mr: 2,

                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            padding: ' 0 0 0 4px',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        BareBlog
                    </Typography>
                    </NavLink>
                        </div>
                        
                    </div>

                    {/*Navbar middle portion and for lg: navIcons */}

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <NavLink to={`${page.toLowerCase()}`} key={page}>
                            <Button

                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                            </NavLink>
                        ))}
                    </Box>

                    {/* Navbar end portion */}
                    <div className='flex gap-5 items-center'>

                        <div >

                        {
                            user ?
                                    <div className='hidden lg:block'>
                                    <Button onClick={signOut} sx={{ color: 'white', display: 'block' }}>Sign_Out</Button>
                                    </div>
                                :
                                    <div className='hidden lg:flex'>
                                    {authPages.map((page) => (
                                        <NavLink to={`${page.toLowerCase()}`} key={page}>
                                            <Button

                                                onClick={handleCloseNavMenu}
                                                sx={{ color: 'white', display: 'block' }}
                                            >
                                                {page}
                                            </Button>
                                        </NavLink>
                                    ))}
                                    </div>
                        }

                    </div>
                    {/* profile */}
                        <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center',gap:'1rem' }} >

                            <Tooltip title={`${darkMode?'light':'dark'}`} onClick={() => setDarkMode(!darkMode)}>
                                <IconButton sx={{ p: 0,color:'white' }}>
                                {
                                    darkMode ? <IoMdSunny className='w-7 h-7' /> : <IoMoon className='w-7 h-7' />
                                }
                                </IconButton>
                            </Tooltip >
                        <Tooltip title='profile'>
                            <IconButton sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src={`${user?.photoURL}`} />
                            </IconButton>
                            </Tooltip>
                    </Box>
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;
