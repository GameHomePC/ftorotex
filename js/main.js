function Constructor() {
    this.initialize = function(config) {
        this.sliderClient = $(config.sliderClient);
        this.sliderAboutUs = $(config.sliderAboutUs);

        if(this.sliderClient.length) { this.getSliderClients(); }
        if(this.sliderAboutUs.length) { this.getSliderAboutUs(); }
    };

    this.getSliderClients = function() {
        this.sliderClient.owlCarousel({
            items: 4,
            itemsCustom: [[0, 4], [400, 4], [700, 4], [1000, 4], [1200, 4], [1600, 4]],
            autoPlay: 6000,
            dragBeforeAnimFinish: false,
            mouseDrag: false,
            touchDrag: false,
            pagination: false,
            navigation: true,
            navigationText: false
        });
    };

    this.getSliderAboutUs = function() {
        this.sliderAboutUs.owlCarousel({
            items: 1,
            itemsCustom: [[0, 1], [400, 41], [700, 1], [1000, 1], [1200, 1], [1600, 1]],
            autoPlay: 6000,
            dragBeforeAnimFinish: false,
            mouseDrag: false,
            touchDrag: false,
            pagination: true,
            navigation: true,
            navigationText: false
        });
    }
}