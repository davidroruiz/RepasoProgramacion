import { MobileLibrary } from "./mobileLibrary";
import { Mobile } from "./mobile";

const mobile1 = new Mobile("Nokia3210","3210","Nokia",24,"blue",false,3,300);
const mobile2 = new Mobile("Iphone3210","3G","Iphone",24,"red",false,3,500);
const mobile3 = new Mobile("Samsung Galaxy 10","Galaxy 10","nokia",32,"white",true,3,700);
const mobile4 = new Mobile("Xiaomi Mi10","Mi 10","Xiaomi",32,"white",true,4,600);
let arraryMobile = [];
arraryMobile = [mobile1,mobile2,mobile3,mobile4];
const mobileLibrary = new MobileLibrary("Don Lapiz","Spain",arraryMobile);

console.log("Suma de todos los precios \n" + mobileLibrary.totalPriceCalculation());
