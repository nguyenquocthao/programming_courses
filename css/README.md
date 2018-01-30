# CSS 1

## 1. Getting Started
- Default browser style: headings are bold, paragraphs & headings have spaces, links are blue and underlined, lists automatically include bullets or numbers.
- Each browser has different ways of presenting, so we should try cross testing. See from browsehappy.com.
- Text editor: sublime text, notepad, visual studio, atom.
- Should use external CSS: `<link rel="stylesheet" type="text/css" href="<link>">`
- Naming convention: homepage is index.htm, use lower case, separate with _ or -, name descriptively; folder: css; images
- unsplash.it: host images online

## 2. CSS Core
- CSS: Cascading style sheets
- use selectors, declaration blocks {}, properties; values. Each properties should be on own line
- CSS reference: http://tympanus.net/codrops/css_reference/  and https://developer.mozilla.org/en-US/docs/Web/CSS
- Pseudo-class selector: a:hover; a:focus; a:link; a:visited; a:active; input:focus
- Selectors best practice: specification: type < class < id. Should use class for css. Avoid going > 3 levels deep. Try to combining selectors
- Comment: put between `/* */`
- Color: name, rgb(0,255,0), #0ABCEF; website: http://colours.neilorangepeel.com, ...
- Cascading: css rules cascade and are executed top -> bottom
- Styles is inherited parent -> children
- Specificity: id > class > type; internal > embedded > external
- http://cssspecificity.com: list ranking

## 3. Typography
- Typography: the study of the design and use of type for communication
- Typeface: a set of fonts, designed with common characteristics and composed of glyphs. Serif typefaces: Georgia, Rockwell, Times New Roman. Sans serif: Verdana, Aria, Helvetica; Script; Decorative; Monospace: Courier New, Consolas, Lucida console
- Font: individual files that part of typeface. 
- font-family: set typeface
- link to fonts: http://www.cssfontstack.com/
- Web-safe fonts: fonts pre-installed by many operating system; web fonts
- Internal font source: downloaded files in project files
- @font-face -> set font name, link to font files. properties: font-family, src: url(<path>) // can list multiple urls
- External font source: use 3rd-party fonts like typekit, google fonts
- font-size: units: px -> pixels, default 16px, em -> 1.5em = 1.5 inherited font-size, rem -> relative to root element html
- font-weight: thickness/weightness; normal=400; bold=700; lighter/bolder
- font-style: add/remove italic style; value: italic/normal/oblique
- color
- line-height: set space between 2 lines of text
- text-decoration: add line to text
- text-transform: letter casing
- text-align: center align text
- adjust font-weight properties: choose customize in fonts.google

## 4. Layouts
- Block: default; height=content; width=100% container; start new line, can use width and height 
- inline: height, width=content; element align left, in a line, can only nest other inline elements; can't use width and height
- inline-block: element align left, in a line, but can use width and height
- box model properties: width and height -> size for content box; padding -> space inside element; border -> ; margin
- % -> relative to content element
- 1 values -> same all sides; 2 -> top & bottom, right&left; 3 -> top, right&left; bottom; 4 -> top, right, bottom, left
- border: width style color
- margin: negative margin make stacking blocks; to align center -> margin: 0 auto
- page layout: create container for just the content
- float: change the natural of block. floats must be cleared to return to natural page flow
- clear: both -> clear left and right float
- parent do not recognize height of float element. self-clearing float: use overflow
- overflow: hidden, auto, scroll
- class: clearfix -> parent auto clear float
- box-sizing: border-box; content-box

-------------

# CSS 2

## 1. CSS Selectors
- Basic select: tag name, class name `.`, id `#`
- Attribute selector: [attr], [attr=val]
- Combine selector: descend: use space; direct descent: `>`; and: no space ; or: use comma `,`; direct adjacent sibling: use add `+`; general following sibling: use tilde `~`
- pseudo class: `:hover`, `:first-child`, `:last-child` -> separated by colon `:`; `nth-child(3n+1)`; `nth-of-type(2n+1)`
- `nth-child` choose all types of HTLM elements; `nth-of-type` distinguish types of element
- `before` and `after`: used in `box model fix`, used with content properties with string;
```
	<style> p:before{content: '* ';} p:after{content:'!';}</style>
	<p>A person's a person</p>
```
- Result: `* A person's a person!`

## 2. Layouts
- 5 properties of box: width & height, margin, border, padding
- padding, margin: all/ top&bottom, left&right/ top, right&left, bottom/ top, right, bottom, left
- `box-sizing`: content-box / border-box
- `float`; `display:inline-block`
- Horizontal nav: display:inline-block; 
- remove spaces between inline-block: in parent set font-size:0; child reset font-size;
- float: no space between; overflow:hidden -> self-clear float
- position: static, inherit, absolute, fixed, relative
- z-axis: how element stack on each other

