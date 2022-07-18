import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {
  public nombre:string;
  constructor() {
    this.nombre = "johan";
   }

  ngOnInit(): void {
  }

}
