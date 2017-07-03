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
    }, _this.data = {
      cans: ['iOS开发', 'android开发', '微信公众号', '微信小程序', 'PC开发', 'H5', '数据库架构', '行业化解决方案', '商城开发', '平面设计']
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Counter;
}(_wepy2.default.component);

exports.default = Counter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5LmpzIl0sIm5hbWVzIjpbIkNvdW50ZXIiLCJwcm9wcyIsIm51bSIsInR5cGUiLCJOdW1iZXIiLCJTdHJpbmciLCJjb2VyY2UiLCJ2IiwiZGVmYXVsdCIsIm1ldGhvZHMiLCJjdXJyZW50IiwiaSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiY2FucyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLE87Ozs7Ozs7Ozs7Ozs7O3dMQUNuQkMsSyxHQUFRO0FBQ05DLFdBQUs7QUFDSEMsY0FBTSxDQUFDQyxNQUFELEVBQVNDLE1BQVQsQ0FESDtBQUVIQyxnQkFBUSxnQkFBVUMsQ0FBVixFQUFhO0FBQ25CLGlCQUFPLENBQUNBLENBQVI7QUFDRCxTQUpFO0FBS0hDLGlCQUFTO0FBTE47QUFEQyxLLFFBU1JDLE8sR0FBVTtBQUNSQyxhQURRLG1CQUNBQyxDQURBLEVBQ0c7QUFDVEMsZ0JBQVFDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNEO0FBSE8sSyxRQUtWRyxJLEdBQU87QUFDTEMsWUFBTSxDQUFDLE9BQUQsRUFBVSxXQUFWLEVBQXVCLE9BQXZCLEVBQWdDLE9BQWhDLEVBQXlDLE1BQXpDLEVBQWlELElBQWpELEVBQXVELE9BQXZELEVBQWdFLFNBQWhFLEVBQTJFLE1BQTNFLEVBQW1GLE1BQW5GO0FBREQsSzs7OztFQWY0QixlQUFLQyxTOztrQkFBckJoQixPIiwiZmlsZSI6ImNhdGVnb3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ291bnRlciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBwcm9wcyA9IHtcbiAgICAgIG51bToge1xuICAgICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgICBjb2VyY2U6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgcmV0dXJuICt2XG4gICAgICAgIH0sXG4gICAgICAgIGRlZmF1bHQ6IDUwXG4gICAgICB9XG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBjdXJyZW50KGkpIHtcbiAgICAgICAgY29uc29sZS5sb2coaSlcbiAgICAgIH1cbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIGNhbnM6IFsnaU9T5byA5Y+RJywgJ2FuZHJvaWTlvIDlj5EnLCAn5b6u5L+h5YWs5LyX5Y+3JywgJ+W+ruS/oeWwj+eoi+W6jycsICdQQ+W8gOWPkScsICdINScsICfmlbDmja7lupPmnrbmnoQnLCAn6KGM5Lia5YyW6Kej5Yaz5pa55qGIJywgJ+WVhuWfjuW8gOWPkScsICflubPpnaLorr7orqEnXVxuICAgIH1cbiAgfVxuIl19