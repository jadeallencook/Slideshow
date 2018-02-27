(function () {

  var app = {
    page: 0
  }

  var navigation = function () {
    var btns = document.querySelectorAll('div.btn-container div');
    for (var x = 0, max = btns.length; x < max; x++) {
      var btn = btns[x];
      btn.onclick = function () {
        var direction = this.getAttribute('data-type');
        if (direction === 'next') app.page++;
        else app.page--;
        update();
      }
    }
  }();

  var pagination = function () {
    var elem = document.querySelector('div.pagination');
    for (var x = 0, max = data.length; x < max; x++) {
      var page = document.createElement('div');
      page.setAttribute('data-page', x);
      if (x === app.page) page.style.opacity = '0.5';
      elem.appendChild(page);
      page.onclick = function() {
        app.page = parseInt(this.getAttribute('data-page'));
        update();
      }
    }
  }();

  var scene = function() {
    var info = data[app.page];
    document.querySelector('div.scene h1').innerText = info.header;
    document.querySelector('div.scene p span').innerText = info.body;
    if (info.image) document.querySelector('div.scene div.background').style.backgroundImage = 'url("' + info.image + '")';
    if (info.opacity < 1) document.querySelector('div.scene div.background').style.opacity = info.opacity;
  }

  var update = function() {
    if (app.page >= data.length) app.page = 0;
    else if (app.page < 0) app.page = (data.length - 1);
    for (var x = 0, max = data.length; x < max; x++) {
      var page = document.querySelectorAll('div.pagination div')[x];
      if (x === app.page) page.style.opacity = '0.5';
      else page.style.opacity = '1';
    }
    scene();
  }

  scene();

})();