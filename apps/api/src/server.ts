import app from "./app.js";

const PORT = 8081;

app.listen(PORT, () => {
    console.log(`TeamFlow API is running on port ${PORT}`);
});