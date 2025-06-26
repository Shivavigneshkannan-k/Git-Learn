import express from 'express';
const app = express();
const PORT = 3000; 
app.use("/",(req,res)=>{
    res.send("Hello from the server!");
})
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT} `);
})
