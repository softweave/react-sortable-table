'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SortableTableRow = function (_React$Component) {
  _inherits(SortableTableRow, _React$Component);

  function SortableTableRow() {
    _classCallCheck(this, SortableTableRow);

    return _possibleConstructorReturn(this, (SortableTableRow.__proto__ || Object.getPrototypeOf(SortableTableRow)).apply(this, arguments));
  }

  _createClass(SortableTableRow, [{
    key: 'render',
    value: function render() {
      var tds = this.props.columns.map(function (item, index) {
        var value = this.props.data[item.key];
        if (item.render) {
          value = item.render(value);
        }
        return _react2.default.createElement(
          'td',
          _extends({
            key: index,
            style: item.dataStyle
          }, item.dataProps || {}),
          value
        );
      }.bind(this));

      return _react2.default.createElement(
        'tr',
        null,
        tds
      );
    }
  }]);

  return SortableTableRow;
}(_react2.default.Component);

var SortableTableBody = function (_React$Component2) {
  _inherits(SortableTableBody, _React$Component2);

  function SortableTableBody() {
    _classCallCheck(this, SortableTableBody);

    return _possibleConstructorReturn(this, (SortableTableBody.__proto__ || Object.getPrototypeOf(SortableTableBody)).apply(this, arguments));
  }

  _createClass(SortableTableBody, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      var bodies = this.props.data.map(function (item, index) {
        return _react2.default.createElement(SortableTableRow, {
          key: index,
          data: item,
          columns: _this3.props.columns });
      }.bind(this));

      return _react2.default.createElement(
        'tbody',
        null,
        bodies
      );
    }
  }]);

  return SortableTableBody;
}(_react2.default.Component);

exports.default = SortableTableBody;


SortableTableBody.propTypes = {
  data: _propTypes2.default.array.isRequired,
  columns: _propTypes2.default.array.isRequired,
  sortings: _propTypes2.default.array.isRequired
};