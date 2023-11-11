
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";

const App = () => {
  const posts = [
    { id: "1", title: "Post 1", content: "This is the content of post 1." },
    { id: "2", title: "Post 2", content: "This is the content of post 2." },
    // Add more posts as needed
  ];

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <PostList posts={posts} />} />
        <Route
          path="/post/:postId"
          render={() => <PostDetail posts={posts} />}
        />
      </Switch>
    </Router>
  );
};

export default App;
