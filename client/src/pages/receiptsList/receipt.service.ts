import {HttpClient} from "@angular/common/http";
import {ReceiptModel} from "../../models/models";
import {Injectable} from "@angular/core";
import { ReceiptFormComponent } from "../../components/receipt-form/receipt-form"

@Injectable()
export class ReceiptService {
    private host = "http://localhost:3000";

    constructor(private http: HttpClient) {}

    public getReceipts() {
        // console.log('Receipts run');
        return this.http.get <ReceiptModel>(this.host + '/receipts');
    }
}
