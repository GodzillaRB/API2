import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  Nombre: string = "";
  ApellidoPaterno: string = "";
  ApellidoMaterno: number = 0;
  AnoNacimiento: string = "";
  Sexo: string = "";

  constructor(private http:HttpClient) { }



  ngOnInit() {
    const apiURL = 'http://localhost:1337/api/curps/1';
    this.http.get(apiURL).subscribe((data: any) => {
      console.log(data)
      this.Nombre = data.data.attributes.Nombre
      this.ApellidoPaterno = data.data.attributes.ApellidoPaterno
      this.ApellidoMaterno = data.data.attributes.ApellidoMaterno
      this.AnoNacimiento = data.data.attributes.AnoNacimiento
      this.Sexo = data.data.attributes.Sexo

    });
  }

}
