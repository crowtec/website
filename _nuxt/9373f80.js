(window.webpackJsonp=window.webpackJsonp||[]).push([[22,3,12],{289:function(t,e,r){var o=r(291);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,r(32).default)("fd75406a",o,!0,{sourceMap:!1})},290:function(t,e,r){"use strict";r(289)},291:function(t,e,r){var o=r(31)(!1);o.push([t.i,".cover[data-v-06b63c6c],.cover .image[data-v-06b63c6c]{height:100vh;width:100%}.cover .image[data-v-06b63c6c]{position:absolute;left:0;top:0;z-index:0;-o-object-fit:cover;object-fit:cover}.cover h1[data-v-06b63c6c],.cover h2[data-v-06b63c6c]{z-index:1;line-height:1.25;font-size:3.125em;filter:drop-shadow(0 0 .75rem #000)}@media(min-width:576px){.cover h1[data-v-06b63c6c],.cover h2[data-v-06b63c6c]{font-size:3.4375em}}@media(min-width:768px){.cover h1[data-v-06b63c6c],.cover h2[data-v-06b63c6c]{font-size:6.25em}}@media(min-width:992px){.cover h1[data-v-06b63c6c],.cover h2[data-v-06b63c6c]{font-size:7.875em}}.cover .cover-gradient[data-v-06b63c6c]{bottom:0;height:43vh;max-height:370px;background:linear-gradient(180deg,transparent,#000)}",""]),t.exports=o},292:function(t,e,r){"use strict";r.r(e);var o={props:{image:{type:String,require:!0}},data:function(){return{}},methods:{}},a=(r(290),r(22)),i=Object(a.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"cover d-flex justify-content-center align-items-center position-relative"},[e("img",{staticClass:"image",attrs:{src:t.image,alt:""}}),t._v(" "),t._t("default",(function(){return[t._m(0)]})),t._v(" "),e("div",{staticClass:"cover-gradient position-absolute w-100"})],2)}),[function(){var t=this,e=t._self._c;return e("h1",{staticClass:"text-center font-weight-bold text-lowercase"},[e("span",{staticClass:"font-weight-light"},[t._v("think ")]),t._v(" "),e("br"),t._v("\n      outside "),e("br"),t._v("\n      the "),e("span",{staticClass:"text-red"},[t._v("nest;")])])}],!1,null,"06b63c6c",null);e.default=i.exports},295:function(t,e,r){var o=r(306);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,r(32).default)("6d37c277",o,!0,{sourceMap:!1})},305:function(t,e,r){"use strict";r(295)},306:function(t,e,r){var o=r(31)(!1);o.push([t.i,'.crow-project[data-v-602ff6a2]{overflow-x:hidden}.intro[data-v-602ff6a2]{width:100%;background:url(https://assets.crowtec.co/crowtec/crow.jpg) no-repeat 50%/cover;line-height:1.25}@media(min-width:992px){.intro[data-v-602ff6a2]{min-height:800px}}.title[data-v-602ff6a2]{font-size:1.875em}@media(min-width:768px){.title[data-v-602ff6a2]{font-size:2.8125em;font-size:3.75em}}.title h1[data-v-602ff6a2]{font-size:1em}@media(min-width:768px){.description[data-v-602ff6a2],.text[data-v-602ff6a2]{font-size:1.3125em}}.video-container[data-v-602ff6a2]{width:100%;height:0;position:relative;padding-bottom:56.25%}.video-container .video[data-v-602ff6a2]{position:absolute;left:0;width:100%;height:100%;border:0}.semi-circle[data-v-602ff6a2]{right:-24px;bottom:0;border-radius:2000px 0 0 2000px;border:3px solid #00ff91}.semi-circle[data-v-602ff6a2]:before{content:"";display:block;padding-top:200%;width:100%}.subtitle[data-v-602ff6a2]{line-height:1.25;font-size:3.125em}.other-projects[data-v-602ff6a2]{text-decoration:none;color:#fff;cursor:pointer}.other-projects[data-v-602ff6a2]:hover{color:#00ff91}.details[data-v-602ff6a2]{position:relative;overflow:hidden}.line[data-v-602ff6a2]{background-color:#00ff91;height:14px}',""]),t.exports=o},327:function(t,e,r){"use strict";r.r(e);r(8);var o=r(7).default.extend({props:["id","image","video","tags","featuredProjects"],data:function(){return{}},methods:{shuffleArray:function(t){for(var e=t.length-1;e>0;e--){var r=Math.floor(Math.random()*(e+1)),o=[t[r],t[e]];t[e]=o[0],t[r]=o[1]}}},mounted:function(){}}),a=(r(305),r(22)),i=Object(a.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"crow-project",attrs:{id:t.id}},[e("cover",{attrs:{image:t.image}},[e("h2",{staticClass:"subtitle text-center font-weight-bold text-lowercase"},[t._t("header",(function(){return[t._v(" Project header ")]}))],2)]),t._v(" "),e("section",{staticClass:"intro mt-5 position-relative overflow-hidden p-3 p-md-0 mb-5",attrs:{id:"description"}},[e("b-row",{attrs:{"no-gutters":""}},[e("b-col",{attrs:{md:"5","offset-md":"2"}},[e("div",{staticClass:"title text-left font-weight-light"},[e("h1",{staticClass:"m-0 font-weight-bold"},[t._t("title",(function(){return[t._v(" Project Name ")]}))],2),t._v(" "),t._t("title-extra",(function(){return[t._v(" Project extra ")]}))],2),t._v(" "),e("div",{staticClass:"tags text-green mt-3"},[t._v("\n          "+t._s(t.tags.map((function(t){return"#".concat(t)})).join(" "))+"\n        ")]),t._v(" "),e("div",{staticClass:"description font-weight-light text-justify mt-5"},[t._t("description",(function(){return[t._v(" Project description ")]}))],2)])],1),t._v(" "),e("div",{staticClass:"semi-circle position-absolute border-right-0 r-0 w-25 d-none d-md-block"})],1),t._v(" "),t.video?e("div",{attrs:{name:"video"}},[e("div",{staticClass:"video-container",attrs:{id:"video"}},[e("iframe",{staticClass:"video",attrs:{frameborder:"0",src:t.video,allowfullscreen:""}})])]):t._e(),t._v(" "),e("section",{staticClass:"clearfix mt-5 position-relative overflow-hidden mb-5 overflow-hidden",attrs:{id:"details"}},[e("b-row",[e("b-col",{attrs:{cols:"10",offset:"1"}},[t.$slots.details?t._t("details"):t._e()],2)],1)],1)],1)}),[],!1,null,"602ff6a2",null);e.default=i.exports;installComponents(i,{Cover:r(292).default})},370:function(t,e,r){"use strict";r.r(e);r(9);var o=r(23),a=r(13),i=(r(52),r(39),r(14),r(40),r(1),r(7).default.extend({data:function(){return{projects:[],featuredProjects:[]}},asyncData:function(t){return Object(a.a)(regeneratorRuntime.mark((function e(){var r,a,i,n,c,s,d,l,f,u,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,a=t.error,i=t.$content,e.prev=1,e.next=4,i("projects").only(["slug","name","excerpt","thumbnail","thumbnailAlt","tags","cover","isFeatured"]).sortBy("order","asc").fetch();case 4:return n=e.sent,e.t0=Promise,e.next=8,i("projects").only(["slug","name","tags","cover","coverAlt","thumbnail","video","excerpt"]).where({slug:r.slug}).fetch();case 8:return e.t1=e.sent,e.t2=i("".concat(r.slug,"/header")).fetch(),e.t3=i("".concat(r.slug,"/title-extra")).fetch(),e.t4=i("".concat(r.slug,"/description")).fetch(),e.t5=i("".concat(r.slug,"/details")).fetch(),e.t6=[e.t1,e.t2,e.t3,e.t4,e.t5],e.next=16,e.t0.all.call(e.t0,e.t6);case 16:return c=e.sent,s=Object(o.a)(c,5),d=s[0],l=s[1],f=s[2],u=s[3],v=s[4],e.abrupt("return",{project:d[0],featuredProjects:n,header:l,titleExtra:f,description:u,details:v});case 26:e.prev=26,e.t7=e.catch(1),a({statusCode:404,message:"project not found"});case 29:case"end":return e.stop()}}),e,null,[[1,26]])})))()},methods:{getFeaturedProjects:function(){var t=this,e=this.$data.featuredProjects.filter((function(e){return!0===e.isFeatured&&e.slug!==t.$route.params.slug}));this.featuredProjects=e}},mounted:function(){this.getFeaturedProjects()},head:function(){var t="https://crowtec.co/projects/".concat(this.$route.params.slug),e="".concat(this.project.name," | Crowtec"),r="".concat(this.project.excerpt,"."),o=this.project.thumbnail;return{title:e,meta:[{name:"description",content:r},{content:t,property:"og:url"},{content:e,property:"og:title"},{name:"og:description",content:r},{content:o,property:"og:image"},{content:e,property:"twitter:title"},{name:"twitter:description",content:r},{content:o,property:"twiter:image:src"}],link:[{rel:"canonical",href:t},{rel:"shortlink",href:t},{rel:"alternate",href:t,hreflang:"en"}]}}})),n=r(22),c=Object(n.a)(i,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("section",[e("project",{attrs:{id:"map-of-history",tags:t.project.tags,image:t.project.cover,video:t.project.video,featuredProjects:t.featuredProjects},scopedSlots:t._u([{key:"header",fn:function(){return[e("nuxt-content",{attrs:{document:t.header}})]},proxy:!0},{key:"title",fn:function(){return[t._v(" "+t._s(t.project.name)+" ")]},proxy:!0},{key:"title-extra",fn:function(){return[e("nuxt-content",{attrs:{document:t.titleExtra}})]},proxy:!0},{key:"description",fn:function(){return[e("nuxt-content",{attrs:{document:t.description}})]},proxy:!0},{key:"details",fn:function(){return[e("nuxt-content",{staticClass:"blibli",attrs:{document:t.details}})]},proxy:!0}])})],1)}),[],!1,null,"4d438b80",null);e.default=c.exports;installComponents(c,{Project:r(327).default})}}]);