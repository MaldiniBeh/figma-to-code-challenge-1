import GlobalData from "./data.js";
import Component from "./component.js";

(function ($) {
    const components = Component
    const data = GlobalData
    $("#collections").append(components.collectionsBtn(data.collectionsBtn));
    $("#menu").html(components.menu(data.menu));
    $("#mobile-menu").prepend(components.menu(data.menu));
    $("#cards").html(components.card(data.categories));
    $("#wallet").html(components.wallet(data.wallets));
    $("#menu-toggle").click((()=> $("#mobile-menu").toggleClass('hidden').fadeToggle( "slow", "linear" )));
})(jQuery);