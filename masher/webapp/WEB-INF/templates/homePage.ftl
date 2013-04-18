<html>
<body>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script type="text/javascript">
        var animate = function() {
            $('#pacman').css('left', $('#pacman').position().left + 10);
            setTimeout(animate, 100);
        };

        $(document).ready(function() {
            setTimeout(animate, 100);
        });
    </script>

    ${remote.fetch('pacman.v1.noJquery')}

    <#-- ${remote.fetch('networkHeader.v1.light.noModuleDecorator')} -->
    <#-- ${remote.fetch('jimCarey.v1')} -->


    <#-- ${remote.fetch('newsBody.v1')} -->
    <#-- ${remote.fetch('networkFooter.v1.noModuleDecorator')} -->





</body>
</html>