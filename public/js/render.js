'use strict';

class Renderer {
  constructor(width, height) {
    this.nodeMapping = new Map();
    this.nodeCounter = 0;
    this.nodes = [];
    this.links = [];

    // extract widht and height
    var margin = { top: -5, right: -5, bottom: -5, left: -5 };

    this.force = d3.layout.force()
      .linkDistance([300])
      .charge([-1000])
      .size([width + margin.left + margin.right, height + margin.top + margin.bottom]);

    // clusters
    this.cdata = [
      { x: 0, y: 0, fixed: true },
      { x: width, y: height, fixed: true },
    ];

    var zoom = d3.behavior.zoom()
      .scaleExtent([-5, 2])
      .on("zoom", zoomed.bind(this));

    this.drag = d3.behavior.drag()
      .origin(function (d) { return d; })
      .on("dragstart", dragstarted.bind(this))
      .on("drag", dragged.bind(this))
      .on("dragend", dragended.bind(this));

    this.svg = d3.select("svg")
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.right + ")")
      .call(zoom);

    var rect = this.svg.append("rect")
      .attr("width", width)
      .attr("height", height)
      .style("fill", "none")
      .style("pointer-events", "all");

    this.container = this.svg.append("g");

    function zoomed() {
      this.container.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
    }

    function dragstarted(d) {
      d.fixed = true;
      d3.event.sourceEvent.stopPropagation();
    }

    function dragged(d) {
      d.px += d3.event.dx;
      d.py += d3.event.dy;
      d.x += d3.event.dx;
      d.y += d3.event.dy;
      this.force.tick();
    }

