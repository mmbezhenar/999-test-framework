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
                    // Run tests without using nohup on Windows
                    if (isUnix()) {
                        sh 'nohup npx playwright test &'
                    } else {
                        sh 'npx playwright test'
                    }
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

def isUnix() {
    return !isWindows()
}

def isWindows() {
    return System.properties['os.name'].toLowerCase().contains('win')
}
