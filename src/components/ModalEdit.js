import React from 'react';
import {Button, Modal} from 'semantic-ui-react'
import EntryFormTemplate from "./EntryFormTemplate";
import {useDispatch} from "react-redux";
import {closeEditModalCreator} from "../redux/actions/modals.actions";
import {useEntryDetails} from "../hooks/useEntryDetails";

const ModalEdit = ({isOpen, id, value, description, isExpense }) => {
    const dispatch = useDispatch()
    const entryUpdate = useEntryDetails(description, value, isExpense)

    return (
        <Modal open={isOpen} >
            <Modal.Header>Edit entry</Modal.Header>
            <Modal.Content>
                <EntryFormTemplate value={entryUpdate.value} setValue={entryUpdate.setValue}
                                   description={entryUpdate.description} setDescription={entryUpdate.setDescription}
                                   isExpense={entryUpdate.isExpense} setIsExpense={entryUpdate.setIsExpense} />
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => dispatch(closeEditModalCreator())}>Close</Button>
                <Button onClick={() => entryUpdate.updateEntry(id)} primary>Ok</Button>
            </Modal.Actions>
        </Modal>
    );
};

export default ModalEdit;
