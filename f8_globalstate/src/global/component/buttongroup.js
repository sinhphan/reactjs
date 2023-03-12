function ButtonGroup({todoId,handleChange,handleDelete}) {
  return (
    <>
      <button data-todoid={todoId} onClick={handleChange}>
        change
      </button>
      <button data-todoid={todoId} onClick={handleDelete}>
        delete
      </button>
    </>
  );
}

export default ButtonGroup;
