(function(){"use strict";var t={3286:function(t,e,n){var i=n(2856),s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("TestSwiper")],1)},r=[],o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"test-swiper-ct"},[e("CopySwiper",{staticClass:"test-copy-swiper",on:{runOver:t.runOver}},t._l(t.swiperList,(function(n,i){return e("copy-slide",{key:i},[e("div",{staticClass:"bg-img"},[e("img",{attrs:{src:"http://www.metwo.cn/resource/huli.jpeg"}})]),e("div",{staticClass:"content"},[t._v(" "+t._s(n))])])})),1)],1)},u=[],c=(n(4114),function(){var t=this,e=t._self._c;return e("div",{staticClass:"copy-swiper-ct"},[e("div",{ref:"swiperItems",staticClass:"swiper-items"},[t._t("default")],2),e("div",{staticClass:"swiper-btn btn-pre",class:t.swiperRunIndex<=0?"no-show":"",on:{click:t.toPre}}),e("div",{staticClass:"swiper-btn btn-next",class:t.swiperRunIndex>=t.itemLength-1?"no-show":"",on:{click:t.toNext}})])}),l=[],a={name:"CopySwiper",props:{autoplay:{type:Boolean,default:!0},duration:{type:Number,default:3e3}},data:()=>({swiperRunIndex:0,isRunning:!1,ctWidth:0,itemLength:0}),methods:{toRun(t){this.isRunning=!0,this.$refs.swiperItems.scrollTo({left:this.ctWidth*t,behavior:"smooth"}),setTimeout((()=>{this.swiperRunIndex=t,this.$emit("runOver",t),this.isRunning=!1}),1e3)},toPre(){if(this.isRunning)return;const t=this.swiperRunIndex-1;t>=0&&this.toRun(t)},toNext(){if(this.isRunning)return;const t=this.swiperRunIndex+1;t<=this.itemLength-1&&this.toRun(t)}},mounted(){this.ctWidth=this.$refs.swiperItems.getBoundingClientRect().width,this.itemLength=this.$slots.default.length},updated(){this.itemLength=this.$slots.default.length}},p=a,f=n(1656),h=(0,f.A)(p,c,l,!1,null,"1c43406b",null),d=h.exports,w=function(){var t=this,e=t._self._c;return e("div",{staticClass:"copy-slide-ct"},[t._t("default")],2)},v=[],m={name:"CopySlide"},g=m,y=(0,f.A)(g,w,v,!1,null,"4a5c89a8",null),b=y.exports,x={name:"TestSwiper",data:()=>({swiperList:[1,2,3,4]}),components:{CopySwiper:d,CopySlide:b},methods:{runOver(t){t>=this.swiperList.length-1&&this.getShici()},getShici(){setTimeout((()=>{this.swiperList.push("这是诗句")}),1e3)}},mounted(){}},C=x,_=(0,f.A)(C,o,u,!1,null,"109d1afc",null),O=_.exports,R={name:"App",components:{TestSwiper:O}},S=R,I=(0,f.A)(S,s,r,!1,null,null,null),L=I.exports;i.Ay.config.productionTip=!1,new i.Ay({render:t=>t(L)}).$mount("#app")}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var r=e[i]={exports:{}};return t[i].call(r.exports,r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,i,s,r){if(!i){var o=1/0;for(a=0;a<t.length;a++){i=t[a][0],s=t[a][1],r=t[a][2];for(var u=!0,c=0;c<i.length;c++)(!1&r||o>=r)&&Object.keys(n.O).every((function(t){return n.O[t](i[c])}))?i.splice(c--,1):(u=!1,r<o&&(o=r));if(u){t.splice(a--,1);var l=s();void 0!==l&&(e=l)}}return e}r=r||0;for(var a=t.length;a>0&&t[a-1][2]>r;a--)t[a]=t[a-1];t[a]=[i,s,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={524:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var s,r,o=i[0],u=i[1],c=i[2],l=0;if(o.some((function(e){return 0!==t[e]}))){for(s in u)n.o(u,s)&&(n.m[s]=u[s]);if(c)var a=c(n)}for(e&&e(i);l<o.length;l++)r=o[l],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(a)},i=self["webpackChunkcopy_swipers"]=self["webpackChunkcopy_swipers"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[504],(function(){return n(3286)}));i=n.O(i)})();
//# sourceMappingURL=app.3620cb51.js.map