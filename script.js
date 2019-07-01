function addNum(clicked_id) {
	var curNum = document.getElementById("input").value
  document.getElementById("input").value = curNum + clicked_id
}

function clr() {
	document.getElementById("input").value = ""
}

function calculate() {
	expression = document.getElementById("input").value + "&"

	operations = ["+", "-", "/", "*"]
	expArr = []
	curNum = ""

	for(var i = 0; i < expression.length; i++) {
		character = expression.charAt(i)

	  if(operations.includes(character) || character == "&") {
	  	if(curNum.length > 0) {
		  	expArr.push(parseInt(curNum))
		  	curNum = ""
	  	}
	  	if(character != "&") {
		  	expArr.push(character)
	  	}
	  }
	  else {
	  	curNum = curNum + character
	  }
	}

	while(expArr.length > 1) {
		while(expArr.includes("*")) {
			var index = expArr.indexOf("*")
			expArr[index] = expArr[index-1] * expArr[index+1]
			expArr.splice(index-1, 1);
			expArr.splice(index, 1);
		}
		while(expArr.includes("/")) {
			var index = expArr.indexOf("/")
			expArr[index] = expArr[index-1] / expArr[index+1]
			expArr.splice(index-1, 1);
			expArr.splice(index, 1);
		}
		while(expArr.includes("+")) {
			var index = expArr.indexOf("+")
			expArr[index] = expArr[index-1] + expArr[index+1]
			expArr.splice(index-1, 1);
			expArr.splice(index, 1);
		}
		while(expArr.includes("-")) {
			var index = expArr.indexOf("-")
			expArr[index] = expArr[index-1] - expArr[index+1]
			expArr.splice(index-1, 1);
			expArr.splice(index, 1);
		}
	}

	document.getElementById("input").value = expArr[0]
}