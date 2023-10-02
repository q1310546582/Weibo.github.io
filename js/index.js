
(function () {
    $('.monitor .inner .tab a').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('.monitor .inner .content').eq($(this).index()).addClass('active').siblings().removeClass('active');
    })
})();
(function () {
    // 鼠标经过暂停动画
    $('.monitor .content .marquee-view .marquee .row').on({
        mouseenter: function () {
            $('.monitor .content .marquee-view .marquee').css('animation-play-state', 'paused')
        },
        mouseout: function () {
            $('.monitor .content .marquee-view .marquee').css('animation-play-state', 'running')
        },
    })
})();

// 饼图
// (function () {
//     let pie = echarts.init(document.querySelector('.pie'));
//     option = {
//         color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
//         tooltip: {
//             trigger: 'item', // 鼠标经过item出现提示框
//             formatter: '{a} <br />{b} : {c} ({d}%)' // a表示系列名称name，b表示data的name，c表示data的value
//         },

//         series: [
//             {
//                 name: '点位分布',
//                 type: 'pie',
//                 radius: ['10%', '60%'],// 饼形图的半径，空心圆的半径，整个饼图的半径
//                 center: ['50%', '50%'], // 图表中心位置
//                 roseType: 'radius', // 每个item的展示大小，radius为半径模式
//                 itemStyle: {
//                     borderRadius: 0
//                 },
//                 data: [
//                     { value: 27913, name: '五华区' },
//                     { value: 23425, name: '盘龙区' },
//                     { value: 40731, name: '官渡区' },
//                     { value: 26257, name: '西山区' },
//                     { value: 154, name: '呈贡区' },
//                     { value: 77, name: '晋宁县' },
//                     { value: 2, name: '富民县' },
//                     { value: 1, name: '宜良县' },
//                     { value: 1968, name: '嵩明县' },
//                     { value: 323, name: '安宁市' },
//                 ],
//                 // 修饰label的大小和线的长度
//                 label: {
//                     fontSize: 10,

//                 },
//                 labelLine: {
//                     length: 6,
//                     length2: 8,
//                 }
//             }
//         ]
//     };
//     pie.setOption(option);
//     // 根据屏幕自适应饼图大小
//     window.addEventListener('resize', () => { pie.resize() })
// })();

(function () {
    let customizeItem = {
        name: '...',
        value: '1200'
        , itemStyle: {
            color: '#254065',
        },
        // 高亮属性
        emphasis: {
            itemStyle: {
                color: '#254065',
            },
        },
        tooltip: {
            // 额外的css浮层样式
            extraCssText: 'opacity:0',
        }
    }

    let bar = echarts.init(document.querySelector('.bar'));
    option = {
        tooltip: {
            trigger: 'item',

        },
        grid: {  //柱形图是通过grid修改大小
            left: '0%',
            right: '3%',
            bottom: '3%',
            top: '3%',
            containLabel: true, // 在刻度标签的时候，不会将标签顶出图表外
            show: true, // 是否显示直角坐标系的网格
            borderColor: 'rgba(0, 240, 255, 0.3)',// 网格边框的颜色
        },
        xAxis: [
            {
                type: 'category',
                data: [
                    "8-1",
                    "8-2",
                    "8-3",
                    "8-4",
                    "8-5",
                    "8-6",
                    "",
                    "......",
                    "",
                    "8-27",
                    "8-28",
                    "8-29",
                    "8-30",
                    "8-31",
                ],
                axisTick: {
                    alignWithLabel: false, // X轴标签是否对齐刻度
                    show: true, // 是否显示刻度
                },
                axisLabel: { //X轴标签设置
                    color: '#4c9bfd',// X轴文字颜色
                },
                axisLine: { // X轴线样式
                    lineStyle: {
                        color: 'rgba(0, 240, 255, 0.3)',
                        //width:
                    },
                },
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisTick: {
                    alignWithLabel: false, // X轴标签是否对齐刻度
                    show: true, // 是否显示刻度

                },
                axisLabel: { //X轴标签设置
                    color: '#4c9bfd',// 轴文字颜色
                },
                axisLine: { // X轴线样式
                    lineStyle: {
                        color: 'rgba(0, 240, 255, 0.3)',
                        //width:
                    },
                },
                splitLine: { //设置y轴分割线样式
                    lineStyle: {
                        // color 分割线颜色

                    }
                }
            }
        ],
        series: [
            {
                name: 'Direct',
                type: 'bar',
                barWidth: '60%',
                //data数组里的每一个数据都会影响item，每个data都可以为一个对象
                data: [
                    2108,
                    1859,
                    2051,
                    2096,
                    2013,
                    customizeItem,
                    customizeItem,
                    customizeItem,
                    2181,
                    2054,
                    2909,
                    1553,
                    1795,],
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: '#00fffb' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#0061ce' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                },
            }
        ]
    };
    bar.setOption(option);
    window.addEventListener('resize', () => { bar.resize() })
})();

