# CSSforHackathons
[![Build Status](https://travis-ci.org/brh55/HackCSS.svg)](https://travis-ci.org/brh55/HackCSS)
[![devDendencies Status](https://david-dm.org/brh55/hackcss/dev-status.svg)](https://david-dm.org/brh55/hackcss#info=devDependencies)

A quick and dirty CSS framework to use for hackathons to fix typical CSS issues for CSS newbies. Therefore, a lot of these classes are wrappers for fairly basic set of CSS properties for someone who may have a fair knowledge of CSS, but it's designed to be straightforward in English and dead simple for CSS beginners or a project not utilizing Sass.

## Framework Principles
This framework is built on these principles:

- AIEM - ACTION__IDENTIFIER-ELEMENT-MODIFIER Class Name Convention
- Quick prototyping
- Fast designing w/ design principles in mind
- Behavioral driven class names (ie: center-this, fix-this-width, etc) for easy to remember
- Hackathon specific requirements (quick styling, teams lacking designers, time constraints, quick implementation, etc)
- Modularity to select needed components
- Framework agnostic, meaning ideally its intended as an add-on to your existing framework.
- Minimalistic by nature to be lean and never an attempt to do too much

## Getting Started
### One Thing You Need to Know!
If you are new to CSS, there are two large distinctions that many beginners don't understand initially: PARENT Element vs ACTUAL/THIS Element. Essentially, what this means is that some CSS rules are applied to the element itself, while others are applied to the element's parent, then the rules are delegated accordingly.

To illustrate, if you wanted to center align text, you would need the text-align property, and then you would apply this property to the element's parent. 

```html
<div class="parent-element"> <!-- I apply text-align to parent element -->
	<p>Text that I want to center</p> <!-- I want to center this -->
</div>
```

```css
.parent-element {
	text-align: center;
}
```

Hence, to use this library follows a AIBM class name convention.

`ACTION__IDENTIFIER-ELEMENT-MODIFIER`

- ACTION: What the class does: color, center, etc.
- IDENTIFIER: Does this apply to inside(parent) or the element itself(this).
- ELEMENT: What type of element is it: block vs text.
- MODIFIERS (optional): Describes the action: blue, red, dark-red, etc.

As such, if you see a class name with `...-...-...-inside`, this means you need to apply it to the parent element. In contrast, if you see `...-...-...-this`, you apply that class to the element directly. 

Done. You're all set to use this library!

### To Use
Download the dest/hackCSS.min.css file and place it in your project folder. After, create a link to it in the head of you html of your application.

```html
<link rel="stylesheet" type="text/css" href="file/path/hackCSS.min.css">
```

Now you're all set to go!

## Planned Features/Fixes
- Box-sizing to fix width calculations for overflow elements
- Vertical equal heights for items to use flexbox
- Flat-colors for Background and Font Color
- Overflowing elements
- Typography quick clean up
- Resets

## Disclaimer
This is not the type of framework is intended for 'quick-up-and-going' for Hackathon participants who have little CSS knowledge, but want to spice up their projects, yet run into common layout or styling problems. Thus, this framework is not intended to be used for production apps, as this will bloat your HTML with additional CSS classes! If you do need to apply some of these fixes to your application, view the source code of this repo, and apply similar properties within your rule declarations. If your using Sass, you could theoretically extend these generic classes to your individual classes, but there may be some performance degredation and it may make it unmaintainable quickly.

## Contribute
### Repository Guidelines:
- Focus on elegant solutions that are scalable in most use-cases, abstraction is important
- Use CSS standards when possible
- If possible, keep commits clean, short titles, present-tense, and meaningful 
- Comments. Please let us know what a specific rule declaration
- Behavior driven class names that are easy to remember for anyone

### How to:
I highly recommend submitting the issue explaining the purpose and use-case of this issue, we don't want you do to work, but not be accepted because of out-of-scope implementation. Thus, if it fits within the principles stated in the readme, and people agree on the need. Fork the repository, implement the solution, and submit a pull request to be reviewed. If feedback has been addressed, repository admins will merge it in!
