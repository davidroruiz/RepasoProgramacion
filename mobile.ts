export class Mobile{
    private name: string
    private model: string
    private trademark: string
    private sdSize: number
    private color: string
    private is5G: boolean
    private cameraNumber: number
    private priece: number

    constructor(name:string, model:string, trademark:string, sdSize:number, 
        color:string, is5G:boolean, cameraNumber:number, priece:number){

            this.name = name;
            this.model = model;
            this.trademark = trademark;
            this.sdSize = sdSize;
            this.color = color;
            this.is5G = is5G;
            this.cameraNumber = cameraNumber;
            this.priece = priece;
    }

    public get_name(): string {
        return this.name
    }
    public set_name(value: string) {
        this.name = value
    }

    public get_model(): string {
        return this.model
    }
    public set_model(value: string) {
        this.model = value
    }

    public get_trademark(): string {
        return this.trademark
    }
    public set_trademark(value: string) {
        this.trademark = value
    }
    public get_sdSize(): number {
        return this.sdSize
    }
    public set_sdSize(value: number) {
        this.sdSize = value
    }
    public get_color(): string {
        return this.color
    }
    public set_color(value: string) {
        this.color = value
    }
    public get_is5G(): boolean {
        return this.is5G
    }
    public set_is5G(value: boolean) {
        this.is5G = value
    }
    public get_cameraNumber(): number {
        return this.cameraNumber
    }
    public set_cameraNumber(value: number) {
        this.cameraNumber = value
    }
    public get_priece(): number {
        return this.priece
    }
    public set_priece(value: number) {
        this.priece = value
    }

    public printMobile(){
        let stringMostraPantalla:string=("The characteristics of the mobile name are: \n"
        + "Name: " + this.name + "\n"
        + "Model: " + this.model + "\n"
        + "Trademark: " + this.trademark + "\n"
        + "SD Size (GB): " + this.sdSize + "\n"
        + "Color: " + this.color + "\n"
        + "Is 5G?: " + this.is5G + "\n"
        + "CameraNumber: " + this.cameraNumber + "\n"
        + "Priece: " + this.priece + "\n");

        return stringMostraPantalla;
    }


}