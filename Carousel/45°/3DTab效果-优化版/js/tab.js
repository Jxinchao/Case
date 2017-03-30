window.onload = function() {
	var oPrev = document.getElementById('prev')
	var oNext = document.getElementById('next')
	var oChange = document.getElementById('change')
	var oWord = document.getElementById('word')
	var aDiv = oChange.getElementsByTagName('div')
	

	var aImg = ['bg1', 'bg2', 'bg3', 'bg4', 'bg5', 'bg6', 'bg7', 'bg8', 'bg9']
	
	oWord.innerHTML = aImg[0]

	aDiv[0].style.transform = 'perspective(1000px) translateX(-550px) translateZ(-200px) rotateY(70deg)'
	aDiv[0].style.opacity = '0'
	aDiv[1].style.transform = 'perspective(1000px) translateX(-350px) translateZ(-100px) rotateY(70deg)'
	aDiv[2].style.transform = 'perspective(1000px)'
	aDiv[3].style.transform = 'perspective(1000px) translateX(350px) translateZ(-100px) rotateY(-70deg)'
	aDiv[4].style.transform = 'perspective(1000px) translateX(550px) translateZ(-200px) rotateY(-70deg)'
	aDiv[4].style.opacity = '0'
/*
	for(var j = 0; j < aImg.length; j++) {
		for(var i = 0; i < aDiv.length; i++) {
			aDiv[i].style.background = 'url(images/' + aImg[j] + '.jpg) no-repeat'
			aDiv[i].style.backgroundSize = '100% 100%'
		}
	}
*/
	
	aDiv[0].style.background = 'url(images/' + aImg[aImg.length-2] + '.jpg) no-repeat'
	aDiv[1].style.background = 'url(images/' + aImg[aImg.length-1] + '.jpg) no-repeat'
	aDiv[2].style.background = 'url(images/' + aImg[0] + '.jpg) no-repeat'
	aDiv[3].style.background = 'url(images/' + aImg[1] + '.jpg) no-repeat'
	aDiv[4].style.background = 'url(images/' + aImg[2] + '.jpg) no-repeat'
	
	for(var i=0;i<aDiv.length;i++){
		aDiv[i].style.backgroundSize = '100% 100%'
	}
	
	

	oPrev.onclick = function() {
		for(var i = 0; i < aDiv.length; i++) {
			aDiv[i].style.transition = 'all 0.6s ease'
		}
		aDiv[0].style.transform = 'perspective(1000px) translateX(-350px) translateZ(-100px) rotateY(70deg)'
		aDiv[0].style.opacity = '1'
		aDiv[1].style.transform = 'perspective(1000px)'
		aDiv[2].style.transform = 'perspective(1000px) translateX(350px) translateZ(-100px) rotateY(-70deg)'
		aDiv[3].style.transform = 'perspective(1000px) translateX(550px) translateZ(-200px) rotateY(-70deg)'
		aDiv[3].style.opacity = '0'
		oChange.insertBefore(aDiv[4], aDiv[0])
		aDiv[0].style.transform = 'perspective(1000px) translateX(-550px) translateZ(-200px) rotateY(70deg)'
		aDiv[0].style.opacity = '0'
		aImg.unshift(aImg[aImg.length-1])
		aImg.splice(aImg.length-1,1)
		console.log(aImg)
		aDiv[0].style.background = 'url(images/' + aImg[aImg.length-2] + '.jpg) no-repeat'
		aDiv[0].style.backgroundSize = '100% 100%'
		oWord.innerHTML = aImg[0]
	}



	oNext.onclick = function() {
		for(var i = 0; i < aDiv.length; i++) {
			aDiv[i].style.transition = 'all 0.6s ease'
		}
		aDiv[1].style.transform = 'perspective(1000px) translateX(-550px) translateZ(-200px) rotateY(70deg)'
		aDiv[1].style.opacity = '0'
		aDiv[2].style.transform = 'perspective(1000px) translateX(-350px) translateZ(-100px) rotateY(70deg)'
		aDiv[3].style.transform = 'perspective(1000px)'
		aDiv[4].style.transform = 'perspective(1000px) translateX(350px) translateZ(-100px) rotateY(-70deg)'
		aDiv[4].style.opacity = '1'
		oChange.appendChild(aDiv[0])
		aDiv[4].style.transform = 'perspective(1000px) translateX(550px) translateZ(-200px) rotateY(-70deg)'
		aDiv[4].style.opacity = '0'
		aImg.push(aImg[0])
		aImg.splice(0,1)
		console.log(aImg)
		aDiv[4].style.background = 'url(images/' + aImg[2] + '.jpg) no-repeat'
		aDiv[4].style.backgroundSize = '100% 100%'
		oWord.innerHTML = aImg[0]
	}
}