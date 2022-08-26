export class Proyecto {
    id?: number;
    nombreProyecto: string;
    urlRepo: string;
    urlDeploy: string;
    imgProyecto: string;
    descripcionProyecto: string;

    constructor(nombreProyecto: string, urlRepo: string, urlDeploy: string, imgProyecto: string, descripcionProyecto: string) {
        this.nombreProyecto = nombreProyecto;
        this.urlRepo = urlRepo;
        this.urlDeploy = urlDeploy;
        this.imgProyecto = imgProyecto;
        this.descripcionProyecto = descripcionProyecto;
    }
}
