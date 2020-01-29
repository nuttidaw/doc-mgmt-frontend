export class Modal {
    header: String = '';
    content: String = '';
    buttonContent: String = '';
    normalStyle: Boolean = false;
    dangerStyle: Boolean = false;
    isButtonEnabled: Boolean = false;
    path: String = '';
    pathInButton: String = '';
    isShowing: Boolean = true;
    isPrintPDF: Boolean = false;
    PDFData: any;
    Clear() {
        this.header = '';
        this.content = '';
        this.buttonContent = '';
        this.normalStyle = false;
        this.dangerStyle = false;
        this.isButtonEnabled = false;
        this.path = '';
        this.pathInButton = '';
        this.isShowing = true;
        this.isPrintPDF = false;
        this.PDFData = null;
    }
}
