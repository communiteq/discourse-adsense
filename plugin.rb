# name: Discourse Adsense
# about: Adds Adsense to Discourse
# version: 1.1
# author: DiscourseHosting.com
# minimum Discourse version: v1.1

register_asset "javascripts/adsense.js"
register_asset "javascripts/discourse/templates/discovery.hbs"
register_asset "javascripts/discourse/templates/topic.hbs"

register_css <<CSS

.adsense {
  text-align: center;
  padding: 3px;
  margin-bottom: 10px;
}

CSS
