import React, { Fragment, useState } from "react";

const InputTodo = () => {
  return (
    <Fragment>
      <h1>Input Todo</h1>
      <form>
        <input type="text" placeholder="add todo" />
        <button>Add</button>
      </form>
    </Fragment>
  )
};

export default InputTodo;