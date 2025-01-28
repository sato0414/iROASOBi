$(document).ready(function(){
  // 初期化時にセンターモードを有効に
  $('.slider').slick({
    centerMode: true,
    slidesToShow: 3,
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


$(function () {
    // 変数に要素をセット
    var tabList = $('.works_bar li'),
        allWorks = $('.works_wrapper.all'),
        lpWorks = $('.works_wrapper.lp'),
        webWorks = $('.works_wrapper.web'),
        bannerWorks = $('.works_wrapper.banner');
    
    // 最初の要素のみを表示させる
    $('.works_wrapper').hide();  // すべて隠す
    allWorks.show();  // ALLを最初に表示
    
    // タブをクリックしたら、対応する要素を表示
    tabList.click(function () {
        tabList.removeClass('active');
        $(this).addClass('active');
        
        var index = tabList.index(this);
        
        // すべて隠してから該当するものを表示
        $('.works_wrapper').hide();
        
        if (index === 0) {
            allWorks.show(); // ALLを表示
        } else if (index === 1) {
            lpWorks.show(); // LPを表示
        } else if (index === 2) {
            webWorks.show(); // WEBサイトを表示
        } else if (index === 3) {
            bannerWorks.show(); // バナーを表示
        }
    });
});
