import React from 'react';

class Table extends React.Component {

    state = {
        animals:[],
    };

    componentDidMount() {

        fetch('/animals').then(function (res) {

            return res.json();
        }).then((json) => {
            
            this.setState({animals:json});
        });
    }

    render() {

        return (

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Pet Name</th>
                        <th scope="col">Animal Type</th>
                        <th scope="col">Breed</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        this.state.animals.map((el) => {

                            return(

                                <tr>
                                    <td>{el.name}</td>
                                    <td>{el.animal}</td>
                                    <td>{el.breed}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        );
    }
}

export default Table;