export class clsTask
{
    static fromJson( {Id, Task, Check, DateCreate} )  
    {
        const tempTask = new clsTask(Task);

        tempTask.Id = Id;
        tempTask.Check = Check;
        tempTask.DateCreate = DateCreate;

        return tempTask;
    }

    constructor( task )
    {
        this.Id = new Date().getTime();
        this.Task = task;
        this.Check = false;
        this.DateCreate = new Date();
    }
}