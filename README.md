# discourse-adsense

Google AdSense plugin for Discourse forum

## Installation

* Supported Discourse version: v1.2

### Non-docker installation

* Run `bundle exec rake plugin:install repo=http://github.com/discoursehosting/discourse-adsense` in your discourse directory
* In development mode, run `bundle exec rake assets:clean`
* In production, recompile your assets: `bundle exec rake assets:precompile`
* Restart Discourse

### Docker installation

As seen in a [how-to on meta.discourse.org](https://meta.discourse.org/t/advanced-troubleshooting-with-docker/15927#Example:%20Install%20a%20plugin), simply **add the plugin's repo url to your container's app.yml file**:

```yml
hooks:
  after_code:
    - exec:
        cd: $home/plugins
        cmd:
          - mkdir -p plugins
          - git clone https://github.com/discourse/docker_manager.git
          - git clone https://github.com/tcreativo/plugin_discourse_dynamic_sidebar.git
          - git clone https://github.com/discoursehosting/discourse-adsense.git
```
* Rebuild the container

```
cd /var/docker
git pull
./launcher rebuild app
```


## Usage

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
 
## License

GPL v2
