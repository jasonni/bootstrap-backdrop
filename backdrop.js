(function ($) {
    $.openBackdrop = function () {
        var div = document.createElement('div'),
            backdrop = document.createElement('div');

        backdrop.className = 'modal-backdrop';

        div.id = 'backdrop';
        div.style.top = 0;
        div.style.right = 0;
        div.style.bottom = 0;
        div.style.left = 0;
        div.style.position = 'fixed';
        div.style.zIndex = 1020;

        div.appendChild(backdrop);
        document.body.appendChild(div);
    };

    $.closeBackdrop = function () {
        document.getElementById('backdrop').remove();
    };
}(jQuery));
