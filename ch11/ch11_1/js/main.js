// function writeMyName(name,lastname){

// 	document.getElementById("demo").innerHTML = (`${name} ${lastname}`)
// }
// 	writeMyName(1,2);

// function writeMyName(name,lastname){

// 	console.log(`${name} ${lastname}`);

// }

// 	writeMyName("N","Shikichi");
// 	writeMyName("a","Shikichi");
// 	writeMyName("o","Shikichi");
// 	writeMyName("y","Shikichi");
// 	writeMyName("a","Shikichi");

// function add(a,b){

// 	document.getElementById("demo").innerHTML = a+b;
// }

// 	add(20,30);

// function changeColor(){
// 	let mylist = document.getElementsByTagName("ul");
// 	let i;
// 	for (i = 0; i < mylist.length; i += 1){
// 		mylist[i].style.color = "magenta";
// 		mylist[i].style.fontFamily = "cursive";
// 		mylist[i].style.backgroundColor = "cyan";
// 	}
// }

// changeColor();


let add = function() {

	let arg = arguments.length;
	let i;
	let result = 0;
	for(i = 0;i < arg;i += 1){
		result+=arguments[i];
	}
	return result;
}

let mul = function() {

	let arg = arguments.length;
	let i;
	let result = 1;
	for(i = 0;i < arg;i += 1){
		result*=arguments[i];
	}
	return result;
}


console.log(mul(1,2,3,4,5,6,7,8,9,10));




