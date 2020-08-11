function toggleTopping( id , num ) {

    // What is passed through the para is just the name of the element, it doesnt carry any data.
    var myid = document.getElementById(id);
    // this myid variable carries the actual data of the element as a part of the dom. 

    if( myid.classList.contains("active-topping") ) {
        myid.classList.remove("active-topping"); 
    } else {
        myid.classList.add("active-topping");
    }
    imageSwitch(id, num);
}

function imageSwitch( id, num ) {
    var myid = document.getElementById(id);
    if( myid.classList.contains("active-topping") ) {
        alert("activating");
        alert(num);
        if( num == 1 ) {
            myid.src = "design/selected_coconutjelly.png";
        } else if ( num == 2 ) {
            myid.src = "design/selected_coffeejelly.png";
        } else if ( num == 3 ) {
            myid.src = "design/selected_pearls.png";
        } else if ( num == 4 ) {
            myid.src = "design/selected_rainbowjelly.png";
        } else {
            myid.src = "design/selected_redbean.png";
        }
    } else {
        alert("un-activating");
        if( num == 1 ) {
            myid.src = "design/unselected_coconutjelly.png";
        } else if ( num == 2 ) {
            myid.src = "design/unselected_coffeejelly.png";
        } else if ( num == 3 ) {
            myid.src = "design/unselected_pearls.png";
        } else if ( num == 4 ) {
            myid.src = "design/unselected_rainbowjelly.png";
        } else {
            myid.src = "design/unselected_redbean.png";
        }
    }
}


function submitToppings() {
    
    var topping1;
    var topping = document.getElementById("topping-1");
    if( topping.classList.contains("active-topping") ) {
        topping1 = true;
    } else {
        topping1 = false;
    }

    if( topping1 ) {

    }
    alert("")


}