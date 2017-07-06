# SASSKIT

A-kit is a boilerplate for the A-stad platform and A-stad applications. It contains a large number of predefined components, variables and classes which can be used within an A-Stad environment.

All components and variables are beautifully displayed in a styleguide which can be found [here](https://stijlgids.dev.dcs.antwerpen.be/).

## Installation

### Requirements

The usage of this guide requires an installation of [Node](http://nodejs.org/), [Bower](http://bower.io/) and [Grunt](http://gruntjs.com/).

Normally all requirements mentioned above, were installed within your Vagrant setup.

If you want to run the sasskit outside of Vagrant, make sure you have the requirements installed. If you already have them installed go directly to [setup](#setup).
Otherwise follow these steps first:

1. Download and install [Node](http://nodejs.org/). **Pro tip**: You can install Node with [Homebrew](http://brew.sh/) as well;
2. Install Bower by following this [guide](http://bower.io/#install-bower);
3. Install Grunt by following this [guide](http://gruntjs.com/getting-started);

#### Setup

1. Create a new folder in your projects folder and clone the following repository in it:
[sasskit_bower_scss](https://stash.antwerpen.be/projects/ASTAD/repos/sasskit_bower_scss/browse);
2. Open your Terminal;
3. Go to your sasskit_bower_scss folder;
4. Run `npm install` to install all Node modules;
if you get an error you may not be connected to the 'private-mobile` network;
5. Run `bower install` to install all Bower packages;
6. Go to the documentation folder and run `bower install` to install the remaining Bower packages;
7. Run `npm install -g nodemon`;
8. Run `nodemon` to run locally;

##### You're done!

Now go to `http://www.astad.vagrant:3080/` to watch the A-kit styleguide and stylekit.

### File Structure

```
sasskit_bower_scss
|
├── dist (1)
│
├── documentation (2)
│
└── src (3)
    │
    ├── api (4)
    │
    ├── base (5)
    │
    ├── components (6)
    │
    ├── fonts (7)
    │
    ├── helpers (8)
    │
    ├── img (9)
    │
    ├── print (10)
    │
    └── svg_icons (11)

```

1. Includes all the files that we want to make available when we import this bower component into an other app. When using the `grunt-publish`-task, we take the .scss-files from the src folder and copy them in this dist(ribution) folder. Don't make changes in this folder. They will be overwritten when a publish task is done.

2. Includes all the templates, images, fonts, stylesheets and scripts which we need for the visualization of our styleguide.

3. Includes all the .scss-files which define the styling of the styleguide. These files include the general styling which will be distributed between other apps. If you want to add or edit something to this style, make sure to do it here and not in the dist(ribution) folder, because that folder will be overwritten with these files when a `grunt-publish`-task is done.

4. A collection of variables, functions and mixins we want to reuse throughout our stylesheets and make available to the outside. If you want to store things like colors, font stacks, groups of CSS declarations and so on, this is the right place.

5. Default styling for all general HTML elements like `<html>`, `<body>`, `<ul>`, `<li>`, `<table>`, `<button>`, and so on, are defined here.

6. A collection of reusable components built to provide highlights, alerts, backgrounds, panels, and much more.

7. A collection of predefined fonts which are used within A-Stad: Antwerpen, Antwerpen Tall, Sun and its many variations and Font Awesome.

8. A collection of CSS helper classes that can be used to reduce the amount of CSS that can be added every time you need to add a new module or elements.

9. Some important images which are used in default formfields.

10. Default styling for media print output.

11. Collection of extra, multi colored icons which aren't available in Font Awesome.

### Grunt

The sasskit_bower_scss repository consists of a gruntfile.js which contains a few very useful and important Grunt tasks. Make sure you know what they do, before using them.

#### Grunt Watch

There are many **.scss**-files within the sasskit_bower_scss repository. All these files are compiled to one **.css**-file, called **sasskit_bower_scss.css**. This file provides all the styles for our styleguide.

When you're making adjustments to a **.scss-file** make sure that grunt is watching these .scss-files. This can be done by running `grunt watch` in your sass kit-folder.

```
$ cd `/path-to-sasskit-folder`
$ grunt watch

```

Grunt will now start watching all you're files.


```
Running "watch" task
Waiting...

```

Every time you change and save a .scss-file, Grunt will notice this change and automatically update the sasskit.css-file.

**Note**: Don't forget to commit the sasskit.css-file, along with your adjusted .scss-files, as well. Otherwise your companions won't see the updated styleguide.

#### Grunt Sasslint

Describing how and why code should be written is a key element in keeping this codebase clean, scalable and easily maintainable. That's why we implemented a set of Sass rules to which our code should validate. These rules can be found in **.sass-lint.yml**, which is located in the root of the sasskit_bower_scss repository, or in the **guidelines section** below.

Grunt watch will trigger a task called **sasslint** which scans all .scss-files and will flag all suspicious usage of Sass. The output of this task is a list which contains all Sasslint warnings and errors.

```
src/folder/_style.scss
    33:24   warning     [description]   [keyword]
    38:33   error       [description]   [keyword]
    39:22   warning     [description]   [keyword]
    47:24   error       [description]   [keyword]
    ...     ...         ...             ...

```

**Important**: It's required to fix all detected warnings and errors. In this way all .scss-files stay clean, consistent and performant.

#### Grunt Publish

If you've done all your changes and all your Sass is valid, than we need to update the dist directory. If you don't do so, your changes won't be available for other apps.

To update the dist directory just run `grunt publish` in your sasskit-folder.

```
$ cd `/path-to-sasskit-folder`
$ grunt publish

```

This command will trigger three tasks: a **clean**-task, a **copy**-task and a **bump**-task. The first task will clean/remove all files from the current dist directory. The second task will copy all the updated files in the src directory back into the empty dist folder. Finally, the third task will bump the version property in package.json and bower.json.


```
Running "clean:build" (clean) task
>> 1 path cleaned.

Running "webfont:extends" (webfont) task
Font antwerpen_icons_extends wasn’t changed since last run.

Running "webfont:icons" (webfont) task
Font antwerpen_icons wasn’t changed since last run.

Running "sass:dist" (sass) task

Running "sass:print" (sass) task

Running "postcss:dist" (postcss) task
>> 2 processed stylesheets created.

Running "iconfont-catalog" task

Running "copy:fontawesome" (copy) task
Copied 6 files

Running "copy:fonts" (copy) task
Copied 76 files

Running "copy:api_scss" (copy) task
Copied 10 files

Running "copy:components_scss" (copy) task
Copied 23 files

Running "copy:helpers_scss" (copy) task
Copied 4 files

Running "copy:images" (copy) task
Copied 2 files

Running "bump:patch" (bump) task
md
>> Version bumped to 2.3.15 (in package.json)
md
>> Version bumped to 2.3.15 (in bower.json)

Done, without errors.
```

**Note**: **Patch**, **minor** or **major** version bumps can be done as shown below:

```
$ grunt publish
>> Version bumped to 0.0.2

$ grunt publish --bump=patch
>> Version bumped to 0.0.3

$ grunt publish --bump=minor
>> Version bumped to 0.1.0

$ grunt publish --bump=major
>> Version bumped to 1.0.0

...
```

#### Grunt iconfont

This will generate an icon font from the svg's in the folder **/src/svg_icons**

The task uses **grunt-webfont** which can use the **node** or the **fontforge** engine.
By default it uses the fontforge engine. We also use the fontforge engine because when we use the node engine the icons gets rounded out too much.

##### Fontforge installation

Fontforge has no node or bower package so you have to install it manually. Check https://github.com/sapegin/grunt-webfont#installation for more info about installing fontforge.

    Note: it's best to run `brew update` before following the install guide above

When you use `grunt iconfont` the files in svg\_icons will be converted into a font named **antwerpen\_icons** which will be placed in the folder **/src/fonts/**
A scss file will be generated with matching class names.

**a-card.svg** will generate the class below:

```
.icon-a-card:before {
    content:"\f101";
}
```

### Git

Now you've generated a new dist folder and bumped the version we need to create a new tag in Git. Git has the ability to tag specific points in history as being important. We use this functionality to mark our release points (v1.0.0, and so on). Creating a tag is fairly easy. Just use following command.

```
$ git tag -a v1.0.0 -m "v1.0.0"

```
**Note**: Make sure your version resembles with the version in
your **package.json** and **bower.json**.

Don't forget to run `bower update` in the UI app. This will update the installed packages, including the sasskit package, to their newest version according to bower.json.

## Code Guidelines

This is a list of code guidelines which are validated by the sasslint grunt task.

##### Border Zero

Use `border: 0;` instead of `border: none;` when specifying a zero border value.

##### Brace Style

Put brace on the same line as its selector, function, mixin, etc.

```
// GOOD
.foo {
    content: 'foo';
}
```

```
// BAD
.foo
{
    content: 'foo';
}
```

##### Class Name Format

Class names should always be hyphenated and lowercased.

```
// GOOD
.hyphenated-lowercase {
    content: '';
}
```

```
// BAD
.HYPHENATED-UPPERCASE {
    content: '';
}

.camelCase {
    content: '';

    @extend .snake_case;
}
```

##### Empty Line Between Blocks

Always include an enter between the last non-comment declaration in nested blocks.

```
// GOOD
.foo {
    content: 'foo';

    // Waldo
    .bar {
        content: 'bar';
    }
}
```

```
// BAD
.foo {
    content: 'foo';
    // Waldo
    .bar {
        content: 'bar';
    }
}
```

##### Extends Before Declarations

Extends should always been written before declarations.

```
// GOOD
.foo {
    @extend %bar;
    content: 'baz';
}
```

```
// BAD
.foo {
    content: 'baz';
    @extend %bar;
}
```

##### Extends Before Mixins

Extends should always been written before mixins.

```
// GOOD
.foo {
    @extend %bar;
    @include baz;
}
```

```
// BAD
.foo {
    @include baz;
    @extend %bar;
}
```

##### Hex Length

Always write hexadecimal values as short as possible.

```
// GOOD
.baz {
    color: #FFF;
}
```

```
// BAD
.baz {
    color: #FFFFFF;
}
```

##### Hex Notation

Hexadecimal values should always be uppercased.

```
// GOOD
.baz {
    color: #FFF;
}
```

```
// BAD
.baz {
    color: #fff;
}
```

##### Indentation

Always use an indentation size of 4 spaces.

##### Leading Zero

Decimal numbers should not contain a leading zero.

```
// GOOD
.baz {
    font-size: .5em;
}
```

```
// BAD
.baz {
    font-size: 0.5em;
}
```

##### Mixin Name Format

Mixins should always be hyphenated and lowercased.

```
// GOOD
@mixin hyphenated-lowercase() {
    content: '';
}
```

```
// BAD
@mixin HYPHENATED-UPPERCASE() {
    content: '';
}

@mixin _camelCaseWithLeadingUnderscore() {
    content: '';
}

.foo {
    @include snake_case();
}
```

##### Mixins Before Declarations

Mixins should always been written before declarations.

```
// GOOD
.baz {
    @include bar;
    content: 'baz';
}
```

```
// BAD
.baz {
    content: 'baz';
    @include bar;
}
```

##### Nesting Depth

Selector shouldn't be nested more dan 4 times.

```
// BAD
.foo {
    .bar {
        .baz {
            &:hover {
              // Deepest Nest Allowed
            }
        }
    }
}
```

##### No Color Keywords

Use hexadecimal color values rather than literals.

```
// GOOD
.foo {
    color: #ff0000;
}
```

```
// BAD
.foo {
    color: red;
}
```

##### No Debug

@debug statements are not allowed to be used.

```
// BAD
@debug 'foo';
```

##### No Duplicate Properties

Duplicate properties are not allowed within the same block.

```
// BAD
.foo {
    margin: 0 0 15px;
    margin: 0;
}
```

##### No Empty Rulesets

Rulesets shouldn't be empty.

```
// BAD
.foo {

}

.bar {
  content: 'baz';

  .qux {}
}

.waldo {}
```

##### No Important

!important is not allowed to be used.

```
// BAD
.foo {
    content: 'bar' !important;
}
```

##### No Invalid Hex

Invalid hexadecimal values are not allowed to be used.

```
// BAD
$invalid-long: #1234567;
$invalid-med: #1234;
$invalid-short: #12;
$invalid-letters-long: #abcdefg;
$invalid-letters-med: #abcd;
$invalid-letters-short: #ab;
$invalid-mixed-long: #1bcdefg;
$invalid-mixed-med: #1bcd;
$invalid-mixed-short: #1b;
$invalid-mixed-letters-long: #abcdef7;
$invalid-mixed-letters-med: #abc4;
$invalid-mixed-letters-short: #a1;
```

##### No Mergeable Selectors

Selectors should be merged rather than be repeated.

```
// GOOD
.foo {
    content: 'bar';
    color: red;
}
```

```
// BAD
.foo {
    content: 'bar';
}

// DUPLICATE SELECTOR
.foo {
    color: red;
}
```

##### No Misspelled Properties

Always use correct spelling of CSS properties and try to prevent the use of unknown CSS properties.

```
// INCORRECT SPELLING
.foo {
    borders: 0;
}

// UNKNOWN PROPERTY
.bar {
    border-right-left: 0;
}
```

##### No Trailing Zero

Trailing zeros are not allowed.

```
// GOOD
.foo {
  margin: 1.5rem;
}

.foo {
  margin: .5rem;
}
```

```
// BAD
.foo {
  margin: 1.500rem;
}

.foo {
  margin: .500rem;
}
```

##### No Transition All

The keyword all can't be used with the transition or transition-property property.

```
// BAD
.foo {
  transition: all 2s;
}

.bar {
  transition-property: all 2s;
}
```

##### No Warn

@warn statements are not allowed to be used.

```
// BAD
@warn 'foo';
```

##### One Declaration Per Line

New declarations must begin on new lines.

```
// GOOD
.foo {
    content: 'baz';
    content: 'qux';
}
```

```
// BAD
.foo {content: 'baz', content: 'qux'};

.foo {
    content: 'baz'; content: 'qux';
}
```

##### Placeholder In Extend

Extends should include placeholder selectors.

```
// GOOD
.foo {
    @extend %bar;
}
```

```
// BAD
.foo {
    @extend .bar;
}
```

##### Property Units

The use of following property units are allowed: `['em', 'px', 'rem']`

```

##### Quotes

Double quotes should be used for all strings.

```
// GOOD
.foo {
    content: "bar";
}
```

```
// BAD
.foo {
    content: 'bar';
}
```

##### Shorthand Values

Always use values in their shorthand form where possible.

```
// GOOD
.baz {
    margin: 1px;
}
```

```
// BAD
.baz {
    margin: 1px 1px 1px 1px;
}
```

##### Url Quotes

Always wrapp url-quotes in double quotes.

```
// GOOD
.foo {
    background-image: url("foo.png");
}
```

```
// BAD
.bar {
    background-image: url(foo.png);
}
```

##### Variable Name Format

Variables should always be hyphenated and lowercased.

```
// GOOD
$hyphenated-lowercase: 1px;
```

```
// BAD
$HYPHENATED-UPPERCASE: 1px;
$_leading-underscore: 1px;
$_camelCaseWithLeadingUnderscore: 1px;
```

##### Yeah, I know... It's a big list.
