import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

let composeEnhancers;
const middleware = [thunk];

if (
  process.env.NODE_ENV === "development" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
} else {
  composeEnhancers = compose;
}

/**
 ******************** NOTE **************************
 * Note: Thunk must be the first in the applyMiddleware arguments list
 * or else you will end up seeing a log such as
 * ƒ (dispatch) {
 * dispatch({
 *    type: _action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_USER"]
 *  });
 *  Object(_userAPI__WEBPACK_IMPORTED_MODULE_0__["getUserProfile"])(userEmail).then(function (…
 * in the console
 *
 * \_(ツ)_/¯
 */

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

const configure = rootReducer =>
  createStore(
    rootReducer,
    {},
    composeEnhancers(applyMiddleware(...middleware))
  );

export default configure;
