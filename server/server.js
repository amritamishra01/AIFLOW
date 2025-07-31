// import express from 'express';
// import cors from 'cors';
// import 'dotenv/config';
// import { clerkMiddleware, requireAuth } from '@clerk/express'
// import aiRouter from './routes/aiRoutes.js';
// import connectCloudinary from './configs/cloudinary.js';
// import userRouter from './routes/userRoutes.js';

// const app = express()

// await connectCloudinary()

// app.use(cors())
// app.use(express.json())
// app.use(clerkMiddleware())

// app.get('/', (req, res)=>res.send('Server is Live!'))

// app.use(requireAuth())

// app.use('/api/ai', aiRouter)
// app.use('/api/user', userRouter)

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, ()=>{
//     console.log('Server is running on port', PORT);
// })

// import express from 'express';
// import cors from 'cors';
// import 'dotenv/config';
// import { clerkMiddleware, requireAuth } from '@clerk/express';
// import aiRouter from './routes/aiRoutes.js';
// import connectCloudinary from './configs/cloudinary.js';
// import userRouter from './routes/userRoutes.js';

// const app = express();

// // Connect to Cloudinary
// await connectCloudinary();

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(clerkMiddleware());

// // Public test route
// app.get('/', (req, res) => res.send('Server is Live!'));

// // ✅ Apply auth **only to protected routes**
// app.use('/api/ai', requireAuth(), aiRouter);
// app.use('/api/user', requireAuth(), userRouter);

// // Start server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });












import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { clerkMiddleware, requireAuth } from '@clerk/express';
import aiRouter from './routes/aiRoutes.js';
import connectCloudinary from './configs/cloudinary.js';
import userRouter from './routes/userRoutes.js';



const cors = require("cors");

app.use(
  cors({
    origin: "https://aiflow-1-git-main-amrita-mishras-projects.vercel.app",
    credentials: true, // if using cookies or auth
  })
);




const app = express();

// ✅ Allowed origins for CORS
const allowedOrigins = [
  'http://localhost:5173',
  'https://aiflow-1-git-main-amrita-mishras-projects.vercel.app/' // 🔁 Replace this with your actual Vercel frontend URL
];

// ✅ CORS Configuration
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  })
);

// ✅ JSON body parsing
app.use(express.json());

// ✅ Clerk auth middleware
app.use(clerkMiddleware());

// ✅ Connect to Cloudinary
await connectCloudinary();

// ✅ Test public route
app.get('/', (req, res) => res.send('Server is Live!'));

// ✅ Protected Routes
app.use('/api/ai', requireAuth(), aiRouter);
app.use('/api/user', requireAuth(), userRouter);

// ✅ Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});







// just change the local url over here so that it will work smooth check line 84