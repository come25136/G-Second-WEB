$(function() {
    var hash = location.hash;
    var title_prefix = " / G-Second";
    if(hash){
        //アンカがある時の処理
        if(hash == "#main"){
            $('#content').load('pagedata/main.html?1');
            setTitle("トップページ");
        }else if(hash == "#about"){
            $('#content').load('pagedata/about.html');
            setTitle("G-Secondについて");
        }else if(hash == "#members"){
            $('#content').load('pagedata/members.html');
            setTitle("メンバー");
        }else if(hash == "#dsp"){
            $('#content').load('pagedata/dsp.html');
            setTitle("開発者支援プログラム");
        }else{
            //アンカが引っ掛からなかったときの処理
            $('#content').load('pagedata/main.html?1');
            setTitle("トップページ");
        }

    }else{
        //アンカがない時の処理
        $(document).ready(function(){
            $('#content').load('pagedata/main.html?1');
            setTitle("トップページ");
        });
    }

    //ここからリンクがクリックされたときの処理
    $("div").on("click", 'a[href="#main"]', function() {
        $('#content').load('pagedata/main.html?1');
        setTitle("トップページ");
    });

    $("div").on("click", 'a[href="#about"]', function() {
        $('#content').load('pagedata/about.html');
        setTitle("G-Secondについて");
    });

    $("div").on("click", 'a[href="#members"]', function() {
        $('#content').load('pagedata/members.html');
        setTitle("メンバー");
    });

    $("div").on("click", 'a[href="#dsp"]', function() {
        $('#content').load('pagedata/dsp.html');
        setTitle("開発者支援プログラム");
    });
    //ここまで

    function setTitle(title) {
        var _title;
        var result;
        if(title == ""){
            _title = "名称未設定";
        }else{
            _title = title;
        }
        
        $("title").text(_title + title_prefix);

        return;
    }
});