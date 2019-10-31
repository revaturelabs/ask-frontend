import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean> {
      return this.authService.isLoggedIn 
      .pipe(
        take(1),
        map((isLoggedIn: boolean) => {
          if (!isLoggedIn){
            this.router.navigate(['/']);
            return false;
          }
          return true;
        }));
  }
}