(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[38],{325:function(e,t,n){"use strict";var a=n(0),u=n.n(a),r=n(12),o=n(4),c=n(5),s=n(6),l=n(7),i=n(2),m=n(14),f=n.n(m),p=n(17),h=n(69),d=n(29),b=(n(32),n(960)),v=n.n(b),g=n(10),y=Object(g.a)(v.a,"rate"),R=n(68);function x(a){return function(){var e,t=Object(i.a)(a);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(i.a)(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return Object(l.a)(this,e)}}var w=function(e){Object(s.a)(a,e);var n=x(a);function a(e){var t;return Object(o.a)(this,a),(t=n.call(this,e)).state={hover:0,highlight:-1},t}return Object(c.a)(a,[{key:"getValue",value:function(){var e=this.state.hover;return 0===e?this.props.value:e}},{key:"getStyle",value:function(){var e=this.props.size;if(e){var t=Math.max(12,parseFloat(e));return{width:t,fontSize:t,position:"relative"}}}},{key:"getScale",value:function(){var e=this.props.size;if(!(12<=e))return{transform:"scale(".concat(e/12,")")}}},{key:"getIcon",value:function(e,t,n){var a,r=this.props,o=r.repeat,c=r.allowHalf,s=this.getValue(),l=s-t;if(Array.isArray(e)?(a=e[o?s-1:t])||(a=e[e.length-1]):a=e,l<=0||1<=l||n)return a;var i={width:"".concat(100*l,"%"),display:"block",overflow:"hidden",fontSize:"inherit"};return u.a.createElement("span",{style:i,className:c&&y("allow-half")},a)}},{key:"handleClick",value:function(){var e=this,t=arguments.length<=0?void 0:arguments[0],n=arguments.length<=1?void 0:arguments[1],a=this.props,r=a.clearable;a.allowHalf&&n.target.parentElement.querySelector(".".concat(y("allow-half")))&&(t-=.5),r&&this.props.value===t&&(t=0,this.setState({hover:0})),this.props.onChange(t),this.setState({highlight:t}),this.highlightTimer&&clearTimeout(this.highlightTimer),this.highlightTimer=setTimeout(function(){e.setState({highlight:-1})},300)}},{key:"handleHover",value:function(e){this.setState({hover:e})}},{key:"handleMove",value:function(e,t){var n=t.target.getBoundingClientRect(),a=n.x,r=n.width;this.setState({hover:e-(a+r/2>t.clientX?.5:0)})}},{key:"renderBackground",value:function(){var t=this,e=this.props,n=e.background,a=e.max,r=e.disabled,o=this.getStyle(),c=this.getValue();return u.a.createElement("div",{className:y("background")},Object(h.range)(a).map(function(e){return u.a.createElement("span",{key:e,style:Object.assign({visibility:!r&&Math.floor(c)>e?"hidden":"visible"},o)},t.getIcon(n,e,!0))}))}},{key:"renderRate",value:function(){var t=this,e=this.props,n=e.front,a=e.max,r=e.text,o=e.allowHalf,c=this.state.highlight,s=this.getValue(),l=this.getStyle();return u.a.createElement("div",{className:y("front")},Object(h.range)(a).map(function(e){return u.a.createElement("span",{key:e,onClick:t.handleClick.bind(t,e+1),onMouseMove:o?t.handleMove.bind(t,e+1):void 0,onMouseEnter:o?void 0:t.handleHover.bind(t,e+1),style:l},u.a.createElement("div",{style:{position:"absolute",top:0,right:0,left:0,bottom:0},onMouseLeave:t.handleHover.bind(t,0)}),e<s?t.getIcon(n,e):u.a.createElement("span",null," "),c===e+1&&u.a.createElement("i",{className:y("highlight")},t.getIcon(n,e)))}),u.a.createElement("span",{className:y("text")},r[Math.ceil(s)-1]))}},{key:"renderStatic",value:function(){var t=this,e=this.props,n=e.front,a=e.value,r=e.max,o=e.text,c=this.getStyle();return u.a.createElement("div",{className:y("static")},Object(h.range)(r).map(function(e){return u.a.createElement("span",{key:e,style:c},e<a&&t.getIcon(n,e))}),u.a.createElement("span",{className:y("text")},o[Math.ceil(a)-1]))}},{key:"render",value:function(){var e=f()(y("_"),this.props.className),t=Object.assign({},this.props.style,this.getScale());return u.a.createElement("div",Object.assign({className:e,style:t},Object(R.a)(this.props)),this.renderBackground(),this.props.disabled?this.renderStatic():this.renderRate())}}]),a}(p.b);w.defaultProps=Object(r.a)(Object(r.a)({},d.a),{},{repeat:!0,max:5,size:20,text:[],value:0});var E=w,S=n(60);t.a=function(t,n){var a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},e=Object(S.a)(function(e){return u.a.createElement(E,Object.assign({},a,e,{background:t,front:n||t}))});return e.displayName="ShineoutRate",e}},956:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(560),c=n(562),s=n(41),l=n(957),i=n.n(l),u=n(958),m=n.n(u),f=Object(s.b)(i.a,m.a),p=[{name:"01-base",title:Object(s.b)("基本用法 \n Rate 为一个函数，创建一个指定图标或文字的 Rate 组件，供多处复用。","Base \n Rate is a function that creates a new custom Rate component that specifies an icon or text."),component:n(959).default,rawText:n(961)},{name:"01-half",title:Object(s.b)("半星 \n Rate 是否允许半星。","Semi selection \n Rate whether to allow semi selection."),component:n(962).default,rawText:n(963)},{name:"02-color",title:Object(s.b)("颜色 \n 在创建组件时设置颜色","Icon color \n Set the color when the component is created."),component:n(964).default,rawText:n(965)},{name:"04-max",title:Object(s.b)("最大值 \n 通过 max 属性设置选项最大值，默认为 5","Max \n Set the maximum value of the option through the max attribute. The default value is 5."),component:n(966).default,rawText:n(967)},{name:"05-size",title:Object(s.b)("大小 \n 通过 size 属性可以设置大小","Size \n Set the size through the size property."),component:n(968).default,rawText:n(969)},{name:"06-text",title:Object(s.b)("附加文字 \n text 属性可以为每个选项附加文字","Text \n Set text property to append text to each item."),component:n(970).default,rawText:n(971)},{name:"07-disabled",title:Object(s.b)("只读 \n 设置 disabled 标示为只读，只读状态下，value可以传入小数","Disabled \n Set disabled to true make it be read-only. When disabled, value can be passed in decimals."),component:n(972).default,rawText:n(973)},{name:"08-face",title:Object(s.b)("分级显示 \n 创建组件时可以使用数组显示不同分数下的选项，这种情况下，不支持带小数的value","Array \n You can use arrays to display items with different scores when creating components. In this case, values with decimals are not supported."),component:n(974).default,rawText:n(975)},{name:"09-array",title:Object(s.b)("不重复选项 \n 默认情况下，会重复显示当前分值对应的选项，设置 repeat 属性为 false 可以按分值显示不同选项。","No Repeat \n By default, the item corresponding to the current value is displayed repeatedly. Set repeat property to false to display different item by value."),component:n(976).default,rawText:n(977)},{name:"10-clearable",title:Object(s.b)("清除 \n 通过 clearable 属性可以设置再次点击清除 value。","clear \n Set the clearable to clear value when click again."),component:n(978).default,rawText:n(979)}];t.default=Object(o.a)(function(e){return r.a.createElement(c.b,Object.assign({},e,{codes:void 0,source:f,examples:p}))})},957:function(e,t){e.exports="# Rate *评分*\n\n<example />\n\n## API\n\n#### Rate function(background, front):ReactClass\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| background | ReactElement \\| string \\| array | 必填 | 待选项 |\n| front | ReactElement \\| string \\| array | background | 选中项，不填和待选项相同 |\n\n### Rate\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| defaultValue | number | | 默认值 |\n| disabled | bool | false | 是否只读 |\n| max | number | 5 | 选项最大值，整数 |\n| onChange | function(d) | | 值改变回调函数 |\n| repeat | bool | true | 为 true 时，显示的选项为当前分值对应选项的复制 |\n| size | number \\| string | 20 | 图标大小 |\n| value | number | 0 | 作为可输入组件时，为整数。只读展示时，可以带小数 |\n| clearable | bool | false | 是否允许再次点击后清除 |\n| allowHalf | bool | false | 是否允许半选 |\n"},958:function(e,t){e.exports="# Rate\n\n<example />\n\n## API\n\n#### RateFunction(background, front):ReactClass\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| background | ReactElement \\| string \\| array | required | Background item for rate |\n| front | ReactElement \\| string \\| array | background | Front item. If it is not set, use background item |\n\n### Rate\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| defaultValue | number | | Default value |\n| disabled | bool | false | read-only |\n| max | number | 5 | The maximum value of the option, integer |\n| onChange | function(d) | | The callback function when the value is changing |\n| repeat | bool | true | When repeat is true, display item is a copy of the item corresponding to the current value |\n| size | number \\| string | 20 | the size of the icon |\n| value | number | 0 | |\n| clearable | bool | false | whether to allow clear when click again |\n| allowHalf | bool | false | Whether to allow semi selection |"},959:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(325),c=n(184),s=r.a.createElement(c.a,{name:"star"}),l=Object(o.a)(s,s);t.default=function(){return r.a.createElement(l,null)}},960:function(e,t){},961:function(e,t){e.exports="/**\n * cn - 基本用法\n *    -- Rate 为一个函数，创建一个指定图标或文字的 Rate 组件，供多处复用。\n * en - Base\n *    -- Rate is a function that creates a new custom Rate component that specifies an icon or text.\n */\nimport React from 'react'\nimport { Rate } from 'shineout'\nimport FontAwesome from '../Icon/FontAwesome'\n\nconst star = <FontAwesome name=\"star\" />\nconst StarRate = Rate(star, star)\n\nexport default function() {\n  return <StarRate />\n}\n"},962:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(325),c=n(184),s=r.a.createElement(c.a,{name:"star"}),l=Object(o.a)(s,s);t.default=function(){return r.a.createElement(l,{size:24,allowHalf:!0})}},963:function(e,t){e.exports="/**\n * cn - 半星\n *    -- Rate 是否允许半星。\n * en - Semi selection\n *    -- Rate whether to allow semi selection.\n */\nimport React from 'react'\nimport { Rate } from 'shineout'\nimport FontAwesome from '../Icon/FontAwesome'\n\nconst star = <FontAwesome name=\"star\" />\nconst StarRate = Rate(star, star)\n\nexport default function() {\n  return <StarRate size={24} allowHalf />\n}\n"},964:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(325),c=n(184),s=r.a.createElement(c.a,{name:"heart-o"}),l=r.a.createElement(c.a,{name:"heart",style:{color:"#ff4d4f"}}),i=Object(o.a)(s,l);t.default=function(){return r.a.createElement(i,{defaultValue:2})}},965:function(e,t){e.exports="/**\n * cn - 颜色\n *    -- 在创建组件时设置颜色\n * en - Icon color\n *    -- Set the color when the component is created.\n */\nimport React from 'react'\nimport { Rate } from 'shineout'\nimport FontAwesome from '../Icon/FontAwesome'\n\nconst heartBg = <FontAwesome name=\"heart-o\" />\nconst heart = <FontAwesome name=\"heart\" style={{ color: '#ff4d4f' }} />\nconst HeartRate = Rate(heartBg, heart)\n\nexport default function() {\n  return <HeartRate defaultValue={2} />\n}\n"},966:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(325),c=n(184),s=r.a.createElement(c.a,{name:"star"}),l=Object(o.a)(s,s);t.default=function(){return r.a.createElement(l,{max:10,defaultValue:3})}},967:function(e,t){e.exports="/**\n * cn - 最大值\n *    -- 通过 max 属性设置选项最大值，默认为 5\n * en - Max\n *    -- Set the maximum value of the option through the max attribute. The default value is 5.\n */\nimport React from 'react'\nimport { Rate } from 'shineout'\nimport FontAwesome from '../Icon/FontAwesome'\n\nconst star = <FontAwesome name=\"star\" />\nconst StarRate = Rate(star, star)\n\nexport default function() {\n  return <StarRate max={10} defaultValue={3} />\n}\n"},968:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(325),c=n(184),s=r.a.createElement(c.a,{name:"star"}),l=Object(o.a)(s,s);t.default=function(){return r.a.createElement("div",null,r.a.createElement(l,{size:14}),r.a.createElement("br",null),r.a.createElement(l,{size:20}),r.a.createElement("br",null),r.a.createElement(l,{size:40}))}},969:function(e,t){e.exports="/**\n * cn - 大小\n *    -- 通过 size 属性可以设置大小\n * en - Size\n *    -- Set the size through the size property.\n */\nimport React from 'react'\nimport { Rate } from 'shineout'\nimport FontAwesome from '../Icon/FontAwesome'\n\nconst star = <FontAwesome name=\"star\" />\nconst StarRate = Rate(star, star)\n\nexport default function() {\n  return (\n    <div>\n      <StarRate size={14} />\n      <br />\n      <StarRate size={20} />\n      <br />\n      <StarRate size={40} />\n    </div>\n  )\n}\n"},970:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(325),c=n(184),s=r.a.createElement(c.a,{name:"star"}),l=Object(o.a)(s,s);t.default=function(){return r.a.createElement(l,{defaultValue:4,text:["poor","fair","good","very good","excellent"]})}},971:function(e,t){e.exports="/**\n * cn - 附加文字\n *    -- text 属性可以为每个选项附加文字\n * en - Text\n *    -- Set text property to append text to each item.\n */\nimport React from 'react'\nimport { Rate } from 'shineout'\nimport FontAwesome from '../Icon/FontAwesome'\n\nconst star = <FontAwesome name=\"star\" />\nconst StarRate = Rate(star, star)\n\nexport default function() {\n  return <StarRate defaultValue={4} text={['poor', 'fair', 'good', 'very good', 'excellent']} />\n}\n"},972:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(325),c=n(184),s=r.a.createElement(c.a,{name:"star"}),l=Object(o.a)(s,s);t.default=function(){return r.a.createElement(l,{value:3.6,disabled:!0})}},973:function(e,t){e.exports="/**\n * cn - 只读\n *    -- 设置 disabled 标示为只读，只读状态下，value可以传入小数\n * en - Disabled\n *    -- Set disabled to true make it be read-only. When disabled, value can be passed in decimals.\n */\nimport React from 'react'\nimport { Rate } from 'shineout'\nimport FontAwesome from '../Icon/FontAwesome'\n\nconst star = <FontAwesome name=\"star\" />\nconst StarRate = Rate(star, star)\n\nexport default function() {\n  return <StarRate value={3.6} disabled />\n}\n"},974:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(152),c=n(325),s=Object(o.a)("https://at.alicdn.com/t/font_662584_hfkafvbgwurkvs4i.css","facefont"),l=r.a.createElement(s,{name:"question"}),i=[r.a.createElement(s,{name:"cry",style:{color:"#003a8c"}}),r.a.createElement(s,{name:"sad",style:{color:"#222222"}}),r.a.createElement(s,{name:"sleeping",style:{color:"#ffa940"}}),r.a.createElement(s,{name:"happy",style:{color:"#fa541c"}}),r.a.createElement(s,{name:"lol",style:{color:"#fa541c"}})],u=Object(c.a)(l,i);t.default=function(){return r.a.createElement(u,{equal:!1,size:40,defaultValue:3})}},975:function(e,t){e.exports="/**\n * cn - 分级显示\n *    -- 创建组件时可以使用数组显示不同分数下的选项，这种情况下，不支持带小数的value\n * en - Array\n *    -- You can use arrays to display items with different scores when creating components. In this case, values with decimals are not supported.\n */\nimport React from 'react'\nimport { Rate, Icon } from 'shineout'\n\nconst FaceIcon = Icon('https://at.alicdn.com/t/font_662584_hfkafvbgwurkvs4i.css', 'facefont')\nconst background = <FaceIcon name=\"question\" />\nconst front = [\n  <FaceIcon name=\"cry\" style={{ color: '#003a8c' }} />,\n  <FaceIcon name=\"sad\" style={{ color: '#222222' }} />,\n  <FaceIcon name=\"sleeping\" style={{ color: '#ffa940' }} />,\n  <FaceIcon name=\"happy\" style={{ color: '#fa541c' }} />,\n  <FaceIcon name=\"lol\" style={{ color: '#fa541c' }} />,\n]\nconst TextRate = Rate(background, front)\n\nexport default function() {\n  return <TextRate equal={false} size={40} defaultValue={3} />\n}\n"},976:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(325),c=["A","B","C","D","E"],s=c.map(function(e){return r.a.createElement("span",{style:{color:"red"}},e)}),l=Object(o.a)(c,s);t.default=function(){return r.a.createElement(l,{repeat:!1,defaultValue:2})}},977:function(e,t){e.exports="/**\n * cn - 不重复选项\n *    -- 默认情况下，会重复显示当前分值对应的选项，设置 repeat 属性为 false 可以按分值显示不同选项。\n * en - No Repeat\n *    -- By default, the item corresponding to the current value is displayed repeatedly. Set repeat property to false to display different item by value.\n */\nimport React from 'react'\nimport { Rate } from 'shineout'\n\nconst text = ['A', 'B', 'C', 'D', 'E']\nconst front = text.map(t => <span style={{ color: 'red' }}>{t}</span>)\nconst TextRate = Rate(text, front)\n\nexport default function() {\n  return <TextRate repeat={false} defaultValue={2} />\n}\n"},978:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(325),c=n(184),s=r.a.createElement(c.a,{name:"star"}),l=Object(o.a)(s,s);t.default=function(){return r.a.createElement(l,{clearable:!0})}},979:function(e,t){e.exports="/**\n * cn - 清除\n *    -- 通过 clearable 属性可以设置再次点击清除 value。\n * en - clear\n *    -- Set the clearable to clear value when click again.\n */\nimport React from 'react'\nimport { Rate } from 'shineout'\nimport FontAwesome from '../Icon/FontAwesome'\n\nconst star = <FontAwesome name=\"star\" />\nconst StarRate = Rate(star, star)\n\nexport default function() {\n  return <StarRate clearable />\n}\n"}}]);