import React from 'react';
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <PostForm/>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Синхронные посты</h2>
      <Posts/>
        </div>
      </div>
    </div>
  );
}

export default App;
