pipeline {
    agent any

    stages {
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
                junit '**/target/*.xml'
            }
        }            
    }     
}