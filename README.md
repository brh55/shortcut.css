# shortcut.css
[![Build Status](https://travis-ci.org/brh55/shortcut.css.svg?branch=master)](https://travis-ci.org/brh55/shortcut.css)
[![devDendencies Status](https://david-dm.org/brh55/shortcut.css/dev-status.svg)](https://david-dm.org/brh55/shortcut.css#info=devDependencies)

*Don't fight with css, style with it.*

`shortcut.css` is a straightforward library designed to achieve typical CSS behavior quickly and efficiently. Each class name is built in regards to affordances, the _where_ and _what_ about an object in relation to it's environment. Similar to our brains, it hinges on the idea of expectations, which allows us to quickly process the behavior of the class name. Thus, at a glance, one could understand what a class would do and how to apply it without fully needing to understand the background around it -- just like a _shortcut_.

This framework is built on these principles:
- AIEM - `ACTION__IDENTIFIER-ELEMENT-MODIFIERS` Class Name Convention
- Behavioral driven class names _(ie: center-this, fix-this-width, etc)_
- Time constrained requirements _(quick fixes, style adjustments, etc)_

## How do we use this? !@#$?
1. Download the dist/css/shortcut.min.css file and place it in your project folder. After, create a link to within the head of your html.

    ```html
    <head>
	    <link rel="stylesheet" type="text/css" href="file/path/shortcut.min.css">
    </head>
    ```

    You can also install through bower:

    ```bash
    bower install shortcut.css
    ```

2. __THIS__ vs __INSIDE__

   The `IDENTIFIER` explains to us where we need to attach the class name. Therefore, if you see a class name with `...__inside.-...-...`, this means wherever you attach this class, the behavior will occur within the element. In contrast, if you see `...__this-...-...`, the behavior occurs to the actual element.

    __this__ Example: `color__this-text-red` class
    ```html
	<p class="color__this-text-red">Please make me red</p> <!-- This becomes RED: ~~ OOOH ~~ -->
    ```

    __inside__ Example: `center__inside-block-only-text` class
    ```html
    <div class="center__inside-block-only-text"> <!-- I want to only center text INSIDE -->
	    <p>Center me!</p> <!-- this text is centered -->
	    
	    <div> <!-- this block isn't centered  -->
			<p>I'm text</p> <!-- this text is centered -->
	   </div>
    </div>
    ```

3. Now try out these available classes:

__Positioning__

* `.center__inside-block-only-text`, `.center__inside-block-text-only`
* `.center__inside-block-everything-vertically`
* `.center__inside-block-everything-horizontally`
* `.center__inside-block-everything`, `.move__inside-block-everything-center`
* `.move__inside-block-everything-left`
* `.move__inside-block-everything-right`
* `.move__inside-block-everything-bottom`
* `.move__inside-block-everything-top`
* `.move__inside-block-everything-center`
* `.move__inside-block-everything-evenly`, `.space__inside-block-evenly-horizontally`
* `.move__this-block-to-the-bottom`
* `.move__this-block-to-the-top`
* `.move__this-block-to-the-end`
* `.move__this-block-to-1`, ... , `move__this-block-to-100`
* `.break__inside-block-into-rows`
* `.break__this-block-order-to-first`
* `.space__inside-block-evenly-vertically`
* `.space__inside-block-evenly-horizontally`
* `.space__inside-block-all-around-evenly`
* `.grow__this-block`
* `.grow__this-block-more`
* `.grow__this-block-even-more`
* `.grow__this-block-to-the-max`

__Coloring__

* `.color__this-text-blue` | `.color__this-block-blue`
* `.color__this-text-dark-blue` | `.color__this-block-dark-blue`
* `.color__this-text-green` | `.color__this-block-green`
* `.color__this-text-dark-green | `.color__this-block-dark-green`
* `.color__this-text-purple` | `.color__this-block-purple`
* `.color__this-text-dark-purple` | `.color__this-block-dark-purple`
* `.color__this-text-yellow` | `.color__this-block-yellow`
* `.color__this-text-dark-yellow` | `.color__this-block-dark-yellow`
* `.color__this-text-red` | `.color__this-block-red`
* `.color__this-text-dark-red` | `.color__this-block-dark-red`
* `.color__this-text-orange` | `.color__this-block-orange`
* `.color__this-text-dark-orange` | `.color__this-block-dark-orange`
* `.color__this-text-grey` | `.color__this-block-grey`
* `.color__this-text-dark-grey` | `.color__this-block-dark-grey`
* `.color__this-text-cloud` | `.color__this-block-cloud`
* `.make__this-block-greyscale`, `.make__this-block-black-and-white`
* `.shadow__this-text` | `.shadow__this-block`
* `.bold__this-text`

__Animating__

* `.fade__this-block-softly`, `.fade__this-text-softly`
* `.levitate__this-block`, `.levitate__this-text`

__Helpers__

* `.stop__inside-block-overflow`, `.fix__inside-block-overflow`
* `.size__this-block-width-1`, ... , `.size__this-block-width-100`
* `.size__inside-block-equal-height`
* `.size__this-block-to-window`
* `.size__this-block-height-to-window`
* `.size__this-block-width-to-window`

## For Developers
shortcut.css is built off PostCSS and gulp, which makes it easy for you to create your own flavor for your next project. To do so, ensure that you have gulp install and dev dependencies.

```bash
$ cd path/to/shortcut.css/
$ npm install
```

Afterwards, you can develop with either with a constant stream open to watch for changes within the src directory, which will recompile on every change.

```bash
$ gulp serve
```

Or you can build manually.

```bash
$ gulp build
```

If you want to add your own partial to the build, simply create the new file, and add an import line in `bundle.css`.

```css
@import "partials/_yourpartial.css";
```

## License
`shortcut.css` is under the [MIT license](http://opensource.org/licenses/MIT).

## Contribute
Fork the repository, implement a solution, and submit a pull request to be reviewed. As long as the solution fits with the scope of the project, and all feedback has been addressed, we will merge it in.
