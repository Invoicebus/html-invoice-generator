module.exports = function(grunt) {

  // Time how long tasks take, can help when optimizing build times
  require('time-grunt')(grunt);

  // If config.json file don't exist create one
  if(!grunt.file.exists('./config.json'))
    grunt.file.write('./config.json', '{}');


  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      options: {
        reporter: require('jshint-stylish') // use jshint-stylish to make our errors look and read good
      },
      src: ['Gruntfile.js', '<%= js_src %>']
    },

    clean: {
      build: {
        src: ['dist']
      },
      fonts:  {
        src: ['dist/fonts']
      }
    },

    concat: {
      options: {
        banner: '<%= banner %>\n'
      },
      js: {
        src: '<%= js_src %>',
        dest: '<%= build_dir %><%= build_js %>'
      }
    },

    uglify: {
      options: {
        compress: {
          drop_console: true
        },
        banner: '<%= banner %>\n'
      },
      js: {
        files: {
          '<%= build_dir %><%= build_js %>': '<%= js_src %>'
        }
      }
    },

    compass: {
      options: {
        sassDir: '<%= css_src %>',
        fontsDir: 'src/fonts',
        httpFontsPath: 'fonts',
        force: true
      },
      dev: {
        options: {
          banner: '<%= banner %>',
          specify: '<%= css_src %>/*.scss',
          cssDir: '<%= build_dir %>',
          environment: 'development'
        }
      },
      prod: {
        options: {
          banner: '<%= banner %>',
          specify: '<%= css_src %>/*.scss',
          cssDir: '<%= build_dir %>',
          environment: 'production'
        }
      },
      tpl_dev: {
        options: {
          sassDir: '<%= tpl_dir %>',
          cssDir: '<%= build_dir %>',
          environment: 'development'
        }
      },
      tpl_prod: {
        options: {
          sassDir: '<%= tpl_dir %>',
          cssDir: '<%= build_dir %>',
          environment: 'development', // Don't compress
          debugInfo: false,
          noLineComments: true
        }
      }
    },

    copy: {
      tpl: {
        src: ['<%= tpl_dir %>/*.{js,html}', 'src/libs/*.js'],
        dest: '<%= build_dir %>',
        expand: true,
        flatten: true
      },
      fonts: {
        src: ['src/fonts/*'],
        dest: '<%= build_dir %>/fonts',
        expand: true,
        flatten: true
      },
      print_css: {
        src: ['<%= tpl_dir %>/print.css'],
        dest: '<%= build_dir %>',
        expand: true,
        flatten: true
      }
    },

    replace: {
      dev: {
        options: {
          patterns: [
            {
              match: 'PATH',
              replacement: ''
            },
            {
              match: 'TRACKING',
              replacement: '<%= tracking %>'
            },
            {
              match: 'MIN',
              replacement: ''
            },
            {
              match: 'SAVE_URL',
              replacement: '<%= save_url %>'
            },
            {
              match: 'GENERATOR',
              replacement: '<%= build_js %>'
            },
            {
              match: 'SCRIPT',
              replacement: '<script src="<%= build_js %>?data=data.js"></script>\n<script src="http://localhost:35729/livereload.js"></script>'
            },
            {
              match: 'HOWTO',
              replacement: '<%= how_to %>'
            },
            {
              match: 'TPL_NOTE',
              replacement: '<%= tpl_note %>'
            }
          ]
        },
        files: [
          {
            expand: true,
            flatten: true,
            src: ['<%= build_dir %><%= build_js %>', '<%= build_dir %>*.html'],
            dest: '<%= build_dir %>'
          }
        ]
      },
      pubdev: {
        options: {
          patterns: [
            {
              match: 'PATH',
              replacement: '<%= cdn_path %>'
            },
            {
              match: 'TRACKING',
              replacement: '<%= tracking %>'
            },
            {
              match: 'MIN',
              replacement: ''
            },
            {
              match: 'SAVE_URL',
              replacement: '<%= save_url %>'
            },
            {
              match: 'GENERATOR',
              replacement: '<%= build_js %>'
            },
            {
              match: 'SCRIPT',
              replacement: '<script src="<%= cdn_path %><%= build_js %>?data=data.js"></script>'
            },
            {
              match: 'HOWTO',
              replacement: '<%= how_to %>'
            },
            {
              match: 'TPL_NOTE',
              replacement: '<%= tpl_note %>'
            }
          ]
        },
        files: [
          {
            expand: true,
            flatten: true,
            src: ['<%= build_dir %>*.js', '<%= build_dir %>*.html'],
            dest: '<%= build_dir %>'
          }
        ]
      },
      prod: {
        options: {
          patterns: [
            {
              match: 'PATH',
              replacement: ''
            },
            {
              match: 'TRACKING',
              replacement: '<%= tracking %>'
            },
            {
              match: 'MIN',
              replacement: '.min'
            },
            {
              match: 'SAVE_URL',
              replacement: '<%= save_url %>'
            },
            {
              match: 'GENERATOR',
              replacement: '<%= build_js.replace(".js", ".min.js") %>'
            },
            {
              match: 'SCRIPT',
              replacement: '<script src="<%= build_js.replace(".js", ".min.js") %>?data=data.js"></script>'
            },
            {
              match: 'HOWTO',
              replacement: '<%= how_to %>'
            },
            {
              match: 'TPL_NOTE',
              replacement: '<%= tpl_note %>'
            }
          ]
        },
        files: [
          {
            expand: true,
            flatten: true,
            src: ['<%= build_dir %><%= build_js %>', '<%= build_dir %>*.html'],
            dest: '<%= build_dir %>'
          }
        ]
      },
      pubprod: {
        options: {
          patterns: [
            {
              match: 'PATH',
              replacement: '<%= cdn_path %>'
            },
            {
              match: 'TRACKING',
              replacement: '<%= tracking %>'
            },
            {
              match: 'MIN',
              replacement: '.min'
            },
            {
              match: 'SAVE_URL',
              replacement: '<%= save_url %>'
            },
            {
              match: 'GENERATOR',
              replacement: '<%= build_js.replace(".js", ".min.js") %>'
            },
            {
              match: 'SCRIPT',
              replacement: '<script src="<%= cdn_path %><%= build_js.replace(".js", ".min.js") %>?data=data.js"></script>'
            },
            {
              match: 'HOWTO',
              replacement: '<%= how_to %>'
            },
            {
              match: 'TPL_NOTE',
              replacement: '<%= tpl_note %>'
            }
          ]
        },
        files: [
          {
            expand: true,
            flatten: true,
            src: ['<%= build_dir %>*.js', '<%= build_dir %>*.html'],
            dest: '<%= build_dir %>'
          }
        ]
      },
      tpl: {
        options: {
          patterns: [
            {
              match: 'TPL_NOTE',
              replacement: '<%= tpl_note %>'
            },
            {
              match: 'SCRIPT',
              replacement: '<script src="<%= cdn_path %><%= build_js.replace(".js", ".min.js") %>?data=data.js"></script>'
            }
          ]
        },
        files: [
          {
            expand: true,
            flatten: true,
            src: ['<%= build_dir %>*.html'],
            dest: '<%= build_dir %>'
          }
        ]
      }
    },

    rename: {
      prod: {
        files: [
          {
            src: ['<%= build_dir %><%= build_js %>'],
            dest: '<%= build_dir %><%= build_js.replace(".js", ".min.js") %>'
          },
          {
            src: ['<%= build_dir %><%= build_css %>'],
            dest: '<%= build_dir %><%= build_css.replace(".css", ".min.css") %>'
          }
        ]
      }
    },

    compress: {
      tpl: {
        options: {
          level: 9,
          archive: '<%= build_dir %>template.zip'
        },
        files: [
          {
            src: ['template.html', 'template.css', 'data.js', 'fonts/{opensans-*,LICENSES}'],
            cwd: '<%= build_dir %>',
            filter: 'isFile',
            expand: true
          }
        ]
      },
      gen: {
        options: {
          level: 9,
          archive: '<%= build_dir %>generator.zip'
        },
        files: [
          {
            src: ['bootstrap.*', 'generator.*', 'jquery.*', 'fonts/*'],
            cwd: '<%= build_dir %>',
            filter: 'isFile',
            expand: true
          }
        ]
      }
    },

    // Used for uploading final version on CloudFiles CDN
    cloudfiles: {
      // In config.json add JSON object as described at https://github.com/rtgibbons/grunt-cloudfiles
      publish: grunt.file.readJSON('config.json')
    },

    watch: {
      gruntfile: {
        files: 'Gruntfile.js',
        tasks: ['dev']
      },
      js: {
        files: ['<%= js_src %>', 'docs/<%= doc_file %>'],
        tasks: ['jshint', 'concat:js', 'replace:dev']
      },
      css: {
        files: '<%= css_src %>/**/*',
        tasks: ['compass:dev']
      },
      tpl_html: {
        files: '<%= tpl_dir %>/*.html',
        tasks: ['replace:dev']
      },
      tpl_js: {
        files: '<%= tpl_dir %>/*.js',
        tasks: ['copy:tpl']
      },
      tpl_css: {
        files: '<%= tpl_dir %>/*.scss',
        tasks: ['compass:tpl_dev']
      },
      livereload: {
        options: {
          livereload: true
        },
        files: ['src/**/*', 'docs/<%= doc_file %>'],
      }
    },

    banner: '/*! <%= pkg.description %> @author: <%= pkg.author.name %> @email: <%= pkg.author.email %> @web: <%= pkg.author.web %> @version: <%= pkg.version %> @updated: <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %> @license: <%= pkg.license %> */',
    tpl_note: '<!--\n  Invoice template by invoicebus.com\n  To customize this template consider following this guide https://invoicebus.com/how-to-create-invoice-template/\n  This template is under The MIT License\n-->',
    how_to: grunt.file.read('docs/how-to.html').replace(/\n/g, ' ').replace(/'/g, "\\'"),

    js_src: ['src/js/<%= build_js %>', 'src/js/table-dnd.js', 'src/js/bootstrap-datepicker.js', 'src/js/bootstrap3-typeahead.js'],
    css_src: 'src/sass',

    build_js: 'generator.js',
    build_css: 'generator.css',

    build_dir: 'dist/',

    tpl_dir: 'src/template',

    doc_file: 'how-to.html',

    cdn_path: 'http://cdn.invoicebus.com/generator/',
    tracking: '?utm_source=generator&utm_medium=template&utm_campaign=invoicebus_templates',
    save_url: 'https://invoicebus.com/saveinvoice/'

  });

  // Load the plugins that provides the tasks.
  require('load-grunt-tasks')(grunt);


  // Dev build task.
  grunt.registerTask('dev', ['clean', 'jshint', 'concat:js', 'compass:dev', 'compass:tpl_dev', 'copy:tpl', 'replace:dev', 'copy:fonts']);

  // Prod build task.
  grunt.registerTask('prod', ['clean', 'jshint', 'uglify:js', 'compass:prod', 'compass:tpl_prod', 'copy:tpl', 'replace:prod', 'rename:prod', 'copy:fonts']);
  

  // Publish to CloudFiles CDN
  grunt.registerTask('pub', [
    'clean',

    'copy:fonts',

    'jshint',

    'uglify:js',
    'compass:prod',
    'compass:tpl_prod',
    'copy:tpl',
    'replace:prod',
    'rename:prod',

    'compress:gen',

    'uglify:js',
    'compass:prod',
    'compass:tpl_prod',
    'copy:tpl',
    'replace:pubprod',
    'rename:prod',

    'compress:tpl',

    'concat:js',
    'compass:dev',
    'replace:pubdev',
    
    'copy:print_css',

    // Fonts shouldn't be uploaded everytime,
    // so if there are changes upload them manually and
    // set header 'Access-Control-Allow-Origin': * to all font files
    // and proper 'Content-Type' header
    'clean:fonts',

    'cloudfiles:publish'
  ]);


  // Default task(s).
  grunt.registerTask('default', ['dev', 'watch']);

};
