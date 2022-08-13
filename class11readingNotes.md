# class 11 reading notes

- ``<video>`` files are  much larger than text files. So HTML 5 was an update that was really needed, this is when we were able to add ``<video>`` and ``<audio>`` tags to embed videos and audio directly into thew "index.html" file.

- ``controls``: this attr. is required so users can control the video (which is important, especially for some with medical conditions).

- ``<p>`` inside of a ``<video>`` tag is called "fall back content", this shows if the browser cannot support the video (this is where you can give a direct link to where the video is from).

- MP3, MP4, and webM are container formats, theese define the structure in which the audio and the video tracks are stored, alongside the meta data or what "codecs" are used to encode its channel.

- WebM can contain: movie, audio, alt angle and even spanish and english overdubs. this tracks within the file container which holds appropriate format for the codec.

- Different formats used for audio and video. audio uses and audio codec and video uses video codec.

- webM packages include "Vorbis" or Orpus"  with VP8/VP9 video support(used in modern browsers).

- Codec data is often stored w/ out container or simp. conatiner. FLAC codec stored in FLAC files = raw FLAC tracks.

- mp3 files are actually MPEG-7 audio layer III stored in MPEG/MPEG-2 container.

- Codec exists to compress audio/video files into managable file sizes, since raw media is very large.

- each browswer supports assorted codecs (Vorbis or h.264 are used to convert compressed audio/ video  into binary.

- inorder for to ensure your media plays across all formats you need to choose the best combinations of codecs.

- mobile may not support same codecs as desktop counterpar- ts.

- some desktop and mobile browswers may be designed to "offload" handling of media playback... media playback depends ont he software installed.

- Instead of ``source`` attr. in ``<video>`` tag, we use  ``source`` tag  ``<source src = "rabbit320.webM">`` this element points to their sources.

- browser goes through  ``<source>`` and plays the first one it comes across if it has the codec support from "webM/MP4" (this should be sufficient).

- ``<source>`` has the ``type`` attr. which is strongly suggested we use this allows us to specificy the source of the video, videos can be skipped if not supported.

- video supports the "height" and "width" attri. much like it does with every other instance. however this supports aspect ratio if the aspect ratio is not "maintained" by sizes then the video will take up all the horizontal space.

## audio

- ``<audio>`` works much like video, however it takes up less space (no display).

- Since many people have hearing disabilities, its good to use transcripts, we also run into the problem of language ``<track>`` can help with this.

- WEBVTT is a format for writing text files, which contains several strings, these are called "cues" there are a few different kinds of cues like: subtitles, captions, and timed descriptions.

- to get file to display in HTML; 1. you can save it as .vtt file ans 2. you link .vtt file with ``<track>`` this should be placed within the ``<audio>`` / ``<video>`` (after the ``<source>`` elements). use the ``kind`` attr. to specificy weither they are  subtitles, captions or descriptions. ``label`` attr. is to help readers id the language.

## css grid

- CSS grid and layout (aka 'grid' or 'css grid')

- to get started you need define the container element with `display: grid`

- then set column row or row sizes with: `grid-template-columns`/ `grid-template-rows` sets rows and columns.then place children elements in grid with `grid-column`/`grid-row`

- much like flex items ORDER doesnt matter.

- ``grid-continer``: elememt that grid is applid to.

- ``gird-line`` : dividing lines that make up the grid structure, these can ber verticle or horizontle.

- ``grid track``: space between grid lines.

- ``grid area`` total space surrounded by 4 grid lines.

- ``grid item``:descendants of grid container.

- ``grid cell``: space between two rows and two columns. this is considered a single "unit".

- ``grid-template-columns``: this defines the amount of columns and rows.

grid allows us more control with where our content goes, with flex box we are able to do different things without the use of tables and ``position`` however it is a very one dimensional, where it will flow as it goes. when we use "grid" we can adjust the overall sizing of our rows and then select where they go.

## responsive images

- raster image: an img file defined as a grid of pixels.... these are also known as bitmaps.( a set number of pixels)

- its not worth greating a img to be so large especially if it is meant to views on a mobile device, doing this can waste bandwith. The above mentioned is a problem because a small image would look terrible if loaded onto a large screen.

"responsive" images are great for the reasons i mentioned above, maybe the solution is to have several different images to choose from so the browser can choose which is gonna be best fitting for the way the site is being viewed. Maybe this is just the same img however with a different number of pixels or images set for different "space allocations".

-traditionally ``<img>`` points you to a single source file. however we can use ``srcset`` and ``sizes`` these offer different source images and aids the browser in selecting which one is the best fit for the job.

- its best to set each value of ``srcset`` on different lines, this looks alot cleaner seperated by a comma.

``srcset`` indicates the set of images we want the browser to choose between, we add the location, the file size (space) then the "intrinsic width in pixels", however instead of using "px" we us a "w" which is the value of the images size (which can be found by inspecting the image).

- ``sze`` "defines a set of media conditions(e.g. screen width)" this is saying what image size would be the best choice when  certain condition (size) arises.

- *meda condition* is a posibile state the screen can be in.

