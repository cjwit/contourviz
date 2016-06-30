var data,
    margin = { top: 20, right: 20, bottom: 30, left: 30},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom,
    color = d3.scale.category20(),
    titleArtist = [],
    allMelodies = [],
    selected = [];

var x = d3.scale.linear()
    .range([0, width]);

var y = d3.scale.log()
    .range([height, 0]);

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

var xAxis = d3.svg.axis()
    .scale(x)
    .orient('bottom')
    .tickFormat(function(d) {
        return d + '%';
    })

var yAxis = d3.svg.axis()
    .scale(y)
    .orient('left')
    .tickValues(function() {
        var keys = Object.keys(pitchLabels);
        values = [];
        keys.map(function(pitch) {
            values.push(pitch, String(pitch * 2));
        });
        return values;
    })
    .tickFormat(formatPitch)

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

var presentationStepNumber = 0;
var toClick = [];
var clickThrough = function(incoming) {
    var buttons = $("#buttons");
    incoming.map(function(id) {
        var thisButton = buttons.find($("label[id='" + id + "']"));
        $(thisButton).click();
    })
};

var presentationSteps = [
    function() {
        toClick = ["Mersul-Sqalli-1", "Mersul-Sqalli-2", "Mersul-Sqalli-3", "Mersul-Sqalli-4", "Mersul-Sqalli-5", "Mersul-Sqalli-7"];
        clickThrough(toClick);
    },
    function() {
        $('#updateToSteps').click();
    },
    function() {
        clickThrough(toClick)
        toClick = ["Damlij-Bouzouba-1", "Damlij-Bouzouba-3", "Damlij-Bouzouba-6", "Damlij-Bouzouba-7", "Damlij-Bouzouba-9", "Damlij-Toulali-1", "Damlij-Toulali-4", "Damlij-Toulali-6", "Damlij-Toulali-7", "Damlij-Toulali-8", "Ghita-Haroushi-2", "Ghita-Haroushi-10", "Gnaoui-Hussein-1", "Gnaoui-Hussein-7", "Ma Zin Wsluk-Sousi-1", "Shmaa-Haroushi-1", "Shmaa-Haroushi-4", "Shmaa-Haroushi-6", "Shmaa-Haroushi-7", "Shmaa-Haroushi-8", "Harraz-Ghanem-1", "Harraz-Ghanem-2", "Harraz-Ghanem-8", "Harraz-Ghanem-9", "Harraz-Ghanem-13", "Fatma-Aloudi-1", "Fatma-Aloudi-4", "Fatma-Aloudi-8", "Zawgna fil Hmak demo-Sousi-1", "Zawgna fil Hmak demo-Sousi-2", "Zawgna fil Hmak demo-Sousi-3", "Shmaa-Toulali-1", "Shmaa-Toulali-4", "Shmaa-Toulali-6", "Shmaa-Toulali-7", "Shmaa-Toulali-8", "Harraz-Haroushi-1", "Harraz-Haroushi-4", "Harraz-Haroushi-5", "Harraz-Haroushi-6", "Harraz-Haroushi-7", "Fatma-Asri-1", "Fatma-Asri-5", "Fatma-Asri-6", "Fatma-Toulali-1", "Ghazel-Haroushi-2", "Ghazel-Haroushi-7", "Ghazel-Haroushi-10", "Lutfiyya-Harouchi-1", "Lutfiyya-Harouchi-7", "Lutfiyya-Harouchi-8", "Warda-Binslamane-1", "Warda-Binslamane-4", "Warda-Binslamane-6", "Warda-Youbi-1", "Warda-Youbi-2", "Warda-Youbi-3", "Lutfiyya-Sousi-1", "Ghazel-Omar-1", "Ghazel-Omar-6", "Hakim al Dhati-Sousi-1", "Hakim al Dhati-Sousi-4"];
        clickThrough(toClick)
    },
    function() {
        clickThrough(toClick)
        toClick = ["Shmaa-Haroushi-8", "Mersul-Sqalli-4", "Ghazel-Omar-1", "Ghazel-Omar-6"];
        clickThrough(toClick)
    },
    function() {
        clickThrough(toClick)
        toClick = [];
        clickThrough(toClick)
        $('#updateToPitches').click();
    },
    function() {
        clickThrough(toClick)
        toClick = ["Damlij-Bouzouba-1", "Damlij-Bouzouba-3", "Damlij-Bouzouba-6", "Damlij-Bouzouba-7", "Damlij-Bouzouba-9"];
        clickThrough(toClick);
    },
    function() {
        clickThrough(toClick);
        toClick = ["Damlij-Bouzouba-1", "Damlij-Bouzouba-3", "Damlij-Bouzouba-6", "Damlij-Bouzouba-7", "Damlij-Bouzouba-9", "Damlij-Toulali-1", "Damlij-Toulali-4", "Damlij-Toulali-6", "Damlij-Toulali-7", "Damlij-Toulali-8"];
        clickThrough(toClick);
    },
    function() {
        clickThrough(toClick);
        toClick = ["Fatma-Aloudi-1", "Fatma-Aloudi-4", "Fatma-Aloudi-8", "Fatma-Asri-1", "Fatma-Asri-5", "Fatma-Asri-6", "Fatma-Toulali-1"];
        clickThrough(toClick);
    },
    function() {
        clickThrough(toClick);
        toClick = ["Ghazel-Haroushi-2", "Ghazel-Haroushi-7", "Ghazel-Haroushi-10"];
        clickThrough(toClick);
        // click through using timers
        window.setTimeout(function() {
            clickThrough(toClick);
            toClick = ["Harraz-Ghanem-1", "Harraz-Ghanem-2", "Harraz-Ghanem-8", "Harraz-Ghanem-9", "Harraz-Ghanem-13"];
            clickThrough(toClick);
        }, 1000)
        window.setTimeout(function() {
            clickThrough(toClick);
            toClick = ["Harraz-Haroushi-1", "Harraz-Haroushi-4", "Harraz-Haroushi-5", "Harraz-Haroushi-6", "Harraz-Haroushi-7"];
            clickThrough(toClick);
        }, 2000)
        window.setTimeout(function() {
            clickThrough(toClick);
            toClick = ["Lutfiyya-Harouchi-1", "Lutfiyya-Harouchi-7", "Lutfiyya-Harouchi-8"];
            clickThrough(toClick);
        }, 3000)
        window.setTimeout(function() {
            clickThrough(toClick);
            toClick = ["Mersul-Sqalli-1", "Mersul-Sqalli-2", "Mersul-Sqalli-3", "Mersul-Sqalli-4", "Mersul-Sqalli-5", "Mersul-Sqalli-7"];
            clickThrough(toClick);
        }, 4000)
        window.setTimeout(function() {
            clickThrough(toClick);
            toClick = ["Shmaa-Haroushi-1", "Shmaa-Haroushi-4", "Shmaa-Haroushi-6", "Shmaa-Haroushi-7", "Shmaa-Haroushi-8"];
            clickThrough(toClick);
        }, 5000)
        window.setTimeout(function() {
            clickThrough(toClick);
            toClick = ["Shmaa-Toulali-1", "Shmaa-Toulali-4", "Shmaa-Toulali-6", "Shmaa-Toulali-7", "Shmaa-Toulali-8"];
            clickThrough(toClick);
        }, 6000)
        window.setTimeout(function() {
            clickThrough(toClick);
            toClick = ["Warda-Binslamane-1", "Warda-Binslamane-4", "Warda-Binslamane-6"];
            clickThrough(toClick);
        }, 7000)
        window.setTimeout(function() {
            clickThrough(toClick);
            toClick = ["Warda-Youbi-1", "Warda-Youbi-2", "Warda-Youbi-3"];
            clickThrough(toClick);
        }, 8000)
        window.setTimeout(function() {
            clickThrough(toClick);
            toClick = ["Zawgna fil Hmak demo-Sousi-1", "Zawgna fil Hmak demo-Sousi-2", "Zawgna fil Hmak demo-Sousi-3"];
            clickThrough(toClick);
        }, 9000)
    },
    function() {
        clickThrough(toClick);
        toClick = ["Shmaa-Haroushi-1", "Shmaa-Haroushi-4", "Shmaa-Haroushi-6", "Shmaa-Haroushi-7", "Shmaa-Haroushi-8", "Shmaa-Toulali-1", "Shmaa-Toulali-4", "Shmaa-Toulali-6", "Shmaa-Toulali-7", "Shmaa-Toulali-8"];
        clickThrough(toClick);
    },
    function() {
        clickThrough(toClick);
        toClick = ["Shmaa-Haroushi-1", "Shmaa-Haroushi-4", "Shmaa-Haroushi-6", "Shmaa-Haroushi-7", "Shmaa-Haroushi-8", "Shmaa-Toulali-1", "Shmaa-Toulali-4", "Shmaa-Toulali-6", "Shmaa-Toulali-7"];
        clickThrough(toClick);
    },
    function() {
        $('#updateToSteps').click();
        clickThrough(toClick);
        toClick = ["Fatma-Aloudi-8", "Fatma-Asri-6", "Ma Zin Wsluk-Sousi-1", "Shmaa-Toulali-8", "Warda-Binslamane-6", "Warda-Youbi-3"];
        clickThrough(toClick);
    },
    function() {
        clickThrough(toClick);
        toClick = ["Zawgna fil Hmak demo-Sousi-1", "Lutfiyya-Sousi-1"];
        clickThrough(toClick);
    },
    function() {
        clickThrough(toClick);
        toClick = ["Gnaoui-Hussein-7", "Shmaa-Haroushi-8"];
        clickThrough(toClick);
    }
];

