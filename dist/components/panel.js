'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Panel = function (_wepy$component) {
  _inherits(Panel, _wepy$component);

  function Panel() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Panel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Panel.__proto__ || Object.getPrototypeOf(Panel)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      items: {
        type: Array,
        default: []
      }
    }, _this.data = {
      icon60: '../assets/images/company.png'
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Panel;
}(_wepy2.default.component);

exports.default = Panel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhbmVsLmpzIl0sIm5hbWVzIjpbIlBhbmVsIiwicHJvcHMiLCJpdGVtcyIsInR5cGUiLCJBcnJheSIsImRlZmF1bHQiLCJkYXRhIiwiaWNvbjYwIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxLLEdBQVE7QUFDTkMsYUFBTztBQUNMQyxjQUFNQyxLQUREO0FBRUxDLGlCQUFTO0FBRko7QUFERCxLLFFBTVJDLEksR0FBSztBQUNIQyxjQUFRO0FBREwsSzs7OztFQVA0QixlQUFLQyxTOztrQkFBbkJSLEsiLCJmaWxlIjoicGFuZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBQYW5lbCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgIHByb3BzID0ge1xyXG4gICAgICBpdGVtczoge1xyXG4gICAgICAgIHR5cGU6IEFycmF5LFxyXG4gICAgICAgIGRlZmF1bHQ6IFtdXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGRhdGE9e1xyXG4gICAgICBpY29uNjA6ICcuLi9hc3NldHMvaW1hZ2VzL2NvbXBhbnkucG5nJ1xyXG4gICAgfVxyXG4gIH1cclxuIl19