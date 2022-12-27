import React, { Fragment, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const InputTodo = () => {
  return (
    <Fragment>
      <h1 className="text-center my-5">Input Todo</h1>
      <Form className="d-flex">
        <Form.Control type="text" placeholder="add todo" />
        <Button variant="success">Add</Button>
      </Form>
    </Fragment>
  )
};

export default InputTodo;