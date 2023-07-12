const app=require('./requires');
const port=process.env.PORT || 3600;
app.listen(port,()=>{
    console.log(`listening on port http://localhost:${port}`);
});