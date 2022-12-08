const fs = require("fs");
const { json } = require("body-parser");
const path = require("path");
const excelJs = require("exceljs");

const uploadFile = async (req, res) => {
  try {
    const wb = new excelJs.Workbook();
    const resp = await wb.xlsx.readFile(req.file.path);
    console.log(resp);

    wb.eachSheet(function (worksheet) {
      worksheet.eachRow(function (row) {
        let value = row.values;

        console.log(value);
      });
    });

    // console.log(file)
    // res.status(200).json({
    //   message: 'file converted successfully',
    //   res: file
    // })
  } catch (err) {
    console.log(err);
    // res.send(400).json({
    //   message: 'file convetion is failed'
    // })
  }
};

module.exports = { uploadFile };
