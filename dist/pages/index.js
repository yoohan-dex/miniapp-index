'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2, _initialiseProps;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import Header from '../components/header'
// import Stage from '../components/stage'
// import Panel from '../components/panel'
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
  // <header v-bind:list.once="list" />
  // <view class="news">
  //   <panel :items="list" />
  // </view>


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
    // header: Header,
    // stage: Stage,
    // panel: Panel
  };
  this.config = {
    navigationBarTitleText: '极最孵化器'
  };
  this.data = {
    list: [{
      title: '李克强总理4日考察广州极最孵化器',
      imgUrl: '../assets/images/company.png',
      desc: '李克强总理4日考察广州极最孵化器,亲切问候极最创始人林友新，双方进行了深切的会谈，进一步加深了友好的合作。',
      url: './article?id=123'
    }, {
      title: '李克强总理4日考察广州极最孵化器',
      imgUrl: '../assets/images/company.png',
      desc: '李克强总理4日考察广州极最孵化器,亲切问候极最创始人林友新，双方进行了深切的会谈，进一步加深了友好的合作。',
      url: ''
    }, {
      title: '李克强总理4日考察广州极最孵化器',
      imgUrl: '../assets/images/company.png',
      desc: '李克强总理4日考察广州极最孵化器,亲切问候极最创始人林友新，双方进行了深切的会谈，进一步加深了友好的合作。',
      url: ''
    }, {
      title: '李克强总理4日考察广州极最孵化器',
      imgUrl: '../assets/images/company.png',
      desc: '李克强总理4日考察广州极最孵化器,亲切问候极最创始人林友新，双方进行了深切的会谈，进一步加深了友好的合作。',
      url: ''
    }, {
      title: '李克强总理4日考察广州极最孵化器',
      imgUrl: '../assets/images/company.png',
      desc: '李克强总理4日考察广州极最孵化器,亲切问候极最创始人林友新，双方进行了深切的会谈，进一步加深了友好的合作。',
      url: ''
    }, {
      title: '李克强总理4日考察广州极最孵化器',
      imgUrl: '../assets/images/company.png',
      desc: '李克强总理4日考察广州极最孵化器,亲切问候极最创始人林友新，双方进行了深切的会谈，进一步加深了友好的合作。',
      url: ''
    }, {
      title: '李克强总理4日考察广州极最孵化器',
      imgUrl: '../assets/images/company.png',
      desc: '李克强总理4日考察广州极最孵化器,亲切问候极最创始人林友新，双方进行了深切的会谈，进一步加深了友好的合作。',
      url: ''
    }],
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwicmVzIiwiZnJvbSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ0aXRsZSIsInBhdGgiLCJzdWNjZXNzIiwiZmFpbCIsInNlbGYiLCJsb2dpbiIsIiRwYXJlbnQiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwibm9ybWFsVGl0bGUiLCJzZXRUaW1lb3V0VGl0bGUiLCJzZXRUaW1lb3V0IiwiJGFwcGx5IiwicGFnZSIsImNvbXBvbmVudHMiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImxpc3QiLCJpbWdVcmwiLCJkZXNjIiwidXJsIiwibmlja05hbWUiLCJjb21wdXRlZCIsIm5vdyIsIkRhdGUiLCJldmVudHMiLCIkZXZlbnQiLCJsZW5ndGgiLCIkbmFtZSIsIm5hbWUiLCJzb3VyY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRUU7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ25CO0FBQ0E7QUFDQTtBQUNBOzs7OztzQ0FrRWtCQyxHLEVBQUs7QUFDckIsVUFBSUEsSUFBSUMsSUFBSixLQUFhLFFBQWpCLEVBQTJCO0FBQzNCO0FBQ0VDLGdCQUFRQyxHQUFSLENBQVlILElBQUlJLE1BQWhCO0FBQ0Q7QUFDRCxhQUFPO0FBQ0xDLGVBQU8sTUFERjtBQUVMQyxjQUFNLGNBRkQ7QUFHTEMsaUJBQVMsaUJBQVNQLEdBQVQsRUFBYztBQUNyQjtBQUNELFNBTEk7QUFNTFEsY0FBTSxjQUFTUixHQUFULEVBQWM7QUFDbEI7QUFDRDtBQVJJLE9BQVA7QUFVRDs7Ozs7Ozs7OztBQUVLUyxvQixHQUFPLEk7O3VCQUNMLGVBQUtDLEtBQUwsRTs7O0FBQ04scUJBQUtDLE9BQUwsQ0FBYUMsV0FBYixDQUF5QixvQkFBWTtBQUNuQyxzQkFBSUMsUUFBSixFQUFjO0FBQ1pKLHlCQUFLSSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNEOztBQUVESix1QkFBS0ssV0FBTCxHQUFtQixLQUFuQjs7QUFFQUwsdUJBQUtNLGVBQUwsR0FBdUIsS0FBdkI7QUFDQUMsNkJBQVcsWUFBTTtBQUNmUCx5QkFBS00sZUFBTCxHQUF1QixLQUF2QjtBQUNBTix5QkFBS1EsTUFBTDtBQUNELG1CQUhELEVBR0csSUFISDs7QUFLQVIsdUJBQUtRLE1BQUw7QUFDRCxpQkFkRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXpGK0IsZUFBS0MsSTs7O09BS3RDQyxVLEdBQWE7QUFDWDtBQUNBO0FBQ0E7QUFIVyxHO09BS2JDLE0sR0FBUztBQUNQQyw0QkFBd0I7QUFEakIsRztPQUlUQyxJLEdBQU87QUFDTEMsVUFBTSxDQUNKO0FBQ0VsQixhQUFPLGtCQURUO0FBRUVtQixjQUFRLDhCQUZWO0FBR0VDLFlBQU0sdURBSFI7QUFJRUMsV0FBSztBQUpQLEtBREksRUFNRDtBQUNEckIsYUFBTyxrQkFETjtBQUVEbUIsY0FBUSw4QkFGUDtBQUdEQyxZQUFNLHVEQUhMO0FBSURDLFdBQUs7QUFKSixLQU5DLEVBV0Q7QUFDRHJCLGFBQU8sa0JBRE47QUFFRG1CLGNBQVEsOEJBRlA7QUFHREMsWUFBTSx1REFITDtBQUlEQyxXQUFLO0FBSkosS0FYQyxFQWdCRDtBQUNEckIsYUFBTyxrQkFETjtBQUVEbUIsY0FBUSw4QkFGUDtBQUdEQyxZQUFNLHVEQUhMO0FBSURDLFdBQUs7QUFKSixLQWhCQyxFQXFCRDtBQUNEckIsYUFBTyxrQkFETjtBQUVEbUIsY0FBUSw4QkFGUDtBQUdEQyxZQUFNLHVEQUhMO0FBSURDLFdBQUs7QUFKSixLQXJCQyxFQTBCRDtBQUNEckIsYUFBTyxrQkFETjtBQUVEbUIsY0FBUSw4QkFGUDtBQUdEQyxZQUFNLHVEQUhMO0FBSURDLFdBQUs7QUFKSixLQTFCQyxFQStCRDtBQUNEckIsYUFBTyxrQkFETjtBQUVEbUIsY0FBUSw4QkFGUDtBQUdEQyxZQUFNLHVEQUhMO0FBSURDLFdBQUs7QUFKSixLQS9CQyxDQUREO0FBdUNMYixjQUFVO0FBQ1JjLGdCQUFVO0FBREY7QUF2Q0wsRztPQTRDUEMsUSxHQUFXO0FBQ1RDLE9BRFMsaUJBQ0Y7QUFDTCxhQUFPLENBQUMsSUFBSUMsSUFBSixFQUFSO0FBQ0Q7QUFIUSxHO09BTVhDLE0sR0FBUztBQUNQLGtCQUFjLHFCQUFhO0FBQUE7O0FBQ3pCLFVBQUlDLGtCQUFjLFVBQUtDLE1BQUwsR0FBYyxDQUE1QiwyREFBSjtBQUNBL0IsY0FBUUMsR0FBUixDQUFlLE9BQUsrQixLQUFwQixpQkFBcUNGLE9BQU9HLElBQTVDLGNBQXlESCxPQUFPSSxNQUFQLENBQWNGLEtBQXZFO0FBQ0Q7QUFKTSxHOztrQkFoRVVuQyxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIFxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAvLyBpbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJ1xuICAvLyBpbXBvcnQgU3RhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9zdGFnZSdcbiAgLy8gaW1wb3J0IFBhbmVsIGZyb20gJy4uL2NvbXBvbmVudHMvcGFuZWwnXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAvLyA8aGVhZGVyIHYtYmluZDpsaXN0Lm9uY2U9XCJsaXN0XCIgLz5cbiAgICAvLyA8dmlldyBjbGFzcz1cIm5ld3NcIj5cbiAgICAvLyAgIDxwYW5lbCA6aXRlbXM9XCJsaXN0XCIgLz5cbiAgICAvLyA8L3ZpZXc+XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICAgIC8vIGhlYWRlcjogSGVhZGVyLFxuICAgICAgLy8gc3RhZ2U6IFN0YWdlLFxuICAgICAgLy8gcGFuZWw6IFBhbmVsXG4gICAgfVxuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmnoHmnIDlrbXljJblmagnXG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGxpc3Q6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAn5p2O5YWL5by65oC755CGNOaXpeiAg+Wvn+W5v+W3nuaegeacgOWtteWMluWZqCcsXG4gICAgICAgICAgaW1nVXJsOiAnLi4vYXNzZXRzL2ltYWdlcy9jb21wYW55LnBuZycsXG4gICAgICAgICAgZGVzYzogJ+adjuWFi+W8uuaAu+eQhjTml6XogIPlr5/lub/lt57mnoHmnIDlrbXljJblmags5Lqy5YiH6Zeu5YCZ5p6B5pyA5Yib5aeL5Lq65p6X5Y+L5paw77yM5Y+M5pa56L+b6KGM5LqG5rex5YiH55qE5Lya6LCI77yM6L+b5LiA5q2l5Yqg5rex5LqG5Y+L5aW955qE5ZCI5L2c44CCJyxcbiAgICAgICAgICB1cmw6ICcuL2FydGljbGU/aWQ9MTIzJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgdGl0bGU6ICfmnY7lhYvlvLrmgLvnkIY05pel6ICD5a+f5bm/5bee5p6B5pyA5a215YyW5ZmoJyxcbiAgICAgICAgICBpbWdVcmw6ICcuLi9hc3NldHMvaW1hZ2VzL2NvbXBhbnkucG5nJyxcbiAgICAgICAgICBkZXNjOiAn5p2O5YWL5by65oC755CGNOaXpeiAg+Wvn+W5v+W3nuaegeacgOWtteWMluWZqCzkurLliIfpl67lgJnmnoHmnIDliJvlp4vkurrmnpflj4vmlrDvvIzlj4zmlrnov5vooYzkuobmt7HliIfnmoTkvJrosIjvvIzov5vkuIDmraXliqDmt7Hkuoblj4vlpb3nmoTlkIjkvZzjgIInLFxuICAgICAgICAgIHVybDogJydcbiAgICAgICAgfSwge1xuICAgICAgICAgIHRpdGxlOiAn5p2O5YWL5by65oC755CGNOaXpeiAg+Wvn+W5v+W3nuaegeacgOWtteWMluWZqCcsXG4gICAgICAgICAgaW1nVXJsOiAnLi4vYXNzZXRzL2ltYWdlcy9jb21wYW55LnBuZycsXG4gICAgICAgICAgZGVzYzogJ+adjuWFi+W8uuaAu+eQhjTml6XogIPlr5/lub/lt57mnoHmnIDlrbXljJblmags5Lqy5YiH6Zeu5YCZ5p6B5pyA5Yib5aeL5Lq65p6X5Y+L5paw77yM5Y+M5pa56L+b6KGM5LqG5rex5YiH55qE5Lya6LCI77yM6L+b5LiA5q2l5Yqg5rex5LqG5Y+L5aW955qE5ZCI5L2c44CCJyxcbiAgICAgICAgICB1cmw6ICcnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICB0aXRsZTogJ+adjuWFi+W8uuaAu+eQhjTml6XogIPlr5/lub/lt57mnoHmnIDlrbXljJblmagnLFxuICAgICAgICAgIGltZ1VybDogJy4uL2Fzc2V0cy9pbWFnZXMvY29tcGFueS5wbmcnLFxuICAgICAgICAgIGRlc2M6ICfmnY7lhYvlvLrmgLvnkIY05pel6ICD5a+f5bm/5bee5p6B5pyA5a215YyW5ZmoLOS6suWIh+mXruWAmeaegeacgOWIm+Wni+S6uuael+WPi+aWsO+8jOWPjOaWuei/m+ihjOS6hua3seWIh+eahOS8muiwiO+8jOi/m+S4gOatpeWKoOa3seS6huWPi+WlveeahOWQiOS9nOOAgicsXG4gICAgICAgICAgdXJsOiAnJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgdGl0bGU6ICfmnY7lhYvlvLrmgLvnkIY05pel6ICD5a+f5bm/5bee5p6B5pyA5a215YyW5ZmoJyxcbiAgICAgICAgICBpbWdVcmw6ICcuLi9hc3NldHMvaW1hZ2VzL2NvbXBhbnkucG5nJyxcbiAgICAgICAgICBkZXNjOiAn5p2O5YWL5by65oC755CGNOaXpeiAg+Wvn+W5v+W3nuaegeacgOWtteWMluWZqCzkurLliIfpl67lgJnmnoHmnIDliJvlp4vkurrmnpflj4vmlrDvvIzlj4zmlrnov5vooYzkuobmt7HliIfnmoTkvJrosIjvvIzov5vkuIDmraXliqDmt7Hkuoblj4vlpb3nmoTlkIjkvZzjgIInLFxuICAgICAgICAgIHVybDogJydcbiAgICAgICAgfSwge1xuICAgICAgICAgIHRpdGxlOiAn5p2O5YWL5by65oC755CGNOaXpeiAg+Wvn+W5v+W3nuaegeacgOWtteWMluWZqCcsXG4gICAgICAgICAgaW1nVXJsOiAnLi4vYXNzZXRzL2ltYWdlcy9jb21wYW55LnBuZycsXG4gICAgICAgICAgZGVzYzogJ+adjuWFi+W8uuaAu+eQhjTml6XogIPlr5/lub/lt57mnoHmnIDlrbXljJblmags5Lqy5YiH6Zeu5YCZ5p6B5pyA5Yib5aeL5Lq65p6X5Y+L5paw77yM5Y+M5pa56L+b6KGM5LqG5rex5YiH55qE5Lya6LCI77yM6L+b5LiA5q2l5Yqg5rex5LqG5Y+L5aW955qE5ZCI5L2c44CCJyxcbiAgICAgICAgICB1cmw6ICcnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICB0aXRsZTogJ+adjuWFi+W8uuaAu+eQhjTml6XogIPlr5/lub/lt57mnoHmnIDlrbXljJblmagnLFxuICAgICAgICAgIGltZ1VybDogJy4uL2Fzc2V0cy9pbWFnZXMvY29tcGFueS5wbmcnLFxuICAgICAgICAgIGRlc2M6ICfmnY7lhYvlvLrmgLvnkIY05pel6ICD5a+f5bm/5bee5p6B5pyA5a215YyW5ZmoLOS6suWIh+mXruWAmeaegeacgOWIm+Wni+S6uuael+WPi+aWsO+8jOWPjOaWuei/m+ihjOS6hua3seWIh+eahOS8muiwiO+8jOi/m+S4gOatpeWKoOa3seS6huWPi+WlveeahOWQiOS9nOOAgicsXG4gICAgICAgICAgdXJsOiAnJ1xuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgdXNlckluZm86IHtcbiAgICAgICAgbmlja05hbWU6ICfliqDovb3kuK0uLi4nXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBub3cgKCkge1xuICAgICAgICByZXR1cm4gK25ldyBEYXRlKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgICAnaW5kZXgtZW1pdCc6ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGxldCAkZXZlbnQgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV1cbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy4kbmFtZX0gcmVjZWl2ZSAkeyRldmVudC5uYW1lfSBmcm9tICR7JGV2ZW50LnNvdXJjZS4kbmFtZX1gKVxuICAgICAgfVxuICAgIH1cbiAgICBvblNoYXJlQXBwTWVzc2FnZShyZXMpIHtcbiAgICAgIGlmIChyZXMuZnJvbSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgIC8vIOadpeiHqumhtemdouWGhei9rOWPkeaMiemSrlxuICAgICAgICBjb25zb2xlLmxvZyhyZXMudGFyZ2V0KVxuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGU6ICfmnoHmnIDnp5HmioAnLFxuICAgICAgICBwYXRoOiAnL3BhZ2VzL2luZGV4JyxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgLy8g6L2s5Y+R5oiQ5YqfXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIC8vIOi9rOWPkeWksei0pVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGFzeW5jIG9uTG9hZCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgYXdhaXQgd2VweS5sb2dpbigpXG4gICAgICB0aGlzLiRwYXJlbnQuZ2V0VXNlckluZm8odXNlckluZm8gPT4ge1xuICAgICAgICBpZiAodXNlckluZm8pIHtcbiAgICAgICAgICBzZWxmLnVzZXJJbmZvID0gdXNlckluZm9cbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYubm9ybWFsVGl0bGUgPSAnaGE/J1xuXG4gICAgICAgIHNlbGYuc2V0VGltZW91dFRpdGxlID0gJ2FhYSdcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2VsZi5zZXRUaW1lb3V0VGl0bGUgPSAnbGxsJ1xuICAgICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgICAgfSwgMzAwMClcblxuICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuIl19