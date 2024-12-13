import {Typography,Grid, TextField,InputAdornment, CardActionArea} from '@mui/material';
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Filter2Icon from "@mui/icons-material/Filter2";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import CardMedia from "@mui/material/CardMedia";

const Header = () => {


    return (
        <div>
            <Grid container spacing={3} sx={{marginLeft:0}}>
                <Grid size={8}>
                    <Card sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        background: 'linear-gradient(45deg, #5F9FFF 22.44%, #2B2B2B 29.24%)',
                        color: 'white',
                        marginX: 0.5,
                        marginY: 0.5
                    }}>
                        <Box sx={{display: 'flex', flexDirection: 'column', maxWidth: 350}}>
                            <CardContent sx={{flex: '1 0 auto', textAlign: 'left'}}>
                                <Typography component="div" variant="h6">
                                    Refer Friends
                                </Typography>
                                <Typography
                                    variant="caption"
                                    component="p"
                                >
                                    Let the whole world know about people here and earn more! Receive passive
                                    income for each player who follows your link. Create your own campaign for
                                    unique referral link.
                                </Typography><br/>
                                <Box sx={{display: 'flex', flexDirection: 'row', marginBottom: 8}}>
                                    <Typography component="div" variant="h6" sx={{marginRight: 2}}>
                                        <Filter2Icon/>
                                    </Typography>
                                    <Typography component="div" variant="h6">
                                        Friends referred
                                    </Typography>
                                </Box>
                                <TextField
                                    id="input-with-icon-textfield"
                                    label=""
                                    disabled
                                    value="platform.com/link/415rebfiaeubf"
                                    slotProps={{
                                        input: {
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <InsertLinkIcon/>
                                                </InputAdornment>
                                            ),
                                        },
                                    }}
                                    variant="standard"
                                />
                            </CardContent>
                        </Box>
                        <CardMedia
                            component="img"
                            sx={{width: 170, height: 250}}
                            src="/assets/img_3.png"
                            alt="Live from space album cover"
                        />
                    </Card>
                </Grid>
                <Grid size={3}>
                    <Box>
                        <Card sx={{
                            maxWidth: 170,
                            background: 'linear-gradient(45deg, #5F9FFF 22.44%, #2B2B2B 29.24%)',
                            color: 'white',
                            marginX: 0.5,
                            marginY: 0.5
                        }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    width="250"
                                    image="/assets/img_2.png"
                                    alt="green iguana"
                                    sx={{position: 'relative', overflow: 'visible', width: 150}}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        15%
                                    </Typography>
                                    <Typography gutterBottom variant="caption" component="div">
                                        From Pure Profit
                                    </Typography>
                                    <Typography variant="caption" sx={{
                                        color: 'white',
                                        fontSize: 10,
                                        letterSpacing: 0,
                                        lineHeight: 0
                                    }}>
                                        15% from platform's house edge will be paid your Referrals winning bet.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Box>
                </Grid>
                <Grid size={3}>
                    <Box>
                        <Card sx={{
                            maxWidth: 170,
                            background: 'linear-gradient(45deg, #5F9FFF 22.44%, #2B2B2B 29.24%)',
                            color: 'white',
                            marginX: 0.5,
                            marginY: 0.5
                        }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    width="250"
                                    image="/assets/img_1.png"
                                    alt="green iguana"
                                    sx={{position: 'relative', overflow: 'visible', width: 150, display: 'inline'}}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        2.5%
                                    </Typography>
                                    <Typography gutterBottom variant="caption" component="div">
                                        From All Winnings
                                    </Typography>
                                    <Typography variant="caption" sx={{
                                        color: 'white',
                                        fontSize: 10,
                                        letterSpacing: 0,
                                        lineHeight: 0
                                    }}>
                                        2,5% from all winnings will be paid to your Referrals winning bet.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Box>
                </Grid>
                <Grid size={3}>
                    <Box>
                        <Card sx={{
                            maxWidth: 170,
                            background: 'linear-gradient(45deg, #5F9FFF 22.44%, #2B2B2B 29.24%)',
                            color: 'white',
                            marginX: 0.5,
                            marginY: 0.5
                        }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    width="250"
                                    image="/assets/img.png"
                                    alt="green iguana"
                                    sx={{position: 'relative', overflow: 'visible', width: 70, display: 'inline'}}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        1,5%
                                    </Typography>
                                    <Typography gutterBottom variant="caption" component="div">
                                        From Deposit
                                    </Typography>
                                    <Typography variant="caption" sx={{
                                        color: 'white',
                                        fontSize: 10,
                                        letterSpacing: 0,
                                        lineHeight: 0
                                    }}>
                                        1,5% from depositing on our platform will be paid back in your account.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default Header;
