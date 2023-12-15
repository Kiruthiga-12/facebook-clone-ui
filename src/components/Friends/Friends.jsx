import React from 'react';
import { connect } from 'react-redux';
function Friends(props) {
  return (
    <div style={{
      color: props.tcolor, backgroundColor: props.scolor, textAlign: 'center', paddingTop: '280px', fontSize: '30px', width: '100%', height: '100vh',
      marginLeft: '-1px',
      paddingLeft: ' 10px',
      marginTop: '-4px'
    }}>
      Friends Page
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    pcolor: state.pcolor,
    scolor: state.scolor,
    tcolor: state.tcolor
  }
}

export default connect(mapStateToProps, null)(Friends);