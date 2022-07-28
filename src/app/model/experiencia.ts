export class Experiencia {
    id?: number;
    nombreExperiencia: string;
    descripcionExperiencia: string;

    constructor(nombreExperiencia: string, descripcionExperiencia: string) {
        this.nombreExperiencia = nombreExperiencia;
        this.descripcionExperiencia = descripcionExperiencia;
    }
}
