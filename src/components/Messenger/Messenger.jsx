import { Component } from 'react';
import { DialogActions, Button, Dialog, DialogTitle, DialogContent, DialogContentText, Typography, Autocomplete, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { connect } from 'react-redux';
class Messenger extends Component {
    constructor(props) {
        super();
        this.state = {
            msgprop: props.pvalue,
            arr: props.users,
            person_name: ''
        }
    }
    render() {
        return (
            <>
                <Dialog aria-labelledby='message_title' aria-describedby='message_desc' open={this.state.msgprop} hideBackdrop sx={{ width: '500px', height: '700px', marginLeft: '1100px', marginTop: '100px', backgroundColor: 'transparent' }}>
                    <DialogTitle id='message_title' sx={{ display: 'flex', backgroundColor: this.props.scolor }}>
                        <Typography variant='body1' sx={{ fontWeight: 'bolder', color: this.props.tcolor, flex: 11 }}>New Message</Typography>
                        <CloseIcon sx={{ flex: 1, cursor: 'pointer', color: this.props.tcolor }} onClick={() => this.setState({ msgprop: false })} />
                        <hr />
                    </DialogTitle>
                    <DialogContent sx={{ backgroundColor: this.props.scolor, width: '330px', height: '900px' }}>

                        <DialogContentText id='message_desc'>
                            <div style={{ display: 'flex', alignItems: 'center', marginTop: '30px' }}>
                                <Typography sx={{ display: 'inline', flex: 1, color: this.props.tcolor }}>To:   </Typography>
                                <Autocomplete freeSolo sx={{ flex: 11 }} options={this.state.arr} renderInput={(params) => <TextField  {...params} label='' />}
                                    onChange={(e, NewEvent) => this.setState({
                                        person_name: NewEvent, person_media: 'Facebook', person_friends: 'You\'re friends on Facebook', person_location: 'Kumbakonam',
                                        show_text: true
                                    })} />
                            </div>
                            <Typography variant='h5' sx={{ textAlign: 'center', marginTop: '60px', fontSize: '20px', fontWeight: 'bolder', color: this.props.tcolor }}>{this.state.person_name}</Typography>
                            {this.state.person_name !== '' && <Typography variant='body1' sx={{ textAlign: 'center', marginTop: '10px', fontSize: '16px', color: this.props.tcolor }}>Facebook</Typography>}
                            {this.state.person_name !== '' && <Typography variant='body1' sx={{ textAlign: 'center', marginTop: '10px', fontSize: '16px', color: this.props.tcolor }}>You're friends on Facebook</Typography>}
                            {this.state.person_name !== '' && <Typography variant='body1' sx={{ textAlign: 'center', marginTop: '10px', fontSize: '16px', color: this.props.tcolor }}>Lives in Kumbakonam</Typography>}
                            {this.state.person_name !== '' && <input placeholder='Aa' type='text' style={{ marginTop: '100px', width: '90%', padding: '10px', backgroundColor: this.props.tcolor, borderRadius: '10px', border: '1px solid transparent', color: this.props.pcolor, outline: 'none', fontSize: '20px' }} />}
                        </DialogContentText>
                    </DialogContent>
                    {this.state.person_name !== '' && <DialogActions sx={{ backgroundColor: this.props.scolor }}><Button sx={{ textTransform: 'none', fontWeight: 'bolder', color: 'white', backgroundColor: 'blue', '&:hover': { backgroundColor: 'blue' } }} onClick={() => this.setState({ msgprop: false })}>Send</Button></DialogActions>}
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
export default connect(mapStateToProps, null)(Messenger);