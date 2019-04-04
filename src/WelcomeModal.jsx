import React, { Component } from 'react';
import Inp from './Input';
import $ from 'jquery';
import './style.css';

class WelcomeModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: true
        };
    };

    componentDidMount() {
        console.log('Run componentDidMount')
        if (this.state.modal) {
            $('#WelcomeModal').modal('show');
        };
    };
    render() {
        //console.log(this)
        return (
            <>
                <div className="modal fade" id="WelcomeModal" tabIndex="-1" role="dialog" aria-labelledby="WelcomeModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="WelcomeModalLabel">Welcome Modal</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <h3>Приветствую тебя, Землянин!</h3>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => {
                                    this.setState({ modal: true }); 
                                    console.log(`Обновленный state: `, this.state);
                                }} >Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );

    };
};

export default WelcomeModal; 