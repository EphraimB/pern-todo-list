import React, { Fragment, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Table from 'react-bootstrap/Table';
import EditTodo from "./EditTodo";

const ListTodos = () => {
    const [todos, setTodos] = useState([]);

    async function deleteTodo(id) {
        try {
            const res = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE"
            });

            setTodos(todos.filter(todo => todo.todo_id !== id));
        } catch (err) {
            console.error(err.message);
        }
    }

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
                    <tr key={todos.todo_id}>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo => (
                        <tr>
                            <td>{todo.description}</td>
                            <td><EditTodo /></td>
                            <td>
                                <Button variant="danger" onClick={() => deleteTodo(todo.todo_id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Fragment>
    );
};

export default ListTodos;