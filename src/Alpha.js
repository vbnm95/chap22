/**
 * 
 */

import { sprintf } from "sprintf-js";

for(let i=0; i<10; i++) {
	let line = parseInt(Math.random() * 20 + 1);
	let column = parseInt(Math.random() * 40 + 1);
	let fg = parseInt(Math.random() * 8 + 30);
	let bg = parseInt(Math.random() * 8 + 40);
	let ch = (Math.random() * 26 + "A"[0].charCodeAt());
	ch = String.fromCharCode(ch);
	
	//console.log(`[${line}, ${column}, ${fg}, ${bg}, ${ch}]`);
	console.log(sprintf("[%02d, %02d, %02d, %02d, %2s]", line, column, fg, bg, ch));
}