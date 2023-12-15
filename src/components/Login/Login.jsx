import {
    Button, Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText, Typography, Box,
    TextField,
    FormControlLabel,
    Select,
    MenuItem,
    Radio,
    RadioGroup
} from "@mui/material";
import { Component } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            signup: false,
            day: 1,
            month: 'Jan',
            year: '2012',
            fname: '',
            lname: '',
            mobile_email: '',
            pwd: '',
            gender: '',
            login_email: '',
            login_pwd: '',
            login: false,
            login_redirect: '',
            signedin: false

        }
    }
    render() {
        return (
            <>
                <div className='login_container'>
                    <div className='login_left'>
                        <Typography variant='h2' color='primary' sx={{ fontWeight: 'bold' }}>facebook</Typography>
                        <Typography variant='h4'>Facebook helps you connect and share with the people in your life.</Typography>
                    </div>
                    <div className="login_right">
                        <form className="form_style">
                            <TextField type='text' placeholder='Email address or phone number' sx={{ width: '100%', marginTop: '10px', backgroundColor: 'rgb(240,240,240)' }} value={this.state.login_email}
                                onInput={(e, newValue) => this.setState({ login_email: e.target.value })} />
                            <TextField type='password' placeholder='Password' sx={{ width: '100%', marginTop: '10px', backgroundColor: 'rgb(240,240,240)' }} value={this.state.login_pwd}
                                onInput={(e, newValue) => this.setState({ login_pwd: e.target.value })} />
                            <Button
                                component={Link} to={this.state.login_redirect}
                                sx={{ textTransform: 'none', color: 'white', fontWeight: 'bolder', backgroundColor: 'blue', marginTop: '20px', marginLeft: '55px', width: '80%', fontSize: '20px', padding: '10px 20px', '&:hover': { backgroundColor: 'blue' } }}
                                onClick={async () => {
                                    if (this.state.login_email !== '' && this.state.login_pwd !== ''
                                        && this.state.login_email === localStorage.getItem('email') &&
                                        this.state.login_pwd === localStorage.getItem('password')) {
                                        await this.setState({ login: true });
                                        await this.setState({ login_redirect: '/home' });
                                        localStorage.setItem('login_email', this.state.login_email);
                                        localStorage.setItem('login_pwd', this.state.login_pwd);
                                    }
                                    else if (this.state.login_email === '') {
                                        alert('Please fill  Email or mobile number!!!');
                                        await this.setState({ login_redirect: '/' });
                                    }
                                    else if (this.state.login_pwd === '') {
                                        alert('Please fill  password');
                                        await this.setState({ login_redirect: '/' });
                                    }
                                    else if (this.state.login_email !== localStorage.getItem('email')) {
                                        alert('Please fill correct Email Id or Mobile Number');
                                        await this.setState({ login_redirect: '/' });
                                    }
                                    else if (this.state.login_pwd !== localStorage.getItem('password')) {
                                        alert('Please fill the correct password');
                                        await this.setState({ login_redirect: '/' });
                                    }
                                }}
                            >Log In</Button>
                            <a href="#" style={{ marginLeft: '160px', color: 'blue', display: 'inline-block', fontSize: '20px', marginTop: '20px', textDecoration: 'none' }}>Forget password?</a><br></br>
                            <hr style={{ width: '90%', marginTop: '30px' }} />
                            <Button sx={{ textTransform: 'none', color: 'white', fontWeight: 'bolder', backgroundColor: 'green', marginTop: '20px', marginLeft: '55px', width: '80%', fontSize: '20px', padding: '10px 20px', '&:hover': { backgroundColor: 'green' } }}
                                onClick={() => this.setState({ signup: true })}>Create new account</Button>
                        </form>
                        <div style={{ marginLeft: '50px', marginTop: '20px', fontSize: '20px' }}>
                            <a href="#" style={{ color: 'black', fontWeight: 'bold' }}>Create a page </a><p style={{ display: 'inline' }}>for a celebrity,brand and business.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <Typography varaint='body1' sx={{ textAlign: 'center', marginTop: '20px' }}>Meta @2023</Typography>
                </div>
                {
                    this.state.signup === true && (
                        <>
                            <Dialog sx={{ backgroundColor: 'transparent', width: '650px', height: '750px', marginLeft: '600px', marginTop: '10px' }} open={this.state.signup} hideBackdrop aria-labelledby='signup_title' aria-describedby='signup_desc'>
                                <DialogTitle id='signup_title'>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Typography variant='h3' sx={{ flex: 6 }}>Sign Up</Typography>
                                        <CloseIcon sx={{ flex: 2, fontSize: '30px', cursor: 'pointer' }}
                                            onClick={() => this.setState({ signup: false })} />
                                    </div>
                                    <Typography variant='body1' sx={{ color: 'rey' }}>It's quick and easy.</Typography>
                                    <hr />
                                </DialogTitle>
                                <DialogContent id='signup_desc' sx={{ width: '500px', height: '600px' }}>
                                    <DialogContentText>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <TextField type='text' placeholder='First name' sx={{ flex: 6, border: 'none', outline: 'none', backgroundColor: 'rgb(240,240,240)' }} value={this.state.fname}
                                                onInput={(e, newValue) => this.setState({ fname: e.target.value })} />
                                            <TextField type='text' placeholder='Surname' sx={{ flex: 6, marginLeft: '20px', border: 'none', outline: 'none', backgroundColor: 'rgb(240,240,240)' }} value={this.state.lname}
                                                onInput={(e, newValue) => this.setState({ lname: e.target.value })} />
                                        </div>
                                        <TextField type='text' placeholder='Mobile number or email address' sx={{ width: '100%', marginTop: '10px', backgroundColor: 'rgb(240,240,240)' }} value={this.state.mobile_email}
                                            onInput={(e, newValue) => this.setState({ mobile_email: e.target.value })} />
                                        <TextField type='password' placeholder='New password' sx={{ width: '100%', marginTop: '10px', backgroundColor: 'rgb(240,240,240)' }} value={this.state.pwd}
                                            onInput={(e, newValue) => this.setState({ pwd: e.target.value })} />
                                        <Typography variant='body1' sx={{ marginTop: '10px' }} >Date of birth</Typography>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <Select sx={{ width: '20%', flex: 2 }}
                                                onChange={(e, newValue) => this.setState({ day: newValue.props.value })} value={this.state.day}>
                                                <MenuItem value='1' > 1</MenuItem>
                                                <MenuItem value='2'> 2</MenuItem>
                                                <MenuItem value='3'> 3</MenuItem>
                                                <MenuItem value='4'> 4</MenuItem>
                                                <MenuItem value='5'> 5</MenuItem>
                                                <MenuItem value='6'> 6</MenuItem>
                                                <MenuItem value='7'> 7</MenuItem>
                                                <MenuItem value='8'> 8</MenuItem>
                                                <MenuItem value='9'> 9</MenuItem>
                                                <MenuItem value='10'> 10</MenuItem>
                                                <MenuItem value='11'> 11</MenuItem>
                                                <MenuItem value='12'> 12</MenuItem>
                                                <MenuItem value='13'> 13</MenuItem>
                                                <MenuItem value='14'> 14</MenuItem>
                                                <MenuItem value='15'> 15</MenuItem>
                                                <MenuItem value='16'> 16</MenuItem>
                                                <MenuItem value='17'> 17</MenuItem>
                                                <MenuItem value='18'> 18</MenuItem>
                                                <MenuItem value='19'> 19</MenuItem>
                                                <MenuItem value='20'> 20</MenuItem>
                                                <MenuItem value='21'> 21</MenuItem>
                                                <MenuItem value='22' selected> 22</MenuItem>
                                                <MenuItem value='23'> 23</MenuItem>
                                                <MenuItem value='24'> 24</MenuItem>
                                                <MenuItem value='25'> 25</MenuItem>
                                                <MenuItem value='26'> 26</MenuItem>
                                                <MenuItem value='27'> 27</MenuItem>
                                                <MenuItem value='28'>28</MenuItem>
                                                <MenuItem value='29'> 29</MenuItem>
                                                <MenuItem value='30'> 30</MenuItem>
                                                <MenuItem value='31'> 31</MenuItem>
                                            </Select>
                                            <Select sx={{ width: '20%', marginLeft: '30px', flex: 2 }}
                                                onChange={(e, newValue) => this.setState({ month: newValue.props.value })} value={this.state.month}>
                                                <MenuItem value='Jan' > Jan</MenuItem>
                                                <MenuItem value='Feb'> Feb</MenuItem>
                                                <MenuItem value='Mar'> Mar</MenuItem>
                                                <MenuItem value='Apr'> Apr</MenuItem>
                                                <MenuItem value='May'> May</MenuItem>
                                                <MenuItem value='Jun'> Jun</MenuItem>
                                                <MenuItem value='Jul'> Jul</MenuItem>
                                                <MenuItem value='Aug'> Aug</MenuItem>
                                                <MenuItem value='Sep'> Sep</MenuItem>
                                                <MenuItem value='Oct'> Oct</MenuItem>
                                                <MenuItem value='Nov'> Nov</MenuItem>
                                                <MenuItem value='Dec'> Dec</MenuItem>
                                            </Select>
                                            <Select sx={{ width: '20%', marginLeft: '30px', flex: 2 }}
                                                onChange={(e, newValue) => this.setState({ year: newValue.props.value })} value={this.state.year}>
                                                <MenuItem value='2012'> 2012</MenuItem>
                                                <MenuItem value='2013'> 2013</MenuItem>
                                                <MenuItem value='2014'> 2014</MenuItem>
                                                <MenuItem value='2015'> 2015</MenuItem>
                                                <MenuItem value='2016'> 2016</MenuItem>
                                                <MenuItem value='2017'> 2017</MenuItem>
                                                <MenuItem value='2018'> 2018</MenuItem>
                                                <MenuItem value='2019'> 2019</MenuItem>
                                                <MenuItem value='2020'> 2020</MenuItem>
                                                <MenuItem value='2021'> 2021</MenuItem>
                                                <MenuItem value='2022'> 2022</MenuItem>
                                                <MenuItem value='2023'> 2023</MenuItem>
                                            </Select>
                                        </div>
                                        <Typography variant='body1' sx={{ marginTop: '10px' }} >Gender</Typography>
                                        <RadioGroup checked={this.state.gender}>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <Box sx={{ border: '1px solid grey', textAlign: 'center', flex: 5, borderRadius: '5px' }}><FormControlLabel control={<Radio value='Female' name='gender' onChange={(e, newValue) => this.setState({ gender: e.target.value })} />} label='Female'></FormControlLabel ></Box>
                                                <Box sx={{ border: '1px solid grey', marginLeft: '20px', textAlign: 'center', flex: 5, borderRadius: '5px' }}> <FormControlLabel control={<Radio value='Male' name='gender' onChange={(e, newValue) => this.setState({ gender: e.target.value })} />} label='Male' ></FormControlLabel></Box>
                                                <Box sx={{ border: '1px solid grey', marginLeft: '20px', textAlign: 'center', flex: 5, borderRadius: '5px' }}> <FormControlLabel control={<Radio value='Custom' name='gender' onChange={(e, newValue) => this.setState({ gender: e.target.value })} />} label='Custom'></FormControlLabel></Box>
                                            </div>
                                        </RadioGroup>
                                        <Typography variant='body2' sx={{ marginTop: '10px' }}>People who use our service may have uploaded your contact information to Facebook. Learn more.</Typography>
                                        <Typography variant='body2' sx={{ marginTop: '10px' }}>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.</Typography>
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions onClick={() => this.setState({ signup: false })}>
                                    <Button sx={{ fontSize: '20px', color: 'white', fontWeight: 'bolder', backgroundColor: 'green', '&:hover': { backgroundColor: 'green' }, textTransform: 'none', textAlign: 'center', margin: 'auto', width: '50%' }}
                                        component={Link} to='/'
                                        onClick={async () => {
                                            if (this.state.fname !== '' && this.state.lname !== '' && this.state.mobile_email !== ''
                                                && this.state.pwd !== '' && this.state.day !== ''
                                                && this.state.month !== '' && this.state.year !== '' && this.state.gender !== '') {
                                                await this.setState({ signedin: true });
                                                await localStorage.setItem('first_name', this.state.fname);
                                                await localStorage.setItem('last_name', this.state.lname);
                                                await localStorage.setItem('email', this.state.mobile_email);
                                                await localStorage.setItem('password', this.state.pwd);
                                                await alert('Redirecting to Login Page!!');
                                            }
                                            else {
                                                alert('Please fill all the required fields to Sign Up!!!')
                                            }
                                        }}>Sign Up</Button>
                                </DialogActions>
                            </Dialog>
                        </>
                    )
                }
            </>
        )
    }
}

export default Login;