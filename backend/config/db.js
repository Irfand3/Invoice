import pkg from 'pg';
const {Pool} = pkg

const pool = new Pool({
    user: 'postgres',
    password: 'irfanduric123',
    database:'invoice_project',
    host:'localhost',
    port:'5432'
});

export default pool

/* const connectDB  = async () => {
    try {
        const uri = "mongodb+srv://irfanduric:irfanduric@antcolony.mphm3.mongodb.net/InvoiceProject?retryWrites=true&w=majority"
        const connect = await mongoose.connect( uri,{
        useUnifiedTopology:true,
        useNewUrlParses:true,
        useCreateIndex:true,
        useFindAndModify: false
    })
        console.log("MongoDB connected!")
    } catch (error) {
        console.error(error.message)
        process.exit(1)
    }
}

export default connectDB */
