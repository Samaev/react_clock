(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),o=n.n(c),a=n(2),i=n(3),l=n(5),r=n(4),s=n(1),u=n(0),d=function(t){Object(l.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={date:new Date},t.timerId=0,t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=window.setInterval((function(){var e=t.state.date;e=new Date,t.setState({date:e}),console.log(e.toLocaleTimeString())}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId),console.log("GAME OVER")}},{key:"render",value:function(){var t=this.state.date,e=this.props.clockName;return Object(u.jsxs)("div",{className:"clock",children:[Object(u.jsx)("strong",{children:e})," time is ",t.toLocaleTimeString()]})}}]),n}(s.Component),m=(n(13),function(){var t=Math.random().toString().slice(2,6);return"Clock-".concat(t)}),h=function(t){Object(l.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={hasClock:!0,clockName:m()},t.timerId=0,t.handleRightButtonClick=function(){t.setState({hasClock:!1}),clearInterval(t.timerId)},t.handleLeftButtonClick=function(){t.setState({hasClock:!0}),t.timerId=window.setInterval(t.getNewClockName,3300)},t.getNewClockName=function(){t.setState({clockName:m()})},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.timerId=window.setInterval(this.getNewClockName,3300),document.addEventListener("contextmenu",this.handleRightButtonClick),document.addEventListener("contextmenu",(function(t){return t.preventDefault()})),document.addEventListener("click",this.handleLeftButtonClick)}},{key:"componentDidUpdate",value:function(t){t.clockName!==this.state.clockName&&console.log("Renamed from ".concat(t.clockName," to ").concat(this.state.clockName))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.handleLeftButtonClick),document.removeEventListener("contextmenu",this.handleRightButtonClick),clearInterval(this.timerId),console.log("GAME OVER")}},{key:"render",value:function(){var t=this.state.hasClock;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"React clock"}),t&&Object(u.jsx)(d,{clockName:this.state.clockName})]})}}]),n}(s.Component),k=h;o.a.render(Object(u.jsx)(k,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.1c44f233.chunk.js.map