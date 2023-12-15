import { ListItem, ListItemButton, Typography, Tab, Box, Avatar, Button } from '@mui/material';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import CastConnectedOutlinedIcon from '@mui/icons-material/CastConnectedOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import FlagIcon from '@mui/icons-material/Flag';
import GradeIcon from '@mui/icons-material/Grade';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Component } from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import Contacts from './Contacts/Contacts';
import UserPost from './UserPost/UserPost';
import DisplayProfile from '../DisplayProfile/DisplayProfile';
import { Link } from 'react-router-dom';
import '../fb_styles.css';
import Story from './Story/Story';
import OwnPost from './UserPost/OwnPost';
import axios from 'axios';
import Menu from '../Menu/Menu';
import Messenger from '../Messenger/Messenger';
import Reels from './Story/Reels';
import { connect } from 'react-redux';
let total = 0, totalright = total, sum = 0, sumright = sum;
let addpx = 200;
class Home extends Component {
    constructor() {
        super();
        this.state = {
            storyvalue: '1',
            userData: [],
            userPost: [],
            options: false,
            message_flag: false,
            slideno: 0,
            slidenum: 0

        }
    }

    async componentDidMount() {
        await axios.get('https://dummyjson.com/users?limit=10')
            .then((data) => {
                this.setState({ userData: data.data.users.slice() });
            })
            .catch((error) => console.log(error));

        await axios.get('https://kiruthiga-12-facebook-clone-api.onrender.com/api/posts')
            .then(async (data) => {
                await this.setState({ userPost: data.data })
            })
            .catch((error) => console.log(error));
        if (this.state.storyvalue === '1') {
            if (this.state.slideno === 0) {
                document.getElementById('left_arrow').style.display = 'none';
            }
        }
        else if (this.state.storyvalur === '2') {
            if (this.state.slidenum === 0) {
                document.getElementById('l_arrow').style.display = 'none';
            }
        }

    }


