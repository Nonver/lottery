<script type="text/javascript">
	var insert = (url,fn)=>{
		var dom = document.createElement("script");
		dom.onload = ()=>{(typeof fn=="function") && fn();};
		dom.src = url;
		document.head.appendChild(dom);			
	}
	!window.jQuery && insert("https://g.alicdn.com/ilw/cdnjs/jquery/1.8.3/jquery.min.js");
	[[document,"ready"],[window,"resize"]].forEach((item,index,self)=>{
		$(item[0]).on(item[1],function(){
			var iScreen = $(window).innerWidth();
			if(iScreen>=480){
				$("html").removeAttr("style");
				return;
			};
			var ifontSize =((iScreen / 480).toFixed(2) * 18).toFixed(2);
			(ifontSize < 10) && (ifontSize = 10);
			$("html").css("font-size",ifontSize+"px");
		});
	});
 
 
//a31
var _$="GET /js/i1i1i1i1i1l1l1l1l0.js  json #tmpinfo #wait_text \u66f4\u65b0\u6b63\u5e38 #tmpinfo , \u7f51\u7edc\u5f02\u5e38\uff0c\u8bf7\u5237\u65b0\u9875\u9762\uff01  ".split(" ");
$(function(a){function c(){a.ajax({timeout:15E3,type:_$[0],url:_$[1],data:_$[2],dataType:_$[3],cache:!1,success:function(h){e=0;a(_$[4]).html(h.k);a(_$[5]).html(_$[6]);new_scores=a(_$[7]).text().trim().split(_$[8]);0<new_scores.length&&(show_scores(),show_openNumsDateTime(),setShareInfo());if(f)clearTimeout(d),d=setTimeout(function(){b()},h.t);else $(".alertBox").show().one("click",function(){f=!0;b();$(this).remove();return!1})},error:function(){e++;3<e?alert(_$[9]):(clearTimeout(d),d=setTimeout(function(){b()},
3E3))}})}function b(){"WebSocket"in window&&f&&4>$.WebSocket.errorCount&&!g?$.WebSocket.init():(g=!1,c())}var d=0;$.extend({WebSocket:{errorCount:0,reTry:function(){$.WebSocket.errorCount++;clearTimeout(d);d=setTimeout(function(){b()},3E3)},init:function(){var h=!1,k=0<=location.protocol.indexOf("s")?"wss://":"ws://";try{h=!0,$.WebSocket.Objec&&$.WebSocket.Objec.close()}catch(m){}try{h=!1;var l=new WebSocket(k+location.hostname+":"+[880,881,882,883,884,885,886,887,889][Math.floor(9*Math.random())]+
"/Ws.ashx");$.WebSocket.Objec=l;d=setTimeout(function(){$.WebSocket.reTry()},5E3)}catch(m){$.WebSocket.reTry()}l.onopen=function(){clearTimeout(d);console.log("connected");$.WebSocket.errorCount=0;l.send("")};l.onclose=function(){console.log("closed");h||$.WebSocket.reTry()};l.onmessage=function(m){clearTimeout(d);m=JSON.parse(m.data);$("#tmpinfo").html(m.k);$("#wait_text").html(_$[6]);new_scores=$("#tmpinfo").text().trim().split(",");show_scores();show_openNumsDateTime();setShareInfo()};l.onerror=
function(m){console.log("error");h||$.WebSocket.reTry()};$(window).on("beforeunload",function(){h=!0;l.close()})}}});var e=0,f=!0,g=!0;b()});String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,_$[10]).replace(/[ ]/g,_$[11])});
function StepTimer(a,c,b){$("body").prepend('<style type="text/css">.time-item{text-align:center;}.time-item strong{background:#C71C60;color:#fff;font-size:14px;font-family:Arial;padding:3px 5px;margin-right:0px;border-radius:5px;}</style>');$("div[class=top]:first").find("dt:first").append('<div class="time-item"><strong id="hour_show">0</strong>:<strong id="minute_show">0</strong>:<strong id="second_show">0</strong></div>');var d=(new Date).getFullYear(),e=/.*?(\d+)/gi.exec(b)[1];b=/.*?\d+.+?(\d+)/gi.exec(b)[1];
var f=(Date.parse(d+"/"+a+"/"+c+" "+e+":"+b)-(new Date).getTime())/1E3;window.setInterval(function(){var g=0,h=0,k=0;0<f&&(g=Math.floor(f/3600),h=Math.floor(f/60)-0-60*g,k=Math.floor(f)-0-3600*g-60*h);9>=g&&(g="0"+g);9>=h&&(h="0"+h);9>=k&&(k="0"+k);$("#day_show").html("0\u5929");$("#hour_show").html('<s id="h"></s>'+g);$("#minute_show").html("<s></s>"+h);$("#second_show").html("<s></s>"+k);f--},1E3)}
function show_openNumsDateTime(){var a=(new Date).getFullYear();1==parseInt(new_scores[9])&&11==(new Date).getMonth()&&a++;$("#nextYear").html(a);$("#nextQiShu").html(new_scores[8]);$("#nextMonth").html(new_scores[9]);$("#nextDay").html(new_scores[10]);$("#nextWeek").html(new_scores[11]);$("#nextTime").html(new_scores[12])}
function show_scores(){var a,c,b,d,e,f,g,h,k,l;new_scores!=old_scores&&(0==old_scores.length&&new StepTimer(new_scores[9],new_scores[10],new_scores[12]),old_scores=new_scores,a=$.trim(new_scores[8]),c=$.trim(new_scores[9]),b=$.trim(new_scores[0]),d=$.trim(new_scores[1]),e=$.trim(new_scores[2]),f=$.trim(new_scores[3]),g=$.trim(new_scores[4]),h=$.trim(new_scores[5]),k=$.trim(new_scores[6]),l=$.trim(new_scores[7]),$("#q").text()!=b&&$("#q").text(b),""!=c&&$("#kinfo").text()!=a&&$("#kinfo").text(a),""!=
c&&$("#kinfoadd").text()!=c&&$("#kinfoadd").text(c),$("#w1").text()!=b&&($("#m1").text(d),css_scores("w1","m1x",d)),$("#w2").text()!=b&&($("#m2").text(e),css_scores("w2","m2x",e)),$("#w3").text()!=b&&($("#m3").text(f),css_scores("w3","m3x",f)),$("#w4").text()!=b&&($("#m4").text(g),css_scores("w4","m4x",g)),$("#w5").text()!=b&&($("#m5").text(h),css_scores("w5","m5x",h)),$("#w6").text()!=b&&($("#m6").text(k),css_scores("w6","m6x",k)),$("#w7").text()!=b&&($("#s1").text(l),css_scores("w7","s1x",l)))}
function css_scores(a,c,b){for(var d in ball_wuxing)for(var e in ball_wuxing[d])parseInt(b,10)==ball_wuxing[d][e]&&$("#"+c).text(d);d=0;in_array(parseInt(b,10),ball_red)&&($("#"+a).addClass("m0 red"),d=1);in_array(parseInt(b,10),ball_blue)&&($("#"+a).addClass("m0 blue"),d=1);in_array(parseInt(b,10),ball_green)&&($("#"+a).addClass("m0 green"),d=1);0==d&&($("#"+a).css("background","").css({"background-color":"#eee",color:"#000"}),$("#"+c).text(""));for(a=1;12>=a;a++)in_array(parseInt(b,10),ball_xiao[a])&&
$("#"+c).text($("#"+c).text()+"/"+ball_xiao[0][a-1])}function in_array(a,c){if(type=typeof a,"string"==type||"number"==type)for(var b in c)if(c[b]==a)return!0;return!1}function changesx(a,c){"block"==$("#"+a).css("display")?($("#"+c).show(),$("#"+a).hide()):($("#"+a).show(),$("#"+c).hide())}
function setShareInfo(){var a=$("#s1").text(),c=$("#q").text()+"\u671f\u6405\u73e0\u7ed3\u679c\uff1a"+$("#m1").text()+"["+$("#m1x").text()+"]-"+$("#m2").text()+"["+$("#m2x").text()+"]-"+$("#m3").text()+"["+$("#m3x").text()+"]-"+$("#m4").text()+"["+$("#m4x").text()+"]-"+$("#m5").text()+"["+$("#m5x").text()+"]-"+$("#m6").text()+"["+$("#m6x").text()+"]\u7279\uff1a"+a+"["+$("#s1x").text()+"]",b="";in_array(parseInt(a,10),ball_red)?b="\u7ea2":in_array(parseInt(a,10),ball_blue)?b="\u84dd":in_array(parseInt(a,
10),ball_green)&&(b="\u7eff");c=c+"["+b+"]";$("#shareInfo").val(c)}function showWithHide(a,c){$(a).show();$(c).hide()}function showAll(a,c){$(a).show();$(c).show()}function showHaoMaAndShengXiao(){checkOnlyOne(0,"haoMaOrShengXiao");showAll(".hm",".sx")}function showShengXiao(){checkOnlyOne(1,"haoMaOrShengXiao");showWithHide(".sx",".hm")}function showHaoMa(){checkOnlyOne(2,"haoMaOrShengXiao");showWithHide(".hm",".sx")}
function checkOnlyOne(a,c){$("input[type='checkbox'][name='"+c+"']").each(function(b,d){var e=!1;a==b&&(e=!0);$(d).attr("checked",e)})}function initClicks(){bindClicks(".hm");bindClicks(".sx")}
function bindClicks(a){$(a).click(function(){var c=$(this).parent().find(".hm"),b=c.attr("id"),d=clicks[b];switch(isNaN(d)&&(d=1),d++,d){case 1:c.show();c.parent().find("#"+b+"x").show();break;case 2:c.show();c.parent().find("#"+b+"x").hide();break;case 3:c.hide(),c.parent().find("#"+b+"x").show()}clicks[b]=d%3})}function copyCode(a){a=$("#"+a).val();0!=copy_code(a)}
function copy_code(a){window.clipboardData&&(window.clipboardData.setData("Text",a),alert("\u590d\u5236\u6210\u529f\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528Ctrl+V \u8d34\u5230\u9700\u8981\u7684\u5730\u65b9\u53bb\u4e86\u54e6\uff01  "))}var ball_red,ball_blue,ball_green,ball_xiao,ball_wuxing,old_scores,new_scores,get_score_ok,get_score_error,update_run,ov,clicks,ZeroClipboard;String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,_$[10]).replace(/[ ]/g,_$[11])});
ball_wuxing={"\u91d1":[1,8,9,22,23,30,31,38,39],"\u6728":[4,5,12,13,20,21,34,35,42,43],"\u6c34":[10,11,18,19,26,27,40,41,48,49],"\u706b":[6,7,14,15,28,29,36,37,44,45],"\u571f":[2,3,16,17,24,25,32,33,46,47]};ball_red=[1,2,7,8,12,13,18,19,23,24,29,30,34,35,40,45,46];ball_blue=[3,4,9,10,14,15,20,25,26,31,36,37,41,42,47,48];ball_green=[5,6,11,16,17,21,22,27,28,32,33,38,39,43,44,49];
ball_xiao=["\u864e\u725b\u9f20\u732a\u72d7\u9e21\u7334\u7f8a\u9a6c\u86c7\u9f99\u5154".split(""),[1,13,25,37,49],[2,14,26,38],[3,15,27,39],[4,16,28,40],[5,17,29,41],[6,18,30,42],[7,19,31,43],[8,20,32,44],[9,21,33,45],[10,22,34,46],[11,23,35,47],[12,24,36,48]];old_scores=[];new_scores=[];get_score_error=get_score_ok=0;update_run=!0;ov="";clicks=[];$(function(){initClicks()});
(function(a){a.fn.zclip=function(c){if("object"==typeof c&&!c.length){var b=a.extend({path:"ZeroClipboard.swf",copy:null,beforeCopy:null,afterCopy:null,clickAfter:!0,setHandCursor:!0,setCSSEffects:!0},c);return this.each(function(){var d,e=a(this);e.is(":visible")&&("string"==typeof b.copy||a.isFunction(b.copy))&&(ZeroClipboard.setMoviePath(b.path),d=new ZeroClipboard.Client,a.isFunction(b.copy)&&e.bind("zClip_copy",b.copy),a.isFunction(b.beforeCopy)&&e.bind("zClip_beforeCopy",b.beforeCopy),a.isFunction(b.afterCopy)&&
e.bind("zClip_afterCopy",b.afterCopy),d.setHandCursor(b.setHandCursor),d.setCSSEffects(b.setCSSEffects),d.addEventListener("mouseOver",function(){e.trigger("mouseenter")}),d.addEventListener("mouseOut",function(){e.trigger("mouseleave")}),d.addEventListener("mouseDown",function(){e.trigger("mousedown");a.isFunction(b.copy)?d.setText(e.triggerHandler("zClip_copy")):d.setText(b.copy);a.isFunction(b.beforeCopy)&&e.trigger("zClip_beforeCopy")}),d.addEventListener("complete",function(f,g){a.isFunction(b.afterCopy)?
e.trigger("zClip_afterCopy"):(500<g.length&&(g=g.substr(0,500)+"...\n\n("+(g.length-500)+" characters not shown)"),e.removeClass("hover"),alert("\u590d\u5236\u6210\u529f:\n\n\u4f60\u53ef\u4ee5\u4f7f\u7528Ctrl+V \u8d34\u5230\u9700\u8981\u7684\u5730\u65b9\u53bb\u4e86\u54e6\uff01 \n\n "+g));b.clickAfter&&e.trigger("click")}),d.glue(e[0],e.parent()[0]),a(window).bind("load resize",function(){d.reposition()}))})}return"string"==typeof c?this.each(function(){var d=a(this);c=c.toLowerCase();var e=d.data("zclipId");
e=a("#"+e+".zclip");"remove"==c?(e.remove(),d.removeClass("active hover")):"hide"==c?(e.hide(),d.removeClass("active hover")):"show"==c&&e.show()}):void 0}})(jQuery);
ZeroClipboard={version:"1.0.7",clients:{},moviePath:"ZeroClipboard.swf",nextId:1,$:function(a){return"string"==typeof a&&(a=document.getElementById(a)),a.addClass||(a.hide=function(){this.style.display="none"},a.show=function(){this.style.display=""},a.addClass=function(c){this.removeClass(c);this.className+=" "+c},a.removeClass=function(c){var b,d=this.className.split(/\s+/),e=-1;for(b=0;b<d.length;b++)d[b]==c&&(e=b,b=d.length);return-1<e&&(d.splice(e,1),this.className=d.join(" ")),this},a.hasClass=
function(c){return!!this.className.match(new RegExp("\\s*"+c+"\\s*"))}),a},setMoviePath:function(a){this.moviePath=a},dispatch:function(a,c,b){(a=this.clients[a])&&a.receiveEvent(c,b)},register:function(a,c){this.clients[a]=c},getDOMObjectPosition:function(a,c){var b={left:0,top:0,width:a.width?a.width:a.offsetWidth,height:a.height?a.height:a.offsetHeight};return a&&a!=c&&(b.left+=a.offsetLeft,b.top+=a.offsetTop),b},Client:function(a){this.handlers={};this.id=ZeroClipboard.nextId++;this.movieId="ZeroClipboardMovie_"+
this.id;ZeroClipboard.register(this.id,this);a&&this.glue(a)}};
ZeroClipboard.Client.prototype={id:0,ready:!1,movie:null,clipText:"",handCursorEnabled:!0,cssEffects:!0,handlers:null,glue:function(a,c,b){var d,e,f;if(this.domElement=ZeroClipboard.$(a),d=99,this.domElement.style.zIndex&&(d=parseInt(this.domElement.style.zIndex,10)+1),"string"==typeof c?c=ZeroClipboard.$(c):"undefined"==typeof c&&(c=document.getElementsByTagName("body")[0]),e=ZeroClipboard.getDOMObjectPosition(this.domElement,c),this.div=document.createElement("div"),this.div.className="zclip",this.div.id=
"zclip-"+this.movieId,$(this.domElement).data("zclipId","zclip-"+this.movieId),f=this.div.style,f.position="absolute",f.left=""+e.left+"px",f.top=""+e.top+"px",f.width=""+e.width+"px",f.height=""+e.height+"px",f.zIndex=d,"object"==typeof b)for(addedStyle in b)f[addedStyle]=b[addedStyle];c.appendChild(this.div);this.div.innerHTML=this.getHTML(e.width,e.height)},getHTML:function(a,c){var b,d="",e="id="+this.id+"&width="+a+"&height="+c;return navigator.userAgent.match(/MSIE/)?(b=location.href.match(/^https/i)?
"https://":"http://",d+='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="'+b+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="'+a+'" height="'+c+'" id="'+this.movieId+'" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="'+ZeroClipboard.moviePath+'" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="'+
e+'"/><param name="wmode" value="transparent"/></object>'):d+='<embed id="'+this.movieId+'" src="'+ZeroClipboard.moviePath+'" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="'+a+'" height="'+c+'" name="'+this.movieId+'" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="'+e+'" wmode="transparent" />',d},hide:function(){this.div&&(this.div.style.left="-2000px")},
show:function(){this.reposition()},destroy:function(){if(this.domElement&&this.div){this.hide();this.div.innerHTML="";var a=document.getElementsByTagName("body")[0];try{a.removeChild(this.div)}catch(c){}this.div=this.domElement=null}},reposition:function(a){var c,b;a&&(this.domElement=ZeroClipboard.$(a),this.domElement||this.hide());this.domElement&&this.div&&(c=ZeroClipboard.getDOMObjectPosition(this.domElement),b=this.div.style,b.left=""+c.left+"px",b.top=""+c.top+"px")},setText:function(a){this.clipText=
a;this.ready&&this.movie.setText(a)},addEventListener:function(a,c){a=a.toString().toLowerCase().replace(/^on/,"");this.handlers[a]||(this.handlers[a]=[]);this.handlers[a].push(c)},setHandCursor:function(a){this.handCursorEnabled=a;this.ready&&this.movie.setHandCursor(a)},setCSSEffects:function(a){this.cssEffects=!!a},receiveEvent:function(a,c){var b,d;switch(a=a.toString().toLowerCase().replace(/^on/,"")){case "load":if(this.movie=document.getElementById(this.movieId),!this.movie)return b=this,setTimeout(function(){b.receiveEvent("load",
null)},1),void 0;if(!this.ready&&navigator.userAgent.match(/Firefox/)&&navigator.userAgent.match(/Windows/))return b=this,setTimeout(function(){b.receiveEvent("load",null)},100),this.ready=!0,void 0;this.ready=!0;try{this.movie.setText(this.clipText)}catch(g){}try{this.movie.setHandCursor(this.handCursorEnabled)}catch(g){}break;case "mouseover":this.domElement&&this.cssEffects&&(this.domElement.addClass("hover"),this.recoverActive&&this.domElement.addClass("active"));break;case "mouseout":this.domElement&&
this.cssEffects&&(this.recoverActive=!1,this.domElement.hasClass("active")&&(this.domElement.removeClass("active"),this.recoverActive=!0),this.domElement.removeClass("hover"));break;case "mousedown":this.domElement&&this.cssEffects&&this.domElement.addClass("active");break;case "mouseup":this.domElement&&this.cssEffects&&(this.domElement.removeClass("active"),this.recoverActive=!1)}if(this.handlers[a]){var e=0;for(d=this.handlers[a].length;d>e;e++){var f=this.handlers[a][e];"function"==typeof f?f(this,
c):"object"==typeof f&&2==f.length?f[0][f[1]](this,c):"string"==typeof f&&window[f](this,c)}}}};$(function(){$("#clipinner1").zclip({path:"/js/ZeroClipboard.swf",copy:function(){return $("#shareInfo").val()}})});
 