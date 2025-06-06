---
layout: home
title: Home
---

## Welcome to My Blog!

Here you'll find my latest thoughts and posts.

### Blog Posts
<ul>
  {% for post in site.posts %}
    <li>
      <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      <p class="post-meta">{{ post.date | date: site.minima.date_format }}</p>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>
