import { Component, OnInit, ElementRef, Input, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { Customer } from 'src/model/customer';
import { Pessoa } from 'src/model/pessoa.model';
import { PessoaService } from 'src/services/services.pessoa';
import { ResolveStart, Router } from '@angular/router';
import { pipe } from 'rxjs';
import { parseDate } from 'devextreme/localization';
import { NotificationToolTip } from 'src/base/notificationToolTip';
import { AppComponent } from 'src/app/app.component';
import html2canvas from 'html2canvas';
import jspdf from "jspdf";
import { PdfComponent } from './pdf/pdf.component';
import { MedidaService } from "src/services/services.medidas";
import { Medidas } from "src/model/medidas.model";
import notify from 'devextreme/ui/notify';


@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent implements OnInit {

  Pessoas: Pessoa[] = [];
  pessoa: Pessoa = new Pessoa();
  Medidas: Medidas[] = [];
  medidas: Medidas = new Medidas();
  popupVisible = false;
  positionOf: string;

  now: Date = new Date();

  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;

  constructor(private elementRef: ElementRef,
    private pessoaService: PessoaService,
    private medidasService: MedidaService,
    private notification: NotificationToolTip,
    private router: Router
    ) {
    const that = this;
    this.click = this.click.bind(this);
    this.details = this.details.bind(this);
  }

  ngOnInit(): void {

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);

    this.pessoaService.getClientes().subscribe((data: Pessoa[]) => {
      this.Pessoas = data
    });

    this.medidasService.getMedida('').subscribe((data: Medidas[]) => {
      this.Medidas = data
    });
  }

  public showPopup(event) {
    this.popupVisible = true;
  }

  public save() {
    if (this.pessoa.IsValid()) {
      this.pessoaService.saveCliente(undefined, this.pessoa)
        .subscribe(res => {
          this.notification.Notify('success', 'Pessoa :' + this.pessoa.nome + 'cadastrado com sucesso.', 3000);
          console.log(res);
          this.popupVisible = false;
        },
          (error: any) => {
            this.notification.Notify('error', error?.error + error?.error?.mensagem, 6000);
            this.popupVisible = false;
          });
    }
    else {
      this.notification.Notify('error', this.pessoa.IsValidMensegemErro, 6000);
    }
  }

  public click(e){
    console.log(e.row.data);
    this.router.navigate(['pessoa/pdf/'+ e.row.data.idMedidas]);
  };

  public details(e){
    console.log(e.row.data);
    this.router.navigate(['pessoa/details/']);
  };

  rowValidating(e) {
    const position = e.newData.Position;

    if (AppComponent.isChief(position)) {
      e.errorText = `The company can have only one ${position.toUpperCase()}. Please choose another position.`;
      e.isValid = false;
    }
  }

  editorPreparing(e) {
    if (e.parentType === 'dataRow' && e.dataField === 'Position') {
      e.editorOptions.readOnly = AppComponent.isChief(e.value);
    }
  }

  allowDeleting(e) {
    return !AppComponent.isChief(e.row.data.Position);
  }

  isCloneIconVisible(e) {
    return !e.row.isEditing;
  }

  isCloneIconDisabled(e) {
    return AppComponent.isChief(e.row.data.Position);
  }

  cloneIconClick(e) {
    const clonedItem = { ...e.row.data, ID: this.pessoaService.getClientes() };
}
}
