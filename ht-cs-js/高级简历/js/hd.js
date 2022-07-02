(function () {
    var love1 = document.querySelector('.love-1');
    var num1 = 0;
    love1.addEventListener('click', function () {
        if (num1 == 0) {
            love1.style.color = 'red';
            love1.style.animation = 'move 0.5s ease';
            num1 = 1;
        } else {
            love1.style.color = 'black';
            love1.style.animation = 'none';
            num1 = 0;
        }
    });
    var love2 = document.querySelector('.love-2');
    var num2 = 0;
    love2.addEventListener('click', function () {
        if (num2 == 0) {
            love2.style.color = 'red';
            love2.style.animation = 'move 0.5s ease';
            num2 = 1;
        } else {
            love2.style.color = 'black';
            love2.style.animation = 'none';
            num2 = 0;
        }
    });
    var love3 = document.querySelector('.love-3');
    var num3 = 0;
    love3.addEventListener('click', function () {
        if (num3 == 0) {
            love3.style.color = 'red';
            love3.style.animation = 'move 0.5s ease';
            num3 = 1;
        } else {
            love3.style.color = 'black';
            love3.style.animation = 'none';
            num3 = 0;
        }
    });
    var love4 = document.querySelector('.love-4');
    var num4 = 0;
    love4.addEventListener('click', function () {
        if (num4 == 0) {
            love4.style.color = 'red';
            love4.style.animation = 'move 0.5s ease';
            num4 = 1;
        } else {
            love4.style.color = 'black';
            love4.style.animation = 'none';
            num4 = 0;
        }
    });
    var love5 = document.querySelector('.love-5');
    var num5 = 0;
    love5.addEventListener('click', function () {
        if (num5 == 0) {
            love5.style.color = 'red';
            love5.style.animation = 'move 0.5s ease';
            num5 = 1;
        } else {
            love5.style.color = 'black';
            love5.style.animation = 'none';
            num5 = 0;
        }
    });
    var love6 = document.querySelector('.love-6');
    var num6 = 0;
    love6.addEventListener('click', function () {
        if (num6 == 0) {
            love6.style.color = 'red';
            love6.style.animation = 'move 0.5s ease';
            num6 = 1;
        } else {
            love6.style.color = 'black';
            love6.style.animation = 'none';
            num6 = 0;
        }
    })
    var love7 = document.querySelector('.love-7');
    var num7 = 0;
    love7.addEventListener('click', function () {
        if (num7 == 0) {
            love7.style.color = 'red';
            love7.style.animation = 'move 0.5s ease';
            num7 = 1;
        } else {
            love7.style.color = 'black';
            love7.style.animation = 'none';
            num7 = 0;
        }
    })
    var love8 = document.querySelector('.love-8');
    var num8 = 0;
    love8.addEventListener('click', function () {
        if (num8 == 0) {
            love8.style.color = 'red';
            love8.style.animation = 'move 0.5s ease';
            num8 = 1;
        } else {
            love8.style.color = 'black';
            love8.style.animation = 'none';
            num8 = 0;
        }
    })



    // 留言板

    // 获取ul
    var content = document.getElementById('content');
    // 获取输入值
    var text = document.querySelector('.text');
    var newname = document.querySelector('.newname');
    // 获取按钮
    var upload = document.querySelector('.upload');
    // console.log(upload.innerText[0]);
    upload.addEventListener('click', function () {
        if (newname.value == '') {
            alert('请填写姓名');
        } else if(text.value.length <= 5){
            alert('内容不少与5个字');
        }else {
            // 创建li
            var li = document.createElement('li');
            content.insertBefore(li, content.children[0]);
            li.className = 'li';
            // 创建name和con
            var div1 = document.createElement('div');
            var div2 = document.createElement('div');
            li.appendChild(div1);
            li.appendChild(div2);
            // 判断名字是否正确
            var regname = /^[\u4e00-\u9fa5]{2,4}$/;
            if (regname.test(newname.value)) {
                div1.innerText = newname.value[0];
            } else {
                alert('请输入正确的中文姓名');          
            }
            div2.innerText = text.value;
            newname.value = null;
            text.value = null;
            div1.className = 'name';
            div2.className = 'con';
        }
    })
})();