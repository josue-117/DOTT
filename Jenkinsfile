pipeline {
    agent any
	tools {nodejs 'NodeJS'}
    stages {
	    
        stage('GitHub Webhook') {
            steps {
                echo 'Hello World from GitHub!!'
		echo 'This is a New Comment!'
		git([url: 'https://github.com/josue-117/DOTT.git', branch: 'master'])
            }
       
	 }
	
	stage('Building Stage') {
	    steps {
		echo 'This is the Building Stage'
		    dir("cidr_convert_api/node/") { 
		sh 'npm rm -rf node_modules'
		sh 'npm install'
		//sh 'npm run dev'
		    }
		}
	
	}
	    
	
	stage('Code Analysis Stage') {
    	    environment {
        		SCANNER_HOME = tool 'SonarQubeScanner';
    		}
		
    	    steps {
		echo 'This is the Static Code Testing using SonarQube'
        	withSonarQubeEnv('SonarQube')
			
		{	println "${env.SONAR_CONFIG_NAME}"
			println "${env.SONAR_HOST_URL}"
			println "${env.BUILD_NUMBER}"
            		sh "pwd"
			sh "${SCANNER_HOME}/bin/sonar-scanner -Dsonar.projectKey=FinalProject -Dsonar.sources=. -Dsonar.login=${env.SONAR_AUTH_TOKEN} -Dsonar.projectVersion=${env.BUILD_NUMBER}"
        						}
			}
	}
    
	/*stage('Unit Testing') {
	    steps {
		echo 'This is the Testing Stage'
		dir("cidr_convert_api/node/") {
		sh 'npm test' 
			}
		}
	}*/
	
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
