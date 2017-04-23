# Instructions

To run this project download the repository and open index.html in your browser. [Jasmine](http://jasmine.github.io/) will output the tests results at the bottom of the page.

## Tests

1. Check if `allFeeds` object is defined and isn't empty
2. Check if each feed in `allFeeds` object have URL defined and isn't empty
3. Check if each feed in `allFeeds` object have name defined and isn't empty
4. Check if the menu element is hidden by default when load the page
5. Check if when menu element is trigger show and hide the list of feeds
6. Check if have at least a single `.entry` element within the `.feed` container when the `loadFeed` function is called and completes
7. Check if the content actually changes when a new feed is loaded by the `loadFeed` function
