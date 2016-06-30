ContourViz
--------

To use (with a temporary testing path), simply do:

    >>> testFile = '/path/to/file.xml'
    >>> testPath = '/path/to/directory/full/of/xml/or/mxl/files'
    >>>
    >>> # Create a single contour line from a given file
    >>> createDataFromFile(testFile)
    >>>
    >>> # Create a set of contour lines from all files in a given directory
    >>> createDataFromDirectory(testPath)

This package uses music21 to process musical notation and creates a web-based visual representation of
the melodic contour within the browser.

Current in progress updates:

* It currently only works with single line (monophonic) melodies.
* The frequency labels draw from a logarithmic reading of each note's frequency, not note names.
* After serving the file, the Python script does not return to the correct working directory. This may require exiting and reentering the interpreter or navigating the command line to repeat the process.
