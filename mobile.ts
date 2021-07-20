export class Mobile{
    public name:string
    public model:string
    public trademark:string
    public sdSize:number
    public color:string
    public is5G:boolean
    public cameraNumber:number
    public priece:number

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

    printMobile(mobile:Mobile){
        console.log("Name del Mobile: " + this.name);
        console.log("Model del Mobile: " + this.model);
        console.log("Trademark del Mobile: " + this.trademark);
        console.log("SdSize del Mobile: " + this.sdSize);
        console.log("Color del Mobile: " + this.color);
        console.log("is5G del Mobile: " + this.is5G);
        console.log("CameraNumber del Mobile: " + this.cameraNumber);
        console.log("Priece del Mobile: " + this.priece + "\n");
    }
}