function Constructor() {
    this.initialize = function(config) {
        this.sliderClient = $(config.sliderClient);
        this.sliderAboutUs = $(config.sliderAboutUs);

        this.toggle = $(config.toggle);
        this.toggleContent = $(config.toggleContent);

        this.cardNote__item = $(config.cardNote__item);
        this.cardNote__mainImages = $(config.cardNote__mainImages);

        if(this.sliderClient.length) { this.getSliderClients(); }
        if(this.sliderAboutUs.length) { this.getSliderAboutUs(); }
        if(this.toggle.length && this.toggleContent.length) { this.getToggle(); }
        if(this.cardNote__item.length && this.cardNote__mainImages.length) { this.getToggleGallery(); }
    };

    this.getSliderClients = function() {
        this.sliderClient.owlCarousel({
            items: 4,
            itemsCustom: [[0, 3], [400, 3], [640, 3], [700, 4], [1000, 4], [1200, 4], [1600, 4]],
            autoPlay: false,
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
            itemsCustom: [[0, 1], [400, 1], [640, 1], [700, 1], [1000, 1], [1200, 1], [1600, 1]],
            autoPlay: false,
            dragBeforeAnimFinish: false,
            mouseDrag: false,
            touchDrag: false,
            pagination: true,
            navigation: true,
            navigationText: false
        });
    };

    this.getToggle = function() {
        var _this = this;

        this.toggle.on('click', function() {
            var self = $(this),
                selfIndex = self.index();

            if(self.hasClass('active')) return false;

            _this.toggle.removeClass('active');
            self.addClass('active');

            _this.toggleContent.removeClass('active');
            _this.toggleContent.eq(selfIndex).addClass('active');

            return false;
        });
    };

    this.getToggleGallery = function() {
        var _this = this;

        this.cardNote__item.on('click', function() {
            var self = $(this),
                selfAttr = self.find('img').attr('src');

            _this.cardNote__mainImages.find('img').attr('src', selfAttr);
            return false;
        });
    };
}

/* getMap */
function getMap() {
    this.initialize = function(config) {
        this.mapID = config.map;
        this.mapInfoLink = $(config.mapInfoLink);
        this.mapInfoBlock = $(config.mapInfoBlock);

        if(this.mapID) { this.getMapMain(); }
        if(this.mapInfoLink.length || this.mapInfoBlock.length ) { this.getTab(); }
    };

    this.getMapMain = function(config) {
        ymaps.ready(this.getMap.bind(this));
    };

    this.getMap = function() {
        var options = {
            center: [53.946949, 27.682178],
            zoom: 17,
            controls: []
        };

        var map = this.map = new ymaps.Map(this.mapID, options);
    };

    this.getMapGeo = function(geocode) {
        var _this = this;

        ymaps.geocode(geocode, {
            results: 1
        }).then(function (res) {
            var firstGeoObject = res.geoObjects.get(0),
                coords = firstGeoObject.geometry.getCoordinates(),
                bounds = firstGeoObject.properties.get('boundedBy');

            _this.map.geoObjects.add(firstGeoObject);
            _this.map.setBounds(bounds, {
                checkZoomRange: true
            });
        });
    };

    this.getTab = function() {
        var _this = this;

        this.mapInfoLink.find('li a').on('click', function() {
            var self = $(this),
                selfIndex = self.index(),
                selfDataRegion = self.parent('li').attr("data-region");

            if(!self.parent('li').hasClass('active')) {
                _this.mapInfoLink.find('li a').parent('li').removeClass('active');
                _this.mapInfoLink.find('.mapInfo__bottom').removeClass('active');
                self.parent('li').addClass('active');
                self.next('.mapInfo__bottom').addClass('active');
                _this.getMapGeo(selfDataRegion);
            } else {
                _this.mapInfoLink.find('li a').parent('li').removeClass('active');
                _this.mapInfoLink.find('.mapInfo__bottom').removeClass('active');
            }

            return false;
        });
    };
}