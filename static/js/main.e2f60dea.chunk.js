(this.webpackJsonpcounters=this.webpackJsonpcounters||[]).push([[0],{18:function(e,t,n){e.exports=n(31)},23:function(e,t,n){},24:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),o=n.n(c),l=(n(23),n(4)),u=n(5),s=n(8),i=n(6),d=n(9),p=(n(24),n(2)),m="INCREMENT",b="DECREMENT",v="DELETE",f="RESET",h="GET_COUNTERS";var E=Object(p.b)((function(e){return{counters:e.counters}}))((function(e){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("h1",{className:"text-right"},"Total counters - \xa0",r.a.createElement("span",{className:"badge badge-secondary"},e.counters.counters.length))," ","\xa0 \xa0",r.a.createElement("button",{type:"button",className:"btn btn-success",onClick:function(){e.dispatch({type:f})}},"Reset")),r.a.createElement("hr",null))})),y=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).getBadgeClass=function(){return 0!==n.props.counter.value?"badge badge-pill badge-primary":"badge badge-pill badge-warning"},n.getCounterValue=function(){return 0===n.props.counter.value?"Zero":n.props.counter.value},n.getDisabledState=function(){return 0===n.props.counter.value},n.handleIncrement=function(e){n.props.dispatch({type:m,payload:{counterId:e}})},n.handleDecrement=function(e){n.props.dispatch({type:b,payload:{counterId:e}})},n.counterDelete=function(e){n.props.dispatch({type:v,payload:{counterId:e}})},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col-sm-3 col-md-1"},r.a.createElement("h4",null,r.a.createElement("span",{className:this.getBadgeClass()},this.getCounterValue()))),r.a.createElement("div",{className:"col col-sm-2 col-md-1"},r.a.createElement("button",{onClick:function(){return e.handleIncrement(e.props.counter)},type:"button",className:"btn btn-success"},"+")),r.a.createElement("div",{className:"col col-sm-2 col-md-1"},r.a.createElement("button",{onClick:function(){return e.handleDecrement(e.props.counter)},type:"button",className:"btn btn-secondary",disabled:this.getDisabledState()},"-")),r.a.createElement("div",{className:"col col-sm-2 col-md-1"},r.a.createElement("button",{type:"button",onClick:function(){return e.counterDelete(e.props.counter)},className:"btn btn-danger"},"x")),r.a.createElement("div",{className:"col col-sm-3 col-md-2"},r.a.createElement("h4",null,"Counters ",this.props.counter.id))),r.a.createElement("br",null))}}]),t}(a.Component);var O=Object(p.b)((function(e){return{counters:e.counters}}))(y),g=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container card border-primary"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title "},"Counters under Redux"),r.a.createElement("hr",null),r.a.createElement("div",{className:"card-text"},this.props.counters.counters.map((function(e){return r.a.createElement(O,{key:e.id,counter:e})})))))}}]),t}(a.Component);var j=Object(p.b)((function(e){return{counters:e.counters}}))(g),N=(n(30),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,null),r.a.createElement(j,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=n(7),C=n(17),k=n(14);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){Object(C.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x={counters:[{id:1,value:0},{id:2,value:1},{id:3,value:2},{id:4,value:3}]};var P=Object(w.b)({counters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:var n=(a=Object(k.a)(e.counters)).indexOf(t.payload.counterId);return a[n]=I({},t.payload.counterId),a[n].value++,I({},e,{counters:a});case b:n=(a=Object(k.a)(e.counters)).indexOf(t.payload.counterId);return a[n]=I({},t.payload.counterId),0!==a[n].value&&a[n].value--,I({},e,{counters:a});case v:var a=e.counters.filter((function(e){return e.id!==t.payload.counterId.id}));return I({},e,{counters:a});case f:a=e.counters.map((function(e){return e.value=0,e}));return I({},e,{counters:a});case h:default:return e}}});var T=Object(w.c)(P);o.a.render(r.a.createElement(p.a,{store:T},r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.e2f60dea.chunk.js.map