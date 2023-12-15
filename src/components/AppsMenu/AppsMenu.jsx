import { Component } from 'react';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import CastConnectedOutlinedIcon from '@mui/icons-material/CastConnectedOutlined';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import EditIcon from '@mui/icons-material/Edit';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import CampaignIcon from '@mui/icons-material/Campaign';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import StorefrontIcon from '@mui/icons-material/Storefront';
import FlagIcon from '@mui/icons-material/Flag';
import GradeIcon from '@mui/icons-material/Grade';
import CloseIcon from '@mui/icons-material/Close';
import { connect } from 'react-redux';
import axios from 'axios';
import {
    Typography, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, ListItemButton, Button
    , Avatar, TextField
} from '@mui/material';
import { Link } from 'react-router-dom';
import DisplayProfile from '../DisplayProfile/DisplayProfile';
class AppsMenu extends Component {
    constructor(props) {
        super();
        this.state = {
            app_val: props.st,
            qs_flag: false

        }
    }
    render() {
        return (
            <>
                <Dialog id='menu_dialogue' hideBackdrop sx={{ padding: 0, left: '1000px', right: '-200px', top: '80px', position: 'absolute', backgroundColor: 'transparent', height: '660px', width: '670px' }} aria-labelledby='appmenu_title' aria-describedby='appmenu_desc' open={this.state.app_val}>
                    <DialogTitle id='appmenu_title' sx={{ backgroundColor: this.props.scolor, color: this.props.tcolor }} ><Typography variant='h4' sx={{ fontFamily: 'Arial', paddingLeft: '20px', borderRadius: '20px' }}>Menu</Typography></DialogTitle>
                    <DialogContent sx={{ width: '550px', height: '700px', backgroundColor: this.props.scolor }}>
                        <DialogContentText id='appmenu_desc' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: this.props.scolor }}>
                            <div style={{ padding: '15px', borderRadius: '3px', flex: 7, width: '100px', height: '100%', color: this.props.tcolor, backgroundColor: this.props.pcolor }}>
                                <input type='text' placeholder='Search here' style={{ outline: 'none', width: '240px', padding: '10px', fontSize: '16px', border: '2px solid transparent', borderRadius: '10px', color: this.props.tcolor, backgroundColor: this.props.scolor }} />
                                <Typography variant='subtitle1' sx={{ color: this.props.tcolor, fontWeight: 'bold', marginTop: '20px' }}>Social</Typography>
                                <ListItemButton sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                                    <PeopleOutlineOutlinedIcon sx={{ fontSize: '36px' }} />
                                    <Typography sx={{
                                        fontSize: '19px',
                                        fontWeight: '600',
                                        marginLeft: '22px',
                                        color: this.props.tcolor
                                    }} variant='subtitle1'> Events</Typography>
                                </ListItemButton>
                                <ListItemButton sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '80%' }}
                                    component={Link} to='/friends'>
                                    <PeopleOutlineOutlinedIcon color='primary' sx={{ fontSize: '36px' }} />
                                    <Typography sx={{
                                        fontSize: '19px',
                                        fontWeight: '600',
                                        marginLeft: '22px',
                                        color: this.props.tcolor
                                    }} variant='subtitle1'> Find Friends</Typography>
                                </ListItemButton>
                                <ListItemButton sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '80%' }}>
                                    <PeopleOutlineOutlinedIcon color='warning' sx={{ fontSize: '36px' }} />
                                    <Typography sx={{
                                        fontSize: '19px',
                                        fontWeight: '600',
                                        marginLeft: '22px',
                                        color: this.props.tcolor
                                    }} variant='subtitle1'> Groups</Typography>
                                </ListItemButton>
                                <ListItemButton sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '80%' }}>
                                    <GradeIcon sx={{ color: 'goldenrod', fontSize: '36px' }} />
                                    <Typography sx={{
                                        fontSize: '19px',
                                        fontWeight: '600',
                                        marginLeft: '22px',
                                        color: this.props.tcolor
                                    }} variant='subtitle1'>Favourites</Typography>
                                </ListItemButton>
                                <ListItemButton sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '80%' }}>
                                    <CastConnectedOutlinedIcon color='primary' sx={{ fontSize: '36px' }} />
                                    <Typography sx={{
                                        fontSize: '19px',
                                        fontWeight: '600',
                                        marginLeft: '22px',
                                        color: this.props.tcolor
                                    }} variant='subtitle1'> Most Recent</Typography>
                                </ListItemButton>
                                <ListItemButton sx={{ display: 'flex', alignContent: 'center', justifyContent: 'flex-start', width: '80%' }}>
                                    <FlagIcon color='warning' sx={{ fontSize: '36px' }} />
                                    <Typography sx={{
                                        fontSize: '19px',
                                        fontWeight: '600',
                                        marginLeft: '22px',
                                        color: this.props.tcolor
                                    }} variant='subtitle1'> Pages</Typography>
                                </ListItemButton>
                                <hr />
                                <Typography variant='subtitle1' sx={{ color: this.props.tcolor, fontWeight: 'bold', marginTop: '20px' }}>Shopping</Typography>
                                <ListItemButton sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '80%' }}
                                    component={Link} to='/marketplace'>
                                    <StorefrontIcon color='primary' sx={{ fontSize: '36px' }} />
                                    <Typography sx={{
                                        fontSize: '19px',
                                        fontWeight: '600',
                                        marginLeft: '22px',
                                        color: this.props.tcolor
                                    }} variant='subtitle1'> Market Place</Typography>
                                </ListItemButton>
                                <hr />
                                <Typography variant='subtitle1' sx={{ color: this.props.tcolor, fontWeight: 'bold', marginTop: '20px' }}>Personal</Typography>
                                <ListItemButton sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '80%' }}>
                                    < HistoryOutlinedIcon color='primary' sx={{ fontSize: '36px' }} />
                                    <Typography sx={{
                                        fontSize: '19px',
                                        fontWeight: '600',
                                        marginLeft: '22px',
                                        color: this.props.tcolor
                                    }} variant='subtitle1'> Memories</Typography>
                                </ListItemButton>
                                <ListItemButton sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '80%' }}>
                                    <BookmarkOutlinedIcon color='secondary' sx={{ fontSize: '36px' }} />
                                    <Typography sx={{
                                        fontSize: '19px',
                                        fontWeight: '600',
                                        marginLeft: '22px',
                                        color: this.props.tcolor
                                    }} variant='subtitle1'> Saved</Typography>
                                </ListItemButton>
                            </div>
                            <div style={{ padding: '15px', marginLeft: '20px', borderRadius: '3px', flex: 5, width: '100px', height: '100%', backgroundColor: this.props.pcolor, marginTop: '-140px' }}>
                                <Typography variant='h5' sx={{ color: this.props.tcolor, fontWeight: 'bold', marginTop: '20px' }}>Create</Typography>
                                <ListItemButton sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '80%' }}
                                    onClick={() => {
                                        this.setState({ qs_flag: true });
                                    }} id='post_button'>
                                    <EditIcon sx={{ fontSize: '27px', color: this.props.tcolor }} />
                                    <Typography sx={{
                                        fontSize: '19px',
                                        fontWeight: '600',
                                        marginLeft: '22px',
                                        color: this.props.tcolor
                                    }} variant='subtitle1'> Post</Typography>
                                </ListItemButton>
                                <ListItemButton sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '80%' }}
                                    component={Link} to='/createpost'>
                                    <AutoStoriesIcon sx={{ fontSize: '27px', color: this.props.tcolor }} />
                                    <Typography sx={{
                                        fontSize: '19px',
                                        fontWeight: '600',
                                        marginLeft: '22px',
                                        color: this.props.tcolor
                                    }} variant='subtitle1'> Story</Typography>
                                </ListItemButton>
                                <ListItemButton sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '80%' }}>
                                    <VideoCallIcon sx={{ fontSize: '27px', color: this.props.tcolor }} />
                                    <Typography sx={{
                                        fontSize: '19px',
                                        fontWeight: '600',
                                        marginLeft: '22px',
                                        color: this.props.tcolor
                                    }} variant='subtitle1'> Room</Typography>
                                </ListItemButton>
                                <ListItemButton sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '80%' }}>
                                    <FlagIcon sx={{ fontSize: '27px', color: this.props.tcolor }} />
                                    <Typography sx={{
                                        fontSize: '19px',
                                        fontWeight: '600',
                                        marginLeft: '22px',
                                        color: this.props.tcolor
                                    }} variant='subtitle1'>Page</Typography>
                                </ListItemButton>
                                <ListItemButton sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '80%' }}>
                                    <CampaignIcon sx={{ fontSize: '27px', color: this.props.tcolor }} />
                                    <Typography sx={{
                                        fontSize: '19px',
                                        fontWeight: '600',
                                        marginLeft: '22px',
                                        color: this.props.tcolor
                                    }} variant='subtitle1'> Ad</Typography>
                                </ListItemButton>
                                <ListItemButton sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '80%' }}>
                                    <PeopleOutlineOutlinedIcon sx={{ fontSize: '27px', color: this.props.tcolor }} />
                                    <Typography sx={{
                                        fontSize: '19px',
                                        fontWeight: '600',
                                        marginLeft: '22px',
                                        color: this.props.tcolor
                                    }} variant='subtitle1'> Group</Typography>
                                </ListItemButton>
                                <ListItemButton sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '80%' }}>
                                    <CalendarMonthIcon sx={{ fontSize: '27px', color: this.props.tcolor }} />
                                    <Typography sx={{
                                        fontSize: '19px',
                                        fontWeight: '600',
                                        marginLeft: '22px',
                                        color: this.props.tcolor
                                    }} variant='subtitle1'> Event</Typography>
                                </ListItemButton>
                                <ListItemButton sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '80%' }}
                                >
                                    <ShoppingBagIcon sx={{ fontSize: '27px', color: this.props.tcolor }} />
                                    <Typography sx={{
                                        fontSize: '19px',
                                        fontWeight: '600',
                                        marginLeft: '22px',
                                        color: this.props.tcolor
                                    }} variant='subtitle1'> Market Place listing</Typography>
                                </ListItemButton>

                            </div>
                        </DialogContentText>
                    </DialogContent>
                </Dialog >
                {this.state.qs_flag === true && (
                    <Dialog sx={{ width: '670px', height: '600px', backgroundColor: 'transparent', margin: 'auto' }} open={this.state.qs_flag} aria-labelledby='dialog_title'
                        hideBackdrop aria-describedby="content_desc"
                    >
                        <DialogTitle id='dialog_title' sx={{ color: this.props.tcolor, backgroundColor: this.props.scolor }}>
                            <div className='dialog_header'>
                                <Typography variant='h6' sx={{ textAlign: 'center', fontWeight: 'bold', flex: 6 }}>Create Post</Typography>
                                <Button sx={{ flex: 1, cursor: 'pointer', color: this.props.tcolor }} onClick={() => this.setState({ qs_flag: false })}><CloseIcon /></Button>
                            </div>
                        </DialogTitle>
                        <DialogContent sx={{ width: '550px', height: '400px', backgroundColor: this.props.scolor }}>
                            <DialogContentText id='content_desc'>
                                <div style={{ height: '1px', width: '100%', backgroundColor: 'lightgrey', marginTop: '1px' }}></div>
                                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginTop: '20px' }}>
                                    <Avatar component={Link} to='/cover'><DisplayProfile imagesrc='dp.jpg' /></Avatar>
                                    <Typography variant='body1' sx={{ fontWeight: 'bold', marginLeft: '10px', color: this.props.tcolor }}>{localStorage.getItem('first_name') + ' ' + localStorage.getItem('last_name')}</Typography>
                                </div>
                                <textarea rows='7' placeholder={`Whats on your mind ${localStorage.getItem('first_name')}?`} style={{ width: '100%', marginTop: '20px', fontSize: '30px', height: '100px', border: 'none', outline: 'none', color: this.props.tcolor, backgroundColor: this.props.scolor, resize: 'none' }}
                                    onInput={(e) => {
                                        this.setState({ dialog_qs: e.target.value });
                                    }} minLength={10} maxLength={40}></textarea>
                                <TextField label='Brand Image Url' type='text' variant='filled' color='success' sx={{ width: '100%', color: this.props.tcolor }}
                                    onBlur={(e) => {
                                        this.setState({ image_url: e.target.value });
                                    }} />
                                <TextField label='Brand Name' type='text' variant='filled' color='secondary' sx={{ width: '100%', color: this.props.tcolor, marginTop: '30px' }}
                                    onBlur={(e) => {
                                        this.setState({ brand_name: e.target.value });
                                    }} />
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions sx={{ backgroundColor: this.props.scolor, color: this.props.tcolor }}>
                            <Button sx={{
                                margin: 'auto', width: '200px', color: 'white',
                                backgroundColor: 'blue', '&:hover': { backgroundColor: 'blue' }
                            }}
                                onClick={async () => {
                                    if (this.state.brand_name !== '' && this.state.image_url !== '' && this.state.dialog_qs !== '') {
                                        await axios.post('https://kiruthiga-12-facebook-clone-api.onrender.com/api/posts', (
                                            {
                                                "brand": this.state.brand_name,
                                                "image": this.state.image_url,
                                                "description": this.state.dialog_qs
                                            }
                                        ))
                                            .then((data) => { window.location.reload(true); })
                                            .catch((error) => console.log(error));
                                        this.setState({ qs_flag: false });
                                    }
                                    else {
                                        alert('please fill all the details...');
                                    }
                                }}>Post</Button>
                        </DialogActions>
                    </Dialog>

                )}
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
export default connect(mapStateToProps, null)(AppsMenu);