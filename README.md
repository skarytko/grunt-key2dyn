# grunt-key2dyn

> A grunt task for converting Keynote scripts to Dynatrace Synethic scripts.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-key2dyn --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-key2dyn');
```

## The "key2dyn" task

### Overview
In your project's Gruntfile, add a section named `key2dyn` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  key2dyn: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.format
Type: `String`
Default value: `'json'`

A string value that is used determine the file format of the Dynatrace Sythetic script output.  Only other options is `'gsl'` to convert the script into .gsl format.

### Usage Examples

#### Default Options

```js
grunt.initConfig({
  key2dyn: {
    options: {},
    files: {
      'dest/dynatrace_scripts/': ['src/**/*.kht', 'src/**/*.krs'],
    },
  },
});
```

#### Custom Options

```js
grunt.initConfig({
  key2dyn: {
    options: {
			format: 'gsl',
		},
    files: {
      'dest/dynatrace_scripts/': ['src/**/*.kht', 'src/**/*.krs'],
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
