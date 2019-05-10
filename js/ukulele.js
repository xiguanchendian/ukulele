function press(){
	var currentId = parseInt(event.currentTarget.id);
	ring(currentId);
	var yinjie = toYinjie(currentId);
	append(yinjie);
}

window.onkeydown = function(event){
	var keyCode = event.keyCode;
	ring(keyCode);
	var arr = [97,98,99,100,101,102,103,96,49,50,51,52,53,54,55,48];
	var boo = isInArray(arr, keyCode);
	if(boo){
		var yinjie = toYinjie(keyCode);
		append(yinjie);
	}
}

function ring(value){
	var targetId = toTargetId(value);
	var element = document.getElementById(targetId);
	keyDown(element);
}

function keyDown(element){
	if(element!=null){
		element.currentTime = 0;
		if(element.paused){
			element.play();
		}
	}
}

function resetTemp(){
	document.getElementById("temp").value = "";
}

function resetPlay(){
	document.getElementById("replay").value = "";
}

function append(value){
	document.getElementById("temp").value += value;
	document.getElementById("replay").value += value;
}

function replay(){
	var vals = document.getElementById("replay").value;
	// 自动演奏 间隔1s
	for(var i = 0; i < vals.length; i++){
		var v = vals.charAt(i);
		var keycode = toKeycode(v);
		async function test(){
		  var temple=await sleep(1000);
		  ring(parseInt(keycode));
		  return temple;
		}
//				ring(parseInt(keycode));
	}
}

function sleep (time) {
	return new Promise((resolve) => setTimeout(resolve, time));
}

function isInArray(arr, value){
	for(var i = 0; i < arr.length; i++){
		if(value === arr[i]){
			return true;
		}
	}
	return false;
}

function toKeycode(value){
	var keycode = null;
	switch(value){
		case "1":
			keycode = "97";
			break;
		case "2":
			keycode = "98";
			break;
		case "3":
			keycode = "99";
			break;
		case "4":
			keycode = "100";
			break;
		case "5":
			keycode = "101";
			break;
		case "6":
			keycode = "102";
			break;
		case "7":
			keycode = "103";
			break;
		case "i":
			keycode = "96";
			break;
	}
	return keycode;
}

function toYinjie(value){
	var yinjie = null;
	switch(value){
		case 49:
		case 97:
			yinjie = "1";
			break;
		case 50:
		case 98:
			yinjie = "2";
			break;
		case 51:
		case 99:
			yinjie = "3";
			break;
		case 52:
		case 100:
			yinjie = "4";
			break;
		case 53:
		case 101:
			yinjie = "5";
			break;
		case 54:
		case 102:
			yinjie = "6";
			break;
		case 55:
		case 103:
			yinjie = "7";
			break;
		case 48:
		case 96:
			yinjie = "i";
			break;
	}
	return yinjie;
}

function toTargetId(value){
	var targetId = null;
	switch(value){
		case 49:
		case 97:
			targetId = "do";
			break;
		case 50:
		case 98:
			targetId = "re";
			break;
		case 51:
		case 99:
			targetId = "mi";
			break;
		case 52:
		case 100:
			targetId = "fa";
			break;
		case 53:
		case 101:
			targetId = "so";
			break;
		case 54:
		case 102:
			targetId = "la";
			break;
		case 55:
		case 103:
			targetId = "xi";
			break;
		case 48:
		case 96:
			targetId = "ido";
			break;
	}
	return targetId;
}

// 圣诞歌
function christmas(){
	
}
// 小星星
function star(){
	
}
// 小蜜蜂
function bee(){
	
}