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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.components = {
      header: _header2.default
    }, _this.config = {
      navigationBarTitleText: '联系我们'
    }, _this.data = {
      img: '../assets/images/company.png',
      markers: [{
        latitude: '23.1615800000',
        longitude: '113.4330300000',
        iconPath: '/assets/images/jz-active.png',
        height: 30,
        width: 30
      }]
    }, _this.computed = {
      now: function now() {
        return +new Date();
      }
    }, _this.methods = {
      call: function call() {
        _wepy2.default.makePhoneCall({ phoneNumber: '18898579843' });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
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
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/contact'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb21wb25lbnRzIiwiaGVhZGVyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJpbWciLCJtYXJrZXJzIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJpY29uUGF0aCIsImhlaWdodCIsIndpZHRoIiwiY29tcHV0ZWQiLCJub3ciLCJEYXRlIiwibWV0aG9kcyIsImNhbGwiLCJtYWtlUGhvbmVDYWxsIiwicGhvbmVOdW1iZXIiLCJyZXMiLCJmcm9tIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInRpdGxlIiwicGF0aCIsInN1Y2Nlc3MiLCJmYWlsIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLFUsR0FBYTtBQUNYQztBQURXLEssUUFHYkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxXQUFLLDhCQURBO0FBRUxDLGVBQVMsQ0FBQztBQUNSQyxrQkFBVSxlQURGO0FBRVJDLG1CQUFXLGdCQUZIO0FBR1JDLGtCQUFVLDhCQUhGO0FBSVJDLGdCQUFRLEVBSkE7QUFLUkMsZUFBTztBQUxDLE9BQUQ7QUFGSixLLFFBV1BDLFEsR0FBVztBQUNUQyxTQURTLGlCQUNGO0FBQ0wsZUFBTyxDQUFDLElBQUlDLElBQUosRUFBUjtBQUNEO0FBSFEsSyxRQUtYQyxPLEdBQVU7QUFDUkMsVUFEUSxrQkFDRDtBQUNMLHVCQUFLQyxhQUFMLENBQW1CLEVBQUNDLGFBQWEsYUFBZCxFQUFuQjtBQUNEO0FBSE8sSzs7Ozs7c0NBS1FDLEcsRUFBSztBQUNyQixVQUFJQSxJQUFJQyxJQUFKLEtBQWEsUUFBakIsRUFBMkI7QUFDM0I7QUFDRUMsZ0JBQVFDLEdBQVIsQ0FBWUgsSUFBSUksTUFBaEI7QUFDRDtBQUNELGFBQU87QUFDTEMsZUFBTyxNQURGO0FBRUxDLGNBQU0sY0FGRDtBQUdMQyxpQkFBUyxpQkFBU1AsR0FBVCxFQUFjO0FBQ3JCO0FBQ0QsU0FMSTtBQU1MUSxjQUFNLGNBQVNSLEdBQVQsRUFBYztBQUNsQjtBQUNEO0FBUkksT0FBUDtBQVVEOzs7O0VBNUNnQyxlQUFLUyxJOztrQkFBbkI3QixLIiwiZmlsZSI6ImNvbnRhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcidcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgICBoZWFkZXI6IEhlYWRlclxuICAgIH1cbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6IGU57O75oiR5LusJ1xuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBpbWc6ICcuLi9hc3NldHMvaW1hZ2VzL2NvbXBhbnkucG5nJyxcbiAgICAgIG1hcmtlcnM6IFt7XG4gICAgICAgIGxhdGl0dWRlOiAnMjMuMTYxNTgwMDAwMCcsXG4gICAgICAgIGxvbmdpdHVkZTogJzExMy40MzMwMzAwMDAwJyxcbiAgICAgICAgaWNvblBhdGg6ICcvYXNzZXRzL2ltYWdlcy9qei1hY3RpdmUucG5nJyxcbiAgICAgICAgaGVpZ2h0OiAzMCxcbiAgICAgICAgd2lkdGg6IDMwXG4gICAgICB9XVxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgbm93ICgpIHtcbiAgICAgICAgcmV0dXJuICtuZXcgRGF0ZSgpXG4gICAgICB9XG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBjYWxsKCkge1xuICAgICAgICB3ZXB5Lm1ha2VQaG9uZUNhbGwoe3Bob25lTnVtYmVyOiAnMTg4OTg1Nzk4NDMnfSlcbiAgICAgIH1cbiAgICB9XG4gICAgb25TaGFyZUFwcE1lc3NhZ2UocmVzKSB7XG4gICAgICBpZiAocmVzLmZyb20gPT09ICdidXR0b24nKSB7XG4gICAgICAvLyDmnaXoh6rpobXpnaLlhoXovazlj5HmjInpkq5cbiAgICAgICAgY29uc29sZS5sb2cocmVzLnRhcmdldClcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlOiAn5p6B5pyA56eR5oqAJyxcbiAgICAgICAgcGF0aDogJy9wYWdlcy9pbmRleCcsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIC8vIOi9rOWPkeaIkOWKn1xuICAgICAgICB9LFxuICAgICAgICBmYWlsOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAvLyDovazlj5HlpLHotKVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19