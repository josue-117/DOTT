pipeline {
    agent any

    stages {
        stage('Hello from GitHub') {
            steps {
                echo 'Hello'
		//sh 'npm install'
            }
       
	 }
	stage('Test') {
	    steps {
		echo 'This is a Test'
	   }
	
	}
      stage('Front end') {
	      agent {
		docker{ image 'node:14-alpine' 
		        // args '-v /var/run/docker.sock:/var/run/docker.sock'    
			args '-p 8000:8000' } 
	      }
	    steps {
              	sh 'node --version'
            }
      	}    
    
    }
}
