webpackHotUpdate_N_E("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/auth */ "./components/auth.js");
/* harmony import */ var _components_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/context */ "./components/context.js");


var _jsxFileName = "C:\\Users\\jonat\\MITBootcamp\\Portfolio\\Final_Project\\pages\\login.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* /pages/login.js */






function Login(props) {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    identifier: "",
    password: ""
  }),
      data = _useState[0],
      updateData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      error = _useState3[0],
      setError = _useState3[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var appContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_components_context__WEBPACK_IMPORTED_MODULE_6__["default"]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (appContext.isAuthenticated) {
      router.push("/"); // redirect if you're already logged in
    }
  }, []);

  function _onChange(event) {
    updateData(_objectSpread(_objectSpread({}, data), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, event.target.name, event.target.value)));
  }

  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    sm: "12",
    md: {
      size: 5,
      offset: 3
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1470127334" + " " + "paper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-1470127334" + " " + "header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "public/food.jpg",
    className: "jsx-1470127334",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  })), __jsx("section", {
    className: "jsx-1470127334" + " " + "wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, Object.entries(error).length !== 0 && error.constructor === Object && error.message.map(function (error) {
    return __jsx("div", {
      key: error.messages[0].id,
      style: {
        marginBottom: 10
      },
      className: "jsx-1470127334",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 21
      }
    }, __jsx("small", {
      style: {
        color: "red"
      },
      className: "jsx-1470127334",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 23
      }
    }, error.messages[0].message));
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }, __jsx("fieldset", {
    disabled: loading,
    className: "jsx-1470127334",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 19
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, "Email:"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    onChange: function onChange(event) {
      return _onChange(event);
    },
    name: "identifier",
    style: {
      height: 50,
      fontSize: "1.2em"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
    style: {
      marginBottom: 30
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 19
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }, "Password:"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    onChange: function onChange(event) {
      return _onChange(event);
    },
    type: "password",
    name: "password",
    style: {
      height: 50,
      fontSize: "1.2em"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 19
    }
  }, __jsx("span", {
    className: "jsx-1470127334",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "",
    className: "jsx-1470127334",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 23
    }
  }, __jsx("small", {
    className: "jsx-1470127334",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 25
    }
  }, "Forgot Password?"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    style: {
      "float": "right",
      width: 120
    },
    color: "primary",
    onClick: function onClick() {
      setLoading(true);
      Object(_components_auth__WEBPACK_IMPORTED_MODULE_5__["login"])(data.identifier, data.password).then(function (res) {
        setLoading(false); // set authed User in global context to update header/app state

        appContext.setUser(res.data.user);
      })["catch"](function (error) {
        //setError(error.response.data);
        setLoading(false);
      });
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }, loading ? "Loading... " : "Submit")))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1470127334",
    __self: this
  }, ".paper.jsx-1470127334{border:1px solid lightgray;box-shadow:0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);border-radius:6px;margin-top:90px;}.notification.jsx-1470127334{color:#ab003c;}.header.jsx-1470127334{width:100%;height:120px;background-color:#2196f3;margin-bottom:30px;border-radius-top:6px;}.wrapper.jsx-1470127334{padding:10px 30px 20px 30px !important;}a.jsx-1470127334{color:blue !important;}img.jsx-1470127334{margin:15px 30px 10px 50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcam9uYXRcXE1JVEJvb3RjYW1wXFxQb3J0Zm9saW9cXEZpbmFsX1Byb2plY3RcXHBhZ2VzXFxsb2dpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4R1MsQUFHd0MsQUFRYixBQUdILEFBTzRCLEFBR2pCLEFBR0ssV0FaZCxHQUhmLFFBYUEsRUFUMkIsR0FWYSxBQXNCeEMsWUFOQSxVQUxxQixtQkFDRyxzQkFDeEIsaURBWm9CLGtCQUNGLGdCQUNsQiIsImZpbGUiOiJDOlxcVXNlcnNcXGpvbmF0XFxNSVRCb290Y2FtcFxcUG9ydGZvbGlvXFxGaW5hbF9Qcm9qZWN0XFxwYWdlc1xcbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAvcGFnZXMvbG9naW4uanMgKi9cblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHtcbiAgQ29udGFpbmVyLFxuICBSb3csXG4gIENvbCxcbiAgQnV0dG9uLFxuICBGb3JtLFxuICBGb3JtR3JvdXAsXG4gIExhYmVsLFxuICBJbnB1dCxcbn0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCB7IGxvZ2luIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvYXV0aFwiO1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29udGV4dFwiO1xuXG5mdW5jdGlvbiBMb2dpbihwcm9wcykge1xuICBjb25zdCBbZGF0YSwgdXBkYXRlRGF0YV0gPSB1c2VTdGF0ZSh7IGlkZW50aWZpZXI6IFwiXCIsIHBhc3N3b3JkOiBcIlwiIH0pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgYXBwQ29udGV4dCA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYXBwQ29udGV4dC5pc0F1dGhlbnRpY2F0ZWQpIHtcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTsgLy8gcmVkaXJlY3QgaWYgeW91J3JlIGFscmVhZHkgbG9nZ2VkIGluXG4gICAgfVxuICB9LCBbXSk7XG5cbiAgZnVuY3Rpb24gb25DaGFuZ2UoZXZlbnQpIHtcbiAgICB1cGRhdGVEYXRhKHsgLi4uZGF0YSwgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFJvdz5cbiAgICAgICAgPENvbCBzbT1cIjEyXCIgbWQ9e3sgc2l6ZTogNSwgb2Zmc2V0OiAzIH19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFwZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwicHVibGljL2Zvb2QuanBnXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICAgICAgICB7T2JqZWN0LmVudHJpZXMoZXJyb3IpLmxlbmd0aCAhPT0gMCAmJlxuICAgICAgICAgICAgICAgIGVycm9yLmNvbnN0cnVjdG9yID09PSBPYmplY3QgJiZcbiAgICAgICAgICAgICAgICBlcnJvci5tZXNzYWdlLm1hcCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Vycm9yLm1lc3NhZ2VzWzBdLmlkfVxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvci5tZXNzYWdlc1swXS5tZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPEZvcm0+XG4gICAgICAgICAgICAgICAgPGZpZWxkc2V0IGRpc2FibGVkPXtsb2FkaW5nfT5cbiAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbD5FbWFpbDo8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBvbkNoYW5nZShldmVudCl9XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImlkZW50aWZpZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogNTAsIGZvbnRTaXplOiBcIjEuMmVtXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDMwIH19PlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWw+UGFzc3dvcmQ6PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gb25DaGFuZ2UoZXZlbnQpfVxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDUwLCBmb250U2l6ZTogXCIxLjJlbVwiIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cblxuICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPkZvcmdvdCBQYXNzd29yZD88L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZmxvYXQ6IFwicmlnaHRcIiwgd2lkdGg6IDEyMCB9fVxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luKGRhdGEuaWRlbnRpZmllciwgZGF0YS5wYXNzd29yZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldCBhdXRoZWQgVXNlciBpbiBnbG9iYWwgY29udGV4dCB0byB1cGRhdGUgaGVhZGVyL2FwcCBzdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcENvbnRleHQuc2V0VXNlcihyZXMuZGF0YS51c2VyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc2V0RXJyb3IoZXJyb3IucmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7bG9hZGluZyA/IFwiTG9hZGluZy4uLiBcIiA6IFwiU3VibWl0XCJ9XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAucGFwZXIge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAgICAgICAgICAgMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgICAgIDBweCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDkwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ub3RpZmljYXRpb24ge1xuICAgICAgICAgICAgY29sb3I6ICNhYjAwM2M7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzLXRvcDogNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDMwcHggMjBweCAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6IGJsdWUgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIG1hcmdpbjogMTVweCAzMHB4IDEwcHggNTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\jonat\\\\MITBootcamp\\\\Portfolio\\\\Final_Project\\\\pages\\\\login.js */"));
}

