import {Punto} from "./punto";
export class Triangulo{
    private verti1:Punto;
    private verti2:Punto;
    private verti3:Punto;

    constructor(veri1:Punto, verti2:Punto, verti3:Punto){
        this.verti1 = veri1;
        this.verti2 = verti2;
        this.verti3 = verti3;
    }

    public calcularLongitud():number[]{
            
        let arrayNumber:number[] = [];
        arrayNumber.push(this.verti1.calcularDistancia(this.verti3));
        arrayNumber.push(this.verti2.calcularDistancia(this.verti1));
        arrayNumber.push(this.verti3.calcularDistancia(this.verti2));
        return arrayNumber;
    }
}