function newItem(){

    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);
    
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        $('#list').append(li);
    }
    
    
    
    
    
    function crossOut() {
        li.toggleClass('strike');
    }
    
    li.on('dblclick', function () {
        li.toggleClass('strike');
    });
    
    
    
    //3(i). Adding the delete button "X": 
    
    
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.text('X');
    li.append(crossOutButton);
    
    crossOutButton.on('click', deleteListItem);
    
    //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
    function deleteListItem() {
        li.addClass("delete")
    }
    
    }
    // 4. Reordering the items: 
    $('#list').sortable();
    