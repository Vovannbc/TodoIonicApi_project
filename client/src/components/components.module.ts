import { NgModule } from '@angular/core';
import { ReceiptDataComponent } from './receiptdata.component/receiptdata.component';
import {CommonModule} from "@angular/common";
@NgModule({
	declarations: [ReceiptDataComponent],
	imports: [CommonModule],
	exports: [ReceiptDataComponent]
})
export class ComponentsModule {}
