pipeline {
    agent any

    stages {
        stage('Hello from GitHub Webhook!') {
            steps {
                echo 'Hello World!'
		//sh 'npm install'
            }
       
	 }
	stage('Testing Stage Sonarqube!') {
	    steps {
		echo 'This is the Last Test'
	   }
	
	}
      stage('Front end') {
	      agent {
		docker{ /*args '-v /var/run/docker.sock:/var/run/docker.sock'*/ 
			image 'node:14-alpine'   
			args '-p 8000:8000' } 
	      }
	    steps {
              	sh 'node --version'
            }
      	}    
    
    }
}
