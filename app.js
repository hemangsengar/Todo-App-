let todo = [];
//msg = prompt("Enter the request");

while(true){
    msg = prompt(`Enter the request `);
    if(msg == 'quit'){
        console.log("Quitting the App");
        break;

    }

    else if (msg == 'list'){
        console.log("Items in the TO-DO List");
        console.log("-------------");
        for(task of todo){
           console.log(task);    
        }
        console.log("-------------");
    }


    else if(msg == 'add'){
        let task = prompt("Enter the Task to be added");
        todo.push(task);
        console.log("Task Added");
        
    }
    else if(msg == 'delete'){
        let idx = prompt("Enter the Index of the Task to be removed");
        todo.splice(idx,1);

    }
    else{
        console.log("Invalid Request");
    }
    

}