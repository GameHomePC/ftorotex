<footer class="footer">
    <div class="footer__top">
        <div class="wrapper">
            <div class="footerItem footerItem__left">
                <p>1991-2015, ОДО “Фторотекс”</p>
            </div>

            <div class="footerItem footerItem__middle">
                <ul class="footerItem__list">
                    <li><a href="#">Наша продукция</a></li>
                    <li><a href="#">Услуги</a></li>
                    <li><a href="#">Статьи и материалы</a></li>
                    <li><a href="#">Контакты</a></li>
                </ul>
            </div>

            <div class="footerItem footerItem__right">
                <p>
                    Разработка сайта -
                    <a href="#">GiperLink</a>
                </p>
            </div>
        </div>
    </div>

    <div class="footer__bottom">
        <div class="map" id="map"></div>
        <div class="footerB__line"></div>
        <div class="wrapper">
            <div class="mapInfo">
                <ul class="mapInfo__top" id="mapInfoLink">
                    <li class="active" data-region="220125, г. Минск, ул.Шафарнянская, 11, офис 47">
                        <i class="mapInfoLink__geo"></i>
                        <i class="mapInfoLink__info"></i>
                        <a class="mapInfoLink__link" href="#">Офис</a>
                        <ul class="mapInfo__bottom active">
                            <li>
                                <div class="mapInfo__content">
                                    <div class="mapInfo__title">ОДО “Фторотекс”</div>

                                    <p>
                                        <strong>220125, г. Минск, ул.Шафарнянская, 11, офис 47</strong><br>
                                        (Бизнес-центр “Порт”, правое крыло, 1-й этаж, вход с торца)
                                    </p>

                                    <p>
                                        Телефоны/факсы:<br>
                                        <strong>+37517 286-36-41, 286-36-42, 286-36-43, 286-36-44</strong>
                                    </p>

                                    <p>
                                        E-mail: <a href="#">info@ftorotex.by</a>
                                    </p>

                                    <p>
                                        Работаем: <strong>с 8.30 до 17.00</strong>
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li data-region="220125, г. Минск, ул.Шафарнянская, 11, офис 47">
                        <i class="mapInfoLink__geo"></i>
                        <i class="mapInfoLink__info"></i>
                        <a class="mapInfoLink__link" href="#">Склад</a>
                        <ul class="mapInfo__bottom">
                            <li class="active">
                                <div class="mapInfo__content">
                                    <div class="mapInfo__title">ОДО “Фторотекс” test</div>

                                    <p>
                                        <strong>220125, г. Минск, ул.Шафарнянская, 11, офис 47</strong><br>
                                        (Бизнес-центр “Порт”, правое крыло, 1-й этаж, вход с торца)
                                    </p>

                                    <p>
                                        Телефоны/факсы:<br>
                                        <strong>+37517 286-36-41, 286-36-42, 286-36-43, 286-36-44</strong>
                                    </p>

                                    <p>
                                        E-mail: <a href="#">info@ftorotex.by</a>
                                    </p>

                                    <p>
                                        Работаем: <strong>с 8.30 до 17.00</strong>
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <script>
            $(function() {
                var map = new getMap();

                map.initialize({
                    map: "map",
                    mapInfoLink: "#mapInfoLink",
                    mapInfoBlock: "#mapInfoBlock"
                });
            });
        </script>
    </div>
</footer>