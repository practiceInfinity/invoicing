"use strict";(self["webpackChunkcashflow"]=self["webpackChunkcashflow"]||[]).push([[200],{9266:function(t,e,i){i.r(e),i.d(e,{default:function(){return k}});var s=i(6190),n=i(4145),a=i(4886),l=i(266),o=i(1030),c=i(9223),r=i(5125),d=i(4604),u=i(1713),h=i(7808),m=function(){var t=this,e=t._self._c;return e("div",[e(r.Z,{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e(n.Z,{staticClass:"px-5",attrs:{elevation:"2"}},[e(u.Z,[e(l.Z,{attrs:{cols:"3"}},[e(a.EB,[t._v("Basics")]),e(a.Qq,[t._v("Let's get you started...")])],1),e(l.Z,{attrs:{cols:"1"}},[e(c.Z,{staticClass:"mx-4",attrs:{vertical:""}})],1),e(l.Z,{staticClass:"pt-5",attrs:{cols:"8"}},[e(u.Z,[e(l.Z,{attrs:{cols:"6"}},[e(h.Z,{attrs:{rules:[t.rules.required],label:"Name",required:"",outlined:"",dense:""},model:{value:t.client.name,callback:function(e){t.$set(t.client,"name",e)},expression:"client.name"}})],1),e(l.Z,{attrs:{cols:"6"}},[e(h.Z,{attrs:{label:"Vat Number (optional)",outlined:"",dense:""},model:{value:t.client.vatNumber,callback:function(e){t.$set(t.client,"vatNumber",e)},expression:"client.vatNumber"}})],1)],1),e(u.Z,[e(l.Z,{attrs:{cols:"6"}},[e(h.Z,{attrs:{rules:[t.rules.required],label:"Default Currency",outlined:"",dense:"",disabled:""},model:{value:t.client.currency,callback:function(e){t.$set(t.client,"currency",e)},expression:"client.currency"}})],1),e(l.Z,{attrs:{cols:"6"}},[e(h.Z,{attrs:{label:"Credit Limit (optional)",outlined:"",dense:""},model:{value:t.client.creditLimit,callback:function(e){t.$set(t.client,"creditLimit",e)},expression:"client.creditLimit"}})],1)],1)],1)],1)],1),e(n.Z,{staticClass:"px-5",staticStyle:{"margin-top":"3%"},attrs:{elevation:"2"}},[e(u.Z,[e(l.Z,{attrs:{cols:"3"}},[e(a.EB,[t._v("Address")]),e(a.Qq,[t._v("Where is this client based?")])],1),e(l.Z,{attrs:{cols:"1"}},[e(c.Z,{staticClass:"mx-4",attrs:{vertical:""}})],1),e(l.Z,{staticClass:"pt-5",attrs:{cols:"8"}},[e(u.Z,[e(l.Z,{attrs:{cols:"6"}},[e(h.Z,{attrs:{rules:[t.rules.required],label:"Address Line 1",outlined:"",dense:""},model:{value:t.client.address1,callback:function(e){t.$set(t.client,"address1",e)},expression:"client.address1"}})],1),e(l.Z,{attrs:{cols:"6"}},[e(h.Z,{attrs:{rules:[t.rules.required],label:"Address Line 2",outlined:"",dense:""},model:{value:t.client.address2,callback:function(e){t.$set(t.client,"address2",e)},expression:"client.address2"}})],1)],1),e(u.Z,[e(l.Z,{attrs:{cols:"6"}},[e(h.Z,{attrs:{label:"Address Line 3 (optional)",outlined:"",dense:""},model:{value:t.client.address3,callback:function(e){t.$set(t.client,"address3",e)},expression:"client.address3"}})],1),e(l.Z,{attrs:{cols:"6"}},[e(h.Z,{attrs:{label:"Address Line 4 (optional)",outlined:"",dense:""},model:{value:t.client.address4,callback:function(e){t.$set(t.client,"address4",e)},expression:"client.address4"}})],1)],1),e(u.Z,[e(l.Z,{attrs:{cols:"6"}},[e(h.Z,{attrs:{rules:[t.rules.required],label:"Postcode",outlined:"",dense:""},model:{value:t.client.postcode,callback:function(e){t.$set(t.client,"postcode",e)},expression:"client.postcode"}})],1),e(l.Z,{attrs:{cols:"6"}})],1)],1)],1)],1),e(n.Z,{staticClass:"px-5",staticStyle:{"margin-top":"3%"},attrs:{elevation:"2"}},[e(u.Z,[e(l.Z,{attrs:{cols:"3"}},[e(a.EB,[t._v("Contact Details")]),e(a.Qq,[t._v("How do you contact this client?")])],1),e(l.Z,{attrs:{cols:"1"}},[e(c.Z,{staticClass:"mx-4",attrs:{vertical:""}})],1),e(l.Z,{staticClass:"pt-5",attrs:{cols:"8"}},[e(u.Z,[e(l.Z,{attrs:{cols:"6"}},[e(h.Z,{attrs:{label:"Contact Name (optional)",outlined:"",dense:""},model:{value:t.client.contactName,callback:function(e){t.$set(t.client,"contactName",e)},expression:"client.contactName"}})],1),e(l.Z,{attrs:{cols:"6"}},[e(h.Z,{attrs:{label:"Email Address (optional)",outlined:"",dense:""},model:{value:t.client.contactEmail,callback:function(e){t.$set(t.client,"contactEmail",e)},expression:"client.contactEmail"}})],1)],1),e(u.Z,[e(l.Z,{attrs:{cols:"6"}},[e(h.Z,{attrs:{label:"Telephone (optional)",outlined:"",dense:""},model:{value:t.client.contactNumber,callback:function(e){t.$set(t.client,"contactNumber",e)},expression:"client.contactNumber"}})],1),e(l.Z,{attrs:{cols:"6"}},[e(h.Z,{attrs:{label:"Mobile (optional)",outlined:"",dense:""},model:{value:t.client.contactMobile,callback:function(e){t.$set(t.client,"contactMobile",e)},expression:"client.contactMobile"}})],1)],1)],1)],1)],1),e(n.Z,{staticClass:"px-5",staticStyle:{"margin-top":"3%"},attrs:{elevation:"2"}},[e(u.Z,[e(l.Z,{attrs:{cols:"3"}},[e(a.EB,[t._v("Payment Details")]),e(a.Qq,[t._v("How will the client be paying you?")])],1),e(l.Z,{attrs:{cols:"1"}},[e(c.Z,{staticClass:"mx-4",attrs:{vertical:""}})],1),e(l.Z,{staticClass:"pt-5",attrs:{cols:"8"}},[e(u.Z,[e(l.Z,{attrs:{cols:"6"}},[e(h.Z,{attrs:{label:"Payments Due In...",outlined:"",dense:""},model:{value:t.client.paymentDue,callback:function(e){t.$set(t.client,"paymentDue",e)},expression:"client.paymentDue"}})],1),e(l.Z,{attrs:{cols:"6"}},[e(h.Z,{attrs:{label:"Units of Time",outlined:"",dense:"",disabled:""},model:{value:t.client.paymentDueUnitTime,callback:function(e){t.$set(t.client,"paymentDueUnitTime",e)},expression:"client.paymentDueUnitTime"}})],1)],1)],1)],1)],1),e(n.Z,{staticClass:"px-5",staticStyle:{"margin-top":"3%"},attrs:{elevation:"2"}},[e(u.Z,[e(l.Z,{attrs:{cols:"3"}},[e(a.EB,[t._v("Opening Balance")]),e(a.Qq,[t._v("How will the client be paying you?")])],1),e(l.Z,{attrs:{cols:"1"}},[e(c.Z,{staticClass:"mx-4",attrs:{vertical:""}})],1),e(l.Z,{staticClass:"pt-5",attrs:{cols:"8"}},[e(u.Z,[e(l.Z,{attrs:{cols:"6"}},[e(h.Z,{attrs:{label:"Opening Balance (optional)",prefix:"R",outlined:"",dense:""},model:{value:t.client.openingBalance,callback:function(e){t.$set(t.client,"openingBalance",e)},expression:"client.openingBalance"}})],1),e(l.Z,{attrs:{cols:"6"}},[e(d.Z,{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function({on:i,attrs:s}){return[e(h.Z,t._g(t._b({attrs:{label:"Opening Balance At (optional)",readonly:"",outlined:"",dense:""},model:{value:t.client.openingBalanceAt,callback:function(e){t.$set(t.client,"openingBalanceAt",e)},expression:"client.openingBalanceAt"}},"v-text-field",s,!1),i))]}}]),model:{value:t.menuDateBalance,callback:function(e){t.menuDateBalance=e},expression:"menuDateBalance"}},[e(o.Z,{on:{input:function(e){t.menuDateBalance=!1}},model:{value:t.client.openingBalanceAt,callback:function(e){t.$set(t.client,"openingBalanceAt",e)},expression:"client.openingBalanceAt"}})],1)],1)],1)],1)],1)],1),e(u.Z,{staticClass:"mt-5 mb-5"},[e(l.Z,{staticClass:"text-right",attrs:{cols:"12"}},[e(s.Z,{staticClass:"mr-2",attrs:{outlined:"",to:{name:"client"}}},[t._v("Cancel")]),e(s.Z,{attrs:{color:"primary",disabled:!t.valid},on:{click:t.saveData}},[t._v("Save")])],1)],1)],1)],1)},v=[],p=i(9669),f=i.n(p),Z={data:()=>({valid:!1,menuDateBalance:!1,rules:{required:t=>!!t||"Required.",counter:t=>t.length<=20||"Max 20 characters",email:t=>{const e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)||"Invalid e-mail."}},client:{name:"",vatNumber:"",currency:"ZAR - South Africa Rand",creditLimit:"",address1:"",address2:"",address3:"",address4:"",postcode:"",contactName:"",contactEmail:"",contactNumber:"",contactMobile:"",paymentDue:"28",paymentDueUnitTime:"days",openingBalance:"0.00",openingBalanceAt:""}}),methods:{async saveData(){if(await this.$refs.form.validate(),this.valid)try{await f().post("/api/client-add",this.client);this.$router.push({name:"client"})}catch(t){console.log(t),alert("Something Wrong..!")}}}},x=Z,b=i(1001),g=(0,b.Z)(x,m,v,!1,null,null,null),k=g.exports},6656:function(t,e,i){var s=i(6190);e["Z"]=s.Z},9223:function(t,e,i){i.d(e,{Z:function(){return n}});var s=i(6669),n=s.Z.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(t){let e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":e,...this.$attrs},on:this.$listeners})}})},4604:function(t,e,i){i.d(e,{Z:function(){return b}});i(6699);var s=i(6669),n=s.Z.extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark(){return this.root?this.rootIsDark:s.Z.options.computed.isDark.call(this)}},render(){return this.$slots.default&&this.$slots.default.find((t=>!t.isComment&&" "!==t.text))}}),a=i(1452),l=i(3016),o=i(908),c=i(8938),r=i(144),d=r.ZP.extend({name:"returnable",props:{returnValue:null},data:()=>({isActive:!1,originalValue:null}),watch:{isActive(t){t?this.originalValue=this.returnValue:this.$emit("update:return-value",this.originalValue)}},methods:{save(t){this.originalValue=t,setTimeout((()=>{this.isActive=!1}))}}}),u=i(2637),h=i(5942),m=i(6746),v=i(7678),p=i(4101),f=i(5352),Z=i(6421);const x=(0,v.Z)(o.Z,l.Z,d,u.Z,s.Z,c.Z);var b=x.extend({name:"v-menu",directives:{ClickOutside:h.Z,Resize:m.Z},provide(){return{isInMenu:!0,theme:this.theme}},props:{auto:Boolean,closeOnClick:{type:Boolean,default:!0},closeOnContentClick:{type:Boolean,default:!0},disabled:Boolean,disableKeys:Boolean,maxHeight:{type:[Number,String],default:"auto"},offsetX:Boolean,offsetY:Boolean,openOnHover:Boolean,origin:{type:String,default:"top left"},transition:{type:[Boolean,String],default:"v-menu-transition"}},data(){return{calculatedTopAuto:0,defaultOffset:8,hasJustFocused:!1,listIndex:-1,resizeTimeout:0,selectedIndex:null,tiles:[]}},computed:{activeTile(){return this.tiles[this.listIndex]},calculatedLeft(){const t=Math.max(this.dimensions.content.width,parseFloat(this.calculatedMinWidth));return this.auto?(0,f.kb)(this.calcXOverflow(this.calcLeftAuto(),t))||"0":this.calcLeft(t)||"0"},calculatedMaxHeight(){const t=this.auto?"200px":(0,f.kb)(this.maxHeight);return t||"0"},calculatedMaxWidth(){return(0,f.kb)(this.maxWidth)||"0"},calculatedMinWidth(){if(this.minWidth)return(0,f.kb)(this.minWidth)||"0";const t=Math.min(this.dimensions.activator.width+Number(this.nudgeWidth)+(this.auto?16:0),Math.max(this.pageWidth-24,0)),e=isNaN(parseInt(this.calculatedMaxWidth))?t:parseInt(this.calculatedMaxWidth);return(0,f.kb)(Math.min(e,t))||"0"},calculatedTop(){const t=this.auto?(0,f.kb)(this.calcYOverflow(this.calculatedTopAuto)):this.calcTop();return t||"0"},hasClickableTiles(){return Boolean(this.tiles.find((t=>t.tabIndex>-1)))},styles(){return{maxHeight:this.calculatedMaxHeight,minWidth:this.calculatedMinWidth,maxWidth:this.calculatedMaxWidth,top:this.calculatedTop,left:this.calculatedLeft,transformOrigin:this.origin,zIndex:this.zIndex||this.activeZIndex}}},watch:{isActive(t){t||(this.listIndex=-1)},isContentActive(t){this.hasJustFocused=t},listIndex(t,e){if(t in this.tiles){const e=this.tiles[t];e.classList.add("v-list-item--highlighted");const i=this.$refs.content.scrollTop,s=this.$refs.content.clientHeight;i>e.offsetTop-8?(0,Z.Z)(e.offsetTop-e.clientHeight,{appOffset:!1,duration:300,container:this.$refs.content}):i+s<e.offsetTop+e.clientHeight+8&&(0,Z.Z)(e.offsetTop-s+2*e.clientHeight,{appOffset:!1,duration:300,container:this.$refs.content})}e in this.tiles&&this.tiles[e].classList.remove("v-list-item--highlighted")}},created(){this.$attrs.hasOwnProperty("full-width")&&(0,p.Jk)("full-width",this)},mounted(){this.isActive&&this.callActivate()},methods:{activate(){this.updateDimensions(),requestAnimationFrame((()=>{this.startTransition().then((()=>{this.$refs.content&&(this.calculatedTopAuto=this.calcTopAuto(),this.auto&&(this.$refs.content.scrollTop=this.calcScrollPosition()))}))}))},calcScrollPosition(){const t=this.$refs.content,e=t.querySelector(".v-list-item--active"),i=t.scrollHeight-t.offsetHeight;return e?Math.min(i,Math.max(0,e.offsetTop-t.offsetHeight/2+e.offsetHeight/2)):t.scrollTop},calcLeftAuto(){return parseInt(this.dimensions.activator.left-2*this.defaultOffset)},calcTopAuto(){const t=this.$refs.content,e=t.querySelector(".v-list-item--active");if(e||(this.selectedIndex=null),this.offsetY||!e)return this.computedTop;this.selectedIndex=Array.from(this.tiles).indexOf(e);const i=e.offsetTop-this.calcScrollPosition(),s=t.querySelector(".v-list-item").offsetTop;return this.computedTop-i-s-1},changeListIndex(t){if(this.getTiles(),this.isActive&&this.hasClickableTiles)if(t.keyCode!==f.Do.tab){if(t.keyCode===f.Do.down)this.nextTile();else if(t.keyCode===f.Do.up)this.prevTile();else if(t.keyCode===f.Do.end)this.lastTile();else if(t.keyCode===f.Do.home)this.firstTile();else{if(t.keyCode!==f.Do.enter||-1===this.listIndex)return;this.tiles[this.listIndex].click()}t.preventDefault()}else this.isActive=!1},closeConditional(t){const e=t.target;return this.isActive&&!this._isDestroyed&&this.closeOnClick&&!this.$refs.content.contains(e)},genActivatorAttributes(){const t=a.Z.options.methods.genActivatorAttributes.call(this);return this.activeTile&&this.activeTile.id?{...t,"aria-activedescendant":this.activeTile.id}:t},genActivatorListeners(){const t=c.Z.options.methods.genActivatorListeners.call(this);return this.disableKeys||(t.keydown=this.onKeyDown),t},genTransition(){const t=this.genContent();return this.transition?this.$createElement("transition",{props:{name:this.transition}},[t]):t},genDirectives(){const t=[{name:"show",value:this.isContentActive}];return!this.openOnHover&&this.closeOnClick&&t.push({name:"click-outside",value:{handler:()=>{this.isActive=!1},closeConditional:this.closeConditional,include:()=>[this.$el,...this.getOpenDependentElements()]}}),t},genContent(){const t={attrs:{...this.getScopeIdAttrs(),role:"role"in this.$attrs?this.$attrs.role:"menu"},staticClass:"v-menu__content",class:{...this.rootThemeClasses,...this.roundedClasses,"v-menu__content--auto":this.auto,"v-menu__content--fixed":this.activatorFixed,menuable__content__active:this.isActive,[this.contentClass.trim()]:!0},style:this.styles,directives:this.genDirectives(),ref:"content",on:{click:t=>{const e=t.target;e.getAttribute("disabled")||this.closeOnContentClick&&(this.isActive=!1)},keydown:this.onKeyDown}};return this.$listeners.scroll&&(t.on=t.on||{},t.on.scroll=this.$listeners.scroll),!this.disabled&&this.openOnHover&&(t.on=t.on||{},t.on.mouseenter=this.mouseEnterHandler),this.openOnHover&&(t.on=t.on||{},t.on.mouseleave=this.mouseLeaveHandler),this.$createElement("div",t,this.getContentSlot())},getTiles(){this.$refs.content&&(this.tiles=Array.from(this.$refs.content.querySelectorAll(".v-list-item, .v-divider, .v-subheader")))},mouseEnterHandler(){this.runDelay("open",(()=>{this.hasJustFocused||(this.hasJustFocused=!0)}))},mouseLeaveHandler(t){this.runDelay("close",(()=>{var e;null!=(e=this.$refs.content)&&e.contains(t.relatedTarget)||requestAnimationFrame((()=>{this.isActive=!1,this.callDeactivate()}))}))},nextTile(){const t=this.tiles[this.listIndex+1];if(!t){if(!this.tiles.length)return;return this.listIndex=-1,void this.nextTile()}this.listIndex++,-1===t.tabIndex&&this.nextTile()},prevTile(){const t=this.tiles[this.listIndex-1];if(!t){if(!this.tiles.length)return;return this.listIndex=this.tiles.length,void this.prevTile()}this.listIndex--,-1===t.tabIndex&&this.prevTile()},lastTile(){const t=this.tiles[this.tiles.length-1];t&&(this.listIndex=this.tiles.length-1,-1===t.tabIndex&&this.prevTile())},firstTile(){const t=this.tiles[0];t&&(this.listIndex=0,-1===t.tabIndex&&this.nextTile())},onKeyDown(t){if(t.keyCode===f.Do.esc){setTimeout((()=>{this.isActive=!1}));const t=this.getActivator();this.$nextTick((()=>t&&t.focus()))}else!this.isActive&&[f.Do.up,f.Do.down].includes(t.keyCode)&&(this.isActive=!0);this.$nextTick((()=>this.changeListIndex(t)))},onResize(){this.isActive&&(this.$refs.content.offsetWidth,this.updateDimensions(),clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.updateDimensions,100))}},render(t){const e={staticClass:"v-menu",class:{"v-menu--attached":""===this.attach||!0===this.attach||"attach"===this.attach},directives:[{arg:"500",name:"resize",value:this.onResize}]};return t("div",e,[!this.activator&&this.genActivator(),this.showLazyContent((()=>[this.$createElement(n,{props:{root:!0,light:this.light,dark:this.dark}},[this.genTransition()])]))])}})},5942:function(t,e,i){var s=i(8856);function n(){return!0}function a(t,e,i){if(!t||!1===l(t,i))return!1;const n=(0,s.e)(e);if("undefined"!==typeof ShadowRoot&&n instanceof ShadowRoot&&n.host===t.target)return!1;const a=("object"===typeof i.value&&i.value.include||(()=>[]))();return a.push(e),!a.some((e=>e.contains(t.target)))}function l(t,e){const i="object"===typeof e.value&&e.value.closeConditional||n;return i(t)}function o(t,e,i,s){const n="function"===typeof i.value?i.value:i.value.handler;e._clickOutside.lastMousedownWasOutside&&a(t,e,i)&&setTimeout((()=>{l(t,i)&&n&&n(t)}),0)}function c(t,e){const i=(0,s.e)(t);e(document),"undefined"!==typeof ShadowRoot&&i instanceof ShadowRoot&&e(i)}const r={inserted(t,e,i){const s=s=>o(s,t,e,i),n=i=>{t._clickOutside.lastMousedownWasOutside=a(i,t,e)};c(t,(t=>{t.addEventListener("click",s,!0),t.addEventListener("mousedown",n,!0)})),t._clickOutside||(t._clickOutside={lastMousedownWasOutside:!0}),t._clickOutside[i.context._uid]={onClick:s,onMousedown:n}},unbind(t,e,i){t._clickOutside&&(c(t,(e=>{var s;if(!e||null==(s=t._clickOutside)||!s[i.context._uid])return;const{onClick:n,onMousedown:a}=t._clickOutside[i.context._uid];e.removeEventListener("click",n,!0),e.removeEventListener("mousedown",a,!0)})),delete t._clickOutside[i.context._uid])}};e["Z"]=r}}]);
//# sourceMappingURL=200.49d35e6a.js.map