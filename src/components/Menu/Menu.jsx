import { Component } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, Typography, FormControlLabel, Switch, ListItemButton } from '@mui/material';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import AnimationIcon from '@mui/icons-material/Animation';
import ContactsIcon from '@mui/icons-material/Contacts';
import CircleIcon from '@mui/icons-material/Circle';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import AppBlockingIcon from '@mui/icons-material/AppBlocking';
import { connect } from 'react-redux';
class Menu extends Component {
    constructor(props) {
        super();
        this.state = {
            val: props.value
        }
    }
    render() {
        return (
            <>
                <Dialog sx={{ marginLeft: '1150px', marginTop: '120px', width: '520px', height: '620px', background: 'transparent' }} hideBackdrop open={this.state.val} aria-labelledby='chat_title' aria-describedby='chat_desc'>
                    <DialogTitle id='chat_title' sx={{ backgroundColor: this.props.scolor }}>
                        <Typography variant='h5' sx={{ fontWeight: 'bolder', color: this.props.tcolor }}>Chat Settings</Typography>
                        <Typography variant='body1' sx={{ marginTop: '10px', color: this.props.tcolor }}>Customize your Messenger experience.</Typography>
                        <hr />
                    </DialogTitle>

                    <DialogContent sx={{ width: '400px', height: '380px', marginTop: '-20px', backgroundColor: this.props.scolor }}>
                        <DialogContentText id='chat_desc' >
                            <ListItemButton sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', color: this.props.tcolor }}>
                                <PhoneCallbackIcon sx={{ flex: 2 }} />
                                <Typography sx={{ fontWeight: 'bolder', fontSize: '16px', flex: 7 }}>Incoming call sounds</Typography>
                                <FormControlLabel control={<Switch defaultChecked />} sx={{ flex: 3 }}></FormControlLabel>
                            </ListItemButton>
                            <ListItemButton sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', color: this.props.tcolor }}>
                                <VolumeMuteIcon sx={{ flex: 2 }} />
                                <Typography sx={{ fontWeight: 'bolder', fontSize: '16px', flex: 7 }}>Message sounds</Typography>
                                <FormControlLabel control={<Switch defaultChecked />} sx={{ flex: 3 }}></FormControlLabel>
                            </ListItemButton>
                            <ListItemButton sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', color: this.props.tcolor }}>
                                <AnimationIcon sx={{ flex: 2 }} />
                                <Typography sx={{ fontWeight: 'bolder', fontSize: '16px', flex: 7 }}>Pop-up new messages</Typography>
                                <FormControlLabel control={<Switch defaultChecked />} sx={{ flex: 3 }}></FormControlLabel>
                            </ListItemButton>
                            <hr />
                            <ListItemButton sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', color: this.props.tcolor }}>
                                < ContactsIcon sx={{ flex: 2 }} />
                                <Typography sx={{ fontWeight: 'bolder', fontSize: '16px', flex: 7 }}>Show contacts</Typography>
                                <FormControlLabel control={<Switch defaultChecked />} sx={{ flex: 3 }}></FormControlLabel>
                            </ListItemButton>
                            <hr />
                            <ListItemButton sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', color: this.props.tcolor }}>
                                < CircleIcon sx={{ flex: 2 }} />
                                <Typography sx={{ fontWeight: 'bolder', fontSize: '16px', flex: 10 }}>Active Status:ON</Typography>
                            </ListItemButton>
                            <ListItemButton sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', color: this.props.tcolor }}>
                                < ChatOutlinedIcon sx={{ flex: 2 }} />
                                <Typography sx={{ fontWeight: 'bolder', fontSize: '16px', flex: 10 }}>Message Deliver Settings</Typography>
                            </ListItemButton>
                            <ListItemButton sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', color: this.props.tcolor }}>
                                <  AppBlockingIcon sx={{ flex: 2 }} />
                                <Typography sx={{ fontWeight: 'bolder', fontSize: '16px', flex: 10 }}>Block Settings</Typography>
                            </ListItemButton>
                        </DialogContentText>
                    </DialogContent>
                </Dialog>
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

export default connect(mapStateToProps, null)(Menu);