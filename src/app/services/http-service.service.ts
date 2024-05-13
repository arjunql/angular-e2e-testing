import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private httpClient:HttpClient) { }

      /**
     *
     * @param url
     * @param requestBody
     * @returns
     * @description
     */
      post(url: string, requestBody: any) {
        return this.httpClient.post(url, requestBody).pipe(
            map((response) => {
                return response;
            })
        );
    }

    /**
     *
     * @param url
     * @param params
     * @returns
     * @description
     */
    get(url: string, params?: any) {
        return this.httpClient.get(url, params).pipe(
            map((response) => {
                return response;
            })
        );
    }

        /**
     *
     * @param url
     * @param params
     * @returns
     * @description
     */
        update(url: string, requestBody?: any) {
          return this.httpClient.patch(url, requestBody).pipe(
              map((response) => {
                  return response;
              })
          );
      }

          /**
     *
     * @param url
     * @param params
     * @returns
     * @description
     */
    delete(url: string, requestBody?: any) {
      return this.httpClient.delete(url, requestBody).pipe(
          map((response) => {
              return response;
          })
      );
  }
}
