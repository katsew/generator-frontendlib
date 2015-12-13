'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the glorious ' + chalk.red('generator-frontendlib') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'library name',
      default: this.appname
    }, {
      type: 'input',
      name: 'description',
      message: 'description',
      default: ''
    }, {
      type: 'input',
      name: 'author',
      message: 'author',
      default: ''
    }, {
      type: 'list',
      name: 'license',
      message: 'License',
      choices: ['MIT', 'Apache v2 License', 'GPL v2', 'LGPL v3', 'none'],
      default: 'MIT'
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: function () {


    this.fs.copy(
      this.templatePath('_.editorconfig'),
      this.destinationPath('.editorconfig')
    );
    this.fs.copy(
      this.templatePath('_.gitignore'),
      this.destinationPath('.gitignore')
    );
    this.fs.copy(
      this.templatePath('_.travis.yml'),
      this.destinationPath('.travis.yml')
    );
    this.fs.copy(
      this.templatePath('circle.yml'),
      this.destinationPath('circle.yml')
    );

    this.fs.copy(
      this.templatePath('index.js'),
      this.destinationPath('index.js')
    );
    this.fs.copy(
      this.templatePath('lib'),
      this.destinationPath('lib')
    );
    this.fs.copy(
      this.templatePath('test'),
      this.destinationPath('test')
    );

    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('_README.md'),
      this.destinationPath('README.md'),
      this.props
    );
  },

  install: function () {
    this.installDependencies({
      bower: false
    });
  }
});
