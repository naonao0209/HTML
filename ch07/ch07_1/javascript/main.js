let demo = document.getElementById("demo");

let experience = Number(prompt("How many years of experience you have?"));

// if (experience >= 0 && experience < 1) {
// 	demo.innerHTML = "You have no experience";
// }else if (experience >= 1 && experience < 2) {
// 	demo.innerHTML = "You are junior";
// }else if (experience >= 2 && experience < 3) {
// 	demo.innerHTML = "You are intermidiate";
// }else if (experience >= 3 && experience < 4) {
// 	demo.innerHTML = "You are advanced";
// }else{
// 	demo.innerHTML = "You are senior";
// }
	
	switch (experience) {
	case experience < 0:
		demo.innerHTML = "You have no experience";
		break;
	case experience <= 1:
		demo.innerHTML = "You are junior";
		break;
	case experience <= 2:
		demo.innerHTML = "You are intermidiate";
		break;
	case experience <= 3:
		demo.innerHTML = "You are advanced";
		break;
	default:
		demo.innerHTML = "You are senior";
		break;
	}

// switch (true) {
// 	case (experience >= 0 && experience < 1) :
// 		demo.innerHTML = "You have no experience";
// 		break;
// 	case (experience >= 1 && experience < 2):
// 		demo.innerHTML = "You are junior";
// 		break;
// 	case (experience >= 2 && experience < 3):
// 		demo.innerHTML = "You are intermidiate";
// 		break;
// 	case (experience >= 3 && experience < 4):
// 		demo.innerHTML = "You are advanced";
// 		break;
// 	default:
// 		demo.innerHTML = "You are senior";
// 		break;
// 	}