    function dragended(d) {
      this.force.resume();
    }
  }

  insertNode(node, type, color, textColor, cluster = -1) {
    if (!this.nodeMapping.has(type + node.id)) {
      this.nodeMapping.set(type + node.id, this.nodeCounter);
      this.nodes.push({
        index: this.nodeCounter,
        type: type,
        name: type + " " + node.id,
        color: color,
        textColor: textColor,
        cluster: cluster
      });
      this.nodeCounter += 1;
    }
  }

  insertLink(node1, type1, node2, type2, text, color, textColor) {
    this.links.push({
      source: this.nodeMapping.get(type1 + node1.id),
      target: this.nodeMapping.get(type2 + node2.id),
      text: text,
      dr1: 0,
      dr2: 0,
      color: color,
      textColor: textColor
    });
  }

  renderData(data) {
    for (var i = 0; i < data.length; ++i) {
      var pos1 = data[i]['p1'];
      var t1 = data[i]['t1'];
      var card = data[i]['c'];
      var t2 = data[i]['t2'];
      var pos2 = data[i]['p2'];

      this.insertNode(pos2, "POS", 0, 0, 0);
      this.insertNode(pos1, "POS", 4, 4, 1);
      this.insertNode(t1, "TX", 0, 0);
      this.insertNode(t2, "TX", 4, 4);
      this.insertNode(card, "Card", 4, 4);

      this.insertLink(t1, "TX", pos1, "POS", "At", 0, 0);
      this.insertLink(t1, "TX", card, "Card", "Using", 0, 0);
      this.insertLink(t2, "TX", card, "Card", "Using", 4, 4);
      this.insertLink(t2, "TX", pos2, "POS", "At", 4, 4);
    }

    this.force.nodes(this.nodes);
    this.force.links(this.links);
    this.render();
  }

  render() {
    var colors = d3.scale.linear()
      .domain([0, 1, 2, 3, 4])
      .range(["red", "#FB6E00", "#FFDE70", "#AF70C4", "#857F87"]);
    // red orange yellow purple grey

    var defs = this.container.append("defs");

    defs
      .append("pattern")
      .attr("id", "Card")
      .attr("height", "100%")
      .attr("width", "100%")
      .attr("patternContentUnits", "objectBoundingBox")
      .append("image")
      .attr("height", 0.6)
      .attr("width", 0.6)
      .attr("x", 0.2)
      .attr("y", 0.2)
      .attr("xlink:href", "img/icon-card.svg");
    defs
      .append("pattern")
      .attr("id", "POS")
      .attr("height", "100%")
      .attr("width", "100%")
      .attr("patternContentUnits", "objectBoundingBox")
      .append("image")
      .attr("height", 0.6)
      .attr("width", 0.6)
      .attr("x", 0.2)
      .attr("y", 0.2)
      .attr("xlink:href", "img/icon-pos.svg");
    defs
      .append("pattern")
      .attr("id", "TX")
      .attr("height", "100%")
      .attr("width", "100%")
      .attr("patternContentUnits", "objectBoundingBox")
      .append("image")
      .attr("height", 0.6)
      .attr("width", 0.6)
      .attr("x", 0.2)
      .attr("y", 0.2)
      .attr("xlink:href", "img/icon-transaction.svg");

    var edges = this.container.selectAll("line")
      .data(this.force.links())
      .enter()
      .append("svg:path")
      .attr({
        "id": function (d, i) { return 'edge' + i; },
        "marker-end": function (d, i) { return 'url(#' + d.color + ')'; }
      })
      .style("stroke", function (d, i) { return colors(d.color); })
      .style("stroke-width", 2)
      .style("pointer-events", "none");

    var nodes = this.container.selectAll("g")
      .data(this.force.nodes());

    var outer = nodes
      .enter()
      .append("circle")
      .attr("r", 20)
      .attr({
        "cx": function (d) { return d.cx; },
        "cy": function (d) { return d.cy; },
      })
      .style("fill", function (d) { return colors(d.color); });

    var inner = nodes
      .enter()
      .append("circle")
      .attr("r", 20)
      .attr({
        "cx": function (d) { return d.cx; },
        "cy": function (d) { return d.cy; },
      })
      .style("fill", function (d, i) { return "url(#" + d.type + ")"; })
      .style("stroke", function (d, i) { return colors(d.color); })
      .style("stroke-width", 2);

    nodes
      .call(this.drag);

    var nodelabels = this.container.selectAll(".nodelabel")
      .data(this.force.nodes())
      .enter()
      .append("text")
      .attr({
        "x": function (d) { return d.x; },
        "y": function (d) { return d.y; },
        "dx": 25,
        "dy": 0,
        "class": "nodelabel",
        "font-size": 16
      })
      .style("stroke", function (d, i) { return colors(d.textColor); })
      .style("fill", function (d, i) { return colors(d.textColor); })
      .text(function (d) { return d.name; });

    var edgepaths = this.container.selectAll(".edgepath")
      .data(this.force.links())
      .enter()
      .append('path')
      .attr({
        'class': 'edgepath',
        'id': function (d, i) { return 'edgepath' + i; }
      })
      .style("pointer-events", "none")
      .style("fill", function (d, i) { return colors(d.color); });

    var edgelabels = this.container.selectAll(".edgelabel")
      .data(this.force.links())
      .enter()
      .append('text')
      .style("pointer-events", "none")
      .attr({
        'class': 'edgelabel',
        'id': function (d, i) { return 'edgelabel' + i; },
        'font-size': 16,
        'dy': 5,
        'text-anchor': "middle",
      })
      .append('textPath')
      .attr("startOffset", "50%")
      .attr('xlink:href', function (d, i) { return '#edgepath' + i; })
      .style("fill", function (d, i) { return colors(d.textColor); })
      .text(function (d, i) { return d.text; });

    defs.selectAll('marker')
      .data([0, 1, 2, 3, 4])
      .enter()
      .append('svg:marker')
      .attr('id', function (d) { return d; })
      .attr({
        'viewBox': '-0 -5 10 10',
        'refX': 10,
        'refY': 0,
        'orient': 'auto',
        'markerWidth': 10,
        'markerHeight': 10,
        'xoverflow': 'visible'
      })
      .style("fill", function (d, i) { return colors(d); })
      .append('svg:path')
      .attr('d', 'M 0,-3 L 10 ,0 L 0,3');

    this.force.on("tick", function (e) {
      var k = e.alpha * .1;
      for (var i = 0; i < this.nodes.length; ++i) {
        var o = this.nodes[i];
        if (o.cluster != 0 && o.cluster != 1) continue;
        var c = this.cdata[o.cluster];
        o.x += (c.x - o.x) * k;
        o.y += (c.y - o.y) * k;
      }

      edges
        .attr("d", function (d) {
          var x1 = d.source.x + 0.001,
            x2 = d.target.x,
            y1 = d.source.y,
            y2 = d.target.y,
            dx = x2 - x1,
            dy = y2 - y1,
            dr1 = d.dr1,
            dr2 = d.dr2;

          var len = d.text.length;

          var d = Math.sqrt(dx * dx + dy * dy);

          var ddx = 20 * dx / d,
            ddy = 20 * dy / d;

          x1 += ddx; x2 -= ddx;
          y1 += ddy; y2 -= ddy;

          var x_half = (x1 + x2) / 2,
            y_half = (y1 + y2) / 2;

          var x_off = ddx * len / 3;
          var y_off = ddy * len / 3;

          return "M" + x1 + "," + y1 + "A" + dr1 + "," + dr2 + " 0 1,1 " + (x_half - x_off) + "," + (y_half - y_off) +
            " M" + (x_half + x_off) + "," + (y_half + y_off) + "A" + dr1 + "," + dr2 + " 0 1,1 " + x2 + "," + y2;
        });

      nodes
        .attr({
          "cx": function (d) { return d.x; },
          "cy": function (d) { return d.y; }
        });

      outer
        .attr({
          "cx": function (d) { return d.x; },
          "cy": function (d) { return d.y; }
        });

      inner
        .attr({
          "cx": function (d) { return d.x; },
          "cy": function (d) { return d.y; }
        });

      nodelabels
        .attr("x", function (d) { return d.x; })
        .attr("y", function (d) { return d.y; });

      edgepaths
        .attr("d", function (d) {
          var x1 = d.source.x,
            x2 = d.target.x + 0.001,
            y1 = d.source.y,
            y2 = d.target.y;

          if (x1 > x2) {
            var t = x1;
            x1 = x2;
            x2 = t;
            t = y1;
            y1 = y2;
            y2 = t;
          }

          var dx = x2 - x1,
            dy = y2 - y1,
            dr1 = d.dr1,
            dr2 = d.dr2;

          return "M" + x1 + "," + y1 + "A" + dr1 + "," + dr2 + " 0 1,1 " + x2 + "," + y2;
        });

    }.bind(this)).on("end", function () {
      nodes.each(function (d) {
        d.fixed = true;
      });
    });

    this.force.alpha(0.1).start();
    d3.range(20).forEach(this.force.tick);
  }
}

