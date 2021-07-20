import { Mobile } from "./mobile";

const mobile1 = new Mobile("Nokia3210","3210","Nokia",24,"blue",false,3,300);
const mobile2 = new Mobile("Iphone3210","3G","Iphone",24,"red",false,3,500);
const mobile3 = new Mobile("Samsung Galaxy 10","Galaxy 10","nokia",32,"white",true,3,700);
mobile1.is5G = true;
mobile1.cameraNumber = 4;
console.log("Nokia");
mobile1.printMobile(mobile1);
console.log("Iphone");
mobile2.printMobile(mobile2);
console.log("Samsung");
mobile3.printMobile(mobile3);

