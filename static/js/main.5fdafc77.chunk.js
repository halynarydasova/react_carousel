(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var i=n(9),a=n.n(i),c=n(3),r=n(2),s=n(4),o=n(5),l=n(7),u=n(6),d=n(1),m=n.n(d),h=(n(14),n(15),n(0)),f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={carouselWidth:390,activeIndex:0},e.setActiveIndex=function(t){var n=e.props.images.length,i=e.props,a=i.frameSize,c=i.step,r=i.infinite;e.setState((function(e){if(r&&e.activeIndex===n-a&&1===t)return{activeIndex:0};if(r&&0===e.activeIndex&&-1===t)return{activeIndex:n-a};var i=e.activeIndex+c*t;return i<0?{activeIndex:0}:i>n-a?{activeIndex:n-a}:{activeIndex:i}}))},e.handleNext=function(){e.setActiveIndex(1)},e.handlePrev=function(){e.setActiveIndex(-1)},e}return Object(o.a)(n,[{key:"componentDidUpdate",value:function(e){e!==this.props&&this.setState({carouselWidth:this.props.frameSize*this.props.itemWidth})}},{key:"render",value:function(){var e=this,t=this.props,n=t.images,i=t.animationDuration,a=t.itemWidth,c=t.infinite,r=t.frameSize,s=this.state,o=s.carouselWidth,l=s.activeIndex;return Object(h.jsxs)("div",{className:"Carousel",style:{width:o},children:[Object(h.jsx)("ul",{style:{transform:"translateX(".concat(-a*l,"px"),transition:"transform ease ".concat(i,"ms")},className:"Carousel__list",children:n.map((function(e,t){return Object(h.jsx)("li",{className:"Carousel__item",children:Object(h.jsx)("img",{src:e,alt:"".concat(t+1),width:a})},e)}))}),Object(h.jsxs)("div",{className:"Carousel__control-btn",children:[Object(h.jsx)("button",{type:"button",onClick:function(){e.handlePrev()},className:"Carousel__btn Carousel__btn--prev","aria-label":"prev",disabled:!c&&0===l}),Object(h.jsx)("button",{type:"button","data-cy":"next",onClick:this.handleNext,className:"Carousel__btn Carousel__btn--next","aria-label":"next",disabled:!c&&l>=n.length-r})]})]})}}]),n}(m.a.Component),b=f,p={step:3,frameSize:3,itemWidth:130,animationDuration:1e3,infinite:!1},g=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],configurationFields:p},e.handleChange=function(t){var n=t.currentTarget,i=n.name,a=n.value;e.setState((function(e){return{configurationFields:Object(r.a)(Object(r.a)({},e.configurationFields),{},Object(c.a)({},i,a))}}))},e.handleChangeCheckbox=function(){e.setState((function(e){return{configurationFields:Object(r.a)(Object(r.a)({},e.configurationFields),{},{infinite:!e.configurationFields.infinite})}}))},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.images,n=e.configurationFields,i=n.step,a=n.itemWidth,c=n.frameSize,s=n.animationDuration,o=n.infinite;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{"data-cy":"title",className:"App__title",children:"Carousel with ".concat(t.length," images")}),Object(h.jsxs)("form",{action:"#",className:"configurationForm",children:[Object(h.jsxs)("label",{htmlFor:"itemId",className:"configurationForm__field",children:["Item Width:",Object(h.jsx)("input",{type:"number",name:"itemWidth",id:"itemId",min:"100",max:"300",defaultValue:a,onChange:this.handleChange})]}),Object(h.jsxs)("label",{htmlFor:"frameId",className:"configurationForm__field",children:["Frame Size:",Object(h.jsx)("input",{type:"number",name:"frameSize",id:"FrameId",min:"1",max:t.length,defaultValue:c,onChange:this.handleChange})]}),Object(h.jsxs)("label",{htmlFor:"stepId",className:"configurationForm__field",children:["Step:",Object(h.jsx)("input",{type:"number",name:"step",id:"stepId",min:"1",max:t.length,defaultValue:i,onChange:this.handleChange})]}),Object(h.jsxs)("label",{htmlFor:"duration",className:"configurationForm__field",children:["Animation duration:",Object(h.jsx)("input",{type:"number",name:"animationDuration",id:"duration",defaultValue:s,onChange:this.handleChange})]}),Object(h.jsxs)("label",{htmlFor:"infinity",className:"configurationForm__field",children:["Infinity:",Object(h.jsx)("input",{type:"checkbox",name:"infinity",id:"infinity",checked:o,onChange:this.handleChangeCheckbox})]})]}),Object(h.jsx)(b,Object(r.a)({images:t},n))]})}}]),n}(m.a.Component),j=g;a.a.render(Object(h.jsx)(j,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.5fdafc77.chunk.js.map