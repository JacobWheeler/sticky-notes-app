import React from 'react';
import { connect } from 'react-redux';

const StickynoteForm = ({ dispatch, nextId }) => {
    let input;

    return (
        <div>
            <h3> Add A StickyNote</h3>
            <form
                onSubmit={ e => {
                    e.preventDefault();
                    dispatch({ 
                        type: 'ADD_STICKYNOTE', 
                        stickynote: {name: input.value, id: nextId, complete: false }
                    })
                    dispatch({ type: 'INC_ID' })
                    input.value = null;
                }}
            >
                <input ref={ n => input = n } />
            </form>
        </div>
    )
}
 
 const mapStateToProps = (state) => {
     return { nextId: state.nextId }
 }

export default connect(mapStateToProps)(StickynoteForm);