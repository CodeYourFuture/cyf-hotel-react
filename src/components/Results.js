import React, { Component } from 'react';

export default class Reasult extends Component {
    render() {
        return (
            <div className="row">
                <div className="col">
                    <p>Results</p>
                    <table className="table search-table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>First name id</th>
                                <th>Surname</th>
                                <th>Email</th>
                                <th>Room id</th>
                                <th>Check in date</th>
                                <th>Check out date</th>
                            </tr>
                        </thead>
                        <tr>
                            <td>Mr</td>
                            <td>Person1</td>
                            <td>Alex</td>
                            <td>alex@gmail.com</td>
                            <td>1</td>
                            <td>2018-01-20</td>
                            <td>2018-01-30</td>
                        </tr>
                        <tr>
                            <td>Mr</td>
                            <td>Person1</td>
                            <td>Alex</td>
                            <td>alex@gmail.com</td>
                            <td>1</td>
                            <td>2018-01-20</td>
                            <td>2018-01-30</td>
                        </tr>
                        <tr>
                            <td>Mr</td>
                            <td>Person1</td>
                            <td>Alex</td>
                            <td>alex@gmail.com</td>
                            <td>1</td>
                            <td>2018-01-20</td>
                            <td>2018-01-30</td>
                        </tr>
                        <tr>
                            <td>Mr</td>
                            <td>Person1</td>
                            <td>Alex</td>
                            <td>alex@gmail.com</td>
                            <td>1</td>
                            <td>2018-01-20</td>
                            <td>2018-01-30</td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}