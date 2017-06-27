import React from 'react';
import { connect } from 'react-redux';
import Stickynote from './Stickynote';

const StickynoteList = ({ stickynotes }) => (
    <ul>
        { stickynotes.map( (s) => {
    return (
        <Stickynote key={s.id} {...s} />)
      })
    }
    </ul>
    )
    const mapStateToProps = (state) => {
        return { stickynotes: state.stickynotes }
    
}

export default connect(mapStateToProps)(StickynoteList);