webpackJsonp([37],{0:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var u=o(11),r=n(u),c=o(770),i=n(c);new r.default({el:"body",components:{App:i.default}})},300:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=o(2),r=n(u),c=o(4),i=o(44),a=n(i);r.default.Vue.use(r.default.Resource),t.default={data:function(){return{}},components:{},ready:function(){this.login()},methods:{login:function(){c.Indicator.open();var e={url:"https://graph.qq.com/user/get_user_info"};QC.api("get_user_info",e).success(function(e){c.Indicator.close();var t=e.data.nickname,o=e.data.figureurl_2;QC.Login.getMe(function(e,n){a.default.ajax({type:"get",url:r.default.C.Mpath+"qq/qq_login_bind?nickname="+t+"&figureurl_2="+o+"&qq_openid="+e+"&from=mobile",dataType:"jsonp",success:function(e){e.user.account?((0,c.Toast)("登录成功"),setTimeout(function(){window.location.href="home.html"},1e3)):((0,c.Toast)("登录成功,请绑定手机号码"),setTimeout(function(){window.location.href="http://localhost:8083/module/register.html"},1e3))},error:function(){alert("fail")}})})}).error(function(e){c.Indicator.close(),alert("获取用户信息失败！")}).complete(function(e){c.Indicator.close()})}}}},649:function(e,t){},716:function(e,t){e.exports=" "},770:function(e,t,o){var n,u,r={};o(649),n=o(300),u=o(716),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports.default);var c="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;u&&(c.template=u),c.computed||(c.computed={}),Object.keys(r).forEach(function(e){var t=r[e];c.computed[e]=function(){return t}})}});