import { Component } from 'react';
class DisplayProfile extends Component {
    render() {
        return (
            <img src={this.props.imagesrc} alt='Not loaded' className='dp_class'></img>
        )
    }
}

export default DisplayProfile;