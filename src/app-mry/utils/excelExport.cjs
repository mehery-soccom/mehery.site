const jsonData = require("../../../resources/app-mry/content/pricing/lite.json");
const XLSX = require("xlsx");

// Convert JSON data to a worksheet.
const worksheet = XLSX.utils.json_to_sheet(jsonData);

// --- Auto Adjust Column Widths ---
// Calculate max length of data in each column (including headers)
const getColumnWidths = (ws, json) => {
    const cols = [];
    // Get headers from the worksheet (first row)
    const headers = Object.keys(json[0] || {});
    for (let i = 0; i < headers.length; i++) {
        const header = headers[i];
        let maxLength = header ? header.toString().length : 10;
        // Loop through each row in JSON data
        json.forEach(row => {
            const cell = row[header];
            if (cell) {
                maxLength = Math.max(maxLength, cell.toString().length);
            }
        });
        // Add a little extra padding
        cols.push({ wch: maxLength + 2 });
    }
    return cols;
};

// Set the column widths
worksheet["!cols"] = getColumnWidths(worksheet, jsonData);

// --- Apply Basic Header Styles ---
// Note: Styling in XLSX is limited on the community edition.
// One common trick is to change the header text formatting by modifying the cell objects directly.
const headers = Object.keys(jsonData[0] || {});
headers.forEach((header, index) => {
    // Create the cell address (e.g., A1, B1, etc.)
    const cellAddress = XLSX.utils.encode_cell({ c: index, r: 0 });
    if (worksheet[cellAddress] && worksheet[cellAddress].v) {
        // For example, you can add an asterisk or convert the header text
        worksheet[cellAddress].v = header.toUpperCase();
        // You may also add a comment (but note styling options are limited)
        // worksheet[cellAddress].s = { font: { bold: true } };  // Note: cell styling requires XLSX-style option support.
    }
});

// Create a new workbook and add the worksheet.
const workbook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(workbook, worksheet, "Data");

// Write the workbook to an Excel file.
XLSX.writeFile(workbook, "output.xlsx");

console.log("Excel file generated successfully.");
