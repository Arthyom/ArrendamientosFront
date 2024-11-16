import { Injectable } from "@angular/core";
import { ResourceBaseService } from "../base/resource-base.service";
import { Arrendatario } from "../common/models/arrendatario/Arrendatario";
import { Recibo } from "../common/models/recibo/Recibo";

@Injectable({
    providedIn: "root"
})
export class ReciboService extends ResourceBaseService<Recibo> {
    override resourceName = 'Recibos';
}