var reset = function() {
    selected = [];
    presentationStepNumber = 0;
    $('#updateToPitches').click();
    displaySelected();
};

var nextStep = function() {
    if (presentationStepNumber < presentationSteps.length) {
        presentationSteps[presentationStepNumber]();
        presentationStepNumber += 1
        displaySelected();
    } else {
        reset();
    }
};

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
        var thisIsASet = id.split("-").length === 2;
        if (thisIsASet) {
            // clicked button is for an entire set
            var thisGroupDiv = $("div[id='" + id + "']");
            var removing = false;
            selected.forEach(function(m) {
                if (m.indexOf(id) > -1) {
                    removing = true;
                }
            })
            if (removing) {
                // remove all melodies of this set from selected
                for (i = selected.length - 1; i >= 0; i--) {
                    if (selected[i].indexOf(id) > -1) {
                        selected.splice(i, 1)
                    }
                }
                thisGroupDiv.children().removeClass('active');
                $(this).button('reset')
            } else {
                thisGroupMelodies = thisGroupDiv.find('label');
                thisGroupMelodies.each(function() {
                    selected.push($(this).attr('id'));
                })
                thisGroupMelodies.addClass('active');

            }
        } else {
            // clicked button is for just one melody
            var index = selected.indexOf(id)
            if (index === -1) {
                selected.push(id);
            } else {
                selected.splice(index, 1)
            }
        }
        displaySelected();
    });
}

