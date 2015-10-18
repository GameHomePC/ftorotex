<div class="page">
    <div class="wrapper">
        <ul class="breadcrumbs">
            <li><a href="">Главная</a></li>
            <li><a href="">Продукция</a></li>
            <li><a href="">Конструкционные пластмассы</a></li>
            <li><a href="">Фторопласт</a></li>
            <li>Фторопласт Ф4 / PTFE</li>
        </ul>

        <h1 class="page__title">Фторопласт Ф4 / PTFE</h1>

        <div class="page__content card">
            <div class="toggle">
                <ul class="toggle__list" id="toggle">
                    <li class="active"><a class="toggle__link" href="#">Описание</a></li>
                    <li><a class="toggle__link" href="#">Технические характеристики</a></li>
                    <li><a class="toggle__link" href="#">Применение</a></li>
                    <li><a class="toggle__link" href="#">Услуги</a></li>
                </ul>

                <div class="toggle__content" id="toggleContent">
                    <div class="toggle__item active">
                        <div class="mobile__dropDown">Описание</div>
                        <?php include "./include/card/description.php"; ?>
                    </div>

                    <div class="toggle__item">
                        <div class="mobile__dropDown">Технические характеристики</div>
                        <?php include "./include/card/specifications.php"; ?>
                    </div>

                    <div class="toggle__item">
                        <div class="mobile__dropDown">Применение</div>
                        <?php include "./include/card/note.php"; ?>
                    </div>

                    <div class="toggle__item">
                        <div class="mobile__dropDown">Услуги</div>
                        <?php include "./include/card/services.php"; ?>
                    </div>
                </div>
            </div>
        </div>

        <script>
            $(function() {
                var toggle = new Constructor();

                toggle.initialize({
                    toggle: "#toggle li",
                    toggleContent: ".toggle__item"
                });
            });
        </script>
    </div>
</div>