(function () {
    let data = {
        year: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 68, 72, 24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 68, 72,],
        ],
        month: [
            [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36, 48, 69, 34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36, 48, 69,],
        ],
        week: [
            [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53, 69, 58, 43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53, 69, 58],
        ]
    };
    let line = echarts.init(document.querySelector('.line'));
    option = {
        color: ['#00f2f1', '#ed3f35'],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['发博人数'],
            left: '10%', // 距离容器右侧10%
            textStyle: { //图例文字样式
                color: '#4c9bfd'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '20%',
            containLabel: true,
            show: true,
            borderColor: 'rgba(0, 240, 255, 0.3)',// 网格边框的颜色
        },

        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: [
                "00:00",
                "01:00",
                "02:00",
                "03:00",
                "04:00",
                "05:00",
                "06:00",
                "07:00",
                "08:00",
                "09:00",
                "10:00",
                "11:00",
                "12:00",
                "13:00",
                "14:00",
                "15:00",
                "16:00",
                "17:00",
                "18:00",
                "19:00",
                "20:00",
                "21:00",
                "22:00",
                "23:00",
            ],
            axisTick: { //轴刻度样式    
                show: false, //去除刻度
            },
            axisLabel: {
                color: "#4c9fdb"
            },
            axisLine: { // X轴线样式
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)',
                },
            },
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '发博人数',
                type: 'line',
                stack: 'Total',
                data: data.year[0],
                smooth: true,
            },
        ],
        axisTick: { //轴刻度样式    
            show: false,
        },
        axisLabel: {
            color: "#4c9fdb"
        },
        splitLine: {
            lineStyle: {
                color: '#012f4a',
            }
        }
    };
    line.setOption(option);

    $('.sale a').on('click', function () {

        $(this).addClass('active').siblings('a').removeClass('active');
        let data1 = data[$(this).attr('data-type')][0]; // 第一个线的数据

        // 设置数据
        option.series[0].data = data1;
        line.setOption(option);

        // 设置当前的索引号
        index = $(this).index();
    });
    // 定时器实现自动点击
    let index = 0;
    let timer = setInterval(function () {
        $('.sale a').eq(index++).trigger('click');
        if (index == 3) {
            index = 0;
        }
    }, 2000);
    // 鼠标经过停止自动切换，离开在进行切换
    $('.sale').hover(() => { clearInterval(timer) }, () => {
        clearInterval(timer); timer = setInterval(function () {
            $('.sale a').eq(index++).trigger('click');
            if (index == 4) {
                index = 0;
            }
        }, 2000);
    })
    window.addEventListener('resize', () => { line.resize() });
})();

(function () {
    // 时间轴模块
    let currentIndex = 0;
    $('.chart .geo .timeLine a').hover(
        function () {
            $(this).children('div').addClass('current1');
            $(this).children('span').addClass('current2');
            $(this).siblings('a').children('div').removeClass('current1');
            $(this).siblings('a').children('span').removeClass('current2');

        },
        function () {
            $('.chart .geo .timeLine a').children('div').removeClass('current1');
            $('.chart .geo .timeLine a').children('span').removeClass('current2');
            $('.chart .geo .timeLine a').eq(currentIndex).children('div').addClass('current1');
            $('.chart .geo .timeLine a').eq(currentIndex).children('span').addClass('current2');
        }
    );

    // 给week连接添加点击事件
    let index = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    $('.chart .geo .timeLine a').on('click', function () {
        $('.geo IFrame').prop('src', 'week' + index[$(this).index()] + '.html');
        currentIndex = $(this).index();
    });
}());

