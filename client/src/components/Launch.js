import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import {Link} from 'react-router-dom';

const LAUNCHES_QUERY = gql`   
    query LaunchQuery($flight_number: Int!){
            launch(flight_number: $flight_number){
                flight_number,
                mission_name,
                launch_year,
                launch_success,
                launch_year,
                rocket{
                    rocket_id,
                    rocket_name,
                    rocket_type
                }
            }
        }     
    `;

export default class Launch extends Component {   
    render() {
        let {flight_number} = this.props.match.params;
        flight_number =parseInt(flight_number);
        return (
            <>
                <Query query = {LAUNCHES_QUERY}>

                </Query>
            </>
        )
    }
}
