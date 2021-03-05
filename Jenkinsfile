pipeline {
    agent any

    stages {
        stage('Git') {
            steps {
                git url: 'https://github.com/bellatriz/automation-practice.git/', branch: 'main'
            }
        }
        stage('Instalação de Dependências') {
            steps {
                sh 'npm install'
            }
        }
        stage('BDD tests') {
            steps {
                sh 'npm run cypress:run' 
            }
        } 
        stage('Reports') {
            steps {
                junit 'results/*.xml'
            }
        }            
    }     
}