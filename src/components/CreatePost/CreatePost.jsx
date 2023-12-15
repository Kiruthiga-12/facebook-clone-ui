import { Typography, Avatar, Button } from '@mui/material';
import { Component } from 'react';
import DisplayProfile from '../DisplayProfile/DisplayProfile';
import CloseIcon from '@mui/icons-material/Close';
import SettingsIcon from '@mui/icons-material/Settings';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import TextIncreaseIcon from '@mui/icons-material/TextIncrease';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
class CreatePost extends Component {
    render() {
        return (
            <>
                <div className='new_post_container'>
                    <div className='new_post_left' style={{ backgroundColor: this.props.scolor, borderRight: '1px solid black' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }} >
                            <Button sx={{ color: 'white' }} component={Link} to='/home'><Avatar><CloseIcon sx={{ fontSize: '20px' }} /></Avatar></Button>
                            <Button sx={{ width: '50px', height: '60px' }}
                                component={Link} to='/home'><DisplayProfile imagesrc='favicon.jpg' /></Button>
                        </div>
                        <br></br>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                            <Typography sx={{ color: this.props.tcolor, fontWeight: 'bolder', flex: 6, marginLeft: '30px' }} variant='h5'>Your Story</Typography>
                            <div style={{ flex: 3, marginLeft: '190px' }}> <Avatar sx={{ color: this.props.tcolor, backgroundColor: this.props.pcolor }}><SettingsIcon /></Avatar></div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '30px' }}>
                            <Button sx={{ width: '90px', height: '70px', flex: 1 }}><DisplayProfile imagesrc='dp.jpg' /></Button>
                            <Typography sx={{ color: this.props.tcolor, fontWeight: 'bolder', flex: 5, marginLeft: '30px' }} variant='h6'>{localStorage.getItem('first_name') + ' ' + localStorage.getItem('last_name')}</Typography>
                        </div>
                        <hr />
                    </div>
                    <div className='new_post_right' style={{ backgroundColor: this.props.pcolor }}>
                        <div style={{ flex: 3 }}></div>
                        <Button sx={{
                            textTransform: 'none', width: '50px', height: '420px', borderRadius: '10px', flex: 2,
                            backgroundImage: 'linear-gradient(to bottom,blue,cyan)'
                        }}>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <Avatar sx={{ color: this.props.tcolor, padding: '5px', backgroundColor: this.props.pcolor, margin: 'auto' }}><CollectionsBookmarkIcon sx={{ fontSize: '30px' }} /></Avatar>
                                <Typography sx={{ color: 'white', fontWeight: 'bold', marginTop: '20px' }} variant='h6'>Create a photo story</Typography>
                            </div>
                        </Button>

                        <Button sx={{
                            textTransform: 'none', width: '50px', height: '420px', borderRadius: '10px', flex: 2,
                            backgroundImage: 'linear-gradient(to bottom, blueviolet, magenta)', marginLeft: '30px'
                        }}>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <Avatar sx={{ color: this.props.tcolor, padding: '5px', backgroundColor: this.props.pcolor, margin: 'auto' }}>< TextIncreaseIcon sx={{ fontSize: '30px' }} /></Avatar>
                                <Typography sx={{ color: 'white', fontWeight: 'bold', marginTop: '20px' }} variant='h6'>Create a Text story</Typography>
                            </div>
                        </Button>
                        <div style={{ flex: 3 }}></div>
                    </div>
                </div>
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


export default connect(mapStateToProps, null)(CreatePost);