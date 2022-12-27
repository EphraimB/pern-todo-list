import React, { Fragment, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Table from 'react-bootstrap/Table';

const ListTodos = () => {
    const [todos, setTodos] = useState([]);
    async function getTodos() {
        const res = await fetch("http://localhost:5000/todos");

        const todoArray = await res.json();

        setTodos(todoArray);
    }

    useEffect(() => {
        getTodos();
    }, []);

    console.log(todos);

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
                    {todos.map(todo => (
                        <tr>
                            <td>{todo.description}</td>
                            <td>Edit</td>
                            <td>
                                <Button variant="danger">Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Fragment>
    );
};

export default ListTodos;