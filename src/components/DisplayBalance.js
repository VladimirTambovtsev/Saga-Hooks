import React from 'react';
import {Statistic} from "semantic-ui-react";

const DisplayBalance = ({size, color, title, value}) => {
    return (
        <Statistic size={size} color={color}>
            <Statistic.Label style={{textAlign: 'left'}}>{title}</Statistic.Label>
            <Statistic.Value>{isNaN(value) ? 0 : value}</Statistic.Value>
        </Statistic>
    );
};

export default DisplayBalance;
