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
      agent any
      steps {
        sh 'docker-compose up protractor-tests'
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
                'docker-compose down'
            }
        }
    }
    
  }
}
