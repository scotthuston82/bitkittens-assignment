var summon = document.querySelector('.summon-cats');
var cat1 = document.querySelector('#cat1');
var cat2 = document.querySelector('#cat2');
var cat3 = document.querySelector('#cat3');

summon.addEventListener('click',function(){
  $.ajax({
    url: 'http://bitkittens.herokuapp.com/cats.json',
    method: 'GET',
    dataType: 'JSON'
  }).done(function(data){
    // debugger
    for(var i = 0; i < data.cats.length; i++) {
      var img = document.createElement('img');
      img.src = data.cats[i].photo;
      var cat = 'cat' + (i + 1);
      window[cat].append(img);
    }
  });
});
