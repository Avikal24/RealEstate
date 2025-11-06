import express from 'express';
import authRoute from './routes/auth.route.js';
import postRoute from './routes/post.route.js';
const app = express();

app.use(express.json());
app.use('/api/posts', postRoute);
app.use('/api/auth', authRoute);
app.listen(3000,()=>{
    console.log("Server is running on port 3000");  
});