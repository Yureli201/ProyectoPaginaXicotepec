import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { recurso, comentario, usuario } from './MODELOS/modelos'
@Injectable({providedIn: 'root'})
export class ServiceNameService {
  constructor(private httpClient: HttpClient) { }
  
}
@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  API_URL_USUARIOS= 'http://localhost:3000/usuarios'
  API_URL_COMENTARIOS= 'http://localhost:3000/comentarios'
  API_URL_RECURSOS= 'http://localhost:3000/recurso'

  constructor( private http: HttpClient) { }

  guardarUsuario(Usuario: usuario){
    return this.http.post(`${this.API_URL_USUARIOS}/crear`, Usuario)
  }
  leerUsuario(){
    return this.http.get(`${this.API_URL_USUARIOS}/buscarTodos`)
  }
  leerUsuarioID(id:string){
    return this.http.get(`${this.API_URL_USUARIOS}/buscar/${id}`)
  }
  leerUsuarioEmail(email:string){
    return this.http.get(`${this.API_URL_USUARIOS}/buscar/email/${email}`)
  }
  borrarUsuario(id: string){
    return this.http.delete(`${this.API_URL_USUARIOS}/borrar/${id}`)
  }
  modificarUsuario(id:string, usuarioModificado:usuario){
    return this.http.put(`${this.API_URL_USUARIOS}/actualizar/${id}`, usuarioModificado)
  }



  guardarComentario(Comentario: comentario){
    return this.http.post(`${this.API_URL_COMENTARIOS}/crearC`, Comentario)
  }
  leerComentario(){
    return this.http.get(`${this.API_URL_COMENTARIOS}/buscarTodos`)
  }
  leerComentarioRecurso(idRecurso:string){
    return this.http.get(`${this.API_URL_COMENTARIOS}/buscar/recurso/${idRecurso}`)
  }
  borrarComentario(id: string){
    return this.http.delete(`${this.API_URL_COMENTARIOS}/borrar/${id}`)
  }
  modificarComentario(id:string|undefined, recursoModificado:recurso){
    return this.http.put(`${this.API_URL_COMENTARIOS}/actualizar/${id}`, recursoModificado)
  }


  guardarRecurso(Recurso: recurso){
    return this.http.post(`${this.API_URL_RECURSOS}/crear`, Recurso)
  }
  leerRecursos(){
    return this.http.get(`${this.API_URL_RECURSOS}/buscarTodos`)
  }
  leerRecursosId(id:string){
    return this.http.get(`${this.API_URL_RECURSOS}/buscar/${id}`)
  }
  leerRecursosCategoria(categoria:string){
    return this.http.get(`${this.API_URL_RECURSOS}/buscar/categoria/${categoria}`)
  }
  borrarRecurso(id: string){
    return this.http.delete(`${this.API_URL_RECURSOS}/borrar/${id}`)
  }
  modificarRecurso(id:string, recursoModificado:recurso){
    return this.http.put(`${this.API_URL_RECURSOS}/actualizar/${id}`, recursoModificado)
  }
}
