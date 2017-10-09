webpackJsonp([17],{"+UzV":function(s,a,t){var l,n,v;!function(t,_){n=[s,a],l=_,void 0!==(v="function"==typeof l?l.apply(a,n):l)&&(s.exports=v)}(0,function(s,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{location:"北京",keyword:"百度",pStart:{lng:116.294625,lat:39.961627},pEnd:{lng:116.357474,lat:39.988609},nearby:{center:{lng:116.404,lat:39.915},radius:1e3}}},computed:{bounds:function(){var s=this.pStart,a=this.pEnd;return{sw:{lng:s.lng,lat:s.lat},ne:{lng:a.lng,lat:a.lat}}},polygonPath:function(){var s=this.pStart,a=this.pEnd;return[{lng:s.lng,lat:s.lat},{lng:a.lng,lat:s.lat},{lng:a.lng,lat:a.lat},{lng:s.lng,lat:a.lat}]}}},s.exports=a.default})},"+a0A":function(s,a){s.exports={render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[[t("h1",[s._v("Local Search")]),s._v(" "),s._m(0),s._v(" "),t("h2",[s._v("Instance Properties")]),s._v(" "),s._m(1),s._v(" "),t("h2",[s._v("Events")]),s._v(" "),s._m(2),s._v(" "),t("h2",[s._v("Examples")]),s._v(" "),t("h3",[s._v("Local search by keyword in the map")]),s._v(" "),t("h4",[s._v("Code")]),s._v(" "),s._m(3),s._v(" "),t("h4",[s._v("Preview")]),s._v(" "),t("doc-preview",[t("baidu-map",[t("bm-view",{staticClass:"map"}),s._v(" "),t("md-table",[t("md-table-header",[t("md-table-head",[s._v("Keyword")]),s._v(" "),t("md-table-head",[s._v("Location")])],1),s._v(" "),t("md-table-body",[t("md-table-row",[t("md-table-cell",[t("md-input-container",[t("md-input",{model:{value:s.keyword,callback:function(a){s.keyword=a},expression:"keyword"}})],1)],1),s._v(" "),t("md-table-cell",[t("md-input-container",[t("md-input",{model:{value:s.location,callback:function(a){s.location=a},expression:"location"}})],1)],1)],1)],1)],1),s._v(" "),t("bm-local-search",{attrs:{keyword:s.keyword,"auto-viewport":!0,location:s.location}})],1)],1),s._v(" "),t("h3",[s._v("Local search in a square area")]),s._v(" "),t("h4",[s._v("Code")]),s._v(" "),s._m(4),s._v(" "),t("h4",[s._v("Preview")]),s._v(" "),t("doc-preview",[t("baidu-map",{attrs:{center:{lng:116.274625,lat:39.961627},zoom:11}},[t("bm-view",{staticClass:"map"}),s._v(" "),t("bm-local-search",{attrs:{keyword:"银行",bounds:s.bounds,"auto-viewport":!0,panel:!1}}),s._v(" "),t("bm-polygon",{attrs:{path:s.polygonPath}})],1)],1),s._v(" "),t("h3",[s._v("Local search in a circle area")]),s._v(" "),t("h4",[s._v("Code")]),s._v(" "),s._m(5),s._v(" "),t("h4",[s._v("Preview")]),s._v(" "),t("doc-preview",[t("baidu-map",{attrs:{center:{lng:116.404,lat:39.915},zoom:15}},[t("bm-view",{staticClass:"map"}),s._v(" "),t("bm-local-search",{attrs:{keyword:"餐馆",nearby:s.nearby,"auto-viewport":!0,panel:!1}}),s._v(" "),t("bm-circle",{attrs:{center:s.nearby.center,radius:s.nearby.radius}})],1)],1)]],2)},staticRenderFns:[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[t("code",[s._v("BmLocalSearch")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("name")]),s._v(" "),t("th",[s._v("type")]),s._v(" "),t("th",[s._v("default")]),s._v(" "),t("th",[s._v("description")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("location")]),s._v(" "),t("td",[s._v("String, Point, None")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("Search area. The type can be empty, coordinate point or city name.")])]),s._v(" "),t("tr",[t("td",[s._v("bounds")]),s._v(" "),t("td",[s._v("Bounds")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("Limit the search for a square area. No results if the exceeds the current location.")])]),s._v(" "),t("tr",[t("td",[s._v("nearby")]),s._v(" "),t("td",[s._v("{center: Point, radius: Number}")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("Limit the search for a circle area. No results if the exceeds the current location.")])]),s._v(" "),t("tr",[t("td",[s._v("keyword")]),s._v(" "),t("td",[s._v("String, Array")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("Keywords. Supporting up to 10 keywords when the type is array.")])]),s._v(" "),t("tr",[t("td",[s._v("forceLocal")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("Indicates whether the search scope is constrained in the current city")])]),s._v(" "),t("tr",[t("td",[s._v("customData")]),s._v(" "),t("td",[s._v("CustomData")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("Whether search on the lbs cloud.")])]),s._v(" "),t("tr",[t("td",[s._v("panel")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[s._v("true")]),s._v(" "),t("td",[s._v("Whether to show the result panel.")])]),s._v(" "),t("tr",[t("td",[s._v("pageCapacity")]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("Set the capacity per page.")])]),s._v(" "),t("tr",[t("td",[s._v("autoViewport")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("Whether to adjust the viewport after search.")])]),s._v(" "),t("tr",[t("td",[s._v("selectFirstResult")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("Whether to select the first search result.")])])])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("name")]),s._v(" "),t("th",[s._v("parameter")]),s._v(" "),t("th",[s._v("description")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("markersset")]),s._v(" "),t("td",[s._v("{pois: Array}")]),s._v(" "),t("td",[s._v("Triggers when markers are set.")])]),s._v(" "),t("tr",[t("td",[s._v("infohtmlset")]),s._v(" "),t("td",[s._v("{poi: LocalResultPoi}")]),s._v(" "),t("td",[s._v("Triggers when info windows are set.")])]),s._v(" "),t("tr",[t("td",[s._v("resultshtmlset")]),s._v(" "),t("td",[s._v("{container: HTMLElement}")]),s._v(" "),t("td",[s._v("Triggers when the result panel is set.")])]),s._v(" "),t("tr",[t("td",[s._v("searchcomplete")]),s._v(" "),t("td",[s._v("{results: [LocalResult]}")]),s._v(" "),t("td",[s._v("Triggers when the search is completed.")])])])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",[t("code",{staticClass:"language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("label")]),s._v(">")]),s._v("Keyword："),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("input")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"keyword"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("label")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("label")]),s._v(">")]),s._v("Location："),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("input")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"location"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("label")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("baidu-map")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("bm-view")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"map"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("bm-view")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("bm-local-search")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":keyword")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"keyword"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":auto-viewport")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"true"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":location")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"location"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("bm-local-search")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("baidu-map")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),t("span",{staticClass:"javascript"},[s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  data () {\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n      "),t("span",{staticClass:"hljs-attr"},[s._v("location")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'北京'")]),s._v(",\n      "),t("span",{staticClass:"hljs-attr"},[s._v("keyword")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'百度'")]),s._v("\n    }\n  }\n}\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),s._v("\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",[t("code",{staticClass:"language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("baidu-map")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("bm-view")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"map"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("bm-view")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("bm-local-search")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("keyword")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"银行"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":bounds")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"bounds"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":auto-viewport")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"true"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":panel")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"false"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("bm-local-search")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("bm-polygon")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":path")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"polygonPath"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("bm-polygon")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("baidu-map")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),t("span",{staticClass:"javascript"},[s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  data () {\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n      "),t("span",{staticClass:"hljs-attr"},[s._v("pStart")]),s._v(": {\n        "),t("span",{staticClass:"hljs-attr"},[s._v("lng")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("116.294625")]),s._v(",\n        "),t("span",{staticClass:"hljs-attr"},[s._v("lat")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("39.961627")]),s._v("\n      },\n      "),t("span",{staticClass:"hljs-attr"},[s._v("pEnd")]),s._v(": {\n        "),t("span",{staticClass:"hljs-attr"},[s._v("lng")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("116.357474")]),s._v(",\n        "),t("span",{staticClass:"hljs-attr"},[s._v("lat")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("39.988609")]),s._v("\n      }\n    }\n  },\n  "),t("span",{staticClass:"hljs-attr"},[s._v("computed")]),s._v(": {\n    bounds () {\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" {pStart, pEnd} = "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v("\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n        "),t("span",{staticClass:"hljs-attr"},[s._v("sw")]),s._v(": {"),t("span",{staticClass:"hljs-attr"},[s._v("lng")]),s._v(": pStart.lng, "),t("span",{staticClass:"hljs-attr"},[s._v("lat")]),s._v(": pStart.lat},\n        "),t("span",{staticClass:"hljs-attr"},[s._v("ne")]),s._v(":{"),t("span",{staticClass:"hljs-attr"},[s._v("lng")]),s._v(": pEnd.lng, "),t("span",{staticClass:"hljs-attr"},[s._v("lat")]),s._v(": pEnd.lat}\n      }\n    },\n    polygonPath () {\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" {pStart, pEnd} = "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v("\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" [\n        {"),t("span",{staticClass:"hljs-attr"},[s._v("lng")]),s._v(": pStart.lng, "),t("span",{staticClass:"hljs-attr"},[s._v("lat")]),s._v(": pStart.lat},\n        {"),t("span",{staticClass:"hljs-attr"},[s._v("lng")]),s._v(": pEnd.lng, "),t("span",{staticClass:"hljs-attr"},[s._v("lat")]),s._v(": pStart.lat},\n        {"),t("span",{staticClass:"hljs-attr"},[s._v("lng")]),s._v(": pEnd.lng, "),t("span",{staticClass:"hljs-attr"},[s._v("lat")]),s._v(": pEnd.lat},\n        {"),t("span",{staticClass:"hljs-attr"},[s._v("lng")]),s._v(": pStart.lng, "),t("span",{staticClass:"hljs-attr"},[s._v("lat")]),s._v(": pEnd.lat}\n      ]\n    }\n  }\n}\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",[t("code",{staticClass:"language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("baidu-map")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("bm-view")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"map"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("bm-view")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("bm-local-search")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("keyword")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"餐馆"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":nearby")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"nearby"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":auto-viewport")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"true"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":panel")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"false"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("bm-local-search")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("bm-circle")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":center")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"nearby.center"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":radius")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"nearby.radius"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("bm-circle")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("baidu-map")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),t("span",{staticClass:"javascript"},[s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  data () {\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n      "),t("span",{staticClass:"hljs-attr"},[s._v("nearby")]),s._v(": {\n        "),t("span",{staticClass:"hljs-attr"},[s._v("center")]),s._v(": {\n          "),t("span",{staticClass:"hljs-attr"},[s._v("lng")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("116.404")]),s._v(", \n          "),t("span",{staticClass:"hljs-attr"},[s._v("lat")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("39.915")]),s._v("\n        },\n        "),t("span",{staticClass:"hljs-attr"},[s._v("radius")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("1000")]),s._v("\n      }\n    }\n  }\n}\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])}]}},N5f1:function(s,a,t){s.exports=t("v4Vl")},v4Vl:function(s,a,t){var l=t("VU/8")(t("+UzV"),t("+a0A"),null,null);s.exports=l.exports}});