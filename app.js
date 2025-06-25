// document.getElementById("downloadBtn").addEventListener("click", function () {
//     const element = document.getElementById("miCV");
    
//     const style = document.createElement("style");
//     style.innerHTML = `
//         #miCV {
//             width: 290mm !important;
//             min-height: 297mm !important;
//             margin: 0 auto !important;
//             padding: 15mm !important;
//             background: white;
//             box-shadow: none !important;
//             overflow: hidden !important;
//         }
//         #miCV .card {
//             box-shadow: none !important;
//         }
//     `;
//     document.head.appendChild(style);

//   html2pdf()
//     .set({
//       filename: "SantiagoMejia-CV.pdf",
//       margin: 0, // Márgenes uniformes
//       html2canvas: {
//         scale: 3, // Mayor escala para mejor calidad
//         scrollY: 0, // Evita desplazamiento vertical
//         useCORS: true, // Permite imágenes externas
//         allowTaint: true,
//         logging: true, // Depuración en consola
//       },
//       jsPDF: {
//         unit: "mm",
//         format: "a4",
//         orientation: "portrait",
//       },
//       pagebreak: { avoid: "tr, td, .card" }, // Evita saltos en elementos clave
//     })
//     .from(element)
//     .save()

//     .finally(() =>{
//         style.remove();
//     })
    
// });
