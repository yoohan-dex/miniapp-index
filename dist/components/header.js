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
// <image mode="aspectFill" src="{{img}}" />
//     <view wx:if="{{text === true}}}" class="title">
//       <text>极最科技</text>
//       <view>
//         <text class="sub-title">把你的想法雕琢成真</text>
//       </view>
//     </view>


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
      text: {
        type: Boolean,
        default: true
      },
      single: {
        type: Object,
        default: {
          imgUrl: '',
          title: ''
        }
      },
      list: {
        type: Array,
        default: []
      }
    }, _this.data = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Counter;
}(_wepy2.default.component);

exports.default = Counter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5qcyJdLCJuYW1lcyI6WyJDb3VudGVyIiwicHJvcHMiLCJ0ZXh0IiwidHlwZSIsIkJvb2xlYW4iLCJkZWZhdWx0Iiwic2luZ2xlIiwiT2JqZWN0IiwiaW1nVXJsIiwidGl0bGUiLCJsaXN0IiwiQXJyYXkiLCJkYXRhIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBUUU7Ozs7Ozs7Ozs7O0FBUEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztJQUd1QkEsTzs7Ozs7Ozs7Ozs7Ozs7d0xBQ25CQyxLLEdBQVE7QUFDTkMsWUFBTTtBQUNKQyxjQUFNQyxPQURGO0FBRUpDLGlCQUFTO0FBRkwsT0FEQTtBQUtOQyxjQUFRO0FBQ05ILGNBQU1JLE1BREE7QUFFTkYsaUJBQVM7QUFDUEcsa0JBQVEsRUFERDtBQUVQQyxpQkFBTztBQUZBO0FBRkgsT0FMRjtBQVlOQyxZQUFNO0FBQ0pQLGNBQU1RLEtBREY7QUFFSk4saUJBQVM7QUFGTDtBQVpBLEssUUFrQlJPLEksR0FBTyxFOzs7O0VBbkI0QixlQUFLQyxTOztrQkFBckJiLE8iLCJmaWxlIjoiaGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyA8aW1hZ2UgbW9kZT1cImFzcGVjdEZpbGxcIiBzcmM9XCJ7e2ltZ319XCIgLz5cbi8vICAgICA8dmlldyB3eDppZj1cInt7dGV4dCA9PT0gdHJ1ZX19fVwiIGNsYXNzPVwidGl0bGVcIj5cbi8vICAgICAgIDx0ZXh0PuaegeacgOenkeaKgDwvdGV4dD5cbi8vICAgICAgIDx2aWV3PlxuLy8gICAgICAgICA8dGV4dCBjbGFzcz1cInN1Yi10aXRsZVwiPuaKiuS9oOeahOaDs+azlembleeQouaIkOecnzwvdGV4dD5cbi8vICAgICAgIDwvdmlldz5cbi8vICAgICA8L3ZpZXc+XG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ291bnRlciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBwcm9wcyA9IHtcbiAgICAgIHRleHQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHNpbmdsZToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICBpbWdVcmw6ICcnLFxuICAgICAgICAgIHRpdGxlOiAnJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbGlzdDoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgZGVmYXVsdDogW11cbiAgICAgIH1cbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgIH1cbiAgfVxuIl19