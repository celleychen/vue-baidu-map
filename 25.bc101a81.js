webpackJsonp([25],{"L4/q":function(t,s,a){t.exports=a("R0mU")},R0mU:function(t,s,a){var v=a("VU/8")(a("aeqt"),a("g4Gh"),null,null);t.exports=v.exports},aeqt:function(t,s,a){var v,_,e;!function(a,n){_=[t,s],v=n,void 0!==(e="function"==typeof v?v.apply(s,_):v)&&(t.exports=e)}(0,function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{policy:""}},methods:{leastDistance:function(){this.policy="BMAP_DRIVING_POLICY_LEAST_DISTANCE"},leastTime:function(){this.policy="BMAP_DRIVING_POLICY_LEAST_TIME"}}},t.exports=s.default})},g4Gh:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[[a("h1",[t._v("Driving Route Search")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Instance Properties")]),t._v(" "),t._m(1),t._v(" "),a("h2",[t._v("Events")]),t._v(" "),t._m(2),t._v(" "),a("h2",[t._v("Examples")]),t._v(" "),a("h3",[t._v("Search driving route with three waypoints")]),t._v(" "),a("h4",[t._v("Code")]),t._v(" "),t._m(3),t._v(" "),a("h4",[t._v("Preview")]),t._v(" "),a("doc-preview",[a("baidu-map",[a("bm-view",{staticClass:"map"}),t._v(" "),a("bm-driving",{attrs:{start:"新街口",end:"新街口",startCity:"北京",endCity:"南京","auto-viewport":!0,waypoints:["呼和浩特",{lng:112.53,lat:37.87},"陕西兵马俑"]}})],1)],1),t._v(" "),a("h3",[t._v("Search driving route with different policies")]),t._v(" "),a("h4",[t._v("Code")]),t._v(" "),t._m(4),t._v(" "),a("h4",[t._v("Preview")]),t._v(" "),a("doc-preview",[a("div",{staticClass:"toolbar"},[a("md-button",{staticClass:"md-raised md-primary",on:{click:t.leastDistance}},[t._v("\n    Least Distance\n  ")]),t._v(" "),a("md-button",{staticClass:"md-raised md-primary",on:{click:t.leastTime}},[t._v("\n    Least Time\n  ")])],1),t._v(" "),a("baidu-map",[a("bm-view",{staticClass:"map"}),t._v(" "),a("bm-driving",{attrs:{panel:!1,start:"天通苑北",end:"宋家庄地铁站","auto-viewport":!0,location:"北京",policy:t.policy,waypoints:["西二旗"]}})],1)],1)]],2)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("code",[t._v("BmDriving")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",[t._v("type")]),t._v(" "),a("th",[t._v("default")]),t._v(" "),a("th",[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("location")]),t._v(" "),a("td",[t._v("String, Point, None")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Search area. The type can be empty, coordinate point or city name.")])]),t._v(" "),a("tr",[a("td",[t._v("start")]),t._v(" "),a("td",[t._v("String, Point, LocalResultPoi")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("The starting point, the type can be a keyword, a coordinate point (supported by version 1.1), or a LocalSearchPoi instance.")])]),t._v(" "),a("tr",[a("td",[t._v("end")]),t._v(" "),a("td",[t._v("String, Point, LocalResultPoi")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("The end point, the type can be a keyword, a coordinate point (supported by version 1.1), or a LocalSearchPoi instance.")])]),t._v(" "),a("tr",[a("td",[t._v("startCity")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("The starting city, can be city name or city code.")])]),t._v(" "),a("tr",[a("td",[t._v("endCity")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("The end city can be city name or city code.")])]),t._v(" "),a("tr",[a("td",[t._v("waypoints")]),t._v(" "),a("td",[t._v("Array")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("The set of the through points. Support up to 10 points or names.")])]),t._v(" "),a("tr",[a("td",[t._v("policy")]),t._v(" "),a("td",[t._v("TransitPolicy")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Policy parameters for driving route.")])]),t._v(" "),a("tr",[a("td",[t._v("panel")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("Whether to show the result panel.")])]),t._v(" "),a("tr",[a("td",[t._v("autoViewport")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Whether to adjust the viewport after search.")])]),t._v(" "),a("tr",[a("td",[t._v("selectFirstResult")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Whether to select the first search result.")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",[t._v("parameter")]),t._v(" "),a("th",[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("markersset")]),t._v(" "),a("td",[t._v("{pois: Array}")]),t._v(" "),a("td",[t._v("Triggers when markers are set.")])]),t._v(" "),a("tr",[a("td",[t._v("infohtmlset")]),t._v(" "),a("td",[t._v("{poi: LocalResultPoi}")]),t._v(" "),a("td",[t._v("Triggers when info windows are set.")])]),t._v(" "),a("tr",[a("td",[t._v("resultshtmlset")]),t._v(" "),a("td",[t._v("{container: HTMLElement}")]),t._v(" "),a("td",[t._v("Triggers when the result panel is set.")])]),t._v(" "),a("tr",[a("td",[t._v("searchcomplete")]),t._v(" "),a("td",[t._v("{results: [LocalResult]}")]),t._v(" "),a("td",[t._v("Triggers when the search is completed.")])]),t._v(" "),a("tr",[a("td",[t._v("polylinesset")]),t._v(" "),a("td",[t._v("{routes: Array, routes: Array}")]),t._v(" "),a("td",[t._v("Triggers when the polyline is set.")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("bm-view")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"map"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("bm-view")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("bm-driving")]),t._v("\n      "),a("span",{staticClass:"hljs-attr"},[t._v("start")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"新街口"')]),t._v("\n      "),a("span",{staticClass:"hljs-attr"},[t._v("end")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"新街口"')]),t._v("\n      "),a("span",{staticClass:"hljs-attr"},[t._v("startCity")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"北京"')]),t._v("\n      "),a("span",{staticClass:"hljs-attr"},[t._v("endCity")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"南京"')]),t._v("\n      "),a("span",{staticClass:"hljs-attr"},[t._v(":auto-viewport")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"true"')]),t._v("\n      "),a("span",{staticClass:"hljs-attr"},[t._v(":waypoints")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v("\"['呼和浩特', {lng: 112.53, lat: 37.87}, '陕西兵马俑']\"")]),t._v(">")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("bm-driving")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("bm-view")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"map"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("bm-view")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("bm-driving")]),t._v("\n      "),a("span",{staticClass:"hljs-attr"},[t._v("start")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"天通苑北"')]),t._v("\n      "),a("span",{staticClass:"hljs-attr"},[t._v("end")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"宋家庄地铁站"')]),t._v("\n      "),a("span",{staticClass:"hljs-attr"},[t._v(":auto-viewport")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"true"')]),t._v("\n      "),a("span",{staticClass:"hljs-attr"},[t._v("policy")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"BMAP_DRIVING_POLICY_LEAST_DISTANCE"')]),t._v("\n      "),a("span",{staticClass:"hljs-attr"},[t._v(":panel")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"false"')]),t._v("\n      "),a("span",{staticClass:"hljs-attr"},[t._v("location")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"北京"')]),t._v("\n      "),a("span",{staticClass:"hljs-attr"},[t._v(":waypoints")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v("\"['西二旗']\"")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("bm-driving")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n")])])}]}}});