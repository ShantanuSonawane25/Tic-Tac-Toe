let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector ("#reset-btn");
let newGamebtn = document.querySelector ("#new-btn ");
let msgcontainer =document.querySelector (".msg-contaniner ");
let winnerannouncement  = document.querySelector(".winner-announcement ");
let msg = document.querySelector ("#msg");
let currentplayer = document.querySelector(".current-player");
let turnO = true; //turn of player O

const winPatterns = [ 
    	[0,1,2],
		[0,3,6],
		[0,4,8],
		[1,4,7] ,
		[2,5,8],
		[2,4,6],
		[3,4,5],
		[6,7,8]		
    
]
const resetGame = () => {
	turnO = true;
	currentplayer.innerText = "O"
	enabledboxes();
	msgcontainer.classList.add("hide");
	winnerannouncement.classList.remove("show");
}
 
boxes.forEach((box) => {
	box.addEventListener("click" , () => {
		if (turnO){
			currentplayer.innerText = "X";
			box.innerText = "O" ;
			box.classList.add('o');
			turnO= false;
		} else { 
			currentplayer.innerText = "O";
			box.innerText = "X" ;
			box.classList.add('x')
			turnO= true;
		}
		box.disabled = true;
		box.classList.add('filled');
		checkWinner ( );
	});

});

let disabledboxes = () => {
	for (let box of boxes) {
		box.disabled = true;
	}
	
}

let enabledboxes = () => {
	for (let box of boxes) {
		box.disabled = false;
		box.innerText= "";
	}
}


const showWinner = (winner) => {
	msg.innerText = `Congratulations, Winner is ${winner} 🥳`
	msgcontainer. classList.remove("hide");
	winnerannouncement.classList.add("show");
	disabledboxes();
}
const draw =() =>{
	msg.innerText = "It's a Draw 🤝"
	msgcontainer. classList.remove("hide");
	winnerannouncement.classList.add("show");
	disabledboxes();
}

const checkWinner = () => {
	let winnerFound = false;

	for (let pattern of winPatterns) {
		let pos1Val = boxes[pattern[0]].innerText;
		let pos2Val = boxes[pattern[1]].innerText;
		let pos3Val = boxes[pattern[2]].innerText;

		if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
			if (pos1Val === pos2Val && pos2Val === pos3Val) {
				showWinner(pos1Val);
				winnerFound = true;
				return; // exit the function as winner is found
			}
		}
	}

	// If no winner found, check for draw
	let isDraw = true;
	boxes.forEach((box) => {
		if (box.innerText === "") {
			isDraw = false;
		}
	});

	if (!winnerFound && isDraw) {
		draw();
	}
};




newGamebtn.addEventListener ("click", resetGame);
resetbtn.addEventListener ("click", resetGame);