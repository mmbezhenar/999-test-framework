pipeline {
    agent any

    environment {
        PLAYWRIGHT_VERSION = '1.15.1' // Specify the desired Playwright version
    }

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    // Install Node.js and npm (if not already installed)
                    tool 'NodeJS'
                    // Install Playwright
                    sh "npm install -g @playwright/test@${PLAYWRIGHT_VERSION}"
                    sh 'npx playwright install'
                }
            }
        }

        stage('Help') {
            steps {
                sh 'npx playwright test --help'
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    // Install project dependencies
                    sh 'npm install'
                    // Run tests
                    sh 'cucumber-js test'
                }
            }
            post {
                success {
                    archiveArtifacts(artifacts: 'homepage-*.png', followSymlinks: false)
                    sh 'rm -rf *.png'
                }
            }
        }
    }
}
