(function(){"use strict";var o={1497:function(o,e,t){var n=t(9963),r=t(6252);const a={id:"appContainer"},i=(0,r._)("h1",null,"How much paint will you need?",-1);function s(o,e,t,n,s,l){const d=(0,r.up)("RoomShape");return(0,r.wg)(),(0,r.iD)("div",a,[i,(0,r.Wm)(d)])}const l=o=>((0,r.dD)("data-v-1a3badfa"),o=o(),(0,r.Cn)(),o),d={class:"mainContainer"},u=l((()=>(0,r._)("h2",null,"First, select a room shape:",-1))),h={id:"shapeContainer"},m={class:"roomShapeContainer"},p={class:"roomShapeContainer"},w={class:"roomShapeContainer"};function c(o,e,t,a,i,s){const l=(0,r.up)("MeasurementForm");return(0,r.wg)(),(0,r.iD)("div",d,[u,(0,r._)("form",{onSubmit:e[3]||(e[3]=(0,n.iM)((()=>{}),["prevent"]))},[(0,r._)("div",h,[(0,r._)("div",m,[(0,r.wy)((0,r._)("input",{label:"Rectangle",type:"radio",id:"rectangle",value:"rectangle",name:"roomShape","onUpdate:modelValue":e[0]||(e[0]=o=>i.roomShape=o)},null,512),[[n.G2,i.roomShape]])]),(0,r._)("div",p,[(0,r.wy)((0,r._)("input",{label:"Square",type:"radio",id:"square",value:"square",name:"roomShape","onUpdate:modelValue":e[1]||(e[1]=o=>i.roomShape=o)},null,512),[[n.G2,i.roomShape]])]),(0,r._)("div",w,[(0,r.wy)((0,r._)("input",{label:"Custom",type:"radio",id:"custom",value:"custom",name:"roomShape","onUpdate:modelValue":e[2]||(e[2]=o=>i.roomShape=o)},null,512),[[n.G2,i.roomShape]])])])],32),(0,r.Wm)(l,{roomShape:i.roomShape},null,8,["roomShape"])])}var f=t(3577);const _={key:0},g={key:1},v={key:2},b=(0,r._)("h3",null,"Saved Rooms:",-1),y={class:"roomList"},C=["onClick"],S={class:"roomId"},R=(0,r._)("br",null,null,-1),k={class:"roomData"},D={key:0},W={key:1},U=(0,r._)("br",null,null,-1),q=(0,r._)("br",null,null,-1),A=(0,r._)("br",null,null,-1);function H(o,e,t,n,a,i){const s=(0,r.up)("RectangleForm"),l=(0,r.up)("SquareForm"),d=(0,r.up)("CustomForm");return(0,r.wg)(),(0,r.iD)("div",null,["rectangle"==t.roomShape?((0,r.wg)(),(0,r.iD)("div",_,[(0,r.Wm)(s,{onAddRoom:i.addRoom},null,8,["onAddRoom"])])):(0,r.kq)("",!0),"square"==t.roomShape?((0,r.wg)(),(0,r.iD)("div",g,[(0,r.Wm)(l,{onAddRoom:i.addRoom},null,8,["onAddRoom"])])):(0,r.kq)("",!0),"custom"==t.roomShape?((0,r.wg)(),(0,r.iD)("div",v,[(0,r.Wm)(d,{onAddRoom:i.addRoom},null,8,["onAddRoom"])])):(0,r.kq)("",!0),b,(0,r._)("div",y,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.rooms,(o=>((0,r.wg)(),(0,r.iD)("div",{key:o.id,class:"roomCard"},[(0,r._)("button",{class:"delBtn",onClick:e=>i.deleteRoom(o.id)},"✖",8,C),(0,r._)("p",S,[(0,r.Uk)(" Room id #: "+(0,f.zw)(o.id),1),R,(0,r.Uk)(" ("+(0,f.zw)(o.shape)+") ",1)]),(0,r._)("div",k,[o.windows?((0,r.wg)(),(0,r.iD)("p",D,"Windows: "+(0,f.zw)(o.windows),1)):(0,r.kq)("",!0),o.doors?((0,r.wg)(),(0,r.iD)("p",W,"Doors: "+(0,f.zw)(o.doors),1)):(0,r.kq)("",!0),(0,r._)("p",null,[(0,r.Uk)("Paintable Area: "),U,(0,r.Uk)((0,f.zw)(o.area)+"sq. feet",1)]),(0,r._)("p",null,[(0,r.Uk)("One coat (walls): "),q,(0,r.Uk)((0,f.zw)(o.one_coat)+" gallon(s).",1)]),(0,r._)("p",null,[(0,r.Uk)("Two coats (walls): "),A,(0,r.Uk)((0,f.zw)(o.two_coats)+" gallon(s).",1)])])])))),128))])])}const M=o=>((0,r.dD)("data-v-0c3a685a"),o=o(),(0,r.Cn)(),o),V=M((()=>(0,r._)("h2",null,"Next, enter measurements:",-1))),O={class:"formHolder"},F={class:"inputContainer"},z=M((()=>(0,r._)("label",{for:"rectLength"},"Length",-1))),I={class:"inputContainer"},x=M((()=>(0,r._)("label",{for:"rectWidth"},"Width",-1))),L={class:"inputContainer"},j=M((()=>(0,r._)("label",{for:"rectHeight"},"Wall Height",-1))),B=M((()=>(0,r._)("h2",null,"Then, subtract windows and doors from area (optional):",-1))),N={class:"formHolder"},T={class:"inputContainer"},Z=M((()=>(0,r._)("label",{for:"windows"},"Windows (-15sq. ft.)",-1))),G={class:"inputContainer"},J=M((()=>(0,r._)("label",{for:"doors"},"Doors (-20sq. ft.)",-1))),P=M((()=>(0,r._)("input",{type:"submit",value:"Save Room",class:"submitBtn"},null,-1)));function $(o,e,t,a,i,s){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("form",{onSubmit:e[5]||(e[5]=(...o)=>s.submitRoom&&s.submitRoom(...o))},[V,(0,r._)("div",O,[(0,r._)("div",F,[z,(0,r.wy)((0,r._)("input",{type:"number",placeholder:"length","onUpdate:modelValue":e[0]||(e[0]=o=>i.length=o),id:"rectLength"},null,512),[[n.nr,i.length]])]),(0,r._)("div",I,[x,(0,r.wy)((0,r._)("input",{type:"number",placeholder:"width","onUpdate:modelValue":e[1]||(e[1]=o=>i.width=o),id:"rectWidth"},null,512),[[n.nr,i.width]])]),(0,r._)("div",L,[j,(0,r.wy)((0,r._)("input",{type:"number",placeholder:"height","onUpdate:modelValue":e[2]||(e[2]=o=>i.height=o),id:"rectHeight"},null,512),[[n.nr,i.height]])])]),B,(0,r._)("div",N,[(0,r._)("div",T,[Z,(0,r.wy)((0,r._)("input",{type:"number",placeholder:"Windows",id:"windows","onUpdate:modelValue":e[3]||(e[3]=o=>i.windows=o)},null,512),[[n.nr,i.windows]])]),(0,r._)("div",G,[J,(0,r.wy)((0,r._)("input",{type:"number",placeholder:"Doors",id:"doors","onUpdate:modelValue":e[4]||(e[4]=o=>i.doors=o)},null,512),[[n.nr,i.doors]])])]),P],32)])}var K={name:"rectangle-form",props:{},data(){return{length:"",width:"",height:"",windows:"",doors:""}},computed:{area(){return 2*(this.length+this.width)*this.height-(this.windowArea+this.doorArea)},oneCoat(){return Math.round(this.area/350*100)/100},twoCoats(){return Math.round(this.area/200*100)/100},windowArea(){return 15*this.windows},doorArea(){return 20*this.doors}},methods:{submitRoom(o){if(o.preventDefault(),this.length&&this.width&&this.height){const o={id:Math.floor(1e4*Math.random()),area:this.area,one_coat:this.oneCoat,two_coats:this.twoCoats,windows:this.windows,doors:this.doors,shape:"Rectangle"};this.$emit("addRoom",o),this.length="",this.width="",this.height="",this.windows="",this.doors=""}else alert("Input measurements first.")}}},Y=t(3744);const E=(0,Y.Z)(K,[["render",$],["__scopeId","data-v-0c3a685a"]]);var Q=E;const X=o=>((0,r.dD)("data-v-e97ed50e"),o=o(),(0,r.Cn)(),o),oo=X((()=>(0,r._)("h2",null,"Next, enter measurements:",-1))),eo={class:"formHolder"},to={class:"inputContainer"},no=X((()=>(0,r._)("label",{for:"squareLength"},"Length",-1))),ro={class:"inputContainer"},ao=X((()=>(0,r._)("label",{for:"squareHeight"},"Wall Height",-1))),io=X((()=>(0,r._)("h2",null,"Then, subtract windows and doors from area (optional):",-1))),so={class:"formHolder"},lo={class:"inputContainer"},uo=X((()=>(0,r._)("label",{for:"windows"},"Windows (-15sq. ft.)",-1))),ho={class:"inputContainer"},mo=X((()=>(0,r._)("label",{for:"doors"},"Doors (-20sq. ft.)",-1))),po=X((()=>(0,r._)("input",{type:"submit",value:"Save Room",class:"submitBtn"},null,-1)));function wo(o,e,t,a,i,s){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("form",{onSubmit:e[4]||(e[4]=(...o)=>s.submitRoom&&s.submitRoom(...o))},[oo,(0,r._)("div",eo,[(0,r._)("div",to,[no,(0,r.wy)((0,r._)("input",{type:"number",placeholder:"length","onUpdate:modelValue":e[0]||(e[0]=o=>i.length=o),id:"squareLength"},null,512),[[n.nr,i.length]])]),(0,r._)("div",ro,[ao,(0,r.wy)((0,r._)("input",{type:"number",placeholder:"height","onUpdate:modelValue":e[1]||(e[1]=o=>i.height=o),id:"squareHeight"},null,512),[[n.nr,i.height]])])]),io,(0,r._)("div",so,[(0,r._)("div",lo,[uo,(0,r.wy)((0,r._)("input",{type:"number",placeholder:"Windows",id:"windows","onUpdate:modelValue":e[2]||(e[2]=o=>i.windows=o)},null,512),[[n.nr,i.windows]])]),(0,r._)("div",ho,[mo,(0,r.wy)((0,r._)("input",{type:"number",placeholder:"Doors",id:"doors","onUpdate:modelValue":e[3]||(e[3]=o=>i.doors=o)},null,512),[[n.nr,i.doors]])])]),po],32)])}var co={name:"square-form",props:{},data(){return{length:"",height:"",windows:"",doors:""}},computed:{area(){return 4*this.length*this.height-(this.windowArea+this.doorArea)},oneCoat(){return Math.round(this.area/350*100)/100},twoCoats(){return Math.round(this.area/200*100)/100},windowArea(){return 15*this.windows},doorArea(){return 20*this.doors}},methods:{submitRoom(o){if(o.preventDefault(),this.length&&this.height){const o={id:Math.floor(1e4*Math.random()),area:this.area,one_coat:this.oneCoat,two_coats:this.twoCoats,windows:this.windows,doors:this.doors,shape:"Square"};this.$emit("addRoom",o),this.length="",this.height="",this.windows="",this.doors=""}else alert("Input measurements first.")}}};const fo=(0,Y.Z)(co,[["render",wo],["__scopeId","data-v-e97ed50e"]]);var _o=fo;const go=(0,r._)("h2",null,"Next, enter measurements:",-1),vo={class:"formHolder"},bo=["onUpdate:modelValue"],yo=["onClick"],Co={class:"inputContainer height"},So=(0,r._)("label",{for:"customHeight"},"Wall Height",-1),Ro=(0,r._)("h2",null,"Then, subtract windows and doors from area (optional):",-1),ko={class:"formHolder"},Do={class:"inputContainer"},Wo=(0,r._)("label",{for:"windows"},"Windows (-15sq. ft.)",-1),Uo={class:"inputContainer"},qo=(0,r._)("label",{for:"doors"},"Doors (-20sq. ft.)",-1),Ao=(0,r._)("input",{type:"submit",value:"Save Room",class:"submitBtn"},null,-1);function Ho(o,e,t,a,i,s){return(0,r.wg)(),(0,r.iD)("form",{onSubmit:e[4]||(e[4]=(...o)=>s.submitRoom&&s.submitRoom(...o))},[go,(0,r._)("div",vo,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.walls,((o,e)=>((0,r.wg)(),(0,r.iD)("div",{class:"inputContainer customForm",key:e},[(0,r._)("label",null,"Wall "+(0,f.zw)(e+1),1),(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":e=>o.width=e,type:"number",placeholder:"Width",class:"wallInput"},null,8,bo),[[n.nr,o.width]]),(0,r._)("button",{onClick:(0,n.iM)((o=>s.removeWall(e)),["prevent"]),class:"removeWallBtn"},"✖",8,yo)])))),128)),(0,r._)("div",Co,[So,(0,r.wy)((0,r._)("input",{type:"number",placeholder:"height","onUpdate:modelValue":e[0]||(e[0]=o=>i.height=o),id:"customHeight"},null,512),[[n.nr,i.height]])])]),(0,r._)("button",{onClick:e[1]||(e[1]=(0,n.iM)((o=>s.addWall()),["prevent"])),class:"addWallBtn"},"Add wall"),Ro,(0,r._)("div",ko,[(0,r._)("div",Do,[Wo,(0,r.wy)((0,r._)("input",{type:"number",placeholder:"Windows",id:"windows","onUpdate:modelValue":e[2]||(e[2]=o=>i.windows=o)},null,512),[[n.nr,i.windows]])]),(0,r._)("div",Uo,[qo,(0,r.wy)((0,r._)("input",{type:"number",placeholder:"Doors",id:"doors","onUpdate:modelValue":e[3]||(e[3]=o=>i.doors=o)},null,512),[[n.nr,i.doors]])])]),Ao],32)}t(7658);var Mo={name:"custom-form",props:{},data(){return{height:"",walls:[{width:""},{width:""},{width:""},{width:""}],windows:"",doors:""}},computed:{area(){let o=this.walls.reduce(((o,e)=>o+e.width*this.height),0);return o-(this.windowArea+this.doorArea)},oneCoat(){return Math.round(this.area/350*100)/100},twoCoats(){return Math.round(this.area/200*100)/100},windowArea(){return 15*this.windows},doorArea(){return 20*this.doors}},methods:{addWall(){this.walls.push({width:""})},removeWall(o){this.walls.splice(o,1)},submitRoom(o){if(o.preventDefault(),this.height){const o={id:Math.floor(1e4*Math.random()),area:this.area,one_coat:this.oneCoat,two_coats:this.twoCoats,windows:this.windows,doors:this.doors,shape:"Custom"};this.$emit("addRoom",o),this.walls=[{width:""},{width:""},{width:""},{width:""}],this.height="",this.windows="",this.doors=""}else alert("Input height first.")}}};const Vo=(0,Y.Z)(Mo,[["render",Ho]]);var Oo=Vo,Fo={name:"measurement-form",props:{roomShape:String},components:{RectangleForm:Q,SquareForm:_o,CustomForm:Oo},data(){return{rooms:[]}},mounted(){localStorage.rooms&&(this.rooms=JSON.parse(localStorage.rooms))},watch:{rooms:{handler(o){localStorage.rooms=JSON.stringify(o)},deep:!0}},emits:["addRoom"],methods:{addRoom(o){if(localStorage.rooms){let e=JSON.parse(localStorage.rooms);this.rooms=[...e,o]}else this.rooms=[...this.rooms,o]},deleteRoom(o){confirm("Delete this room?")&&(this.rooms=this.rooms.filter((e=>e.id!==o)))}}};const zo=(0,Y.Z)(Fo,[["render",H]]);var Io=zo,xo={name:"Add-Room",components:{MeasurementForm:Io},data(){return{roomShape:""}}};const Lo=(0,Y.Z)(xo,[["render",c],["__scopeId","data-v-1a3badfa"]]);var jo=Lo,Bo={name:"App",components:{RoomShape:jo}};const No=(0,Y.Z)(Bo,[["render",s]]);var To=No;(0,n.ri)(To).mount("#app")}},e={};function t(n){var r=e[n];if(void 0!==r)return r.exports;var a=e[n]={exports:{}};return o[n](a,a.exports,t),a.exports}t.m=o,function(){var o=[];t.O=function(e,n,r,a){if(!n){var i=1/0;for(u=0;u<o.length;u++){n=o[u][0],r=o[u][1],a=o[u][2];for(var s=!0,l=0;l<n.length;l++)(!1&a||i>=a)&&Object.keys(t.O).every((function(o){return t.O[o](n[l])}))?n.splice(l--,1):(s=!1,a<i&&(i=a));if(s){o.splice(u--,1);var d=r();void 0!==d&&(e=d)}}return e}a=a||0;for(var u=o.length;u>0&&o[u-1][2]>a;u--)o[u]=o[u-1];o[u]=[n,r,a]}}(),function(){t.d=function(o,e){for(var n in e)t.o(e,n)&&!t.o(o,n)&&Object.defineProperty(o,n,{enumerable:!0,get:e[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"===typeof window)return window}}()}(),function(){t.o=function(o,e){return Object.prototype.hasOwnProperty.call(o,e)}}(),function(){var o={143:0};t.O.j=function(e){return 0===o[e]};var e=function(e,n){var r,a,i=n[0],s=n[1],l=n[2],d=0;if(i.some((function(e){return 0!==o[e]}))){for(r in s)t.o(s,r)&&(t.m[r]=s[r]);if(l)var u=l(t)}for(e&&e(n);d<i.length;d++)a=i[d],t.o(o,a)&&o[a]&&o[a][0](),o[a]=0;return t.O(u)},n=self["webpackChunkpaint_amount"]=self["webpackChunkpaint_amount"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(1497)}));n=t.O(n)})();
//# sourceMappingURL=app.26c011ca.js.map