_s(Login, "IjF++1o97NpQVVWCTD4JX3a/TOA=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = Login;
/* harmony default export */ __webpack_exports__["default"] = (Login);

var _c;

$RefreshReg$(_c, "Login");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiTG9naW4iLCJwcm9wcyIsInVzZVN0YXRlIiwiaWRlbnRpZmllciIsInBhc3N3b3JkIiwiZGF0YSIsInVwZGF0ZURhdGEiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJhcHBDb250ZXh0IiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJ1c2VFZmZlY3QiLCJpc0F1dGhlbnRpY2F0ZWQiLCJwdXNoIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInNpemUiLCJvZmZzZXQiLCJPYmplY3QiLCJlbnRyaWVzIiwibGVuZ3RoIiwiY29uc3RydWN0b3IiLCJtZXNzYWdlIiwibWFwIiwibWVzc2FnZXMiLCJpZCIsIm1hcmdpbkJvdHRvbSIsImNvbG9yIiwiaGVpZ2h0IiwiZm9udFNpemUiLCJ3aWR0aCIsImxvZ2luIiwidGhlbiIsInJlcyIsInNldFVzZXIiLCJ1c2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ09DLHNEQUFRLENBQUM7QUFBRUMsY0FBVSxFQUFFLEVBQWQ7QUFBa0JDLFlBQVEsRUFBRTtBQUE1QixHQUFELENBRGY7QUFBQSxNQUNiQyxJQURhO0FBQUEsTUFDUEMsVUFETzs7QUFBQSxtQkFFVUosc0RBQVEsQ0FBQyxLQUFELENBRmxCO0FBQUEsTUFFYkssT0FGYTtBQUFBLE1BRUpDLFVBRkk7O0FBQUEsbUJBR01OLHNEQUFRLENBQUMsS0FBRCxDQUhkO0FBQUEsTUFHYk8sS0FIYTtBQUFBLE1BR05DLFFBSE07O0FBSXBCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7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Q0FELGtCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0QsT0FUSDtBQVVELEtBZkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWlCR0QsT0FBTyxHQUFHLGFBQUgsR0FBbUIsUUFqQjdCLENBTkYsQ0FuQkYsQ0FERixDQWZGLENBSkYsQ0FERixDQURGLENBREY7QUFBQTtBQUFBO0FBQUEsZ3VPQURGO0FBNEdEOztHQTdIUVAsSztVQUlRWSxxRDs7O0tBSlJaLEs7QUErSE1BLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLjdkZjk1YWE4OTIzOWUyYTg0ODFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAvcGFnZXMvbG9naW4uanMgKi9cblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHtcbiAgQ29udGFpbmVyLFxuICBSb3csXG4gIENvbCxcbiAgQnV0dG9uLFxuICBGb3JtLFxuICBGb3JtR3JvdXAsXG4gIExhYmVsLFxuICBJbnB1dCxcbn0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCB7IGxvZ2luIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvYXV0aFwiO1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29udGV4dFwiO1xuXG5mdW5jdGlvbiBMb2dpbihwcm9wcykge1xuICBjb25zdCBbZGF0YSwgdXBkYXRlRGF0YV0gPSB1c2VTdGF0ZSh7IGlkZW50aWZpZXI6IFwiXCIsIHBhc3N3b3JkOiBcIlwiIH0pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgYXBwQ29udGV4dCA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYXBwQ29udGV4dC5pc0F1dGhlbnRpY2F0ZWQpIHtcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTsgLy8gcmVkaXJlY3QgaWYgeW91J3JlIGFscmVhZHkgbG9nZ2VkIGluXG4gICAgfVxuICB9LCBbXSk7XG5cbiAgZnVuY3Rpb24gb25DaGFuZ2UoZXZlbnQpIHtcbiAgICB1cGRhdGVEYXRhKHsgLi4uZGF0YSwgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFJvdz5cbiAgICAgICAgPENvbCBzbT1cIjEyXCIgbWQ9e3sgc2l6ZTogNSwgb2Zmc2V0OiAzIH19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFwZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwicHVibGljL2Zvb2QuanBnXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICAgICAgICB7T2JqZWN0LmVudHJpZXMoZXJyb3IpLmxlbmd0aCAhPT0gMCAmJlxuICAgICAgICAgICAgICAgIGVycm9yLmNvbnN0cnVjdG9yID09PSBPYmplY3QgJiZcbiAgICAgICAgICAgICAgICBlcnJvci5tZXNzYWdlLm1hcCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Vycm9yLm1lc3NhZ2VzWzBdLmlkfVxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvci5tZXNzYWdlc1swXS5tZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPEZvcm0+XG4gICAgICAgICAgICAgICAgPGZpZWxkc2V0IGRpc2FibGVkPXtsb2FkaW5nfT5cbiAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbD5FbWFpbDo8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBvbkNoYW5nZShldmVudCl9XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImlkZW50aWZpZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogNTAsIGZvbnRTaXplOiBcIjEuMmVtXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDMwIH19PlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWw+UGFzc3dvcmQ6PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gb25DaGFuZ2UoZXZlbnQpfVxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDUwLCBmb250U2l6ZTogXCIxLjJlbVwiIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cblxuICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPkZvcmdvdCBQYXNzd29yZD88L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZmxvYXQ6IFwicmlnaHRcIiwgd2lkdGg6IDEyMCB9fVxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luKGRhdGEuaWRlbnRpZmllciwgZGF0YS5wYXNzd29yZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldCBhdXRoZWQgVXNlciBpbiBnbG9iYWwgY29udGV4dCB0byB1cGRhdGUgaGVhZGVyL2FwcCBzdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcENvbnRleHQuc2V0VXNlcihyZXMuZGF0YS51c2VyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc2V0RXJyb3IoZXJyb3IucmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7bG9hZGluZyA/IFwiTG9hZGluZy4uLiBcIiA6IFwiU3VibWl0XCJ9XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAucGFwZXIge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAgICAgICAgICAgMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgICAgIDBweCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDkwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ub3RpZmljYXRpb24ge1xuICAgICAgICAgICAgY29sb3I6ICNhYjAwM2M7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzLXRvcDogNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDMwcHggMjBweCAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6IGJsdWUgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIG1hcmdpbjogMTVweCAzMHB4IDEwcHggNTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=