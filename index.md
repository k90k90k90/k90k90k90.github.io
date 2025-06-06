---
layout: home
title: Home
---

## Welcome Back to My Jekyll Blog!

Here you'll find my latest thoughts and posts.

### Blog Posts
<ul class="post-list">
  {% for post in site.posts %}
    <li>
      <h2>
        <a class="post-link" href="{{ post.url | relative_url }}">
          {{ post.title | escape }}
        </a>
      </h2>
      <span class="post-meta">{{ post.date | date: site.minima.date_format }}</span>
      {% if site.show_excerpts %}
        {{ post.excerpt }}
      {% endif %}
    </li>
  {% endfor %}
</ul>

<p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | relative_url }}">via RSS</a></p>
