# CSSforHackathons
[![Build Status](https://travis-ci.org/brh55/HackCSS.svg)](https://travis-ci.org/brh55/HackCSS)
[![devDendencies Status](https://david-dm.org/brh55/hackcss/dev-status.svg)](https://david-dm.org/brh55/hackcss#info=devDependencies)

A quick and dirty CSS framework to use for hackathons to fix typical CSS issues for CSS newbies. Therefore, a lot of these classes are wrappers for fairly basic set of CSS properties for someone who may have a fair knowledge of CSS, but it's designed to be straightforward in English and dead simple for CSS beginners or a project not utilizing Sass.

## Framework Principles
This framework is built on these principles:

- Quick prototyping
- Fast designing w/ design principles in mind
- Behavioral driven class names (ie: center-this, fix-this-width, etc) for easy to remember
- Hackathon specific requirements (quick styling, teams lacking designers, time constraints, quick implementation, etc)
- Modularity to select needed components
- Framework agnostic, meaning ideally its intended as an add-on to your existing framework.
- Minimalistic by nature to be lean and never an attempt to do too much

## Instructions
Coming soon.

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
