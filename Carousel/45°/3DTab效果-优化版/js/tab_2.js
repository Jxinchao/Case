window.onload = function() {
	var oPrev = document.getElementById('prev')
	var oNext = document.getElementById('next')
	var oChange = document.getElementById('change')
	var oWord = document.getElementById('word')
	var aDiv = oChange.getElementsByTagName('div')
	var aClass = []
	

	var aImg = ['bg1', 'bg2', 'bg3', 'bg4', 'bg5', 'bg6', 'bg7', 'bg8', 'bg9']
	
	oWord.innerHTML = aImg[0]

	for(var i=0;i<aDiv.length;i++){
		aClass.push(aDiv[i].className)
		aDiv[i].style.transition = 'all 0.6s ease'
	}
//	alert(aClass)
	
	aDiv[0].style.background = 'url(images/' + aImg[aImg.length-2] + '.jpg) no-repeat'
	aDiv[1].style.background = 'url(images/' + aImg[aImg.length-1] + '.jpg) no-repeat'
	aDiv[2].style.background = 'url(images/' + aImg[0] + '.jpg) no-repeat'
	aDiv[3].style.background = 'url(images/' + aImg[1] + '.jpg) no-repeat'
	aDiv[4].style.background = 'url(images/' + aImg[2] + '.jpg) no-repeat'
	
	for(var i=0;i<aDiv.length;i++){
		aDiv[i].style.backgroundSize = '100% 100%'
	}
	
	

	oPrev.onclick = function() {
		aClass.unshift(aClass.pop())
		for(var i=0;i<aDiv.length;i++){
			aDiv[i].className = aClass[i]
		}
	}



	oNext.onclick = function() {
		aClass.push(aClass.shift())
		for(var i=0;i<aDiv.length;i++){
			aDiv[i].className = aClass[i]
		}
	}
}