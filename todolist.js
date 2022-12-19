/**
 * How it should be used
 * 
 * TodoList( inputes_container_id, the_list_id);
 */



/**
 * @function TodoList
 * @param {string} form_id - The ID of the form.
 * @param {string} list_id - The ID of the list element
 * 
 * @return {void}
 */

function TodoList( form_id, list_id )
{

    /**
     * @var {array} - Collection of todoItems
     */
    let todoItems = [];

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
    btn.addEventListener('click', function( p_event ){
        /// Add todoitem 
        addTodoItem();
    });


    /**
     * @function addTodoItem - Will add a new todoitem and create a todo element.
     * @param {string} p_name 
     * @param {string} p_desc 
     * 
     * 
     */
    function addTodoItem()
    {

        /// Creaet todoItem object
        let item = new todoItem( input.value, desc.value );
        todoItems.push( item );

        /// Create a new totd element
        let todoEl = createTodoElement( item );

        /// Append the todo element to the list
        list.append( todoEl );
    }

    /**
     * @function todoItem - An object of todoItem
     * 
     * @param {string} p_name 
     * @param {string} p_desc 
     * @returns {object}
     */
    function todoItem( p_name, p_desc )
    {
        return {
            name: p_name,
            decription: p_desc,
            done: false,
            created : new Date(),
            removed: false
        }
    }


    /**
     * @function createTodoElement - Will create a list element for todo item
     * 
     * @param {object: todoItem} p_todo
     *  
     * @returns {HTMLElement} 
     */
    function createTodoElement( p_todo )
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
             h5.innerText = p_todo.name;
     
         /** The description of Todo */
             p.innerHTML = "<span>"+p_todo.decription+"</span>";
     
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

    return {
        items: todoItems
    }

}


