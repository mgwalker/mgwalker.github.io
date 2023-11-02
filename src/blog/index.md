---
title: Blog posts
date: null
eleventyExcludeFromCollections: true
---

Hello

<ul>
{% for blog in collections.blog %}
  <li>
    <h3><a href="{{ blog.url }}">{{ blog.data.title }}</a> ({{ blog.data.date | datestamp }})</h3>
    {% if blog.data.summary %}{{ blog.data.summary }}{% endif %}
  </li>
{% endfor %}
</ul>
