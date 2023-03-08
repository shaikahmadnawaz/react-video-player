import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BucketList from "./components/BucketList";
import CardList from "./components/CardList";
import CardModal from "./components/CardModal";
import History from "./components/History";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={BucketList} />
        <Route path="/buckets/:bucketId" component={CardList} />
        <Route path="/card/:cardId" component={CardModal} />
        <Route path="/history" component={History} />
      </Routes>
    </Router>
  );
}

export default App;
