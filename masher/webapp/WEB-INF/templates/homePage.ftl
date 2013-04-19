<html>
<head>
    <style type="text/css">
        #pacman_food li {
            display: inline-block;
            padding-left: 100px;
        }

        .foodball {
            padding-top: 70px;
        }
    </style>
</head>
<body>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script type="text/javascript">
        var animate_eat_news = function() {
            $('#content').replaceWith("<div style='min-height: 500px'></div>");
            $('.top-sections').remove();
            $('.bottom-sections').replaceWith("<div style='min-height: 200px'></div>");
        };

        var animate_pacman = function() {
            var news_components = ['', '', '', '', '#ad-banner-top', '.logo-and-follow-wrapper', '#site-nav', '.header-home', '.headline', '#featured-headlines', '#right-content', '#header'];
            var stop_pacman_position = 400;
            var start_pacman_position = 1000;
            var total_travel_distance = start_pacman_position + stop_pacman_position;

            $('#pacman').css('left', $('#pacman').position().left + 10);

            var current_percentage_travelled = ($('#pacman').position().left + start_pacman_position) / total_travel_distance;
            var index = Math.floor(news_components.length * current_percentage_travelled);

            if (news_components[index] && $(news_components[index]).remove) {
                $(news_components[index]).remove();
            }

            if ($('#pacman').position().left > stop_pacman_position) {
                setTimeout(animate_eat_news);
            } else {
                setTimeout(animate_pacman, 50);
            }
        };

        $(document).ready(function() {
            animate_pacman(animate_pacman, 50);
        });
    </script>

    ${remote.fetch('pacman.v1.noJquery')}

    ${remote.fetch('networkHeader.v1.light.noModuleDecorator')}
    <#-- ${remote.fetch('jimCarey.v1')} -->


    ${remote.fetch('newsBody.v1')}
    ${remote.fetch('networkFooter.v1.noModuleDecorator')}


    <div id="window" style="position:absolute; top: 264px; left: 478px; z-index: 9; width: 1000px; height: 300px; overflow: hidden">
        <ul id="pacman_food" style="width: 10000px; min-height: 1000px; background-color: green">
            <li class="foodball">${remote.fetch('yummyFood.v1')}</li>
            <li class="foodball">${remote.fetch('yummyFood.v1')}</li>
            <li class="foodball">${remote.fetch('yummyFood.v1')}</li>
            <li class="foodball">${remote.fetch('yummyFood.v1')}</li>
            <li class="foodball">${remote.fetch('yummyFood.v1')}</li>
        </ul>
    </div>

</body>
</html>