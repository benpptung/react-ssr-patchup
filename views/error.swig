{% extends './base/base.swig' %}

{% set title = code + ' Error: ' + message %}


{% block content %}
	<h1>{{ title }}</h1>
    <p>{{ code }}</p>
    <pre>{{ error.stack }}</pre>
{% endblock %}