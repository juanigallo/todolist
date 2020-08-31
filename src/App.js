import React from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

class App extends React.Component {
  render() {
    return (
      <>
        <AddTask />
        <Tasks />
      </>
    );
  }
}

export default App;
