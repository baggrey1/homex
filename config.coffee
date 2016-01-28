exports.config =
  # See docs at https://github.com/brunch/brunch/blob/stable/docs/config.md.
  conventions:
    assets:  /^src\/assets\//
    ignored: /^(.*?\/)?[_]\w*/
  modules:
    definition: false
    wrapper: false
  paths:
    public: '_public'
    watched: ['src']
  files:
    javascripts:
      joinTo:
        'js/app.js': /^src/
        'js/vendor.js': /^(bower_components|vendor)/

    stylesheets:
      joinTo:
        'css/app.css': /^(src|vendor|bower_components)/
      order:
        before: [
          'app/styles/app.less'
        ]

    templates:
      joinTo: {
        'js/templates.js': /^src/
      },
      order: {
        before: ['src/app.js']
      }

  # Enable or disable minifying of result js / css files.
  # minify: true