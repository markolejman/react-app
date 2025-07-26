'use client';
import { useState } from "react";
import PropTypes from "prop-types";

export function NewTodoForm({ onSubmit }) {
    const [newItem, setNewItem] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newItem.trim()) return;

        onSubmit(newItem.trim());
        setNewItem("");
    };

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    type="text"
                    id="item"
                    autoComplete="off"
                    placeholder="What is your next task?"
                />
            </div>
            <button className="btn">Add</button>
        </form>
    );
}

NewTodoForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
