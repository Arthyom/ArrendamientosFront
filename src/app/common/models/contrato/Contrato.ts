import { BaseEntity } from "../baseEntity/BaseEntity";
import { Renovacion } from "../renovacion/Renovacion";

export class Contrato extends BaseEntity{
    
    ArrendadorId ?: number;
    ArrendatarioId ?: number;
    PropiedadId ?: number;
    FiadorId ?: number;
    Termino ?: Date;
   
   
    Renovacion ?: Renovacion [];
}