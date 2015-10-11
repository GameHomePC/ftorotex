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
                    <li class="active"><a href="#">Описание</a></li>
                    <li><a href="#">Технические характеристики</a></li>
                    <li><a href="#">Применение</a></li>
                    <li><a href="#">Услуги</a></li>
                </ul>

                <div class="toggle__content" id="toggleContent">
                    <div class="toggle__item active">
                        <?php include "./include/card/description.php"; ?>
                    </div>

                    <div class="toggle__item">
                        <?php include "./include/card/specifications.php"; ?>
                    </div>

                    <div class="toggle__item">
                        <?php include "./include/card/note.php"; ?>
                    </div>

                    <div class="toggle__item">
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