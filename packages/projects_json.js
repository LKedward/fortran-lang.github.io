---
layout: null
---

projects = [
      {% for project in site.data.package_index%}
        {
          "name": "{{ project.name }}",
          "description": "{{ project.description }}",
          "github": "{{ project.github }}",
          "url": "{{ project.url }}",
          "categories": "{{ project.categories }}",
          "tags": "{{ project.tags }}",
          "license": "{{ project.license }}"
        },
      {% endfor %}
    ]