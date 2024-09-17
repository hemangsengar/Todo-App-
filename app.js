let todo = [];
msg = prompt("Enter the request");

while(true){
    if(msg == 'quit'){
        console.log("Quitting the App");
        break;

    }

    else if (msg == 'list'){
        for(task of todo){
            console.log("-------------");
            console.log(task);
            console.log("-------------");
        }
    }


    else if(msg == 'add'){
        let task = prompt("Enter the Task to be added");
        todo.push(item);
        console.log("Task Added");
        
    }
    else if(msg == 'delete'){
        let idx = prompt("Enter the Index of the Task to be removed");
        todo.splice(idx,1);

    }
    

}