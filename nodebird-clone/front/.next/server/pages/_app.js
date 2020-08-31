module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-saga */ "next-redux-saga");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_saga__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
var _jsxFileName = "/home/junho/Coding/ze-example/nodebird-clone/front/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const App = ({
  Component
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }
}, __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 7
  }
}, "NodeBird Page")), __jsx(Component, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }
}));

App.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_5__["default"].withRedux(next_redux_saga__WEBPACK_IMPORTED_MODULE_4___default()(App)));

/***/ }),

/***/ "./reducer/index.js":
/*!**************************!*\
  !*** ./reducer/index.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./reducer/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./reducer/post.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // State의 초기값

const RootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  index: (state = {}, action) => {
    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
        {
          console.log(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"], action);
          return _objectSpread(_objectSpread({}, state), action.payload);
        }

      default:
        return state;
    }
  },
  users: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
  posts: _post__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (RootReducer);

/***/ }),

/***/ "./reducer/post.js":
/*!*************************!*\
  !*** ./reducer/post.js ***!
  \*************************/
/*! exports provided: initialState, generateDummyPost, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addedCommented, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDummyPost", function() { return generateDummyPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addedCommented", function() { return addedCommented; });
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ "faker");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);



const initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: 'Junho'
    },
    content: '첫번째 게시물입니다. #블라블라 #헤헤',
    Images: [{
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5358%2F2020%2F05%2F20%2F0000277551_001_20200520101205744.jpg&type=sc960_832'
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimage.nmv.naver.net%2Fblog_2020_05_24_1051%2F2eaeb192-9d70-11ea-a4a6-48df379cc9e4_03.jpg&type=sc960_832'
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5277%2F2020%2F05%2F20%2F0000240271_001_20200520212507306.jpg&type=sc960_832'
    }],
    Comments: [{
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
        nickname: 'Junho'
      },
      content: '좋아용'
    }]
  }],
  imagePaths: [],
  hasMorePosts: true,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null
};
const generateDummyPost = number => Array(number).fill().map(() => ({
  id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
  User: {
    id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
    nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
  },
  content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.paragraph(),
  Images: [{
    src: faker__WEBPACK_IMPORTED_MODULE_2___default.a.image.image()
  }],
  Comments: [{
    User: {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
    },
    content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.sentence()
  }]
}));

const dummyData = data => ({
  id: data.id,
  content: data.content,
  User: {
    id: 1,
    nickname: 'Junho'
  },
  Images: [],
  Comments: []
});

const LOAD_POSTS_REQUEST = 'LOAD_POST_REQUEST';
const LOAD_POSTS_SUCCESS = 'LOAD_POST_SUCCESS';
const LOAD_POSTS_FAILURE = 'LOAD_POST_FAILURE';
const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
const ADD_COMMENT_SUCCESS = 'ADD_COMMESUCCESSEST';
const ADD_COMMENT_FAILURE = 'ADD_COMMEFAILUREEST';
const addPost = data => ({
  type: ADD_POST_REQUEST,
  data
});
const addedCommented = data => ({
  type: ADD_COMMENT_REQUEST,
  data
});

const dummyComment = data => ({
  id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
  content: data,
  User: {
    id: 1,
    nickname: 'Junho'
  }
});

const PostReducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_1___default()(state, draft => {
  switch (action.type) {
    case LOAD_POSTS_REQUEST:
      draft.loadPostsLoading = true;
      draft.loadPostsDone = false;
      draft.loadPostsError = null;
      break;

    case LOAD_POSTS_SUCCESS:
      draft.loadPostsLoading = false;
      draft.loadPostsDone = true;
      draft.mainPosts = action.data.concat(draft.mainPosts);
      draft.hasMorePosts = draft.mainPosts.length < 50;
      break;

    case LOAD_POSTS_FAILURE:
      draft.loadPostsLoading = false;
      draft.loadPostsError = action.error;
      break;

    case ADD_POST_REQUEST:
      draft.addPostLoading = true;
      draft.addPostDone = false;
      draft.addPostError = null;
      break;

    case ADD_POST_SUCCESS:
      draft.addPostLoading = false;
      draft.addPostDone = true;
      draft.mainPosts.unshift(dummyData(action.data));
      break;

    case ADD_POST_FAILURE:
      draft.addPostLoading = false;
      draft.addPostError = action.error;
      break;

    case REMOVE_POST_REQUEST:
      draft.removePostLoading = true;
      draft.removePostDone = false;
      draft.removePostError = null;
      break;

    case REMOVE_POST_SUCCESS:
      draft.mainPosts = state.mainPosts.filter(v => v.id !== action.data);
      draft.removePostLoading = false;
      draft.removePostDone = true;
      break;

    case REMOVE_POST_FAILURE:
      draft.removePostLoading = false;
      draft.removePostError = action.error;
      break;

    case ADD_COMMENT_REQUEST:
      draft.addCommentLoading = true;
      draft.addCommentDone = false;
      draft.addCommentError = null;
      break;

    case ADD_COMMENT_SUCCESS:
      {
        const post = draft.mainPosts.find(v => v.id === action.data.postId);
        post.Comments.unshift(dummyComment(action.data.content));
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;
      }

    case ADD_COMMENT_FAILURE:
      draft.addCommentLoading = false;
      draft.addCommentError = action.error;
      break;

    default:
      break;
  }
});

/* harmony default export */ __webpack_exports__["default"] = (PostReducer);

