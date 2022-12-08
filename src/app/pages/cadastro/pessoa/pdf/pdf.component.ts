import { Component, ElementRef, HostListener, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PdfViewerComponent } from "ng2-pdf-viewer";
import { MedidaService } from "src/services/services.medidas";
import { Medidas } from "src/model/medidas.model";
import { Pessoa } from "src/model/pessoa.model";
import { NotificationToolTip } from "src/base/notificationToolTip";
import { HttpService } from "src/base/http.service";
import { PessoaService } from "src/services/services.pessoa";
import { DxDataGridComponent, IDxTemplateHost } from "devextreme-angular";
import { map, switchMap } from "rxjs";

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss'],
  providers: [PdfViewerComponent]
})
export class PdfComponent implements OnInit {
  Medidas: Medidas[] = [];
  medidas: Medidas = new Medidas();
  now: Date = new Date();
  Pessoas: Pessoa[] = [];
  pessoa: Pessoa = new Pessoa();
  src: string ='';

  constructor(private elementRef: ElementRef,
    private medidasService: MedidaService,
    private route: ActivatedRoute,
    private notification: NotificationToolTip,
    private httpService: HttpService,
    private pessoaService: PessoaService
  ) {
    const that = this;
  }

  obterSomenteUm() {
    this.medidasService.obterPorId('')
      .then(idm => console.log(idm))
      .catch(error => console.error(error));
  }


  ngOnInit(): void {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);

    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.src = 'https://localhost:5001/Cliente/GetMedida?Id='+ id;

    this.medidasService.getMedida('').subscribe((data: Medidas[]) => {
      this.Medidas = data
    })
  };



}

