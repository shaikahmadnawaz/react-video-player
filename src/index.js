import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import thunk from "redux-thunk";
import App from "./App";
import reducers from "./reducers";
import "./index.css";
import { fetchBuckets } from "./actions/bucketsActions";
import { fetchCards } from "./actions/cardsActions";

const store = createStore(reducers, applyMiddleware(thunk));

store.dispatch(fetchBuckets());
store.dispatch(fetchCards());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
