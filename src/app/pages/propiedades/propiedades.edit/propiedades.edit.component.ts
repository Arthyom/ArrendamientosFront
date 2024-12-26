import { Component, OnInit } from '@angular/core';
import { Propiedad } from '../../../common/models/propiedad/Propiedad';
import { PropiedadService } from '../../../services/Propiedad.service';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-propiedades.edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './propiedades.edit.component.html',
  styleUrl: './propiedades.edit.component.scss'
})
export class PropiedadesEditComponent implements OnInit {

  currentProperty: Propiedad | undefined;
  propiedadId: number;
  fgPropiedad: FormGroup;


  /**
   *
   */
  constructor( private propiedadService: PropiedadService, private router: ActivatedRoute ) {
    this.currentProperty = undefined;
    this.propiedadId =0;
    this.fgPropiedad = new FormGroup({});

  }

  async ngOnInit(){
    this.propiedadId = Number( (await firstValueFrom( this.router.paramMap ))?.get('id') );
    this.currentProperty = await this.propiedadService.details(this.propiedadId);
    this.buildForm(this.currentProperty);
  }


  private buildForm(currentProperty : Propiedad){
    this.fgPropiedad = new FormGroup({
      alias: new FormControl(currentProperty?.alias, Validators.required),
      nombre: new FormControl(currentProperty?.nombre, Validators.required),
      precio: new FormControl(currentProperty?.precio, Validators.required),
      typeProperty: new FormControl(currentProperty?.typeProperty, Validators.required),
      libre: new FormControl(currentProperty?.libre),
      direccion: new FormControl(currentProperty?.direccion),
      municipio: new FormControl(currentProperty?.municipio),
      colonia: new FormControl(currentProperty?.colonia),
      id: new FormControl(currentProperty?.id)
    });
  }

  public async edit(id:number){
    const toSend = this.fgPropiedad.value as Propiedad;
    const ok = await this.propiedadService.edit(id, toSend);
    if(ok){
      alert('ok')
    }
    else{
      alert('error');
    }
  }

  

  

}
