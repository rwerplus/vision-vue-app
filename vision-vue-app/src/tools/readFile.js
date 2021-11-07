const XlsxPopulate = require('xlsx-populate')
const a = 300500
XlsxPopulate.fromFileAsync("./rrr.xlsx", { password: a })
    .then(workbook => {
        console.log(workbook.toString());
    }).catch(err => {
    console.log(err);
})
function rand(min,max) {
    return Math.floor(Math.random() * (max-min)) + min;
}
