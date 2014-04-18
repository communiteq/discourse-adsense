discourse-adsense
=================

Google AdSense plugin for Discourse forum

Installation
============

* Run `bundle exec rake plugin:install repo=http://github.com/discoursehosting/discourse-adsense` in your discourse directory
* In development mode, run `bundle exec rake assets:clean`
* In production, recompile your assets: `bundle exec rake assets:precompile`
* Restart Discourse

* Minimum Discourse version: v0.9.9.2

Usage
=====

* Go to Admin -> Settings -> AdSense
* Enter your AdSense publisher ID (ca-pub-xxxxxxxxxxxxxxxx)
* Create new ad slots within your AdSense account (728x90 for desktop, 320x50 for mobile)
* Copy the slot id # numbers (ten digits shown in the ID column) in the Discourse settings
* Enable the slots you want to use
* Remember to watch extra whitespace at the beginning and end of each field.

* You can use the 'adsense_through_trust_level' to disable ads for users above a certain trust level. 
 - 0 only shows to users that are not logged in
 - 1 shows ads to users that are not logged in, and to new and basic users
 - 2 shows ads to regular users as well, but not to leaders and elders
 - 3 shows ads to everyone but elders
 - 4 shows ads to everyone including elders
 
License
=======

GPL v2
