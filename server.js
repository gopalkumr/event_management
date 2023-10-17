const express = require('express');
const mssql = require('mssql');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

const dbConfig = {
  user: 'gopalkumr_test',
  password: 'gopal7566',
  server: 'sql.bsite.net\\MSSQL2016',
  database: 'gopalkumr_test',
  trustServerCertificate: true,
};

app.use(express.json());

app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    const pool = await mssql.connect(dbConfig);
    const request = pool.request();

    // Insert the user into the Users table
    const query = `
      INSERT INTO Users (Username, Password)
      VALUES (@Username, @Password)
    `;

    // Use input parameters to avoid SQL injection
    request.input('Username', mssql.NVarChar(50), username);
    request.input('Password', mssql.NVarChar(255), password);

    await request.query(query);

    res.status(200).send('Registration successful!');
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).send('Registration failed. Please try again.');
  }
});

app.post('/login', async (req, res) => {
  const { register, password } = req.body;

  try {
    const pool = await mssql.connect(dbConfig);
    const request = pool.request();

    // Retrieve user data from the Users table
    const query = `
      SELECT * FROM Users
      WHERE Username = @Username AND Password = @Password
    `;

    // Use input parameters to avoid SQL injection
    request.input('Username', mssql.NVarChar(50), register);
    request.input('Password', mssql.NVarChar(255), password);

    const result = await request.query(query);

    if (result.recordset.length === 1) {
      // Login successful
      res.status(200).send('Login successful!');
    } else {
      // Login failed
      res.status(401).send('Login failed. Please check your credentials.');
    }
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).send('Login failed. Please try again.');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
