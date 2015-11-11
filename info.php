<?php
//phpinfo()
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <?php include "./include/head.php"; ?>
</head>
<body>
    <div class="browseProductContainer">
        <span class="pricego ch-17">260 руб.</span>

        <select class="inputboxattrib" id="выберите_размер_field" name="выберите_размер17" herid="ch-17">
            <option value="40 см (1350 гр)" flagid="750 руб." herid="ch-17">40 см (1350 гр) (=750 руб.)</option>

            <option value="30 см (880 гр)" flagid="640 руб." herid="ch-17">30 см (880 гр) (=640 руб.)</option>

            <option value="20 см (440 гр)" flagid="260 руб." herid="ch-17">20 см (440 гр) (=260 руб.)</option>

        </select>
    </div>

    <div class="browseProductContainer">
        <span class="pricego ch-17">260 руб.</span>

        <select class="inputboxattrib" id="выберите_размер_field" name="выберите_размер17" herid="ch-17">
            <option value="40 см (1350 гр)" flagid="750 руб." herid="ch-17">40 см (1350 гр) (=750 руб.)</option>
            <option value="30 см (880 гр)" flagid="640 руб." herid="ch-17">30 см (880 гр) (=640 руб.)</option>
            <option value="20 см (440 гр)" flagid="260 руб." herid="ch-17">20 см (440 гр) (=260 руб.)</option>

        </select>
    </div>

    <div class="browseProductContainer">
        <span class="pricego ch-17">260 руб.</span>

        <select class="inputboxattrib" id="выберите_размер_field" name="выберите_размер17" herid="ch-17">
            <option value="40 см (1350 гр)" flagid="750 руб." herid="ch-17">40 см (1350 гр) (=750 руб.)</option>
            <option value="30 см (880 гр)" flagid="640 руб." herid="ch-17">30 см (880 гр) (=640 руб.)</option>
            <option value="20 см (440 гр)" flagid="260 руб." herid="ch-17">20 см (440 гр) (=260 руб.)</option>
        </select>
    </div>

    <script>
        jQuery('.inputboxattrib').change(function(e) {
            var self = jQuery(this),
                selfParents = self.parents('.browseProductContainer').find('.pricego'),
                selfSelected = self.find('option:selected');

            selfParents.text(selfSelected.attr('flagid'));
        });
    </script>
</body>
</html>