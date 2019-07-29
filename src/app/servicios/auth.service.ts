import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { JwtResponse } from './../modelos/jwt-response.model';
import { Usuario } from './../modelos/usuario.model';

import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthService {

  constructor() { }
}
