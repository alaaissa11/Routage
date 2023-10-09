import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InvoiceListComponentComponent } from '../invoice-list-component/invoice-list-component.component';
@Component({
  selector: 'app-invoice-component',
  templateUrl: './invoice-component.component.html',
  styleUrls: ['./invoice-component.component.css']
})
export class InvoiceComponentComponent {
  id:number=0;
  active:boolean=false;
  invoice:any;
  

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
  this.id = idParam !== null ? +idParam : 0; // Assign 0 as a default value if idParam is null
  this.active = this.route.snapshot.paramMap.get('active') === 'true';
  this.invoice = this.getInvoice(this.id);

  }
  getInvoice(id:number){
    const list = [
      {
        idFacture: 1,
        montantFacture: 120,
        montantRemise: 10,
        dateFacture: "12/12/2021",
        active: true
      },
      {
        idFacture: 2,
        montantFacture: 1020,
        montantRemise: 90,
        dateFacture: "22/11/2020",
        active: true
      },
      {
        idFacture: 3,
        montantFacture: 260,
        montantRemise: 30,
        dateFacture: "18/10/2020",
        active: false
      },
      {
        idFacture: 4,
        montantFacture: 450,
        montantRemise: 40,
        dateFacture: "14/12/2020",
        active: true
      }
    ];
    
    return list.find(invoice => invoice.idFacture===id);
  }
}
