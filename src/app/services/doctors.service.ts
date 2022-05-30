import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Doctor } from '../models/doctors';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const doctorUrl = 'https://jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root'
})

export class DoctorService {
   httpOptions = {
     headers: new HttpHeaders({ 'Content-type': 'application/json'})
   };

   constructor(private http: HttpClient) {}

   getAllDoctor(): Observable<Doctor[]> {
      return this.http.get<Doctor[]>(`${doctorUrl}/users`).pipe(
        tap((data) => {
          console.log('Doctor', JSON.stringify(data));
        })
      );
   }

   registerDoctor(doctor: Doctor): Observable<any> {
     return this.http.post(`${doctorUrl}/users`, doctor, {responseType: 'text'});
   }
}


