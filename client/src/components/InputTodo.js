import React, { Fragment, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const InputTodo = () => {
  const [description, setDescription] = useState("");
  
  const onSubmitForm = async e => {
    e.preventDefault();

    try {
      const body = { description };

      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });

      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center my-5">Input Todo</h1>
      <Form className="d-flex" onSubmit={onSubmitForm}>
        <Form.Control type="text" placeholder="add todo" value={description} onChange={e => setDescription(e.target.value)} />
        <Button type="submit" variant="success">Add</Button>
      </Form>
    </Fragment>
  )
};

export default InputTodo;