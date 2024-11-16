import { BaseEntity } from "../baseEntity/BaseEntity";
import { Reimpresion } from "../reimpresion/Reimpresion";

export class Recibo extends BaseEntity {

     arrendatarioId ?:number;

     reImpresionId ?:number;
   
     arrendadorId ?:number;
   
     propiedadId ?:number;
   
    pagado?: boolean;
   
    concepto?:string;
   
   
     fechaPago?: Date;
   

    identificador?:string;
   
    
     total?:number;
   
     reImpresion ?:Reimpresion [];

}