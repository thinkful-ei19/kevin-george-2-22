$(function() {

  //adding an event listener to the form, to add an item to the shopping list

  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    const inputVal = $('.js-shopping-list-entry').val(); 
    $('.shopping-list').append(` 
      <li>
        <span class="shopping-item">${inputVal}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>  
    `);
    $('input').val('');
    // document.getElementsByClassName('js-shopping-list-entry')[0].value='';
  });

  //adding a delegated event listener to toggle check class and check off an item on shopping list

  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    console.log('toggle', $(this).closest('li'));
  });

  //adding a delegated event listener to remove an item from the shooping list

  $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    $(this).closest('li').remove();
    console.log('delete', $(this).closest('li'));
  });
});