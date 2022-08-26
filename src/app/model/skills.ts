export class Skill {
    id?: number;
    nombreSkill: string;
    porcentajeSkill: number;
    colorSkill: string;

    constructor(nombreSkill: string, porcentajeSkill: number, colorSkill: string) {
        this.nombreSkill = nombreSkill;
        this.porcentajeSkill = porcentajeSkill;
        this.colorSkill = colorSkill;
    }
}
