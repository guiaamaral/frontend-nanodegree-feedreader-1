$(function() {
    
    describe('RSS Feeds', function() {
        /* This test check if allFeeds object has
         * been defined and that is not empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        /* Check if each feed in the allFeeds object has
         * URL defined and that the URL is not empty.
         */
        it('URL defined', function() {
            allFeeds.forEach(function(item) {
                expect(item.url).toBeDefined();
                expect(item.url.length).not.toBe(0);
            });
        });
        /* Check if each feed in the allFeeds object has
         * name defined and that the name is not empty.
         */
        it('name defined', function() {
            allFeeds.forEach(function(item) {
                expect(item.name).toBeDefined();
                expect(item.name.length).not.toBe(0);
            });
        });
    });
    
    describe('The menu', function() {
        /* Check if menu element is hidden by default
         */
        it('default hidden menu', function() {
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });
        /* When menu element is trigger check if
         * show and hide the list of feeds
         */
        it('toggle menu', function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    describe('Initial Entries', function() {
        /* Check when the loadFeed function is called and completes
         * its work, there is at least a single .entry element
         * within the .feed container
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('at least a single entry', function() {
            expect($('.feed').find('.entry').length).toBeGreaterThan(0);
        });
    });

    describe('New Feed Selection', function() {
        /* Check if the content actually changes when a new feed
         * is loaded by the loadFeed function
         */
        var lastContent,
            newContent;

        beforeEach(function(done) {
            loadFeed(0 ,function() {
                lastContent = $('.feed').text();
                // Load second feed
                loadFeed(1, function() {
                    newContent = $('.feed').text();
                    done();
                });
            });
        });

        it('new feed is loaded', function() {
            expect(lastContent).not.toBe(newContent);
        });
    });

}());