/***/ }),

/***/ "./reducer/user.js":
/*!*************************!*\
  !*** ./reducer/user.js ***!
  \*************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, LogInRequestAction, LogOutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_REQUEST", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_SUCCESS", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_FAILURE", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInRequestAction", function() { return LogInRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogOutRequestAction", function() { return LogOutRequestAction; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  logInLoading: false,
  logInDone: false,
  lodInError: null,
  logOutLoading: false,
  logOutDone: false,
  lodOutError: null,
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
  changeNicknameLoading: false,
  changeNicknameDone: false,
  changeNicknameError: null,
  followLoading: false,
  followDone: false,
  followError: null,
  unFollowLoading: false,
  unFollowDone: false,
  unFollowError: null,
  me: null,
  signUpData: {},
  loginData: {}
};
const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
const LOG_IN_SUCCESS = 'LOG_IN_FAILURE';
const LOG_IN_FAILURE = 'LOG_IN_SUCCESS';
const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';
const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
const FOLLOW_FAILURE = 'FOLLOW_FAILURE';
const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';
const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';
const LogInRequestAction = data => ({
  type: LOG_IN_REQUEST,
  data
}); // 넘겨줄 Action
// 컴포넌트에서 dispatch(LoginAction(data로 넘겨줄값) 으로 사용)
// 2. LogInRequestAction은 LOG_IN_REUQEST 액션을 담고
// data는 id, password 값을 담고있다.

const LogOutRequestAction = () => ({
  type: LOG_OUT_REQUEST
});

const dummyUser = data => _objectSpread(_objectSpread({}, data), {}, {
  nickname: 'mememe',
  id: 1,
  Posts: [{
    id: 1
  }],
  Followings: [{
    nickname: 'Once'
  }, {
    nickname: 'Twice'
  }, {
    nickname: 'Cheen'
  }],
  Followers: [{
    nickname: 'Once'
  }, {
    nickname: 'Twice'
  }, {
    nickname: 'Cheen'
  }]
});

const UserReducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
  switch (action.type) {
    case FOLLOW_REQUEST:
      draft.followLoading = true;
      draft.followDone = false;
      draft.followError = null;
      break;

    case FOLLOW_SUCCESS:
      draft.followLoading = false;
      draft.me.Followings.push({
        id: action.data
      });
      draft.followDone = true;
      break;

    case FOLLOW_FAILURE:
      draft.followLoading = false;
      draft.followError = action.error;
      break;

    case UNFOLLOW_REQUEST:
      draft.unFollowLoading = true;
      draft.unFollowDone = false;
      draft.unFollowError = null;
      break;

    case UNFOLLOW_SUCCESS:
      draft.unFollowLoading = false;
      draft.unFollowDone = true;
      draft.me.Followings = draft.me.Followings.filter(v => v.id !== action.data);
      break;

    case UNFOLLOW_FAILURE:
      draft.unFollowLoading = false;
      draft.unFollowError = action.error;
      break;

    case LOG_IN_REQUEST:
      draft.logInLoading = true;
      draft.logInDone = false;
      draft.lodInError = null;
      break;

    case LOG_IN_SUCCESS:
      draft.logInLoading = false;
      draft.logInDone = true;
      draft.me = dummyUser(action.data);
      break;

    case LOG_IN_FAILURE:
      draft.logInLoading = false;
      draft.lodInError = action.error;
      break;

    case LOG_OUT_REQUEST:
      draft.logOutLoading = true;
      draft.logOutDone = false;
      draft.lodOutError = null;
      break;

    case LOG_OUT_SUCCESS:
      draft.logOutLoading = false;
      draft.logOutDone = true;
      draft.me = null;
      break;

    case LOG_OUT_FAILURE:
      draft.logOutLoading = false;
      draft.lodOutError = action.error;
      break;

    case SIGN_UP_REQUEST:
      draft.signUpLoading = true;
      draft.signUpDone = false;
      draft.signUpError = null;
      break;

    case SIGN_UP_SUCCESS:
      draft.signUpLoading = false;
      draft.signUpDone = false;
      break;

    case SIGN_UP_FAILURE:
      draft.signUpLoading = false;
      draft.signUpError = action.error;
      break;

    case CHANGE_NICKNAME_REQUEST:
      draft.changeNicknameLoading = true;
      draft.changeNicknameDone = false;
      draft.changeNicknameError = null;
      break;

    case CHANGE_NICKNAME_SUCCESS:
      draft.changeNicknameLoading = false;
      draft.changeNicknameDone = false;
      break;

    case CHANGE_NICKNAME_FAILURE:
      draft.changeNicknameLoading = false;
      draft.changeNicknameError = action.error;
      break;

    case ADD_POST_TO_ME:
      draft.me.Posts.unshift({
        id: action.data
      });
      break;

    case REMOVE_POST_OF_ME:
      draft.me.Posts = draft.me.Posts.filter(v => v.id !== action.data);
      break;

    default:
      break;
  }
});

/* harmony default export */ __webpack_exports__["default"] = (UserReducer);

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./sagas/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./sagas/post.js");



function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_1__["default"])]);
}

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducer_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducer/post */ "./reducer/post.js");
/* harmony import */ var _reducer_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducer/user */ "./reducer/user.js");





