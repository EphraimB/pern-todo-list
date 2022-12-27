import React, { Fragment } from "react";
import Table from 'react-bootstrap/Table';

const ListTodos = () => {
    return (
        <Fragment>
            {" "}
            <Table className="mt-5">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </Table>
        </Fragment>
    );
};

export default ListTodos;