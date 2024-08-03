import GlobalData from "./data.js";
import Component from "./component.js";

(function ($) {
    const components = Component
    const data = GlobalData
    $("#collections").append(components.collectionsBtn(data.collectionsBtn));
})(jQuery);