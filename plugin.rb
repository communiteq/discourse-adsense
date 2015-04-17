# name: Discourse Adsense
# about: Adds Adsense to Discourse
# version: 1.3.0
# author: DiscourseHosting.com
# url: https://www.github.com/discoursehosting/discourse-adsense
# Supported Discourse version: v1.3

register_asset "javascripts/adsense.js"
register_asset "javascripts/discourse/templates/connectors/discovery-list-container-top/discovery-list-container-top.hbs"
register_asset "javascripts/discourse/templates/connectors/topic-above-post-stream/topic-above-post-stream.hbs"
register_asset "javascripts/discourse/templates/connectors/topic-above-suggested/topic-above-suggested.hbs"

register_css <<CSS

.adsense {
  text-align: center;
  padding: 3px;
  margin-bottom: 10px;
}

CSS
