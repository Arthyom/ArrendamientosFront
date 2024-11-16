import { Inject, Injectable } from '@angular/core';
import { IResourceBaseService } from './IResourceBase.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { baseUrl } from '../app.config';
import { BaseEntity } from '../common/models/baseEntity/BaseEntity';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
  

})
export class ResourceBaseService<T extends BaseEntity> implements IResourceBaseService<T>{


  resourceName: string | undefined = '';

  private fullUrl = `${baseUrl}${this.resourceName}`;

  constructor(  public httpCliente: HttpClient ) { 

    
  }


  

  create( toCreateITem: T): Promise<T | undefined > {
      return this.httpCliente
               .post<T>( `${baseUrl}${this.resourceName}`, toCreateITem)
               .toPromise() 

               
  }

  edit(id: number): Promise<T> {
     this.httpCliente.get<T>(`this.fullUrl/${id}`)
     throw new Error('Method not implemented.');

  }

  index(): Observable<[T]> {
   return this.httpCliente.get<[T]>( `${baseUrl}${this.resourceName}`)
  }

  delete(id: number): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  details(id: number): Promise<T> {
    throw new Error('Method not implemented.');
  }
}
