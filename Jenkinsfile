pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run tests') {
            steps {
                bat 'npm test'
            }
        }

        stage('Dependency Check') {
            steps {
                // Ajusta la ruta si no tienes dependency-check en el PATHe
                bat '"C:\\Program Files\\dependency-check\\bin\\dependency-check.bat" --project "SafeNotes" --scan . --format HTML --out reports'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'reports\\*.html', allowEmptyArchive: true
        }
    }
}
