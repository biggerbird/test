webpackJsonp([32],{0:function(t,e,d){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}var a=d(11),i=s(a),o=d(763),c=s(o);new i.default({el:"body",components:{App:c.default}})},6:function(t,e,d){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}var a=d(2),i=s(a);d(4);i.default.Vue.use(i.default.Resource),t.exports={data:function(){return{title:""}},props:["html"],ready:function(){this.title=document.title},methods:{back:function(){this.html?window.location.href=this.html:history.back()}}}},7:function(t,e){},8:function(t,e){t.exports=' <div class=height _v-526c7022=""></div> <div class="backbar clearfix" id=header _v-526c7022=""> <a @click=back class=back _v-526c7022=""><i class="iconfont icon-back" _v-526c7022=""></i></a> <h2 class="title ellipsis" id=title _v-526c7022="">{{title}}</h2> <a href=home.html class=home _v-526c7022=""><i class="iconfont icon-back" _v-526c7022=""></i></a> </div> '},9:function(t,e,d){var s,a,i={};d(7),s=d(6),a=d(8),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports.default);var o="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;a&&(o.template=a),o.computed||(o.computed={}),Object.keys(i).forEach(function(t){var e=i[t];o.computed[t]=function(){return e}})},293:function(t,e,d){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=d(2),i=s(a),o=d(4),c=d(9),r=s(c);i.default.Vue.component(o.Popup.name,o.Popup),i.default.Vue.component(o.Button.name,o.Button),i.default.Vue.component(o.Field.name,o.Field),e.default={data:function(){return{id:"",product:"",addr:[],popupVisible:!1,paypwd:"",price:"",payprice:"0",addressId:""}},components:{topBack:r.default},ready:function(){this.id=i.default.C.getSearchString("id"),this.getData(),this.getAddr()},methods:{getData:function(){o.Indicator.open(),this.$http.jsonp(i.default.C.Mpath+"order/orderSure?productId="+this.id).then(function(t){o.Indicator.close(),this.product=t.data.product,this.price=t.data.product.price,this.avayundou=t.data.user.avayundou},function(){o.Indicator.close(),(0,o.Toast)("请求出错")})},getAddr:function(){this.$http.jsonp(i.default.C.Mpath+"address/AddressList").then(function(t){this.addr=t.data.address},function(){o.Indicator.close(),(0,o.Toast)("请求出错")})},submits:function(){return this.addressId?void this.$http.jsonp(i.default.C.Mpath+"order/ajaxsave?totalprice="+this.payprice+"&payprice="+this.payprice+"&productId="+this.id+"&addressId="+this.addressId).then(function(t){1==t.data.status&&((0,o.Toast)("订单提交成功"),setTimeout(function(){location.href="payment.html?id="+t.data.data.id},1e3))},function(){o.Indicator.close(),(0,o.Toast)("请求出错")}):((0,o.Toast)("请设置收货地址"),!1)}}}},620:function(t,e){},687:function(t,e){t.exports=' <top-back _v-10958d4b=""></top-back> <div class=order _v-10958d4b=""> <section class=pro-detail _v-10958d4b=""> <h5 _v-10958d4b="">订单详情</h5> <ul _v-10958d4b=""> <li class=clearfix _v-10958d4b=""> <a :href="\'art.html?id=\'+product.id" :style="\'background-image:url(\'+product.mainurl+\')\'" class="img fl" _v-10958d4b=""></a> <div _v-10958d4b=""> <h6 class=ellipsis _v-10958d4b="">{{product.name}}</h6> <div class=prinum _v-10958d4b=""> <b _v-10958d4b="">类型</b>：{{product.producttype}}<em class=space _v-10958d4b=""></em> <b _v-10958d4b="">尺寸</b>：{{product.pwidth}}cm * {{product.pheight}}cm <br _v-10958d4b=""> <b _v-10958d4b="">年份</b>：{{product.createyear}}<em class=space _v-10958d4b=""></em> <b _v-10958d4b="">材质</b>：{{product.material}}<em class=space _v-10958d4b=""></em> <b _v-10958d4b="">装裱</b>： <template v-if=!product.haspack> 是 </template> <template v-else=""> 否 </template> <em class=space _v-10958d4b=""></em> </div> </div> <div class=Subtotal _v-10958d4b="">价格：￥<span class=bigsize _v-10958d4b="">{{product.price}}</span></div> </li> </ul> </section> <section class=consignee _v-10958d4b=""> <h5 _v-10958d4b="">收货人信息 <a href=address.html v-if="addr.length == 0" _v-10958d4b=""><mt-button type=primary size=small _v-10958d4b="">设置地址</mt-button></a></h5> <div class=list _v-10958d4b=""> <template v-for="item in addr"> <a href=address.html class=link v-if=item.isdefault _v-10958d4b=""> <div class=addrs _v-10958d4b=""> <div class=profile _v-10958d4b="">{{item.contactor}}</div> <div class=tel _v-10958d4b="">{{item.mobile}}</div> <div class=code _v-10958d4b="">{{item.code}}</div> </div> <div class=addr _v-10958d4b=""> <span _v-10958d4b="">{{item.address}}</span> </div> <input type=hidden v-model=addressId :value=item.id _v-10958d4b=""> </a> </template> </div> </section> <section class=settlement _v-10958d4b=""> <h5 _v-10958d4b="">结算信息</h5> <ul _v-10958d4b=""> <li _v-10958d4b=""> <span _v-10958d4b="">商品金额</span> <em _v-10958d4b="">￥{{product.price}}</em> </li> <li _v-10958d4b=""> <span _v-10958d4b="">运费</span> <em _v-10958d4b="">￥{{product.transprice}}</em> </li> </ul> </section> </div> <div class=height22 _v-10958d4b=""></div> <footer class=footer3 _v-10958d4b=""> <div class=order-btn @click=submits _v-10958d4b="">提交订单</div> <div class=money _v-10958d4b="">支付金额：<span _v-10958d4b="">￥{{payprice}}</span></div> <input type=hidden v-model=payprice :value=product.price+product.transprice _v-10958d4b=""> </footer> '},763:function(t,e,d){var s,a,i={};d(620),s=d(293),a=d(687),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports.default);var o="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;a&&(o.template=a),o.computed||(o.computed={}),Object.keys(i).forEach(function(t){var e=i[t];o.computed[t]=function(){return e}})}});