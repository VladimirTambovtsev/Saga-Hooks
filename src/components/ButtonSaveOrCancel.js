import React from 'react';
import {Button} from "semantic-ui-react";

const ButtonSaveOrCancel = ({addEntry}) => {
    return (
        <Button.Group style={{marginTop: '20px'}}>
            <Button>Cancel</Button>
            <Button.Or />
            <Button primary onClick={() => addEntry()}>Ok</Button>
        </Button.Group>
    );
};

export default ButtonSaveOrCancel;
