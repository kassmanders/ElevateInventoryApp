export class Items {
    Name: string;
    Description: string;
    Categories: string;
    Location: string;
    Amount: number;
    QRCode: string;
    UPC: string;

    constructor(QRCode: string, UPC: string) {
        this.Name = "";
        this.Description = "";
        this.Categories = "";
        this.Location = "";
        this.Amount = 1;
        this.QRCode = QRCode;
        this.UPC = UPC;
    }


}