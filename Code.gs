/**
 * Server-side Google Apps Script for serving the React Dashboard
 * Last Updated: Penambahan Lab Simulator Budget Kalkulator & Statistik Akademik (Slovin formula, estimasi margin UMKM, pembersih database CSV) yang sepenuhnya interaktif
 */

function doGet(e) {
  // Renders index.html holding the Vite compiled code
  return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .setTitle('Worksense Analytics | Jasa Dashboard Power BI, Tableau, Excel & Data Engineering')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}