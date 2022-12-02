import { Component, ElementRef, HostListener, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PdfViewerComponent } from "ng2-pdf-viewer";
import { MedidaService } from "src/services/services.medidas";
import { Medidas } from "src/model/medidas";
import { NotificationToolTip } from "src/base/notificationToolTip";

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss'],
  providers: [PdfViewerComponent ]
})
export class PdfComponent implements OnInit {
  Medidas: Medidas[] = [];
  medidas: Medidas = new Medidas();
  now: Date = new Date();

    constructor(private elementRef: ElementRef,
    private medidasService: MedidaService,
    private notification: NotificationToolTip,
    ) {
    const that = this;
  }


  ngOnInit(): void {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);

    this.medidasService.getMedida().subscribe((data: Medidas[]) => {
      this.Medidas = data
    })
  };

  src = MedidaService;


}