(function () {
    let pie = echarts.init(document.querySelector('.pie'))
    // var bgPatternImg = new Image();
    // bgPatternImg.src = '/asset/get/s/data-1623324803979-ugSvPhTCK.png';
    const chartData = [
        {
            value: 53,
            name: '准确率',
        },
        {
            value: 81,
            name: '位置完整率',
        },
        {
            value: 99,
            name: '内容完整率',
        },
        {
            value: 94,
            name: '唯一率',
        },
    ];
    const colorList = [
        new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
                offset: 0,
                color: '#CA8CCA',
            },
            {
                offset: 1,
                color: '#EFA5BB',
            },
        ]),
        new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
                offset: 0,
                color: '#BFA4E4',
            },
            {
                offset: 1,
                color: '#E29CE2',
            },
        ]),
        new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
                offset: 0,
                color: '#A8AAE5',
            },
            {
                offset: 1,
                color: '#BEA3E3',
            },
        ]),
        new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
                offset: 0,
                color: '#A4D37D',
            },
            {
                offset: 1,
                color: '#E5F2A7',
            },
        ]),
    ];
    const sum = chartData.reduce((per, cur) => per + cur.value, 0);
    const gap = (1 * sum) / 100;
    const pieData1 = [];
    const pieData2 = [];
    const gapData = {
        name: '',
        value: gap,
        itemStyle: {
            color: 'transparent',
        },
    };
    for (let i = 0; i < chartData.length; i++) {
        pieData1.push({
            ...chartData[i],
            itemStyle: {
                borderRadius: 100,
                // shadowColor: '#2a2a34',
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: '#00fffb' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#0061ce' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },
                shadowBlur: 5,
                shadowOffsetY: 0,
                shadowOffsetX: 0,
                borderColor: '#2a2a34',
                borderWidth: 2,
            },
        });
        pieData1.push(gapData);

        pieData2.push({
            ...chartData[i],
            itemStyle: {
                borderRadius: 10,
                // color: colorList[i],
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: '#00fffb' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#0061ce' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },
                opacity: 0.3,
                shadowColor: '#000',
                shadowBlur: 1,
                shadowOffsetY: 5,
                shadowOffsetX: 0,
            },
        });
        pieData2.push(gapData);
    }

    pieoption = {
        tooltip: {
            trriger: 'item',
            z: 5,
            position: function (point, params, dom, rect, size) {
                dom.style.transform = 'translateZ(0)';
            }
        },
        title: [{
            text: '66.05',
            x: '43%',
            y: '30%',
            textAlign: 'center',
            textStyle: {
                fontSize: '20',
                fontWeight: '500',
                color: '#98b5d2',
                textAlign: 'center',
                textShadowColor: '#000',
                textShadowBlur: '1',
                textShadowOffsetX: 2,
                textShadowOffsetY: 2,
            },
        }, {
            text: '综合得分',
            left: '43%',
            top: '50%',
            textAlign: 'center',
            textStyle: {
                fontSize: '16',
                fontWeight: '400',
                color: "#4c9fdb",
                textAlign: 'center',
                textShadowColor: '#000',
                textShadowBlur: '1',
                textShadowOffsetX: 1,
                textShadowOffsetY: 1,
            },
        },],


        color: colorList,

        series: [
            {
                type: 'pie',
                z: 3,
                roundCap: true,
                radius: ['74%', '91%'],
                hoverAnimation: false,
                startAngle: 50,
                center: ['45%', '50%'],

                label: {
                    show: false,
                },
                labelLine: {
                    show: false,
                },
                data: pieData1,
            },
            {
                type: 'pie',
                z: 2,
                radius: ['65%', '99%'],
                hoverAnimation: false,
                startAngle: 50,
                center: ['45%', '50%'],
                label: {
                    show: false,
                },
                labelLine: {
                    show: false,
                },
                silent: true,
                data: pieData2,
            },
        ],
    };
    pie.setOption(pieoption);
    // 饼图旋转
    function rotating() {
        let pieoption = pie.getOption();

        pieoption.series[0].startAngle = pieoption.series[0].startAngle - 1;
        pieoption.series[1].startAngle = pieoption.series[1].startAngle - 1;
        pie.setOption(pieoption);
    }
    let timer;
    // 开启定时器
    function startRoatating() {
        timer = setInterval(rotating, 100);
    }
    // 停止定时器
    function stopRoatating() {
        clearInterval(timer);
    }
    setTimeout(startRoatating, 500);
    // 注册事件
    pie.on('mouseover', function (params) {
        stopRoatating();
    });

    pie.on('mouseout', function (params) {
        startRoatating();
    });
})();

