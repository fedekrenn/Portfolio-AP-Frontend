export class Experiencia {
    id?: number;
    nombreExperiencia: string;
    descripcionExperiencia: string;
    compania: string;
    imgExp: string;
    startExp: number;
    endExp: string;

    constructor(nombreExperiencia: string, descripcionExperiencia: string, compania: string, imgExp: string, startExp: number, endExp: string) {
        this.nombreExperiencia = nombreExperiencia;
        this.descripcionExperiencia = descripcionExperiencia;
        this.compania = compania;
        this.imgExp = imgExp;
        this.startExp = startExp;
        this.endExp = endExp;
    }
}
