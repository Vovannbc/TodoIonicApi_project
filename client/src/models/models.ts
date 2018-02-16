export class ListModel {
    userId: string;
    info: string;
    created?: string;
}

export class ReceiptModel {
    title: string;
    ingredients: [string];
    description: any;
}