ContourViz
--------

This package uses music21 to process musical notation and creates a web-based visual
representation of the melodic contour within the browser.

To use on the command line:

    >>> # Create a chart of multiple melodic contours
    >>> chart-contours '/path/to/directory/full/of/xml/or/mxl/files'
    >>>
    >>> # Create a chart of a single melodic contour
    >>> chart-single-contour '/path/to/file.xml'

For use within the Python interpreter:

    >>> testFile = '/path/to/file.xml'
    >>> testPath = '/path/to/directory/full/of/xml/or/mxl/files'
    >>>
    >>> # Create a single contour line from a given file
    >>> createDataFromFile(testFile)
    >>>
    >>> # Create a set of contour lines from all files in a given directory
    >>> createDataFromDirectory(testPath)

Current in progress updates:

* It currently only works with single line (monophonic) melodies.
* The frequency labels draw from a logarithmic reading of each note's frequency, not note names.
* After serving the file, the Python script does not return to the correct working directory. This may require exiting and reentering the interpreter or navigating the command line to repeat the process.
