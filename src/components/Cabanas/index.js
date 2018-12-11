import React, { Component } from 'react';
import CabanaList from './CabanaList';
import CabanaService from '../../services/CabanasService';

export default class Cabanas extends Component {
    state = {
        cabanas: []
    };

    componentDidMount() {
        this.setState(() => ({ cabanas: CabanaService.getCabanas() }));
    }

    render() {
        const { cabanas } = this.state;

        return (
            <div className="container-fluid py-3 px-0">
                <div className="d-flex flex-row">
                    <CabanaList cabanas={cabanas} />
                </div>
            </div>
        );
    }
}
