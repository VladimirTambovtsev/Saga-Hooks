import React from 'react';
import {Form} from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryFormTemplate from "./EntryFormTemplate";
import {useEntryDetails} from "../hooks/useEntryDetails";

const EntryForm = () => {
    const {value, setValue, description, setDescription, isExpense, setIsExpense, addEntry} = useEntryDetails()
    return (
        <Form unstackable>

            <EntryFormTemplate value={value} setValue={setValue}
                               description={description} setDescription={setDescription}
                               isExpense={isExpense} setIsExpense={setIsExpense} />

            <ButtonSaveOrCancel addEntry={addEntry} />
        </Form>
    );
};

export default EntryForm;
