---
---

# Howdy

This is just a landing page for the stuff I host on GitHub Pages. There probably
won't ever be more here than just this. It's the links below that are cool.

{%- for section in things %}

  <thing-group>
    <h2>{{ section.group }}</h2>
    {%- if section.description %}
      <thing-group-description>{{ section.description }}</thing-group-description>
    {%- endif -%}
    <thing-container>
    {%- for thing in section.things %}
      <a-thing>
        <thing-title>
          <a href="{{ thing.url | url}}">{{ thing.name }}</a>
        </thing-title>
        {%- if thing.about %}
          <thing-description>{{ thing.about }}</thing-description>
        {%- endif -%}
      </a-thing>
    {%- endfor -%}
    </thing-container>
  </thing-group>
{%- endfor -%}
