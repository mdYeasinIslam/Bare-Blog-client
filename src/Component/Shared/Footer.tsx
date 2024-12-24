import { Box, Typography, Link, Container, List, ListItem } from '@mui/material';
import useContextHook from '../../Hooks/useContextHook';

const Footer = () => {
    const {darkMode} = useContextHook()
    return (
        <div className={`${darkMode?'dark':''}`}>
            <Box
                component="footer"
                sx={{
                    
                    py: 3,
                    mt: 4,
                    borderTop: '1px solid #e0e0e0',
                }}
                className='bg-[#f8f9fa] dark:bg-slate-600 dark:text-white'
            >
                <Container className='flex justify-around'>

                    <Box>
                        <List>

                            <ListItem>
                                <h1 className='text-xl font-medium'>Features</h1>
                            </ListItem>
                            <ListItem>
                                <span>Services</span>
                            </ListItem>
                            <ListItem>
                                <span>Blog</span>
                            </ListItem>
                            <ListItem>
                                <span>About</span>
                            </ListItem>
                        </List>
                    </Box>
                    <Box>
                        <List>

                            <ListItem>
                                <h1 className='text-xl font-medium'>Routes</h1>
                            </ListItem>
                            <ListItem>
                                <span>All Blogs</span>
                            </ListItem>
                            <ListItem>
                                <span>Add Blogs</span>
                            </ListItem>
                            <ListItem>
                                <span>Featured Blog</span>
                            </ListItem>
                            <ListItem>
                                <span>Wishlist</span>
                            </ListItem>
                        </List>
                    </Box>
                    <Box>
                        <List>

                            <ListItem>
                                <h1 className='text-xl font-medium'>Legal</h1>
                            </ListItem>
                            <ListItem>
                                <span>Terms of use</span>
                            </ListItem>
                            <ListItem>
                                <span>Privacy policy</span>
                            </ListItem>
                            <ListItem>
                                <span>Cookie policy</span>
                            </ListItem>
                        </List>
                    </Box>
                </Container>

                <Container maxWidth="lg">
                    <Typography variant="body2" color="textSecondary" align="center">
                        © {new Date().getFullYear()} MyBlog. All rights reserved.
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        align="center"
                        sx={{ mt: 1 }}
                    >
                        <Link href="/privacy-policy" color="inherit" underline="hover">
                            Privacy Policy
                        </Link>{' '}
                        |{' '}
                        <Link href="/terms-of-service" color="inherit" underline="hover">
                            Terms of Service
                        </Link>
                    </Typography>
                </Container>
            </Box>
        </div>
    );
};

export default Footer;