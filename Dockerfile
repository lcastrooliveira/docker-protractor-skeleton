FROM 'monostream/nodejs-gulp-bower:latest'
COPY . /workspace
WORKDIR /workspace
RUN ["npm", "install"]
CMD [ "npx", "protractor", "tests/conf.js" ]