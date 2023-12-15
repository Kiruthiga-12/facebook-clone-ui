import { Component } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

class SharedLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: props.prop
        }
    }

    async componentDidUpdate(prevState) {
        if (prevState.prop !== this.props.prop) {
            await this.setState({ val: this.props.prop });
        }
    }
    render() {
        if (localStorage.getItem('login_email') && localStorage.getItem('login_pwd')) {
            return (
                <>
                    <Navbar tabvalue={this.state.val} />
                    <Outlet />
                </>
            )
        }
        else {
            return (
                <>
                    <h1 style={{ textAlign: 'center', marginTop: '200px' }}>You have not logged in. Hence you do not have authoriation for this page.</h1>
                </>
            )
        }
    }
}

export default SharedLayout;