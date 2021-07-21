import { Mobile } from "./mobile";

const mobile1 = new Mobile("Nokia3210","3210","Nokia",24,"blue",false,3,300);
const mobile2 = new Mobile("Iphone3210","3G","Iphone",24,"red",false,3,500);
const mobile3 = new Mobile("Samsung Galaxy 10","Galaxy 10","nokia",32,"white",true,3,700);
mobile1.set_is5G(true);
mobile1.set_cameraNumber(4);
console.log("Nokia");
console.log(mobile1.printMobile());
console.log("Iphone");
console.log(mobile2.printMobile());
console.log("Samsung");
console.log(mobile3.printMobile());

