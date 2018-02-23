function fizzbuzz(num){
    if (num % 15 === 0){
        return 'fizzbuzz';
    }
    else if (num % 5 === 0){
        return 'buzz';
    }
    else if (num % 3 === 0){
        return 'fizz';
    }
    else {
        return num;
    }
}

function createEle(num){
    const elem = document.createElement('div');
    const result = fizzbuzz(num);
    elem.innerHTML = `<span>${result}</span>`;
    elem.classList.add('fizz-buzz-item');
    if ( typeof result === 'string' ){
       elem.classList.add(result);
    }
    return elem;
}

function blindEventListeners(){
    $('#number-chooser').submit((event) => {
    event.preventDefault();
    let node = $('.js-results').text('');
    $('.js-results').html(node);
    const numberInput = $(event.target).find('#number-choice');
    const countTo = parseInt(numberInput.val(), 10);
    numberInput.val('');
    
    for (let i = 1; i <= countTo; i++){
    $('.js-results').append(createEle(i));
    
      }
    });
}

$(blindEventListeners);