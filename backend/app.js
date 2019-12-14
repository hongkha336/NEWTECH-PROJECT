const Express = require("express");
var cors = require('cors');
const Mongoose = require("mongoose");
const BodyParser = require("body-parser");
var app = Express();
app.use(BodyParser.json());
app.use(cors())
app.use(BodyParser.urlencoded({ extended: true }));



//Mongoose.connect("mongodb+srv://admin:Hongkha123@kanban-yo8da.mongodb.net/board");
Mongoose.connect('mongodb+srv://admin:Hongkha123@kanban-yo8da.mongodb.net/board', { useNewUrlParser: true ,useUnifiedTopology: true})
const BoardModel = Mongoose.model("kb-boards",{
    id: String,
    name: String,
});

const ColumnModel = Mongoose.model("kb-columns", {
    id :String,
    name: String,
    position: Number,
});

const TicketModel = Mongoose.model("kb-tickets", {
    colID: String,
    id: String,
    header:String,
    summary:String,
    description: String,
    updateTime: Number,
    ticketColor: String,
    textColor: String,
    asigneeTo:String
});



// Define REST API
app.post("/ticket", async (request, response) => {
    try {
      //  console.log(request.body);
        var ticket = new TicketModel(request.body);
        var result = await ticket.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.get("/ticket/:id", async (request, response) => {
    try {
        var ticket = await TicketModel.findById(request.params.id).exec();
     //   console.log(ticket);
        response.send(ticket);
    } catch (error) {
        response.status(500).send(error);
    }
});
app.put("/ticket/:id", async (request, response) => {
    try {
        var ticket = await TicketModel.findOne({id: request.params.id}).exec();
     //   console.log(ticket);
        ticket.set(request.body);
        var result = await ticket.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});
app.delete("/ticket/:id", async (request, response) => {
    try {
        var result = await TicketModel.deleteOne({ ticketID: request.params.id }).exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }

});
//Get ticket from the columns with ID Cols
app.get("/columnsticket/:colID", async(request, response) =>{
   // console.log("/columnsticket/:colID was called");
    try {
        var ticket = await TicketModel.find({colID: request.params.colID}).exec();
        response.send(ticket);
    } catch (error) {
        response.status(500).send(error);
    }
});


app.get("/column", async(request, response) =>{
    //console.log("/column was call")
    try {
        var result = await ColumnModel.find().exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.post("/column", async (request, response) => {
    try {
  //      console.log(request.body);
        var model = new ColumnModel(request.body);
        var result = await model.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.get("/column/:id", async(request, response) =>{
  //  console.log("/columnsticket/:colID was called");
    try {
        var ticket = await ColumnModel.find({id: request.params.id}).exec();
        response.send(ticket);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.put("/ticket/:id", async (request, response) => {
    try {
        var ticket = await TicketModel.findById(request.params.id).exec();
        ticket.set(request.body);
        var result = await ticket.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.delete("/column/:id", async (request, response) => {
    try {
        var result = await ColumnModel.deleteOne({ id: request.params.id }).exec();
        var step2 = await TicketModel.deleteMany({colID :request.params.id}).exec();
        response.send(result + step2);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.put("/column/:id", async (request, response) => {
   // console.log(request.body);
    try {    
        var col = await ColumnModel.findOne({position:request.params.id}).exec();
       col.set(request.body);
        var result = await col.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.get("/board/:id", async (request, response) => {
    try {
        var board = await BoardModel.findOne({id:request.params.id}).exec();
        response.send(board);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.put("/board/:id", async (request, response) => {
    try {
        var board = await BoardModel.findOne({id:request.params.id}).exec();
        board.set(request.body);
       var result = await board.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.listen(3000, () => {
    console.log('CORS-enabled web server listening on port 3000');
    console.log("Listening at :3000...")});
