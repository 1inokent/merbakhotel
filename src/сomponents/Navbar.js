import * as React from 'react';
import { useEffect } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import FilterVintageOutlinedIcon from '@mui/icons-material/FilterVintageOutlined';
import {
  Link,
  MenuItem,
  Container,
  Menu,
  Typography,
  IconButton,
  Toolbar,
  Box,
  AppBar,
} from '@mui/material';

const PAGES = [
  {
    name: 'Главная',
    href: '/home',
  },
  {
    name: 'Информация',
    href: '#info',
  },
  {
    name: 'Комнаты',
    href: '#rooms',
  },
];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  // прозрачность при скролле
  const [isTransparent, setIsTransparent] = React.useState('transparent');
  const [isTitleTextColor, setIsTitleTextColor] = React.useState('#fff');

  useEffect(() => {
    const bgColor = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY === 0) {
        setIsTransparent('transparent');
      } else {
        setIsTransparent('inherit');
      }
    };

    window.addEventListener('scroll', bgColor);
    return () => {
      window.removeEventListener('scroll', bgColor);
    };
  }, [isTransparent]);

  useEffect(() => {
    const TitleTextColor = () => {
      const currentScrollY2 = window.scrollY;
      if (currentScrollY2 === 0) {
        setIsTitleTextColor('#fff');
      } else {
        setIsTitleTextColor('#000');
      }
    };
    window.addEventListener('scroll', TitleTextColor);
    return () => {
      window.removeEventListener('scroll', TitleTextColor);
    };
  }, [isTitleTextColor]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLinkClick = () => {
    handleCloseNavMenu();
  };

  return (
    <AppBar position="fixed" color={isTransparent} elevation={0}>
      <Container maxWidth={{ xs: 'xs', md: 'md', lg: 'lg', xl: 'xl' }}>
        <Toolbar disableGutters sx={{ flexDirection: 'row', fontSize: 17 }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/home"
            color={isTitleTextColor}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              letterSpacing: '.1rem',
              textDecoration: 'none',
            }}
          >
            <FilterVintageOutlinedIcon
              sx={{
                display: { xs: 'none', md: 'flex' },
                mr: 1,
              }}
              fontSize="medium"
            />
            Mer Bak
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              flexDirection: 'row-reverse',
              alignItems: 'center',
              order: 3,
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={
                {
                  // left: '4rem',
                }
              }
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
              sx={{
                display: { xs: 'block', md: 'block' },
                // '@media (max-width: 500px)': {
                //   margin: 0,
                // },
              }}
            >
              {PAGES.map((page) => (
                <MenuItem key={page.href} onClick={handleLinkClick}>
                  <Link
                    href={page.href}
                    key={page.href}
                    sx={{ color: '#000', textDecoration: 'none' }}
                  >
                    {page.name}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/home"
              sx={{
                mr: 15,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <FilterVintageOutlinedIcon
                sx={{
                  display: { xs: 'flex', md: 'none' },
                  mr: 1,
                }}
                fontSize="medium"
              />
              Mer Bak
            </Typography>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: 'none',
                md: 'flex',
                justifyContent: ' flex-end',
              },
            }}
          >
            {PAGES.map((page) => (
              <Link
                href={page.href}
                key={page.href}
                color={isTitleTextColor}
                sx={{
                  my: 2,
                  display: 'block',
                  textDecoration: 'none',
                  paddingRight: 3,
                }}
              >
                {page.name}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
