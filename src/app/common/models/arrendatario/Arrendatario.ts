import { BaseEntity } from "../baseEntity/BaseEntity";

export class Arrendatario extends BaseEntity
{    
     nombre ?: string;
     apellidoPaterno ?: string;
     apellidoMaterno ?: string; 
     curp ?: string;
     rfc ?: string;
     alias ?: string;
   
     direccion ?: string;    
     municipio ?: string;
     colonia ?: string;
     propiedadId?:number;
}