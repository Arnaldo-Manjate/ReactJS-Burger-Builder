(this["webpackJsonpburger-builder1"]=this["webpackJsonpburger-builder1"]||[]).push([[5],{102:function(e,r,t){},103:function(e,r,t){},107:function(e,r,t){"use strict";t.r(r);var n=t(3),a=t(4),o=t(5),c=t(6),s=t(0),i=t.n(s),u=(t(102),t(27)),l=(t(103),function(e){Object(c.a)(t,e);var r=Object(o.a)(t);function t(){var e;Object(n.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=r.call.apply(r,[this].concat(o))).convertDate=function(e){return new Date(e).toString().slice(0,15)},e}return Object(a.a)(t,[{key:"render",value:function(){var e=[];for(var r in this.props.ingredients)e.push({name:r,amount:this.props.ingredients[r]});var t=e.map((function(e){return i.a.createElement("span",{key:e.name,className:"Ingredients"},e.name,": ",e.amount)}));return i.a.createElement("div",{className:"Order"},i.a.createElement("p",null,"Ingredients :",t," "),i.a.createElement("p",null,"Price : ",i.a.createElement("strong",null,"R ",this.props.price)),i.a.createElement("p",null," Create Date : ",this.convertDate(this.props.createDate)))}}]),t}(s.Component)),p=t(32),d=t(25),h=t(11),m=t(12),f=function(e){Object(c.a)(t,e);var r=Object(o.a)(t);function t(){var e;Object(n.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=r.call.apply(r,[this].concat(o))).state={},e}return Object(a.a)(t,[{key:"componentDidMount",value:function(){this.props.onFetchOrders(this.props.token,this.props.userId)}},{key:"render",value:function(){var e=i.a.createElement("h2",{className:"NoOrders"},"You have No Orders ",i.a.createElement("br",null),"Navigate to the Burger Builder screen to place an Order");return this.props.loading?e=i.a.createElement(d.a,null):this.props.orders.length>0&&(e=this.props.orders.map((function(e){return i.a.createElement(l,{key:e.createDate,price:e.price,createDate:e.createDate,ingredients:e.ingredients})}))),this.props.error&&(e=[]),i.a.createElement("div",{className:"Orders"},e)}}]),t}(s.Component);r.default=Object(m.b)((function(e){return{orders:e.order.orders,error:e.order.error,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onFetchOrders:function(r,t){return e(h.h(r,t))}}}))(Object(p.a)(f,u.a))}}]);
//# sourceMappingURL=5.d4ef32f6.chunk.js.map