# HackCSS.css
[![Build Status](https://travis-ci.org/brh55/HackCSS.svg)](https://travis-ci.org/brh55/HackCSS)
[![devDendencies Status](https://david-dm.org/brh55/hackcss/dev-status.svg)](https://david-dm.org/brh55/hackcss#info=devDependencies)
*Don't fight with CSS, style with it*

`HackCSS.css` is a straightfoward library for hackathons to fix typical CSS issues designed for CSS newcomers.

This framework is built on these principles:
- AIEM - ACTION__IDENTIFIER-ELEMENT-MODIFIER Class Name Convention
- Behavior driven class names (ie: center-this, fix-this-width, etc) for easy to remember names
- Hackathon specific requirements (quick styling, teams lacking designers, time constraints, quick implementation, etc)

## How do we use this? !@#$?
1. Download the dist/css/hackCSS.min.css file and place it in your project folder. After, create a link to within the head of your html.

    ```html
<head>
	<link rel="stylesheet" type="text/css" href="file/path/hackCSS.min.css">
</head>
```

     You can also use bower if you know what that is...

     ```bash
bower install HackCSS
```

2. _THIS_ vs _INSIDE_

   If you see a class name with `...__inside.-...-...`, this means where ever you attach this class, the behavior occurs within the element. In contrast, if you see `...__this-...-...`, the behavior occurs to the element.

     `this` Example: `color__this-text-red` class
    ```html
	<p class="color__this-text-red">Please make me red</p> <!-- This becomes RED: ~~ OOOH ~~ -->
```

    `inside` Example: `center__inside-block-only-text` class
    ```html
<div class="center__inside-block-only-text"> <!-- I want to only center text INSIDE -->
	<p>I'm centered!</p> <!-- this becomes centered -->
</div>
```

3. Now try out these available classes:

__Positioning__

* `.center__inside-block-only-text`
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
* `.move__this-block-to-1`, ..., `move__this-block-to-100`
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

__Animating__

* `.fade__this-block-softly`, `.fade__this-text-softly`
* `.levitate__this-block`, `.levitate__this-text`

__Helpers__

* `.stop__inside-block-overflow`, `.fix__inside-block-overflow`
* `.size__this-block-width-1`, ...+.5 , `.size__inside-block-width-100`
* `.size__inside-block-equal-height`


## License
`HackCSS.css` is under the [MIT license](http://opensource.org/licenses/MIT).

## Contribute
Fork the repository, implement a solution, and submit a pull request to be reviewed. As long as the solution fits with the scope of the project, and all feedback has been addressed, we will merge it in.
