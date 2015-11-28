function Constructor() {
    this.initialize = function(config) {
        this.sliderClient = $(config.sliderClient);
        this.sliderAboutUs = $(config.sliderAboutUs);

        this.toggle = $(config.toggle);
        this.toggleContent = $(config.toggleContent);

        this.cardNote__item = $(config.cardNote__item);
        this.cardNote__mainImages = $(config.cardNote__mainImages);

        this.formType__icon = $(config.formType__icon);
        this.scrollUp = $(config.scrollUp);
        this.menuMobile = $(config.menuMobile);
        this.headerSearch__icon = $(config.headerSearch__icon);

        if(this.sliderClient.length) { this.getSliderClients(); }
        if(this.sliderAboutUs.length) { this.getSliderAboutUs(); }
        if(this.toggle.length && this.toggleContent.length) { this.getToggle(); }
        if(this.cardNote__item.length && this.cardNote__mainImages.length) { this.getToggleGallery(); }

        if(this.formType__icon.length) { this.getFormFocus(); }
        if(this.scrollUp.length) { this.getScrollTop(); }
        if(this.menuMobile.length) { this.getMenuMobile(); }
        if(this.headerSearch__icon.length) { this.getSearch(); }
    };

    this.getSliderClients = function() {
        this.sliderClient.owlCarousel({
            items: 4,
            itemsCustom: [[0, 3], [400, 3], [640, 3], [768, 3], [1000, 4], [1200, 4], [1600, 4]],
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

    this.getFormFocus = function() {
        this.formType__icon.on('click', function() {
            var self = $(this);

            self.children().focus();
        });

        this.formType__icon.children().on('keyup keydown', function() {
            var self = $(this),
                selfValue = self.val();

            if(selfValue.length) {
                self.parent().addClass('active');
            } else {
                self.parent().removeClass('active');
            }
        });
    };

    this.getScrollTop = function() {
        var _this = this,
            windowScroll = $(window).scrollTop();

        if(windowScroll >= 300) {
            _this.scrollUp.show();
        } else {
            _this.scrollUp.hide();
        }

        $(window).on('scroll', function() {
            var self = $(this),
                selfScrollTop = self.scrollTop();

            if(selfScrollTop >= 300) {
                _this.scrollUp.fadeIn();
            } else {
                _this.scrollUp.fadeOut();
            }
        });

        this.scrollUp.on('click', function() {
            var self = $(this);

            $('html, body').animate({
                scrollTop: 0
            }, 1000)
        });
    };

    this.getMenuMobile = function() {
        var _this = this;

        this.menuMobile.on('click', function() {
            var self = $(this);

            if(_this.headerSearch__icon.hasClass('active')) {
                _this.headerSearch__icon.trigger('click');
            }

            if(!self.hasClass('active')) {
                self.addClass('active');

                self.next('.headerMenu__mobileSub').slideDown(200);
            } else {
                self.removeClass('active');
                self.next('.headerMenu__mobileSub').stop().slideUp(200);
            }

            return false;
        })
    };

    this.getSearch = function() {
        var _this = this;

        this.headerSearch__icon.on('click', function() {
            var self = $(this);

            if(_this.menuMobile.hasClass('active')) {
                _this.menuMobile.trigger('click');
            }

            if(!self.hasClass('active')) {
                self.addClass('active');
                self.next().slideDown(200);
            } else {
                self.removeClass('active');
                self.next().slideUp(200);
            }

            return false;
        })
    }
}

/* getMap */
function getMap() {
    this.initialize = function(config) {
        this.mapID = config.map;
        this.mapInfoLink = $(config.mapInfoLink);
        this.mapInfoBlock = $(config.mapInfoBlock);
        this.center = config.center;
        this.markers = config.markers;
        this.type = config.type || 'coords'; // coords, geocode

        if(this.mapID) { this.getMapMain(); }
        if(this.mapInfoLink.length || this.mapInfoBlock.length ) { this.getTab(); }
    };

    this.getMapMain = function(config) {
        ymaps.ready(this.getMap.bind(this));
    };

    this.addMarker = function(item){

        var _this = this;
        var itemCoords = item.coords;
        var itemCenter = item.center;

        switch(this.type){
            case 'geocode':

                var geocoder = ymaps.geocode(itemCoords, {
                    results: 1
                });

                geocoder.then(function(res){
                    var firstGeoObject = res.geoObjects.get(0),
                        coords = firstGeoObject.geometry.getCoordinates(),
                        bounds = firstGeoObject.properties.get('boundedBy');

                    _this.map.geoObjects.add(firstGeoObject);

                    if (itemCenter){
                        _this.map.setCenter(coords, 17);
                    }

                });

                break;
            case 'coords':

                var placemark = new ymaps.GeoObject({
                    geometry: {
                        type: "Point",
                        coordinates: itemCoords
                    }
                });

                _this.map.geoObjects.add(placemark);

                if (itemCenter){
                    _this.map.setCenter(itemCoords, 17);
                }

                break;
        }



    };

    this.addMarkers = function(){

        for (var i = 0; i < this.markers.length; i+=1){
            this.addMarker(this.markers[i]);
        }

    };

    this.getMap = function() {
        var options = {
            center: this.center,
            zoom: 17,
            controls: []
        };

        var map = this.map = new ymaps.Map(this.mapID, options);

        this.addMarkers();
    };

    this.getMapGeo = function(coords) {
        var _this = this;

        switch (this.type){
            case 'geocode':

                ymaps.geocode(coords, {
                    results: 1
                }).then(function (res) {
                    var firstGeoObject = res.geoObjects.get(0),
                        coords = firstGeoObject.geometry.getCoordinates(),
                        bounds = firstGeoObject.properties.get('boundedBy');

                    _this.map.setCenter(coords, 17);
                });

                break;
            case 'coords':

                coords = coords.split(',');
                coords[0] = Number(coords[0]);
                coords[1] = Number(coords[1]);

                _this.map.setCenter(coords, 17);

                break;
        }


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

/* Section */
function Section() {
    this.initialize = function(config) {
        this.tab = $(config.tab);

        if(this.tab.length) { this.getAccordion(); }
    };

    this.getAccordion = function() {
        var _this = this;

        this.tab.on('click', function() {
            var self = $(this);

            if(!self.hasClass('active')) {
                _this.tab.removeClass('active');
                self.addClass('active');
            } else {
                self.removeClass('active');
            }

            return false;
        });
    };
}

/* Section */
function MobileMenu() {
    this.initialize = function(config) {
        this.subMenuMobileStyle = $(config.subMenuMobileStyle);
        this.list__box = $(config.list__box);

        if(this.subMenuMobileStyle.length) { this.getAccordion(); }
        if(this.list__box.length) { this.getAccordionListBox(); }
    };

    this.getAccordion = function() {
        var _this = this;

        this.subMenuMobileStyle.find('.list__title').each(function() {
            var self = $(this);

            if(self.next().length) {
                self.on('click', function () {
                    var selfMain = $(this);

                    if (!selfMain.parent().hasClass('active')) {
                        _this.subMenuMobileStyle.removeClass('active');
                        selfMain.parent().addClass('active');
                    } else {
                        selfMain.parent().removeClass('active');
                    }

                    return false;
                });
            } else {
                self.addClass('active-link');
            }
        });
    };

    this.getAccordionListBox = function() {
        if(this.list__box.prev().length) {
            this.list__box.prev().each(function() {
                var self = $(this);

                if(!self.hasClass('active')) {
                    self.addClass('active');
                } else {
                    self.removeClass('active');
                }
            })
        }
    };
}

$(function() {
    var mainJS = new Constructor();

    /* global */
    mainJS.initialize({
        formType__icon: ".formType__icon",
        menuMobile: '#menuMobile',
        headerSearch__icon: 'div.headerSearch__icon'
    });

    /* MobileMenu */
    var drop = new MobileMenu();
    drop.initialize({
        subMenuMobileStyle: ".submenu__mobileStyle .submenu__item",
        list__box: '.list__sub2'
    });
});