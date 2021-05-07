# ckanext-querytool

[![Build Status](https://travis-ci.org/ViderumGlobal/ckanext-querytool.svg?branch=master)](https://travis-ci.org/ViderumGlobal/ckanext-querytool)

A CKAN extension to create visualizations based on the uploaded datasets.

## Creating new releases

Before creating a new release, see the next section, [Test data seed command](#test-data-seed-command)

### Test data seed command

On a freshly installed portal, with nothing but an admin user, you can run a `paster` command to populate the portal with test data found on the [STEPS Data](https://vital-stepsdata.org/) site. This includes the STEPS Survey organization, 9 datasets with 2 resources each, and 9 reports with multiple visualizations.

Before creating a new release, this command should be run to verify that there are no compatibility issues. This could be especially critical if there are any changes to the DB tables or structure.

To populate the portal, run:

```
paster --plugin=ckanext-querytool seed_portal -c /path/to/.ini
```

It will then prompt the user to enter the admin name and admin API key:

```
Enter the admin login name: <ADMIN_NAME>

Enter the admin API key: <API_KEY>
```

That's it! You'll see output for each step (but the overall run time is very fast) and it will alert you if it runs into any issues.

If you have issues running the command successfully, you might need to run these `paster` commands:

>**WARNING**: The following commands will completely clear the DB, including the admin user, password, and email address. If you've created anything on the portal, you'll need to do so again.

```
paster --plugin=ckan db clean -c /path/to/.ini
paster --plugin=ckan db init -c /path/to/.ini
```

After you've recreated the admin user, run the `seed_portal` command again, with this admin user name and _new_ API key.

**TODO**: _Possibly_ add a `make` command to the [ckan-cloud-docker](https://github.com/datopian/ckan-cloud-docker) `Makefile`.

## Javascript and Webpack
### Webpack and Babel config
`.babelrc` -- babel config (see https://babeljs.io/docs/en/configuration#babelrc for config options)
`webpack.config.js` -- webpack config (see https://webpack.js.org/configuration/)

### Javascript files
Source files for the querytool live in:
`ckanext/querytool/fanstatic/javascript`

Distribution files (files served via our extension) are compiled via webpack and live in:
`ckanext/querytool/fanstatic/javascript/dist`
*NOTE*: Make sure to reference `/dist/` files, not the source files!

Vendor files (third party libraries) live in:
`ckanext/querytool/fanstatic/javascript`

### Updating source files
Source files can be changed as needed. After updating run:
`npm install && npm run webpack` which will build the transpiled / minified resources and copy them to the `/dist` folder in the host machine.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Docker-based development](#docker-based-development)
  - [Requirements](#requirements)
  - [Setting up environment](#setting-up-environment)
  - [Working with docker](#working-with-docker)
  - [Starting development server](#starting-development-server)
  - [Running project tests](#running-project-tests)
  - [Building static assets](#building-static-assets)
  - [Working with i18n](#working-with-i18n)
  - [Loging into container](#loging-into-container)
  - [Updating readme](#updating-readme)
  - [Reseting docker](#reseting-docker)
- [Classical development](#classical-development)
  - [Installation](#installation)
  - [Config Settings](#config-settings)
  - [Development Installation](#development-installation)
  - [Modify CSS](#modify-css)
  - [Running the Tests](#running-the-tests)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Docker-based development

### Requirements

Please follow installation instructions of the software below if needed. Also, take a look inside the `Makefile` to understand what's going on under the hood:
- `docker`
- `docker-compose`
- `/etc/hosts` contains the `127.0.0.1 ckan-dev` line

For building static assets and running end-to-end tests Node.js is required and can be installed with these commands:

```bash
$ nvm install 10
$ nvm use 10
$ npm install
```

### Setting up environment

Clone the `ckanext-querytool` repository (assuming that we're inside the `projects` directory):

```bash
$ git clone git@github.com:ViderumGlobal/ckanext-querytool.git
$ cd ckanext-querytool
```

This is a CKAN extension and docker compose setup for local development. It's designed to support live development of extensions. The only one requirement is that the folder with the project should be named `ckanext-querytool`.

### Working with docker

The whole docker setup is inside the `docker` directory. You can tweak any CKAN instance's aspects there (e.g. patches/cron/etc). To add other CKAN extensions to the work - add its folders to `docker/docker-compose.dev.yml` (see `ckan-dev` volumes).

Pull the latest `ckan-base/dev` images and build the project's images:

```
$ make docker
```

### Starting development server

Let's start the development server. It's recommended to run this command in an additional terminal window because you neede it running during the work. All changes to connected extensions will trigger live-reloading of the server:

```bash
$ make start
# see CKAN logs here
```

Now we can visit our local ckan instance at (you can login using `ckan_admin@test1234`):

```
http://ckan-dev:5000/
```

### Running project tests

> To pass the end-to-end tests you have to add required applictions from the staging site to your development server. See notes for every single test

We write and store unit tests inside the `ckanext/querytool/tests` directory and end-to-end tests inside the `tests` directory. Prefer to name test files after feature/bug names. To run the tests you should have the development server up and running:

```bash
$ make test
$ npx nightwatch tests/<testname>.js # for a single test
```

See the `how to write E2E tests` guide:
- http://nightwatchjs.org/guide

### Building static assets

Put your scripts/fonts/etc inside the `ckanext/querytool/fanstatic` folder and images inside the `ckanext/querytool/public` folder. It can be used as usual ckan `fanstatic` and `public` contents. At the same time, we use CSS preprocessor (LESS) to build our styles. Put your styles inside the `ckanext/querytool/fanstatic/less` and build it:

```bash
$ make assets
```

Processed styles will be put to the `ckanext/querytool/fanstatic/css` folder.

### Working with i18n

To extract i18n messages and compile the catalog we have to have our development server running. In another terminal window run a command:

```
$ make i18n
```

See CKAN documentation for more on i18n management.

### Loging into container

To issue commands inside a running container:

```
$ make shell
```

Now you can tweak the running `ckan-dev` docker container from inside. Please take into account that all changes will be lost after the next container restart.

### Updating readme

To update this readme's table of contents run:

```bash
$ make readme
```

### Managing docker

There are a few useful docker commands:

```bash
$ docker ps -aq # list all containers
$ docker stop $(docker ps -aq) # stop all containers
$ docker rm $(docker ps -aq) # remove all containers
$ docker rmi $(docker images -q) # remove all images
```

### Reseting docker

> It will destroy all your projects inside docker!!!

If you want to start everything from scratch there is a way to prune your docker environment:

```
$ docker system prune -a --volumes
```

### Testings layouts

The app allows to configure different layouts for an application's visualizations. We can test expected behavious in half-automated way using Chrome console in the brower:

- Go to /querytool/public/detailed-mortality-by-cause
- Copy-past and start in the console script from `bin/test-layouts.js`

## Classical development

### Installation

To install ckanext-querytool:

1. Activate your CKAN virtual environment, for example:

```
. /usr/lib/ckan/default/bin/activate
```

2. Install the ckanext-querytool Python package into your virtual environment:

```
pip install ckanext-querytool
```

3. Add ``querytool`` to the ``ckan.plugins`` setting in your CKAN
   config file (by default the config file is located at
   ``/etc/ckan/default/production.ini``).

4. Restart CKAN. For example if you've deployed CKAN with Apache on Ubuntu:

```
sudo service apache2 reload
```

### Config Settings

These are the required configuration options used by the extension:

1. Add config for map item base layer:
```
ckanext.querytool.map_osm_url = https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}{r}.png

ckanext.querytool.map_osm_attribute = &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>
```

2. Add config for the base public breadcrumb name:
```
ckanext.querytool.public_breadcrumb_name = Health Topics
```

3. Add config for visibility of navigation bar in the public query tools:
```
ckanext.querytool.allow_nav_bar = False
```
**NOTE:** The navigation bar config option is still present, but we are not using it.

### Development Installation

To install ckanext-querytool for development, activate your CKAN virtualenv
and do:

```
git clone https://github.com/ViderumGlobal/ckanext-querytool.git
cd ckanext-querytool
python setup.py develop
pip install -r dev-requirements.txt
```
All code MUST follow [PEP8 Style Guide](https://www.python.org/dev/peps/pep-0008/). Most editors have plugins or integrations and automatic checking for PEP8 compliance so make sure you use them.

You should add a pre-commit hook that will
check for PEP8 errors. Follow the next steps to enable this check.

1. Make sure you have installed the PEP8 style checker:
```
$ pip install pycodestyle
```
2. In the `.git/hooks` folder which is located inside the project's root
directory, create a file named `pre-commit` and inside put [this code](https://github.com/keitaroinc/pep8-git-hook/blob/master/pre-commit).
3. Make `pre-commit` executable by running this command:
```
$ chmod +x ckanext-querytool/.git/hooks/pre-commit
```
Now, every time you commit code, the pre-commit hook will run and check for
PEP8 errors.

### Modify CSS

This extension uses LESS for styles. All changes must be made in one of the LESS
files located in the `ckanext-querytool/ckanext/querytool/fanstatic/less` folder.

Gulp.js is used for building CSS assets.

In order to build all CSS assets **run `node_modules/gulp/bin/gulp.js` once**. Gulp.js is watching for changes in the source LESS assets and will rebuild CSS on each change. If you have gulp.js installed globally on the system, you can just type `gulp` to run it.

### Running the Tests

To run the tests, first make sure that you have installed the required
development dependencies in CKAN, which can be done by running the following
command in the CKAN's `src` directory:

```
pip install -r dev-requirements.txt
```

After that just type this command to actually run the tests in the extension.

```
nosetests --ckan --with-pylons=test.ini
```
To run the tests and produce a coverage report, first make sure you have coverage installed in your virtualenv (pip install coverage) then run:

```
nosetests --nologcapture --with-pylons=test.ini --with-coverage --cover-package=ckanext.querytool --cover-inclusive --cover-erase --cover-tests
```
