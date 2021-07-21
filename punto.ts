export class Punto {
    private x: number;
    private y: number;

    public get_y(): number {
        return this.y;
    }
    public set_y(value: number) {
        this.y = value;
    }

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    public get_x(): number {
        return this.x;
    }
    public set_x(value: number) {
        this.x = value;
    }
    public toString() {
        this.x.toString();
        this.y.toString();

        return "(" + this.get_x() + "," + this.get_y() + ")"
    }

    public distanciaAlOrigen(): number {

        let distanciaPunto: number = 0;
        distanciaPunto = Math.sqrt(this.get_x() + this.get_y());
        return distanciaPunto;
    }

    public calcularDistancia(otroPunto: Punto): number {

        let distance = Math.sqrt((Math.pow(this.get_x() - otroPunto.get_x(), 2)) + (Math.pow(this.get_y() - otroPunto.get_y(), 2)));
        return distance;
    }

    public calcularCuadrante(): number {
        let coordenada: number = 0;
        if (this.get_x() == 0 || this.get_y() == 0) {
            coordenada = 0;
        } else if (this.get_x() > 0 && this.get_y() > 0) {
            coordenada = 1;
        } else if (this.get_x() < 0 && this.get_y() > 0) {
            coordenada = 2;
        } else if (this.get_x() < 0 && this.get_y() > 0) {
            coordenada = 3;
        } else {
            coordenada = 4;
        }
        return coordenada;
    }

    public calcularMasCercano(puntos:Punto[]):Punto{

        let cercanoAlPunto:Punto;
        let result:number = this.calcularDistancia(puntos[0]);
            for (let index = 0; index < puntos.length ; index++) {
                
                  if(this.calcularDistancia(puntos[index]) < result){
                    cercanoAlPunto=puntos[index];
                    result=this.calcularDistancia(puntos[index]);
                    
                  }

            }
        return cercanoAlPunto;
    }
}