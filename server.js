const express = require('express');
const cors = require('cors');
const formSubmitRoute = require('./routes/formSubmit');

const app = express();
app.use(cors({
  origin: process.env.FRONTEND_ORIGIN || "http://localhost:5173",
}));
app.use(express.json());

app.use('/api', formSubmitRoute); // POST to /api/submit-form

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
