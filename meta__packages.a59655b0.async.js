"use strict";(self.webpackChunkghooks=self.webpackChunkghooks||[]).push([[56],{8402:function(p,n,e){var u;e.r(n),e.d(n,{demos:function(){return m}});var l=e(90228),r=e.n(l),i=e(87999),v=e.n(i),o=e(75271),f=e(61130),I=e(88133),m={"packages-hooks-src-use-toggle-demo-demo1":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,86082))})),asset:{type:"BLOCK",id:"packages-hooks-src-use-toggle-demo-demo1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(56025).Z},react:{type:"NPM",value:"18.3.1"},ghooks:{type:"NPM",value:"1.0.0"}},entry:"index.tsx",title:"\u57FA\u7840\u7528\u6CD5"},context:{react:u||(u=e.t(o,2)),encodeHooks:I},renderOpts:{compile:function(){var d=v()(r()().mark(function g(){var s,c=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(754).then(e.bind(e,2754));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,c));case 3:case"end":return t.stop()}},g)}));function a(){return d.apply(this,arguments)}return a}()}},"packages-hooks-src-use-toggle-demo-demo2":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,54788))})),asset:{type:"BLOCK",id:"packages-hooks-src-use-toggle-demo-demo2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(60428).Z},react:{type:"NPM",value:"18.3.1"},ghooks:{type:"NPM",value:"1.0.0"}},entry:"index.tsx",title:"\u5728\u4EFB\u610F\u4E24\u4E2A\u503C\u4E4B\u95F4\u5207\u6362"},context:{react:u||(u=e.t(o,2)),encodeHooks:I},renderOpts:{compile:function(){var d=v()(r()().mark(function g(){var s,c=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(754).then(e.bind(e,2754));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,c));case 3:case"end":return t.stop()}},g)}));function a(){return d.apply(this,arguments)}return a}()}}}},88133:function(p,n,e){e.r(n),e.d(n,{useToggle:function(){return v}});var u=e(48305),l=e.n(u),r=e(75271);function i(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,f=arguments.length>1?arguments[1]:void 0,I=(0,r.useState)(o),m=l()(I,2),d=m[0],a=m[1],g=(0,r.useMemo)(function(){var s=f===void 0?!o:f,c=function(){return a(function(T){return T===o?s:o})},h=function(T){return a(T)},t=function(){return a(o)},y=function(){return a(s)};return{toggle:c,set:h,setLeft:t,setRight:y}},[]);return[d,g]}var v=i},7617:function(p,n,e){e.r(n),e.d(n,{texts:function(){return l}});var u=e(61130);const l=[{value:"\u7528\u4E8E\u5728\u4E24\u4E2A\u72B6\u6001\u503C\u95F4\u5207\u6362\u7684 Hook\u3002",paraId:0,tocIndex:0},{value:`const [state, { toggle, set, setLeft, setRight }] = useToggle(defaultValue?: boolean);

const [state, { toggle, set, setLeft, setRight }] = useToggle<T>(defaultValue: T);

const [state, { toggle, set, setLeft, setRight }] = useToggle<T, U>(defaultValue: T, reverseValue: U);
`,paraId:1,tocIndex:6},{value:"\u53C2\u6570",paraId:2,tocIndex:7},{value:"\u8BF4\u660E",paraId:2,tocIndex:7},{value:"\u7C7B\u578B",paraId:2,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:7},{value:"defaultValue",paraId:2,tocIndex:7},{value:"\u53EF\u9009\u9879\uFF0C\u4F20\u5165\u9ED8\u8BA4\u7684\u72B6\u6001\u503C",paraId:2,tocIndex:7},{value:"T",paraId:2,tocIndex:7},{value:"false",paraId:2,tocIndex:7},{value:"reverseValue",paraId:2,tocIndex:7},{value:"\u53EF\u9009\u9879\uFF0C\u4F20\u5165\u53D6\u53CD\u7684\u72B6\u6001\u503C",paraId:2,tocIndex:7},{value:"U",paraId:2,tocIndex:7},{value:"-",paraId:2,tocIndex:7},{value:"\u53C2\u6570",paraId:3,tocIndex:8},{value:"\u8BF4\u660E",paraId:3,tocIndex:8},{value:"\u7C7B\u578B",paraId:3,tocIndex:8},{value:"state",paraId:3,tocIndex:8},{value:"\u72B6\u6001\u503C",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"actions",paraId:3,tocIndex:8},{value:"\u64CD\u4F5C\u96C6\u5408",paraId:3,tocIndex:8},{value:"Actions",paraId:3,tocIndex:8},{value:"\u53C2\u6570",paraId:4,tocIndex:9},{value:"\u8BF4\u660E",paraId:4,tocIndex:9},{value:"\u7C7B\u578B",paraId:4,tocIndex:9},{value:"toggle",paraId:4,tocIndex:9},{value:"\u5207\u6362 state",paraId:4,tocIndex:9},{value:"() => void",paraId:4,tocIndex:9},{value:"set",paraId:4,tocIndex:9},{value:"\u4FEE\u6539 state",paraId:4,tocIndex:9},{value:"(state: T | U) => void",paraId:4,tocIndex:9},{value:"setLeft",paraId:4,tocIndex:9},{value:"\u8BBE\u7F6E\u4E3A defaultValue",paraId:4,tocIndex:9},{value:"() => void",paraId:4,tocIndex:9},{value:"setRight",paraId:4,tocIndex:9},{value:"\u5982\u679C\u4F20\u5165\u4E86 reverseValue, \u5219\u8BBE\u7F6E\u4E3A reverseValue\u3002 \u5426\u5219\u8BBE\u7F6E\u4E3A defaultValue \u7684\u53CD\u503C",paraId:4,tocIndex:9},{value:"() => void",paraId:4,tocIndex:9}]},56025:function(p,n){n.Z=`import React from 'react';
import { useToggle } from 'encodeHooks';

export default () => {
  const [state, { toggle, setLeft, setRight }] = useToggle();

  return (
    <div>
      <p>Effects\uFF1A{\`\${state}\`}</p>
      <p>
        <button type="button" onClick={toggle}>
          Toggle
        </button>
        <button type="button" onClick={setLeft} style={{ margin: '0 8px' }}>
          Toggle False
        </button>
        <button type="button" onClick={setRight}>
          Toggle True
        </button>
      </p>
    </div>
  );
};
`},60428:function(p,n){n.Z=`import React from 'react';
import { useToggle } from 'encodeHooks';

export default () => {
  const [state, { toggle, set, setLeft, setRight }] = useToggle('Hello', 'World');

  return (
    <div>
      <p>Effects\uFF1A{state}</p>
      <p>
        <button type="button" onClick={toggle}>
          Toggle
        </button>
        <button type="button" onClick={() => set('Hello')} style={{ margin: '0 8px' }}>
          Set Hello
        </button>
        <button type="button" onClick={() => set('World')}>
          Set World
        </button>
        <button type="button" onClick={setLeft} style={{ margin: '0 8px' }}>
          Set Left
        </button>
        <button type="button" onClick={setRight}>
          Set Right
        </button>
      </p>
    </div>
  );
};
`}}]);
