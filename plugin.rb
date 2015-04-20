# name: Discourse Adsense
# about: Adds Adsense to Discourse
# version: 1.3.0
# author: DiscourseHosting.com
# url: https://www.github.com/discoursehosting/discourse-adsense
# Supported Discourse version: v1.3

register_asset "javascripts/adsense.js"

register_css <<CSS

.adsense {
  text-align: center;
  padding: 3px;
  margin-bottom: 10px;
}

CSS
