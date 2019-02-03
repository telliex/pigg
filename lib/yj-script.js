$(function() {
    // 点击分享按钮
    var $shareBtn = $('.main-inner__add-share')
    // 输入名字
    var $inputTxt = $(".popup-name .txt")
    $inputTxt.on('change', function(){
        var text = $inputTxt.val();
        var counter = text.length;
        if (counter > 5) {
            $inputTxt.val(text.substr(0, 5))
        }
        $('.popup-name .length').text(counter);
    });

    $shareBtn.bind('click', function() {
        togglePopup()
        $inputTxt.focus()
    })
    // 取消
    $('.popup-name .cancel').bind('click', function() {
        togglePopup()
    })
    // 确定
    $('.popup-name .confirm').bind('click', function() {
        var val = $inputTxt.val()
        if (!val.length) {
            $inputTxt.focus()
        } else {
            togglePopup()
            console.log(val)
        }
    })
})


function togglePopup () {
    $("#popup").fadeToggle();
}
