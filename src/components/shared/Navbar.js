import logo from "@/assets/image/logo.png";
import { Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import FacebookIcon from '@mui/icons-material/Facebook';
import { IconButton, Stack } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import Link from "next/link";
const navlinks = [
    { router: "Home", routerPath: "/" },
    { router: "Pages", routerPath: "/pages" },
    { router: "Category", routerPath: "/category" },
    { router: "News", routerPath: "/news" },
    { router: "Post", routerPath: "/post" },
    { router: "Contact", routerPath: "/contact" },
];
const Navbar = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="xl" className="bg-gray-900">
                <Toolbar disableGutters >
                    <Image src={logo} alt='Logo' width={100} height={100} />
                    <Box className="w-full text-center">
                        {navlinks.map((item) => (
                            <Link key={item} href={item.routerPath}>
                                <Button
                                    className="text-white"
                                >
                                    {item.router}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                    <Box sx={{ "& svg": { color: "white" } }}>
                        <Stack
                            direction="row"
                            divider={<Divider orientation="vertical" flexItem />}
                            spacing={1}
                        >
                            <IconButton color="white" aria-label="Facebook">
                                <FacebookIcon />
                            </IconButton>
                            <IconButton color="white" aria-label="Twitter">
                                <Twitter />
                            </IconButton>
                            <IconButton color="white" aria-label="Instagram">
                                <Instagram />
                            </IconButton>
                            <IconButton color="white" aria-label="Linkedin">
                                <LinkedIn />
                            </IconButton>
                        </Stack>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;
