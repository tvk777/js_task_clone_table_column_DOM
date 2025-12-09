var t=function(t,e){if(t){var o=t.querySelector("".concat(e,":nth-child(2)")).cloneNode(!0),c=t.querySelector("".concat(e,":last-child"));o&&c&&c.before(o)}};t(document.querySelector("table thead tr"),"th"),document.querySelectorAll("table tbody tr").forEach(function(e){t(e,"td")}),t(document.querySelector("table tfoot tr"),"th");
//# sourceMappingURL=index.f469096f.js.map
