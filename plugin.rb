# name: Discourse Adsense
# about: Adds Adsense to Discourse
# version: 0.1
# author: DiscourseHosting.com

register_asset "javascripts/adsense.js"
register_asset "javascripts/discourse/templates/list.js.handlebars"
register_asset "javascripts/discourse/templates/topic.js.handlebars"

register_css <<CSS

.adsense {
  text-align: center;
  padding: 3px;
  margin-bottom: 10px;
}

CSS