function* loadPosts() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducer_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_SUCCESS"],
      data: Object(_reducer_post__WEBPACK_IMPORTED_MODULE_2__["generateDummyPost"])(10)
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducer_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_FAILURE"],
      data: err.response.data
    });
  }
}

function* addPost(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    const id = shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate();
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducer_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],
      data: {
        id,
        content: action.data
      }
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducer_user__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_TO_ME"],
      data: id
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducer_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"],
      data: err.response.data
    });
  }
}

function* removePost(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducer_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_SUCCESS"],
      data: action.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducer_user__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_OF_ME"],
      data: action.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducer_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_FAILURE"],
      data: err.response.data
    });
  }
}

function* addComment(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducer_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducer_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
      data: err.response.data
    });
  }
}

function* watchLoadPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["throttle"])(5000, _reducer_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_REQUEST"], loadPosts);
}

function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducer_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"], addPost);
}

function* watchRemovePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducer_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_REQUEST"], removePost);
}

function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducer_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"], addComment);
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddComment)]);
}

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducer_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducer/user */ "./reducer/user.js");



function* login(action) {
  try {
    console.log('saga login');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(2000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducer_user__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    console.log(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducer_user__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_FAILURE"],
      data: err.response.data
    });
  }
} // 4-2. login


function* logout() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(2000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducer_user__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_SUCCESS"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducer_user__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_FAILURE"],
      data: err.response.data
    });
  }
}

function* signup(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducer_user__WEBPACK_IMPORTED_MODULE_1__["SIGN_UP_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducer_user__WEBPACK_IMPORTED_MODULE_1__["SIGN_UP_FAILURE"],
      data: err.response.data
    });
  }
}

function* follow(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducer_user__WEBPACK_IMPORTED_MODULE_1__["FOLLOW_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducer_user__WEBPACK_IMPORTED_MODULE_1__["FOLLOW_FAILURE"],
      data: err.response.data
    });
  }
}

function* unfollow(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducer_user__WEBPACK_IMPORTED_MODULE_1__["UNFOLLOW_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducer_user__WEBPACK_IMPORTED_MODULE_1__["UNFOLLOW_FAILURE"],
      data: err.response.data
    });
  }
}

function* watchLogin() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducer_user__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_REQUEST"], login);
} // 3. Saga가 LOG_IN_REQUEST를 감지,하고 login 제네레이터 함수를 실행시킴.
// 그와 동시에 reducer의 이벤트리스너도 실행


function* watchLogout() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducer_user__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_REQUEST"], logout);
}

function* watchSignup() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducer_user__WEBPACK_IMPORTED_MODULE_1__["SIGN_UP_REQUEST"], signup);
}

function* watchFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducer_user__WEBPACK_IMPORTED_MODULE_1__["FOLLOW_REQUEST"], follow);
}

function* watchUnFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducer_user__WEBPACK_IMPORTED_MODULE_1__["UNFOLLOW_REQUEST"], unfollow);
}

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogin), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogout), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignup), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnFollow)]);
}

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducer */ "./reducer/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");







const configureStore = () => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_3___default()();
  const middlewares = [sagaMiddleware];
  const enhancer = false ? undefined // 배포용
  : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middlewares)); // 개발용

  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducer__WEBPACK_IMPORTED_MODULE_4__["default"], enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__["default"]); // rootSaga의 task를 store 객체에 넣어준다

  return store;
};

const Wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (Wrapper);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "faker":
/*!************************!*\
  !*** external "faker" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("faker");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next-redux-saga":
/*!**********************************!*\
  !*** external "next-redux-saga" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "shortid":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXIvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2VyL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImZha2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW1tZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzaG9ydGlkXCIiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJpc1JlcXVpcmVkIiwiV3JhcHBlciIsIndpdGhSZWR1eCIsIndpdGhSZWR1eFNhZ2EiLCJSb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImluZGV4Iiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiSFlEUkFURSIsImNvbnNvbGUiLCJsb2ciLCJwYXlsb2FkIiwidXNlcnMiLCJwb3N0cyIsImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImlkIiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsIkltYWdlcyIsInNob3J0SWQiLCJnZW5lcmF0ZSIsInNyYyIsIkNvbW1lbnRzIiwiaW1hZ2VQYXRocyIsImhhc01vcmVQb3N0cyIsImxvYWRQb3N0c0xvYWRpbmciLCJsb2FkUG9zdHNEb25lIiwibG9hZFBvc3RzRXJyb3IiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJnZW5lcmF0ZUR1bW15UG9zdCIsIm51bWJlciIsIkFycmF5IiwiZmlsbCIsIm1hcCIsImZha2VyIiwibmFtZSIsImZpbmROYW1lIiwibG9yZW0iLCJwYXJhZ3JhcGgiLCJpbWFnZSIsInNlbnRlbmNlIiwiZHVtbXlEYXRhIiwiZGF0YSIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIkxPQURfUE9TVFNfU1VDQ0VTUyIsIkxPQURfUE9TVFNfRkFJTFVSRSIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsImFkZFBvc3QiLCJhZGRlZENvbW1lbnRlZCIsImR1bW15Q29tbWVudCIsIlBvc3RSZWR1Y2VyIiwicHJvZHVjZSIsImRyYWZ0IiwiY29uY2F0IiwibGVuZ3RoIiwiZXJyb3IiLCJ1bnNoaWZ0IiwiZmlsdGVyIiwidiIsInBvc3QiLCJmaW5kIiwicG9zdElkIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9kSW5FcnJvciIsImxvZ091dExvYWRpbmciLCJsb2dPdXREb25lIiwibG9kT3V0RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwiY2hhbmdlTmlja25hbWVMb2FkaW5nIiwiY2hhbmdlTmlja25hbWVEb25lIiwiY2hhbmdlTmlja25hbWVFcnJvciIsImZvbGxvd0xvYWRpbmciLCJmb2xsb3dEb25lIiwiZm9sbG93RXJyb3IiLCJ1bkZvbGxvd0xvYWRpbmciLCJ1bkZvbGxvd0RvbmUiLCJ1bkZvbGxvd0Vycm9yIiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwiRk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwiQUREX1BPU1RfVE9fTUUiLCJSRU1PVkVfUE9TVF9PRl9NRSIsIkxvZ0luUmVxdWVzdEFjdGlvbiIsIkxvZ091dFJlcXVlc3RBY3Rpb24iLCJkdW1teVVzZXIiLCJQb3N0cyIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiLCJVc2VyUmVkdWNlciIsInB1c2giLCJyb290U2FnYSIsImFsbCIsImZvcmsiLCJwb3N0U2FnYSIsInVzZXJTYWdhIiwibG9hZFBvc3RzIiwiZGVsYXkiLCJwdXQiLCJlcnIiLCJyZXNwb25zZSIsInJlbW92ZVBvc3QiLCJhZGRDb21tZW50Iiwid2F0Y2hMb2FkUG9zdHMiLCJ0aHJvdHRsZSIsIndhdGNoQWRkUG9zdCIsInRha2VMYXRlc3QiLCJ3YXRjaFJlbW92ZVBvc3QiLCJ3YXRjaEFkZENvbW1lbnQiLCJsb2dpbiIsImxvZ291dCIsInNpZ251cCIsImZvbGxvdyIsInVuZm9sbG93Iiwid2F0Y2hMb2dpbiIsIndhdGNoTG9nb3V0Iiwid2F0Y2hTaWdudXAiLCJ3YXRjaEZvbGxvdyIsIndhdGNoVW5Gb2xsb3ciLCJjb25maWd1cmVTdG9yZSIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwicmVkdWNlciIsInNhZ2FUYXNrIiwicnVuIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNy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QjtBQUM1Q2MsT0FBSztBQUR1QyxDQUFqQixDQUE3QjtBQUllNUssc0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsb0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB3aXRoUmVkdXhTYWdhIGZyb20gJ25leHQtcmVkdXgtc2FnYSc7XG5cbmltcG9ydCBXcmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcblxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50IH0pID0+IChcbiAgPD5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5Ob2RlQmlyZCBQYWdlPC90aXRsZT5cbiAgICA8L0hlYWQ+XG4gICAgPENvbXBvbmVudCAvPlxuICA8Lz5cbik7XG5cbkFwcC5wcm9wVHlwZXMgPSB7XG4gIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBXcmFwcGVyLndpdGhSZWR1eCh3aXRoUmVkdXhTYWdhKEFwcCkpO1xuIiwiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgdXNlcnMgZnJvbSAnLi91c2VyJztcbmltcG9ydCBwb3N0cyBmcm9tICcuL3Bvc3QnO1xuXG4vLyBTdGF0ZeydmCDstIjquLDqsJJcblxuY29uc3QgUm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBpbmRleDogKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgSFlEUkFURToge1xuICAgICAgICBjb25zb2xlLmxvZyhIWURSQVRFLCBhY3Rpb24pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgfSxcbiAgdXNlcnMsXG4gIHBvc3RzLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFJvb3RSZWR1Y2VyO1xuIiwiaW1wb3J0IHNob3J0SWQgZnJvbSAnc2hvcnRpZCc7XG5pbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XG5pbXBvcnQgZmFrZXIgZnJvbSAnZmFrZXInO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBtYWluUG9zdHM6IFt7XG4gICAgaWQ6IDEsXG4gICAgVXNlcjoge1xuICAgICAgaWQ6IDEsXG4gICAgICBuaWNrbmFtZTogJ0p1bmhvJyxcbiAgICB9LFxuICAgIGNvbnRlbnQ6ICfssqvrsojsp7gg6rKM7Iuc66y87J6F64uI64ukLiAj67iU652867iU6528ICPtl6Ttl6QnLFxuICAgIEltYWdlczogW1xuICAgICAge1xuICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxuICAgICAgICBzcmM6ICdodHRwczovL3NlYXJjaC5wc3RhdGljLm5ldC9jb21tb24vP3NyYz1odHRwJTNBJTJGJTJGaW1nbmV3cy5uYXZlci5uZXQlMkZpbWFnZSUyRjUzNTglMkYyMDIwJTJGMDUlMkYyMCUyRjAwMDAyNzc1NTFfMDAxXzIwMjAwNTIwMTAxMjA1NzQ0LmpwZyZ0eXBlPXNjOTYwXzgzMicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxuICAgICAgICBzcmM6ICdodHRwczovL3NlYXJjaC5wc3RhdGljLm5ldC9jb21tb24vP3NyYz1odHRwJTNBJTJGJTJGaW1hZ2Uubm12Lm5hdmVyLm5ldCUyRmJsb2dfMjAyMF8wNV8yNF8xMDUxJTJGMmVhZWIxOTItOWQ3MC0xMWVhLWE0YTYtNDhkZjM3OWNjOWU0XzAzLmpwZyZ0eXBlPXNjOTYwXzgzMicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxuICAgICAgICBzcmM6ICdodHRwczovL3NlYXJjaC5wc3RhdGljLm5ldC9jb21tb24vP3NyYz1odHRwJTNBJTJGJTJGaW1nbmV3cy5uYXZlci5uZXQlMkZpbWFnZSUyRjUyNzclMkYyMDIwJTJGMDUlMkYyMCUyRjAwMDAyNDAyNzFfMDAxXzIwMjAwNTIwMjEyNTA3MzA2LmpwZyZ0eXBlPXNjOTYwXzgzMicsXG4gICAgICB9LFxuICAgIF0sXG4gICAgQ29tbWVudHM6IFt7XG4gICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxuICAgICAgVXNlcjoge1xuICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxuICAgICAgICBuaWNrbmFtZTogJ0p1bmhvJyxcbiAgICAgIH0sXG4gICAgICBjb250ZW50OiAn7KKL7JWE7JqpJyxcbiAgICB9LFxuICAgIF0sXG4gIH1dLFxuICBpbWFnZVBhdGhzOiBbXSxcbiAgaGFzTW9yZVBvc3RzOiB0cnVlLFxuICBsb2FkUG9zdHNMb2FkaW5nOiBmYWxzZSxcbiAgbG9hZFBvc3RzRG9uZTogZmFsc2UsXG4gIGxvYWRQb3N0c0Vycm9yOiBudWxsLFxuICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXG4gIGFkZFBvc3REb25lOiBmYWxzZSxcbiAgYWRkUG9zdEVycm9yOiBudWxsLFxuICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXG4gIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcbiAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxuICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXG4gIGFkZENvbW1lbnREb25lOiBmYWxzZSxcbiAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxufTtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlRHVtbXlQb3N0ID0gKG51bWJlcikgPT4gQXJyYXkobnVtYmVyKS5maWxsKCkubWFwKCgpID0+ICh7XG4gIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXG4gIFVzZXI6IHtcbiAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxuICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXG4gIH0sXG4gIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnBhcmFncmFwaCgpLFxuICBJbWFnZXM6IFt7XG4gICAgc3JjOiBmYWtlci5pbWFnZS5pbWFnZSgpLFxuICB9XSxcbiAgQ29tbWVudHM6IFt7XG4gICAgVXNlcjoge1xuICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcbiAgICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXG4gICAgfSxcbiAgICBjb250ZW50OiBmYWtlci5sb3JlbS5zZW50ZW5jZSgpLFxuICB9XSxcbn0pKTtcblxuY29uc3QgZHVtbXlEYXRhID0gKGRhdGEpID0+ICh7XG4gIGlkOiBkYXRhLmlkLFxuICBjb250ZW50OiBkYXRhLmNvbnRlbnQsXG4gIFVzZXI6IHtcbiAgICBpZDogMSxcbiAgICBuaWNrbmFtZTogJ0p1bmhvJyxcbiAgfSxcbiAgSW1hZ2VzOiBbXSxcbiAgQ29tbWVudHM6IFtdLFxufSk7XG5cbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9QT1NUX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX1BPU1RfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19GQUlMVVJFID0gJ0xPQURfUE9TVF9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSAnQUREX1BPU1RfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9ICdSRU1PVkVfUE9TVF9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gJ1JFTU9WRV9QT1NUX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSAnUkVNT1ZFX1BPU1RfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSAnQUREX0NPTU1FU1VDQ0VTU0VTVCc7XG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVGQUlMVVJFRVNUJztcblxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcbiAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcbiAgZGF0YSxcbn0pO1xuXG5leHBvcnQgY29uc3QgYWRkZWRDb21tZW50ZWQgPSAoZGF0YSkgPT4gKHtcbiAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcbiAgZGF0YSxcbn0pO1xuXG5jb25zdCBkdW1teUNvbW1lbnQgPSAoZGF0YSkgPT4gKHtcbiAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcbiAgY29udGVudDogZGF0YSxcbiAgVXNlcjoge1xuICAgIGlkOiAxLFxuICAgIG5pY2tuYW1lOiAnSnVuaG8nLFxuICB9LFxufSk7XG5cbmNvbnN0IFBvc3RSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBMT0FEX1BPU1RTX1JFUVVFU1Q6XG4gICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSBmYWxzZTtcbiAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gbnVsbDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgTE9BRF9QT1NUU19TVUNDRVNTOlxuICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IHRydWU7XG4gICAgICBkcmFmdC5tYWluUG9zdHMgPSBhY3Rpb24uZGF0YS5jb25jYXQoZHJhZnQubWFpblBvc3RzKTtcbiAgICAgIGRyYWZ0Lmhhc01vcmVQb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5sZW5ndGggPCA1MDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgTE9BRF9QT1NUU19GQUlMVVJFOlxuICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICBicmVhaztcbiAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XG4gICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XG4gICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xuICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gbnVsbDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcbiAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IHRydWU7XG4gICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChkdW1teURhdGEoYWN0aW9uLmRhdGEpKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcbiAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XG4gICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IHRydWU7XG4gICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlO1xuICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IHN0YXRlLm1haW5Qb3N0cy5maWx0ZXIoKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSkpO1xuICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICBicmVhaztcbiAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XG4gICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWU7XG4gICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IGZhbHNlO1xuICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gbnVsbDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xuICAgICAgcG9zdC5Db21tZW50cy51bnNoaWZ0KGR1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSk7XG4gICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xuICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XG4gICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0UmVkdWNlcjtcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgbG9nSW5Mb2FkaW5nOiBmYWxzZSxcbiAgbG9nSW5Eb25lOiBmYWxzZSxcbiAgbG9kSW5FcnJvcjogbnVsbCxcbiAgbG9nT3V0TG9hZGluZzogZmFsc2UsXG4gIGxvZ091dERvbmU6IGZhbHNlLFxuICBsb2RPdXRFcnJvcjogbnVsbCxcbiAgc2lnblVwTG9hZGluZzogZmFsc2UsXG4gIHNpZ25VcERvbmU6IGZhbHNlLFxuICBzaWduVXBFcnJvcjogbnVsbCxcbiAgY2hhbmdlTmlja25hbWVMb2FkaW5nOiBmYWxzZSxcbiAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcbiAgY2hhbmdlTmlja25hbWVFcnJvcjogbnVsbCxcbiAgZm9sbG93TG9hZGluZzogZmFsc2UsXG4gIGZvbGxvd0RvbmU6IGZhbHNlLFxuICBmb2xsb3dFcnJvcjogbnVsbCxcbiAgdW5Gb2xsb3dMb2FkaW5nOiBmYWxzZSxcbiAgdW5Gb2xsb3dEb25lOiBmYWxzZSxcbiAgdW5Gb2xsb3dFcnJvcjogbnVsbCxcbiAgbWU6IG51bGwsXG4gIHNpZ25VcERhdGE6IHt9LFxuICBsb2dpbkRhdGE6IHt9LFxufTtcblxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gJ0xPR19JTl9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fRkFJTFVSRSc7XG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX1NVQ0NFU1MnO1xuXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gJ0xPR19PVVRfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gJ0xPR19PVVRfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSAnU0lHTl9VUF9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSAnU0lHTl9VUF9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSAnU0lHTl9VUF9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUID0gJ0NIQU5HRV9OSUNLTkFNRV9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyA9ICdDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUgPSAnQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1QgPSAnRk9MTE9XX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gJ0ZPTExPV19TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBGT0xMT1dfRkFJTFVSRSA9ICdGT0xMT1dfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gJ1VORk9MTE9XX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NVQ0NFU1MgPSAnVU5GT0xMT1dfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgVU5GT0xMT1dfRkFJTFVSRSA9ICdVTkZPTExPV19GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FID0gJ0FERF9QT1NUX1RPX01FJztcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRSA9ICdSRU1PVkVfUE9TVF9PRl9NRSc7XG5cbmV4cG9ydCBjb25zdCBMb2dJblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcbiAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXG4gIGRhdGEsXG59KTsgLy8g64SY6rKo7KSEIEFjdGlvblxuLy8g7Lu07Y+s64SM7Yq47JeQ7IScIGRpc3BhdGNoKExvZ2luQWN0aW9uKGRhdGHroZwg64SY6rKo7KSE6rCSKSDsnLzroZwg7IKs7JqpKVxuLy8gMi4gTG9nSW5SZXF1ZXN0QWN0aW9u7J2AIExPR19JTl9SRVVRRVNUIOyVoeyFmOydhCDri7Tqs6Bcbi8vIGRhdGHripQgaWQsIHBhc3N3b3JkIOqwkuydhCDri7Tqs6Dsnojri6QuXG5cbmV4cG9ydCBjb25zdCBMb2dPdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4gKHtcbiAgdHlwZTogTE9HX09VVF9SRVFVRVNULFxufSk7XG5cbmNvbnN0IGR1bW15VXNlciA9IChkYXRhKSA9PiAoe1xuICAuLi5kYXRhLFxuICBuaWNrbmFtZTogJ21lbWVtZScsXG4gIGlkOiAxLFxuICBQb3N0czogW3sgaWQ6IDEgfV0sXG4gIEZvbGxvd2luZ3M6IFt7IG5pY2tuYW1lOiAnT25jZScgfSwgeyBuaWNrbmFtZTogJ1R3aWNlJyB9LCB7IG5pY2tuYW1lOiAnQ2hlZW4nIH1dLFxuICBGb2xsb3dlcnM6IFt7IG5pY2tuYW1lOiAnT25jZScgfSwgeyBuaWNrbmFtZTogJ1R3aWNlJyB9LCB7IG5pY2tuYW1lOiAnQ2hlZW4nIH1dLFxufSk7XG5cbmNvbnN0IFVzZXJSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBGT0xMT1dfUkVRVUVTVDpcbiAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSB0cnVlO1xuICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IGZhbHNlO1xuICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBudWxsO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBGT0xMT1dfU1VDQ0VTUzpcbiAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MucHVzaCh7IGlkOiBhY3Rpb24uZGF0YSB9KTtcbiAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBGT0xMT1dfRkFJTFVSRTpcbiAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBVTkZPTExPV19SRVFVRVNUOlxuICAgICAgZHJhZnQudW5Gb2xsb3dMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIGRyYWZ0LnVuRm9sbG93RG9uZSA9IGZhbHNlO1xuICAgICAgZHJhZnQudW5Gb2xsb3dFcnJvciA9IG51bGw7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFVORk9MTE9XX1NVQ0NFU1M6XG4gICAgICBkcmFmdC51bkZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIGRyYWZ0LnVuRm9sbG93RG9uZSA9IHRydWU7XG4gICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzID0gZHJhZnQubWUuRm9sbG93aW5ncy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgVU5GT0xMT1dfRkFJTFVSRTpcbiAgICAgIGRyYWZ0LnVuRm9sbG93TG9hZGluZyA9IGZhbHNlO1xuICAgICAgZHJhZnQudW5Gb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XG4gICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSB0cnVlO1xuICAgICAgZHJhZnQubG9nSW5Eb25lID0gZmFsc2U7XG4gICAgICBkcmFmdC5sb2RJbkVycm9yID0gbnVsbDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XG4gICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IHRydWU7XG4gICAgICBkcmFmdC5tZSA9IGR1bW15VXNlcihhY3Rpb24uZGF0YSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxuICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XG4gICAgICBkcmFmdC5sb2RJbkVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XG4gICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSBmYWxzZTtcbiAgICAgIGRyYWZ0LmxvZE91dEVycm9yID0gbnVsbDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxuICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IHRydWU7XG4gICAgICBkcmFmdC5tZSA9IG51bGw7XG4gICAgICBicmVhaztcbiAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcbiAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcbiAgICAgIGRyYWZ0LmxvZE91dEVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XG4gICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZTtcbiAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gbnVsbDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxuICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xuICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XG4gICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XG4gICAgICBkcmFmdC5zaWduVXBFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q6XG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSB0cnVlO1xuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gZmFsc2U7XG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gbnVsbDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6XG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBDSEFOR0VfTklDS05BTUVfRkFJTFVSRTpcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQUREX1BPU1RfVE9fTUU6XG4gICAgICBkcmFmdC5tZS5Qb3N0cy51bnNoaWZ0KHsgaWQ6IGFjdGlvbi5kYXRhIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBSRU1PVkVfUE9TVF9PRl9NRTpcbiAgICAgIGRyYWZ0Lm1lLlBvc3RzID0gZHJhZnQubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyUmVkdWNlcjtcbiIsImltcG9ydCB7IGFsbCwgZm9yayB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5cbmltcG9ydCB1c2VyU2FnYSBmcm9tICcuL3VzZXInO1xuaW1wb3J0IHBvc3RTYWdhIGZyb20gJy4vcG9zdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcbiAgeWllbGQgYWxsKFtcbiAgICBmb3JrKHBvc3RTYWdhKSxcbiAgICBmb3JrKHVzZXJTYWdhKSxcbiAgXSk7XG59XG4iLCJpbXBvcnQgeyBhbGwsIGZvcmssIHB1dCwgZGVsYXksIHRha2VMYXRlc3QsIHRocm90dGxlIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xuaW1wb3J0IHtcbiAgQUREX1BPU1RfUkVRVUVTVCxcbiAgQUREX1BPU1RfU1VDQ0VTUyxcbiAgQUREX1BPU1RfRkFJTFVSRSxcbiAgUkVNT1ZFX1BPU1RfUkVRVUVTVCxcbiAgUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcbiAgUkVNT1ZFX1BPU1RfRkFJTFVSRSxcbiAgQUREX0NPTU1FTlRfUkVRVUVTVCxcbiAgQUREX0NPTU1FTlRfU1VDQ0VTUyxcbiAgQUREX0NPTU1FTlRfRkFJTFVSRSxcbiAgTE9BRF9QT1NUU19SRVFVRVNULFxuICBMT0FEX1BPU1RTX1NVQ0NFU1MsXG4gIExPQURfUE9TVFNfRkFJTFVSRSxcbiAgZ2VuZXJhdGVEdW1teVBvc3QsXG59IGZyb20gJy4uL3JlZHVjZXIvcG9zdCc7XG5pbXBvcnQgeyBBRERfUE9TVF9UT19NRSwgUkVNT1ZFX1BPU1RfT0ZfTUUgfSBmcm9tICcuLi9yZWR1Y2VyL3VzZXInO1xuXG5mdW5jdGlvbiogbG9hZFBvc3RzKCkge1xuICB0cnkge1xuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX1NVQ0NFU1MsXG4gICAgICBkYXRhOiBnZW5lcmF0ZUR1bW15UG9zdCgxMCksXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX0ZBSUxVUkUsXG4gICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogYWRkUG9zdChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcbiAgICBjb25zdCBpZCA9IHNob3J0SWQuZ2VuZXJhdGUoKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgaWQsXG4gICAgICAgIGNvbnRlbnQ6IGFjdGlvbi5kYXRhLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogQUREX1BPU1RfVE9fTUUsXG4gICAgICBkYXRhOiBpZCxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXG4gICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxuICAgIH0pO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9PRl9NRSxcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX0ZBSUxVUkUsXG4gICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogYWRkQ29tbWVudChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdHMoKSB7XG4gIHlpZWxkIHRocm90dGxlKDUwMDAsIExPQURfUE9TVFNfUkVRVUVTVCwgbG9hZFBvc3RzKTtcbn1cblxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KTtcbn1cblxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfUE9TVF9SRVFVRVNULCByZW1vdmVQb3N0KTtcbn1cblxuZnVuY3Rpb24qIHdhdGNoQWRkQ29tbWVudCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNULCBhZGRDb21tZW50KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCkge1xuICB5aWVsZCBhbGwoW1xuICAgIGZvcmsod2F0Y2hMb2FkUG9zdHMpLFxuICAgIGZvcmsod2F0Y2hBZGRQb3N0KSxcbiAgICBmb3JrKHdhdGNoUmVtb3ZlUG9zdCksXG4gICAgZm9yayh3YXRjaEFkZENvbW1lbnQpLFxuXG4gIF0pO1xufVxuIiwiaW1wb3J0IHsgYWxsLCBmb3JrLCBwdXQsIGRlbGF5LCB0YWtlTGF0ZXN0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCB7XG4gIExPR19JTl9SRVFVRVNULFxuICBMT0dfSU5fU1VDQ0VTUyxcbiAgTE9HX0lOX0ZBSUxVUkUsXG4gIExPR19PVVRfUkVRVUVTVCxcbiAgTE9HX09VVF9TVUNDRVNTLFxuICBMT0dfT1VUX0ZBSUxVUkUsXG4gIFNJR05fVVBfUkVRVUVTVCxcbiAgU0lHTl9VUF9TVUNDRVNTLFxuICBTSUdOX1VQX0ZBSUxVUkUsXG4gIEZPTExPV19SRVFVRVNULFxuICBGT0xMT1dfU1VDQ0VTUyxcbiAgRk9MTE9XX0ZBSUxVUkUsXG4gIFVORk9MTE9XX1JFUVVFU1QsXG4gIFVORk9MTE9XX1NVQ0NFU1MsXG4gIFVORk9MTE9XX0ZBSUxVUkUsXG59IGZyb20gJy4uL3JlZHVjZXIvdXNlcic7XG5cbmZ1bmN0aW9uKiBsb2dpbihhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zb2xlLmxvZygnc2FnYSBsb2dpbicpO1xuICAgIHlpZWxkIGRlbGF5KDIwMDApO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG4vLyA0LTIuIGxvZ2luXG5cbmZ1bmN0aW9uKiBsb2dvdXQoKSB7XG4gIHRyeSB7XG4gICAgeWllbGQgZGVsYXkoMjAwMCk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPR19PVVRfU1VDQ0VTUyxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPR19PVVRfRkFJTFVSRSxcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiBzaWdudXAoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFNJR05fVVBfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogU0lHTl9VUF9GQUlMVVJFLFxuICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIGZvbGxvdyhhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogRk9MTE9XX1NVQ0NFU1MsXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IEZPTExPV19GQUlMVVJFLFxuICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIHVuZm9sbG93KGFjdGlvbikge1xuICB0cnkge1xuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBVTkZPTExPV19TVUNDRVNTLFxuICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBVTkZPTExPV19GQUlMVVJFLFxuICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIHdhdGNoTG9naW4oKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ2luKTtcbn1cbi8vIDMuIFNhZ2HqsIAgTE9HX0lOX1JFUVVFU1Trpbwg6rCQ7KeALO2VmOqzoCBsb2dpbiDsoJzrhKTroIjsnbTthLAg7ZWo7IiY66W8IOyLpO2WieyLnO2CtC5cbi8vIOq3uOyZgCDrj5nsi5zsl5AgcmVkdWNlcuydmCDsnbTrsqTtirjrpqzsiqTrhIjrj4Qg7Iuk7ZaJXG5cbmZ1bmN0aW9uKiB3YXRjaExvZ291dCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QsIGxvZ291dCk7XG59XG5cbmZ1bmN0aW9uKiB3YXRjaFNpZ251cCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ251cCk7XG59XG5cbmZ1bmN0aW9uKiB3YXRjaEZvbGxvdygpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChGT0xMT1dfUkVRVUVTVCwgZm9sbG93KTtcbn1cblxuZnVuY3Rpb24qIHdhdGNoVW5Gb2xsb3coKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoVU5GT0xMT1dfUkVRVUVTVCwgdW5mb2xsb3cpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XG4gIHlpZWxkIGFsbChbXG4gICAgZm9yayh3YXRjaExvZ2luKSxcbiAgICBmb3JrKHdhdGNoTG9nb3V0KSxcbiAgICBmb3JrKHdhdGNoU2lnbnVwKSxcbiAgICBmb3JrKHdhdGNoRm9sbG93KSxcbiAgICBmb3JrKHdhdGNoVW5Gb2xsb3cpLFxuICBdKTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnO1xuXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2VyJztcbmltcG9ydCByb290U2FnYSBmcm9tICcuLi9zYWdhcyc7XG5cbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xuICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XG4gIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlXTtcbiAgY29uc3QgZW5oYW5jZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXG4gICAgPyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpIC8vIOuwsO2PrOyaqVxuICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKTsgLy8g6rCc67Cc7JqpXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpO1xuXG4gIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcbiAgLy8gcm9vdFNhZ2HsnZggdGFza+ulvCBzdG9yZSDqsJ3ssrTsl5Ag64Sj7Ja07KSA64ukXG5cbiAgcmV0dXJuIHN0b3JlO1xufTtcblxuY29uc3QgV3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHtcbiAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFdyYXBwZXI7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmYWtlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzaG9ydGlkXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=