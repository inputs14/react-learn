(this.webpackJsonpcounters=this.webpackJsonpcounters||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),s=(n(15),n(9)),l=n(6),u=n(1),i=n(2),m=n(4),p=n(3),b=n(5),d=(n(16),function(e){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("h1",{className:"text-right"},"Total counters - \xa0",r.a.createElement("span",{className:"badge badge-secondary"},e.totalCounters))," ","\xa0 \xa0",r.a.createElement("button",{type:"button",className:"btn btn-success",onClick:function(){return e.onReset()}},"Reset")),r.a.createElement("hr",null))}),h=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).getBadgeClass=function(){return 0!==n.props.counter.value?"badge badge-pill badge-primary":"badge badge-pill badge-warning"},n.getCounterValue=function(){return 0===n.props.counter.value?"Zero":n.props.counter.value},n.getDisabledState=function(){return 0===n.props.counter.value},n}return Object(b.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col-md-1 col-sm-3"},r.a.createElement("h4",null,r.a.createElement("span",{className:this.getBadgeClass()},this.getCounterValue()))),r.a.createElement("div",{className:"col col-md-1 col-sm-2"},r.a.createElement("button",{onClick:function(){return e.props.onIncrement(e.props.counter)},type:"button",className:"btn btn-success"},"+")),r.a.createElement("div",{className:"col col-md-1 col-sm-2"},r.a.createElement("button",{onClick:function(){return e.props.onDecrement(e.props.counter)},type:"button",className:"btn btn-secondary",disabled:this.getDisabledState()},"-")),r.a.createElement("div",{className:"col col-md-1 col-sm-2"},r.a.createElement("button",{type:"button",onClick:function(){return e.props.onDelete(e.props.counter)},className:"btn btn-danger"},"x")),r.a.createElement("div",{className:"col col-md-2 col-sm-3"},r.a.createElement("h4",null,"Counters ",this.props.counter.id))),r.a.createElement("br",null))}}]),t}(a.Component),v=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container card border-primary"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title "},"Counters"),r.a.createElement("hr",null),r.a.createElement("div",{className:"card-text"},this.props.counters.map((function(t){return r.a.createElement(h,{key:t.id,counter:t,onIncrement:e.props.onIncrement,onDecrement:e.props.onDecrement,onDelete:e.props.onDelete})})))))}}]),t}(a.Component);n(17);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={counters:[{id:1,value:0},{id:2,value:1},{id:3,value:2},{id:4,value:3}]},n.handleIncrement=function(e){var t=Object(l.a)(n.state.counters),a=t.indexOf(e);t[a]=g({},e),t[a].value++,n.setState({counters:t})},n.handleDecrement=function(e){var t=Object(l.a)(n.state.counters),a=t.indexOf(e);t[a]=g({},e),0!==t[a].value&&t[a].value--,n.setState({counters:t})},n.counterDelete=function(e){var t=n.state.counters.filter((function(t){return t.id!==e.id}));n.setState({counters:t})},n.handleReset=function(){var e=n.state.counters.map((function(e){return e.value=0,e}));n.setState({counters:e})},n}return Object(b.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{totalCounters:this.state.counters.length,onReset:this.handleReset}),r.a.createElement(v,{counters:this.state.counters,onIncrement:this.handleIncrement,onDecrement:this.handleDecrement,onDelete:this.counterDelete}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.e08280df.chunk.js.map