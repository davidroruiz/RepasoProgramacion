import { Mobile } from "./mobile";
export class MobileLibrary{
    private name: string;
    private location: string;
    private mobiles: Mobile[];
    private totalPrice: number;
 
    constructor(name:string, location:string, mobiles:Mobile[]){
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
    }

    public get_name(): string {
        return this.name;
    }
    public set_name(value: string) {
        this.name = value;
    }
    public get_location(): string {
        return this.location;
    }
    public set_location(value: string) {
        this.location = value;
    }
    public get_mobiles(): Mobile[] {
        return this.mobiles;
    }
    public set_mobiles(value: Mobile[]) {
        this.mobiles = value;
    }
    public get_totalPrice(): number {
        return this.totalPrice;
    }
    public set_totalPrice(value: number) {
        this.totalPrice = value;
    }
    public printLibrary(){
        console.log("This is all my mobiles: \n" );

        for (let index = 0; index < this.mobiles.length; index++) {
            console.log(this.mobiles[index].printMobile());
        }
        console.log("Price overall " + this.totalPrice);
    }

     private totalPriceCalculation() {
        let sumaPrice:number = 0;   
             
        for (let index = 0; index < this.mobiles.length; index++) {
            sumaPrice += this.mobiles[index].get_priece();
        }

        return sumaPrice;
    }
}