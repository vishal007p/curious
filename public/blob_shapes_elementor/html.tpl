<div id="{{uc_id}}_justification" class="ue-blob-wrapper">
<div id="{{uc_id}}_size" class="ue_blob_inside">
    {% if enable_link == "true" %}
<a href="{{link}}" {{link_html_attributes|raw}} style="display:block;"> 
{% endif %}	
    <div id="{{uc_id}}" style="background-image:url({{image}})" class="blob" ></div>
    <div class="ue-blob-text-holder">
  		 {% if show_title == "true" %}<div class="ue-blob-title">{{title|raw}}</div>{% endif %}
         {% if show_text == "true" %}<div  class="ue-blob-text">{{text|raw}}</div>{% endif %}
    </div>
  {% if enable_link == "true" %}
</a>
{% endif %}
  </div>
</div>