window.onload = function(){
	var data = [{
					id: "2",
					name: "维达超韧系列抽取式纸面巾130抽/包*18包/箱 纸箱装",
					img: "http://10.115.11.224/supermarket/img/jingxuan/img1_2.jpg",
					price: "45.90",
					count: "5203"
				}, {
					id: "36",
					name: "意大利进口得卡螺旋通心粉#单色螺丝意面500g",
					img: "http://10.115.11.224/supermarket/img/liangyou/img5_5.jpg",
					price: "13.90",
					count: "349"
				}, {
					id: "38",
					name: "农心 辣白菜五连包方便面120g*5包/袋 速食泡面煮面",
					img: "http://10.115.11.224/supermarket/img/liangyou/img5_7.jpg",
					price: "16.90",
					count: "29580"
				}, {
					id: "39",
					name: "意大利进口莫利366#意大利面通心粉单色螺丝意面$",
					img: "http://10.115.11.224/supermarket/img/liangyou/img5_8.jpg",
					price: "9.90",
					count: "1645"
				}]
	
	var oBtn = document.getElementById("btn");
	function fn(data){
		oBtn.innerHTML = '';
		for(var i = 0; i<data.length;i++){
			var box = document.createElement("div");
			box.innerHTML = '<div class="section"><img src="'+data[i].img+'" alt="t"/><div><span id="span1">'+data[i].name+'</span><br /><span>月销<s id="s1">'+data[i].count+'</s>笔</span><br /><br /><span style="color:#be4167;">￥<s id="s2">'+data[i].price+'</s></span></div></div>';
			oBtn.appendChild(box);
		}
	}
	fn(data)
	//搜索
	var oS = document.getElementById('s');
	cc.onclick = function(){
		oBtn.innerHTML = '';
		var aa = [];
		for(var i = 0;i<data.length;i++){
			var oV = oS.value;			
			if(data[i].name.match(oV)){
				aa.push(data[i]);
			}
		}
		fn(aa)
	}
	
	//销量排序
	var x = document.getElementById('x');
	x.onclick = function(){
		//alert(1)
		var arr1 = [];
		var arr2 = [];
		oBtn.innerHTML = '';
		for(var i = 0;i<data.length;i++){
			arr1.push(data[i].count)
		}
		var arr3 = arr1.sort(function(a,b){
			return a - b;
		});
		var n = 1;
		while(n<=arr3.length){
			for(var i=0;i<arr3.length;i++){
				if(data[i].count == arr3[arr3.length-n]){
					arr2.push(data[i]);
				}
				
			}
			n++;
		}
		fn(arr2)
	}
	//价格排序
	var j = document.getElementById('j');
	j.onclick = function(){
		//alert(1)
		var arr_1 = [];
		var arr_2 = [];
		oBtn.innerHTML = '';
		for(var i = 0;i<data.length;i++){
			arr_1.push(data[i].price)
		}
		var arr_3 = arr_1.sort(function(a,b){
			return b - a;
		});
		var n = 1;
		while(n<=arr_3.length){
			for(var i=0;i<arr_3.length;i++){
				if(data[i].price == arr_3[arr_3.length-n]){
					arr_2.push(data[i]);
				}
				
			}
			n++;
		}
		fn(arr_2)
	}
};