    async componentDidUpdate() {
        if (this.state.storyvalue === '1') {
            if (this.state.slideno === 0)
                document.getElementById('left_arrow').style.display = 'none';
            else if (this.state.slideno !== 0 && this.state.slideno !== 6) {
                document.getElementById('left_arrow').style.display = 'inline-block';
                document.getElementById('right_arrow').style.display = 'inline-block';
            }
            else if (this.state.slideno === 6)
                document.getElementById('right_arrow').style.display = 'none';
        }
        else if (this.state.storyvalue === '2') {
            if (this.state.slidenum === 0)
                document.getElementById('l_arrow').style.display = 'none';
            else if (this.state.slidenum !== 0 && this.state.slidenum !== 6) {
                document.getElementById('l_arrow').style.display = 'inline-block';
                document.getElementById('r_arrow').style.display = 'inline-block';
            }
            else if (this.state.slidenum === 6)
                document.getElementById('r_arrow').style.display = 'none';
        }

    }
    render() {
        return (
            <div className='home_container' style={{ backgroundColor: this.props.scolor }}>
                <div className='home_left' style={{ color: this.props.tcolor }}>
                    <ListItemButton sx={{ marginTop: '20px', display: 'flex', alignContent: 'center', justifyContent: 'flex-start', width: '80%' }}
                        component={Link} to='/cover' >
                        <Avatar><DisplayProfile imagesrc='dp.jpg' /></Avatar>
                        <Typography sx={{
                            fontSize: '19px',
                            fontWeight: '600',
                            marginLeft: '20px'
                        }} variant='subtitle1'>{localStorage.getItem('first_name') + ' ' + localStorage.getItem('last_name')}</Typography>
                    </ListItemButton>
                    <ListItemButton sx={{ display: 'flex', alignContent: 'center', justifyContent: 'flex-start', width: '80%' }}
                        component={Link} to='/friends'>
                        <PeopleOutlineOutlinedIcon color='primary' sx={{ fontSize: '36px' }} />
                        <Typography sx={{
                            fontSize: '19px',
                            fontWeight: '600',
                            marginLeft: '22px'
                        }} variant='subtitle1'> Find Friends</Typography>
                    </ListItemButton>
                    <ListItemButton sx={{ display: 'flex', alignContent: 'center', justifyContent: 'flex-start', width: '80%' }}>
                        <CastConnectedOutlinedIcon color='primary' sx={{ fontSize: '36px' }} />
                        <Typography sx={{
                            fontSize: '19px',
                            fontWeight: '600',
                            marginLeft: '22px'
                        }} variant='subtitle1'> Most Recent</Typography>
                    </ListItemButton>
                    <ListItemButton sx={{ display: 'flex', alignContent: 'center', justifyContent: 'flex-start', width: '80%' }}>
                        <PeopleOutlineOutlinedIcon color='primary' sx={{ fontSize: '36px' }} />
                        <Typography sx={{
                            fontSize: '19px',
                            fontWeight: '600',
                            marginLeft: '22px'
                        }} variant='subtitle1'> Groups</Typography>
                    </ListItemButton>
                    <ListItemButton sx={{ display: 'flex', alignContent: 'center', justifyContent: 'flex-start', width: '80%' }}
                        component={Link} to='/marketplace'>
                        <StorefrontIcon color='primary' sx={{ fontSize: '36px' }} />
                        <Typography sx={{
                            fontSize: '19px',
                            fontWeight: '600',
                            marginLeft: '22px'
                        }} variant='subtitle1'> Market Place</Typography>
                    </ListItemButton>
                    <ListItemButton sx={{ display: 'flex', alignContent: 'center', justifyContent: 'flex-start', width: '80%' }}
                        component={Link} to='/watch'>
                        <OndemandVideoOutlinedIcon color='primary' sx={{ fontSize: '36px' }} />
                        <Typography sx={{
                            fontSize: '19px',
                            fontWeight: '600',
                            marginLeft: '22px'
                        }} variant='subtitle1'> Watch</Typography>
                    </ListItemButton>
                    <ListItemButton sx={{ display: 'flex', alignContent: 'center', justifyContent: 'flex-start', width: '80%' }}>
                        < HistoryOutlinedIcon color='primary' sx={{ fontSize: '36px' }} />
                        <Typography sx={{
                            fontSize: '19px',
                            fontWeight: '600',
                            marginLeft: '22px'
                        }} variant='subtitle1'> Memories</Typography>
                    </ListItemButton>
                    <ListItemButton sx={{ display: 'flex', alignContent: 'center', justifyContent: 'flex-start', width: '80%' }}>
                        <BookmarkOutlinedIcon color='secondary' sx={{ fontSize: '36px' }} />
                        <Typography sx={{
                            fontSize: '19px',
                            fontWeight: '600',
                            marginLeft: '22px'
                        }} variant='subtitle1'> Saved</Typography>
                    </ListItemButton>
                    <ListItemButton sx={{ display: 'flex', alignContent: 'center', justifyContent: 'flex-start', width: '80%' }}>
                        <FlagIcon color='warning' sx={{ fontSize: '36px' }} />
                        <Typography sx={{
                            fontSize: '19px',
                            fontWeight: '600',
                            marginLeft: '22px'
                        }} variant='subtitle1'> Pages</Typography>
                    </ListItemButton>
                    <ListItemButton sx={{ display: 'flex', alignContent: 'center', justifyContent: 'flex-start', width: '80%' }}>
                        <PeopleOutlineOutlinedIcon sx={{ fontSize: '36px' }} />
                        <Typography sx={{
                            fontSize: '19px',
                            fontWeight: '600',
                            marginLeft: '22px'
                        }} variant='subtitle1'> Events</Typography>
                    </ListItemButton>
                    <ListItemButton sx={{ display: 'flex', alignContent: 'center', justifyContent: 'flex-start', width: '80%' }}>
                        <GradeIcon sx={{ color: 'goldenrod', fontSize: '36px' }} />
                        <Typography sx={{
                            fontSize: '19px',
                            fontWeight: '600',
                            marginLeft: '22px'
                        }} variant='subtitle1'>Favourites</Typography>
                    </ListItemButton>
                    <Box sx={{ display: 'flex', flexDirection: 'row', width: '80%', flexWrap: 'wrap', marginTop: '20px' }}>
                        <ListItem sx={{ flex: 1, marginLeft: '10px', '&:hover': { textDecoration: 'underline', cursor: 'pointer' } }}>Privacy.</ListItem>
                        <ListItem sx={{ flex: 1, marginLeft: '-20px', '&:hover': { textDecoration: 'underline', cursor: 'pointer' } }}>Terms.</ListItem>
                        <ListItem sx={{ flex: 1, marginLeft: '-20px', '&:hover': { textDecoration: 'underline', cursor: 'pointer' } }}>Advertising.</ListItem>
                        <ListItem sx={{ flex: 2, marginLeft: '-20px', '&:hover': { textDecoration: 'underline', cursor: 'pointer' } }}>Ad Choices.</ListItem>
                        <ListItem sx={{ flex: 0.5, marginLeft: '10px', marginTop: '-10px', '&:hover': { textDecoration: 'underline', cursor: 'pointer' } }}>Cookies.</ListItem>
                        <ListItem sx={{ flex: 0.5, marginLeft: '-20px', marginTop: '-10px', '&:hover': { textDecoration: 'underline', cursor: 'pointer' } }}>More.</ListItem>
                        <ListItem sx={{ flex: 0.5, marginLeft: '-20px', marginTop: '-10px' }}>Meta @ 2023</ListItem>
                    </Box>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
                <div className='home_center' style={{ color: this.props.tcolor }}>
                    <div className='stories_reels' style={{ backgroundColor: this.props.pcolor }}>
                        <TabContext value={this.state.storyvalue}>
                            <TabList sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} TabIndicatorProps={{ sx: { height: "3px" } }}>
                                <Tab value='1' label='Stories' sx={{ textTransform: 'none', fontSize: '20px', fontWeight: 'bold', flex: '5', marginLeft: '10px', color: this.props.tcolor }} icon={<AutoStoriesIcon sx={{ color: this.props.tcolor, position: 'absolute', marginTop: '6px', fontSize: '29px', marginLeft: '-120px' }} />}
                                    onClick={() => this.setState({ storyvalue: '1' })} />
                                <Tab value='2' label='Reels' sx={{ textTransform: 'none', fontSize: '20px', fontWeight: 'bold', flex: '5', marginRight: '10px', color: this.props.tcolor }} icon={< MovieFilterIcon sx={{ color: this.props.tcolor, position: 'absolute', marginTop: '6px', fontSize: '29px', marginLeft: '-120px' }} />}
                                    onClick={() => this.setState({ storyvalue: '2' })} />
                            </TabList>
                            <div style={{ height: '1px', width: '100%', backgroundColor: 'lightgrey', marginTop: '1px' }}></div>
                            <TabPanel value='1'>
                                <div className='stories'>
                                    <div id='left_arrow' style={{ textAlign: 'center', width: '50px', height: '30px', marginLeft: '-100px', position: 'fixed', marginTop: '10px' }}>
                                        <ArrowBackIosIcon sx={{ fontSize: '30px', color: this.props.tcolor, cursor: 'pointer', position: 'fixed', zIndex: 1 }}
                                            onClick={async () => {
                                                total = total + addpx;
                                                totalright = total;
                                                this.setState({ slideno: this.state.slideno - 1 })
                                                document.getElementById('stories_container1').style.transform = `translateX(${total}px)`;
                                            }} /></div>
                                    <div id='right_arrow' style={{ textAlign: 'center', width: '50px', marginLeft: '600px', position: 'fixed', height: '30px' }}>
                                        < ArrowForwardIosIcon sx={{ cursor: 'pointer', position: 'fixed', fontSize: '30px', color: this.props.tcolor, zIndex: 1 }}
                                            onClick={async () => {
                                                totalright = totalright - addpx;
                                                total = totalright;
                                                this.setState({ slideno: this.state.slideno + 1 })
                                                document.getElementById('stories_container1').style.transform = `translateX(${totalright}px)`;
                                            }} /></div>
                                    <div className='stories_container1' id='stories_container1'>
                                        {this.state.userData.map((li) => {
                                            return <Story firstname={li.firstName} dp={li.image} />
                                        })}
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel value='2'>
                                <div className='reels'>
                                    <div id='l_arrow' style={{ textAlign: 'center', width: '50px', height: '30px', marginLeft: '-100px', position: 'fixed', marginTop: '10px' }}>
                                        <ArrowBackIosIcon sx={{ fontSize: '30px', color: this.props.tcolor, cursor: 'pointer', zIndex: 1, position: 'fixed' }}
                                            onClick={async () => {
                                                sum = sum + addpx;
                                                sumright = sum;
                                                this.setState({ slidenum: this.state.slidenum - 1 })
                                                document.getElementById('reels_container1').style.transform = `translateX(${sum}px)`;
                                            }} /></div>
                                    <div id='r_arrow' style={{ textAlign: 'center', width: '50px', marginLeft: '600px', position: 'fixed', height: '30px' }}>
                                        < ArrowForwardIosIcon sx={{ cursor: 'pointer', position: 'fixed', fontSize: '30px', color: this.props.tcolor, zIndex: 1 }}
                                            onClick={async () => {
                                                sumright = sumright - addpx;
                                                sum = sumright;
                                                this.setState({ slidenum: this.state.slidenum + 1 })
                                                document.getElementById('reels_container1').style.transform = `translateX(${sumright}px)`;
                                            }} /></div>
                                    <div className='reels_container1' id='reels_container1'>
                                        {this.state.userData.map((li) => {
                                            return <Reels viewers={li.id} dp={li.image} />
                                        })}
                                    </div>
                                </div>
                            </TabPanel>
                        </TabContext>
                    </div>
                    <OwnPost />
                    {this.state.userPost.map((value) => <UserPost imgsrc='dp.jpg' posttitle={value.brand}
                        postedtime={value.id} postimg={value.image}
                        description={value.description} />)}
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
                <div className="home_right" style={{ color: this.props.tcolor }}>
                    <ListItem> <Typography sx={{
                        fontSize: '20px',
                        fontWeight: '600'
                    }} variant='subtitle1'>Contacts</Typography>
                        <ListItemButton sx={{ padding: '15px', marginLeft: '110px', borderRadius: '50%', textAlign: 'center' }} title='New call'><VideoCallIcon sx={{ fontSize: '30px' }} /></ListItemButton>
                        <ListItemButton sx={{ padding: '15px', marginLeft: '20px', borderRadius: '50%', textAlign: 'center' }} title='Search by Name or group'
                            onClick={() => this.setState({ message_flag: !this.state.message_flag })} ><SearchIcon sx={{ fontSize: '30px' }} /></ListItemButton>
                        <ListItemButton sx={{ padding: '15px', marginLeft: '30px', borderRadius: '50%', textAlign: 'center' }} title='options'
                            onClick={() => this.setState({ options: !this.state.options })}> <MoreHorizIcon sx={{ fontSize: '30px' }} /></ListItemButton>
                    </ListItem>
                    {this.state.options && <Menu value={this.state.options} />}
                    {this.state.userData.map((value) => <Contacts firstName={value.firstName} lastName={value.lastName} imgsrc={value.image} />)}
                    <hr style={{ width: '80%', paddingRight: 0 }} />
                    <Typography variant='body1' className='group_heading'> Group Conversations</Typography>
                    <ListItemButton sx={{ marginTop: '19px' }}>
                        <AddIcon sx={{ border: '2px solid transparent', borderRadius: '50%', backgroundColor: this.props.tcolor, color: this.props.pcolor, marginLeft: '40px', padding: '5px' }} />
                        <Typography variant='body1' className='group_create'
                            onClick={() => this.setState({ message_flag: !this.state.message_flag })}>Create new group</Typography>
                    </ListItemButton>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div style={{ backgroundColor: this.props.tcolor, width: '50px', height: '50px', marginLeft: '330px', marginTop: '630px', position: 'fixed', borderRadius: '50%', cursor: 'pointer' }} title='New message'>
                        <EditIcon sx={{ color: this.props.pcolor, marginLeft: '14px', marginTop: '11px' }} onClick={() => this.setState({ message_flag: !this.state.message_flag })} />
                        {this.state.message_flag === true && <Messenger pvalue={this.state.message_flag} users={this.state.userData.map((data) => data.firstName + ' ' + data.lastName)} />}
                    </div>
                </div>
            </div >

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
export default connect(mapStateToProps, null)(Home);
