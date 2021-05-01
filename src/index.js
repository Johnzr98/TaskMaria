
import './css/styles.css';
import { clsTaskCRUD } from './classes/clsTaskCRUD.js';
import { newTaskHTML, numPendientes } from './js/componentes.js';

export const crudTask = new clsTaskCRUD();

crudTask.arrTask.forEach( task => 
{
    newTaskHTML( task );
});

numPendientes();