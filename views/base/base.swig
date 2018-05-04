<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style id="ssrCss">{{ ssrCss }}</style>
    <title>{{ title }}</title>

    {% block header %}{% endblock %}
</head>
<body>
{% block content %}{% endblock %}

<!-- start of javascript: All of the js should be placed after this so they are at the end of the document-->
<!-- ========================================= -->
{% block footer %}{% endblock %}
</body>
</html>
