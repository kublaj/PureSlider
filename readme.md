# PureSlider

[![npm](https://img.shields.io/npm/dt/pureslider.svg?style=flat-square)](https://www.npmjs.com/package/pureslider)
[![npm](https://img.shields.io/npm/v/pureslider.svg?style=flat-square)](https://www.npmjs.com/package/pureslider)
[![npm](https://img.shields.io/npm/l/pureslider.svg?style=flat-square)](https://www.npmjs.com/package/pureslider)

A lightweight, no-dependency image slider library.

# Demo

http://djyde.github.io/PureSlider

# Install

CommonJS:

```bash
$ npm install pureslider
```

Browser:

Import the `dist/pureslider.dist.js` and link the `dist/pureslider.css`. 

# Usage

```html
<div id="pure-slider">
  <div class="ps-item">
    <img src="foo.jpg" >
  </div>
  <div class="ps-item">
    <img src="foo.jpg" >
  </div>
  <div class="ps-item">
    <img src="foo.jpg" >
  </div>
  <div class="ps-item">
    <img src="foo.jpg" >
  </div>
</div>
```

```javascript

import 'pureslider/src/pureslider.css' // Or any other way linking the stylesheet

import PureSlider from 'pureslider'

const slider = new PureSlider({ /** options **/ })

slider.slide() // start the slider
```

# API

## PureSlider([,options])

options:

| key        | default |
|------------|---------|
| actionMode | fade    |
| duration   | 2000    |

## PureSlider.slide()

# Contribution

I made `PureSlider` because I found that there aren't many image slider libraries I can use without jQuery. Note there is only one action mode right now, so pull requests are very welcome. Let's make `PureSlider` a good choice for staying independent from jQuery.

# Used by

[![](https://dn-kiwistatic.qbox.me/liubai/v1/images/header-logo.jpg?imageView/2/w/300)](http://liubaiapp.com)

# License

MIT License
