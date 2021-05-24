pipeline {
    agent any

    stages {
        stage('Hello from GitHub') {
            steps {
                echo 'Hello 3rd Commit'
		//sh 'npm install'
            }
       
	 }
	stage('Test') {
	    steps {
		echo 'Hello World'
	   }
	
	}
      stage('Front end') {
	      agent {
		docker{ image 'node:14-alpine' 
		        args '-p 8000:8000' } 
	      }
	    steps {
              	sh 'node --version'
            }
      	}    
    
    }
}
