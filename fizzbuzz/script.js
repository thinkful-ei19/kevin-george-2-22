function fizzbuzz(num){
    if (num % 5 === 0){
        return 'buzz';
    }
    else if (num % 3 === 0){
        return 'fizz';
    }
    else if (num % 15 === 0){
        return 'fizz buzz';
    }
    else {
        return num;
    }
}

function createEle(){
    const elem = document.createElement('div');
    if (typeof ){

    }
}

function blindEventListeners(){
    $('#number-chooser').submit((event) => {
      event.preventDefault();
      const numberInput = $(event.target).find('#number-choice');
      const countTo = parseInt(numberInput.val(), 10);
      numberInput.val('');
      const data = fizzbuzz(countTo);
      $('.js-results').html(elements);
    });
}

$(blindEventListeners);