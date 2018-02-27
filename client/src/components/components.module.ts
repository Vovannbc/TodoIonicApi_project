import { NgModule } from '@angular/core';
import { ReceiptDataComponent } from './receiptdata.component/receiptdata.component';
import {CommonModule} from "@angular/common";
import { ReceiptControlsComponent } from './receipt-controls/receipt-controls';
import {IonicModule} from "ionic-angular";
import { ReceiptFormComponent } from './receipt-form/receipt-form';
@NgModule({
	declarations: [ReceiptDataComponent,
    ReceiptControlsComponent,
    ReceiptFormComponent],
	imports: [
	    CommonModule,
        IonicModule
    ],
	exports: [ReceiptDataComponent,
    ReceiptControlsComponent,
    ReceiptFormComponent]
})
export class ComponentsModule {}
