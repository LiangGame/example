/*-------获取页面元素-------*/
var calender = document.getElementById('calender'); // 获取容器元素
var titl = document.getElementById('titl'); // 获取显示当前日期容器
var pre = document.getElementById('pre'); // 获取上一月按钮
var next = document.getElementById('next'); // 获取下一月按钮
var yearpre = document.getElementById('yearpre'); // 获取上一年按钮
var yearnext = document.getElementById('yearnext'); // 获取下一年按钮

/*-------创建节点-------*/
var oUl = document.createElement('ul'); // 创建日期ul节点
oUl.id = 'dateContainer';
/*-------初始化当前日期-------*/
var currentdate = new Date();//当前今天日期，不变化
var currentyear = currentdate.getFullYear();// 获取实际当前年份
var currentmonth = currentdate.getMonth();// 获取实际当前月份
var currentDay = currentdate.getDate(); // 获取当前是几号

/*-------为按钮添加点击事件-------*/
/* --,++ 先运算在赋值 */
// 上一年
yearpre.addEventListener('click', function () {
    active(--currentyear, currentmonth);
});
// 下一年
yearnext.addEventListener('click', function () {
    active(++currentyear, currentmonth);
});
// 上一月
pre.addEventListener('click', function () {
    active(currentyear, --currentmonth);
});
// 下一月
next.addEventListener('click', function () {
    active(currentyear, ++currentmonth);
});

/*-------日历初始化-------*/
active(currentyear, currentmonth); // 初始化日历

/*-------日历计算函数-------*/
function active(y, m) {
    oUl.innerHTML = ''; // 初始化日历为空

    var color = [], // 初始化存储颜色数组
        background = [];

    var activeDate = new Date(y, m);//不断变化的日期,用于计算日期

    var month = activeDate.getMonth(); // 获取当前月份

    activeDate.setDate(1); // 设置当前日期为当月的第一天

    //算出日历的起始日期
    var diff = 1 - activeDate.getDay(); // activeDate.getDay()获取当月的第一天是周几; 星期天为 0, 星期一为 1, 以此类推。
    titl.innerHTML = activeDate.getFullYear() + '年' + (month + 1) + '月';// 顶部显示日期

    activeDate.setDate(diff);// 设置当前时间为日历的起始时间

    for (var i = 0; i < 42; i++) {
        var oLi = document.createElement('li'); //创建li
        var date = activeDate.getDate(); // 获取日历的起始日期,每循环一次向后走一天
        //当前li表示日期
        oLi.innerHTML = date;

        oLi.addEventListener('click', function () {
            _li();
            this.style.color = 'white';
            this.style.background = 'red';
            var newTime = activeDate.getFullYear() + '/' + (month + 1) + '/' + this.innerHTML;
            // console.log(new Date(newTime).toLocaleDateString() + new Date().toString().slice(15,25));
        });

        oUl.appendChild(oLi);

        if (activeDate.getMonth() !== month) { // 判断日期是否为实际当前月
            oLi.style.color = "red"; //如果不是则设置当前日期字体颜色为红色
        } else {
            if (activeDate.getFullYear() === currentdate.getFullYear() &&
                activeDate.getMonth() === currentdate.getMonth() &&
                activeDate.getDate() === currentdate.getDate()) { // 判断日期是否为当前日期
                oLi.style.background = "black";//如果是则设置当前日期为黑底白字
                oLi.style.color = "white";
            }
        }

        color.push(oLi.style.color); // 存储颜色
        background.push(oLi.style.background);

        activeDate.setDate(date + 1);//使日期往后走一天
    }
    calender.appendChild(oUl);

    function _li() {
        var lis = oUl.children;
        for (var j = 0; j < lis.length; j++) { // 将颜色初始化
            lis[j].style.color = color[j];
            lis[j].style.background = background[j];
        }
    }
}

