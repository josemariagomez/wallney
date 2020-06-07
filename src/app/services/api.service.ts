import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private storage: Storage
    ) { }
  
  login(email, password) {
    return this.http.post('https://wallney.josegm.me/api/login', {email: email, password: password}).toPromise();
  }

  register(name, username, email, password, password_confirmation){
    return this.http.post('https://wallney.josegm.me/api/register', {name: name, username: username, email: email, password: password, password_confirmation: password_confirmation}).toPromise();
  }

  resetpassword(email){
    return this.http.post('https://wallney.josegm.me/api/password/email', {email: email}).toPromise();
  }

  logged(access_token){
    return this.http.get('https://wallney.josegm.me/api/users', {
      headers: new HttpHeaders({'Authorization': access_token}),
      observe: 'response'
    }).toPromise();
  }

  async createExpense(title,description,amount,date){
    let token = await this.storage.get('token') 
    return this.http.post('https://wallney.josegm.me/api/expenses/store', {
      title: title,
      description: description,
      amount: amount,
      date: date
    },{
      headers: new HttpHeaders({'Authorization': 'Bearer ' + token}),
      observe: 'response'
    }).toPromise();
  }

  async createIncomes(title,description,amount,date){
    let token = await this.storage.get('token') 
    return this.http.post('https://wallney.josegm.me/api/incomes/store', {
      title: title,
      description: description,
      amount: amount,
      date: date
    },{
      headers: new HttpHeaders({'Authorization': 'Bearer ' + token}),
      observe: 'response'
    }).toPromise();
  }

}