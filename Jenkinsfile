pipeline {
    agent any

    stages {
        stage('Instalação de Dependências') {
            steps {
                sh 'npm install'
            }
        }
        stage('BDD tests + JUnit') {
            steps {
                sh 'npm run cypress:run --reporter junit \
                    --reporter-options "mochaFile=results/my-test-output-[hash].xml"'
            }
        } 
    }     
}