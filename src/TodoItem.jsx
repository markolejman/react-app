'use client';
import CheckIcon from '@mui/icons-material/Check';
import PropTypes from 'prop-types';

export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return (
        <li className={completed ? 'completed' : ''}>
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
            <button onClick={() => deleteTodo(id)} className="btn btn-danger">
                Delete
            </button>
        </li>
    );
}

TodoItem.propTypes = {
    completed: PropTypes.bool.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
};
