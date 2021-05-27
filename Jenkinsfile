pipeline {
    agent any
	tools {nodejs 'NodeJS'}
    stages {
	    
        stage('GitHub Webhook') {
            steps {
                echo 'Hello World!'
		git([url: 'https://github.com/josue-117/DOTT.git', branch: 'master'])
            }
       
	 }
	
	stage('Building Process') {
	    steps {
		echo 'This is the Building Stage'
		    dir("cidr_convert_api/node/") { 
		sh 'npm rm -rf node_modules'
		sh 'npm install'
		//sh 'npm run dev'
		    }
		}
	
	}
	    
	
	stage('Sonarqube Static Code Analysis') {
    		environment {
        		SCANNER_HOME = tool 'SonarQubeScanner';
    		}
		
    		steps {
        		withSonarQubeEnv('SonarQube')
			
			{	println "${env.SONAR_CONFIG_NAME}"
				println "${env.SONAR_HOST_URL}"
			 	println="${env.BUILD_NUMBER}"
            			sh "pwd"
			 	sh "${SCANNER_HOME}/bin/sonar-scanner -Dsonar.projectKey=FinalProject -Dsonar.sources=. -Dsonar.login=${env.SONAR_AUTH_TOKEN}"
        						}
			}
	}
    
	    stage('Testing Process!') {
	    steps {
		echo 'This is the Testing Stage'
		dir("cidr_convert_api/node/") {
		sh 'npm test' 
			}
		}
	}
	
      /*stage('Front end') {
	      agent {
		docker{ //args '-v /var/run/docker.sock:/var/run/docker.sock' 
			image 'node:14-alpine'   
			args '-p 8000:8000' } 
	      }
	    steps {
              	sh 'node --version'
            }
      	} */ 
    
    }
}
