import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import {environment} from "../../environments/environment";

const AUTHORIZATION_HEADER_NAME = 'authorization';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  /**
   * Appends Authorization headers to Angular's HTTP Request object and returns a clone.
   *
   * @param req HttpRequest object by Angular
   */
  public appendFullAuthToHttpRequest(req: HttpRequest<any>): HttpRequest<any> {
      const headers = req.headers.append(AUTHORIZATION_HEADER_NAME, `Bearer ${environment.contentful.accessToken}`)
      return req.clone({ headers });
  }

}
