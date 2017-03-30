window.onload = function(){
	//播放暂停
		pause.onclick = function(){
			video.style.display = 'block';
			if(pause.innerHTML == ''){
				video.play();
				pause.innerHTML = '1'
				pause.style.background = '#fff';
				pause.style.borderRadius = '50%';
			}
			else{
				video.pause();
				pause.innerHTML = ''
				pause.style.background = 'url(img/pause.png) no-repeat';
				pause.style.borderRadius = '';
			}
		};

	//全屏
	fullscreen.onclick = function(){
		video.webkitRequestFullscreen();
	}

	//播放进度条跟着走
	video.addEventListener('timeupdate',function(){
		currentTime.innerHTML = video.currentTime.toFixed(2);
		schedule.style.width = (video.currentTime/video.duration*100)+'%';
		rag.style.left=(video.currentTime/video.duration*100)+'%';
	},false);



	//拖动按钮改变播放进度
	function findPar(obj,posi,border){
		var attr1=obj[posi];
		while(obj.tagName!="BODY"){
			obj=obj.offsetParent;
			attr1=attr1+obj[posi];
		}
		return attr1=attr1+border;
	}
	rag.addEventListener("mousedown",yidong,false);
	function yidong(ev){
		var ev=ev||event;
		var left1=findPar(progress,"offsetLeft",1);
		var left2=ev.clientX-findPar(rag,"offsetLeft",1);
		document.onmousemove=function(ev){
			var ev=ev||event;
			var left3=ev.clientX-left1-left2;
			if(left3<0){
				left3=0;
			}else if(left3>progress.offsetWidth-10){
				left3=progress.offsetWidth-10;
			}
			var b4=left3/(progress.offsetWidth-10);
			video.currentTime=parseInt(video.duration*b4);
			rag.style.left=left3+"px";
		}
		
		document.onmouseup=function(){
			document.onmousemove=null;
			document.onmouseup = null;
		}
	}
	//点击调播放位置
	progress.addEventListener("click",tz,false);
	function tz(ev){
		var ev=ev||event;
		var length1=ev.clientX-findPar(progress,"offsetLeft",1);
		if(length1<0){
			length1=0;
		}else if(length1>progress.offsetWidth){
			length1=progress.offsetWidth;
		}
		var b5=length1/progress.offsetWidth;
		video.currentTime=parseInt(video.duration*b5);
		rag.style.left=length1+"px";
	}
	//获取总时间
	setTimeout(function(){
		allTime.innerHTML = video.duration.toFixed(2)
	},100)

	//播放完毕以后的初始化

	video.addEventListener('ended',function(){
		video.currentTime = 0;
		schedule.style.width = 0 + '%';
		pause.innerHTML = ''
		pause.style.background = 'url(img/pause.png) no-repeat';
		pause.style.borderRadius = '';
	},false)

	//音量拖动调节
	video.volume = 0.5;
	Yrag.addEventListener("mousedown",tiao,false);
	function tiao(ev){
		var ev=ev||event;
		var left1=findPar(Yvolume,"offsetLeft",1);
		var left2=ev.clientX-findPar(Yrag,"offsetLeft",1);
		document.onmousemove=function(ev){
			var ev=ev||event;
			var left3=ev.clientX-left1-left2;
			if(left3<0){
				left3=0;
			}else if(left3>52){
				left3=52;
			}
			video.volume=left3/52;
			//range2.style.top=46-46*left3/52+"px";
			Yrag.style.left=left3+"px";
		}
		document.onmouseup=function(){
			document.onmousemove=null;
			document.onmouseup = null;
		}
	};
	
}