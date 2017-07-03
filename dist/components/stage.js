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

var Counter = function (_wepy$component) {
  _inherits(Counter, _wepy$component);

  function Counter() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Counter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Counter.__proto__ || Object.getPrototypeOf(Counter)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      num: {
        type: [Number, String],
        coerce: function coerce(v) {
          return +v;
        },
        default: 50
      }
    }, _this.methods = {
      current: function current(i) {
        console.log(i);
      }
    }, _this.data = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Counter;
}(_wepy2.default.component);

exports.default = Counter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YWdlLmpzIl0sIm5hbWVzIjpbIkNvdW50ZXIiLCJwcm9wcyIsIm51bSIsInR5cGUiLCJOdW1iZXIiLCJTdHJpbmciLCJjb2VyY2UiLCJ2IiwiZGVmYXVsdCIsIm1ldGhvZHMiLCJjdXJyZW50IiwiaSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsTzs7Ozs7Ozs7Ozs7Ozs7d0xBQ25CQyxLLEdBQVE7QUFDTkMsV0FBSztBQUNIQyxjQUFNLENBQUNDLE1BQUQsRUFBU0MsTUFBVCxDQURIO0FBRUhDLGdCQUFRLGdCQUFVQyxDQUFWLEVBQWE7QUFDbkIsaUJBQU8sQ0FBQ0EsQ0FBUjtBQUNELFNBSkU7QUFLSEMsaUJBQVM7QUFMTjtBQURDLEssUUFTUkMsTyxHQUFVO0FBQ1JDLGFBRFEsbUJBQ0FDLENBREEsRUFDRztBQUNUQyxnQkFBUUMsR0FBUixDQUFZRixDQUFaO0FBQ0Q7QUFITyxLLFFBS1ZHLEksR0FBTyxFOzs7O0VBZjRCLGVBQUtDLFM7O2tCQUFyQmYsTyIsImZpbGUiOiJzdGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENvdW50ZXIgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgcHJvcHMgPSB7XG4gICAgICBudW06IHtcbiAgICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgICAgY29lcmNlOiBmdW5jdGlvbiAodikge1xuICAgICAgICAgIHJldHVybiArdlxuICAgICAgICB9LFxuICAgICAgICBkZWZhdWx0OiA1MFxuICAgICAgfVxuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgICAgY3VycmVudChpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGkpXG4gICAgICB9XG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgfVxuICB9XG4iXX0=