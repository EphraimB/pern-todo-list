import React, { Fragment , useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';

const ListTodos = () => {
    async function getTodos() {
        const res = await fetch("http://localhost:5000/todos");

        const todoArray = await res.json();

        console.log(todoArray);
    }

    useEffect(() => {
        getTodos();
    }, []);
    
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