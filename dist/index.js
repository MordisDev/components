'use strict';

var styled = require('styled-components');
var react = require('react');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var breakpoints = {
    mobile: "600px",
    horizontal: "1024px",
    desktop: "1380px",
};
var colors = {
    background: {
        main: "hsl(0, 0%, 12%)",
        box: "hsl(0, 0%, 15%)",
    },
    border: {
        default: "hsl(0, 0%, 30%)",
    },
    primary: "hsl(36, 90%, 50%)",
    text: {
        main: "hsl(0, 0%, 70%)",
        secondary: "hsl(0, 0%, 60%)",
        muted: "hsl(0, 0%, 40%)",
    },
};

var centeredProps = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
};
var Box = styled.div(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  background-color: ", ";\n\n  border-radius: 0.5rem;\n  ", "\n\n  padding: ", ";\n\n  ", "\n"], ["\n  background-color: ", ";\n\n  border-radius: 0.5rem;\n  ", "\n\n  padding: ", ";\n\n  ", "\n"])), colors.background.box, function (_a) {
    var bordered = _a.bordered;
    return bordered && "border: 1px solid hsl(36, 40%, 20%);";
}, function (_a) {
    var paddingType = _a.paddingType;
    return paddingType === "tight" ? ".25rem .5rem" : "1.25rem 1.75rem";
}, function (_a) {
    var centered = _a.centered;
    return (centered ? centeredProps : undefined);
});
var templateObject_1$3;

var Button = styled.button(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  padding: 1rem;\n\n  background-color: transparent;\n  color: hsl(", ", 45%, 48%);\n  cursor: pointer;\n\n  font-size: 1rem;\n  font-weight: 600;\n\n  border: 2px solid hsl(", ", 45%, 48%);\n  border-radius: 0.5rem;\n\n  &:hover {\n    background-color: hsl(", ", 20%, 18%);\n  }\n\n  &:active {\n    background-color: hsl(", ", 24%, 32%);\n    color: hsl(", ", 60%, 48%);\n  }\n"], ["\n  padding: 1rem;\n\n  background-color: transparent;\n  color: hsl(", ", 45%, 48%);\n  cursor: pointer;\n\n  font-size: 1rem;\n  font-weight: 600;\n\n  border: 2px solid hsl(", ", 45%, 48%);\n  border-radius: 0.5rem;\n\n  &:hover {\n    background-color: hsl(", ", 20%, 18%);\n  }\n\n  &:active {\n    background-color: hsl(", ", 24%, 32%);\n    color: hsl(", ", 60%, 48%);\n  }\n"])), function (_a) {
    var color = _a.color;
    return getHue(color);
}, function (_a) {
    var color = _a.color;
    return getHue(color);
}, function (_a) {
    var color = _a.color;
    return getHue(color);
}, function (_a) {
    var color = _a.color;
    return getHue(color);
}, function (_a) {
    var color = _a.color;
    return getHue(color);
});
var getHue = function (color) {
    switch (color) {
        case "red":
            return "0";
        case "green":
            return "120";
        case "default":
        default:
            return "36";
    }
};
var templateObject_1$2;

var Heading = function (_a) {
    var type = _a.type, children = _a.children;
    var getTag = function () {
        switch (type) {
            case "main":
                return "h1";
            case "secondary":
                return "h3";
            case "small":
                return "h5";
        }
    };
    return (/*#__PURE__*/react.createElement(StyledHeading, { type: type, as: getTag() }, "\n      ", children, "\n    "));
};
var StyledHeading = styled.div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  letter-spacing: ", ";\n  text-align: center;\n"], ["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  letter-spacing: ", ";\n  text-align: center;\n"])), colors.primary, function (_a) {
    var type = _a.type;
    return getSize(type);
}, function (_a) {
    var type = _a.type;
    return (type === "main" ? "600" : "700");
}, function (_a) {
    var type = _a.type;
    return (type === "small" ? "0.1rem" : "0.2rem");
});
var getSize = function (type) {
    switch (type) {
        case "main":
            return "3rem";
        case "secondary":
            return "2rem";
        case "small":
            return "1.25rem";
    }
};
var templateObject_1$1;

var lineHeight = {
    spacious: "1.8",
    standard: "1.6",
    compact: "1.2",
};
var fonts = {
    highlighted: {
        color: colors.primary,
        fontSize: "1.75rem",
        fontWeight: "bold",
        letterSpacing: "0.2rem",
        lineHeight: lineHeight.standard,
    },
    large: {
        color: colors.text.main,
        fontSize: "1.25rem",
        fontWeight: "bold",
        letterSpacing: "0.15rem",
        lineHeight: lineHeight.spacious,
    },
    medium: {
        color: colors.text.main,
        fontSize: "1rem",
        fontWeight: 600,
        letterSpacing: "0.15rem",
        lineHeight: lineHeight.standard,
    },
    small: {
        color: colors.text.main,
        fontSize: "0.875rem",
        letterSpacing: "0.1rem",
        lineHeight: lineHeight.standard,
    },
    muted: {
        color: colors.text.muted,
        fontSize: "0.875rem",
        letterSpacing: "0.1rem",
        lineHeight: lineHeight.compact,
    },
};
var Text = styled.p(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-family: \"Noto Sans\", sans-serif;\n  ", "\n"], ["\n  font-family: \"Noto Sans\", sans-serif;\n  ", "\n"])), function (_a) {
    var fontType = _a.fontType;
    return fonts[fontType];
});
var Highlight = styled.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n  font-size: \"1.25rem\";\n  font-weight: \"bold\";\n"], ["\n  color: ", ";\n  font-size: \"1.25rem\";\n  font-weight: \"bold\";\n"])), colors.primary);
var templateObject_1, templateObject_2;

exports.Box = Box;
exports.Button = Button;
exports.Heading = Heading;
exports.Highlight = Highlight;
exports.Text = Text;
exports.breakpoints = breakpoints;
exports.colors = colors;
