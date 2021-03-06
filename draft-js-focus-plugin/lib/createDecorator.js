'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _unionClassNames = require('union-class-names');

var _unionClassNames2 = _interopRequireDefault(_unionClassNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Get a component's display name
var getDisplayName = function getDisplayName(WrappedComponent) {
  var component = WrappedComponent.WrappedComponent || WrappedComponent;
  return component.displayName || component.name || 'Component';
};

exports.default = function (_ref) {
  var theme = _ref.theme,
      blockKeyStore = _ref.blockKeyStore;
  return function (WrappedComponent) {
    var _class, _temp2;

    return _temp2 = _class = function (_Component) {
      _inherits(BlockFocusDecorator, _Component);

      function BlockFocusDecorator() {
        var _ref2;

        var _temp, _this, _ret;

        _classCallCheck(this, BlockFocusDecorator);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = BlockFocusDecorator.__proto__ || Object.getPrototypeOf(BlockFocusDecorator)).call.apply(_ref2, [this].concat(args))), _this), _this.onClick = function (evt) {
          evt.preventDefault();
          _this.focusBlock();
        }, _this.onMouseDown = function () {
          _this.focusBlock();
        }, _this.onRemove = function (evt) {
          evt.preventDefault();
          _this.props.blockProps.removeBlock();
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }

      _createClass(BlockFocusDecorator, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
          blockKeyStore.add(this.props.block.getKey());
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          blockKeyStore.remove(this.props.block.getKey());
        }
      }, {
        key: 'focusBlock',
        value: function focusBlock() {
          var _props$blockProps = this.props.blockProps,
              isFocused = _props$blockProps.isFocused,
              setFocusToBlock = _props$blockProps.setFocusToBlock;

          if (!isFocused) {
            setFocusToBlock();
          }
        }
      }, {
        key: 'render',
        value: function render() {
          var _props = this.props,
              blockProps = _props.blockProps,
              className = _props.className;
          var isFocused = blockProps.isFocused;

          var combinedClassName = isFocused ? (0, _unionClassNames2.default)(className, theme.focused) : (0, _unionClassNames2.default)(className, theme.unfocused);
          return _react2.default.createElement(WrappedComponent, _extends({}, this.props, {
            onClick: this.onClick,
            onMouseDown: this.onMouseDown,
            onRemove: this.onRemove,
            className: combinedClassName
          }));
        }
      }]);

      return BlockFocusDecorator;
    }(_react.Component), _class.displayName = 'BlockFocus(' + getDisplayName(WrappedComponent) + ')', _class.WrappedComponent = WrappedComponent.WrappedComponent || WrappedComponent, _temp2;
  };
};