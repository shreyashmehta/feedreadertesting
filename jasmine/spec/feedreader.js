
$(function() {

    describe('RSS Feeds', function() {
        /* Tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. 
         */
        it('are defined', function() {
            //checks if allFeeds is defined
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         
            it('all URL defined', function() {
                //checks if url of allFeeds is defined
                allFeeds.forEach(function(feed) {
                    expect(feed.url).toBeDefined();
                    expect(feed.url.length).not.toBe(0);
                });
            });

        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         
            it('all name defined', function() {
                allFeeds.forEach(function(feed) {
                    expect(feed.name).toBeDefined();
                    expect(feed.name.length).not.toBe(0);
                });
            });

    });


    /* Test suite named "The menu" */
    describe('The menu', function() {

        /* Test that ensures the menu element is
         * hidden by default. 
         */

        it('is hidden by default', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         /* Test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * has two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

          it('Menu displayed when clicked', function() {
            //triggers the menu when hamburger icon clicked
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).not.toBe(true);
          });

          it('Menu hidden when clicked again', function() {
            //hides the menu when hamburger icon clicked again
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
          });
    });

    /* Test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });
        /* Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
         it('loadFeed Entries ', function() {
            //expects the length of entries not to br zero
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });

    });

    /* Test suite named "New Feed Selection"*/
    describe('New Feed Selection', function() {

        /* Test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        var first, second;

        beforeEach(function(done) {
            loadFeed(0, function() {
                first = $('.feed').children().text();
                done();
            });
        });

        it('content changes after new feed loaded', function(done) {
            loadFeed(1, function() {
                second = $('.feed').children().text();
                expect(first).not.toEqual(second);
                done();
            });
            
        });
    });
    
}());
