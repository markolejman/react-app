import CheckIcon from "@mui/icons-material/Check";
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
    <div
      className={completed ? "completed" : ""}
      style={{ display: "flex", alignItems: "center", gap: "10px" }}
    >
      {/* Drag handle */}
      <span {...dragHandleProps} style={{ cursor: "grab" }}>
        ☰
      </span>

      <label style={{ flex: 1 }}>
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

      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>
    </div>
  );
}

TodoItem.propTypes = {
  completed: PropTypes.bool.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  dragHandleProps: PropTypes.object,
};
