import { Component } from "react";
import { AvatarGroup, Button, Typography, Avatar, Tab } from "@mui/material";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import DisplayProfile from "../DisplayProfile/DisplayProfile";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { TabContext, TabList, TabPanel } from "@mui/lab";
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
class CoverPage extends Component {
    constructor() {
        super();
        this.state = {
            userData: [],
            covertab: '1'
        }
    }
    async componentDidMount() {
        await axios.get('https://dummyjson.com/users?limit=10')
            .then((data) => {
                this.setState({ userData: data.data.users.slice() });
            })
            .catch((error) => console.log(error))
    }
    render() {
        return (
            <>
                <div className='cover_page' style={{ backgroundColor: this.props.scolor }}>
                    <div className='cover_page_left'></div>
                    <div className='cover_page_center'>
                        <div className='cover_photo_section' style={{ backgroundColor: this.props.pcolor }}>
                            < Button startIcon={<CameraAltIcon />} sx={{ padding: '10px 20px', marginTop: '550px', textTransform: 'none', color: this.props.pcolor, backgroundColor: this.props.tcolor, fontSize: '18px', marginLeft: '870px', '&:hover': { backgroundColor: this.props.tcolor } }}>Add Cover photo</Button>
                        </div>
                        <div className='profile_details'>
                            <div className="profile_dp" style={{ border: `5px solid  ${this.props.scolor}` }}><DisplayProfile imagesrc='dp.jpg' /></div>
                            <Button sx={{
                                marginLeft: '-105px', marginTop: '130px', width: '1%', borderRadius: '50%', backgroundColor: this.props.tcolor, '&:hover': {
                                    backgroundColor: this.props.tcolor
                                }
                            }}> <CameraAltIcon sx={{ color: this.props.pcolor, padding: 0, fontSize: '30px' }} /></Button>
                            <div className='profile'>
                                <Typography variant='h4' sx={{ fontWeight: 'bolder', color: this.props.tcolor }}>{localStorage.getItem('first_name') + ' ' + localStorage.getItem('last_name')}</Typography>
                                <Typography variant='subtitle1' sx={{ fontWeight: 'bolder', color: this.props.tcolor, fontSize: '20px' }}>44 friends</Typography>
                                <AvatarGroup max={7}>
                                    {this.state.userData.length !== 0 &&
                                        this.state.userData.map((li) => <Avatar><DisplayProfile
                                            imagesrc={li.image} /></Avatar>)
                                    }
                                </AvatarGroup>
                            </div>
                            <div class='edit_profile'>
                                <Button startIcon={<AddIcon />} sx={{
                                    textTransform: 'none', color: 'white', backgroundColor: 'blue', fontSize: '16px', padding: '5px 15px', fontWeight: 'bold', '&:hover': {
                                        backgroundColor: 'blue'
                                    }
                                }} component={Link} to='/createpost'>Add to Story</Button>
                                <Button startIcon={<EditIcon />} sx={{
                                    textTransform: 'none', color: this.props.pcolor, backgroundColor: this.props.tcolor, fontSize: '16px', padding: '5px 15px', fontWeight: 'bold', marginLeft: '20px', '&:hover': {
                                        backgroundColor: this.props.tcolor
                                    }
                                }}>Edit profile</Button>
                            </div>
                        </div>
                        <hr style={{ marginTop: '20px' }} />
                        <TabContext value={this.state.covertab}>
                            <TabList TabIndicatorProps={{ sx: { height: "3px" } }}>
                                <Tab value='1' label='Posts' sx={{ textTransform: 'none', fontSize: '18px', fontWeight: 'bold', color: this.props.tcolor }}
                                    onClick={() => this.setState({ covertab: '1' })}></Tab>
                                <Tab value='2' label='About' sx={{ textTransform: 'none', fontSize: '18px', fontWeight: 'bold', color: this.props.tcolor }}
                                    onClick={() => this.setState({ covertab: '2' })}></Tab>
                                <Tab value='3' label='Friends' sx={{ textTransform: 'none', fontSize: '18px', fontWeight: 'bold', color: this.props.tcolor }}
                                    onClick={() => this.setState({ covertab: '3' })}></Tab>
                                <Tab value='4' label='Photos' sx={{ textTransform: 'none', fontSize: '18px', fontWeight: 'bold', color: this.props.tcolor }}
                                    onClick={() => this.setState({ covertab: '4' })}></Tab>
                                <Tab value='5' label='Videos' sx={{ textTransform: 'none', fontSize: '18px', fontWeight: 'bold', color: this.props.tcolor }}
                                    onClick={() => this.setState({ covertab: '5' })}></Tab>
                                <Tab value='6' label='Check-ins' sx={{ textTransform: 'none', fontSize: '18px', fontWeight: 'bold', color: this.props.tcolor }}
                                    onClick={() => this.setState({ covertab: '6' })}></Tab>
                                <Tab value='7' label='More' sx={{ textTransform: 'none', fontSize: '18px', fontWeight: 'bold', color: this.props.tcolor }}
                                    onClick={() => this.setState({ covertab: '7' })}></Tab>
                            </TabList>
                            <TabPanel value='1' sx={{ textAlign: 'center', fontSize: '30px', fontWeight: 'bolder', color: this.props.tcolor, marginTop: '50px' }}>Posts Page</TabPanel>
                            <TabPanel value='2' sx={{ textAlign: 'center', fontSize: '30px', fontWeight: 'bolder', color: this.props.tcolor, marginTop: '50px' }}>About Page</TabPanel>
                            <TabPanel value='3' sx={{ textAlign: 'center', fontSize: '30px', fontWeight: 'bolder', color: this.props.tcolor, marginTop: '50px' }}>Friends Page</TabPanel>
                            <TabPanel value='4' sx={{ textAlign: 'center', fontSize: '30px', fontWeight: 'bolder', color: this.props.tcolor, marginTop: '50px' }}>Photos Page</TabPanel>
                            <TabPanel value='5' sx={{ textAlign: 'center', fontSize: '30px', fontWeight: 'bolder', color: this.props.tcolor, marginTop: '50px' }}>Videos Page</TabPanel>
                            <TabPanel value='6' sx={{ textAlign: 'center', fontSize: '30px', fontWeight: 'bolder', color: this.props.tcolor, marginTop: '50px' }}>Check-ins Page</TabPanel>
                            <TabPanel value='7' sx={{ textAlign: 'center', fontSize: '30px', fontWeight: 'bolder', color: this.props.tcolor, marginTop: '50px' }}>More Page</TabPanel>
                        </TabContext>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                    <div className='cover_page_right'></div>
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

export default connect(mapStateToProps, null)(CoverPage);