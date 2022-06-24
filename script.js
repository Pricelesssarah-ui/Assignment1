 var input = document.querySelector('input');
var btn = document.querySelector('.btn');
var notcompleted = document.querySelector('.notcompleted');

btn.addEventListener('click', addlist);

function addlist(){
  var newList = document.createElement('li');
  var text = docuement.createTextNode(input.value);
  notcompleted.append(newList);
  newList.append(text);
  input.value = '';
}


