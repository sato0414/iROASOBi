$(document).ready(function() {
    let isDragging = false;
    let startX, scrollLeft;
    const slider = $('.works_slider')[0];  // works_slider要素を取得

    // ページ読み込み時に初期位置を設定
    slider.scrollLeft = 180;  // 初期位置を180pxに設定

    // ドラッグ開始
    $(slider).mousedown(function(e) {
        if ($(e.target).is('img')) return;  // 画像のドラッグを無効化

        isDragging = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        $(slider).css("cursor", "grabbing");
    });

    // ドラッグ終了
    $(document).mouseup(function() {
        if (isDragging) {
            isDragging = false;
            $(slider).css("cursor", "grab");
        }
    });

    // ドラッグ中の処理
    $(slider).mousemove(function(e) {
        if (!isDragging) return;  // ドラッグしていない場合は何もしない
        e.preventDefault();
        const moveX = e.pageX - slider.offsetLeft;
        const distance = moveX - startX;
        slider.scrollLeft = scrollLeft - distance;
    });

    // スライダーが画面左端まで来たら1枚目の画像が完全に表示される
    $(slider).on('scroll', function() {
        if (slider.scrollLeft <= 0) {
            slider.scrollLeft = 0;  // スクロールを0に固定
        }
    });

    // マウスがスライダー外に出た場合の処理
    $(slider).mouseleave(function() {
        if (isDragging) {
            isDragging = false;
            $(slider).css("cursor", "grab");
        }
    });
});

//ハンバーガーメニュー
(function($) {
    var $nav   = $('#navArea');
    var $btn   = $('.toggle_btn');
    var $mask  = $('#mask');
    var open   = 'open'; // class

    // ハンバーガーメニューの開閉
    $btn.on( 'click', function() {
      if ( ! $nav.hasClass( open ) ) {
        $nav.addClass( open );
      } else {
        $nav.removeClass( open );
      }
    });

    // マスクをクリックして閉じる
    $mask.on('click', function() {
      $nav.removeClass( open );
    });
})(jQuery);
