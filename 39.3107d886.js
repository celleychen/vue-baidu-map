webpackJsonp([39],{"8LHD":function(s,a,t){var l=t("VU/8")(null,t("yb7l"),null,null);s.exports=l.exports},ncRs:function(s,a,t){s.exports=t("8LHD")},yb7l:function(s,a){s.exports={render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h1",[s._v("Usage")]),s._v(" "),t("h2",[s._v("Usage")]),s._v(" "),t("h3",[s._v("Global Registration")]),s._v(" "),s._m(0),s._v(" "),s._m(1),s._v(" "),s._m(2),s._v(" "),t("h3",[s._v("Local Registration")]),s._v(" "),s._m(3),s._v(" "),s._m(4),s._v(" "),t("h3",[s._v("CDN Registration")]),s._v(" "),s._m(5),s._v(" "),t("h2",[s._v("Q&A")]),s._v(" "),s._m(6),s._v(" "),t("h3",[s._v("Wrong Way")]),s._v(" "),s._m(7),s._v(" "),t("h3",[s._v("Right Way")]),s._v(" "),s._m(8),s._v(" "),t("h2",[s._v("Hello world!")]),s._v(" "),s._m(9),s._v(" "),t("doc-preview",[t("baidu-map",{staticClass:"map",attrs:{center:"北京"}})],1)],1)},staticRenderFns:[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[s._v("Regist all components of "),t("em",[s._v("vue-baidu-map")]),s._v(" at once.")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",[t("code",{staticClass:"language-javascript"},[t("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" Vue "),t("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),t("span",{staticClass:"hljs-string"},[s._v("'vue'")]),s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" BaiduMap "),t("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),t("span",{staticClass:"hljs-string"},[s._v("'vue-baidu-map'")]),s._v("\n\nVue.use(BaiduMap, {\n  "),t("span",{staticClass:"hljs-comment"},[s._v("/* Visit http://lbsyun.baidu.com/apiconsole/key for details about app key. */")]),s._v("\n  ak: "),t("span",{staticClass:"hljs-string"},[s._v("'YOUR_APP_KEY'")]),s._v("\n})\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",[t("code",{staticClass:"language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("baidu-map")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"bm-view"')]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("baidu-map")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),t("span",{staticClass:"css"},[s._v("\n"),t("span",{staticClass:"hljs-selector-class"},[s._v(".bm-view")]),s._v(" {\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("width")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("100%")]),s._v(";\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("height")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("300px")]),s._v(";\n}\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),s._v("\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[s._v("A locally registered "),t("code",[s._v("BaiduMap")]),s._v(" component "),t("strong",[s._v("must")]),s._v(" declare the "),t("code",[s._v("ak")]),s._v(" attribute.")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",[t("code",{staticClass:"language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("baidu-map")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"bm-view"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("ak")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"YOUR_APP_KEY"')]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("baidu-map")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),t("span",{staticClass:"javascript"},[s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" {BaiduMap} "),t("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),t("span",{staticClass:"hljs-string"},[s._v("'vue-baidu-map'")]),s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  "),t("span",{staticClass:"hljs-attr"},[s._v("components")]),s._v(": {\n    BaiduMap\n  }\n}\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),t("span",{staticClass:"css"},[s._v("\n"),t("span",{staticClass:"hljs-selector-class"},[s._v(".bm-view")]),s._v(" {\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("width")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("100%")]),s._v(";\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("height")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("300px")]),s._v(";\n}\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),s._v("\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",[t("code",{staticClass:"language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),t("span",{staticClass:"actionscript"},[s._v("\nVue.use(VueBaiduMap.default, {\n  ak: "),t("span",{staticClass:"hljs-string"},[s._v("'YOUR_APP_KEY'")]),s._v("\n})\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ul",[t("li",[t("code",[s._v("BaiduMap")]),s._v(" component is an empty block level element. If it doesn't declare its height, the map view will be invisible.")]),s._v(" "),t("li",[t("code",[s._v("BaiduMap")]),s._v(" component cannot render maps without "),t("code",[s._v("center")]),s._v(" and "),t("code",[s._v("zoom")]),s._v(". But if "),t("code",[s._v("center")]),s._v(" is a legal place name string, "),t("code",[s._v("BaiduMap")]),s._v(" will automatically adjust the value of"),t("code",[s._v("zoom")]),s._v(" according to the name.")]),s._v(" "),t("li",[s._v("If you need to update your model, just do it in the callback of the global component event "),t("code",[s._v("ready")]),s._v(".")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",[t("code",{staticClass:"language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("baidu-map")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":center")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"center"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":zoom")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"zoom"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("baidu-map")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),t("span",{staticClass:"javascript"},[s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  data () {\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n      "),t("span",{staticClass:"hljs-attr"},[s._v("center")]),s._v(": {"),t("span",{staticClass:"hljs-attr"},[s._v("lng")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(", "),t("span",{staticClass:"hljs-attr"},[s._v("lat")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("},\n      "),t("span",{staticClass:"hljs-attr"},[s._v("zoom")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("3")]),s._v("\n    }\n  },\n  mounted () {\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".lng = "),t("span",{staticClass:"hljs-number"},[s._v("116.404")]),s._v("\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".lat = "),t("span",{staticClass:"hljs-number"},[s._v("39.915")]),s._v("\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".zoom = "),t("span",{staticClass:"hljs-number"},[s._v("15")]),s._v("\n  }\n}\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",[t("code",{staticClass:"language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("baidu-map")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":center")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"center"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":zoom")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"zoom"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("@ready")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"handler"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("baidu-map")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),t("span",{staticClass:"javascript"},[s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  data () {\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n      "),t("span",{staticClass:"hljs-attr"},[s._v("center")]),s._v(": {"),t("span",{staticClass:"hljs-attr"},[s._v("lng")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(", "),t("span",{staticClass:"hljs-attr"},[s._v("lat")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("},\n      "),t("span",{staticClass:"hljs-attr"},[s._v("zoom")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("3")]),s._v("\n    }\n  },\n  "),t("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n    handler ({BMap, map}) {\n      "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(BMap, map)\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".center.lng = "),t("span",{staticClass:"hljs-number"},[s._v("116.404")]),s._v("\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".center.lat = "),t("span",{staticClass:"hljs-number"},[s._v("39.915")]),s._v("\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".zoom = "),t("span",{staticClass:"hljs-number"},[s._v("15")]),s._v("\n    }\n  }\n}\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",[t("code",{staticClass:"language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("baidu-map")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"map"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("center")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"北京"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("baidu-map")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),t("span",{staticClass:"css"},[s._v("\n"),t("span",{staticClass:"hljs-selector-class"},[s._v(".map")]),s._v(" {\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("width")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("100%")]),s._v(";\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("height")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("400px")]),s._v(";\n}\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),s._v("\n")])])}]}}});