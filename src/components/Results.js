import React, { Component } from 'react';

class Results extends Component {
    render() {
        return (
            <div>
                <table className="table search-table">
                    <thead>
                        <tr>
                            <th>Search Results</th>
                            <th />
                            <th></th>
                            <th />
                        </tr>
                        <tr>
                            <th>Title</th>
                            <th>First Name</th>
                            <th>Surname</th>
                            <th>Email</th>
                            <th>Room ID</th>
                            <th>Check-In-Date</th>
                            <th>Check-Out-Date</th>
                        </tr>

                    </thead>
                    <tbody>
                        <tr>
                            <td>Mr</td>
                            <td>John</td>
                            <td>Doe</td>
                            <td>johndoe@doe.com</td>
                            <td>2</td>
                            <td>2017-11-21</td>
                            <td>2017-11-23</td>
                        </tr>
                        <tr>
                            <td>Doctor</td>
                            <td>Sadia</td>
                            <td>Begun</td>
                            <td>begum_sadia@sadia.org</td>
                            <td>1</td>
                            <td>2018-02-15</td>
                            <td>2018-02-28</td>
                        </tr>
                        <tr>
                            <td>Prince</td>
                            <td>Henry</td>
                            <td>Wales</td>
                            <td>harry@wales.com</td>
                            <td>5</td>
                            <td>2018-03-01</td>
                            <td>2018-04-09</td>
                        </tr>
                        


                        
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Results