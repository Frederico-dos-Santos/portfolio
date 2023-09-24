import { Component, OnInit } from '@angular/core';

interface iProjects {
  link: string,
  name: string,
  img: string,
  desc: string,
  lang: string
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{

  projects: iProjects[] = [];

  ngOnInit(): void {
    this.projects.push({link:'https://github.com/Frederico-dos-Santos/portfolio', name: 'Portfolio', img: 'assets/icons/portfolio.png', desc: 'Repositório desse portfólio.', lang: 'Angular'});
    this.projects.push({link:'https://github.com/Frederico-dos-Santos/hoteis', name: 'Hoteis', img: 'assets/icons/hotel.svg', desc: 'Projeto incompleto de um app de hotéis.', lang: 'Angular'});
    this.projects.push({link:'https://github.com/Frederico-dos-Santos/patients-angular', name: 'Patients', img: 'assets/icons/hospital.svg', desc: 'Projeto incompleto de um app para gerencia de pacientes.', lang: 'Angular'});
    this.projects.push({link:'https://github.com/Frederico-dos-Santos/Lab_Aluguel_carros', name: 'Alguel de Carros', img: 'assets/icons/car.svg', desc: 'Projeto da faculdade de uma locadora de carros.', lang: 'Angular'});
    this.projects.push({link:'https://github.com/ArthurAlexi/MoedaEstudantil', name: 'Moeda Estudantil', img: 'assets/icons/coin.svg', desc: 'Projeto da faculdade de uma sistema de bonificação estudantil.', lang: 'Angular'});
    this.projects.push({link:'https://github.com/Frederico-dos-Santos/CRUD-Laravel', name: 'CRUD Laravel', img: 'assets/icons/code.svg', desc: 'Projeto de estudo.', lang: 'Laravel'});
    this.projects.push({link:'https://github.com/Frederico-dos-Santos/CestaCompras', name: 'Cesta de Compras', img: 'assets/icons/fruits.svg', desc: 'Projeto de estudo.', lang: 'React Native'});
  }

}
