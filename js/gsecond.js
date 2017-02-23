$(function () {
    var title_suffix = " / G-Second";
    var $content = $("#content");
    var $title = $("title");

    $(window).hashchange(function () {
        switch (location.hash) {
            default:
                $content.load('pagedata/main.html?1');
                setTitle("トップページ");
                break;

            case "#main":
                $content.load('pagedata/main.html?1');
                setTitle("トップページ");
                break;

            case"#about":
                $content.load('pagedata/about.html');
                setTitle("G-Secondについて");
                break;

            case "#members":
                $content.load('pagedata/members.html');
                setTitle("メンバー");
                break;

            case "#dsp":
                $content.load('pagedata/dsp.html');
                setTitle("開発者支援プログラム(DSP)");
                break;

            case"#dsp-request":
                $content.load('pagedata/dsp-request.html');
                setTitle("DSP参加申請フォーム");
                break;
        }
    });
    $(window).hashchange();

    function setTitle(title) {
        $title.text(((title) ? title : "名称未設定") + title_suffix);
    }
});
