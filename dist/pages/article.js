'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _header = require('./../components/header.js');

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$props = { "header": { "xmlns:v-bind": "", "v-bind:single.once": "article" } }, _this.$events = {}, _this.components = {
      header: _header2.default
    }, _this.config = {
      navigationBarTitleText: '文章'
    }, _this.data = {
      article: {
        imgUrl: '../assets/images/company.png',
        title: 'hello'
      },
      img: '../assets/images/company.png',
      markers: [{
        latitude: '23.1615800000',
        longitude: '113.4330300000',
        iconPath: '/assets/images/jz-active.png',
        height: 30,
        width: 30
      }]
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee(res) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(res);

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad(_x) {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage(res) {
      if (res.from === 'button') {
        // 来自页面内转发按钮
        console.log(res.target);
      }
      return {
        title: '极最科技',
        path: '/pages/index',
        success: function success(res) {
          // 转发成功
        },
        fail: function fail(res) {
          // 转发失败
        }
      };
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/article'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGUuanMiXSwibmFtZXMiOlsiSW5kZXgiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImhlYWRlciIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiYXJ0aWNsZSIsImltZ1VybCIsInRpdGxlIiwiaW1nIiwibWFya2VycyIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiaWNvblBhdGgiLCJoZWlnaHQiLCJ3aWR0aCIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJmcm9tIiwidGFyZ2V0IiwicGF0aCIsInN1Y2Nlc3MiLCJmYWlsIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNwQkMsTSxHQUFTLEVBQUMsVUFBUyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHNCQUFxQixTQUF4QyxFQUFWLEUsUUFDWkMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDO0FBRFEsSyxRQUdWQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLGVBQVM7QUFDUEMsZ0JBQVEsOEJBREQ7QUFFUEMsZUFBTztBQUZBLE9BREo7QUFLTEMsV0FBSyw4QkFMQTtBQU1MQyxlQUFTLENBQUM7QUFDUkMsa0JBQVUsZUFERjtBQUVSQyxtQkFBVyxnQkFGSDtBQUdSQyxrQkFBVSw4QkFIRjtBQUlSQyxnQkFBUSxFQUpBO0FBS1JDLGVBQU87QUFMQyxPQUFEO0FBTkosSzs7Ozs7OzZFQWNNQyxHOzs7OztBQUNYQyx3QkFBUUMsR0FBUixDQUFZRixHQUFaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBRWdCQSxHLEVBQUs7QUFDckIsVUFBSUEsSUFBSUcsSUFBSixLQUFhLFFBQWpCLEVBQTJCO0FBQzNCO0FBQ0VGLGdCQUFRQyxHQUFSLENBQVlGLElBQUlJLE1BQWhCO0FBQ0Q7QUFDRCxhQUFPO0FBQ0xaLGVBQU8sTUFERjtBQUVMYSxjQUFNLGNBRkQ7QUFHTEMsaUJBQVMsaUJBQVNOLEdBQVQsRUFBYztBQUNyQjtBQUNELFNBTEk7QUFNTE8sY0FBTSxjQUFTUCxHQUFULEVBQWM7QUFDbEI7QUFDRDtBQVJJLE9BQVA7QUFVRDs7OztFQTFDZ0MsZUFBS1EsSTs7a0JBQW5CMUIsSyIsImZpbGUiOiJhcnRpY2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICRwcm9wcyA9IHtcImhlYWRlclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6c2luZ2xlLm9uY2VcIjpcImFydGljbGVcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgaGVhZGVyOiBIZWFkZXJcbiAgICB9XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aWh+eroCdcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgYXJ0aWNsZToge1xuICAgICAgICBpbWdVcmw6ICcuLi9hc3NldHMvaW1hZ2VzL2NvbXBhbnkucG5nJyxcbiAgICAgICAgdGl0bGU6ICdoZWxsbydcbiAgICAgIH0sXG4gICAgICBpbWc6ICcuLi9hc3NldHMvaW1hZ2VzL2NvbXBhbnkucG5nJyxcbiAgICAgIG1hcmtlcnM6IFt7XG4gICAgICAgIGxhdGl0dWRlOiAnMjMuMTYxNTgwMDAwMCcsXG4gICAgICAgIGxvbmdpdHVkZTogJzExMy40MzMwMzAwMDAwJyxcbiAgICAgICAgaWNvblBhdGg6ICcvYXNzZXRzL2ltYWdlcy9qei1hY3RpdmUucG5nJyxcbiAgICAgICAgaGVpZ2h0OiAzMCxcbiAgICAgICAgd2lkdGg6IDMwXG4gICAgICB9XVxuICAgIH1cbiAgICBhc3luYyBvbkxvYWQocmVzKSB7XG4gICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgfVxuICAgIG9uU2hhcmVBcHBNZXNzYWdlKHJlcykge1xuICAgICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xuICAgICAgLy8g5p2l6Ieq6aG16Z2i5YaF6L2s5Y+R5oyJ6ZKuXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy50YXJnZXQpXG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZTogJ+aegeacgOenkeaKgCcsXG4gICAgICAgIHBhdGg6ICcvcGFnZXMvaW5kZXgnLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAvLyDovazlj5HmiJDlip9cbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgLy8g6L2s5Y+R5aSx6LSlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==