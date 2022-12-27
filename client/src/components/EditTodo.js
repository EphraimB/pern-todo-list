import React, { Fragment, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const EditTodo = ({ todo }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const editText = async id => {
        try {
            const body = { description };
            const res = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });

            console.log(res);
            handleClose();
        } catch (err) {
            console.error(err.message);
        }
    }

    const [description, setDescription] = useState(todo.description);

    return (
        <Fragment>
            <Button variant="warning" onClick={handleShow}>
                Edit
            </Button>

            <Modal show={show} onHide={handleClose} id={`id${todo.todo_id}`}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Todo</Modal.Title>
                </Modal.Header>
                <Modal.Body><Form.Control type="text" value={description} onChange={e => setDescription(e.target.value)} /></Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={() => editText(todo.todo_id)}>
                        Edit
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
};

export default EditTodo;