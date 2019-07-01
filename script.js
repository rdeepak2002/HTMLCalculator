function addNum(clicked_id) {
	var curNum = document.getElementById("input").value
  document.getElementById("input").value = curNum + clicked_id
}

function clr() {
	document.getElementById("input").value = ""
}

function calculate() {
	expression = document.getElementById("input").value
	document.getElementById("input").value = eval(expression)
}