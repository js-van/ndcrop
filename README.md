ndcrop
======
Crops an n-dimensional image in place.

Installation
============
Via npm:

    npm install ndcrop
    
Example
=======
In node, evaluating:

    require("ndcrop")([2,2], [[1, 0, 0, 0], 
                              [0, 0, 0, 0]]);

Prints:

    [ [ 1, 0 ], 
      [ 0, 0 ] ]

`require("ndcrop")(dims, image)`
--------------------------------
Crops the image to `dims` in place.  This is usually faster than resizing the image, which will allocate a new copy.

* `dims` the dimensions of the new image, must be less than or equal to original image dimensions
* `image` the image to resize

Returns a resized image

Credits
=======
(c) 2013 Mikola Lysenko. BSD