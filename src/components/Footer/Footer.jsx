import { Box, Container, Typography, Link } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import RedditIcon from '@mui/icons-material/Reddit';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    footer: {
        background: 'linear-gradient(45deg, #181A1D, #0F1012)',
        padding: '20px 0',
        color: '#fff',
        width: '100%',
    },
    left: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    right: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    logo: {
        fontWeight: 'bold',
        fontSize: '1.5em',
        marginBottom: '10px',
    },
    links: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        color:'#fff !important',
        marginRight:50,
    },

    textBelowLogo: {
        fontSize: '0.8em',
        color: '#ccc',
    }
});

const Footer = () => {
    const classes = useStyles();

    return (
        <Box className={classes.footer}>
            <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box className={classes.left}>
                    <Typography className={classes.logo}>LOGO</Typography>
                    <Typography className={classes.textBelowLogo} variant="caption">Here goes a short description about the company</Typography>
                    <Box sx={{marginTop:5}}>
                        <TwitterIcon sx={{padding:1}}/>
                        <YouTubeIcon sx={{padding:1}}/>
                        <InstagramIcon sx={{padding:1}}/>
                        <RedditIcon sx={{padding:1}}/>
                    </Box>
                    <Typography className={classes.textBelowLogo} variant="caption">@ Copyright 2023</Typography>
                </Box>
                <Box sx={{display:"flex", flexDirection:"column"}}>
                    <Box className={classes.right}>
                        <Box className={classes.links}>
                            <Link href="#" sx={{color:'#fff !important'}} variant="caption">Links</Link>
                            <Link href="#" sx={{color:'#fff !important'}} variant="caption">Home</Link>
                            <Link href="#" sx={{color:'#fff !important'}} variant="caption">Battles</Link>
                            <Link href="#" sx={{color:'#fff !important'}} variant="caption">Rewards</Link>
                        </Box>
                        <Box className={classes.links}>
                            <Link href="#" sx={{color:'#fff !important'}} variant="caption">Other</Link>
                            <Link href="#" sx={{color:'#fff !important'}} variant="caption">Home</Link>
                            <Link href="#" sx={{color:'#fff !important'}} variant="caption">Battles</Link>
                            <Link href="#" sx={{color:'#fff !important'}} variant="caption">Rewards</Link>
                        </Box>
                        <Box className={classes.links}>
                            <Link href="#" sx={{color:'#fff !important'}} variant="caption">Legal</Link>
                            <Link href="#" sx={{color:'#fff !important'}} variant="caption">Home</Link>
                            <Link href="#" sx={{color:'#fff !important'}} variant="caption">Battles</Link>
                            <Link href="#" sx={{color:'#fff !important'}} variant="caption">Rewards</Link>
                        </Box>
                    </Box>
                    <Box sx={{display:"flex", flexDirection:"row", paddingTop:5}}>
                        <Typography variant="caption" sx={{paddingRight:2}}>Payment Options</Typography>
                        <CreditCardIcon/> <CurrencyBitcoinIcon/> <CreditCardIcon/> <CurrencyBitcoinIcon/>
                    </Box>
                </Box>

            </Container>
        </Box>
    );
};

export default Footer;
