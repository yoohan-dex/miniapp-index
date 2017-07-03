'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2, _initialiseProps;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _header = require('./../components/header.js');

var _header2 = _interopRequireDefault(_header);

var _stage = require('./../components/stage.js');

var _stage2 = _interopRequireDefault(_stage);

var _category = require('./../components/category.js');

var _category2 = _interopRequireDefault(_category);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// <view class="userinfo" bindtap="handleViewTap">
//   <image class="userinfo-avatar" src="{{ userInfo.avatarUrl }}" background-size="cover"/>
//   <view class="userinfo-nickname">{{ userInfo.nickName }}</view>
// </view>
var Index = (_temp2 = _class = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
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
  }, {
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var self;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                self = this;
                _context.next = 3;
                return _wepy2.default.login();

              case 3:
                this.$parent.getUserInfo(function (userInfo) {
                  if (userInfo) {
                    self.userInfo = userInfo;
                  }

                  self.normalTitle = 'ha?';

                  self.setTimeoutTitle = 'aaa';
                  setTimeout(function () {
                    self.setTimeoutTitle = 'lll';
                    self.$apply();
                  }, 3000);

                  self.$apply();
                });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad() {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return Index;
}(_wepy2.default.page), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.components = {
    header: _header2.default,
    stage: _stage2.default,
    category: _category2.default
  };
  this.config = {
    navigationBarTitleText: '极最科技'
  };
  this.data = {
    userInfo: {
      nickName: '加载中...'
    }
  };
  this.computed = {
    now: function now() {
      return +new Date();
    }
  };
  this.events = {
    'index-emit': function indexEmit() {
      var _ref3;

      var $event = (_ref3 = arguments.length - 1, arguments.length <= _ref3 ? undefined : arguments[_ref3]);
      console.log(_this2.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
    }
  };
}, _temp2);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwicmVzIiwiZnJvbSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ0aXRsZSIsInBhdGgiLCJzdWNjZXNzIiwiZmFpbCIsInNlbGYiLCJsb2dpbiIsIiRwYXJlbnQiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwibm9ybWFsVGl0bGUiLCJzZXRUaW1lb3V0VGl0bGUiLCJzZXRUaW1lb3V0IiwiJGFwcGx5IiwicGFnZSIsImNvbXBvbmVudHMiLCJoZWFkZXIiLCJzdGFnZSIsImNhdGVnb3J5IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJuaWNrTmFtZSIsImNvbXB1dGVkIiwibm93IiwiRGF0ZSIsImV2ZW50cyIsIiRldmVudCIsImxlbmd0aCIsIiRuYW1lIiwibmFtZSIsInNvdXJjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0E0QkRDLEcsRUFBSztBQUNyQixVQUFJQSxJQUFJQyxJQUFKLEtBQWEsUUFBakIsRUFBMkI7QUFDM0I7QUFDRUMsZ0JBQVFDLEdBQVIsQ0FBWUgsSUFBSUksTUFBaEI7QUFDRDtBQUNELGFBQU87QUFDTEMsZUFBTyxNQURGO0FBRUxDLGNBQU0sY0FGRDtBQUdMQyxpQkFBUyxpQkFBU1AsR0FBVCxFQUFjO0FBQ3JCO0FBQ0QsU0FMSTtBQU1MUSxjQUFNLGNBQVNSLEdBQVQsRUFBYztBQUNsQjtBQUNEO0FBUkksT0FBUDtBQVVEOzs7Ozs7Ozs7O0FBRUtTLG9CLEdBQU8sSTs7dUJBQ0wsZUFBS0MsS0FBTCxFOzs7QUFDTixxQkFBS0MsT0FBTCxDQUFhQyxXQUFiLENBQXlCLG9CQUFZO0FBQ25DLHNCQUFJQyxRQUFKLEVBQWM7QUFDWkoseUJBQUtJLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0Q7O0FBRURKLHVCQUFLSyxXQUFMLEdBQW1CLEtBQW5COztBQUVBTCx1QkFBS00sZUFBTCxHQUF1QixLQUF2QjtBQUNBQyw2QkFBVyxZQUFNO0FBQ2ZQLHlCQUFLTSxlQUFMLEdBQXVCLEtBQXZCO0FBQ0FOLHlCQUFLUSxNQUFMO0FBQ0QsbUJBSEQsRUFHRyxJQUhIOztBQUtBUix1QkFBS1EsTUFBTDtBQUNELGlCQWREOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBL0MrQixlQUFLQyxJOzs7T0FDdENDLFUsR0FBYTtBQUNYQyw0QkFEVztBQUVYQywwQkFGVztBQUdYQztBQUhXLEc7T0FLYkMsTSxHQUFTO0FBQ1BDLDRCQUF3QjtBQURqQixHO09BSVRDLEksR0FBTztBQUNMWixjQUFVO0FBQ1JhLGdCQUFVO0FBREY7QUFETCxHO09BTVBDLFEsR0FBVztBQUNUQyxPQURTLGlCQUNGO0FBQ0wsYUFBTyxDQUFDLElBQUlDLElBQUosRUFBUjtBQUNEO0FBSFEsRztPQU1YQyxNLEdBQVM7QUFDUCxrQkFBYyxxQkFBYTtBQUFBOztBQUN6QixVQUFJQyxrQkFBYyxVQUFLQyxNQUFMLEdBQWMsQ0FBNUIsMkRBQUo7QUFDQTlCLGNBQVFDLEdBQVIsQ0FBZSxPQUFLOEIsS0FBcEIsaUJBQXFDRixPQUFPRyxJQUE1QyxjQUF5REgsT0FBT0ksTUFBUCxDQUFjRixLQUF2RTtBQUNEO0FBSk0sRzs7a0JBdEJVbEMsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcidcbiAgaW1wb3J0IFN0YWdlIGZyb20gJy4uL2NvbXBvbmVudHMvc3RhZ2UnXG4gIGltcG9ydCBDYXRlZ29yeSBmcm9tICcuLi9jb21wb25lbnRzL2NhdGVnb3J5J1xuICAvLyA8dmlldyBjbGFzcz1cInVzZXJpbmZvXCIgYmluZHRhcD1cImhhbmRsZVZpZXdUYXBcIj5cbiAgLy8gICA8aW1hZ2UgY2xhc3M9XCJ1c2VyaW5mby1hdmF0YXJcIiBzcmM9XCJ7eyB1c2VySW5mby5hdmF0YXJVcmwgfX1cIiBiYWNrZ3JvdW5kLXNpemU9XCJjb3ZlclwiLz5cbiAgLy8gICA8dmlldyBjbGFzcz1cInVzZXJpbmZvLW5pY2tuYW1lXCI+e3sgdXNlckluZm8ubmlja05hbWUgfX08L3ZpZXc+XG4gIC8vIDwvdmlldz5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgICBoZWFkZXI6IEhlYWRlcixcbiAgICAgIHN0YWdlOiBTdGFnZSxcbiAgICAgIGNhdGVnb3J5OiBDYXRlZ29yeVxuICAgIH1cbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5p6B5pyA56eR5oqAJ1xuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICB1c2VySW5mbzoge1xuICAgICAgICBuaWNrTmFtZTogJ+WKoOi9veS4rS4uLidcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIG5vdyAoKSB7XG4gICAgICAgIHJldHVybiArbmV3IERhdGUoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICAgICdpbmRleC1lbWl0JzogKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgbGV0ICRldmVudCA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXVxuICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLiRuYW1lfSByZWNlaXZlICR7JGV2ZW50Lm5hbWV9IGZyb20gJHskZXZlbnQuc291cmNlLiRuYW1lfWApXG4gICAgICB9XG4gICAgfVxuICAgIG9uU2hhcmVBcHBNZXNzYWdlKHJlcykge1xuICAgICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xuICAgICAgLy8g5p2l6Ieq6aG16Z2i5YaF6L2s5Y+R5oyJ6ZKuXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy50YXJnZXQpXG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZTogJ+aegeacgOenkeaKgCcsXG4gICAgICAgIHBhdGg6ICcvcGFnZXMvaW5kZXgnLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAvLyDovazlj5HmiJDlip9cbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgLy8g6L2s5Y+R5aSx6LSlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgb25Mb2FkKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBhd2FpdCB3ZXB5LmxvZ2luKClcbiAgICAgIHRoaXMuJHBhcmVudC5nZXRVc2VySW5mbyh1c2VySW5mbyA9PiB7XG4gICAgICAgIGlmICh1c2VySW5mbykge1xuICAgICAgICAgIHNlbGYudXNlckluZm8gPSB1c2VySW5mb1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi5ub3JtYWxUaXRsZSA9ICdoYT8nXG5cbiAgICAgICAgc2VsZi5zZXRUaW1lb3V0VGl0bGUgPSAnYWFhJ1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBzZWxmLnNldFRpbWVvdXRUaXRsZSA9ICdsbGwnXG4gICAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgICB9LCAzMDAwKVxuXG4gICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgIH0pXG4gICAgfVxuICB9XG4iXX0=