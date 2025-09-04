"use client";
import CheckIcon from "@mui/icons-material/Check";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import PropTypes from "prop-types";

export function TodoItem({
  completed,
  id,
  title,
  toggleTodo,
  deleteTodo,
  dragHandleProps,
}) {
  return (
    <div className={`todo-item ${completed ? "completed" : ""}`}>
      <div className="todo-content">
        <span {...dragHandleProps} className="drag-handle">
          <DragIndicatorIcon />
        </span>
        <label>
          <span className="custom-checkbox">
            <input
              type="checkbox"
              checked={completed}
              onChange={(e) => toggleTodo(id, e.target.checked)}
            />
            {completed && <CheckIcon fontSize="large" />}
          </span>
          {title}
        </label>
      </div>
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>
    </div>
  );
}

TodoItem.propTypes = {
  completed: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired, // Consistent with TodoList - IDs are always UUID strings
  title: PropTypes.string.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  dragHandleProps: PropTypes.object,
};
