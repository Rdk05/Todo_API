
const UserSchema = require('../Schemas/UserSchema');


exports.getForm = (req,res)=>{


    UserSchema.find({}).then((result)=>{
        var temp = ""

        for(let i = 0; i < result.length ; i++)
        {
            temp = temp + `
            <tr>
            <td>${i+1}</td>
            <td>${result[i].Title}</td>
            <td>${result[i].Description}</td>
            <td>${result[i].Completed}</td>
            </tr>`
        }

        res.send(`

    <html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>REG Form</title>
        <style>
        
        input{
        
            padding: 10px;
            font-size: 20px;
            border : 2px solid black;
            margin: 5px;
        }
        h1{
            text-align: center;
            font-size: 2.5rem;
        }
        button{
            font-size: 20px;
            margin: 5px;
        }
        button:hover{
            cursor: Pointer;
            background-color: black;
            color: white;
        }
        form{
            border : 2px solid black;
            background-color: gray;
            display: grid;
            width : 70%;
            margin: auto;
        }
table {
  font-family: arial, sans-serif;
  border-collapse: black;
  background-color: gray;
  border: 2px solid black;

}

td, th {
  border: 1px solid ;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
    </head>
    <body>
        <form method="POST" action="/todo/Add">
        <h1>Todo-List</h1>
            <input name="name" placeholder="Enter Your Title">
            <input name="mobile" placeholder="Enter Your Description">
            <input name="email" placeholder="Completed">
            <h1 id = 'sp'></h1>
            <button>Add</button>
            <table>
            <tr>
            <th>Sr.NO</th>
            <th>Title</th>
            <th>Description</th>
            <th>Completed</th>
            </tr>
            ${temp}
            </table>
        </form>
    </body>
    </html>`)

    })


    
}
exports.Add = (req, res) => {
    const { Title, Description, Completed } = req.body;
  
    UserSchema.insertMany({ Title: Title, Description: Description, Completed: Completed })
      .then((result) => {
        console.log(result);
        res.status(200).send({ status: 200, message: `User with the Title ${Title} added to the database!` });
      })
      .catch((err) => {
        console.log(err.name)
        console.log(err.message)
        res.status(500).send({status : 500 , message : "Something went wrong"})

      });
  };
  
  
  
  
  
  


exports.getAllTitles = (req,res)=>{
    UserSchema.find({}).then((result)=>{
        res.status(200).send(result)
    }).catch((err)=>{
        res.status(500).send({status : 500 , message : "Something went wrong"})
    })
}


exports.updatetodoDescription = (req,res)=>{
    const {id , Description} = req.body;
    UserSchema.updateOne({_id : id} , {$set : {Description : Description}}).then((result)=>{
        console.log(result);
        if(result.matchedCount == 1)
        {
            res.status(200).send({status : 200 ,  message : "Updated Successfully"})
        }
        else
        {
            res.status(404).send({status : 404 ,  message : "Not Updated"})

        }
    }).catch((err)=>{
        res.status(500).send({status : 500 , message : "Something went wrong"})
    })
}




exports.deletetodo = (req,res) =>{
    const {id } = req.body;
    UserSchema.deleteOne({_id : id}).then((result)=>{
        console.log(result);
        if(result.deletedCount == 1)
        {
            res.status(202).send({status:202 ,message : "Deleted Successfully"});
        }
        else
        {
            res.status(409).send({status:409, message: "Not deleted !! Try again"});
        }
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : 500 , message : "Something Went Wrong"})

        
    })
}
 