$(document).ready(function () {
  // 初期化時にセンターモードを有効に
  $(".slider").slick({
    centerMode: true,
    slidesToShow: 3,
  });
});

//ハンバーガーメニュー
(function ($) {
  var $nav = $("#navArea");
  var $btn = $(".toggle_btn");
  var $mask = $("#mask");
  var open = "open"; // class

  // ハンバーガーメニューの開閉
  $btn.on("click", function () {
    if (!$nav.hasClass(open)) {
      $nav.addClass(open);
    } else {
      $nav.removeClass(open);
    }
  });

  // マスクをクリックして閉じる
  $mask.on("click", function () {
    $nav.removeClass(open);
  });
})(jQuery);

// メインビジュアルのテキスト
// 1文字づつspanタグで囲う関数
const wrapCharactersWithSpan = (element, className = "") => {
  const text = element.textContent.trim();
  const characters = text.split("");
  let wrappedContent = "";

  characters.forEach((char, index) => {
    if (char === " ") {
      wrappedContent += '<span aria-hidden="true">&nbsp;</span>';
    } else {
      wrappedContent += `<span class="${className}" aria-hidden="true" translate="no" style="--index: ${index};">${char}</span>`;
    }
  });

  wrappedContent += `<span class="alternative">${text}</span>`;
  element.innerHTML = wrappedContent;
};

const chars = document.querySelectorAll("[data-char-span]");

// 1文字づつspanタグで囲う関数を実行
chars.forEach((char) => {
  wrapCharactersWithSpan(char);
});

// テキストアニメーションの一連の処理
const fadeInChars = document.querySelectorAll(
  '[data-text-animation="fadeIn"] span'
); // アニメーション対象の要素をNodeListとして取得
const spansArray = Array.from(fadeInChars); // NodeListを配列に変換

// ランダムに要素を選択してアクティブ化する関数
const addActiveClassRandomly = () => {
  if (spansArray.length === 0) return; // 配列が空の場合は処理を終了

  const randomIndex = Math.floor(Math.random() * spansArray.length); // 0から配列の長さ-1までのランダムな整数を生成
  const randomSpan = spansArray[randomIndex]; // ランダムに選択された要素を取得

  randomSpan.classList.add("is-active"); // 選択された要素にis-activeを追加
  spansArray.splice(randomIndex, 1); // 処理済みの要素を配列から削除

  if (spansArray.length > 0) {
    // 配列の要素数が0になるまで
    setTimeout(addActiveClassRandomly, 100); // 100ミリ秒後に再帰的に関数を呼び出し
  }
};

addActiveClassRandomly(); // アニメーション処理の開始

// スクロールして表示領域に入ったらclass付与
$(".js-fadeUp").on("inview", function () {
  $(this).addClass("is-inview");
});

$(".js-fadeUp").on("inview", function (event, isInView) {
  if (isInView) {
    $(this).closest(".about_me_hint").addClass("is-inview");
  }
});

// フォトギャラリー
$(".slider_photo_gallery").slick({
  autoplay: true,
  autoplaySpeed: 0,
  speed: 8000,
  cssEase: "linear",
  slidesToShow: 4.3,
  swipe: false,
  arrows: false,
  pauseOnFocus: false,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3.5,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2.4,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1.6,
      },
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1.3,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1.1,
      },
    },
    {
      breakpoint: 370,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
// 制作実績一覧の絞り込み機能
$(function () {
  // 変数に要素をセット
  var tabList = $(".works_bar li"),
    allWorks = $(".works_wrapper.all"),
    lpWorks = $(".works_wrapper.lp"),
    webWorks = $(".works_wrapper.web"),
    bannerWorks = $(".works_wrapper.banner");

  // 最初の要素のみを表示させる
  $(".works_wrapper").hide(); // すべて隠す
  allWorks.show(); // ALLを最初に表示

  // タブをクリックしたら、対応する要素を表示
  tabList.click(function () {
    tabList.removeClass("active");
    $(this).addClass("active");

    var index = tabList.index(this);

    // すべて隠してから該当するものを表示
    $(".works_wrapper").hide();

    if (index === 0) {
      allWorks.show(); // ALLを表示
    } else if (index === 1) {
      lpWorks.show(); // LPを表示
    } else if (index === 2) {
      webWorks.show(); // WEBサイトを表示
    } else if (index === 3) {
      bannerWorks.show(); // バナーを表示
    }

    // 時間差で表示する処理
    // アニメーションの遅延をリセット
    $(".works_wrapper")
      .css({
        opacity: 0,
        transform: "translateY(20px)",
      })
      .each(function (index) {
        $(this).css("animation-delay", index * 0.2 + "s");
      });

    // 再度、アニメーションを適用
    $(".works_wrapper").each(function () {
      $(this).addClass("fadeInUp");
    });
  });
});
