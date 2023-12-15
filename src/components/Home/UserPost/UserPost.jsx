import {
    ListItemButton, Typography, Box, Avatar,
    Dialog, DialogContent, DialogContentText, DialogTitle, Button, DialogActions, TextField,
} from "@mui/material";
import { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import DisplayProfile from "../../DisplayProfile/DisplayProfile";
import CloseIcon from '@mui/icons-material/Close';
import PublicIcon from '@mui/icons-material/Public';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { connect } from 'react-redux';
class UserPost extends Component {
    constructor() {
        super();
        this.state = {
            likecnt: 0,
            cmntcnt: 0,
            sharecnt: 0,
            like_flag: false,
            post_settings: false,
            client_x: 0,
            client_y: 0,
            edit_flag: false,
            delete_flag: false,
            brand_name: '',
            image_url: '',
            description: ''
        }
    }
    async componentDidMount() {
        this.setState({ brand_name: this.props.posttitle, image_url: this.props.postimg, description: this.props.description });
    }

    async componentDidUpdate() {
        document.onclick = (e) => {
            if (e.target.id !== 'post_options' && this.state.post_settings === true) {
                this.setState({ post_settings: false })
            }
        }
    }

    render() {
        return (
            <div className='post' style={{ backgroundColor: this.props.pcolor }}>
                <div className='postHeader'>
                    <Avatar ><DisplayProfile imagesrc={this.props.imgsrc} /></Avatar>
                    <div className='postHeader_container1' >
                        <Typography variant='subtitle1' sx={{ marginLeft: '20px', fontWeight: 'bold', fontSize: '18px', '&:hover': { textDecoration: 'underline', cursor: 'pointer' } }}>{this.props.posttitle}</Typography>
                        <div className='postHeader_container2'>
                            <Typography variant='body1' sx={{ marginLeft: '5px', '&:hover': { textDecoration: 'underline', cursor: 'pointer' } }} >{this.props.postedtime}h . </Typography>
                            <PublicIcon sx={{ fontSize: '18px' }} />
                        </div>
                    </div>
                    <ListItemButton sx={{ display: 'inline' }} id='post_options'
                        onClick={async (e) => {
                            this.setState({ post_settings: !this.state.post_settings, client_x: e.clientX, client_y: e.clientY });
                        }}><MoreHorizIcon sx={{ marginLeft: '250px' }} />
                    </ListItemButton>
                </div>
                <div className='postContent'>
                    <Typography variant='body1' sx={{ fontSize: '20px', padding: '5px' }}>{this.props.description}
                    </Typography>
                </div>
                <br></br>
                <div className='postData'>
                    <img src={this.props.postimg} style={{ width: '99%', height: '100%', border: `1px solid rgb(240,240,240)` }} alt='Not loaded'></img>
                </div>
                <br></br>
                <div className='postCount'>
                    <Box sx={{ flex: 6 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginLeft: '-300px' }}>
                            <Box sx={{ width: '30px', height: '30px', backgroundColor: 'lightblue', borderRadius: '50%', padding: '2px', zIndex: 1 }}><ThumbUpOffAltOutlinedIcon /></Box>
                            <Box sx={{ width: '30px', height: '30px', backgroundColor: 'red', borderRadius: '50%', padding: '2px', marginLeft: '-10px' }}><FavoriteBorderOutlinedIcon /></Box>
                            <Typography variant='body1' sx={{ marginLeft: '20px', '&:hover': { textDecoration: 'underline' } }}>{this.state.likecnt}</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ flex: 1 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
                            <Typography variant='body1' sx={{ '&:hover': { textDecoration: 'underline' } }}>{this.state.cmntcnt} </Typography>
                            <ModeCommentOutlinedIcon sx={{ marginLeft: '5px' }} />
                        </Box>
                    </Box>
                    <Box sx={{ flex: 1 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
                            <Typography variant='body1' sx={{ '&:hover': { textDecoration: 'underline' } }}>{this.state.sharecnt} </Typography>
                            <SendOutlinedIcon sx={{ marginLeft: '5px' }} />
                        </Box>
                    </Box>
                </div>
                <div style={{ height: '1px', width: '100%', backgroundColor: 'lightgrey' }}></div>
                <div className='postReactions'>
                    <ListItemButton sx={{ borderRadius: '10px' }}
                        onClick={() => this.setState({ likecnt: this.state.likecnt + 1 })}
                        onMouseEnter={() => this.setState({ like_flag: true })}
                        onMouseLeave={() => this.setState({ like_flag: false })}><ThumbUpOffAltOutlinedIcon sx={{ fontSize: '30px' }} /><Typography variant='body1' sx={{ marginLeft: '10px' }}>Like</Typography></ListItemButton>
                    <ListItemButton sx={{ borderRadius: '10px' }}
                        onClick={() => this.setState({ cmntcnt: this.state.cmntcnt + 1 })}><ModeCommentOutlinedIcon sx={{ fontSize: '30px' }} /><Typography variant='body1' sx={{ marginLeft: '10px' }}>Comment</Typography></ListItemButton>
                    <ListItemButton sx={{ borderRadius: '10px' }}
                        onClick={() => this.setState({ sharecnt: this.state.sharecnt + 1 })}><SendOutlinedIcon sx={{ fontSize: '30px' }} /><Typography variant='body1' sx={{ marginLeft: '10px' }}>Share</Typography></ListItemButton>
                </div>
                {
                    this.state.post_settings === true && (<>
                        <Dialog hideBackdrop open={this.state.post_settings} sx={{
                            backgroundColor: 'transparent', width: '330px', height: '280px', marginLeft: `${this.state.client_x - 300}px`,
                            marginTop: `${this.state.client_y - 280}px`
                        }} >
                            <DialogContent sx={{ width: '180px', height: '120px', color: this.props.tcolor, backgroundColor: this.props.scolor }}>
                                <DialogContentText>
                                    <ListItemButton sx={{ color: this.props.tcolor, display: 'flex', alignItems: 'center' }}
                                        onClick={() => {
                                            this.setState({ edit_flag: true })
                                        }}>
                                        <EditIcon sx={{ color: this.props.tcolor, fontSize: '28px' }} />
                                        <Typography variant='body1' sx={{ marginLeft: '10px' }}>Edit Post</Typography>
                                    </ListItemButton>
                                    <ListItemButton sx={{ marginTop: '20px', color: this.props.tcolor, display: 'flex', alignItems: 'center' }}
                                        onClick={() => {
                                            this.setState({ delete_flag: true });
                                            if (window.confirm("Do you want to delete the post") === true) {
                                                axios.delete(`https://kiruthiga-12-facebook-clone-api.onrender.com/api/posts/${this.props.postedtime}`)
                                                    .then(async (data) => {
                                                        await alert('Data deleted successfully!!');
                                                        window.location.reload(true);
                                                    })
                                                    .catch((error) => console.log(error));
                                            }
                                        }}>
                                        <DeleteIcon sx={{ color: this.props.tcolor, fontSize: '28px' }} />
                                        <Typography variant='body1' sx={{ marginLeft: '10px' }}>Delete Post</Typography>
                                    </ListItemButton>
                                </DialogContentText>
                            </DialogContent>
                        </Dialog>
                    </>)}
                {this.state.edit_flag === true && (<>
                    <Dialog sx={{ width: '670px', height: '600px', backgroundColor: 'transparent', margin: 'auto' }} open={this.state.edit_flag} aria-labelledby='dialog_title'
                        hideBackdrop aria-describedby="content_desc"
                    >
                        <DialogTitle id='dialog_title' sx={{ color: this.props.tcolor, backgroundColor: this.props.scolor }}>
                            <div className='dialog_header'>
                                <Typography variant='h6' sx={{ textAlign: 'center', fontWeight: 'bold', flex: 6 }}>Edit Post</Typography>
                                <Button sx={{ flex: 1, cursor: 'pointer', color: this.props.tcolor }} onClick={() => this.setState({ edit_flag: false })}><CloseIcon /></Button>
                            </div>
                        </DialogTitle>
                        <DialogContent sx={{ width: '550px', height: '400px', backgroundColor: this.props.scolor }}>
                            <DialogContentText id='content_desc'>
                                <div style={{ height: '1px', width: '100%', backgroundColor: 'lightgrey', marginTop: '1px' }}></div>
                                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginTop: '20px' }}>
                                    <Avatar component={Link} to='/cover'><DisplayProfile imagesrc='dp.jpg' /></Avatar>
                                    <Typography variant='body1' sx={{ fontWeight: 'bold', marginLeft: '10px', color: this.props.tcolor }}>{this.props.posttitle}</Typography>
                                </div>
                                <textarea rows='7' style={{ width: '100%', marginTop: '20px', fontSize: '30px', height: '100px', border: 'none', outline: 'none', color: this.props.tcolor, backgroundColor: this.props.scolor, resize: 'none' }}
                                    onInput={(e) => {
                                        this.setState({ description: e.target.value });
                                    }} minLength={10} maxLength={40}>{this.state.description}</textarea>
                                <TextField label='Brand Image Url' type='text' variant='filled' color='success' sx={{ width: '100%', color: this.props.tcolor }}
                                    onInput={(e) => {
                                        this.setState({ image_url: e.target.value });
                                    }} value={this.state.image_url} />
                                <TextField label='Brand Name' type='text' variant='filled' color='secondary' sx={{ width: '100%', color: this.props.tcolor, marginTop: '30px' }}
                                    onInput={(e) => {
                                         this.setState({ brand_name: e.target.value });
                                    }} value={this.state.brand_name} />
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions sx={{ backgroundColor: this.props.scolor, color: this.props.tcolor, display: 'flex', alignItems: 'center' }}>
                            <Button sx={{
                                margin: 'auto', width: '200px', color: 'white',
                                backgroundColor: 'blue', '&:hover': { backgroundColor: 'blue' }, flex: 4
                            }}
                                onClick={async () => {
                                    if (this.state.brand_name !== '' && this.state.image_url !== '' && this.state.description !== '') {
                                        await axios.put(`https://kiruthiga-12-facebook-clone-api.onrender.com/api/posts/${this.props.postedtime}`, (
                                            {
                                                "brand": this.state.brand_name,
                                                "image": this.state.image_url,
                                                "description": this.state.description
                                            }
                                        ))
                                            .then((data) => { window.location.reload(true); })
                                            .catch((error) => console.log(error));
                                        this.setState({ edit_flag: false });
                                    }
                                    else {
                                        alert('please fill all the details...');
                                    }
                                }}>Update</Button>
                            <Button sx={{
                                margin: 'auto', width: '200px', color: 'white',
                                backgroundColor: 'blue', '&:hover': { backgroundColor: 'blue' }, flex: 4, marginLeft: '30px'
                            }} onClick={() => this.setState({ edit_flag: false })}>Cancel</Button>
                        </DialogActions>
                    </Dialog>
                </>)}
            </div>
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
export default connect(mapStateToProps, null)(UserPost);