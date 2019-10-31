
pipeline {
  agent none

  options {
    disableConcurrentBuilds()
    timeout(time: 1, unit: 'HOURS')
  }

  parameters {
    choice(name: 'APP', choices:"DuckDuckGo\nGoogle\n", description:'Which Application [APP]: ')
    choice(name: 'ENV', choices:"test\nprod\n", description:'Which environment [ENV]: ')
    choice(name: 'BROWSER', choices: "Chrome\nFirefox\n", description:'Choose BROWSER : ')
  }
  environment {
    APP = "${params.APP}"
    ENV = "${params.ENV}"
    BROWSER = "${params.BROWSER}"
  }
  
  stages {
    stage('Run E2E Tests') {
      agent { label 'docker' }
      steps {
        script {
          echo 'Pulling...' + env.BRANCH_NAME
          echo 'Executing against APP => ' + env.APP + " with ENV => " + env.ENV
          // The selenium container must have the same volume mount paths as the node tests and also be mounted as the same user
          def cwd = pwd()
          def userId = sh(returnStdout: true, script: 'id -u').trim()
          def groupId = sh(returnStdout: true, script: 'id -g').trim()
          docker.image("selenium/standalone-" + "${env.BROWSER}".toLowerCase() + ":latest").withRun("-u ${userId}:${groupId} -v /dev/shm:/dev/shm --shm-size=4g -w '${cwd}' -v '${cwd}':'${cwd}':rw") { c ->
            docker.image('node:12.13.0').inside("--link ${c.id}:selenium -e HOME=${cwd} -e REMOTE_HOST='selenium'") {
                sh './wait-for-it.sh selenium:4444'
                sh 'npm install'
                sh 'npm test'
                // sh 'npm run reports' // This needs JAVA_HOME to be setup. We'll spawn a different container for it
            }
          }
        }
      }
      post {
        always {
          archiveArtifacts artifacts: 'allure-reports', fingerprint: true
        }
      }
    }
  }
}

