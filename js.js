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

