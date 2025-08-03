const express = require('express');
const { google } = require('googleapis');
const router = express.Router();
const path = require('path');
require('dotenv').config();

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const KEYFILEPATH = path.resolve(process.env.GOOGLE_APPLICATION_CREDENTIALS);
const SHEET_ID = process.env.SHEET_ID; // from .env

const auth = new google.auth.GoogleAuth({
  keyFile: KEYFILEPATH,
  scopes: SCOPES,
});

router.post('/submit-form', async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    const client = await auth.getClient();
    const sheets = google.sheets({ version: 'v4', auth: client });

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: 'Sheet1!A:C', // or whatever range
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[name, email, phone]],
      },
    });

    res.status(200).send({ success: true, message: 'Submitted!' });
  } catch (err) {
    console.error(err);
    res.status(500).send({ success: false, error: 'Submission failed' });
  }
});

module.exports = router;
