"use client";
import { useCallback } from "react";
import { TodoItem } from "./TodoItem";
import PropTypes from "prop-types";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export function TodoList({ todos, toggleTodo, deleteTodo, onReorder }) {
  const handleDragEnd = useCallback(
    (result) => {
      if (!result.destination) return;

      if (result.destination.index === result.source.index) return;

      const items = Array.from(todos);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);

      onReorder(items);
    },
    [todos, onReorder]
  );

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="todos">
        {(droppableProvided) => (
          <ul
            {...droppableProvided.droppableProps}
            ref={droppableProvided.innerRef}
            className="list"
          >
            {todos.length === 0 && "No Todos"}
            {todos.map((todo, index) => (
              <Draggable
                key={todo.id}
                draggableId={`todo-${todo.id}`}
                index={index}
              >
                {(draggableProvided) => (
                  <li
                    ref={draggableProvided.innerRef}
                    {...draggableProvided.draggableProps}
                  >
                    <TodoItem
                      {...todo}
                      toggleTodo={toggleTodo}
                      deleteTodo={deleteTodo}
                      dragHandleProps={draggableProvided.dragHandleProps}
                    />
                  </li>
                )}
              </Draggable>
            ))}
            {droppableProvided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, // <-- fixed: IDs are UUID strings, not numbers
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  onReorder: PropTypes.func.isRequired,
};
