/**
 * How it should be used
 * 
 * TodoList( inputes_container_id, the_list_id);
 */

// let td1 = TodoList('form1', 'list1');

// let td2 = TodoList('form2', 'list2');

// let td3 = TodoList('form3', 'list3');



/**
 * @var {array} - Collection of todoItems
 */
let todoItems = [];


/**
 * @function TodoList
 * @param {string} form_id - The ID of the form.
 * @param {string} list_id - The ID of the list element
 * 
 * @return {void}
 */

function TodoList( form_id, list_id )
{
    /// Get the form
    let form = document.getElementById( form_id );
    /// Get the list
    let list = document.getElementById( list_id );

    /// Get the input value
    let input = form.querySelectorAll('[todo-name]')[0];

    /// Get the textarae vlaue
    let desc = form.querySelectorAll('[todo-desc]')[0];

    /// The add todo button
    let btn = form.querySelectorAll('[todo-btn]')[0];

    /// Assign the clikc event to the button.
    btn.addEventListener('click', todoItem);

    /// todoItem
    function todoItem()
    {
        /// Create todo item
    }

    


}



/**
 * @function addTodo - Will add a new html element to the list
 * 
 * @param {HTMLElement} listItem 
 * @return {void}
 */
function addTodo( listItem )
{
    /** The ul elemnet */
        let todolist = document.getElementById('todoList');
    /** Add todo element to the list */
        todolist.append( listItem );

}



/**
 * @function createTodoElement - Will create a new HTMLElement
 * 
 * @param {object} todoItem 
 * @returns {HTMLElement}
 */

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
  * @function createItem - Create an object for todoItem
  * 
  * @returns {object}
  */
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
    return newItem;

    ///addTodo( createTodoElement( newItem )  );
}

 
/**
 * @function todoItem - Constructor
 *  
 * @param {string} name 
 * @param {string} desc 
 * 
 * @returns {object} 
 */
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