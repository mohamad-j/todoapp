/**
 * Signing of declaration of consent.
 * Check the tasks / fix
 * Questions
 * Continue Todo app
 *      Todolist
 *      Adding Todo item
 *      Delete todo item
 *      Add validations
 *      Data structure
 */



function addTodo( listItem )
{
    /** The ul elemnet */
        let todolist = document.getElementById('todoList');
    /** Add todo element to the list */
        todolist.append( listItem );

}

function createTodoElement( todoItem )
{
    /** The name element */
        let h5 = document.createElement('h5');
    /** The description element */
        let p = document.createElement('p');

    /** The close lement */
        let close_el = document.createElement('span');
        close_el.innerText = 'X';
        close_el.style.position = "absolute";
        close_el.style.top = '5px';
        close_el.style.right = '5px';
        close_el.style.color = 'red';
        close_el.style.fontWeight = 'bolder';
        close_el.style.cursor = 'pointer';
        close_el.onclick = function(){ alert(" I clickd....") }; 


    /** The checkbox */
        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.style.position = "absolute";
        checkbox.style.bottom = '5px';
        checkbox.style.right = '5px';
        checkbox.onchange = function() { alert(' Checkbox is changed ') }


    /** The name of Todo */
        h5.innerText = todoItem.name;

    /** The description of Todo */
        p.innerHTML = "<span>"+todoItem.desc+"</span>";

    /** The Todd item */
        let li = document.createElement('li');
        li.classList.add('list-group-item');
        li.classList.add('m-2');
        li.style.position = 'relative';

    /** Append elments */
        /// Append name
        li.append( h5 );
        /// Append description
        li.append( p );
        /// Append close element
        li.append( close_el );
        /// Append checkbox
        li.append( checkbox );
    
    return li;

}


/**
 * The API of javascript.
 * The window object
 * The document object
 * The Object
 * Functions with return ?
 * The object returned by a function ?
 * 
 * Breaking down strategy.
 * 
 * Data structure
 * 
 * Array.forEach()
 * Array.map()
 * 
 * Object.entries()
 * 
 * Continue Todo app.
 * 
 * Intoduction to JQuery
 * 
 */
 let todoItems = [];

 function createItem()
 {
    /** The input */
    let input = document.getElementById('name');
    /** The textarea */
        let tarea = document.getElementById('description');
    if( input.value.length === 0 ) {
        alert(' The name is empty!');
        return;
    }
    let newItem = new todoItem( input.value , tarea.value ) ;
    todoItems.push( newItem );

    addTodo( createTodoElement( newItem )  );
}

 

function todoItem( name, desc )
{
    return  {
        name: name,
        desc: desc,
        crated: new Date(),
        done: false,
        removed: false
    }
}

//////
CreateToDoList( 'formId', 'UlID' );