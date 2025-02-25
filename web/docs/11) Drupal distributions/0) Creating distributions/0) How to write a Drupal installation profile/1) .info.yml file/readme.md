The _profilename_.info.yml file should look similar to this:

```yaml
name: Profile Name
type: profile
description: 'Description of your profile.'
core_version_requirement: '^8.8 || ^9'

# Optional: Declare your installation profile as a distribution
# This will make the installer auto-select this installation profile.
# The distribution_name property is used in the installer and other places as
# a label for the software being installed.
distribution:
  name: Distribution Name
  # If you want your distribution to pre-select a language you can specify
  # the language code, as well. This will prevent the user from selecting
  # a language code in the user interface. While not recommended for generic
  # community distributions, this can be very useful for distributions that
  # are tailored to a language-specific audience (for example government
  # institutions in a certain country) but also site-specific installation
  # profiles. Note that this language code will also be used when installing
  # the site via Drush.
  #
  # To set your theme as the theme for the distribution installation uncomment the following:
  #
  # install:
  #   theme: my_theme
  #   # To redirect to specific URL after profile installation set your finish_url: 
  #   finish_url: ?welcome=1
  langcode: de

# Modules to install to support the profile.
install:
  - history
  - block_content
  - breakpoint
  - color
  - config
  - comment
  - contextual
  - contact
  - quickedit
  - help
  - image
  - options
  - path
  - taxonomy
  - dblog
  - search
  - shortcut
  - toolbar
  - field_ui
  - file
  - rdf
  - views
  - views_ui
  - editor
  - ckeditor

# Required modules
# Note that any dependencies of the modules listed here will be installed automatically.
dependencies:
  - node
  - block
  - views

# List any themes that should be installed as part of the profile installation.
# Note that this will not set any theme as the default theme.
themes:
  - bartik
  - seven

```