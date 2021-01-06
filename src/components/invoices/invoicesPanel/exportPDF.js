import jsPDF from "jspdf";
import "jspdf-autotable";

export default function exportPDF(invoices){
    const unit = "pt";
    const size = "A4";
    const orientation = "portrait";
    const title = "Invoice Table";
    const headers = [["#", "Client Name", "Company Name", "Company ID", "Due by", "Amount to pay"]];

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);
    doc.setFontSize(15);
    const data = invoices.map((invoice,i)=> [invoice.i, invoice.client,invoice.company,invoice.companyId,invoice.dueTo,invoice.amount]);
    let content = {
        startY: 50,
        head: headers,
        body: data
      };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("report.pdf")
}