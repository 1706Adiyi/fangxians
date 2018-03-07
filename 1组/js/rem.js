(function(){
	size();
	window.onresize=function(){
		size()
	}
	function size(){
		var win=document.documentElement.clientWidth||document.body.clientWidth
		document.documentElement.style.fontSize=(win/750)*100+"px"
	}
})()
