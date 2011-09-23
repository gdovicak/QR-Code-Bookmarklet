var QR = function () {
    var _this = this;
    var width = 400;
    var height = 400;
    _this.div = null;

    baseQRUrl = 'https://chart.googleapis.com/chart?chs=' + width + 'x' + height + '&cht=qr&chl=';

    _this.appendDiv = function () {
        _this.div = document.createElement('div');
        _this.div.setAttribute('id', 'qr-container');
        _this.div.setAttribute('style', 'position: absolute; top: 0; left: 0; margin:20px; border-radius: 15px; background-color: #444444;padding:10px; z-index: 1000');

        _this.div.appendChild(getImage());

        _this.div.onclick = _this.close;

        document.getElementsByTagName('body')[0].appendChild(_this.div);
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


    _this.close = function () {
        _this.div.parentNode.removeChild(_this.div);
    };
}

//var qr = new QR();
//qr.appendDiv();