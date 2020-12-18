"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _package = _interopRequireDefault(require("../package.json"));

var _history = _interopRequireDefault(require("./routes/history.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.set('pkg', _package["default"]);
app.use((0, _morgan["default"])('dev'));
app.get('/', function (req, res) {
  res.json({
    autor: app.get('pkg').author
  });
});
app.use('/histori', _history["default"]);
var _default = app;
exports["default"] = _default;