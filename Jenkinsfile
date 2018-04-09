/* Pipeline for use with protractor and containers. Make sure your Jenkins has access to a docker socket and a docker compose client */
/* Author: Lucas de Castro Oliveira */
/* March 2018 */
pipeline {
  agent none
  options {
    timeout(time: 10, unit: 'MINUTES')
    buildDiscarder(logRotator(numToKeepStr: '5', artifactNumToKeepStr: '1'))
    skipDefaultCheckout()
  }
  stages {
    stage('Clonar Repositorio') {
      agent any
      steps {
        checkout scm
      }
    }

    stage('Run tests') {
      agent {
        docker {
          image 'weboaks/node-karma-protractor-chrome:headless'
        }
      }
      steps {
        sh 'npm install --no-deps'
        sh 'npx protractor tests/conf.js'
      }
	  }
  }   

  post {
    always {
        emailext(body: '${DEFAULT_CONTENT}', mimeType: 'text/html',
                 replyTo: '$DEFAULT_REPLYTO', subject: '${DEFAULT_SUBJECT}',
                 to: emailextrecipients([[$class: 'CulpritsRecipientProvider'],
                                        [$class: 'RequesterRecipientProvider']]))

        script {
            node {
                sh 'docker-compose down'
            }
        }
    }
    
  }
}
