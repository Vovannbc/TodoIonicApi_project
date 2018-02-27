import { NgModule } from '@angular/core';
import { ReceiptDataComponent } from './receiptdata.component/receiptdata.component';
import {CommonModule} from "@angular/common";
import { ReceiptControlsComponent } from './receipt-controls/receipt-controls';
import {IonicModule} from "ionic-angular";
@NgModule({
	declarations: [ReceiptDataComponent,
    ReceiptControlsComponent],
	imports: [
	    CommonModule,
        IonicModule
    ],
	exports: [ReceiptDataComponent,
    ReceiptControlsComponent]
})
export class ComponentsModule {}
