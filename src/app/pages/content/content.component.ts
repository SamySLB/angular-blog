import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string="https://pop.proddigital.com.br/wp-content/uploads/sites/8/2023/02/01-80.jpg"
  contentTitle:string="Avatar, O caminho da Água"
  contentDescription:string="Em Avatar: o caminho das águas (2022), o diretor amplia o universo de Pandora e traz a continuação da narrativa iniciada em 2009 que cativou o mundo e nos apresentou a possibilidade, até então distante, de termos nossos corpos substituídos por avatares."



  constructor() { }

  ngOnInit(): void {
  }

}
