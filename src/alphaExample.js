import { sprintf } from "sprintf-js";
import Alpha from "./util/Alpha.js";
import VT100 from "./util/VT100.js";
import  sleep  from "es7-sleep";

async function main() {
	
	VT100.clearScreen();
	
	const set = new Set();
	
	for(let i=0;; i++) {
		let alpha = new Alpha();

		alpha.show();
		await sleep(2);
		
		VT100.cursorMove(1, 41);
		VT100.reset();
		VT100.print(sprintf("forCount = [%05d]", i));
		
		set.add(sprintf("%02d:%02d", alpha.getLine(), alpha.getColumn()));
		if(set.size == 800)
			break;
	}

	VT100.reset();
	VT100.cursorMove(21, 1);
	VT100.println("Program End...");
	
}

main();

