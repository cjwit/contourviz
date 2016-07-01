from setuptools import setup

def readme():
    with open('README.rst') as f:
        return f.read()

setup(name = 'contourviz',
    version = '0.2.3',
    description = 'A package that charts musical contours into a web-based interactive using music21 and D3.js.',
    long_description = readme(),
    keywords = 'music21 music analysis javascript data visualization',
    url = 'https://github.com/cjwit/contourviz',
    author = 'Christopher Witulski',
    author_email = 'chris.witulski@gmail.com',
    license = 'BSD',
    packages = ['contourviz'],
    entry_points = {
        'console_scripts': [
            'chart-contours = contourviz:createDataFromDirectoryCommandLine',
            'chart-single-contour = contourviz:createDataFromFileCommandLine'
        ]
    },
    package_data = {
        '': ['results/*.html', 'results/src/*.js', 'results/src/*.css', 'results/*.json']
    },
    install_requires = ['music21'],
    include_package_data = True,
    zip_safe = False)
