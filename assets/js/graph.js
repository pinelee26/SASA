var tested = 0;

$(function () { 
    $('#container').highcharts({
        colors: ['#2ecc71', '#e74c3c', '#3498db', '#9b59b6', '#f1c40f'],
        
        chart: {
            type: 'bar',
            backgroundColor: 'rgba(236, 240, 241, 0)'
        },
        title: {
            text: 'Income sources in 2014'
        },
        xAxis: {
            categories: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4']
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [{
            name: 'Outsourced work',
            data: [12525, 5000, 16000, 13500]
        }, 
        {
            name: 'AnalyticsPro subscriptions',
            data: [3000, 3500, 3450, 3550]
        }, 
        {
            name: 'Twitterly subscriptions',
            data: [2535, 2700, 2650, 2705]
        },
        {
            name: 'Affiliate hosting sales',
            data: [2200, 4000, 2050, 2000]
        }, 
        {
            name: 'ThemeForest sales',
            data: [10525, 8600, 5030, 7000]
        }
        ]
    });
});


$(".codepen-comment").click(function(){
    if (tested===0){
        html = "<div class='media'>\
                        <a class='pull-left' href='#'>\
                            <img class='media-object' src='http://placehold.it/72.png/e74c3c/fff' alt='Media Object'>\
                        </a>\
                        <div class='media-body'>\
                            <h4 class='media-heading'>It's you! <span class='badge'>CodePen User</span></h4>\
                            <p>Check this out, click on the add comment button below!</p>\
                            <p><span class='add-comment codepen-comment'><span class='glyphicon glyphicon-plus' aria-hidden='true'></span> Add comment</span></p>\
                        </div>\
                    </div>";
        $(".codepen-target").append(html);
        tested=1;
    }
});