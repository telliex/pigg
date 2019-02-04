$(function() {
    // 点击分享按钮
    var $shareBtn = $('.main-inner__add-share'),
        $inputTxt = $(".popup-name .txt");

    $inputTxt.on('change', function(){
        var text = $inputTxt.val();
        var counter = text.length;
        if (counter > 5) {
            $inputTxt.val(text.substr(0, 5))
        }
        $('.popup-name .length').text(text.length);
    });

    // 分享按钮
    $shareBtn.bind('click', function() {
        togglePopup()
        $inputTxt.focus()
    })
    // 输入姓名取消
    $('.popup-name .cancel').bind('click', function() {
        // 如果已经输入过名称
        if ($('#nickname').text()) {
            // 显示按钮
            togglePopup()
            $('.footer-share-btn').show()
        } else {
            togglePopup()
        }
    })
    // 输入姓名确定
    $('.popup-name .confirm').bind('click', function() {
        var val = $inputTxt.val()
        if (!val.length) {
            $inputTxt.focus()
        } else {
            $('.main-inner__add').hide()
            $('.main-inner__qrcode').show()
            togglePopup()
            $('.footer-share-btn').show()
            console.log(val)
            $('#nickname').text(val)
        }
    })
    // 返回修改
    $('.edit-btn').bind('click', function() {
        $('.footer-share-btn').hide()
        togglePopup()
    })
    // 保存图片
    $('.save-btn').bind('click', function() {
        saveImage()
    })
    // 分享提示
    $('.share-btn').bind('click', function() {
        togglShare()
    })
    $('.share-confirm-btn').bind('click', function() {
        togglShare()
    })
})

function togglePopup() {
    $("#popup").fadeToggle();
}
function togglShare() {
    $("#share-tip").fadeToggle();
}
function saveImage() {
    alert('11')
    html2canvas($('.container')).then(function(canvas) {
        // console.log(canvas, 'canvas..')
        // var url = canvas.toDataURL()
        // console.log(url)
        alert('22')
        // Canvas2Image.saveAsImage(canvas)
        var type = 'png';
        var imgData = canvas.toDataURL(type);
        var _fixType = function(type) {
            type = type.toLowerCase().replace(/jpg/i, 'jpeg');
            var r = type.match(/png|jpeg|bmp|gif/)[0];
            return 'image/' + r;
        };
        imgData = imgData.replace(_fixType(type),'image/octet-stream');
        var saveFile = function(data, filename){
            var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
            save_link.href = data;
            save_link.download = filename;

            var event = document.createEvent('MouseEvents');
            event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            save_link.dispatchEvent(event);
        };
        var filename = '谨贺新年.' + type;
        saveFile(imgData, filename);
    });
}
