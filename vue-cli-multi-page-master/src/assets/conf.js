import { Toast } from 'mint-ui';
var Rxports = {
	
	appname:"艺朵云",

	baseimg:{},
	Mpath:"http://localhost:88/",
	getSearchString:function(key){
		var str = location.search;
      str = str.substring(1,str.length);
      var arr = str.split("&");
      var obj = new Object();
      for(var i = 0; i < arr.length; i++) {
          var tmp_arr = arr[i].split("=");
          obj[decodeURIComponent(tmp_arr[0])] = decodeURIComponent(tmp_arr[1]);
      }
      return obj[key];
	},
	D:function(){
      return this.getSearchString("fromDeviceID");
	},
	U:function(){
      return this.getSearchString("fromUid");
	},
	back:function(loginStatus){
		var back=escape(window.location.href);
		if(loginStatus == 0){
			console.log("请登录……");
			setTimeout(function(){
				window.location.href="login.html?back="+back;
			},1000)
		}
	},
	getCookie:function(cookiename){
       var arg = cookiename + "=";
       var alen = arg.length;
       var clen = document.cookie.length;
       var i = 0;
       while (i < clen)
       {
        var j = i + alen;
        if (document.cookie.substring(i, j) == arg)
        {
        var endstr = document.cookie.indexOf (";", j);
        if (endstr == -1)
        	endstr = document.cookie.length;
        	return unescape(document.cookie.substring(j, endstr));
        }
        i = document.cookie.indexOf(" ", i) + 1;
        if (i == 0) break;
       }
       return "";
    }

}	

module.exports = Rxports



















































