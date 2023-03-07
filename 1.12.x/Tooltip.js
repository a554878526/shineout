(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[50],{1990:function(t,e,n){"use strict";n.r(e);var o=n(0),i=n.n(o),r=n(564),l=n(565),a=n(40),c=n(1991),p=n.n(c),s=n(1992),m=n.n(s),d=Object(a.b)(p.a,m.a),f=[{name:"1-base",isTs:!0,isTest:!1,title:Object(a.b)("基本用法 \n 内置了四个弹出方向","Base \n There are four pop-up directions built in."),component:n(1993).default,rawText:n(1994),parseTsText:n(1995)},{name:"2-click",isTs:!0,isTest:!1,title:Object(a.b)("点击触发 \n 默认触发事件为 hover，如果需要点击触发，可以设置 trigger 为 click","Click \n Set the trigger property to change the trigger event to 'click'."),component:n(1996).default,rawText:n(1997),parseTsText:n(1998)},{name:"3-disabled-inner",isTs:!0,isTest:!1,title:Object(a.b)("禁用元素 \n 设置 disabledChild 来使内部禁用的元素正常工作","Disabled \n Set disabledChild make disabled child work"),component:n(1999).default,rawText:n(2e3),parseTsText:n(2001)},{name:"test-001-scroll",isTs:!0,isTest:!0,title:Object(a.b)("在 Scroll 中滚动会自动Tooltip更新位置 \n Scroll 中滚动","在 Scroll 中滚动会自动Tooltip更新位置 \n Scroll 中滚动"),component:n(2002).default,rawText:n(2003),parseTsText:n(2004)}];e.default=Object(r.a)(function(t){return i.a.createElement(l.b,Object.assign({},t,{codes:void 0,source:d,examples:f}))})},1991:function(t,e){t.exports="# Tooltip *提示*\n\nTooltip 主要用来显示文字提示，如果需要显示更多内容，请使用 [Popover](/components/Popover)\n\n<example />\n\n## API\n\n### Tooltip\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| animation | boolean | true | 弹出是否使用动画，默认为 true |\n| className | string | 无 | 扩展className |\n| children | ReactNode | 必填 | 子元素只能为一个 ReactElement |\n| position | 'left' \\| 'top' \\| 'right' \\| 'bottom' | 'top' | 弹出层位置 |\n| style | object | 无 | 最外层扩展样式 |\n| tip | ReactNode | 必填 | 弹出文字 | \n| trigger| string | \"hover\" | 弹出方式, 可选值: \\[\"hover\", \"click\"]|\n| disabledChild | boolean | false | 使被禁用的元素正常显示提示 |\n\n\n## 注意\n请确保 Popover 的父元素能接受 onMouseEnter、onMouseLeave、onFocus、onClick 事件。\n"},1992:function(t,e){t.exports="# Tooltip\n\nTooltip is used to display text prompts, and if you need to more content, use [Popover](/components/Popover).\n\n<example />\n\n## API\n\n### Tooltip\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| animation | boolean | true | use animation |\n| className | string | none | Extend className |\n| children | ReactNode | required | The child element can only be a ReactElement. |\n| position | 'left' \\| 'top' \\| 'right' \\| 'bottom' | 'top' | The position of the pop-up layer, options: \\['left', 'top', 'right', 'bottom'] |\n| style | object | null | extend style |\n| tip | ReactNode | required | Pop up texts |\n| trigger| string | \"hover\" | Pop-up type, one of  \\[\"hover\", \"click\"]\n| disabledChild | boolean | false | make disabled element work |\n\n\n### TooltipNote\nPlease ensure that the parent node of `Popover` accepts `onMouseEnter`, `onMouseLeave`, `onFocus`, `onClick` events.\n"},1993:function(t,e,n){"use strict";n.r(e);var o=n(0),i=n.n(o),r=n(328),l=n(185),a={fontSize:20,lineHeight:1,margin:4};e.default=function(){return i.a.createElement("div",null,i.a.createElement(r.a,{tip:"Some text.",position:"left"},i.a.createElement(l.a,{name:"arrow-circle-o-left",style:a})),i.a.createElement(r.a,{tip:"Some text.",position:"top"},i.a.createElement(l.a,{name:"arrow-circle-o-up",style:a})),i.a.createElement(r.a,{tip:"Some text.",position:"bottom"},i.a.createElement(l.a,{name:"arrow-circle-o-down",style:a})),i.a.createElement(r.a,{tip:"Some text.",position:"right"},i.a.createElement(l.a,{name:"arrow-circle-o-right",style:a})))}},1994:function(t,e){t.exports='/**\n * cn - 基本用法\n *    -- 内置了四个弹出方向\n * en - Base\n *    -- There are four pop-up directions built in.\n */\nimport React from \'react\'\nimport { Tooltip } from \'shineout\'\nimport FontAwesome from \'../Icon/FontAwesome\'\n\nconst fontStyle = { fontSize: 20, lineHeight: 1, margin: 4 }\n\nconst App: React.FC = () => (\n  <div>\n    <Tooltip tip="Some text." position="left">\n      <FontAwesome name="arrow-circle-o-left" style={fontStyle} />\n    </Tooltip>\n    <Tooltip tip="Some text." position="top">\n      <FontAwesome name="arrow-circle-o-up" style={fontStyle} />\n    </Tooltip>\n    <Tooltip tip="Some text." position="bottom">\n      <FontAwesome name="arrow-circle-o-down" style={fontStyle} />\n    </Tooltip>\n    <Tooltip tip="Some text." position="right">\n      <FontAwesome name="arrow-circle-o-right" style={fontStyle} />\n    </Tooltip>\n  </div>\n)\nexport default App\n'},1995:function(t,e){t.exports='/**\n * cn - 基本用法\n *    -- 内置了四个弹出方向\n * en - Base\n *    -- There are four pop-up directions built in.\n */\nimport React from \'react\';\nimport { Tooltip } from \'shineout\';\nimport FontAwesome from \'../Icon/FontAwesome\';\nconst fontStyle = { fontSize: 20, lineHeight: 1, margin: 4 };\nconst App = () => (<div>\n    <Tooltip tip="Some text." position="left">\n      <FontAwesome name="arrow-circle-o-left" style={fontStyle}/>\n    </Tooltip>\n    <Tooltip tip="Some text." position="top">\n      <FontAwesome name="arrow-circle-o-up" style={fontStyle}/>\n    </Tooltip>\n    <Tooltip tip="Some text." position="bottom">\n      <FontAwesome name="arrow-circle-o-down" style={fontStyle}/>\n    </Tooltip>\n    <Tooltip tip="Some text." position="right">\n      <FontAwesome name="arrow-circle-o-right" style={fontStyle}/>\n    </Tooltip>\n  </div>);\nexport default App;\n'},1996:function(t,e,n){"use strict";n.r(e);var o=n(0),i=n.n(o),r=n(328),l=n(185),a={fontSize:20,lineHeight:1,margin:4};e.default=function(){return i.a.createElement("div",null,i.a.createElement(r.a,{tip:"Some text.",trigger:"click",position:"left"},i.a.createElement(l.a,{name:"arrow-circle-o-left",style:a})),i.a.createElement(r.a,{tip:"Some text.",trigger:"click",position:"top"},i.a.createElement(l.a,{name:"arrow-circle-o-up",style:a})),i.a.createElement(r.a,{tip:"Some text.",trigger:"click",position:"bottom",style:{width:"200px"}},i.a.createElement(l.a,{name:"arrow-circle-o-down",style:a})),i.a.createElement(r.a,{tip:"Some text.",trigger:"click",position:"right"},i.a.createElement(l.a,{name:"arrow-circle-o-right",style:a})))}},1997:function(t,e){t.exports='/**\n * cn - 点击触发\n *    -- 默认触发事件为 hover，如果需要点击触发，可以设置 trigger 为 click\n * en - Click\n *    -- Set the trigger property to change the trigger event to \'click\'.\n */\nimport React from \'react\'\nimport { Tooltip } from \'shineout\'\nimport FontAwesome from \'../Icon/FontAwesome\'\n\nconst fontStyle = { fontSize: 20, lineHeight: 1, margin: 4 }\n\nconst App: React.FC = () => (\n  <div>\n    <Tooltip tip="Some text." trigger="click" position="left">\n      <FontAwesome name="arrow-circle-o-left" style={fontStyle} />\n    </Tooltip>\n    <Tooltip tip="Some text." trigger="click" position="top">\n      <FontAwesome name="arrow-circle-o-up" style={fontStyle} />\n    </Tooltip>\n    <Tooltip tip="Some text." trigger="click" position="bottom" style={{ width: \'200px\' }}>\n      <FontAwesome name="arrow-circle-o-down" style={fontStyle} />\n    </Tooltip>\n    <Tooltip tip="Some text." trigger="click" position="right">\n      <FontAwesome name="arrow-circle-o-right" style={fontStyle} />\n    </Tooltip>\n  </div>\n)\nexport default App\n'},1998:function(t,e){t.exports='/**\n * cn - 点击触发\n *    -- 默认触发事件为 hover，如果需要点击触发，可以设置 trigger 为 click\n * en - Click\n *    -- Set the trigger property to change the trigger event to \'click\'.\n */\nimport React from \'react\';\nimport { Tooltip } from \'shineout\';\nimport FontAwesome from \'../Icon/FontAwesome\';\nconst fontStyle = { fontSize: 20, lineHeight: 1, margin: 4 };\nconst App = () => (<div>\n    <Tooltip tip="Some text." trigger="click" position="left">\n      <FontAwesome name="arrow-circle-o-left" style={fontStyle}/>\n    </Tooltip>\n    <Tooltip tip="Some text." trigger="click" position="top">\n      <FontAwesome name="arrow-circle-o-up" style={fontStyle}/>\n    </Tooltip>\n    <Tooltip tip="Some text." trigger="click" position="bottom" style={{ width: \'200px\' }}>\n      <FontAwesome name="arrow-circle-o-down" style={fontStyle}/>\n    </Tooltip>\n    <Tooltip tip="Some text." trigger="click" position="right">\n      <FontAwesome name="arrow-circle-o-right" style={fontStyle}/>\n    </Tooltip>\n  </div>);\nexport default App;\n'},1999:function(t,e,n){"use strict";n.r(e);var o=n(0),i=n.n(o),r=n(328),l=n(68);e.default=function(){return i.a.createElement("div",null,i.a.createElement(r.a,{tip:"Some text.",position:"left",disabledChild:!0},i.a.createElement(l.a,{disabled:!0},"Disabled")))}},2e3:function(t,e){t.exports="/**\n * cn - 禁用元素\n *    -- 设置 disabledChild 来使内部禁用的元素正常工作\n * en - Disabled\n *    -- Set disabledChild make disabled child work\n */\nimport React from 'react'\nimport { Tooltip, Button } from 'shineout'\n\nconst App: React.FC = () => (\n  <div>\n    <Tooltip tip=\"Some text.\" position=\"left\" disabledChild>\n      <Button disabled>Disabled</Button>\n    </Tooltip>\n  </div>\n)\nexport default App\n"},2001:function(t,e){t.exports="/**\n * cn - 禁用元素\n *    -- 设置 disabledChild 来使内部禁用的元素正常工作\n * en - Disabled\n *    -- Set disabledChild make disabled child work\n */\nimport React from 'react';\nimport { Tooltip, Button } from 'shineout';\nconst App = () => (<div>\n    <Tooltip tip=\"Some text.\" position=\"left\" disabledChild>\n      <Button disabled>Disabled</Button>\n    </Tooltip>\n  </div>);\nexport default App;\n"},2002:function(t,e,n){"use strict";n.r(e);var o=n(0),i=n.n(o),r=n(328),l=n(317),a=n(566),c=Object(a.b)(20),p=[{title:"id",render:"id",width:50},{title:"First Name",group:"Name",render:"firstName",width:120},{title:"Country",render:function(t){return i.a.createElement(r.a,{tip:"hello",trigger:"click"},i.a.createElement("span",{className:"self-country"},t.country))}},{title:"Position",render:"position"},{title:"Office",render:"office"},{title:"Start Date",render:"start"},{title:"Salary",fixed:"right",width:100,render:function(t){return"$".concat(t.salary.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,"))}}];e.default=function(){return i.a.createElement(l.a,{bordered:!0,fixed:"both",keygen:"id",width:1500,style:{height:300},columns:p,data:c})}},2003:function(t,e){t.exports="/**\n * cn - 在 Scroll 中滚动会自动Tooltip更新位置\n *    -- Scroll 中滚动\n * en - 在 Scroll 中滚动会自动Tooltip更新位置\n *    -- Scroll 中滚动\n */\nimport React from 'react'\nimport { Table, Tooltip, TYPE } from 'shineout'\nimport { fetchSync } from 'doc/data/user'\n\ninterface TableRowData {\n  id: number\n  time: string\n  start: string\n  height: number\n  salary: number\n  office: string\n  country: string\n  office5: string\n  position: string\n  lastName: string\n  firstName: string\n}\ntype TableColumnItem = TYPE.Table.ColumnItem<TableRowData>\n\nconst data: TableRowData[] = fetchSync(20)\n\nconst columns: TableColumnItem[] = [\n  { title: 'id', render: 'id', width: 50 },\n  {\n    title: 'First Name',\n    group: 'Name',\n    render: 'firstName',\n    width: 120,\n  },\n  {\n    title: 'Country',\n    render: d => (\n      <Tooltip tip=\"hello\" trigger=\"click\">\n        <span className=\"self-country\">{d.country}</span>\n      </Tooltip>\n    ),\n  },\n  { title: 'Position', render: 'position' },\n  { title: 'Office', render: 'office' },\n  { title: 'Start Date', render: 'start' },\n  {\n    title: 'Salary',\n    fixed: 'right',\n    width: 100,\n    render: d => `$${d.salary.toString().replace(/(\\d)(?=(\\d\\d\\d)+(?!\\d))/g, '$1,')}`,\n  },\n]\n\nconst App: React.FC = () => (\n  <Table bordered fixed=\"both\" keygen=\"id\" width={1500} style={{ height: 300 }} columns={columns} data={data} />\n)\n\nexport default App\n"},2004:function(t,e){t.exports="/**\n * cn - 在 Scroll 中滚动会自动Tooltip更新位置\n *    -- Scroll 中滚动\n * en - 在 Scroll 中滚动会自动Tooltip更新位置\n *    -- Scroll 中滚动\n */\nimport React from 'react';\nimport { Table, Tooltip } from 'shineout';\nimport { fetchSync } from 'doc/data/user';\nconst data = fetchSync(20);\nconst columns = [\n    { title: 'id', render: 'id', width: 50 },\n    {\n        title: 'First Name',\n        group: 'Name',\n        render: 'firstName',\n        width: 120,\n    },\n    {\n        title: 'Country',\n        render: d => (<Tooltip tip=\"hello\" trigger=\"click\">\n        <span className=\"self-country\">{d.country}</span>\n      </Tooltip>),\n    },\n    { title: 'Position', render: 'position' },\n    { title: 'Office', render: 'office' },\n    { title: 'Start Date', render: 'start' },\n    {\n        title: 'Salary',\n        fixed: 'right',\n        width: 100,\n        render: d => `$${d.salary.toString().replace(/(\\d)(?=(\\d\\d\\d)+(?!\\d))/g, '$1,')}`,\n    },\n];\nconst App = () => (<Table bordered fixed=\"both\" keygen=\"id\" width={1500} style={{ height: 300 }} columns={columns} data={data}/>);\nexport default App;\n"}}]);