import React from 'react';
import {Grid, Icon, Segment} from "semantic-ui-react";
import {useDispatch} from "react-redux";
import {removeEntryCreator} from "../redux/actions/entries.actions";
import {openEditModalCreator} from "../redux/actions/modals.actions";

const EntryLine = ({ id, description, value, isExpense = false }) => {
    const dispatch = useDispatch()
    return (
        <>
            <Segment color={isExpense ? 'red' : 'green'}>
                <Grid columns={3} textAlign={'right'}>
                    <Grid.Row>
                        <Grid.Column width={10} textAlign={'left'}>{description}</Grid.Column>
                        <Grid.Column width={3} textAlign={'right'}>{value}</Grid.Column>
                        <Grid.Column width={3}>
                            <Icon name={"edit"} bordered onClick={() => dispatch(openEditModalCreator(id))} />
                            <Icon name={"trash"} bordered onClick={() => dispatch(removeEntryCreator(id))} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </>
    );
};

export default EntryLine;
