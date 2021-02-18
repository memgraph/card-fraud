'use strict';

function emptyState() {
  var empty_state = document.querySelector("#empty-state");
  empty_state.style.display = 'block';

  var fraudulent_txs = document.querySelector("#fraudulent-txs");
  fraudulent_txs.style.display = 'none';

  var report_stats = document.querySelector("#report-stats");
  report_stats.style.display = 'none';

  var fraud_stats = document.querySelector("#fraud-stats");
  fraud_stats.style.display = 'none';

  var report_empty = document.querySelector("#report-empty");
  report_empty.style.display = 'block';
}

function showGenerated() {
  var empty_state = document.querySelector("#empty-state");
  empty_state.style.display = 'none';

  var fraudulent_txs = document.querySelector("#fraudulent-txs");
  fraudulent_txs.style.display = 'block';

  var report_stats = document.querySelector("#report-stats");
  report_stats.style.display = 'block';

  var compromised_pos = document.querySelector("#compromised-pos");
  compromised_pos.style.display = 'none';

  var fraud_stats = document.querySelector("#fraud-stats");
  fraud_stats.style.display = 'none';

  var report_empty = document.querySelector("#report-empty");
  report_empty.style.display = 'none';
}

function showCompromised() {
  var empty_state = document.querySelector("#empty-state");
  empty_state.style.display = 'none';

  var compromised_pos = document.querySelector("#compromised-pos");
  compromised_pos.style.display = 'block';

  var fraud_stats = document.querySelector("#fraud-stats");
  fraud_stats.style.display = 'block';

  var report_empty = document.querySelector("#report-empty");
  report_empty.style.display = 'none';
}

function clearTxTable() {
  var tx_table = document.querySelector('#tx-table');
  while (tx_table.rows.length > 1) { tx_table.deleteRow(1); }
}

function clearPosTable() {
  var pos_table = document.querySelector('#pos-table');
  while (pos_table.rows.length > 1) { pos_table.deleteRow(1); }
}

function getFraudulentTransactions() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", 'get-fraudulent-transactions', true);
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == "200") {
      var response = JSON.parse(xmlhttp.responseText);

      var table_body = document.querySelector('#tx-table-body');
      for (var i = 0; i < response['fraudulent_txs'].length; ++i) {
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        var value = document.createTextNode(response['fraudulent_txs'][i].id);
        td.appendChild(value);
        tr.appendChild(td);
        table_body.appendChild(tr);
      }

      document.getElementById("reported-frauds").innerHTML =
        response['fraudulent_txs'].length;

      if (response['fraudulent_txs'].length > 0) {
        showGenerated();
      } else {
        emptyState();
      }
    }
  }
  xmlhttp.send(null);
}

function generateData() {
  clearTxTable();

  var data = {};

  data.pos = 1 * document.getElementById("pos-devices").value;
  data.frauds = 1 * document.getElementById("fraudulent-pos").value;
  data.cards = 1 * document.getElementById("cards").value;
  data.transactions = 1 * document.getElementById("transactions").value;
  data.reports = 1. * document.getElementById("transactions-report").value / 100;

  var json = JSON.stringify(data);
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("POST", '/generate-data', true);
  xmlhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4) {
      if (xmlhttp.status == "201") {
        getFraudulentTransactions();
      } else {
        emptyState();
      }
    }
  }
  xmlhttp.send(json);
}

function getCompromisedPos() {
  clearPosTable();

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", '/get-compromised-pos', true);
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == "200") {
      var response = JSON.parse(xmlhttp.responseText);
      var table_body = document.querySelector('#pos-table-body');
      for (var i = 0; i < response.length; ++i) {
        var tr = document.createElement("tr");

        var td_pos = document.createElement("td");
        var pos = document.createTextNode(response[i].pos);
        td_pos.appendChild(pos);

        var td_frauds = document.createElement("td");
        var frauds = document.createTextNode(response[i].connected_frauds);
        td_frauds.appendChild(frauds);

        var td_graph = document.createElement("td");
        var a_graph = document.createElement("a");
        a_graph.href =
          'graph?pos=' +
          response[i].pos +
          '&frauds=' +
          response[i].connected_frauds;
        a_graph.target = '_blank';

        var graph = document.createTextNode("View on graph");
        a_graph.appendChild(graph);
        td_graph.appendChild(a_graph);

        tr.appendChild(td_pos);
        tr.appendChild(td_frauds);
        tr.appendChild(td_graph);

        table_body.appendChild(tr);
      }

      document.getElementById("estimated-frauds").innerHTML = response.length;

      showCompromised();
    }
  }
  xmlhttp.send(null);
}
