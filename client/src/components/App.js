import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamList from "./streams/StreamList";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamShow from "./streams/StreamShow";
import StreamCreate from "./streams/StreamCreate";
import Header from "./Header";
const App = () => {
  return (
    <div className=" ui container">
      <BrowserRouter>
        <Header />

        <div>
          <Route path="/" exact component={StreamList} />
          <Route path="/Streams/Delete" exact component={StreamDelete} />
          <Route path="/Streams/Edit" exact component={StreamEdit} />
          <Route path="/Streams/Show" exact component={StreamShow} />
          <Route path="/Streams/new" exact component={StreamCreate} />
        </div>
      </BrowserRouter>
    </div>
  );
};
export default App;
