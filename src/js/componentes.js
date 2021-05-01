import { clsTask } from "../classes/clsTask.js";
import { crudTask } from "../index.js";

const txtTask = document.querySelector('.new-todo');
const liTask = document.querySelector('.todo-list');
const ulTaskList = document.querySelector('.todo-list');
const btnDeleteAllChecks = document.querySelector('.clear-completed');
const allFilters = document.querySelector('.filters');
const selectFilters = document.querySelectorAll('.filtro');
const txtPendientes = document.querySelector('.num');

export const newTaskHTML = ( task ) =>
{
    const taskHTML = 
    `<li class="${ (task.Check) ? 'completed' : ''}" data-id="${task.Id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${task.Check ? 'checked' : ''} >
            <label>${task.Task}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;

    const div = document.createElement('div');
    div.innerHTML = taskHTML;

    liTask.append(div.firstElementChild);
}

export const numPendientes = () =>
{
    let num = 0;

    crudTask.arrTask.forEach( arr => 
    {
        if(arr.Check)
        {
            num += 1;
        }
    });

    txtPendientes.innerText = num;
}

txtTask.addEventListener('keyup', ( event ) =>
{
    if(event.keyCode === 13 && txtTask.value.length > 0)
    {
        const task = new clsTask( txtTask.value );
        crudTask.newTask( task );
        newTaskHTML( task );

        txtTask.value = '';
    }

    numPendientes();
});

ulTaskList.addEventListener('click', ( event ) =>
{
    const typeElement = event.target.localName;
    const allElement = event.target.parentElement.parentElement;
    const idElement = allElement.getAttribute('data-id');

    switch(typeElement)
    {
        case 'button':
            ulTaskList.removeChild(allElement);
            crudTask.deleteTask( idElement );
            break;
        case 'input':
            allElement.classList.toggle('completed');
            crudTask.checkTask( idElement );
            break;
    }

    numPendientes();
});

btnDeleteAllChecks.addEventListener('click', ( event ) =>
{
    crudTask.deleteAllChecks();

    for(let i = ulTaskList.children.length - 1; i >= 0; i--)
    {
        const element = ulTaskList.children[i];

        if(element.classList.contains('completed'))
        {
            ulTaskList.removeChild(element);
        }
    }

    numPendientes();
});

allFilters.addEventListener('click', ( event ) =>
{
    const filter = event.target.text;
    
    selectFilters.forEach( x => x.classList.remove('selected'));
    event.target.classList.add('selected');

    if(!filter){return;}

    for(const element of ulTaskList.children)
    {
        element.classList.remove('hidden');
        const check = element.classList.contains('completed');

        switch(filter)
        {
            case 'Pendientes':
                if(check)
                {
                    element.classList.add('hidden');
                }
                break;
            case 'Completados':
                if(!check)
                {
                    element.classList.add('hidden');
                }
                break;
        }
    }
});







