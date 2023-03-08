import './todo.css';

export default function Todos() {
  return (
    <>
      <div className="todo container">
        <div className="todo__form">
          <form action="#">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                name="todo"
                placeholder="type todo"
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                ADD
              </button>
            </div>
          </form>
        </div>
        <div className="todo__list">
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              A list item
              <span className="badge bg-primary rounded-pill">remove</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
