# Tyson

Simple minimal photo gallery website

- Jekyll
- Slick Slider
- jQuery

Pretty cool looping through directories of images. Take look here are at the homepage for example.

```html
<div class="container content">
    <section>
        <div class="blocks clear">
            {% assign sorted = site.category | sort: 'order' %}
            {% for page in sorted %}
                <a class="block" href="{{ page.url }}">
                    {% for image in site.static_files %}
                        {% if image.path contains page.image-slider-path %}
                            <img src="{{ site.baseurl }}{{ image.path }}" alt="image" />
                        {% endif %}
                    {% endfor %}
                    <div class="inner">
                <h4 class="page-sub-title">{{ page.category }}</h4>
            </div>
        </a> {% endfor %}
        </div>
    </section>
</div>
```
The following code loops through each category variables. The order of the blocks listen to a order variable on each page which handy for moving stuff around. Each page has path variable to the specific thumbnail directory so when we run a for loop it snags the needed data to populate all the images dynamically. Take a look at how it turned out [https://tysoncrockett.com](Homepage)