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

const pages = ['Home', 'Add_Blog', 'All_Blog', 'Featured_Blog', 'WishList'];
const mobileMenu = ['Home', 'Add_Blog', 'All_Blog', 'Featured_Blog', 'WishList'];
const authPages = ['Sign_In', 'Sign_Up']
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    // const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const { user, signOutAuth } = useContextHook()
    const navigate =useNavigate()
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    //     setAnchorElUser(event.currentTarget);
    // };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    // const handleCloseUserMenu = () => {
    //     setAnchorElUser(null);
    // };

    const signOut = () => {
        signOutAuth()
            .then(() => {
                navigate('/sign_in')
                toast.success('you are successfully loged out')
            })
            .catch(e => {
                console.log(e)
                toast.error(e.message)
            })
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl" className=''>
                <Toolbar disableGutters>
                    <ImBlogger className='w-7 h-7 hidden lg:flex' />
                    <NavLink to={`/`}>

                    <Typography
                        variant="h6"
                        noWrap
                            component="a"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            padding:' 0 0 0 4px',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        BareBlog
                    </Typography>
                    </NavLink>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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

                    <ImBlogger className='w-7 h-7 lg:hidden flex' />
                    <NavLink to={`/`}>

                    <Typography
                        variant="h5"
                        noWrap
                            component="span"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
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
                    <div className='hidden lg:flex'>
                        {
                            user ?
                                <>
                                    <Button onClick={signOut} sx={{ color: 'white', display: 'block' }}>Sign_Out</Button>
                                </>
                                :
                                <>
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
                                </>
                        }

                    </div>
                    {/* profile */}
                    <Box sx={{ flexGrow: 0 }}>

                        {/* <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src={`${user?.photoURL}`} />
                            </IconButton>
                        </Tooltip> */}
                        <Tooltip title=''>
                            <IconButton sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src={`${user?.photoURL}`} />
                            </IconButton>
                        </Tooltip>
                        
                        {/* <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu> */}

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;
