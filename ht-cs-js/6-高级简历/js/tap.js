(function () {
    var navJy = document.querySelector('.nav_jy');
    var navGz = document.querySelector('.nav_gz');
    var first = document.querySelector('.first');
    var second = document.querySelector('.second');
    var three = document.querySelector('.three');
    var four = document.querySelector('.four');
    navJy.addEventListener('click',function(){
        first.innerHTML='上幼儿园';
        second.innerHTML='上小学';
        three.innerHTML='考上城里的学校,上初中';
        four.innerHTML='高中三年,以560分考上河南理工大学的计算机大类,在大二选择计算机科学与技术专业';
    });
    navGz.addEventListener('click',function(){
        first.innerHTML='无';
        second.innerHTML='无';
        three.innerHTML='无';
        four.innerHTML='暂时没有工作经历';
    });

})();