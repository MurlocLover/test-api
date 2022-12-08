import { Component, OnInit, ElementRef, Input, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { Router } from 'express';
import { NotificationToolTip } from 'src/base/notificationToolTip';
import { Pessoa } from 'src/model/pessoa.model';
import { PessoaService } from 'src/services/services.pessoa';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
})
export class DetailsComponent implements OnInit {

  Pessoas: Pessoa[] = [];
  pessoa: Pessoa = new Pessoa();

  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;

  constructor(private elementRef: ElementRef,
    private pessoaService: PessoaService,
    private notification: NotificationToolTip,
    private router: Router){}

  ngOnInit(): void {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);

    this.pessoaService.getClientes().subscribe((data: Pessoa[]) => {
      this.Pessoas = data
    });
  }
}
