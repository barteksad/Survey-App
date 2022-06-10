import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createReducer } from "./reducer";

import { createStore } from "redux";

import "./index.css";

import { Survey } from "./features/survey";
import { LinkPage } from "./features/link";
import { ResultPage } from "./features/results";
import { AnswerPage } from "./features/answer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const store = createStore(createReducer());

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Routes>
                <Route path="/create-survey" element={<Survey />} />
                <Route path="/survey-created" element={<LinkPage />} />
                <Route path="/results/:formId" element={<ResultPage />} />
                <Route path="/answer/:formId" element={<AnswerPage />} />
            </Routes>
        </Router>
    </Provider>,

    document.getElementById("root")
);
