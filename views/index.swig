{% extends './base/base.swig' %}

{% block content %}
  <div id="desk">{{ ssrHtml }}</div>
{% endblock %}

{% block footer %}
<script src="/js/base/site.min.js"></script>
<script src="/js/rendering.min.js"></script>
{% endblock %}