## 3. Tips and Tools
- Modern browser can show css. Chrome: inspect ctrl+shift+i. We can edit any website, but changes are not saved
- Debugging css: uncheck; crossed out -> replaced; yellow triangle -> error
- Resetting styleshet: reset stylesheet: override default browser styles to unstyled; normalize: contain rules to create consistent default styles
- Icon fonts: font awesome
- CSS background: height, width; background-color, background-image, background-repeat:no-repeat; background-position: <unit> -> left; <unit> <unit> -> left top; top, right, down, left; 
background-attachment:fixed; background-size: cover
- background shorthand: url no-repeat fixed 0px 0px / cover; mixing shorthand & longhand may get overwritten. Shorthand using background-size -> background-position must be declared
- alpha transparency & gradients: rgba(red, green, blue, alpha). alpha: 0 = transparent; 1 = opaque
- linear-gradient(color, color): use in background, top -> down

## 4. Responsive and Mobile
- Responsive design: layout changes with different browser sizes
- Mobile friendly, Mobile first: help making more thoughful decisions; Graceful Degradation >< Progressive Enhancement
- Flexible Layouts: fluid CSS the responsive-> content fit relative to container; use %, min-with, max-width
- fluid: elements wider or narrower; responsive: elements change when size changes
- media queries: create conditions for specific css: print, speech, screen, all; same syntax as CSS; media feature: min-width/max-width, orientation
- add media query: add to <link media=""> or add to CSS using @media (){selector:{}}
- avoid using the same value: using `@media (max-width:768px){}` and `@media(min-width:769px) and (max-width:1200px){}`
- Best practice: try not to use too many media queries; combine ones close in size
- testing responsive layouts: resize browser, open inspect & change size
- media: usually write at end of css file or in separate file to overwrite
- device emulation: toogle device toolbar ctrl + shift + M
- `<meta name='viewport' content='width=device-width, initial-scale=1.0'>` -> set to make sure work on mobile device

----------
# CSS Animation
- CSS3 Transform, Transition supported by firefox, chrome, ...
- csstrick/autoprefixer

## 1. Overview of CSS Transitions and Transforms
- framework: webgl
- Transform change the shape and position of the affected content by modifying the coordinate space; do not disrupt the normal document flow. `transform: `: order important
	- `translateX`: move element ot the left, unit px or % (width of element
	- `translate(x, y)` 
	- `skew(deg)` 
	- `scale()`
	- `rotate(deg)` = `rotateZ(deg)`
	- `rotateY(deg)`
	- `rotateY(deg)`
	- `translate3d(x, y, z)`, `translate(x, y)`
	- **Can use both X, Y, Z, 3d**
- `transition`: allow elements to change values over a specificed duration:
	- `transition: [property] [duration] [time-func] [delay]`
	- `property`: `all` for all property
	- `time-func`: `ease`, `linear`, `ease-in`, `ease-out`, `ease-in-out`
	- `delay`: delay time before starting transform
- parent: `perspective: 1000px`: distance between z plane and the user
- Transform: can use to move, scale, skew, rotate, define object movement

## 2. Understanding CSS Animations
- 2 steps to a CSS Animation: define the animation -> assign it to a specific element
- `@keyframe`: list describing what should happen over a transformation
	- `from`, `to`, `0%`, `20%`
```
@keyframes slide {
	from {transform: translateY(-300px);}
	to {transform: translateX(900px);}
}
```
- `animation`: name, duration, timing-function, delay, iteration-count (number, infinite), direction, fill-mode (forwards, backwards, both), play-state
	- backwards: apply animation style before animation (delay)
	- forwards: apply animation style after animation
	- both: both backwards and forwards
	- `animation-direction`: normal, reverse, alternate, alternate-reverse
	- `animation-timing-function`: ease, liner, ease-in, ease-out, ease-in-out
	- `cubic-bezier(x1, y1, x2, y2)`; [cubic-bezier.com](cubic-bezier.com)do synchronously
	- `play-state`: paused, running

## 3. CSS Animation building blocks
- Can use animation shorthand
- `opacity`: 0: invisible; 1: fully visible
- `animation`: has more than 1 -> simultaneously
- `transform-origin`: change the position of the origin of transformation of an element
- `twitter.com/sh`
- export the image series: export a series of .jpgs or .pngs; select hight quality for the image quality settings; don't export progressive .jpgs
- using photoshop: open all picture -> change height -> connect -> export
- animation sprite: animation-timing-function: steps(4)
	- `steps`: divide duration into equal parts

## 4. Applying CSS Animations to SVG
- When preparing SVG, try not to merge animation path too much
- SVG: resolution independent, small file size, accessibility; easier animation
- Decide live text or outlined text
- Using Illustrator CC or website to optimize (create DOM element)
- Can use CSS transforms on SVG elements, but can't make sure to behaves the same on all browsers
- Most SVG animation is done with Javascirpt right now

## 5. Performance, Browser Support, and Fallbacks

## 6. Tools for Creating CSS Animations
