/*
 * grunt-key2dyn
 * https://github.com/stefankarytko/grunt-key2dyn
 *
 * Copyright (c) 2015 Stefan Karytko
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks
	
	var path = require('path');
	var key2dyn = require('key2dyn');

  grunt.registerMultiTask('key2dyn', 'A grunt task for converting Keynote scripts to Dynatrace Synethic scripts.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
			format: 'json'
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      f.src.filter(function(filepath) {
				
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.error('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).forEach(function(filepath) {
				// get basename
				var basename = path.basename(filepath, path.extname(filepath));
				
        // Read file source.
        var src = grunt.file.read(filepath);
			
				
				key2dyn.parseXMLScript(src, function(err, result) {
					if (err) {
						grunt.log.warn('Failed to parse "' + filepath);
						return false;
					}
				
					// convert script
					var script = key2dyn.convertScript(result);
					
					var destFilepath = '';
					var filename = '';
					var contents = '';
				
					if (options.format === 'gsl') {
						contents = key2dyn.gslify(script);
						filename = basename + '.gsl';
					} else {
						contents = JSON.stringify(script);
						filename = basename + '.json';
					}

					if (!grunt.file.exists(f.dest)) {
	          grunt.file.mkdir(f.dest);
	        }
					
					// write file
					grunt.file.write(f.dest + filename, contents);
					
					// Print a success message.
					grunt.log.writeln('File "' + f.dest + filename + '" created.');
				});
      });
		
    });
  });

};
