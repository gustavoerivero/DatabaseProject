import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Button,
    Toolbar,
    IconButton,
    MenuItem,
    Menu,
} from '@material-ui/core';
import BusinessIcon from '@material-ui/icons/Business';
import PeopleIcon from '@material-ui/icons/People';
import MoreIcon from '@material-ui/icons/MoreVert';
import '../assets/css/index.css'

const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: 'Nunito',
    },
    links: {
        color: theme.palette.text.primary,
    },
    appbar: {
        backgroundColor: theme.palette.background.paper,
    },
    appbarWrapper: {
        width:  '90%',
        margin: '0 auto',
    },
    appbarTitle: {
        flexGrow: '1',
    },
    colorText:{
        color: theme.palette.text.secondary,
        opacity: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
        display: 'none',
        },
    },
}));

export default function NavBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'bottom' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'bottom', horizontal: 'bottom' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Cuentas</MenuItem>
            <MenuItem onClick={handleMenuClose}>Créditos</MenuItem>
        </Menu>
    );

  const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'bottom' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'bottom', horizontal: 'bottom' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <PeopleIcon />
                </IconButton>
                <p>Personas</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <BusinessIcon />
                </IconButton>
                <p>Empresas</p>
            </MenuItem>
        </Menu>
    );

  return (
        <div className={ classes.root }>
            <AppBar className={ classes.appbar }>
                <Toolbar className={ classes.appbarWrapper }>
                    <h1
                        className={ classes.appbarTitle }
                    >
                        <a href='/' id='link'>
                            Flame<span className={ classes.colorText }>Bank</span>
                        </a>
                    </h1>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <Button
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            Personas
                        </Button>
                        <Button
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            Empresas
                        </Button>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}