import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { ResourceBaseService } from '../../base/resource-base.service';
import { Arrendatario } from '../../common/models/arrendatario/Arrendatario';
import { Contrato } from '../../common/models/contrato/Contrato';
import { Propiedad } from '../../common/models/propiedad/Propiedad';
import { Arrendador } from '../../common/models/arrendador/Arrendador';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ArrendarioService } from '../../services/Arrendatario.service';
import { PropiedadService } from '../../services/Propiedad.service';
import { FiadorService } from '../../services/Fiador.service';
import { ContratoService } from '../../services/Contrato.service';
import { Fiador } from '../../common/models/fiador/Fiador';
import { baseUrl } from '../../app.config';

@Component({
  selector: 'app-contratos',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule],
  templateUrl: './contratos.component.html',
  styleUrl: './contratos.component.scss'
})
export class ContratosComponent extends BaseComponent<Contrato> implements OnInit {

  propiedades: Propiedad[] = [];

  fgPropiedad: FormGroup; 
  fgFiador: FormGroup;
  fgArrendatario: FormGroup;

  constructor( 
    
    private aS: ArrendarioService,
    private pS: PropiedadService,
    private fS: FiadorService,

    private cS:ContratoService

   ) {

    super( cS );



    this.fgPropiedad = new FormGroup({
      propiedadId: new FormControl(null, Validators.required ),
      
    });

    this.fgArrendatario = new FormGroup({
      nombre : new FormControl(null, Validators.required),
      apellidoPaterno : new FormControl(null, Validators.required),
      apellidoMaterno : new FormControl(null, Validators.required), 
   
      // curp ?: string;
      // rfc ?: string;
      // alias ?: string;
   
      direccion : new FormControl(),    
      municipio : new FormControl(),
      colonia : new FormControl()

    });

    this.fgFiador = new FormGroup({
      nombre : new FormControl(null, Validators.required),
      apellidoPaterno : new FormControl(null, Validators.required),
      apellidoMaterno : new FormControl(null, Validators.required), 
   
      // curp ?: string;
      // rfc ?: string;
      // alias ?: string;
   
      direccion : new FormControl(),    
      municipio : new FormControl(),
      colonia : new FormControl()

    });
    
  }

  ngOnInit(): void {
    this.pS.index().subscribe( (d) => this.propiedades = d);
  }


  async crearContrato(){
    if( this.fgArrendatario.valid && this.fgFiador.valid && this.fgPropiedad.valid){

      const ar  = this.fgArrendatario.value as Arrendatario;
      const fr =  this.fgFiador.value as Fiador;
      const pr = this.fgPropiedad.value as Propiedad;

      const arrR = await this.aS.create(ar);
      const fidR = await this.fS.create(fr);
      // const prpR = await this.pS.create(pr);

      if(arrR != null && fidR != null && pr != null){
        const newContract =  await this.cS.create({
          ArrendadorId: 1, 
          FiadorId: fidR.id, 
          PropiedadId: pr.id,
          ArrendatarioId: arrR.id
        });

        if(newContract != null){
          window.open(`${baseUrl}Contratos/Documento/${newContract.id}`, '_blank');
        }

        
      }

    }
    else{
      alert('forms no validos');
    }
  }
  
}
