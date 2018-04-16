import {HttpClient} from "@angular/common/http";
import {ReceiptModel} from "../../models/models";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {AngularFireDatabase} from "angularfire2/database";
// import { ReceiptFormComponent } from "../../components/receipt-form/receipt-form"

@Injectable()
export class ReceiptService {
    receipts: Observable<any>;

    constructor(
      private http: HttpClient,
      private db: AngularFireDatabase) {
      this.receipts = db.list('receipts').valueChanges()
    }

    public getReceipts() {
        return this.receipts;
    }
}
