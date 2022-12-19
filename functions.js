/***************************************************
 * ******************   FUNCTION   *****************
 * ************************************************
 */
let g_name = "Global";

/**
 * Without parameters
 */
function simpleFunction()
{
    let name = "Marcus";
    let age = 34;
    
    console.log('  name ', name );

    console.log(' Age ', age);

}





/**
 * With parameters
 */

function WithParams( p_options )
{
    if( typeof p_options !== "object" ) {
        alert(' Wrong type ');
        return;
    }

    let name = p_options.name;
    let age = p_options.age;

    age = age + 22;
    
    console.log('  name ', name );

    console.log(' Age ', age);


    
}

/**
 * Return
 */

function returnFunction( p_n )
{
    let  age = p_n + 2;

    let status = "None";

    if( age > 20 ) {
        status = "Mer";
    }
    if( age < 20 ) {
        status = "Sig";
    }


    return {
        r_age : age,
        r_status: status
    }
}


/**
 * Module
 */

function House( p_name )
{
    let color = "Red";
    let floors = 3;
    let name = p_name;

    function changeColor( p_color )
    {
        if( p_color === "Orange" ) {
            alert(' Wrong color!')
            return;
        }
        color = p_color;
    }

    function isHaouseBlue()
    {
        if( color === "Blue" ) { return true; }
        else { return false; }
    }

    return {
        h_name: name,
        h_floors: floors,
        setColor: changeColor,
        getColor: function() { return color; },
        isHaouseBlue:isHaouseBlue
    }
}

let obj = {};


/**
 * A constructor function
 */

function Student ( p_name )
{
    if( Student.allNams.includes( p_name ) ) {
        console.log( ` The studen ${p_name} already exists !` );
        return;
    }
    Student.allNams.push( p_name );

    _name = p_name;
    _age = null;

    return {
        set age( p_age ){ if( p_age < 20 || p_age > 30 ) {
            console.error(' Age must be between 20 and 30! ');
        }else {
            _age = p_age;
        }
      }
    }
}

Student.allNams = [];

let st1 = new Student('Moha');

let st2 = new Student('Ahmad');



/**Summary
 * HTML
 * CSS
 * Github
 * figma
 * JS
 * ** Variables
 * ** Array
 * ** Object
 * ** Functions
 */


/**
 * What we are going to learn
 *  Node.js
 * Express JS
 * Serve building
 * JQuery
 * SQL - Mssql
 * 
 */


class Car {
    name = ""
    constructor()
    {

    }

    drive()
    {

    }

    stop()
    {

    }

}

let car = new Car();


function CarF()
{
    let name = "";
    let type = "";
    let doors = 0;

    function start()
    {
        if( doors < 3 ) {
            console.error( ' You need atleast 1 door !' );
        }
        else console.log(' Started');
    }

    function stop()
    {

    }

    return {
        name: name
    }
}



let car1 = CarF();