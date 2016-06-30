ContourViz
--------

To use (with a temporary testing path), simply do:

    >>> testFile = '/path/to/file.xml'
    >>> testPath = '/path/to/directory/full/of/xml/or/mxl/files'

    >>> # Create a single contour line from a given file
    >>> createDataFromFile(testFile)

    >>> # Create a set of contour lines from all files in a given directory
    >>> createDataFromDirectory(testPath)

This package uses music21 to process musical notation and creates a web-based visual representation of
the melodic contour within the browser. It currently only works with single line (monophonic) melodies.



createDataFromDirectory('/Volumes/HDD/Media/Dropbox/coding/mylibraries/test')
createDataFromFile('/Volumes/HDD/Media/Dropbox/coding/mylibraries/test/Damlij-Bouzouba-1.xml')
