import { clsTask } from "./clsTask.js";

export class clsTaskCRUD
{
    constructor()
    {
        this.getDataLocalStorage();
    }

    newTask( task )
    {
        this.arrTask.push( task );
        this.saveLocalStorage();
    }

    deleteTask( id )
    {
       this.arrTask = this.arrTask.filter( x => x.Id != id );
       this.saveLocalStorage();
    }

    checkTask( id )
    {
        this.arrTask.forEach(task => 
        {
            if(task.Id == id)
            {
                task.Check = !task.Check;
                return;
            }
        });

        this.saveLocalStorage();
    }

    deleteAllChecks()
    {
        this.arrTask = this.arrTask.filter( x => !x.Check );
        this.saveLocalStorage();
    }

    saveLocalStorage()
    {
        localStorage.setItem('TaskBD', JSON.stringify(this.arrTask));
    }

    getDataLocalStorage()
    {
        this.arrTask = localStorage.getItem('TaskBD') ? JSON.parse(localStorage.getItem('TaskBD')) : [];
        this.arrTask = this.arrTask.map( obj  => clsTask.fromJson( obj ));
    }
}