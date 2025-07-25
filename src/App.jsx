'use client';
import { useEffect, useState } from "react";
import { NewTodoForm } from "./NewTodoForm";
import "./styles.css";
import { TodoList } from "./TodoList";
import GradientComponent from "./GradientComponent";

function App() {
    const [todos, setTodos] = useState(() => {
        const localValue = localStorage.getItem("ITEMS");
        return localValue ? JSON.parse(localValue) : [];
    });

    const [backgroundColor, setBackgroundColor] = useState("#0b3954");

    useEffect(() => {
        localStorage.setItem("ITEMS", JSON.stringify(todos));
    }, [todos]);

    const addTodo = (title) => {
        setTodos((prev) => [
            ...prev,
            { id: crypto.randomUUID(), title, completed: false },
        ]);
    };

    const toggleTodo = (id, completed) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, completed } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    useEffect(() => {
        document.body.style.backgroundColor = backgroundColor;
    }, [backgroundColor]);

    return (
        <>
            <GradientComponent onBackgroundColorChange={setBackgroundColor} />
            <div className="app-container">
                <NewTodoForm onSubmit={addTodo} />
                <h1 className="header">Todo List:</h1>
                <TodoList
                    todos={todos}
                    setTodos={setTodos}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                />
            </div>
        </>
    );
}

export default App;
