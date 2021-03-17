import React from 'react';
import {Grid, Segment} from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance";

const DisplayBalances = ({ totalIncome, totalExpense}) => {
    return (
        <Segment textAlign="center">
            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column>
                        <DisplayBalance size={'tiny'} color={'green'} title={'Income:'} value={totalIncome} />
                    </Grid.Column>
                    <Grid.Column>
                        <DisplayBalance size={'tiny'} color={'red'} title={'Expenses:'} value={totalExpense} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    );
};

export default DisplayBalances;
