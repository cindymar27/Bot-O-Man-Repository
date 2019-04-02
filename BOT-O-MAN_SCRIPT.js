


class Task {
    constructor(description,eta,type){
        this.Description = description;
        this.Eta = eta;
        this.Type = type;
    }
    get getDescription() {
        return this.Description;
    } 
    get getType(){
        return this.Type;
    }
    get getEta(){
        return this.Eta;
    }
};


// Parent class of each robot type class
class Robot {

    constructor(_name)  {
            this.name = _name;
            this.finishedTasks= 0;
            this.notCreditedTasks= 0;
    }

    get getName() {
            return this.name;
    } 
    set setName(val){
            this.name = val;
    }
   
    get getFinishedTasks(){
            return this.finishedTasks;
    }
    get getNotCreditedTasks(){
            return this.notCreditedTasks;
    };
    async Proccesing (ProcessingTime) {
        return new Promise(resolve => setTimeout(resolve, ProcessingTime));
    };

    Calc_PoorExcecution_Eta(eta){
        return eta * 4;
    };

    update_FinishedTasks(description){
         this.finishedTasks = this.finishedTasks + 1;
         alert(`${this.name} just finished ${description}`);
    };

    update_NotCreditedTasks(description){
        this.notCreditedTasks = this.notCreditedTasks + 1;
        alert(`${this.name} just finished ${description}`);
    };

    ExcecuteList(ListOfTasks){
    };
  
};

//
class Unipedal extends Robot{
    constructor(_name){
        super(_name);
        this.type = 'Unipedal';
    }

    Calc_Opt_Eta(eta){
        return eta/2;
    };
    get getType() {
        return this.type;
    } 

    async ExcecuteList(ListOfTasks){
        alert(`robot ${this.name} has started excecuting`);
        
        console.log(ListOfTasks);
        for (let i = 0 ; i< ListOfTasks.length ; i++ ){
            let taskType = ListOfTasks[i].getType;
            let taskDesc = ListOfTasks[i].getDescription;
            let taskEta = ListOfTasks[i].getEta;

            if( taskType == 'Generic'){
                 await this.Proccesing(taskEta);
                 super.update_FinishedTasks(taskDesc); 
            }

            else if (taskType == this.type){
                 let Procces_time = this.Calc_Opt_Eta(taskEta);
                 await this.Proccesing(Procces_time);
                 super.update_FinishedTasks(taskDesc);
            }

            else {
                let Procces_time = super.Calc_PoorExcecution_Eta(taskEta);
                await this.Proccesing(Procces_time);
                super.update_NotCreditedTasks(taskDesc);
            }
        }            
    }

};


//
class Bipedal extends Robot {
    constructor(_name){
        super(_name);
        this.type = 'Bipedal';
    }

    Calc_Opt_Eta(eta){
        return eta/2;
    };

    get getType() {
        return this.type;
    } 


    async ExcecuteList(ListOfTasks){
        alert(`robot ${this.name} has started excecuting`);
        
        for (let i = 0 ; i< ListOfTasks.length ; i++ ){
            let taskType = ListOfTasks[i].getType;
            let taskDesc = ListOfTasks[i].getDescription;
            let taskEta = ListOfTasks[i].getEta;

            if( taskType == 'Generic'){
                 await this.Proccesing(taskEta);
                 super.update_FinishedTasks(taskDesc); 
            }

            else if (taskType == this.type){
                 let Procces_time = this.Calc_Opt_Eta(taskEta);
                 await this.Proccesing(Procces_time);
                 super.update_FinishedTasks(taskDesc);
            }

            else {
                let Procces_time = super.Calc_PoorExcecution_Eta(taskEta);
                await this.Proccesing(Procces_time);
                super.update_NotCreditedTasks(taskDesc);
            }
        }            
    }

};


//
class Quadrupedal extends Robot{
    constructor(_name){
        super(_name);
        this.type = 'Quadrupedal';
    }
    Calc_Opt_Eta(eta){
        return eta/2;
    };

    get getType() {
        return this.type;
    } 


    async ExcecuteList(ListOfTasks){
        alert(`robot ${this.name} has started excecuting`);
        
        for (let i = 0 ; i< ListOfTasks.length ; i++ ){
            let taskType = ListOfTasks[i].getType;
            let taskDesc = ListOfTasks[i].getDescription;
            let taskEta = ListOfTasks[i].getEta;

            if( taskType == 'Generic'){
                 await this.Proccesing(taskEta);
                 super.update_FinishedTasks(taskDesc); 
            }

            else if (taskType == this.type){
                 let Procces_time = this.Calc_Opt_Eta(taskEta);
                 await this.Proccesing(Procces_time);
                 super.update_FinishedTasks(taskDesc);
            }

            else {
                let Procces_time = super.Calc_PoorExcecution_Eta(taskEta);
                await this.Proccesing(Procces_time);
                super.update_NotCreditedTasks(taskDesc);
            }
        }            
    }

};


