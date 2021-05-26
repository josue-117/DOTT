pipeline {
    agent any
	tools {nodejs 'NodeJS'}
    stages {
        stage('Hello from GitHub Webhook!') {
            steps {
                echo 'Hello World!'
		    dir ("cidr_covert_api/node/") {
			    sh 'npm cache clean'
		    }
		// git([url: 'https://github.com/josue-117/DOTT.git', branch: 'master'])
		    
            }
       
	 }
	stage('Testing Stage Sonarqube!') {
	    steps {
		echo 'This is the Last Test'
		    dir("cidr_convert_api/node/") { 
		sh 'npm install' 
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
