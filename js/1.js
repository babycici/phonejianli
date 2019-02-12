
let $first = $('.first'),
    $userInfo = $('.userInfo'),
    $sec = $('.headertt'),
    $workbox=$('.workbox'),
    $pessionbox=$('.pessionbox'),
    $headerone=$('.headerone'),
    $competitonBox=$('.competitonBox'),
    $pessionbox1=$('.pessionbox1'),
    $headertwo=$('.headertwo'),
    $goalbox=$('.goalbox'),
    $last=$('.last')
    console.log($pessionbox);
    

function load(){
    $first.tap(function(){
        $first.hide()
        $sec.show()
        $sec.css({
            transform:'translateX(0)'
        })
    })
    $sec.tap(function(){
        $sec.hide()
        $userInfo.show()
        $userInfo.css({
            transform:'translateX(0)'
        })
    })
 
    $userInfo.tap(function(){
        $userInfo.hide()
        $workbox.show();
        $workbox.css({
            transform:'translateX(0)'
        })
    })
    $workbox.tap(function(){
        $workbox.hide()
        $pessionbox.show()
        $pessionbox.css({
            transform:'translateX(0)'
        })
    })
    $pessionbox.tap(function(){
        $pessionbox.hide()
        $headerone.show()
        $headerone.css({
            transform:'translateX(0)'
        })
    })
    $headerone.tap(function(){
        $headerone.hide()
        $competitonBox.show()
        $competitonBox.css({
            transform:'translateX(0)'
        })
    })
    $competitonBox.tap(function(){
        $competitonBox.hide()
        $pessionbox1.show()
        $pessionbox1.css({
            transform:'translateX(0)'
        })
    })
    $pessionbox1.tap(function(){
        $pessionbox1.hide()
        $headertwo.show()
        $headertwo.css({
            transform:'translateX(0)'
        })
    })
    $headertwo.tap(function(){
        $headertwo.hide()
        $goalbox.show()
        $goalbox.css({
            transform:'translateX(0)'
        })
    })
    $goalbox.tap(function(){
        $goalbox.hide()
        $last.show()
        $last.css({
            transform:'translateX(0)'
        })
    })
    // $headerone.tap(function(){
    //     $headerone.hide()
    //     $competitonBox.show()
    //     $competitonBox.css({
    //         transform:'translateX(0)'
    //     })
    // })
 
}
load()
