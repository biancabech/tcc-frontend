import { Injectable } from "@angular/core";
import { Usuario } from "../models/Usuario";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SessaoService {
  private static usuario: Usuario | null = null;

  constructor(private router: Router) {
    const valorStorage = localStorage.getItem('usuario');

    if (valorStorage) {
      const usuario = JSON.parse(valorStorage); // transforma a string no formato json em objeto
      this.iniciar(usuario);
    }
  }

  usuario() {
    return SessaoService.usuario;
  }

  estaLogado() {
    return Boolean(this.usuario());
  }

  finalizar() {
    this.limpar();
    this.router.navigate(['/login']);
  }

  limpar() {
    SessaoService.usuario = null;
    localStorage.clear();
  }

  iniciar(usuario: Usuario) {
    SessaoService.usuario = usuario;
    const valorStorage = JSON.stringify(usuario); // transforma um objeto numa string no formato json
    localStorage.setItem('usuario', valorStorage);
  }
}