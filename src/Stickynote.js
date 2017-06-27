import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react'

const Stickynote = ({ id, name, complete, dispatch }) => (
   <Card>
    <Card.Content>
      { name }
    </Card.Content>
  </Card>
)
export default Stickynote