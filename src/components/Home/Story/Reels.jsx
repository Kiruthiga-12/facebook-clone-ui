import { Component } from "react";
import { Typography, Avatar, Button } from '@mui/material';
import DisplayProfile from "../../DisplayProfile/DisplayProfile";
class Reels extends Component {
    render() {
        return (
            <div className='reel' id='reel_list' >
                <Avatar sx={{ marginLeft: '15px', marginTop: '25px', border: '5px solid blue' }}><DisplayProfile imagesrc={this.props.dp} /></Avatar>
                <img src='/dp.jpg' alt='Not loaded' width='100%' height='100%' style={{ borderRadius: '10px', marginTop: '-60px' }} />
                <Typography sx={{ fontSize: '18px', fontWeight: 'bold', color: 'white', marginTop: '-50px', marginLeft: '20px' }}>{this.props.viewers}M</Typography>
            </div>
        )
    }
}

export default Reels;