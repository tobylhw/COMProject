"use strict";
/* CMD
 cd C:\Users\tobyl\compj
npm install @types/react typescript
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material @fontsource/roboto
*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
//font
require("@fontsource/roboto/300.css");
require("@fontsource/roboto/400.css");
require("@fontsource/roboto/500.css");
require("@fontsource/roboto/700.css");
//import Button from '@mui/material/Button';
//Elevate App Bar
var styles_1 = require("@mui/material/styles");
var AppBar_1 = require("@mui/material/AppBar");
var Toolbar_1 = require("@mui/material/Toolbar");
var Typography_1 = require("@mui/material/Typography");
var CssBaseline_1 = require("@mui/material/CssBaseline");
var drawerWidth = 240;
var AppBar = styles_1.styled(AppBar_1.default, {
    shouldForwardProp: function (prop) { return prop !== 'open'; },
})(function (_a) {
    var theme = _a.theme, open = _a.open;
    return (__assign({ zIndex: theme.zIndex.drawer + 1, transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }) }, (open && {
        marginLeft: drawerWidth,
        width: "calc(100% - " + drawerWidth + "px)",
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    })));
});
function Home() {
    return (React.createElement("div", null,
        React.createElement(React.Fragment, null,
            React.createElement(CssBaseline_1.default, null),
            React.createElement(AppBar, null,
                React.createElement(Toolbar_1.default, null,
                    React.createElement(Typography_1.default, { variant: "h6", component: "div" }, "Scroll to Elevate App Bar"))),
            React.createElement(Toolbar_1.default, null),
            "abc")));
}
exports.default = Home;
//# sourceMappingURL=index.js.map