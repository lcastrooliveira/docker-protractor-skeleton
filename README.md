# Protractor tests sample for CI

This is an example project to setup protractor. It has a service specification in docker-compose.yml.
Basically it runs a selenium server container with a npm/gulp/bower container linked to it. Whey you fire
the protractor-tests service. It will execute the shell script run_tests.sh. This script will install npm dependencies,
and then run protractor sample tests in tests/conf.js. It was designed to run as tasks on CI servers such as Jenkins.

## Getting Started

In order to run this project you must have docker and docker-compose installed. You also need export your UID to variable called USER_ID in order
to npm download dependencies with your user name. The sequence of commands are the following:

```
export USER_ID=${UID}
docker-compose up protractor-tests
```

It is a very simple skeleton but it may help you with your projects. Feel free to fork it and twist it to your needs.