(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[20],{301:function(n,e,t){"use strict";var o=t(60),a=t(22),s=t(90),i=t(74),r=t(4),c=t(5),l=t(1),d=t(23),u=t(6),p=t(7),m=t(2),h=t(0),f=t.n(h),g=t(14),b=t.n(g),y=t(17),v=t(20),w=t(9),k=t(562),D=t(61);function C(o){return function(){var n,e=Object(m.a)(o);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(n){return!1}}()){var t=Object(m.a)(this).constructor;n=Reflect.construct(e,arguments,t)}else n=e.apply(this,arguments);return Object(p.a)(this,n)}}var j=function(n){Object(u.a)(o,n);var t=C(o);function o(n){var e;return Object(r.a)(this,o),(e=t.call(this,n)).handleClick=e.handleClick.bind(Object(l.a)(e)),e.handleUpdate=e.handleUpdate.bind(Object(l.a)(e)),e.handleRawChange=e.handleRawChange.bind(Object(l.a)(e)),e}return Object(c.a)(o,[{key:"componentDidMount",value:function(){Object(d.a)(Object(m.a)(o.prototype),"componentDidMount",this).call(this),this.props.datum.subscribe(w.a,this.handleUpdate)}},{key:"componentWillUnmount",value:function(){Object(d.a)(Object(m.a)(o.prototype),"componentWillUnmount",this).call(this),this.props.datum.unsubscribe(w.a,this.handleUpdate)}},{key:"getContent",value:function(n){var e=this.props.renderItem;return"string"==typeof e?n[e]:"function"==typeof e?e(n):""}},{key:"handleUpdate",value:function(){this.forceUpdate()}},{key:"handleClick",value:function(n,e,t){var o=this.props,a=o.data,i=o.datum;e?i.add(a[t]):i.remove(a[t])}},{key:"handleRawChange",value:function(n,e){var t=this.props.datum;e?t.add(n):t.remove(n)}},{key:"render",value:function(){var t=this,n=this.props,e=n.block,o=n.data,a=n.datum,i=n.keygen,r=n.children,c=n.style,l=b()(Object(D.a)("group",["no-block","block"][Number(e)]),this.props.className);return void 0===o?f.a.createElement("div",{className:l,style:c},f.a.createElement(k.a,{value:{onRawChange:this.handleRawChange,checked:a.check.bind(a)}},r)):f.a.createElement("div",{className:l,style:c},o.map(function(n,e){return f.a.createElement(s.a,{checked:a.check(n),disabled:a.disabled(n),key:Object(v.b)(n,i,e),htmlValue:e,index:e,onChange:t.handleClick},t.getContent(n))}),r)}}]),o}(y.b);j.defaultProps={renderItem:function(n){return n}};var E=j,S=Object(a.compose)(o.a,k.b)(s.a);S.Group=Object(a.compose)(o.a,i.a.hoc({bindProps:["disabled","format","prediction","separator"]}))(E),S.Checkbox=s.a,S.displayName="ShineoutCheckbox",S.Group.displayName="ShineoutCheckboxGroup";e.a=S},303:function(n,e,t){"use strict";var o=t(0),p=t.n(o),a=t(46),i=t.n(a),m=t(110),r=t(4),c=t(5),l=t(1),s=t(6),d=t(7),u=t(2),h=t(42),f=t(17),g=t(123),b=t(20);function y(o){return function(){var n,e=Object(u.a)(o);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(n){return!1}}()){var t=Object(u.a)(this).constructor;n=Reflect.construct(e,arguments,t)}else n=e.apply(this,arguments);return Object(d.a)(this,n)}}var v=function(n){Object(s.a)(o,n);var t=y(o);function o(n){var e;return Object(r.a)(this,o),(e=t.call(this,n)).state={messages:[]},e.removeMessage=e.removeMessage.bind(Object(l.a)(e)),e.handleClassName=function(){var n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"top",e=1<arguments.length?arguments[1]:void 0;return Object(m.a)("item","item-".concat(e?"dismissed":"show","-").concat(n))},e.handleStyle=function(n,e,t){if(!n||null==e)return null;var o={};switch(t){case"bottom-right":case"bottom-left":break;default:o={zIndex:-1,opacity:0,marginTop:-e}}return o},e}return Object(c.a)(o,[{key:"addMessage",value:function(e){var n=this,t=Object(b.c)();return this.setState(Object(h.a)(function(n){n.messages.push(Object.assign({id:t},e))})),0<e.duration&&setTimeout(function(){n.setState(Object(h.a)(function(n){n.messages.forEach(function(n){n.id===t&&(n.dismiss=!0)})}))},1e3*e.duration),this.closeMessageForAnimation.bind(this,t,200,200)}},{key:"removeMessage",value:function(e){var t,n=this.state.messages.filter(function(n){return n.id!==e||(n.onClose&&(t=n.onClose),!1)});0===n.length?this.props.onDestory():this.setState({messages:n}),t&&t()}},{key:"closeMessageForAnimation",value:function(){for(var n=this,e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];var a=t[0],i=t[1],r=t[2];i?(this.setState(Object(h.a)(function(n){n.messages.forEach(function(n){n.id===a&&(n.dismiss=!0,n.h=r+20)})})),setTimeout(function(){n.removeMessage(a)},i)):this.removeMessage(a)}},{key:"closeEvent",value:function(n,e){if(0===e)return this.removeMessage.bind(this,n)}},{key:"render",value:function(){var u=this;return[this.state.messages.map(function(n){var e=n.id,t=n.type,o=n.content,a=n.dismiss,i=n.h,r=n.title,c=n.top,l=n.className,s=n.position,d=n.hideClose;return p.a.createElement("div",{key:e,className:"".concat(u.handleClassName(s,a)," ").concat(l),style:u.handleStyle(a,i,s)},p.a.createElement(g.a,{outAnimation:!0,className:Object(m.a)("msg"),dismiss:a,hideClose:d,onClose:u.closeMessageForAnimation.bind(u,e),icon:!0,iconSize:r?20:14,style:{top:c},type:t},r&&p.a.createElement("h3",null,r),o))})]}}]),o}(f.b);v.displayName="ShineoutMessage";var w=v,k={},D={};function C(n){k[n]&&(i.a.unmountComponentAtNode(k[n]),document.body.removeChild(k[n]),delete k[n]),D[n]&&delete D[n]}function j(a){return new Promise(function(e){var n,t,o=D[a];o?e(o):i.a.render(p.a.createElement(w,{ref:function(n){D[a]=n,e(n)},onDestory:C.bind(null,a)}),(n=a,(t=document.createElement("div")).className=Object(m.a)("_",n),document.body.appendChild(t),k[n]=t))})}var E={},S=function(m){return function(e,t,n){var o=Object.assign({},E,n);t=[t,E.duration,3].find(function(n){return"number"==typeof n});var a=o.onClose,i=o.position,r=void 0===i?"top":i,c=o.title,l=o.className,s=void 0===l?"":l,d=o.top,u=void 0===d?"auto":d,p=o.hideClose;return j(r).then(function(n){return n.addMessage({content:e,duration:t,type:m,onClose:a,title:c,className:s,top:u,position:r,hideClose:p})})}};e.a={show:S("default"),success:S("success"),info:S("info"),warn:S("warning"),warning:S("warning"),danger:S("danger"),error:S("danger"),close:function(n){n?C(n):["top","middle","top-left","top-right","bottom-left","bottom-right"].forEach(function(n){C(n)})},setOptions:function(n){E=n}}},562:function(n,e,t){"use strict";t.d(e,"a",function(){return c}),t.d(e,"b",function(){return l});var o=t(0),a=t.n(o),i=t(38),r=Object(i.a)(),c=r.Provider,l=function(t){return function(e){return a.a.createElement(r.Consumer,null,function(n){return a.a.createElement(t,Object.assign({},e,n))})}}},720:function(n,e,t){"use strict";t.r(e);var o=t(0),a=t.n(o),i=t(561),r=t(563),c=t(41),l=t(721),s=t.n(l),d=t(722),u=t.n(d),p=Object(c.b)(s.a,u.a),m=[{name:"1-base",title:Object(c.b)("基本用法 \n Dropdown 通过数据来渲染，支持 json 格式数据、React 组件","Base \n Dropdown is rendered through data and supports json formatted data and React components."),component:t(723).default,rawText:t(724)},{name:"2-hover",title:Object(c.b)('触发 \n Dropdown 默认通过点击触发下拉行为，设置 trigger="hover" 属性可以改为移入触发','Trigger \n By default, Dropdown toggled clicking, setting trigger="hover" can toggled by mouse move in.'),component:t(725).default,rawText:t(726)},{name:"3-position",title:Object(c.b)("弹出位置 \n 设置 position 属性可以控制下拉菜单弹出的方向和位置","Position \n Set position property can control the direction and position of the drop-down menu."),component:t(727).default,rawText:t(728)},{name:"4-items",title:Object(c.b)("多列平铺 \n 设置 columns 属性可以让选项多列平铺","Multiple columns \n Set columns property can make the option multi-column tiled."),component:t(729).default,rawText:t(730)},{name:"5-split",title:Object(c.b)("组合 \n 在 Button.Group 中组合使用，通常用于隐藏一组按钮中不太常用的选项","Group \n Dropdown can be combined with Button used in Button.Group."),component:t(731).default,rawText:t(732)},{name:"6-type",title:Object(c.b)("样式 \n 使用了和Button相同的 type 和 size 设置样式","type \n Style is set using the same type and size as Button."),component:t(733).default,rawText:t(734)},{name:"7-base",title:Object(c.b)("绝对定位 \n 如果选项弹出层的父容器被遮挡，可以设置 absolute 属性使弹出选项在单独层中渲染。","Absolute \n If the parent container of the pop-up layer is occluded, you can set the absolute property to make the pop-up options rendered in a separate layer."),component:t(735).default,rawText:t(736)}];e.default=Object(i.a)(function(n){return a.a.createElement(r.b,Object.assign({},n,{codes:void 0,source:p,examples:m}))})},721:function(n,e){n.exports="# Dropdown *下拉菜单*\n\n<example />\n\n## API\n\n### Dropdown\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| className | string | 无 | 扩展className |\n| columns | number | 无 | 页面多元素展示,此属性需要依赖width属性,请合理的设置列数和宽度 |\n| data | object[] | 必填 | 下拉数据，详见data |\n| disabled | boolean | false | 禁用 |\n| onClick | (data: object) => void | 无 | 点击事件。参数为渲染的数据, <br /> 注: 如果数据内设置了onClick，会忽略此方法，调用data.onClick |\n| outline | boolean | false | 同 [Button](/components/Button) |\n| placeholder | string \\| ReactNode | 必填 | 按钮显示内容 |\n| renderItem | (data: object) => ReactNode \\| string | 'content' | 设置显示的内容,如果是字符串,则为对应的值<br />如果是函数,则返回值为显示的内容,参数为当条数据 |\n| size | string | 'default' | 同 [Button](/components/Button) |\n| trigger | 'click' \\| 'hover' | 'click' | 触发方式 |\n| type | 'primary' \\| 'secondary' \\|  'success' \\| 'info' \\|  'warning' \\|  'danger' \\|  'link' | 'default' | 类型 |\n| width | number | 无 | 弹出选项层的宽度 |\n| animation | boolean | true | 是否开启动画 |\n| absolute | boolean \\| (() => element) | false | 为 true 时，选项弹出层在 BODY 下独立 render， 为函数时 选项弹出层在函数返回的 DOM 下render  |\n\n### DropdownData\n\ndata 选项有三种情况：\n\n- 为 ReactElement 时，直接显示此元素。\n\n- 为 object 且设置了 renderItem，显示 renderItem 返回的内容。\n\n- 为 object 且未设置 renderItem，按以下数据结构处理。\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| content | string \\| element | | 默认从content获取内容 |\n| url | string | 无 | url属性不为空时，render为一个链接 |\n| target | string | 无 | url 不为空时有效 |\n| onClick | function | 无 | 点击事件 |\n"},722:function(n,e){n.exports="# Dropdown\n\n<example />\n\n## API\n\n### Dropdown\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| className | string | none | Extend className |\n| columns | number | none | Display multiple elements on the page. This property depends on the width attribute. Please set the number of columns and width appropriately. |\n| data | object[] | required | See the detail in the data of the drop down box. |\n| disabled | boolean | false | disabled |\n| onClick | (data: object) => void | none | The click event. The parameter is the rendered data. <br /> Note: if the onClick is set in the data, this method will be ignored and data.onclick will be called. |\n| outline | boolean | false | The same as [Button](/components/Button) |\n| placeholder | string \\| ReactNode | required | Displayed content of the button |\n| renderItem | (data: object) => ReactNode \\| string | 'content' | Set the displayed content. If it is a string,  the corresponding value will be displayed. <br />If it is a function, the return value will be displayed and its parameter is the current data. |\n| size | string | 'default' | The same as [Button](/components/Button) |\n| trigger | 'click' \\| 'hover' | 'click' | Toggle mode, options |\n| type | 'primary' \\| 'secondary' \\|  'success' \\| 'info' \\|  'warning' \\|  'danger' \\|  'link' | 'default' | type of Dropdown |\n| width | number | none | The width of the pop-up option layer |\n| animation | boolean | true | animation toggle |\n| absolute \\| (() => element) | boolean | false | When it is true, the pop-up layer of option append into document.body. When it is function, the pop-up layer of option append into it's return DOM.  |\n\n\n### DropdownData\n\n- If data item is a ReactElement, render the item;\n- If data item is an object and renderItem is set, render the renderItem's result;\n- if data item is an object and renderItem is not set, handle the parameters as follows;\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| content | string \\| element | |  |\n| url | string | none | When the url is not empty, a url will be rendered. |\n| target | string | none | It is valid when the url is not empty. |\n| onClick | function | none | The click event |\n"},723:function(n,e,t){"use strict";t.r(e);var o=t(0),a=t.n(o),i=t(303),r=t(256),c=[{content:"Submenu",children:[{content:"Link to Google",target:"_blank",url:"https://google.com"},{content:"Disabled",disabled:!0}]},a.a.createElement("a",{href:"/"},"Home"),{content:"Message",onClick:function(){i.a.info("Some message.")}}];e.default=function(){return a.a.createElement(r.a,{placeholder:"Dropdown",data:c})}},724:function(n,e){n.exports="/**\n * cn - 基本用法\n *    -- Dropdown 通过数据来渲染，支持 json 格式数据、React 组件\n * en - Base\n *    -- Dropdown is rendered through data and supports json formatted data and React components.\n */\nimport React from 'react'\nimport { Dropdown, Message } from 'shineout'\n\nconst data = [\n  {\n    content: 'Submenu',\n    children: [\n      {\n        content: 'Link to Google',\n        target: '_blank',\n        url: 'https://google.com',\n      },\n      {\n        content: 'Disabled',\n        disabled: true,\n      },\n    ],\n  },\n  <a href=\"/\">Home</a>,\n  {\n    content: 'Message',\n    onClick: () => {\n      Message.info('Some message.')\n    },\n  },\n]\n\nexport default function() {\n  return <Dropdown placeholder=\"Dropdown\" data={data} />\n}\n"},725:function(n,e,t){"use strict";t.r(e);var o=t(0),a=t.n(o),i=t(256);e.default=function(){return a.a.createElement(i.a,{trigger:"hover",placeholder:"Hover",data:[{content:"First",id:"1",children:[{id:"3",content:"optic 1"}]},{content:"Second",url:"http://www.google.com",id:"2",children:[{content:"topic 2",id:4,children:[{id:"6",content:"topic 3"}]}]}]})}},726:function(n,e){n.exports="/**\n * cn - 触发\n *    -- Dropdown 默认通过点击触发下拉行为，设置 trigger=\"hover\" 属性可以改为移入触发\n * en - Trigger\n *    -- By default, Dropdown toggled clicking, setting trigger=\"hover\" can toggled by mouse move in.\n */\nimport React from 'react'\nimport { Dropdown } from 'shineout'\n\nexport default function() {\n  const menu = [\n    {\n      content: 'First',\n      id: '1',\n      children: [\n        {\n          id: '3',\n          content: 'optic 1',\n        },\n      ],\n    },\n    {\n      content: 'Second',\n      url: 'http://www.google.com',\n      id: '2',\n      children: [\n        {\n          content: 'topic 2',\n          id: 4,\n          children: [\n            {\n              id: '6',\n              content: 'topic 3',\n            },\n          ],\n        },\n      ],\n    },\n  ]\n\n  return <Dropdown trigger=\"hover\" placeholder=\"Hover\" data={menu} />\n}\n"},727:function(n,e,t){"use strict";t.r(e);var o=t(0),a=t.n(o),i=t(256),r={marginInlineEnd:12,marginBottom:12};e.default=function(){var n=[{content:"First",id:"1",children:[{content:"link1",id:"4"},{content:"link2",id:"5"}]},{content:"Second",url:"http://www.google.com",id:"2",children:[{content:"link3",id:6,onClick:function(){console.log("this is special")}},{content:"link4",id:7,children:[{id:"8",content:"link5"},{id:"9",content:"link6"}]}]}];return a.a.createElement("div",null,a.a.createElement(i.a,{placeholder:"Right Top",style:r,position:"right-top",data:n}),a.a.createElement(i.a,{placeholder:"Bottom Left",style:r,position:"bottom-left",data:n}),a.a.createElement(i.a,{placeholder:"Bottom Right",style:r,position:"bottom-right",data:n}),a.a.createElement(i.a,{placeholder:"Left Top",style:r,position:"left-top",data:n}),a.a.createElement("br",null),a.a.createElement(i.a,{placeholder:"Right Bottom",style:r,position:"right-bottom",data:n}),a.a.createElement(i.a,{placeholder:"Top Left",style:r,position:"top-left",data:n}),a.a.createElement(i.a,{placeholder:"Top Right",style:r,position:"top-right",data:n}),a.a.createElement(i.a,{placeholder:"Left Bottom",style:r,position:"left-bottom",data:n}),a.a.createElement("br",null),a.a.createElement(i.a,{placeholder:"Auto Position",style:r,position:"auto",data:n}))}},728:function(n,e){n.exports="/**\n * cn - 弹出位置\n *    -- 设置 position 属性可以控制下拉菜单弹出的方向和位置\n * en - Position\n *    -- Set position property can control the direction and position of the drop-down menu.\n */\nimport React from 'react'\nimport { Dropdown } from 'shineout'\n\nconst style = { marginInlineEnd: 12, marginBottom: 12 }\n\nexport default function() {\n  const menu = [\n    {\n      content: 'First',\n      id: '1',\n      children: [\n        {\n          content: 'link1',\n          id: '4',\n        },\n        {\n          content: 'link2',\n          id: '5',\n        },\n      ],\n    },\n    {\n      content: 'Second',\n      url: 'http://www.google.com',\n      id: '2',\n      children: [\n        {\n          content: 'link3',\n          id: 6,\n          onClick: () => {\n            console.log('this is special')\n          },\n        },\n        {\n          content: 'link4',\n          id: 7,\n          children: [\n            {\n              id: '8',\n              content: 'link5',\n            },\n            {\n              id: '9',\n              content: 'link6',\n            },\n          ],\n        },\n      ],\n    },\n  ]\n\n  return (\n    <div>\n      <Dropdown placeholder=\"Right Top\" style={style} position=\"right-top\" data={menu} />\n\n      <Dropdown placeholder=\"Bottom Left\" style={style} position=\"bottom-left\" data={menu} />\n\n      <Dropdown placeholder=\"Bottom Right\" style={style} position=\"bottom-right\" data={menu} />\n\n      <Dropdown placeholder=\"Left Top\" style={style} position=\"left-top\" data={menu} />\n\n      <br />\n\n      <Dropdown placeholder=\"Right Bottom\" style={style} position=\"right-bottom\" data={menu} />\n\n      <Dropdown placeholder=\"Top Left\" style={style} position=\"top-left\" data={menu} />\n\n      <Dropdown placeholder=\"Top Right\" style={style} position=\"top-right\" data={menu} />\n\n      <Dropdown placeholder=\"Left Bottom\" style={style} position=\"left-bottom\" data={menu} />\n\n      <br />\n      <Dropdown placeholder=\"Auto Position\" style={style} position=\"auto\" data={menu} />\n    </div>\n  )\n}\n"},729:function(n,e,t){"use strict";t.r(e);var o=t(0),a=t.n(o),i=t(256);e.default=function(){for(var n=[],e=1;e<=30;e++)n.push({id:"".concat(e),content:"item".concat(e)});return a.a.createElement(i.a,{placeholder:"Dropdown",width:500,columns:5,data:n})}},730:function(n,e){n.exports="/**\n * cn - 多列平铺\n *    -- 设置 columns 属性可以让选项多列平铺\n * en - Multiple columns\n *    -- Set columns property can make the option multi-column tiled.\n */\nimport React from 'react'\nimport { Dropdown } from 'shineout'\n\nexport default function() {\n  const menu = []\n  for (let i = 1; i <= 30; i++) {\n    menu.push({\n      id: `${i}`,\n      content: `item${i}`,\n    })\n  }\n\n  return <Dropdown placeholder=\"Dropdown\" width={500} columns={5} data={menu} />\n}\n"},731:function(n,e,t){"use strict";t.r(e);var o=t(0),a=t.n(o),i=t(67),r=t(303),c=t(256),l=[{content:"First"},{content:"Second",target:"_blank",url:"http://www.google.com"}];e.default=function(){return a.a.createElement(i.a.Group,null,a.a.createElement(i.a,{onClick:function(){return r.a.info("The left button clicked.")}},"Left"),a.a.createElement(i.a,null,"Center"),a.a.createElement(c.a,{onClick:function(n){return r.a.info("The Dropdown clicked ".concat(n.content,"."))},position:"bottom-right",data:l}))}},732:function(n,e){n.exports="/**\n * cn - 组合\n *    -- 在 Button.Group 中组合使用，通常用于隐藏一组按钮中不太常用的选项\n * en - Group\n *    -- Dropdown can be combined with Button used in Button.Group.\n */\nimport React from 'react'\nimport { Dropdown, Message, Button } from 'shineout'\n\nconst menu = [\n  {\n    content: 'First',\n  },\n  {\n    content: 'Second',\n    target: '_blank',\n    url: 'http://www.google.com',\n  },\n]\n\nexport default function() {\n  return (\n    <Button.Group>\n      <Button onClick={() => Message.info('The left button clicked.')}>Left</Button>\n      <Button>Center</Button>\n      <Dropdown\n        onClick={data => Message.info(`The Dropdown clicked ${data.content}.`)}\n        position=\"bottom-right\"\n        data={menu}\n      />\n    </Button.Group>\n  )\n}\n"},733:function(n,e,t){"use strict";t.r(e),t.d(e,"default",function(){return b});var a=t(28),i=t(4),r=t(5),c=t(6),l=t(7),s=t(2),o=t(0),d=t.n(o),u=t(303),p=t(201),m=t(301),h=t(256);function f(o){return function(){var n,e=Object(s.a)(o);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(n){return!1}}()){var t=Object(s.a)(this).constructor;n=Reflect.construct(e,arguments,t)}else n=e.apply(this,arguments);return Object(l.a)(this,n)}}var g=[{content:"Submenu",children:[{content:"Link",target:"_blank",url:"https://google.com"},{content:"Disabled",disabled:!0}]},{content:"Message",onClick:function(){u.a.info("Some message.")}}],b=function(n){Object(c.a)(o,n);var t=f(o);function o(n){var e;return Object(i.a)(this,o),(e=t.call(this,n)).state={type:"primary",size:"default",disabled:!1,outline:!1},e}return Object(r.a)(o,[{key:"changeSetting",value:function(n,e){this.setState(Object(a.a)({},n,e))}},{key:"render",value:function(){var n=this.state,e=n.type,t=n.outline,o=n.size,a=n.disabled;return d.a.createElement("div",null,d.a.createElement("div",{style:{marginBottom:20}},d.a.createElement("span",{style:{display:"inline-block"}},"type: "),d.a.createElement(p.a,{width:140,keygen:function(n){return n},data:["primary","success","warning","danger"],value:e,onChange:this.changeSetting.bind(this,"type"),style:{marginInlineEnd:20}}),d.a.createElement("span",{style:{display:"inline-block"}},"size: "),d.a.createElement(p.a,{width:100,keygen:function(n){return n},data:["small","default","large"],value:o,onChange:this.changeSetting.bind(this,"size"),style:{marginInlineEnd:20}}),d.a.createElement(m.a,{value:t,onChange:this.changeSetting.bind(this,"outline")},"outline"),d.a.createElement(m.a,{value:a,onChange:this.changeSetting.bind(this,"disabled")},"disabled")),d.a.createElement(h.a,{placeholder:"Dropdown",data:g,disabled:a,outline:t,size:o,type:e}))}}]),o}(o.Component)},734:function(n,e){n.exports="/**\n * cn - 样式\n *    -- 使用了和Button相同的 type 和 size 设置样式\n * en - type\n *    -- Style is set using the same type and size as Button.\n */\nimport React, { Component } from 'react'\nimport { Dropdown, Message, Select, Checkbox } from 'shineout'\n\nconst menu = [\n  {\n    content: 'Submenu',\n    children: [\n      {\n        content: 'Link',\n        target: '_blank',\n        url: 'https://google.com',\n      },\n      {\n        content: 'Disabled',\n        disabled: true,\n      },\n    ],\n  },\n  {\n    content: 'Message',\n    onClick: () => {\n      Message.info('Some message.')\n    },\n  },\n]\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      type: 'primary',\n      size: 'default',\n      disabled: false,\n      outline: false,\n    }\n  }\n\n  changeSetting(name, value) {\n    this.setState({ [name]: value })\n  }\n\n  render() {\n    const { type, outline, size, disabled } = this.state\n    return (\n      <div>\n        <div style={{ marginBottom: 20 }}>\n          <span style={{ display: 'inline-block' }}>type: </span>\n          <Select\n            width={140}\n            keygen={d => d}\n            data={['primary', 'success', 'warning', 'danger']}\n            value={type}\n            onChange={this.changeSetting.bind(this, 'type')}\n            style={{ marginInlineEnd: 20 }}\n          />\n\n          <span style={{ display: 'inline-block' }}>size: </span>\n          <Select\n            width={100}\n            keygen={d => d}\n            data={['small', 'default', 'large']}\n            value={size}\n            onChange={this.changeSetting.bind(this, 'size')}\n            style={{ marginInlineEnd: 20 }}\n          />\n\n          <Checkbox value={outline} onChange={this.changeSetting.bind(this, 'outline')}>\n            outline\n          </Checkbox>\n\n          <Checkbox value={disabled} onChange={this.changeSetting.bind(this, 'disabled')}>\n            disabled\n          </Checkbox>\n        </div>\n\n        <Dropdown placeholder=\"Dropdown\" data={menu} disabled={disabled} outline={outline} size={size} type={type} />\n      </div>\n    )\n  }\n}\n"},735:function(n,e,t){"use strict";t.r(e);var o=t(0),a=t.n(o),i=t(303),r=t(256),c=[{content:"Submenu",children:[{content:"Link to Google",target:"_blank",url:"https://google.com"},{content:"Disabled",disabled:!0}]},a.a.createElement("a",{href:"/"},"Home"),{content:"Message",onClick:function(){i.a.info("Some message.")}}];e.default=function(){return a.a.createElement("div",{style:{background:"#eee",padding:20,borderRadius:10,overflow:"hidden"}},a.a.createElement(r.a,{absolute:!0,placeholder:"Absolute",data:c}),a.a.createElement(r.a,{placeholder:"Default",data:c,style:{marginInlineStart:40}}))}},736:function(n,e){n.exports="/**\n * cn - 绝对定位\n *    -- 如果选项弹出层的父容器被遮挡，可以设置 absolute 属性使弹出选项在单独层中渲染。\n * en - Absolute\n *    -- If the parent container of the pop-up layer is occluded, you can set the absolute property to make the pop-up options rendered in a separate layer.\n */\nimport React from 'react'\nimport { Dropdown, Message } from 'shineout'\n\nconst data = [\n  {\n    content: 'Submenu',\n    children: [\n      {\n        content: 'Link to Google',\n        target: '_blank',\n        url: 'https://google.com',\n      },\n      {\n        content: 'Disabled',\n        disabled: true,\n      },\n    ],\n  },\n  <a href=\"/\">Home</a>,\n  {\n    content: 'Message',\n    onClick: () => {\n      Message.info('Some message.')\n    },\n  },\n]\n\nexport default function() {\n  return (\n    <div style={{ background: '#eee', padding: 20, borderRadius: 10, overflow: 'hidden' }}>\n      <Dropdown absolute placeholder=\"Absolute\" data={data} />\n      <Dropdown placeholder=\"Default\" data={data} style={{ marginInlineStart: 40 }} />\n    </div>\n  )\n}\n"}}]);