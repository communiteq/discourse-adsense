discourse-adsense
=================

Google AdSense plugin for Discourse forum

Installation
============

* Run `bundle exec rake plugin:install repo=http://github.com/discoursehosting/discourse-adsense` in your discourse directory
* In development mode, run `bundle exec rake assets:clean`
* In production, recompile your assets: `bundle exec rake assets:precompile`
* Restart Discourse

* Minimum Discourse version: v0.9.8.5

Usage
=====

* Go to Admin -> Settings -> AdSense
* Enter your AdSense publisher ID (ca-pub-xxxxxxxxxxxxxxxx)
* Create new ad slots within your AdSense account (728x90 for desktop, 320x50 for mobile)
* Copy the slot id # numbers (ten digits shown in the ID column) in the Discourse settings
* Enable the slots you want to use

License
=======

GPL v2
