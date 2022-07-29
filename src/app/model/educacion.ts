export class Educacion {
    id?: number;
    nombreEducacion: string;
    descripcionEducacion: string;
    establecimiento: string;
    imgEducacion: string;
    startEducacion: number;
    endEducacion: string;

    constructor(nombreEducacion: string, descripcionEducacion: string, establecimiento: string, imgEducacion: string, startEducacion: number, endEducacion: string) {
        this.nombreEducacion = nombreEducacion;
        this.descripcionEducacion = descripcionEducacion;
        this.establecimiento = establecimiento;
        this.imgEducacion = imgEducacion;
        this.startEducacion = startEducacion;
        this.endEducacion = endEducacion;
    }
}