var createButtons = function() {
    var buttons = $('#buttons');
    titleArtist.map(function(title, index) {
        var groupDiv = $('<div></div>')
        groupDiv.addClass('btn-group')
            .attr('data-toggle', 'buttons')
            .attr('id', title.replace(': ', '-'))
        buttons.append(groupDiv);
    });

    allMelodies.sort(function(a, b) {
        aTitle = a.title.toLowerCase();
        bTitle = b.title.toLowerCase()
        if (aTitle === bTitle) {
            aArtist = a.artist.toLowerCase();
            bArtist = b.artist.toLowerCase();
            if (aArtist === bArtist) {
                return a.refrain - b.refrain
            }
            return aArtist > bArtist ? 1 : -1;
        }
        return aTitle > bTitle ? 1 : -1;
    })

    allMelodies.map(function(melody, index) {
        var groupID = melody.title + "-" + melody.artist,
            groupDiv = $("div[id='" + groupID + "']");
        melody.refrain = Number(melody.refrain);

        // check to see if this is the first button in the group
        if (groupDiv.html() === "") {
            var selectAll = $('<span></span>')
                .attr('id', melody.title + "-" + melody.artist)
                .addClass('btn btn-xs btn-default selector')
                .text(melody.title + ": " + melody.artist);
            groupDiv.append(selectAll);
        }

        // create the melody button
        var button = $('<label></label>')
            .attr('id', melody.title + "-" + melody.artist + "-" + melody.refrain)
            .addClass('btn btn-xs btn-default selector')
            .text(melody.refrain);
        var buttonInput = $('<input />')
            .attr('type', 'checkbox')
            .attr('autocomplete', 'off')
        button.append(buttonInput)
        groupDiv.append(button);
        buttons.append(groupDiv);
    });
    setListeners();
}

var setColors = function(data) {
    data.map(function(m) {
        allMelodies.push(m.metadata)
        var domain = m.metadata.title + ': ' + m.metadata.artist;
        if (titleArtist.indexOf(domain) === -1) { titleArtist.push(domain) }
    })
    var color = d3.scale.category10()
        .domain(titleArtist);
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
        'frequency': m.notes[m.notes.length - 1].frequency,
        'fromRoot': +m.notes[m.notes.length - 1].fromRoot
    }
    if (lastNote.frequency === 'rest') {
        var i = m.notes.length - 1;
        while (m.notes[i].frequency === 'rest') {
            i -= 1;
        }
        lastNote.frequency = m.notes[i].frequency;
        lastNote.fromRoot = +m.notes[i].fromRoot;
    }
    return lastNote;
}

