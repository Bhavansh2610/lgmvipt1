import React from "react";

export default function Todo({ todos , completeTask , removeTask}) {



    return todos.map((todo,index) => (
        <div className={todo.isComplete ? 'complete task-div' : 'task-div'} key={index}>
            <div className="todo-text">{todo.text}</div>
            <div className="icons" key={todo.id}>
                <div>
                    <button className="button-complete task-button" onClick={() => {completeTask(todo.id)}}>
                    <i class="fa-regular fa-circle-check"></i>
                    </button>
                    <button className="button-delete task-button" onClick={() => {removeTask(todo.id)}}>
                    <i class="fa-solid fa-trash"></i>
                    </button>                    
                </div>
            </div>

        </div>
    ))
}