webpackJsonp([26],{0:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}var i=a(11),o=s(i),l=a(782),n=s(l);new o.default({el:"body",components:{App:n.default}})},6:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}var i=a(2),o=s(i);a(4);o.default.Vue.use(o.default.Resource),e.exports={data:function(){return{title:""}},props:["html"],ready:function(){this.title=document.title},methods:{back:function(){this.html?window.location.href=this.html:history.back()}}}},7:function(e,t){},8:function(e,t){e.exports=' <div class=height _v-526c7022=""></div> <div class="backbar clearfix" id=header _v-526c7022=""> <a @click=back class=back _v-526c7022=""><i class="iconfont icon-back" _v-526c7022=""></i></a> <h2 class="title ellipsis" id=title _v-526c7022="">{{title}}</h2> <a href=home.html class=home _v-526c7022=""><i class="iconfont icon-back" _v-526c7022=""></i></a> </div> '},9:function(e,t,a){var s,i,o={};a(7),s=a(6),i=a(8),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports.default);var l="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;i&&(l.template=i),l.computed||(l.computed={}),Object.keys(o).forEach(function(e){var t=o[e];l.computed[e]=function(){return t}})},312:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(2),o=s(i),l=a(4),n=a(9),r=s(n);o.default.Vue.use(o.default.Resource),o.default.Vue.component(l.Cell.name,l.Cell),o.default.Vue.component(l.Button.name,l.Button),o.default.Vue.component(l.Popup.name,l.Popup),t.default={data:function(){return{otherId:"",userId:"",user:{},users:{},popupVisible:!1,letterText:""}},components:{topBack:r.default},ready:function(){this.getData()},methods:{getData:function(){this.otherId=o.default.C.getSearchString("id");var e=o.default.C.Mpath+"tbuser/otherIndex?otherId="+this.otherId;l.Indicator.open(),this.$http.jsonp(e).then(function(e){l.Indicator.close(),this.users=e.data,this.user=e.data.vo,this.userId=e.data.userId,this.otherId==this.userId&&(location.href="user.html")},function(){l.Indicator.close(),(0,l.Toast)("请求出错")})},showLetter:function(){this.popupVisible=!0},letter:function(){return""==this.letterText?((0,l.Toast)("私信内容不能为空"),!1):void this.$http.jsonp(o.default.C.Mpath+"message/ajaxsaveMessage?&touserid="+this.otherId+"&content="+this.letterText).then(function(e){1==e.data.status?((0,l.Toast)(e.data.message),this.popupVisible=!1):(0,l.Toast)(e.data.message)},function(){(0,l.Toast)("请求出错")})},follow:function(){var e=this;this.user.flag?l.MessageBox.confirm("是否取消关注?").then(function(t){e.setfollow()}):this.setfollow()},setfollow:function(){this.$http.jsonp(o.default.C.Mpath+"productDetails/guanzhu?&id="+this.otherId).then(function(e){1==e.data.status?(this.user.flag=!0,(0,l.Toast)(e.data.message)):e.data.status==-1?(this.user.flag=!1,(0,l.Toast)(e.data.message)):(0,l.Toast)(e.data.message)},function(){(0,l.Toast)("请求出错")})}}}},625:function(e,t){},692:function(e,t){e.exports=' <top-back _v-1a32e770=""></top-back> <section class=user _v-1a32e770=""> <div class=user-top :style="\'background-image:url(\'+user.background_img+\')\'" _v-1a32e770=""> <a class=fl v-if=user.name _v-1a32e770=""><img class=img :src="user.path+\'/\'+user.name" :alt="user.trueName || \'艺朵云\'" _v-1a32e770=""></a> <a class=fl v-else="" _v-1a32e770=""><img class=img :src=user.faceurl _v-1a32e770=""></a> <div class=intro _v-1a32e770=""> <div _v-1a32e770=""> <div class="name ellipsis" v-if=user.nickname _v-1a32e770="">{{user.nickname}}</div> <div class="name ellipsis" v-else="" _v-1a32e770="">艺朵云</div> <div class=identity v-if="user.artlevel > 0" _v-1a32e770="">艺术家LV{{user.artlevel}}</div> <div class=identity v-if="user.agentlevel > 0 &amp;&amp; user.agentlevel < 6" _v-1a32e770="">经纪人LV{{user.agentlevel}}</div> <div class=identity v-if="user.agentlevel == 6" _v-1a32e770="">机构</div> </div> <p class=motto v-if=user.signate _v-1a32e770="">{{user.signate}}</p> <p class=motto v-else="" _v-1a32e770="">对方还没有填写个性签名哦</p> </div> </div> <div class=card _v-1a32e770=""> <a class="mint-cell noline" :href="\'personals.html?id=\'+user.id" _v-1a32e770=""> <div class=mint-cell-wrapper _v-1a32e770=""> <div class=mint-cell-title _v-1a32e770=""> <i class=iconfont slot=icon _v-1a32e770=""></i> <span class=mint-cell-text _v-1a32e770="">他人资料</span> </div> </div> <i class=mint-cell-allow-right _v-1a32e770=""></i> </a> </div> <div class=card _v-1a32e770=""> <ul class="list clearfix" _v-1a32e770=""> <li v-if="user.artlevel > 0 || user.agentlevel == 6" _v-1a32e770=""> <a :href="\'arts.html?id=\'+user.id" _v-1a32e770=""><i class="iconfont already" _v-1a32e770=""></i> <p _v-1a32e770="">艺术品<span _v-1a32e770="">({{user.productNumber}})</span></p></a> </li> <li v-if="user.agentlevel > 0 &amp;&amp; user.agentlevel < 6" _v-1a32e770=""> <a :href="\'agents.html\'" _v-1a32e770=""><i class="iconfont already" _v-1a32e770=""></i> <p _v-1a32e770="">推广<span _v-1a32e770="">({{user.allArticleNumber}})</span></p> </a> </li> <li _v-1a32e770=""><a :href="\'articles.html?id=\'+user.id" _v-1a32e770=""><i class="iconfont wait" _v-1a32e770=""></i><p _v-1a32e770="">文章<span _v-1a32e770="">({{user.articleNumber}})</span></p></a></li> <li _v-1a32e770=""><a :href="\'says.html?id=\'+user.id" _v-1a32e770=""><i class="iconfont receipt" _v-1a32e770=""></i><p _v-1a32e770="">说说<span _v-1a32e770="">({{user.sayNumber}})</span></p></a></li> </ul> </div> <div class=card _v-1a32e770=""> <ul class="list list2 clearfix" _v-1a32e770=""> <li class=nopint _v-1a32e770=""><a _v-1a32e770=""><i class="iconfont already" _v-1a32e770=""></i><p _v-1a32e770="">关注 <span _v-1a32e770="">({{user.attenumber}})</span></p></a></li> <li class=nopint _v-1a32e770=""><a _v-1a32e770=""><i class="iconfont wait" _v-1a32e770=""></i><p _v-1a32e770="">粉丝 <span _v-1a32e770="">({{user.fansnumber}})</span></p></a></li> </ul> </div> </section> <div class=fixdbox _v-1a32e770=""></div> <div class="fixed center" _v-1a32e770=""> <mt-button type=primary size=normal @click=follow v-if=user.flag _v-1a32e770=""> 取消关注 </mt-button> <mt-button type=primary size=normal @click=setfollow v-else="" _v-1a32e770=""> 关注 </mt-button> <mt-button type=primary size=normal @click=showLetter _v-1a32e770=""> 私信 </mt-button> </div> <mt-popup :visible.sync=popupVisible _v-1a32e770=""> <div class=popupbox _v-1a32e770=""> <textarea name=letter cols=30 rows=10 placeholder=填写私信内容 v-model=letterText _v-1a32e770=""></textarea> <div class=page-button _v-1a32e770=""> <button class="mint-button mint-button--primary mint-button--normal" @click=letter _v-1a32e770="">发送</button> </div> </div> </mt-popup> '},782:function(e,t,a){var s,i,o={};a(625),s=a(312),i=a(692),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports.default);var l="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;i&&(l.template=i),l.computed||(l.computed={}),Object.keys(o).forEach(function(e){var t=o[e];l.computed[e]=function(){return t}})}});