var formatData = function(data) {
    data = offsetToPercent(data);
    shortestDuration = d3.min(data, function(d) {
        return (d3.min(d.notes, function(d) { return d.duration }))
    })

    withEndPoints = []
    var numNotes = 0;
    data.map(function(m) {
        var melody = {};
        melody.metadata = m.metadata;
        melody.metadata.refrain = Number(melody.metadata.refrain)
        melody.metadata.id = m.metadata.title + "-" + m.metadata.artist + "-" + m.metadata.refrain;
        melody.notes = [];
        m.notes.map(function(n, i) {
            numNotes += 1;
            // skip initial rests
            if (n.frequency !== 'rest') {
                melody.notes.push(n);
                endPoint = {
                    'duration': 0,
                    'offset': n.offset + n.duration,
                    'frequency': n.frequency,
                    'fromRoot': +n.fromRoot
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

var updateToPitches = function() {
    d3.json('malhun.json', function(error, data) {
        if (error) return console.warn(error);
        data = formatData(data);
        setColors(data);

        y = d3.scale.log()
            .range([height, 0])
            .domain([
            d3.min(data, function(d) {
                return (d3.min(d.notes, function(d) { return d.frequency }))
            }), d3.max(data, function(d) {
                return (d3.max(d.notes, function(d) { return d.frequency }))
            })
        ]);

        yAxis.scale(y).tickValues(function() {
            var keys = Object.keys(pitchLabels);
            values = [];
            keys.map(function(pitch) {
                values.push(pitch, String(pitch * 2));
            });
            return values;
        }).tickFormat(formatPitch);

        chart = d3.select('.chart')
            .transition();

        chart.select('.axis--y')
            .duration(200)
            .ease('linear')
            .call(yAxis);

        chart.select('#yAxis-label')
            .delay(200)
            .text('Pitch');

        var melodies = chart.selectAll('.melody');
        melodies.select('path')
            .delay(200)
            .duration(500)
            .ease('linear')
            .attr('d', function(d) {
                var values = d.notes.map(function(note) {
                    return { x: note.offset, y: note.frequency }
                });
                return line(values);
            });
    })
}

var updateToSteps = function() {
    d3.json('malhun.json', function(error, data) {
        if (error) return console.warn(error);
        data = formatData(data);
        setColors(data);

        y = d3.scale.linear()
            .range([height, 0])
            .domain([
            d3.min(data, function(d) {
                return (d3.min(d.notes, function(d) { return d.fromRoot }))
            }), d3.max(data, function(d) {
                return (d3.max(d.notes, function(d) { return d.fromRoot }))
            })
        ]);

        yAxis.scale(y).tickValues(null).tickFormat(null);

        chart = d3.select('.chart')
            .transition();

        chart.select('.axis--y')
            .duration(200)
            .ease('linear')
            .call(yAxis);

        chart.select('#yAxis-label')
            .delay(200)
            .text('Steps above or below root');

        var melodies = chart.selectAll('.melody');
        melodies.select('path')
            .delay(200)
            .duration(500)
            .ease('linear')
            .attr('d', function(d) {
                var values = d.notes.map(function(note) {
                    return { x: note.offset, y: note.fromRoot }
                });
                return line(values);
            });
    })
}

var chartPitches = function() {
    d3.json('malhun.json', function(error, data) {
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
            .text('Pitch');

        chart.append('g')
            .attr('class', 'title')
          .append('text')
            .attr('y', 20)
            .attr('x', width / 2)
            .style('text-anchor', 'middle')
            .text(function() {
                return data.length + ' Melodic Contours from Malhun';
            });

        // visualize data
        var melody = chart.selectAll('.melody')
            .data(data)
          .enter().append('g')
            .attr('class', 'melody')
            .attr('id', function(d) {
                return d.metadata.id;
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
            .style('stroke', function(d) { return color(d.metadata.title + ": " + d.metadata.artist) })

        melody.append('text')
            .attr('dy', -5)
          .append('textPath')
            .attr('class', 'textpath')
            .attr('startOffset', function(d) {
                var numRefrains = d3.max(data, function (d) { return Number(d.metadata.refrain) });
                var refrain = (Number(d.metadata.refrain) - 1) * 1.0
                return String(refrain / numRefrains * 100.0) + '%';
            })
            .attr('xlink:href', function(d, i) { return '#path-' + i; })
            .text(function(d) { return d.metadata.title + ' (' + d.metadata.artist + '), harba ' + d.metadata.refrain; })

        createButtons();
    })
}

chartPitches();
