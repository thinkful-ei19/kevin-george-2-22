function addItem() {
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    const inputVal = $('input').val(); 
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
  });
}

$(addItem);