import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grupo-consulta',
  standalone: true,
  imports: [],
  templateUrl: './grupo-consulta.component.html',
  styleUrl: './grupo-consulta.component.sass'
})
export class GrupoConsultaComponent implements OnInit{

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const groupId =this.route.snapshot.paramMap.get('id');
    console.log(groupId);
  }

}
