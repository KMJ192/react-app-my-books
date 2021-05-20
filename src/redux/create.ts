import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./modules/rootSaga";
import reducer from "./modules/reducer";


const create = () => {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

    sagaMiddleware.run(rootSaga);

    return store;
}

export default create;