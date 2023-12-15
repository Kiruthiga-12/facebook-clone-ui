import { Component } from "react";
import DisplayProfile from "../../DisplayProfile/DisplayProfile";
import {
    TextField,
    Button, Avatar, Typography, ListItemButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Tab
} from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from "axios";
class OwnPost extends Component {
    constructor() {
        super();
        this.state = {
            dialog_flag: false,
            dialog_qs: `What\'s on your mind, ${localStorage.getItem('first_name')} ?`,
            feeling_flag: false,
            feel_activity: '1',
            search_txt: '',
            image_url: '',
            brand_name: ''
        }
    }
    async componentDidUpdate() {
        document.onclick = (e) => {
            if (e.target.id !== 'feeling_icon' && this.state.feeling_flag === true) {
                this.setState({ feeling_flag: false })
            }
        }
    }
    render() {
        return (

            < div className='own_post' style={{ backgroundColor: this.props.pcolor }}>
                <div className='own_post_container1'>
                    <Button className='own_post_container1_dp' component={Link} to='/cover'><DisplayProfile imagesrc='dp.jpg' /></Button>
                    <Button id='dialog_icon' sx={{ flex: 6, textTransform: 'none', fontSize: '20px', color: this.props.tcolor, borderRadius: '20px', marginLeft: '20px', backgroundColor: this.props.scolor, '&:hover': { backgroundColor: this.props.scolor } }}
                        onClick={() => this.setState({ dialog_flag: true })}>{this.state.dialog_qs}</Button>
                    <Dialog sx={{ width: '670px', height: '600px', backgroundColor: 'transparent', margin: 'auto' }} open={this.state.dialog_flag} aria-labelledby='dialog_title'
                        hideBackdrop aria-describedby="content_desc"
                    >
                        <DialogTitle id='dialog_title' sx={{ color: this.props.tcolor, backgroundColor: this.props.scolor }}>
                            <div className='dialog_header'>
                                <Typography variant='h6' sx={{ textAlign: 'center', fontWeight: 'bold', flex: 6 }}>Create Post</Typography>
                                <Button sx={{ flex: 1, cursor: 'pointer', color: this.props.tcolor }} onClick={() => this.setState({ dialog_flag: false })}><CloseIcon /></Button>
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
                                onClick={() => {
                                    if (this.state.brand_name !== '' && this.state.image_url !== '' && this.state.dialog_qs !== '') {
                                        axios.post('https://kiruthiga-12-facebook-clone-api.onrender.com/api/posts', (
                                            {
                                                "brand": this.state.brand_name,
                                                "image": this.state.image_url,
                                                "description": this.state.dialog_qs
                                            }
                                        ))
                                            .then((data) => { window.location.reload(true); })
                                            .catch((error) => console.log(error));
                                        this.setState({ dialog_flag: false });
                                    }
                                    else {
                                        alert('please fill all the details...');
                                    }
                                }}>Post</Button>
                        </DialogActions>
                    </Dialog>
                </div>
                <div style={{ height: '1px', width: '90%', backgroundColor: 'lightgrey', marginTop: '1px', margin: 'auto' }}></div>
                <div className='own_post_container2'>
                    <ListItemButton sx={{ flex: 4, borderRadius: '10px' }} component={Link} to='/createpost'>
                        <LiveTvIcon sx={{ fontSize: '30px', color: 'red' }} />
                        <Typography variant='body1' sx={{ marginLeft: '15px', fontWeight: 'bold', fontSize: '18px' }}>Live Video</Typography>
                    </ListItemButton>
                    <ListItemButton id='dialog_icon' sx={{ flex: 4, borderRadius: '10px' }} onClick={() => this.setState({ dialog_flag: true })}>
                        <PhotoLibraryIcon sx={{ fontSize: '30px', color: 'green' }} />
                        <Typography variant='body1' sx={{ marginLeft: '15px', fontWeight: 'bold', fontSize: '18px' }}>Photo/ Video</Typography>
                    </ListItemButton>
                    <ListItemButton id='feeling_icon' sx={{ flex: 4, borderRadius: '10px' }} onClick={() => this.setState({ feeling_flag: true })}>
                        <InsertEmoticonIcon sx={{ fontSize: '30px', color: 'goldenrod' }} />
                        <Typography variant='body1' sx={{ marginLeft: '15px', fontWeight: 'bold', fontSize: '18px' }}>Feeling/activity</Typography>
                    </ListItemButton>
                    <Dialog sx={{ width: '670px', height: '600px', backgroundColor: 'transparent', margin: 'auto' }} open={this.state.feeling_flag} aria-labelledby='feeling_title'
                        hideBackdrop aria-describedby="feeling_desc"
                    >
                        <DialogTitle id='feeling_title' sx={{ color: this.props.tcolor, backgroundColor: this.props.scolor }}>
                            <div className='dialog_header'>
                                <Typography variant='h6' sx={{ textAlign: 'center', fontWeight: 'bold', flex: 6 }}>How are you feeling?</Typography>
                                <Button sx={{ flex: 1, cursor: 'pointer', color: this.props.tcolor }} onClick={() => this.setState({ feeling_flag: false })}><CloseIcon /></Button>
                            </div>
                        </DialogTitle>
                        <DialogContent sx={{ width: '550px', height: '400px', color: this.props.tcolor, backgroundColor: this.props.scolor }}>
                            <DialogContentText id='feeling_desc'>
                                <div style={{ height: '1px', width: '100%', backgroundColor: 'lightgrey', marginTop: '1px' }}></div>

                                <TabContext value={this.state.feel_activity}>
                                    <TabList sx={{ marginTop: '-10px' }}>
                                        <Tab value='1' label='Feelings' sx={{ textTransform: 'none', fontSize: '18px', color: this.props.tcolor, fontWeight: 'bolder' }} onClick={() => this.setState({ feel_activity: '1' })} />
                                        <Tab value='2' label='Activity' sx={{ textTransform: 'none', fontSize: '18px', color: this.props.tcolor, fontWeight: 'bolder' }} onClick={() => this.setState({ feel_activity: '2' })} />
                                    </TabList>
                                    <TabPanel value='1'>
                                        <input placeholder='Search here' type='text' style={{ marginTop: '30px', width: '100%', padding: '10px', borderRadius: '20px', border: 'none', backgroundColor: 'lightgrey', outline: 'none', border: 'none', fontSize: '20px', marginTop: '10px' }} value={this.state.search_txt} />
                                        <Button sx={{ marginTop: '20px', fontSize: '20px', color: this.props.tcolor, cursor: 'pointer', display: 'block', fontWeight: 'bold', textTransform: 'none' }} onClick={() => this.setState({ search_txt: 'Happy', dialog_qs: 'Happy' })}>&#128515; Happy</Button>
                                        <Button sx={{ marginTop: '20px', fontSize: '20px', color: this.props.tcolor, cursor: 'pointer', display: 'block', fontWeight: 'bold', textTransform: 'none' }} onClick={() => this.setState({ search_txt: 'Funny', dialog_qs: 'Funny' })}>&#128517; Funny</Button>
                                        <Button sx={{ marginTop: '20px', fontSize: '20px', color: this.props.tcolor, cursor: 'pointer', display: 'block', fontWeight: 'bold', textTransform: 'none' }} onClick={() => this.setState({ search_txt: 'Excited', dialog_qs: 'Excited' })}>&#128519; Excited</Button>
                                        <Button sx={{ marginTop: '20px', fontSize: '20px', color: this.props.tcolor, cursor: 'pointer', display: 'block', fontWeight: 'bold', textTransform: 'none' }} onClick={() => this.setState({ search_txt: 'Angry', dialog_qs: 'Angry' })}>&#128520; Angry</Button>
                                        <Button sx={{ marginTop: '20px', fontSize: '20px', color: this.props.tcolor, cursor: 'pointer', display: 'block', fontWeight: 'bold', textTransform: 'none' }} onClick={() => this.setState({ search_txt: 'Love', dialog_qs: 'Love' })}>&#128525; Love</Button>
                                    </TabPanel>
                                    <TabPanel value='2'>
                                        <input placeholder='Search here' type='text' style={{ marginTop: '30px', width: '100%', padding: '10px', borderRadius: '20px', border: 'none', backgroundColor: 'lightgrey', outline: 'none', border: 'none', fontSize: '20px', marginTop: '10px' }} value={this.state.search_txt} />
                                        <Button sx={{ marginTop: '20px', fontSize: '20px', color: this.props.tcolor, cursor: 'pointer', display: 'block', fontWeight: 'bold', textTransform: 'none' }} onClick={() => this.setState({ search_txt: 'Celebrating Parents', dialog_qs: 'Celebrating Parents' })}>Celebrating</Button>
                                        <Button sx={{ marginTop: '20px', fontSize: '20px', color: this.props.tcolor, cursor: 'pointer', display: 'block', fontWeight: 'bold', textTransform: 'none' }} onClick={() => this.setState({ search_txt: 'Watching Movie', dialog_qs: 'Watching Movie' })}>Watching</Button>
                                        <Button sx={{ marginTop: '20px', fontSize: '20px', color: this.props.tcolor, cursor: 'pointer', display: 'block', fontWeight: 'bold', textTransform: 'none' }} onClick={() => this.setState({ search_txt: 'Eating fav Food', dialog_qs: 'Eating fav Food' })}>Eating</Button>
                                        <Button sx={{ marginTop: '20px', fontSize: '20px', color: this.props.tcolor, cursor: 'pointer', display: 'block', fontWeight: 'bold', textTransform: 'none' }} onClick={() => this.setState({ search_txt: 'Attending Sessions', dialog_qs: 'Attending Sessions' })}>Attending</Button>
                                        <Button sx={{ marginTop: '20px', fontSize: '20px', color: this.props.tcolor, cursor: 'pointer', display: 'block', fontWeight: 'bold', textTransform: 'none' }} onClick={() => this.setState({ search_txt: 'Gonna Sleep', dialog_qs: 'Gonna Sleep' })}>Sleeping</Button>
                                    </TabPanel>
                                </TabContext>

                            </DialogContentText>
                        </DialogContent>
                        <DialogActions sx={{ backgroundColor: this.props.scolor }}>
                            <Button onClick={() => this.setState({ feeling_flag: false })} sx={{
                                margin: 'auto', width: '200px', color: this.props.scolor,
                                backgroundColor: this.props.tcolor, '&:hover': { backgroundColor: this.props.tcolor }
                            }}>Post</Button>
                        </DialogActions>
                    </Dialog>
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

export default connect(mapStateToProps, null)(OwnPost);