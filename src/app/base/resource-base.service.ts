import { AnySchemaObject } from './../../../node_modules/schema-utils/declarations/keywords/absolutePath.d';
import { Inject, Injectable } from '@angular/core';
import { IResourceBaseService } from './IResourceBase.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { baseUrl } from '../app.config';
import { BaseEntity } from '../common/models/baseEntity/BaseEntity';
import { firstValueFrom, map, Observable } from 'rxjs';

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

  async edit(id: number, toEdit: T): Promise<T> {
    return await firstValueFrom( this.httpCliente.put<T>(`${baseUrl}${this.resourceName}/${id}`, toEdit))
  }

  index(): Observable<[T]> {
   return this.httpCliente.get<[T]>( `${baseUrl}${this.resourceName}`)
  }

  async delete(id: number): Promise<boolean> {
    return await firstValueFrom( this.httpCliente.delete<boolean>(`${baseUrl}${this.resourceName}/${id}`))
  }
  
  async details(id: number): Promise<T> {
    return await firstValueFrom( this.httpCliente.get<T>(`${baseUrl}${this.resourceName}/${id}`) )
  }
}
