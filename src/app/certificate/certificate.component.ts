import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';
//import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-certificate',
  standalone: true,
  imports: [],
  templateUrl: './certificate.component.html',
  styleUrl: './certificate.component.css'
})
export class CertificateComponent {

  generateCertificate() {
    // // Create a new jsPDF instance
    // const doc = new jsPDF();

    // // Set some document properties
    // doc.setFont('helvetica');
    // doc.setFontSize(20);

    // // Title
    // doc.text('Certificate of Achievement', 105, 30);
    // doc.setFontSize(14);
    // doc.text('This certifies that', 105, 60);

    // // Dynamic Content (e.g., Student's Name)
    // const studentName = 'John Doe';
    // doc.setFontSize(16);
    // doc.text(studentName, 105, 90);

    // // Add more details if needed
    // doc.setFontSize(12);
    // doc.text('Has successfully completed the course', 105, 120);

    // // Add date
    // const date = new Date().toLocaleDateString();
    // doc.text(`Date: ${date}`, 105, 150);

    // // Signature (optional, you can use an image or text)
    // doc.text('Instructor: Jane Smith', 105, 180);

    // // Save PDF as certificate.pdf
    // doc.save('certificate.pdf');

    ////

    const doc = new jsPDF();

    // Target the HTML content to generate PDF from
    const content = document.getElementById('pfdcertificate')!;

    // Use the jsPDF's html method to convert the HTML content to PDF
    doc.html(content, {
      callback: (doc) => {
        doc.save('certificate.pdf');
      }//,
      //x: 10,
     // y: 10
    
    });
  }

}
