import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { SessaoService } from "../services/sessao.service";

export function authGuard(): boolean {
  const sessaoService = inject(SessaoService);

  if (sessaoService.estaLogado()) {
    return true;
  }

  const router = inject(Router)
  router.navigate(["/login"]);

  return false;
}