//
class Arachnid extends Robot{
    constructor(_name){
        super(_name);
        this.type = 'Arachnid';
    }

     Calc_Opt_Eta(eta){
        return eta/2;
    };

    get getType() {
        return this.type;
    } 


    async ExcecuteList(ListOfTasks){
        alert(`robot ${this.name} has started excecuting`);
        
        for (let i = 0 ; i< ListOfTasks.length ; i++ ){
            let taskType = ListOfTasks[i].getType;
            let taskDesc = ListOfTasks[i].getDescription;
            let taskEta = ListOfTasks[i].getEta;

            if( taskType == 'Generic'){
                 await this.Proccesing(taskEta);
                 super.update_FinishedTasks(taskDesc); 
            }

            else if (taskType == this.type){
                 let Procces_time = this.Calc_Opt_Eta(taskEta);
                 await this.Proccesing(Procces_time);
                 super.update_FinishedTasks(taskDesc);
            }

            else {
                let Procces_time = super.Calc_PoorExcecution_Eta(taskEta);
                await this.Proccesing(Procces_time);
                super.update_NotCreditedTasks(taskDesc);
            }
        }            
    }
};


//
class Radial extends Robot{
    constructor(_name ){
        super(_name);
        this.type = 'Radial';
    }

    Calc_Opt_Eta(eta){
        return eta/2;
    };

    get getType() {
        return this.type;
    } 


    async ExcecuteList(ListOfTasks){
        alert(`robot ${this.name} has started excecuting`);
        
        for (let i = 0 ; i< ListOfTasks.length ; i++ ){
            let taskType = ListOfTasks[i].getType;
            let taskDesc = ListOfTasks[i].getDescription;
            let taskEta = ListOfTasks[i].getEta;

            if( taskType == 'Generic'){
                 await this.Proccesing(taskEta);
                 super.update_FinishedTasks(taskDesc); 
            }

            else if (taskType == this.type){
                 let Procces_time = this.Calc_Opt_Eta(taskEta);
                 await this.Proccesing(Procces_time);
                 super.update_FinishedTasks(taskDesc);
            }

            else {
                let Procces_time = super.Calc_PoorExcecution_Eta(taskEta);
                await this.Proccesing(Procces_time);
                super.update_NotCreditedTasks(taskDesc);
            }
        }            
    }

};


//
class Aeronautical extends Robot{
    constructor(_name){
        super(_name);
        this.type = 'Aeronautical';
    }

    Calc_Opt_Eta(eta){
        return eta/2;
    };

    get getType() {
        return this.type;
    } 


    async ExcecuteList(ListOfTasks){
        alert(`robot ${this.name} has started excecuting`);
        
        for (let i = 0 ; i< ListOfTasks.length ; i++ ){
            let taskType = ListOfTasks[i].getType;
            let taskDesc = ListOfTasks[i].getDescription;
            let taskEta = ListOfTasks[i].getEta;

            if( taskType == 'Generic'){
                 await this.Proccesing(taskEta);
                 super.update_FinishedTasks(taskDesc); 
            }

            else if (taskType == this.type){
                 let Procces_time = this.Calc_Opt_Eta(taskEta);
                 await this.Proccesing(Procces_time);
                 super.update_FinishedTasks(taskDesc);
            }

            else {
                let Procces_time = super.Calc_PoorExcecution_Eta(taskEta);
                await this.Proccesing(Procces_time);
                super.update_NotCreditedTasks(taskDesc);
            }
        }            
    }

};



//BotOMan Class includes all functionalities for creating robots of diferent types.
class BotOMan {

        constructor(){
             this.CollectionOfBots = [];
        }



