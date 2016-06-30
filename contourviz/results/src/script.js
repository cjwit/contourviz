var data,
    margin = { top: 20, right: 20, bottom: 30, left: 30},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom,
    color = d3.scale.category20(),
    titles = [],
    allMelodies = [],
    selected = [];

var x = d3.scale.linear()
    .range([0, width]);

var y = d3.scale.log()
    .range([height, 0]);

/* add later?
var pitchLabels = {
    262: "C",
    277: "C#",
    294: "D",
    311: "D#",
    330: "E",
    349: "F",
    370: "F#",
    392: "G",
    415: "G#",
    440: "A",
    466: "A#",
    494: "B"
};

var formatPitch = function(d) {
    if (pitchLabels.hasOwnProperty(d)) {
        return pitchLabels[d];
    } else if (pitchLabels.hasOwnProperty(d/2)) {
        return pitchLabels[d/2];
    }
}
*/

var xAxis = d3.svg.axis()
    .scale(x)
    .orient('bottom')
    .tickFormat(function(d) {
        return d + '%';
    })

var yAxis = d3.svg.axis()
    .scale(y)
    .orient('left')
    /*
    .tickValues(function() {
        var keys = Object.keys(pitchLabels);
        values = [];
        keys.map(function(pitch) {
            values.push(pitch, String(pitch * 2));
        });
        return values;
    })
    .tickFormat(formatPitch)
    */

var line = d3.svg.line()
    .interpolate('basis')
    .x(function(d) { return x(d.x); })
    .y(function(d) { return y(d.y); })

var chart = d3.select('.chart')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
  .append('g')
    .attr('class', 'container')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

var displaySelected = function() {
    // change CSS based on selected array
    if (selected.length === 0) {
        $('.melody').each(function(index) {
            $(this).css('opacity', '');
            $(this).find('.line').css('opacity', '');
        })
    } else {
        $('.melody').each(function(index) {
            var melodyID = $(this).attr('id');
            if (selected.indexOf(melodyID) !== -1) {
                $(this).css('opacity','1')
            } else {
                $(this).css('opacity', '0.02')
            }
        });
    }
};

var setListeners = function() {
    $('.selector').click(function(e) {
        e.preventDefault();
        var id = e.target.id;
        var index = selected.indexOf(id)
        if (index === -1) {
            selected.push(id);
        } else {
            selected.splice(index, 1)
        }
        displaySelected();
    });
}

// may be some issues in here, check against original
var createButtons = function() {
    var buttons = $('#buttons');

    allMelodies.sort(function(a, b) {
        aTitle = a.title.toLowerCase();
        bTitle = b.title.toLowerCase()
        return aTitle > bTitle ? 1 : -1;
    })

    // create the melody button
    var button = $('<label></label>')
        .attr('id', melody.title)
        .addClass('btn btn-xs btn-default selector')
        .text(melody.title);
    var buttonInput = $('<input />')
        .attr('type', 'checkbox')
        .attr('autocomplete', 'off')

    button.append(buttonInput)
    buttons.append(button);

    setListeners();
}

var setColors = function(data) {
    data.map(function(m) {
        allMelodies.push(m.title)
        var domain = m.title;
        if (titles.indexOf(domain) === -1) { titles.push(domain) }
    })
    var color = d3.scale.category10()
        .domain(titles);
}

var offsetToPercent = function(data) {
    data.map(function(m) {
        var pieceLength = m.notes[m.notes.length - 1].duration + m.notes[m.notes.length - 1].offset;
        m.notes.map(function(n) {
            n.offset = n.offset / pieceLength * 100;
            n.duration = n.duration / pieceLength * 100;
        });
    });
    return data;
}

