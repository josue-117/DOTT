pipeline {
    agent any

    stages {
        stage('Hello from GitHub') {
            steps {
                echo 'Hello 3rd Commit'
		//sh 'npm install'
            }
       
	 }
	stage('Deployment') {
	    steps {
		echo 'Hello World'
	   }
	
	}
      stage('Front end') {
	      agent {
		docker{ image -p 8000:8000 'node:14-alpine' } 
	      }
	    steps {
              	sh 'node --version'
            }
      	}    
    
    }
}
