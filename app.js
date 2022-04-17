const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res)=>{
	res.status(200);
	res.send("Ans second of the mean assignment");// the thing which you want to print on your local host.
});

app.listen(PORT, (error) =>{
	if(!error)
		console.log("Server is Successfully Running,
					and App is listening on PORT"+ PORT) //this message will be printed if your code is working properly.
	else
		console.log("Error occured, server can't start", error);//it will display this message if there is an error in the code.
	}
);
