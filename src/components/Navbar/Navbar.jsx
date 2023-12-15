import { AppBar, Toolbar, Avatar, Tab, Badge, Dialog, DialogTitle, DialogContent, DialogContentText, Typography, MenuItem, ListItemButton, Switch, FormControlLabel } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsIcon from '@mui/icons-material/Apps';
import SendIcon from '@mui/icons-material/Send';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import FeedbackIcon from '@mui/icons-material/Feedback';
import Home from '../Home/Home';
import Friends from '../Friends/Friends';
import Watch from '../Watch/Watch';
import MarketPlace from '../MarketPlace/MarketPlace';
import '../fb_styles.css';
import DisplayProfile from '../DisplayProfile/DisplayProfile';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AppsMenu from '../AppsMenu/AppsMenu';
import { Component } from 'react';
import axios from 'axios';
import Messenger from '../Messenger/Messenger';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import CoverPage from '../CoverPage/CoverPage';
import CreatePost from '../CreatePost/CreatePost';
import { connect } from 'react-redux';
import { setDarkColor, setLightColor } from '../ReducerComp';
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabVal: props.tabvalue,
            appmenuprop: false,
            userData: [],
            message_flag: false,
            notification_flag: false,
            nottab: '1',
            account_settings: false,
            switchvalue: false
        }
    }

    async componentDidMount() {
        await axios.get('https://dummyjson.com/users?limit=15')
            .then((data) => {
                this.setState({ userData: data.data.users.slice() });

            })
            .catch((error) => console.log(error));

    }

    async componentDidUpdate(prevState) {
        if (prevState.tabvalue !== this.props.tabvalue) {
            this.setState({ tabVal: this.props.tabvalue });
        }

        document.onclick = (e) => {
            if (e.target.id !== 'Apps_Menu' && e.target.id !== 'post_button ' && this.state.appmenuprop === true && this.state.qs_flag === true) {
                this.setState({ appmenuprop: false })
            }
            else if (e.target.id !== 'notification_icon' && this.state.notification_flag === true) {
                this.setState({ notification_flag: false })
            }
            else if (e.target.id !== 'account_dp' && this.state.account_settings === true) {
                this.setState({ account_settings: false })
            }
        }
    }
    render() {
        return (
            <>
                <AppBar sx={{ backgroundColor: this.props.pcolor }}>
                    <Toolbar className='toolbar' >
                        <div className='left'>
                            <img src='/favicon.jpg' alt='Not loaded' className='left_image'></img>
                            <input type='text' className='left_searchtxt' style={{ backgroundColor: this.props.scolor, color: this.props.tcolor }} placeholder='Search Facebook' />
                            <SearchIcon sx={{ marginLeft: '-290px', color: 'grey', display: 'inline-block', marginTop: '4px', width: '30px', height: '30px' }} />
                        </div>
                        <div className='center'>
                            <TabContext value={this.state.tabVal}  >
                                <TabList TabIndicatorProps={{ sx: { height: "3px" } }} >
                                    <Tab value='/home' sx={{ marginLeft: '80px', color: this.props.tcolor }} icon={<HomeOutlinedIcon sx={{ fontSize: '40px' }} />}
                                        title='Home' component={Link} to='/home'
                                        onClick={() => this.setState({ tabVal: '/home' })} />
                                    <Tab value='/friends' sx={{ marginLeft: '80px', color: this.props.tcolor }} icon={<PeopleOutlinedIcon sx={{ fontSize: '40px' }} />}
                                        title='Friends' component={Link} to='/friends'
                                        onClick={() => this.setState({ tabVal: '/friends' })} />
                                    <Tab value='/watch' sx={{ marginLeft: '80px', color: this.props.tcolor }} icon={<OndemandVideoIcon sx={{ fontSize: '40px' }} />}
                                        title='Watch' component={Link} to='/watch'
                                        onClick={() => this.setState({ tabVal: '/watch' })} />
                                    <Tab value='/marketplace' sx={{ marginLeft: '80px', color: this.props.tcolor }} icon={<StorefrontOutlinedIcon sx={{ fontSize: '40px' }} />}
                                        title='MarketPlace' component={Link} to='/marketplace'
                                        onClick={() => this.setState({ tabVal: '/marketplace' })} />
                                </TabList>
                                <TabPanel value='/home' sx={{ width: '100%', position: 'absolute', left: '-20px', top: '50px' }}><Home /></TabPanel>
                                <TabPanel value='/friends' sx={{ width: '100%', position: 'absolute', left: '-20px', top: '50px' }}><Friends /></TabPanel>
                                <TabPanel value='/watch' sx={{ width: '100%', position: 'absolute', left: '-20px', top: '50px' }}><Watch /></TabPanel>
                                <TabPanel value='/marketplace' sx={{ width: '100%', position: 'absolute', left: '-20px', top: '50px' }}><MarketPlace /></TabPanel>
                                <TabPanel value='/cover' sx={{ width: '100%', position: 'absolute', left: '-20px', top: '50px' }}><CoverPage /></TabPanel>
                                <TabPanel value='/createpost' sx={{ width: '100%', position: 'absolute', left: '-20px', top: '50px' }}><CreatePost /></TabPanel>
                            </TabContext>
                        </div>
                        <div className='right'>
                            <Avatar sx={{ backgroundColor: this.props.scolor }} className='right_image' title='Menu' onClick={(e) => {
                                this.setState({ appmenuprop: !this.state.appmenuprop });
                            }}><AppsIcon sx={{ color: this.props.tcolor, fontSize: '30px' }} id='Apps_Menu' /></Avatar>
                            <Badge badgeContent={2} color='error' onClick={() => this.setState({ message_flag: !this.state.message_flag })}><Avatar sx={{ backgroundColor: this.props.scolor }} className='right_image' title='Messenger'><SendIcon sx={{ color: this.props.tcolor, fontSize: '30px' }} /></Avatar></Badge>
                            <Badge badgeContent={5} color='primary' onClick={() => this.setState({ notification_flag: !this.state.notification_flag })}><Avatar sx={{ backgroundColor: this.props.scolor }} className='right_image' title='Notifications'><NotificationsIcon sx={{ color: this.props.tcolor, fontSize: '30px' }} id='notification_icon' /></Avatar></Badge>
                            <Avatar id='account_dp' sx={{ backgroundColor: this.props.pcolor }} className='right_dp' title='Account' onClick={(e) => {
                                this.setState({ account_settings: !this.state.account_settings })
                            }}><DisplayProfile imagesrc='dp.jpg' /></Avatar>
                        </div>
                    </Toolbar>
                </AppBar>
                {this.state.appmenuprop === true && <AppsMenu st={this.state.appmenuprop} />}
                {this.state.message_flag === true && <Messenger pvalue={this.state.message_flag} users={this.state.userData.map((data) => data.firstName + ' ' + data.lastName)} />}
                <Dialog sx={{ backgroundColor: 'transparent', width: '550px', height: '500px', marginLeft: '1150px', marginTop: '60px' }} hideBackdrop
                    open={this.state.notification_flag} aria-labelledby='not_title' aria-describedby='not_desc'>
                    <DialogTitle id='not_title' sx={{ display: 'flex', alignItems: 'center', color: this.props.tcolor, backgroundColor: this.props.scolor }}>
                        <Typography variant='h5' sx={{ fontWeight: 'bold', flex: 8 }}>Notifications</Typography>
                        <MoreHorizIcon sx={{ flex: 4 }} />
                    </DialogTitle>
                    <DialogContent sx={{ width: '400px', height: '400px', backgroundColor: this.props.scolor }}>
                        <DialogContentText id='not_desc'>
                            <TabContext value={this.state.nottab}>
                                <TabList>
                                    <Tab sx={{ color: this.props.tcolor, textTransform: 'none', fontSize: '16px' }} value='1' onClick={() => this.setState({ nottab: '1' })} label='All'></Tab>
                                    <Tab sx={{ color: this.props.tcolor, textTransform: 'none', fontSize: '16px' }} value='2' onClick={() => this.setState({ nottab: '2' })} label='Unread'></Tab>
                                </TabList>
                                <TabPanel value='1'>
                                    <MenuItem sx={{ color: this.props.tcolor }}>News</MenuItem>
                                    <MenuItem sx={{ color: this.props.tcolor }}>Climate</MenuItem>
                                    <MenuItem sx={{ color: this.props.tcolor }}>Events</MenuItem>
                                </TabPanel>
                                <TabPanel value='2'>
                                    <MenuItem sx={{ color: this.props.tcolor }}>Politics</MenuItem>
                                    <MenuItem sx={{ color: this.props.tcolor }}>Technology</MenuItem>
                                    <MenuItem sx={{ color: this.props.tcolor }}>Sports</MenuItem>
                                </TabPanel>
                            </TabContext>
                        </DialogContentText>
                    </DialogContent>
                </Dialog>
                {
                    this.state.account_settings === true &&
                    < Dialog sx={{ backgroundColor: 'transparent', width: '550px', height: '650px', marginLeft: '1150px', marginTop: '70px' }} hideBackdrop open={this.state.account_settings} aria-describedby='account_desc'>
                        <DialogContent id='account_desc' sx={{ backgroundColor: this.props.pcolor }}>
                            <DialogContentText sx={{ width: '430px', height: '520px', color: this.props.tcolor }}>
                                <div style={{ margin: 'auto', backgroundColor: this.props.scolor, boxShadow: '2px 2px 2px black', width: '440px', height: '130px', borderRadius: '10px' }}>
                                    <ListItemButton sx={{ display: 'flex', alignItems: 'center' }}
                                        component={Link} to='/cover'>
                                        <Avatar sx={{ marginLeft: '20px', marginTop: '10px' }}><DisplayProfile imagesrc='dp.jpg' /></Avatar>
                                        <Typography sx={{ color: this.props.tcolor, marginLeft: '20px', marginTop: '10px', fontWeight: 'bold', fontSize: '20px' }}>{localStorage.getItem('first_name') + ' ' + localStorage.getItem('last_name')}</Typography>
                                    </ListItemButton>
                                    <div style={{ height: '1px', width: '90%', backgroundColor: 'lightgrey', marginTop: '1px', margin: 'auto' }}></div>
                                    <ListItemButton><Typography sx={{ color: 'blue', fontWeight: 'bolder', fontSize: '20px' }}>See all Profiles</Typography></ListItemButton>
                                </div>
                                <ListItemButton sx={{ display: 'flex', alignItens: 'center', marginTop: '20px', color: this.props.tcolor }}>
                                    <div style={{ width: '50px', height: '50px', backgroundColor: this.props.scolor, borderRadius: '50%', textAlign: 'center' }}><SettingsIcon sx={{ fontSize: '24px', marginTop: '10px' }} /></div>
                                    <Typography variant='h6' sx={{ fontWeight: 'bolder', flex: 10, marginLeft: '20px' }}>Settings & Privacy</Typography>
                                    <ArrowForwardIosIcon sx={{ flex: 2 }} />
                                </ListItemButton>
                                <ListItemButton sx={{ display: 'flex', alignItens: 'center', marginTop: '10px', color: this.props.tcolor }}>
                                    <div style={{ width: '50px', height: '50px', backgroundColor: this.props.scolor, borderRadius: '50%', textAlign: 'center' }}><HelpIcon sx={{ fontSize: '24px', marginTop: '10px' }} /></div>
                                    <Typography variant='h6' sx={{ fontWeight: 'bolder', flex: 10, marginLeft: '20px' }}>Help & Support</Typography>
                                    <ArrowForwardIosIcon sx={{ flex: 2 }} />
                                </ListItemButton>
                                <ListItemButton sx={{ display: 'flex', alignItens: 'center', marginTop: '10px', color: this.props.tcolor }}>
                                    <div style={{ width: '50px', height: '50px', backgroundColor: this.props.scolor, borderRadius: '50%', textAlign: 'center' }}><NightlightRoundIcon sx={{ fontSize: '24px', marginTop: '10px' }} /></div>
                                    <Typography variant='h6' sx={{ fontWeight: 'bolder', flex: 10, marginLeft: '20px' }}>Display & Accessibility</Typography>
                                    <FormControlLabel control={<Switch checked={this.state.switchvalue} onChange={async (e, newValue) => {
                                        this.setState({ switchvalue: newValue });
                                        if (this.state.switchvalue === true) {
                                            this.props.setDarkTheme();
                                        }
                                        if (this.state.switchvalue === false) {
                                            this.props.setLightTheme();
                                        }

                                    }} sx={{ flex: 2 }} />}></FormControlLabel>
                                </ListItemButton>
                                <ListItemButton sx={{ display: 'flex', alignItens: 'center', marginTop: '10px', color: this.props.tcolor }}>
                                    <div style={{ width: '50px', height: '50px', backgroundColor: this.props.scolor, borderRadius: '50%', textAlign: 'center' }}>< FeedbackIcon sx={{ fontSize: '24px', marginTop: '10px' }} /></div>
                                    <Typography variant='h6' sx={{ fontWeight: 'bolder', flex: 10, marginLeft: '20px' }}>Give feedback</Typography>
                                </ListItemButton>
                                <ListItemButton sx={{ display: 'flex', alignItens: 'center', marginTop: '10px', color: this.props.tcolor }}
                                    component={Link} to='/'
                                    onClick={() => {
                                        localStorage.removeItem('login_email');
                                        localStorage.removeItem('login_pwd');
                                    }}>
                                    <div style={{ width: '50px', height: '50px', backgroundColor: this.props.scolor, borderRadius: '50%', textAlign: 'center' }}><LogoutIcon sx={{ fontSize: '24px', marginTop: '10px' }} /></div>
                                    <Typography variant='h6' sx={{ fontWeight: 'bolder', flex: 10, marginLeft: '20px' }}>Log Out</Typography>
                                </ListItemButton>
                            </DialogContentText>
                        </DialogContent>
                    </Dialog>
                }

            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        pcolor: state.pcolor,
        scolor: state.scolor,
        tcolor: state.tcolor
    }
}

const mapStateToDispatch = (dispatch) => {
    return {
        setDarkTheme: () => dispatch(setDarkColor()),
        setLightTheme: () => dispatch(setLightColor())
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(Navbar);
