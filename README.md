# about-me
WDI Project 0 - Create an About Me Website

## Technologies Used

* HTML
* CSS
* Javascript/jQuery
* Bootstrap - carousel
* Lightbox - lightbox 

## Process

1. Review requirements and outline a plan in README
2. Get inspiration from other portfolio/about me websites
	* Timebox this to 10 minutes
3. Create lo-fi wireframes to guide developement
	* Note interaction requirements
4. Structure HTML file, link to CSS and JS files
	* Commit when complete
5. Apply styles for layout
	* Build for small screens first
	* Add media queries for larger screen sizes as needed
	* Commit as sections are completed
6. Apply styles for text, adjust layout styles as needed
	* Commit as sections are completed
7. Psudocode interactions in JS file
	* Decide if jQuery is needed
	* Id where to use additional libraries or frameworks
	* Commit as sections are completed
8. Write JS
	* Additional psudocode where needed	to work through problem
	* Adjust HTML and CSS files where needed
	* Test frequently 
	* Commit as sections are completed
9. Cleanup design and layout as neede, as time allows	


## Unsolved Problems
1. How to consolidate code for fade in/fade out, and for highlighting nav bar sections when user scrolls to that section. Attempts to use for loops and this were not successful.
2. Nav bar bugs with slide up/down when user expands and collapses multiple times, and when user moves to large screen without closing nav dropdown.
3. Remove hamburger icon animation.
4. Sticky nav stops above the About container - adjusting z-index didn't work.

## Wins and Challenges

### Wins
1. Site looks good on all screen sizes, with minimal style changes.
2. Interactions work.
3. Lightbox and carousel work well together.

### Challenges
1. Keeping code DRY
2. Finding a lightbox that worked

### Code Samples
1. Had an issue where it looked strange when the hamburger icon disappeared before the nav was scrolled up. Solved this by adding a timeout to delay removing the icon until scroll up was complete: 
!(images/code_snippet.png)

