(this["webpackJsonpreact-burger-builder-udemy"]=this["webpackJsonpreact-burger-builder-udemy"]||[]).push([[0],[,function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"n",(function(){return a})),n.d(t,"p",(function(){return o})),n.d(t,"f",(function(){return i})),n.d(t,"k",(function(){return c})),n.d(t,"l",(function(){return u})),n.d(t,"j",(function(){return s})),n.d(t,"m",(function(){return l})),n.d(t,"h",(function(){return d})),n.d(t,"i",(function(){return p})),n.d(t,"g",(function(){return m})),n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return f})),n.d(t,"b",(function(){return g})),n.d(t,"c",(function(){return b})),n.d(t,"o",(function(){return v}));var r="ADD_INGREDIENT",a="REMOVE_INGREDIENS",o="SET_INGREDIENTS",i="FETCH_INGREDIENTS_FAILED",c="PURCHASE_BURGER_START",u="PURCHASE_BURGER_SUCCESS",s="PURCHASE_BURGER_FAIL",l="PURCHASE_INTITIALISE",d="FETCH_ORDERS_START",p="FETCH_ORDERS_SUCCESS",m="FETCH_ORDERS_FAIL",h="AUTH_START",f="AUTH_SUCCESS",g="AUTH_FAIL",b="AUTH_LOGOUT",v="SET_AUTH_REDIRECT_PATH"},,function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var r=n(23),a=function(e,t){return Object(r.a)({},e,{},t)},o=function(e,t){var n=!0;if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.test(e)&&n}return n}},,,,,,,function(e,t,n){"use strict";t.a=function(e){return e.children}},,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"i",(function(){return i})),n.d(t,"e",(function(){return c})),n.d(t,"g",(function(){return m})),n.d(t,"h",(function(){return h})),n.d(t,"d",(function(){return f})),n.d(t,"b",(function(){return O})),n.d(t,"f",(function(){return E})),n.d(t,"j",(function(){return y})),n.d(t,"c",(function(){return j}));var r=n(1),a=n(20),o=function(e){return{type:r.a,ingredientName:e}},i=function(e){return{type:r.n,ingredientName:e}},c=function(){return function(e){a.a.get("https://react-my-burger-78c1f.firebaseio.com/ingredients.json").then((function(t){var n;e((n=t.data,{type:r.p,ingredients:n}))})).catch((function(t){e({type:r.f})}))}},u=n(23),s=n(17),l=n.n(s),d=n(26),p=function(e,t){return{type:r.l,orderId:e,orderData:t}},m=function(e,t){return function(){var n=Object(d.a)(l.a.mark((function n(o){var i,c;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o({type:r.k}),n.prev=1,n.next=4,a.a.post("/orders.json?auth="+t,e);case 4:i=n.sent,c=i.data,o(p(c.name,e)),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),o((u=n.t0,{type:r.j,error:u}));case 12:case"end":return n.stop()}var u}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}()},h=function(){return{type:r.m}},f=function(e,t){return function(){var n=Object(d.a)(l.a.mark((function n(o){var i,c,s,d,p;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o({type:r.h}),i="?auth="+e+'&orderBy="userId"&equalTo="'+t+'"',n.prev=2,n.next=5,a.a.get("/orders.json"+i);case 5:for(p in c=n.sent,s=c.data,d=[],s)d.push(Object(u.a)({},s[p],{id:p}));o((m=d,{type:r.i,orders:m})),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(2),o((l=n.t0,{type:r.g,error:l}));case 15:case"end":return n.stop()}var l,m}),n,null,[[2,12]])})));return function(e){return n.apply(this,arguments)}}()},g=n(31),b=n.n(g),v=function(e,t){return{type:r.e,idToken:e,userId:t}},E=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),{type:r.c}},_=function(e){return function(t){setTimeout((function(){t(E())}),1e3*e)}},O=function(e,t,n){return function(a){a({type:r.d});var o={email:e,password:t,returnSecureToken:!0},i="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCW6DLWzwdM24rBXEhZoeOCrnufjC3lTHI";n||(i="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCW6DLWzwdM24rBXEhZoeOCrnufjC3lTHI"),b.a.post(i,o).then((function(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("userId",e.data.localId),localStorage.setItem("expirationDate",t),a(v(e.data.idToken,e.data.localId)),a(_(e.data.expiresIn))})).catch((function(e){a(function(e){return{type:r.b,error:e}}(e.response.data.error))}))}},y=function(e){return{type:r.o,path:e}},j=function(){return function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));if(n<=new Date)e(E());else{var r=localStorage.getItem("userId");e(v(t,r)),e(_((n.getTime()-(new Date).getTime())/1e3))}}else e(E())}}},,function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__rksri",BreadTop:"BurgerIngredient_BreadTop__2zOG5",Seeds1:"BurgerIngredient_Seeds1__2oSG4",Seeds2:"BurgerIngredient_Seeds2__1LLPY",Meat:"BurgerIngredient_Meat__3ccYO",Cheese:"BurgerIngredient_Cheese__18MQD",Salad:"BurgerIngredient_Salad__1DJrW",Bacon:"BurgerIngredient_Bacon__WGcoJ"}},,,,function(e,t,n){"use strict";var r=n(31),a=n.n(r).a.create({baseURL:"https://react-my-burger-78c1f.firebaseio.com"});t.a=a},,,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__5iRXt",Open:"SideDrawer_Open__1Q7ty",Close:"SideDrawer_Close__14Afd",Logo:"SideDrawer_Logo__1UEy5"}},,,,function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__KPl_d",Label:"BuildControl_Label__29Hm7",Less:"BuildControl_Less__2exex",More:"BuildControl_More__30Yel"}},,,,function(e,t,n){"use strict";var r=n(4),a=n(5),o=n(6),i=n(7),c=n(0),u=n.n(c),s=n(58),l=n.n(s),d=n(10),p=n(33),m=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return u.a.createElement(d.a,null,u.a.createElement(p.a,{show:this.props.show,clicked:this.props.modalClosed}),u.a.createElement("div",{style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"},className:l.a.Modal},this.props.children))}}]),n}(c.Component);t.a=m},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(59),i=n.n(o);t.a=function(e){return e.show?a.a.createElement("div",{className:i.a.Backdrop,onClick:e.clicked}):null}},function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__261NF",Logo:"Toolbar_Logo__fFvEc",DesktopOnly:"Toolbar_DesktopOnly__pfgkO"}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(41),i=n.n(o);t.a=function(e){return a.a.createElement("button",{className:[i.a.Button,i.a[e.btnType]].join(" "),onClick:e.clicked,disabled:e.disabled},e.children)}},,,,,function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__1W4ay",OrderButton:"BuildControls_OrderButton__2Umpw",enable:"BuildControls_enable__2nL2v"}},function(e,t,n){e.exports={Button:"Button_Button__-D2ca",Success:"Button_Success__3_aXI",Danger:"Button_Danger__1_Oys"}},function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__2Obz9",active:"NavigationItem_active__3Jhv4"}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(62),i=n.n(o);t.a=function(){return a.a.createElement("div",{className:i.a.Loader},"Loading...")}},function(e,t,n){"use strict";var r=n(4),a=n(5),o=n(6),i=n(7),c=n(0),u=n.n(c),s=n(32),l=n(10);t.a=function(e,t){return function(n){Object(i.a)(d,n);var c=Object(o.a)(d);function d(e){var n;return Object(r.a)(this,d),(n=c.call(this,e)).state={error:null},n.errorConfirmedHandler=function(){n.setState({error:null})},n.reqInterceptor=t.interceptors.request.use((function(e){return n.setState({error:null}),e})),n.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(e){n.setState({error:e})})),n}return Object(a.a)(d,[{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return u.a.createElement(l.a,null,u.a.createElement(s.a,{show:this.state.error,modalClosed:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),u.a.createElement(e,this.props))}}]),d}(c.Component)}},,,,,,,,,,,function(e,t,n){"use strict";var r=n(68),a=n(0),o=n.n(a),i=n(18),c=n(60),u=n.n(c),s=n(4),l=n(5),d=n(6),p=n(7),m=n(16),h=n.n(m),f=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=o.a.createElement("div",{className:h.a.BreadBottom});break;case"bread-top":e=o.a.createElement("div",{className:h.a.BreadTop},o.a.createElement("div",{className:h.a.Seeds1}),o.a.createElement("div",{className:h.a.Seeds2}));break;case"meat":e=o.a.createElement("div",{className:h.a.Meat});break;case"cheese":e=o.a.createElement("div",{className:h.a.Cheese});break;case"salad":e=o.a.createElement("div",{className:h.a.Salad});break;case"bacon":e=o.a.createElement("div",{className:h.a.Bacon});break;default:e=null}return e}}]),n}(a.Component);t.a=Object(i.g)((function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(r.a)(Array(e.ingredients[t])).map((function(e,n){return o.a.createElement(f,{key:t+n,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=o.a.createElement("p",null,"Please start adding ingredients!")),o.a.createElement("div",{className:u.a.Burger},o.a.createElement(f,{type:"bread-top"}),t,o.a.createElement(f,{type:"bread-bottom"}))}))},,,function(e,t,n){e.exports={Modal:"Modal_Modal__1Js9x"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__1-N0O"}},function(e,t,n){e.exports={Burger:"Burger_Burger__AaBud"}},,function(e,t,n){e.exports={Loader:"Spinner_Loader__1KCUQ",load2:"Spinner_load2__1cmnx"}},function(e,t,n){e.exports={Content:"Layout_Content__2j1qR"}},function(e,t,n){e.exports=n.p+"static/media/original.b8503d26.png"},function(e,t,n){e.exports={Logo:"Logo_Logo__2KFD3"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__ZdPUU"}},function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__4sj-0"}},,function(e,t,n){e.exports=n(98)},,,,,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(29),i=n.n(o),c=n(19),u=n(13),s=n(21),l=n(57),d=(n(78),n(4)),p=n(5),m=n(6),h=n(7),f=n(18),g=function(e){return function(t){Object(h.a)(r,t);var n=Object(m.a)(r);function r(){var e;Object(d.a)(this,r);for(var t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];return(e=n.call.apply(n,[this].concat(a))).state={component:null},e}return Object(p.a)(r,[{key:"componentDidMount",value:function(){var t=this;e().then((function(e){t.setState({component:e.default})}))}},{key:"render",value:function(){var e=this.state.component;return e?a.a.createElement(e,this.props):null}}]),r}(r.Component)},b=n(23),v=n(17),E=n.n(v),_=n(26),O=n(20),y=n(14),j=n(10),k=n(44),C=n(55),I=n(40),S=n.n(I),w=n(28),B=n.n(w),N=function(e){return a.a.createElement("div",{className:B.a.BuildControl},a.a.createElement("div",{className:B.a.Label},e.label),a.a.createElement("button",{className:B.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),a.a.createElement("button",{className:B.a.More,onClick:e.added},"More"))},T=[{label:"Salad",type:"salad"},{label:"Vegan Bacon",type:"bacon"},{label:"Vegan Cheese",type:"cheese"},{label:"Beyond",type:"meat"}],D=function(e){return a.a.createElement("div",{className:S.a.BuildControls},a.a.createElement("p",null,"Current Price: ",a.a.createElement("strong",null,e.price.toFixed(2))),T.map((function(t){return a.a.createElement(N,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})})),a.a.createElement("button",{className:S.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered},e.isAuth?"ORDER NOW":"SIGN UP TO ORDER"))},A=n(32),x=n(35),L=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map((function(t){return a.a.createElement("li",{key:t},a.a.createElement("span",{style:{textTransform:"capitalize"}},t),":"," ",e.props.ingredients[t])}));return a.a.createElement(j.a,null,a.a.createElement("h3",null,"Your Order"),a.a.createElement("p",null,"A delicious burger with the following ingredients:"),a.a.createElement("ul",null,t),a.a.createElement("p",null,a.a.createElement("strong",null,"Total Price: ",this.props.price.toFixed(2))," "),a.a.createElement("p",null,"Continue to Checkout?"),a.a.createElement(x.a,{btnType:"Danger",clicked:this.props.purchaseCancelled},"CANCEL"),a.a.createElement(x.a,{btnType:"Success",clicked:this.props.purchaseContinued},"CONTINUE"))}}]),n}(r.Component),R=n(43),H=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={purchasing:!1},e.purchaseHandler=function(){e.props.isAuthenticated?e.setState({purchasing:!0}):(e.props.onSetAuthRedirectPath("/checkout"),e.props.history.push("/auth"))},e.purchaseCancelHandler=function(){e.setState({purchasing:!1})},e.purchaseContinueHandler=Object(_.a)(E.a.mark((function t(){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.props.onInitialisePurchase(),e.props.history.push("/checkout");case 2:case"end":return t.stop()}}),t)}))),e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.onInitialiseIngredients()}},{key:"updatePurchaseState",value:function(e){return Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0)>0}},{key:"render",value:function(){var e=Object(b.a)({},this.props.ings);for(var t in e)e[t]=e[t]<=0;var n=null,r=this.props.error?a.a.createElement("p",null,"Ingredients can't be loaded!"):a.a.createElement(R.a,null);return this.props.ings&&(r=a.a.createElement(j.a,null,a.a.createElement(C.a,{ingredients:this.props.ings}),a.a.createElement(D,{ingredientAdded:this.props.onIngredientAdded,ingredientRemoved:this.props.onIngredientRemoved,disabled:e,price:this.props.price,purchasable:this.updatePurchaseState(this.props.ings),ordered:this.purchaseHandler,isAuth:this.props.isAuthenticated})),n=a.a.createElement(L,{ingredients:this.props.ings,price:this.props.price,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler})),a.a.createElement(j.a,null,a.a.createElement(A.a,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},n),r)}}]),n}(r.Component),P=Object(u.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error,isAuthenticated:null!==e.auth.token}}),(function(e){return{onIngredientAdded:function(t){return e(y.a(t))},onIngredientRemoved:function(t){return e(y.i(t))},onInitialiseIngredients:function(){return e(y.e())},onInitialisePurchase:function(){return e(y.h())},onSetAuthRedirectPath:function(t){return e(y.j(t))}}}))(Object(k.a)(H,O.a)),U=n(63),M=n.n(U),F=n(34),G=n.n(F),W=n(64),z=n.n(W),q=n(65),J=n.n(q),Y=function(e){return a.a.createElement("div",{className:J.a.Logo},a.a.createElement("img",{src:z.a,alt:"MyBurger"}))},Z=n(66),X=n.n(Z),K=n(42),Q=n.n(K),V=function(e){return a.a.createElement("li",{className:Q.a.NavigationItem},a.a.createElement(c.b,{to:e.link,exact:e.exact,activeClassName:Q.a.active},e.children))},$=function(e){return a.a.createElement("ul",{className:X.a.NavigationItems},a.a.createElement(V,{link:"/",exact:!0},"Burger Builder"),e.isAuthenticated?a.a.createElement(V,{link:"/orders"},"Orders"):null,e.isAuthenticated?a.a.createElement(V,{link:"/logout"},"Logout"):a.a.createElement(V,{link:"/auth"},"Authenticate"))},ee=n(67),te=n.n(ee),ne=function(e){return a.a.createElement("div",{onClick:e.clicked,className:te.a.DrawerToggle},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))},re=function(e){return a.a.createElement("header",{className:G.a.Toolbar},a.a.createElement(ne,{clicked:e.drawerToggleClicked}),a.a.createElement("div",{className:G.a.Logo},a.a.createElement(Y,null)),a.a.createElement("nav",{className:G.a.DesktopOnly},a.a.createElement($,{isAuthenticated:e.isAuth})))},ae=n(24),oe=n.n(ae),ie=n(33),ce=function(e){var t=[oe.a.SideDrawer,oe.a.Close];return e.open&&(t=[oe.a.SideDrawer,oe.a.Open]),a.a.createElement(j.a,null,a.a.createElement(ie.a,{show:e.open,clicked:e.closed}),a.a.createElement("div",{className:t.join(" "),onClick:e.closed},a.a.createElement("div",{className:oe.a.Logo},a.a.createElement(Y,null)),a.a.createElement("nav",null,a.a.createElement($,{isAuthenticated:e.isAuth}))))},ue=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={showSideDrawer:!1},e.sideDrawerClosedHandler=function(){e.setState({showSideDrawer:!1})},e.sideDrawerToggleHandler=function(){e.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},e}return Object(p.a)(n,[{key:"render",value:function(){return a.a.createElement(j.a,null,a.a.createElement(re,{isAuth:this.props.isAuthenticated,drawerToggleClicked:this.sideDrawerToggleHandler}),a.a.createElement(ce,{isAuth:this.props.isAuthenticated,open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),a.a.createElement("main",{className:M.a.Content},this.props.children))}}]),n}(r.Component),se=Object(u.b)((function(e){return{isAuthenticated:null!==e.auth.token}}))(ue),le=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return a.a.createElement(f.a,{to:"/"})}}]),n}(r.Component),de=Object(u.b)(null,(function(e){return{onLogout:function(){return e(y.f())}}}))(le),pe=g((function(){return n.e(3).then(n.bind(null,106))})),me=g((function(){return n.e(5).then(n.bind(null,107))})),he=g((function(){return n.e(4).then(n.bind(null,105))})),fe=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}},{key:"render",value:function(){var e=a.a.createElement(f.d,null,a.a.createElement(f.b,{path:"/auth",component:he}),a.a.createElement(f.b,{path:"/",exact:!0,component:P}),a.a.createElement(f.a,{to:"/"}));return this.props.isAuthenticated&&(e=a.a.createElement(f.d,null,a.a.createElement(f.b,{path:"/checkout",component:pe}),a.a.createElement(f.b,{path:"/orders",component:me}),a.a.createElement(f.b,{path:"/logout",component:de}),a.a.createElement(f.b,{path:"/auth",component:he}),a.a.createElement(f.b,{path:"/",exact:!0,component:P}),a.a.createElement(f.a,{to:"/"}))),a.a.createElement("div",null,a.a.createElement(se,null,e))}}]),n}(r.Component),ge=Object(f.g)(Object(u.b)((function(e){return{isAuthenticated:null!==e.auth.token}}),(function(e){return{onTryAutoSignup:function(){return e(y.c())}}}))(fe));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var be=n(25),ve=n(1),Ee=n(3),_e={ingredients:null,totalPrice:4,loading:!1,error:!1,building:!1},Oe={salad:.5,cheese:.4,meat:1.3,bacon:.7},ye=function(e,t){var n=Object(be.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1),r={ingredients:Object(Ee.b)(e.ingredients,n),totalPrice:e.totalPrice+Oe[t.ingredientName],building:!0};return Object(Ee.b)(e,r)},je=function(e,t){var n=Object(be.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1),r={ingredients:Object(Ee.b)(e.ingredients,n),totalPrice:e.totalPrice-Oe[t.ingredientName],building:!0};return Object(Ee.b)(e,r)},ke=function(e,t){return Object(Ee.b)(e,{ingredients:{salad:t.ingredients.salad,bacon:t.ingredients.bacon,cheese:t.ingredients.cheese,meat:t.ingredients.meat},totalPrice:4,error:!1,building:!1})},Ce=function(e,t){return Object(Ee.b)(e,{error:!0})},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ve.a:return ye(e,t);case ve.n:return je(e,t);case ve.p:return ke(e,t);case ve.f:return Ce(e);default:return e}},Se={orders:[],loading:!1,purchased:!1},we=function(e,t){return Object(Ee.b)(e,{purchased:!1},{loading:!1})},Be=function(e,t){return Object(Ee.b)(e,{loading:!0})},Ne=function(e,t){var n=Object(Ee.b)(t.orderData,{id:t.orderId});return Object(Ee.b)(e,{loading:!1,purchased:!0,orders:e.orders.concat(n)})},Te=function(e,t){return Object(Ee.b)(e,{loading:!1})},De=function(e,t){return Object(Ee.b)(e,{loading:!0})},Ae=function(e,t){return Object(Ee.b)(e,{orders:t.orders,loading:!1})},xe=function(e,t){return Object(Ee.b)(e,{loading:!1})},Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ve.m:return we(e);case ve.k:return Be(e);case ve.l:return Ne(e,t);case ve.j:return Te(e);case ve.h:return De(e);case ve.i:return Ae(e,t);case ve.g:return xe(e);default:return e}},Re={token:null,userId:null,error:null,loading:!1,authRedirectPath:"/"},He=function(e,t){return Object(Ee.b)(e,{error:null,loading:!0})},Pe=function(e,t){return Object(Ee.b)(e,{token:t.idToken,userId:t.userId,error:null,loading:!1})},Ue=function(e,t){return Object(Ee.b)(e,{error:t.error,loading:!1})},Me=function(e,t){return Object(Ee.b)(e,{token:null,userId:null})},Fe=function(e,t){return Object(Ee.b)(e,{authRedirectPath:t.path})},Ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ve.d:return He(e);case ve.e:return Pe(e,t);case ve.b:return Ue(e,t);case ve.c:return Me(e);case ve.o:return Fe(e,t);default:return e}},We=s.d,ze=Object(s.c)({burgerBuilder:Ie,order:Le,auth:Ge}),qe=Object(s.e)(ze,We(Object(s.a)(l.a))),Je=a.a.createElement(u.a,{store:qe},a.a.createElement(c.a,null,a.a.createElement(ge,null)));i.a.render(Je,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[69,1,2]]]);
//# sourceMappingURL=main.7cbad40f.chunk.js.map