 //function to create a Robot of a specific type and asign to it a list of 5 tasks to complete.
         CreateBot() {
                let name_input = document.getElementById("Bot_name");
                let type_selected = document.getElementById("Bot_type");

                if(name_input.value == ""){
                    alert("** Robot Name is a required field **")
                }
                else{
                        if( type_selected.value == 'Unipedal'){
                            this.CollectionOfBots[this.CollectionOfBots.length] = new Unipedal(name_input.value);
                            this.CollectionOfBots[this.CollectionOfBots.length-1].ExcecuteList(this.GenerateListOfTasks());
                        }

                        else if (type_selected.value == 'Bipedal'){
                            this.CollectionOfBots[this.CollectionOfBots.length] = new Bipedal(name_input.value);
                            this.CollectionOfBots[this.CollectionOfBots.length-1].ExcecuteList(this.GenerateListOfTasks());
                        }

                        else if (type_selected.value == 'Quadrupedal'){
                            this.CollectionOfBots[this.CollectionOfBots.length] = new Quadrupedal(name_input.value);
                            this.CollectionOfBots[this.CollectionOfBots.length-1].ExcecuteList(this.GenerateListOfTasks());
                        }

                        else if (type_selected.value == 'Arachnid'){
                        this.CollectionOfBots[this.CollectionOfBots.length] = new Arachnid(name_input.value);
                            this.CollectionOfBots[this.CollectionOfBots.length-1].ExcecuteList(this.GenerateListOfTasks());
                        }

                        else if (type_selected.value == 'Radial'){
                            this.CollectionOfBots[this.CollectionOfBots.length] = new Radial(name_input.value);
                            this.CollectionOfBots[this.CollectionOfBots.length-1].ExcecuteList(this.GenerateListOfTasks());
                        }

                        else if (type_selected.value == 'Aeronautical'){
                            this.CollectionOfBots[this.CollectionOfBots.length] = new Aeronautical(name_input.value);
                            this.CollectionOfBots[this.CollectionOfBots.length-1].ExcecuteList(this.GenerateListOfTasks());
                        }

                        else{
                            }
                        name_input.value = "";
                   }
 }


//function to start start interval refreshing the webpage html table content
       DashboardOn(){
     
                setInterval(this.Update_Dashboard,2000,this.CollectionOfBots);    
       }



//Function that create and populate a new tbody element and then replace it with the older one
        Update_Dashboard(CollectionOfBots)  {
               
                let new_tbody = document.createElement('tbody');

                for(let i=0; i < CollectionOfBots.length; i++){
                    
                    let td_name = document.createElement('td');
                    let td_type = document.createElement('td');
                    let td_finishedTasks = document.createElement('td');
                    let td_notCreditedTasks = document.createElement('td');
                    let new_table_row  = document.createElement('tr');
            
                    new_table_row       =  new_tbody.insertRow(new_tbody.rows.length);
                    td_notCreditedTasks = new_table_row.insertCell(0);
                    td_finishedTasks    = new_table_row.insertCell(0);
                    td_type             = new_table_row.insertCell(0);
                    td_name             = new_table_row.insertCell(0);
            
                    td_name.textContent = CollectionOfBots[i].getName;
                    td_type.textContent = CollectionOfBots[i].getType;
                    td_finishedTasks.textContent = CollectionOfBots[i].getFinishedTasks;
                    td_notCreditedTasks.textContent = CollectionOfBots[i].getNotCreditedTasks;
                
                }
                
                let actual_tbody = document.getElementsByTagName('tbody')[0];
                actual_tbody.parentNode.replaceChild(new_tbody, actual_tbody)
        }

// Generate a List of 5 random task 
        GenerateListOfTasks()   {

            let CollectionOfTasks = [];
            let RandomGeneratedList = [];

            CollectionOfTasks[0] = new Task("do the dishes",1000,"Generic");
            CollectionOfTasks[1] = new Task("sweep the house",3000,"Generic");
            CollectionOfTasks[2] = new Task("do the laundry",10000,"Generic");
            CollectionOfTasks[3] = new Task("take out the recycling",4000,"Generic");
            CollectionOfTasks[4] = new Task("make a sammich",7000,"Generic");
            CollectionOfTasks[5] = new Task("mow the lawn",20000,"Generic");
            CollectionOfTasks[6] = new Task("rake the leaves",18000,"Generic");
            CollectionOfTasks[7] = new Task("give the dog a bath",14500,"Generic");
            CollectionOfTasks[8] = new Task("bake some cookies",8000,"Generic");
            CollectionOfTasks[9] = new Task("wash the car",20000,"Generic");
          
            //Special tasks designed for specific types of robots 
            CollectionOfTasks[10] = new Task("refill the tank",8000,"Quadripedal");
            CollectionOfTasks[11] = new Task("Cook some pizza",15000,"Bipedal");
            CollectionOfTasks[12] = new Task("take some lanscape pictures",10000,"Aeronautical");
            CollectionOfTasks[13] = new Task("Draw a circle",3000,"Radial");
            CollectionOfTasks[14] = new Task("Play with the cat",12000,"Unipedal");
            CollectionOfTasks[15] = new Task("clean the cealing",10000,"Arachnid");

            for(let i =0; i < 5 ; i++){

                let RandomNumber = Math.floor(Math.random() * 16);
                
                RandomGeneratedList[i] =  CollectionOfTasks[RandomNumber];
            }
            return RandomGeneratedList;     
        }
};

let B = new BotOMan();
















