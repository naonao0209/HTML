// document.getElementsByTagName("p")[0].innerHTML = "number 1";
// document.getElementsByTagName("p")[1].innerHTML = "number 2";
// document.getElementsByTagName("p")[2].innerHTML = "number 3";
// document.getElementsByTagName("p")[3].innerHTML = "number 4";
// document.getElementsByTagName("p")[4].innerHTML = "number 5";
// document.getElementsByTagName("p")[5].innerHTML = "number 6";
// document.getElementsByTagName("p")[6].innerHTML = "number 7";
// document.getElementsByTagName("p")[7].innerHTML = "number 8";
// document.getElementsByTagName("p")[8].innerHTML = "number 9";
// document.getElementsByTagName("p")[9].innerHTML = "number 10";

// let i;
// for(i=0; i<10; i+=1){
// 	document.getElementsByTagName("p")[i].innerHTML = "number " + (i + 1).toString();
// }

// let i;
// let theCollection = document.getElementsByTagName("p");
// for (i=0; i<theCollection.length; i+=1){
// 	theCollection[i].innerHTML = "number " + (i + 1).toString();
// }

let i;
let theCollection = document.getElementsByTagName("p");

for(i=0; i<theCollection.length; i+=1){
	if(i === 5){
		// break;
		continue;
	}
	theCollection[i].innerHTML = "number " + (i + 1).toString();
}

