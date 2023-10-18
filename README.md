# Vercel env issue

This repo demonstrates an issue on Vercel where Vercel provides different environments based on the HTTP method used. Only requests to a GET endpoint have access to things like ImageMagick.

GET has access:

```
alex@bigmac ~ % curl https://demonstrate-vercel-bug.vercel.app/api/test-env-get     
Version: ImageMagick 6.9.10-97 Q16 x86_64 2023-09-11 https://imagemagick.org
Copyright: © 1999-2020 ImageMagick Studio LLC
License: https://imagemagick.org/script/license.php
Features: Cipher DPC Modules OpenMP(4.5) 
Delegates (built-in): bzlib cairo fftw fontconfig freetype gslib gvc jbig jng jp2 jpeg lcms ltdl lzma openexr pangocairo png ps raw rsvg tiff webp wmf x xml zlib
``

POST does not.

```
alex@bigmac ~ % curl -X POST https://demonstrate-vercel-bug.vercel.app/api/test-env-post  
Error: Error: Command failed: convert --version
/bin/sh: convert: command not found
alex@bigmac ~ % 
``

Also, if a route has both a GET and a POST endpoint in it, then it won't have access to imagemagick either.
