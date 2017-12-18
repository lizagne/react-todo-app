import React from 'react';

const Title = ({ todoCount }) => {
  return (
    <div>
       <div>
          <h1>My To-Do List</h1>
          <h2>Items on my to-do List: ({ todoCount })</h2>
       </div>
    </div>
  );
}


export default Title;