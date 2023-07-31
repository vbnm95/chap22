import VT100 from "./util/VT100.js";


VT100.clearScreen();

VT100.reset();

VT100.cursorMove(10, 20);
VT100.setForeground(31);
VT100.setBackground(42);
VT100.print("Hello");

VT100.cursorMove(14, 18);
VT100.setForeground(35);
VT100.setBackground(46);
VT100.print("World");

VT100.cursorMove(4, 19);
VT100.setForeground(37);
VT100.setBackground(40);
VT100.print("NodeJS");

VT100.reset();
VT100.cursorMove(21, 20);
VT100.println("Program End...");