var createFinalPitch = function(m) {
    // find the last non-rest in a melody
    // create a pitch that extends to the end of the piece's full duration
    var lastNote = {
        'duration': m.notes[m.notes.length - 1].duration,
        'offset': m.notes[m.notes.length - 1].duration + m.notes[m.notes.length - 1].offset,
        'frequency': m.notes[m.notes.length - 1].frequency
    }
    if (lastNote.frequency === 'rest') {
        var i = m.notes.length - 1;
        while (m.notes[i].frequency === 'rest') {
            i -= 1;
        }
        lastNote.frequency = m.notes[i].frequency;
    }
    return lastNote;
}

var formatData = function(data) {
    data = offsetToPercent(data);
    shortestDuration = d3.min(data, function(d) {
        return (d3.min(d.notes, function(d) { return d.duration }))
    })

    withEndPoints = [];
    var numNotes = 0;
    data.map(function(m) {
        var melody = {};
        melody.title = m.title;
        melody.notes = [];
        m.notes.map(function(n, i) {
            numNotes += 1;
            // skip initial rests
            if (n.frequency !== 'rest') {
                melody.notes.push(n);
                endPoint = {
                    'duration': 0,
                    'offset': n.offset + n.duration,
                    'frequency': n.frequency
                }
                melody.notes.push(endPoint);
            }
        })
        melody.notes.push(createFinalPitch(m));
        withEndPoints.push(melody)
    });
    // console.log(numNotes + ' individual notes')
    return withEndPoints;
}

var chartPitches = function() {
    d3.json('collection_data.json', function(error, data) {
        if (error) return console.warn(error);

        data = formatData(data);
        setColors(data);

        x.domain([0, (d3.max(data, function(d) {
            return (d3.max(d.notes, function(d) { return d.offset }))
        }))]);
        y.domain([
            d3.min(data, function(d) {
                return (d3.min(d.notes, function(d) { return d.frequency }))
            }), d3.max(data, function(d) {
                return (d3.max(d.notes, function(d) { return d.frequency }))
            })
        ]);

        // add axes, title
        chart.append('g')
            .attr('class', 'axis axis--x')
            .attr('transform', 'translate(0,' + height + ')')
            .call(xAxis)
          .append('text')
            .attr('x', width - 10)
            .attr('y', -6)
            .attr('dx', '.71em')
            .style('text-anchor', 'end')
            .text("Melody's Duration, Normalized to 100%")

        chart.append('g')
            .attr('class', 'axis axis--y')
            .call(yAxis)
          .append('text')
            .attr('id', 'yAxis-label')
            .attr('transform', 'rotate(-90)')
            .attr('y', 6)
            .attr('dy', '.71em')
            .style('text-anchor', 'end')
            .text('Pitch Frequency');

        var titleText = data.length > 1 ? " Melodic Contours" : " Melodic Contour"
        chart.append('g')
            .attr('class', 'title')
          .append('text')
            .attr('y', 20)
            .attr('x', width / 2)
            .style('text-anchor', 'middle')
            .text(function() {
                return data.length + titleText;
            });

        // visualize data
        var melody = chart.selectAll('.melody')
            .data(data)
          .enter().append('g')
            .attr('class', 'melody')
            .attr('id', function(d) {
                return d.title;
            })

        melody.append('path')
            .attr('class', 'line')
            .attr('d', function(d) {
                var values = d.notes.map(function(note, index) {
                    return { x: note.offset, y: note.frequency }
                });
                return line(values);
            })
            .attr('id', function(d, i) { return 'path-' + i; })
            .style('stroke', function(d) { return color(d.title) })

        melody.append('text')
            .attr('dy', -5)
          .append('textPath')
            .attr('class', 'textpath')
            .attr('startOffset', function(d) {
                var numMelodies = data.length;
                var thisMelodyIndex = title.indexOf(m.title) * 1.0
                return String(thisMelodyIndex / numMelodies * 100.0) + '%';
            })
            .attr('xlink:href', function(d, i) { return '#path-' + i; })
            .text(function(d) { return d.title })

        createButtons();
    })
}

chartPitches();
