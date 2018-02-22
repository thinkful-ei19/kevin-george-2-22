$(function displayTop() {
  return $('.thumbnail').on('click', 'img', function(event) {
    return $(event.target).addClass('.hero');
  });
});