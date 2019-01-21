(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{162:function(e,t,a){e.exports=a(331)},170:function(e,t,a){},178:function(e,t,a){},180:function(e,t,a){},182:function(e,t,a){},184:function(e,t,a){},186:function(e,t,a){},188:function(e,t,a){},292:function(e,t,a){},295:function(e,t,a){},297:function(e,t,a){},331:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(64),s=a.n(r),o=a(23),u=a(337),l=a(339),i=a(340),m=a(38),p=a(39),h=a(44),f=a(40),d=a(45),b=(a(170),function(e){function t(e){return Object(m.a)(this,t),Object(h.a)(this,Object(f.a)(t).call(this,e))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"dashboard"},c.a.createElement("main",{className:"main-content"},c.a.createElement("div",{className:"content-area"},this.props.children)))}}]),t}(n.Component));b.defaultProps={children:""};var E=b,g=a(16),v=a(132),C=a.n(v),O=a(333),j="FETCH_CONTACTS_REQUEST",N="CREATE_CONTACT_REQUEST",k="VIEW_CONTACT_REQUEST",_=function(e,t){return{type:"FETCH_CONTACTS_SUCCESS",contacts:e,meta:t}},S=function(e){return{type:"FETCH_CONTACTS_FAILURE",message:e}},x=function(e,t){return{type:"CREATE_CONTACT_SUCCESS",message:e,contact:t}},T=function(e,t){return{type:"CREATE_CONTACT_FAILURE",message:e,messages:t}},y=function(e){return{type:"VIEW_CONTACT_SUCCESS",contact:e}},w=function(e){return{type:"VIEW_CONTACT_FAILURE",message:e}},A=(a(178),function(e){var t=e.image,a=e.text,n=e.buttonText,r=e.action;return c.a.createElement("div",{className:"empty-state"},c.a.createElement("img",{src:t,alt:""}),c.a.createElement("h2",null,a),n?c.a.createElement("button",{type:"button",onClick:r},e.buttonText):null)});A.defaultProps={image:"",text:"",buttonText:"",action:function(){}};var R=A,U=(a(180),function(){return c.a.createElement("div",{className:"loader-container"},c.a.createElement("div",{className:"loader"}))}),P=(a(182),function(e){return c.a.createElement("header",{className:"header"},e.children)});P.defaultProps={children:""};var L=P,F=a(332),D=(a(184),function(e){var t=e.data;return c.a.createElement("div",{className:"contact-list"},c.a.createElement(F.a,{responsive:!0},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{className:"contact-list__th"},"SN"),c.a.createElement("th",{className:"contact-list__th contact-list__th--avatar"},"Avatar"),c.a.createElement("th",{className:"contact-list__th"},"Name"),c.a.createElement("th",{className:"contact-list__th"},"Phone number"),c.a.createElement("th",{className:"contact-list__th"},"Created"))),c.a.createElement("tbody",null,t.map(function(e,t){return c.a.createElement("tr",{key:t},c.a.createElement("td",{className:"contact-list__td"},e.id),c.a.createElement("td",{className:"contact-list__td"},c.a.createElement("img",{className:"contact-list__img",src:e.imgUrl})),c.a.createElement("td",{className:"contact-list__td"},e.name),c.a.createElement("td",{className:"contact-list__td"},e.phone),c.a.createElement("td",{className:"contact-list__td"},new Date(e.createdAt).toDateString(),","," ",new Date(e.createdAt).toTimeString()))}))))});D.defaultProps={data:[]};var I=D,W=(a(186),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).loadData=a.loadData.bind(Object(g.a)(Object(g.a)(a))),a.createContact=a.createContact.bind(Object(g.a)(Object(g.a)(a))),a.onPageChange=a.onPageChange.bind(Object(g.a)(Object(g.a)(a))),a.renderContent=a.renderContent.bind(Object(g.a)(Object(g.a)(a))),a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){this.loadData(this.props)}},{key:"componentWillReceiveProps",value:function(e){e.location.search!==this.props.location.search&&this.loadData(e)}},{key:"onPageChange",value:function(e){this.props.history.push("?page=".concat(e))}},{key:"createContact",value:function(e){e.preventDefault(),this.props.history.push("add")}},{key:"loadData",value:function(e){var t=e.location,a=C.a.parse(t.search);this.props.fetchContactsRequest(a.page||1)}},{key:"renderContent",value:function(){return this.props.fetchStatus.fetching?c.a.createElement(U,null):0===this.props.contactList.length?c.a.createElement(R,{text:"No contact has been created",buttonText:"Create Contact",action:this.createContact}):c.a.createElement("div",null,c.a.createElement(I,{data:this.props.contactList}))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(L,null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-8"},c.a.createElement("h2",{className:"page-title"},"Contacts")),c.a.createElement("div",{className:"col-sm-4"},c.a.createElement(O.a,{color:"primary",className:"pull-right",onClick:this.createContact},"Add")))),c.a.createElement("div",{className:"contacts__home"},this.renderContent()))}}]),t}(n.Component));W.defaultProps={fetchStatus:{fetching:!1},contactList:[],meta:{pageCount:1},location:{search:""},fetchContactsRequest:function(){},history:{push:function(){}},match:{url:""}};var q=Object(o.b)(function(e){return{fetchStatus:e.app.contacts.contacts.fetchStatus,contactList:e.app.contacts.contacts.contactList,meta:e.app.contacts.contacts.meta}},{fetchContactsRequest:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{type:j,page:e}}})(W),H=a(37),V=a(95),B=a(128),J=a(129),Q=a(334),z=a(338),M=a(335),G=a(336),K=(a(188),function(e){return function(t){return e(t.target.files[0])}}),X=function(e){var t=e.input,a=(t.value,t.onChange),n=t.onBlur,r=(Object(V.a)(t,["value","onChange","onBlur"]),e.meta,Object(V.a)(e,["input","meta"]));return c.a.createElement("input",Object.assign({onChange:K(a),onBlur:K(n),type:"file"},r.input,r))},Y=function(e){var t=e.handleSubmit,a=e.createStatus,n=e.message;return c.a.createElement(Q.a,{onSubmit:t,className:"contact-form"},a.error?c.a.createElement(z.a,{color:"danger"},n):"",c.a.createElement(M.a,null,c.a.createElement(G.a,{for:"name"},"Name"),c.a.createElement(B.a,{name:"name",component:"input",type:"text",className:"form-control"})),c.a.createElement(M.a,null,c.a.createElement(G.a,{for:"phone"},"Phone"),c.a.createElement(B.a,{name:"phone",component:"input",type:"tel",className:"form-control"})),c.a.createElement(M.a,null,c.a.createElement(G.a,{for:"image"},"Avatar"),c.a.createElement(B.a,{name:"image",className:"form-control-file",accept:".jpg, .png, .jpeg",component:X,type:"file"})),c.a.createElement(O.a,{color:"primary"},"Add"))},Z=Y=Object(J.a)({form:"contactForm"})(Y),$=(a(292),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).back=a.back.bind(Object(g.a)(Object(g.a)(a))),a.submit=a.submit.bind(Object(g.a)(Object(g.a)(a))),a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){this.props.createStatus.ok&&this.props.history.push("")}},{key:"componentWillReceiveProps",value:function(e){e.createStatus.ok&&e.history.push("")}},{key:"submit",value:function(e){this.props.createContactRequest(e)}},{key:"back",value:function(e){e.preventDefault(),this.props.history.push("")}},{key:"render",value:function(){var e=this.props.createStatus;return c.a.createElement("div",null,c.a.createElement(L,null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-8"},c.a.createElement("h2",{className:"page-title"},"New Contact")),c.a.createElement("div",{className:"col-sm-4"},c.a.createElement("button",{className:"back-btn pull-right",onClick:this.back},c.a.createElement("i",{className:"fa fa-long-arrow-left "}))))),c.a.createElement("div",{className:"contacts__create"},e.fetching?c.a.createElement(U,null):c.a.createElement(Z,Object.assign({onSubmit:this.submit},this.props))))}}]),t}(n.Component));$.defaultProps={createStatus:{},createContactRequest:function(){},errors:{},history:{push:function(){}},reset:function(){}};var ee=Object(o.b)(function(e){return{createStatus:e.app.contacts.contacts.createStatus,errors:e.app.contacts.contacts.messages,message:e.app.contacts.contacts.message}},{createContactRequest:function(e){return{type:N,contact:e}},reset:H.a})($),te=function(e){return c.a.createElement(E,null,c.a.createElement(l.a,null,c.a.createElement(i.a,{exact:!0,path:"".concat(e.match.url),component:q}),c.a.createElement(i.a,{path:"/add",component:ee})))};te.defaultProps={match:{url:""}};var ae=te,ne=[c.a.createElement(i.a,{key:"contacts",path:"/",component:ae})],ce=(a(295),function(){return c.a.createElement("div",{className:"not-found"},c.a.createElement("div",{className:"centered-content"},c.a.createElement("h1",null,"404"),c.a.createElement("p",null,"Page Not Found")))}),re=(a(297),a(299),a(301),function(e){return c.a.createElement("div",null,e.children)});re.defaultProps={children:""};var se=re,oe=c.a.createElement(se,null,c.a.createElement(l.a,null,ne,c.a.createElement(i.a,{key:"404",path:"/404",component:ce}))),ue=a(9),le=a(130),ie=a(136),me=(a(303),a(308),a(22)),pe={fetchStatus:{fetching:!1,ok:!1,error:!1},createStatus:{fetching:!1,ok:!1,error:!1},contactList:[],contact:{},message:"",messages:{},meta:{}},he=Object(ue.c)({contacts:function(){var e,t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case j:return e={fetching:!0,ok:!1,error:!1},Object(me.a)({},a,{fetchStatus:e});case"FETCH_CONTACTS_SUCCESS":return e={fetching:!1,ok:!0,error:!1},Object(me.a)({},a,{fetchStatus:e,contactList:n.contacts,meta:n.meta});case"FETCH_CONTACTS_FAILURE":return e={fetching:!1,ok:!1,error:!0},Object(me.a)({},a,{fetchStatus:e,message:n.message});case k:return e={fetching:!0,ok:!1,error:!1},Object(me.a)({},a,{fetchStatus:e});case"VIEW_CONTACT_SUCCESS":return e={fetching:!1,ok:!0,error:!1},Object(me.a)({},a,{fetchStatus:e,contact:n.contact});case"VIEW_CONTACT_FAILURE":return e={fetching:!1,ok:!1,error:!0},Object(me.a)({},a,{fetchStatus:e,message:n.message});case N:return t={fetching:!0,ok:!1,error:!1},Object(me.a)({},a,{createStatus:t});case"CREATE_CONTACT_SUCCESS":return t={fetching:!1,ok:!0,error:!1},Object(me.a)({},a,{createStatus:t,message:n.message,contact:n.contact});case"CREATE_CONTACT_FAILURE":return t={fetching:!1,ok:!1,error:!0},Object(me.a)({},a,{createStatus:t,message:n.message,messages:n.messages});default:return a}}}),fe=Object(ue.c)({contacts:he}),de=a(17),be=a.n(de),Ee=a(10),ge=a(73),ve=a.n(ge),Ce=a(94),Oe=a.n(Ce),je={createUrl:"https://jmehoo8cfb.execute-api.us-west-2.amazonaws.com/production",listUrl:"http://ec2-35-164-53-114.us-west-2.compute.amazonaws.com:1337"},Ne=be.a.mark(we),ke=be.a.mark(Ae),_e=be.a.mark(Re),Se=be.a.mark(Pe),xe=be.a.mark(Le),Te=be.a.mark(Fe),ye={name:"John Doe",phone:"+1 4492 394 33",imgUrl:"http://placehold.it/128x128"};function we(e){var t,a;return be.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t={baseURL:je.listUrl,method:"get",url:"/contact",params:{page:e.page}},n.next=4,Object(Ee.b)(Oe.a.request,t);case 4:return a=n.sent,n.next=7,Object(Ee.c)(_(a.data.data,a.data.meta));case 7:n.next=18;break;case 9:if(n.prev=9,n.t0=n.catch(0),!ve()(n.t0,"response.data.message")){n.next=16;break}return n.next=14,Object(Ee.c)(S(n.t0.response.data.message));case 14:n.next=18;break;case 16:return n.next=18,Object(Ee.c)(S(n.t0.message));case 18:case"end":return n.stop()}},Ne,this,[[0,9]])}function Ae(e){var t,a,n,c;return be.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,e.contact.name){r.next=5;break}return r.next=4,Object(Ee.c)(T("Please provide a name"));case 4:return r.abrupt("return");case 5:if(e.contact.phone){r.next=9;break}return r.next=8,Object(Ee.c)(T("Please provide a phone number"));case 8:return r.abrupt("return");case 9:if(e.contact.image){r.next=13;break}return r.next=12,Object(Ee.c)(T("Please upload an image"));case 12:return r.abrupt("return");case 13:return r.next=15,Object(Ee.b)(Ue,e.contact.image);case 15:return t=r.sent,a=Object(me.a)({},e.contact,{image:t.split(",")[1]}),n={baseURL:je.createUrl,method:"post",url:"/contact",data:a},r.next=20,Object(Ee.b)(Oe.a.request,n);case 20:return c=r.sent,r.next=23,Object(Ee.c)(Object(H.a)("contactForm"));case 23:return r.next=25,Object(Ee.c)(x(c.data.data));case 25:r.next=36;break;case 27:if(r.prev=27,r.t0=r.catch(0),!ve()(r.t0,"response.data.message")){r.next=34;break}return r.next=32,Object(Ee.c)(T(r.t0.response.data.message,r.t0.response.data.errors));case 32:r.next=36;break;case 34:return r.next=36,Object(Ee.c)(T(r.t0.response));case 36:case"end":return r.stop()}},ke,this,[[0,27]])}function Re(e){return be.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Ee.c)(y(ye));case 3:e.next=14;break;case 5:if(e.prev=5,e.t0=e.catch(0),!ve()(e.t0,"response.data.message")){e.next=12;break}return e.next=10,Object(Ee.c)(w(e.t0.response.data.message));case 10:e.next=14;break;case 12:return e.next=14,Object(Ee.c)(w(e.t0.response));case 14:case"end":return e.stop()}},_e,this,[[0,5]])}function Ue(e){return new Promise(function(t,a){var n=new FileReader;n.readAsDataURL(e),n.onload=function(){return t(n.result)},n.onerror=function(e){return a(e)}})}function Pe(){return be.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ee.d)(j,we);case 2:case"end":return e.stop()}},Se,this)}function Le(){return be.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ee.d)(N,Ae);case 2:case"end":return e.stop()}},xe,this)}function Fe(){return be.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ee.d)(k,Re);case 2:case"end":return e.stop()}},Te,this)}var De=be.a.mark(Ie);function Ie(){return be.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ee.a)([Pe(),Le(),Fe()]);case 2:case"end":return e.stop()}},De,this)}var We=[],qe=Object(ie.a)();We.push(qe);var He=function(){var e=Object(ue.c)({app:fe,form:le.a}),t=Object(ue.d)(e,ue.a.apply(void 0,We));return qe.run(Ie),t}();s.a.render(c.a.createElement(o.a,{store:He},c.a.createElement(u.a,null,oe)),document.getElementById("root"))}},[[162,2,1]]]);
//# sourceMappingURL=main.e22af5b5.chunk.js.map