import React from 'react';

const ToDosPage = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await res.json();
    // console.log(todos);

    return (
        <div>
            <h2>To-Dos: {todos.length}</h2>
        </div>
    );
};

export default ToDosPage;