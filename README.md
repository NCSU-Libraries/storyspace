# Storyspace

A framework for audiovisual storytelling in the Cyma Rubin Visualization Gallery at the D.H. Hill Jr. Library.

## Demo presentation

A simple demo presentation is included in this repository

1. Download or clone this Github repo.
3. Open Google Chrome.*
4. Press F11 to enter full screen mode.
5. Open the file **demo.html** in Chrome.
6. Press any key to begin the presentation. Note that the display will scale down to fit your display, so things will look small.

*\* It should also work in other browsers but is only consistently tested in Chrome*

## Basic concepts

* A story has 2 primary components:

    1. An audio recording, typically combing narration, music and/or sound from various sources
    2. A series of **scenes** that advance at specified points in time in sync with the audio

* A scene is a set of elements displayed at the same time in different positions around the room, according to a prescribed layout. Elements can be images, video, or native web content (HTML + Javascript + CSS).

* Layouts are defined using a grid system that divides the room into **zones** of equal widths.
The default grid for Storyspace divides the room into 8 zones. 10- and 12-zone grids are optionally available. Zones can be combined to create more complex layouts (see **Advanced layouts** below)

* The layout and content of each scene is defined via a Javascript configuration file.

### DRAFT documentation

Full documentation is currently in progress. See [this Google doc](https://docs.google.com/document/d/1QAem5YvCSl2PKYcuBwOGnOxyOwtmvYhQuTan3kPwALs/edit?usp=sharing) for the current version.


