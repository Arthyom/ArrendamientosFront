import { Injectable } from "@angular/core";
import { ResourceBaseService } from "../base/resource-base.service";
import { Arrendatario } from "../common/models/arrendatario/Arrendatario";

@Injectable({
    providedIn: "root"
})
export class ArrendarioService extends ResourceBaseService<Arrendatario> {
    override resourceName = 'Arrendatarios';
}