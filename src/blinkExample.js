import sleep from "es7-sleep";
import VT100 from "./util/VT100.js";
import Alpha from "./util/Alpha.js";

async function blink() {
	
	let isTrue = true;
	
	let a = new Alpha();
	
	for(let i=0; i<100; i++) {
		if(isTrue) {
			a.show();
		} else {
			a.hide();
		}
		
		isTrue = !isTrue;
		
		await sleep(50);
	}
	a.show();
}

async function main() {
	VT100.clearScreen();
	
	for(let i=0; i<50; i++) {
		blink();
		await sleep(2);
	}
	
	await sleep(10000);
	VT100.cursorMove(21, 1);
	VT100.reset();
	VT100.println("Program End...");
}

main();