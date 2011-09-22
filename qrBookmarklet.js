var QR = function () {
    var _this = this;
    var width = 400;
    var height = 400;

    baseQRUrl = 'https://chart.googleapis.com/chart?chs=' + width + 'x' + height + '&cht=qr&ch1=';

    _this.appendDiv = function () {
        var div = document.createElement('div');
        div.setAttribute('id', 'qr-container');
        div.setAttribute('style', 'position: absolute; top: 0; left: 0;');

        div.appendChild(getImage());

        document.getElementsByTagName('body')[0].appendChild(div);
    };

    function getImage() {
        var img = document.createElement('img'),
        imgSrc = _this.GetQRSrc(_this.GetCurrentPageEncoded());

        img.setAttribute('src', imgSrc);

        return img;
    }

    _this.GetCurrentPageEncoded = function () {
        return escape(document.URL);
    };

    _this.GetQRSrc = function (url) {
        return baseQRUrl + url;
    };
}

var qr = new QR();
qr.appendDiv();