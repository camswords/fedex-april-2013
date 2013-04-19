<html>
<body>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script type="text/javascript">
        var animate_pacman = function() {
            $('#pacman').css('left', $('#pacman').position().left + 10);

            if ($('#pacman').position().left > 400 && $('#pacman').position().left < 450) {
                
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

</body>
</html>