import {AppBar, Toolbar, Breadcrumbs, Typography, InputBase, alpha} from '@mui/material';
import { makeStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 0,
    },
    appBar: {
        backgroundColor: '#000000 !important',
    },
    breadcrumbs: {
        flexGrow: 1,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 100,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight:50,
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const NavBar = () => {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="static" className={classes.appBar} >
                <Toolbar>
                    <Breadcrumbs className={classes.breadcrumbs} aria-label="breadcrumb">
                        <Typography color="white">All</Typography>
                        <Typography color="white">New</Typography>
                        <Typography color="white">Featured</Typography>
                        <Typography color="white">Gaming</Typography>
                        <Typography color="white">Electronics</Typography>
                        <Typography color="white">Jewelery</Typography>
                        <Typography color="white">Mix</Typography>
                        <Typography color="white">Other</Typography>
                    </Breadcrumbs>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;
