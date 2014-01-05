discourse-adsense
=================

Google AdSense plugin for Discourse forum

Installation
============

* Run `rake plugin:install repo=http://github.com/discourse/discourse-adsense` in your discourse directory
* In development mode, run `rake assets:clean`
* In production, recompile your assets: `rake assets:precompile`

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
