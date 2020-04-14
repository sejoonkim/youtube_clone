import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// shown to public
// mongoose.connect("mongodb://localhost:27017/youtube_clone", {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });

// hidden to public
mongoose.connect(
  process.env.PRODUCTION ? process.env.MONGO_URL_PROD : process.env.MONGO_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  }
);

const db = mongoose.connection;

const handleOpen = () => console.log("✅  Connected to DB");
const handleError = () => console.log(`🚫 Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
