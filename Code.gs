/**
 * Server-side Google Apps Script for serving the React Dashboard
 * Last Updated: Dashboard (Sticky Nav Services Light Mode Color/Contrast Mappings)
 */

function doGet(e) {
  // Renders index.html holding the Vite compiled code
  return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .setTitle('Worksense Analytics')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}