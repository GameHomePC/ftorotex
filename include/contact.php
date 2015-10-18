<div class="page">
    <div class="wrapper">
        <ul class="breadcrumbs">
            <li><a href="">Главная</a></li>
            <li>Контакты</li>
        </ul>

        <h1 class="page__title">Контакты</h1>

        <div class="page__content card">
            <div class="toggle">
                <ul class="toggle__list" id="toggle">
                    <li class="active"><a class="toggle__link" href="#">Адрес и контакты офиса</a></li>
                    <li><a class="toggle__link" href="#">Адрес и контакты склада</a></li>
                    <li><a class="toggle__link" href="#">Наши реквизиты</a></li>
                </ul>

                <div class="toggle__content" id="toggleContent">
                    <div class="toggle__item active">
                        <div class="mobile__dropDown">Адрес и контакты офиса</div>
                        <?php include "./include/contact/contact-one.php"; ?>
                    </div>

                    <div class="toggle__item">
                        <div class="mobile__dropDown">Адрес и контакты склада</div>
                        <?php include "./include/contact/contact-.php"; ?>
                    </div>

                    <div class="toggle__item">
                        <div class="mobile__dropDown">Наши реквизиты</div>
                        <?php include "./include/contact/contact-one.php"; ?>
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