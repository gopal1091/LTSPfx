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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import * as ReactDOM from "react-dom";
import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import { BaseApplicationCustomizer, PlaceholderContent, PlaceholderName } from '@microsoft/sp-application-base';
import * as strings from 'FestivalsApplicationCustomizerStrings';
import Lights from "./components/lights";
import Diwali from "./components/diwali";
import SantaWalking from "./components/santawalking";
var LOG_SOURCE = 'FestivalsApplicationCustomizer';
/** A Custom Action which can be run during execution of a Client Side Application */
var FestivalsApplicationCustomizer = /** @class */ (function (_super) {
    __extends(FestivalsApplicationCustomizer, _super);
    function FestivalsApplicationCustomizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FestivalsApplicationCustomizer.prototype.onInit = function () {
        Log.info(LOG_SOURCE, "Initialized ".concat(strings.Title));
        var placeholder = new PlaceholderContent();
        placeholder = this.context.placeholderProvider.tryCreateContent(PlaceholderName.Top);
        var festivalName = this.properties.festivalName;
        var element = null;
        switch (festivalName) {
            case "Christmas1":
                element = React.createElement(Lights);
                break;
            case "Diwali":
                element = React.createElement(Diwali);
                break;
            case "Christmas2":
                element = React.createElement(SantaWalking);
                break;
            default:
                throw new Error('Unknown command');
        }
        // render the react element in the top placeholder.
        ReactDOM.render(element, placeholder.domElement);
        return Promise.resolve();
    };
    __decorate([
        override
    ], FestivalsApplicationCustomizer.prototype, "onInit", null);
    return FestivalsApplicationCustomizer;
}(BaseApplicationCustomizer));
export default FestivalsApplicationCustomizer;
//# sourceMappingURL=FestivalsApplicationCustomizer.js.map