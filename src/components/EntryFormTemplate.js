import React from 'react';
import {Checkbox, Form, Segment} from "semantic-ui-react";

const EntryFormTemplate = ({ description, setDescription, value, setValue, isExpense, setIsExpense }) => {
    return (
        <>
            <Form.Group widths={3}>
                <Form.Input placeholder={"New shiny thing"}
                            icon={'tags'}
                            width={12}
                            label={'Description'}
                            value={description}
                            onChange={e => setDescription(e.target.value)} />
                <Form.Input placeholder={"100"}
                            icon={'dollar'}
                            iconPosition={'left'}
                            width={4} label={'Value'}
                            value={value}
                            onChange={e => setValue(e.target.value)} />
            </Form.Group>
            <Segment compact>
                <Checkbox toggle
                          label={'Is Expense'}
                          checked={Boolean(isExpense)}
                          onChange={() => setIsExpense(oldState => !oldState)} />
            </Segment>
        </>
    );
};

export default EntryFormTemplate;
