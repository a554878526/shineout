(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[29],{909:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(561),o=t(563),i=t(40),u=t(910),p=t.n(u),s=t(911),c=t.n(s),m=Object(i.b)(p.a,c.a),d=[{name:"01-base",title:Object(i.b)("基本用法 \n Input 通常需要和其他的组件配合使用，所以默认的宽度是 100%，默认 display 为 block \n 如果设置了 style.width，默认 display 为 inline-flex","Base \n Input usually needs to be used with other components, so the default width is 100% and the default display is block. \n If the style.width is set, the default display is inline-flex."),component:t(912).default,rawText:t(913)},{name:"02-size",title:Object(i.b)("大小 \n 提供了三种尺寸的输入框，small、default、large","Size \n There are three size of input, small, default, large."),component:t(914).default,rawText:t(915)},{name:"03-number",title:Object(i.b)("数字 \n type 为 number 时，输入时会做一次校验，禁止输入非数字类型字符 \n 设置 digits 属性限制小数位数 \n 设置 integerLimit 属性限制整数位数 \n 设置 numType 来限制格式, 支持 'positive' 和 'non-negative'","Number \n When type is number, it is forbidden to input non-numeric characters, and the number of decimal places is limited according to the digits property \n set the digits property to limit the number of decimal places \n Set the integerLimit property to limit the number of integer digits \n set numType to limit the format of Number, support 'positive' and 'non-negative'"),component:t(916).default,rawText:t(917)},{name:"04-number",title:Object(i.b)(" \n Input.Number 组件，可以通过鼠标和上下键辅助输入"," \n Input.Number component can be assisted by mouse and up and down keyboard."),component:t(918).default,rawText:t(919)},{name:"05-group",title:Object(i.b)("组合 \n Icon, span, string, Button 类型可以直接放入 Input.Group 中。需要背景色可以放在 b 标签中。","Group \n The Icon, span, string and Button types can be placed directly into the Input.Group. Use b tag can change the background color."),component:t(920).default,rawText:t(921)},{name:"06-tip",title:Object(i.b)("提示文字 \n 在 input 上设置的 tip 在 focus 时弹出","Tip \n The tip set on input pops up when it is focused."),component:t(922).default,rawText:t(923)},{name:"07-validate",title:Object(i.b)("校验 \n 设置了 rules，会自动校验输入数据，设置了 popover 会在指定位置弹出 \n 如果没有设置 popover，不会弹出错误提示。 \n 有错误时，提示框不会隐藏。","Validate \n When the rules property is set, it will automatically verify the input data. When the popover property is set, it will pop up at the specified location. \n If the popover property is not set, no error message will pop up. \n If input is invalid, the message will not be hidden."),component:t(924).default,rawText:t(925)},{name:"08-disabled",title:Object(i.b)("禁用 \n 设置 disabled 属性禁用组件","Disabled \n Set the disabled property to disable the component."),component:t(926).default,rawText:t(927)},{name:"09-password",title:Object(i.b)("密码 \n Input.Password 模拟密码输入框，用来阻止 Chrome 提示记住密码。","Password \n Input.Password is a mock input of type 'password', used for disable Chrome autofill."),component:t(928).default,rawText:t(929)},{name:"1-clearable",title:Object(i.b)("允许删除 \n Input 允许删除","allow clear \n Input allow clear"),component:t(930).default,rawText:t(931)},{name:"1-underline",title:Object(i.b)("下边框 \n 使用 underline 属性设置仅展示下边框","Underline \n Use the underline property make only the bottom border display"),component:t(932).default,rawText:t(933)},{name:"10-innertitle",title:Object(i.b)("内嵌标题 \n 使用 innerTitle 展示内嵌标题","inner title \n use innerTitle to display the inner title"),component:t(934).default,rawText:t(935)},{name:"11-autoSelect",title:Object(i.b)("自动选中 \n 使用 autoSelect 聚焦后自动选中文本","auto select \n Use autoSelect to automatically select text after focusing"),component:t(936).default,rawText:t(937)},{name:"12-trim",title:Object(i.b)("清除空格 \n trim 为 true 时，失去焦点时会自动删除空白字符。","Clear space \n When trim is true, blank characters are automatically deleted when lose focus"),component:t(938).default,rawText:t(939)}];n.default=Object(l.a)(function(e){return r.a.createElement(o.b,Object.assign({},e,{codes:void 0,source:m,examples:d}))})},910:function(e,n){e.exports="# Input *输入框*\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| defaultValue | string \\| number | 无 | 默认值 |\n| delay | number | 400 | 用户输入触发 onChange 和校验间隔时间，单位 毫秒。|\n| name | string | 无 | Form 存取数据的名称 |\n| onChange | (value: string) => void | 无 | 值改变回调函数 |\n| onEnterPress | (value: string) => void | 无| 回车键回调函数 |\n| placeholder | string | 无 | 同原生 input 标签的 placeholder |\n| popover | 'top-left' \\| 'top' \\| 'top-right' \\| 'bottom-left' \\| 'bottom' \\| 'bottom-right' | 无| 信息弹出位置 |\n| size | 'large' \\| 'default' \\| 'small' | 'default' | 尺寸 |\n| style | object | 无 | 最外层扩展样式 |\n| tip | ReactNode | 无 | 提示信息 |\n| trim | boolean | false | trim 为 true 时，失去焦点时会自动删除空白字符。 |\n| type | string | 'text' | 同原生 input 标签的 type |\n| value | string \\| number | 无 | defaultValue 和 value 可以同时设置，defaultValue 会被value覆盖<br />在Form中，value会被表单接管，value无效 |\n| clearable | () => void \\| boolean | 无 | 可点击清空图标删除输入框内容，为函数式表示清空回调 |\n| coin | boolean | false | 以千位分隔符展示,仅当type为number时有效 |\n| info | (value: string) => string \\| number | 无 | 提示信息 |\n| popoverProps | object | 无 | 校验弹框接受的属性，具体属性参考Popover组件说明 |\n| maxLength | number | 无 | 可输入最大长度 |\n| forwardedRef | (el: HTMLElement) => void | 无 | 用户获取 input element |\n| underline | boolean | false | 是否只展示下边框 |\n| onKeyUp | (e: KeyboardEvent) => void | 无 | 键盘按下后弹起回调 |\n| onKeyDown | (e: KeyboardEvent) => void | 无 | 键盘按下后的回调 |\n| innerTitle | string | - | 内嵌标题 |\n| clearToUndefined | boolean | - | 点击清除按钮后数据变为 undefined |\n| integerLimit | number | - | 整数位限制(type 为 number 时生效)  |\n| digits | number | - | 小数位限制(type 为 number 时生效) |\n| numType | \"positive\" \\| \"non-negative\" | - | 设置数字类型(type 为 number 时生效) |\n| autoSelect | boolean | - | 鼠标点击自动选中所有内容 |\n| autoFix | boolean | - | 失焦后自动按照 digits 精度限制补足 (type 为 number 时生效) |\n\n### Input.Number\n\n基本 API 和上表相同，特定的 API 如下：\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| max | number | 无 | 最大值 |\n| min | number | 无 | 最小值 |\n| step | number | 1 | 改变数字跨度，可为小数 |\n| allowNull | boolean | false | 允许空值 |\n| hideArrow | boolean | false | 是否展示增减按钮 |\n| coin | boolean | false | 以千位分隔符展示 |\n\n"},911:function(e,n){e.exports="# Input\n\n<example />\n\n## API\n\n### Input\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| defaultValue | string \\| number | - | Default value |\n| delay | number | 400 | User input triggers the onChange and to check interval, unit: ms.|\n| name | string | none | The name of Form which access data |\n| onChange | (value: string) => void | - | The callback function when the value is changing |\n| onEnterPress | (value: string) => void | - | The callback function for enter key |\n| placeholder | string | - | Same as the native input tag |\n| popover | 'top-left' \\| 'top' \\| 'top-right' \\| 'bottom-left' \\| 'bottom' \\| 'bottom-right' | none | The position where the text pop up |\n| size | 'large' \\| 'default' \\| 'small' | 'default' | size of input |\n| style | object | - | Container element style |\n| tip | ReactNode | none | Prompt information |\n| trim | boolean | false | When trim is true, blank characters are automatically deleted when lose focus。 |\n| type | string | 'text' | Same as the type of the native input tag |\n| value | string \\| number | - | The defaultValue and value can be set at the same time and defaultValue will be overridden by value<br />In the Form, the value will be taken over by the form and the value will lose efficacy. |\n| clearable | () => void \\| boolean | false | Remove content of the input when clicking the clear icon, clear event function |\n| coin | boolean | false | Show as thousands separator, valid only when type is 'number' |\n| info | (value: string) => string \\| number | - | Infomation |\n| popoverProps | object | none | Vilidate popup properties, specific properties refer to Popover component description |\n| maxLength | number | none | input max length |\n| forwardedRef | (el: HTMLElement) => void | none | get input element |\n| underline | boolean | false | only display border bottom  |\n| onKeyUp | (e: KeyboardEvent) => void | none | callback with key up |\n| onKeyDown | (e: KeyboardEvent) => void | none | callback with key down |\n| innerTitle | string | - | inner title |\n| clearToUndefined | boolean | - | After clicking the clear button, the data becomes undefined |\n| integerLimit | number | - | Integer bit limit (valid when type is number) |\n| digits | number | - | Decimal place limit (valid when type is number) |\n| numType | \"positive\" \\| \"non-negative\" | - | set number type (valid when type is number) |\n| autoSelect | boolean | - | Mouse click to automatically select everything |\n| autoFix | boolean | - | Automatically fill up according to the precision limit of digits after out of focus (valid when type is number) |\n### Input.Number\n\nThe basic API is the same as the above table, and the specific API is as follows:\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| max | number | - | The maximum value |\n| min | number | - | The minimum value|\n| step | number | 1 | Change the digital span. It can be decimal. |\n| allowNull | boolean | false | allow value is null |\n| hideArrow | boolean | false | Whether to show increase/decrease buttons |\n| coin | boolean | false | Show as thousands separator |\n"},912:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(127);n.default=function(){return r.a.createElement(l.a,{placeholder:"input something"})}},913:function(e,n){e.exports="/**\n * cn - 基本用法\n *    -- Input 通常需要和其他的组件配合使用，所以默认的宽度是 100%，默认 display 为 block\n *    -- 如果设置了 style.width，默认 display 为 inline-flex\n * en - Base\n *    -- Input usually needs to be used with other components, so the default width is 100% and the default display is block.\n *    -- If the style.width is set, the default display is inline-flex.\n */\nimport React from 'react'\nimport { Input } from 'shineout'\n\nexport default function() {\n  return <Input placeholder=\"input something\" />\n}\n"},914:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(127),o={width:120,marginInlineEnd:12};n.default=function(){return r.a.createElement("div",null,r.a.createElement(l.a,{size:"small",style:o,placeholder:"small size"}),r.a.createElement(l.a,{style:o,placeholder:"default size"}),r.a.createElement(l.a,{size:"large",style:o,placeholder:"large size"}))}},915:function(e,n){e.exports='/**\n * cn - 大小\n *    -- 提供了三种尺寸的输入框，small、default、large\n * en - Size\n *    -- There are three size of input, small, default, large.\n */\nimport React from \'react\'\nimport { Input } from \'shineout\'\n\nconst style = { width: 120, marginInlineEnd: 12 }\n\nexport default function() {\n  return (\n    <div>\n      <Input size="small" style={style} placeholder="small size" />\n      <Input style={style} placeholder="default size" />\n      <Input size="large" style={style} placeholder="large size" />\n    </div>\n  )\n}\n'},916:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(127),o={marginBottom:12};n.default=function(){return r.a.createElement("div",{style:{width:300}},r.a.createElement(l.a,{style:o,type:"number",placeholder:"digits undefined"}),r.a.createElement(l.a,{style:o,digits:0,type:"number",placeholder:"digits 0",clearable:!0}),r.a.createElement(l.a,{style:o,digits:1,type:"number",placeholder:"digits 1",clearable:!0}),r.a.createElement(l.a,{style:o,digits:2,type:"number",placeholder:"digits 2",clearable:!0}),r.a.createElement(l.a,{style:o,autoFix:!0,digits:3,type:"number",placeholder:"digits 3; autoFix",clearable:!0}),r.a.createElement(l.a,{style:o,type:"number",integerLimit:3,placeholder:"integerLimit 3",clearable:!0}),r.a.createElement(l.a,{style:o,numType:"positive",integerLimit:3,type:"number",placeholder:"positive;integerLimit 3"}),r.a.createElement(l.a,{style:o,numType:"non-negative",type:"number",placeholder:"non-negative"}))}},917:function(e,n){e.exports='/**\n * cn - 数字\n *    -- type 为 number 时，输入时会做一次校验，禁止输入非数字类型字符\n *    -- 设置 digits 属性限制小数位数\n *    -- 设置 integerLimit 属性限制整数位数\n *    -- 设置 numType 来限制格式, 支持 \'positive\' 和 \'non-negative\'\n * en - Number\n *    -- When type is number, it is forbidden to input non-numeric characters, and the number of decimal places is limited according to the digits property\n *    -- set the digits property to limit the number of decimal places\n *    -- Set the integerLimit property to limit the number of integer digits\n *    -- set numType to limit the format of Number, support \'positive\' and \'non-negative\'\n */\nimport React from \'react\'\nimport { Input } from \'shineout\'\n\nconst style = { marginBottom: 12 }\n\nexport default function() {\n  return (\n    <div style={{ width: 300 }}>\n      <Input style={style} type="number" placeholder="digits undefined" />\n      <Input style={style} digits={0} type="number" placeholder="digits 0" clearable />\n      <Input style={style} digits={1} type="number" placeholder="digits 1" clearable />\n      <Input style={style} digits={2} type="number" placeholder="digits 2" clearable />\n      <Input style={style} autoFix digits={3} type="number" placeholder="digits 3; autoFix" clearable />\n      <Input style={style} type="number" integerLimit={3} placeholder="integerLimit 3" clearable />\n      <Input style={style} numType="positive" integerLimit={3} type="number" placeholder="positive;integerLimit 3" />\n      <Input style={style} numType="non-negative" type="number" placeholder="non-negative" />\n    </div>\n  )\n}\n'},918:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(127),o={width:120,marginInlineEnd:12};n.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a.Number,{style:o,width:120,min:23,max:100,digits:0}))}},919:function(e,n){e.exports="/**\n * cn -\n *  . -- Input.Number 组件，可以通过鼠标和上下键辅助输入\n * en -\n *  . -- Input.Number component can be assisted by mouse and up and down keyboard.\n */\nimport React from 'react'\nimport { Input } from 'shineout'\n\nconst style = { width: 120, marginInlineEnd: 12 }\n\nexport default function() {\n  return (\n    <>\n      <Input.Number style={style} width={120} min={23} max={100} digits={0} />\n    </>\n  )\n}\n"},920:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(127),o=t(67),i=t(185),u={width:300,marginBottom:12};n.default=function(){return r.a.createElement("div",null,r.a.createElement(l.a.Group,{style:u},r.a.createElement(i.a,{name:"user"}),r.a.createElement(l.a,{placeholder:"first name"}),"-",r.a.createElement(l.a,{placeholder:"last name"})),r.a.createElement(l.a.Group,{style:u},r.a.createElement(l.a,{placeholder:"search text"}),r.a.createElement(o.a,{text:!0},r.a.createElement(i.a,{name:"search"}))),r.a.createElement(l.a.Group,{style:u},r.a.createElement(l.a,{style:{flex:1},placeholder:"flex 1"}),r.a.createElement(l.a,{style:{flex:3},placeholder:"flex 3"})),r.a.createElement(l.a.Group,{style:u},r.a.createElement(l.a,{placeholder:"search text"}),r.a.createElement(o.a,{type:"primary"},"Search")),r.a.createElement(l.a.Group,{size:"small",style:u},r.a.createElement("b",null,r.a.createElement(i.a,{name:"envelope"})),r.a.createElement(l.a,{placeholder:"email"}),r.a.createElement("b",null,".com")))}},921:function(e,n){e.exports='/**\n * cn - 组合\n *  . -- Icon, span, string, Button 类型可以直接放入 Input.Group 中。需要背景色可以放在 b 标签中。\n * en - Group\n *  . -- The Icon, span, string and Button types can be placed directly into the Input.Group. Use b tag can change the background color.\n */\nimport React from \'react\'\nimport { Button, Input } from \'shineout\'\nimport FontAwesome from \'../Icon/FontAwesome\'\n\nconst style = { width: 300, marginBottom: 12 }\n\nexport default function() {\n  return (\n    <div>\n      <Input.Group style={style}>\n        <FontAwesome name="user" />\n        <Input placeholder="first name" />\n        -\n        <Input placeholder="last name" />\n      </Input.Group>\n\n      <Input.Group style={style}>\n        <Input placeholder="search text" />\n        <Button text>\n          <FontAwesome name="search" />\n        </Button>\n      </Input.Group>\n\n      <Input.Group style={style}>\n        <Input style={{ flex: 1 }} placeholder="flex 1" />\n        <Input style={{ flex: 3 }} placeholder="flex 3" />\n      </Input.Group>\n\n      <Input.Group style={style}>\n        <Input placeholder="search text" />\n        <Button type="primary">Search</Button>\n      </Input.Group>\n\n      <Input.Group size="small" style={style}>\n        <b>\n          <FontAwesome name="envelope" />\n        </b>\n        <Input placeholder="email" />\n        <b>.com</b>\n      </Input.Group>\n    </div>\n  )\n}\n'},922:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(127),o=t(185),i={marginBottom:12};n.default=function(){return r.a.createElement("div",{style:{width:300}},r.a.createElement(l.a,{style:i,placeholder:"email",tip:"enter you email.",popover:"top-left"}),r.a.createElement(l.a.Group,{style:i,tip:"enter you email."},r.a.createElement(o.a,{name:"envelope"}),r.a.createElement(l.a,{placeholder:"email"})),r.a.createElement(l.a.Group,{style:i},r.a.createElement(o.a,{name:"envelope"}),r.a.createElement(l.a,{tip:"enter you email.",placeholder:"email"})))}},923:function(e,n){e.exports='/**\n * cn - 提示文字\n *    -- 在 input 上设置的 tip 在 focus 时弹出\n * en - Tip\n *    -- The tip set on input pops up when it is focused.\n */\nimport React from \'react\'\nimport { Input } from \'shineout\'\nimport FontAwesome from \'../Icon/FontAwesome\'\n\nconst style = { marginBottom: 12 }\n\nexport default function() {\n  return (\n    <div style={{ width: 300 }}>\n      <Input style={style} placeholder="email" tip="enter you email." popover="top-left" />\n\n      <Input.Group style={style} tip="enter you email.">\n        <FontAwesome name="envelope" />\n        <Input placeholder="email" />\n      </Input.Group>\n\n      <Input.Group style={style}>\n        <FontAwesome name="envelope" />\n        <Input tip="enter you email." placeholder="email" />\n      </Input.Group>\n    </div>\n  )\n}\n'},924:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(146),o=t(127),i=new l.b;n.default=function(){return r.a.createElement(o.a,{placeholder:"email",rules:[i.required],tip:"Email, required",popover:"top-left",width:300})}},925:function(e,n){e.exports='/**\n * cn - 校验\n *    -- 设置了 rules，会自动校验输入数据，设置了 popover 会在指定位置弹出\n *    -- 如果没有设置 popover，不会弹出错误提示。\n *    -- 有错误时，提示框不会隐藏。\n * en - Validate\n *    -- When the rules property is set, it will automatically verify the input data. When the popover property is set, it will pop up at the specified location.\n *    -- If the popover property is not set, no error message will pop up.\n *    -- If input is invalid, the message will not be hidden.\n */\nimport React from \'react\'\nimport { Input, Rule } from \'shineout\'\n\nconst rules = new Rule()\n\nexport default function() {\n  return <Input placeholder="email" rules={[rules.required]} tip="Email, required" popover="top-left" width={300} />\n}\n'},926:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(127),o={width:300,marginBottom:12};n.default=function(){return r.a.createElement("div",null,r.a.createElement(l.a.Group,{disabled:!0,style:o},r.a.createElement(l.a,{placeholder:"first name"}),"-",r.a.createElement(l.a,{placeholder:"last name"})),r.a.createElement(l.a,{disabled:!0,style:o,placeholder:"disabled input"}))}},927:function(e,n){e.exports='/**\n * cn - 禁用\n *    -- 设置 disabled 属性禁用组件\n * en - Disabled\n *    -- Set the disabled property to disable the component.\n */\nimport React from \'react\'\nimport { Input } from \'shineout\'\n\nconst style = { width: 300, marginBottom: 12 }\n\nexport default function() {\n  return (\n    <div>\n      <Input.Group disabled style={style}>\n        <Input placeholder="first name" />\n        -\n        <Input placeholder="last name" />\n      </Input.Group>\n\n      <Input disabled style={style} placeholder="disabled input" />\n    </div>\n  )\n}\n'},928:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(127);n.default=function(){return r.a.createElement(l.a.Password,{placeholder:"input password"})}},929:function(e,n){e.exports="/**\n * cn - 密码\n *    -- Input.Password 模拟密码输入框，用来阻止 Chrome 提示记住密码。\n * en - Password\n *    -- Input.Password is a mock input of type 'password', used for disable Chrome autofill.\n */\nimport React from 'react'\nimport { Input } from 'shineout'\n\nexport default function() {\n  return <Input.Password placeholder=\"input password\" />\n}\n"},930:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(127);n.default=function(){return r.a.createElement(l.a,{clearable:!0,placeholder:"input something"})}},931:function(e,n){e.exports="/**\n * cn - 允许删除\n *    -- Input 允许删除\n * en -  allow clear\n *    -- Input allow clear\n */\nimport React from 'react'\nimport { Input } from 'shineout'\n\nexport default function() {\n  return <Input clearable placeholder=\"input something\" />\n}\n"},932:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(127);n.default=function(){return r.a.createElement(l.a,{underline:!0,clearable:!0,placeholder:"Underline"})}},933:function(e,n){e.exports="/**\n * cn - 下边框\n *    -- 使用 underline 属性设置仅展示下边框\n * en -  Underline\n *    -- Use the underline property make only the bottom border display\n */\nimport React from 'react'\nimport { Input } from 'shineout'\n\nexport default function() {\n  return <Input underline clearable placeholder=\"Underline\" />\n}\n"},934:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(127);n.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{innerTitle:"input something",clearable:!0}),r.a.createElement(l.a.Group,{style:{marginTop:12}},r.a.createElement(l.a,{innerTitle:"please input your email"}),r.a.createElement("b",null,".com")))}},935:function(e,n){e.exports="/**\n /**\n * cn - 内嵌标题\n *    -- 使用 innerTitle 展示内嵌标题\n * en - inner title\n *    -- use innerTitle to display the inner title\n */\nimport React from 'react'\nimport { Input } from 'shineout'\n\nexport default function() {\n  return (\n    <>\n      <Input innerTitle=\"input something\" clearable />\n      <Input.Group style={{ marginTop: 12 }}>\n        <Input innerTitle=\"please input your email\" />\n        <b>.com</b>\n      </Input.Group>\n    </>\n  )\n}\n"},936:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(127);n.default=function(){return r.a.createElement(l.a,{placeholder:"input something",autoSelect:!0})}},937:function(e,n){e.exports="/**\n * cn - 自动选中\n *    -- 使用 autoSelect 聚焦后自动选中文本\n * en - auto select\n *    -- Use autoSelect to automatically select text after focusing\n */\nimport React from 'react'\nimport { Input } from 'shineout'\n\nexport default function() {\n  return <Input placeholder=\"input something\" autoSelect />\n}\n"},938:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(127);n.default=function(){return r.a.createElement(l.a,{placeholder:"input something",trim:!0})}},939:function(e,n){e.exports="/**\n * cn - 清除空格\n *    -- trim 为 true 时，失去焦点时会自动删除空白字符。\n * en - Clear space\n *    -- When trim is true, blank characters are automatically deleted when lose focus\n */\nimport React from 'react'\nimport { Input } from 'shineout'\n\nexport default function() {\n  return <Input placeholder=\"input something\" trim />\n}\n"}}]);