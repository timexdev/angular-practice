// import { CanActivateFn } from '@angular/router';

// export const taskGuard: CanActivateFn = (route, state) => {
//   return true;
// };


import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
// import { AuthService } from './auth.service';
import { Router } from '@angular/router';

export const taskGuard: CanActivateFn = (route, state) => {
  // const authService = inject(AuthService);
  const router = inject(Router);

  let checkUser:any = localStorage.getItem("taskCurrentUser")
  checkUser = JSON.parse(checkUser)
  
  if (!checkUser) {
    router.navigate(["/signin"])
  } 
  return true;
};


// import { Injectable } from "@angular/core";
// import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
// import { Observable } from "rxjs";

// @Injectable({
//   providedIn:"root"
// })

// export class taskGuard implements CanActivate {
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
//     let checkUser:any = localStorage.getItem("taskCurrentUser");
//     checkUser = JSON.parse(checkUser);
//     console.log(checkUser)
//     return true;
//   }
// }