(function () {
    // 1. 准备相关数据
    var hotData = [
        {
            city: "五华区", // 地区
            sales: "25, 179", // 人数
            flag: true, //  上升还是下降
            brands: [
                //  地区排名
                { name: "192...", num: "332", flag: true },
                { name: "280...", num: "240", flag: true },
                { name: "531...", num: "200", flag: false },
                { name: "291...", num: "195", flag: false },
                { name: "528...", num: "170", flag: false },
                { name: "223...", num: "163", flag: true }
            ]
        },
        {
            city: "盘龙区",
            sales: "23,252",
            flag: false,
            brands: [
                { name: "192...", num: "358", flag: false },
                { name: "510...", num: "269", flag: true },
                { name: "280...", num: "225", flag: false },
                { name: "557...", num: "214", flag: true },
                { name: "291...", num: "195", flag: false },
                { name: "134...", num: "182", flag: false }
            ]
        },
        {
            city: "官渡区",
            sales: "20,760",
            flag: true,
            brands: [
                { name: "510...", num: "310", flag: true },
                { name: "557...", num: "268", flag: true },
                { name: "291...", num: "259", flag: false },
                { name: "225...", num: "232", flag: false },
                { name: "192...", num: "210", flag: false },
                { name: "395...", num: "175", flag: true }
            ]
        },
        {
            city: "西山区",
            sales: "23,252",
            flag: false,
            brands: [
                { name: "291...", num: "295", flag: false },
                { name: "192...", num: "278", flag: true },
                { name: "510...", num: "195", flag: true },
                { name: "225...", num: "160", flag: true },
                { name: "395...", num: "130", flag: true },
                { name: "223...", num: "112", flag: false }
            ]
        },
        {
            city: "呈贡区",
            sales: "20,760",
            flag: true,
            brands: [
                { name: "291...", num: "432", flag: true },
                { name: "395...", num: "205", flag: false },
                { name: "134...", num: "138", flag: false },
                { name: "223...", num: "102", flag: true },
                { name: "192...", num: "99", flag: false },
                { name: "395...", num: "98", flag: true }
            ]
        }
    ];
    // 2.遍历对象，生成数据
    let supHTML = "";
    $.each(hotData, function (index, item) {
        supHTML += `<li style:"height">
              <span>${item.city}</span>
              <span>${item.sales}<s class="${item.flag ? 'icon-up' : 'icon-down'}"></s></span>
            </li>`
    });

    $('.sup').html(supHTML);
    // 3. 注册事件，动态添加的元素，必须通过on注册事件
    let index;
    $('.province .sup').on('mouseenter', 'li', function () {
        // 高亮显示某个item
        $(this).addClass('active')
            .siblings().removeClass('active');
        // 获取当前对象的品牌种类并添加到sub模块中
        initSub($(this).index());
        index = $(this).index();
    })

    function initSub(index_) {
        let subHTML = "";
        $.each(hotData[index_].brands, function (index, item) {
            subHTML += `<li style:"height">
              <span>${item.name}</span>
              <span>${item.num}<s class="${item.flag ? 'icon-up' : 'icon-down'}"></s></span>
            </li>`
        });
        // 直接修改HTML内容，无需删除元素实现自动更新
        $('.sub').html(subHTML);
    }
    initSub(0);
    $('.sup li').eq(0).mouseenter();
    // 4.定时器 
    index = 0;
    let timer = setInterval(function () {
        $('.sup li').eq(index).addClass('active')
            .siblings().removeClass('active');
        initSub(index++);
        if (index >= 5) {
            index = 0;
        }
    }, 2000);

    $('.sup li').hover(() => {
        clearInterval(timer);
    }, () => {
        setInterval(timer);
        timer = setInterval(function () {
            $('.sup li').eq(index).addClass('active')
                .siblings().removeClass('active');
            initSub(index++);
            if (index >= 5) {
                index = 0;
            }
        }, 2000)
    });
})();



