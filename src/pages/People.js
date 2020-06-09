import React, { Component } from 'react';
import { connect } from 'react-redux';

import PersonList from '../components/Persons/PersonList/PersonList';

class PeoplePage extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Люди</h1>
                <PersonList persons={this.props.persons} />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        persons: state.personsReducer.persons
    };
};

export default connect(
    mapStateToProps,
    null
)(PeoplePage);