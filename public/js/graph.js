'use strict';

function init(pos) {
  var width = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  ) * 0.7;
  var height = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  ) * 0.7;
  render(pos, width, height);
}

function render(pos, width, height) {
  var renderer = new Renderer(width, height);

  var data = {};
  data.pos = pos;
  var json = JSON.stringify(data);

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("POST", '/pos-graph', true);
  xmlhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == "200") {
      var response = JSON.parse(xmlhttp.responseText);
      renderer.renderData(response)
    }
  }
  xmlhttp.send(json);
}

function resolvePOS() {
  var data = {};
  data.pos = document.getElementById("pos-id").innerHTML;
  var json = JSON.stringify(data);

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("POST", '/resolve-pos', true);
  xmlhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == "200") {
      window.close();
    }
  }
  xmlhttp.send(json);
}
