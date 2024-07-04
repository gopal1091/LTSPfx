var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from "react";
import styles from "./festivals.module.scss";
var SantaWalking = /** @class */ (function (_super) {
    __extends(SantaWalking, _super);
    function SantaWalking() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SantaWalking.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("div", { className: styles.clouds }),
            React.createElement("div", { className: styles.ground },
                React.createElement("div", { className: styles.santa }),
                React.createElement("div", { className: styles.treebackground }),
                React.createElement("div", { className: styles.tree }),
                React.createElement("div", { className: "".concat(styles.tree, " ").concat(styles.treelarge) }),
                React.createElement("div", { className: styles.tree }),
                React.createElement("div", { className: styles.tree }),
                React.createElement("div", { className: styles.tree }))));
    };
    return SantaWalking;
}(React.Component));
export default SantaWalking;
//# sourceMappingURL=santawalking.js.map