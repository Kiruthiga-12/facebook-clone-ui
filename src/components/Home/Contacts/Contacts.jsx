import React, { Component } from 'react'
import { ListItemButton, Typography, Avatar } from '@mui/material'
import DisplayProfile from '../../DisplayProfile/DisplayProfile';
import { connect } from 'react-redux'
class Contacts extends Component {
    render() {
        return (
            <ListItemButton>
                <Avatar> <DisplayProfile imagesrc={this.props.imgsrc} /></Avatar>
                <Typography sx={{ marginLeft: '20px', color: this.props.tcolor, fontWeight: 'bolder', fontSize: '18px' }}>{this.props.firstName} {this.props.lastName}</Typography>
            </ListItemButton>
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
export default connect(mapStateToProps, null)(Contacts);
