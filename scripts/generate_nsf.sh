#!/bin/bash
# Generate the the Domino model from the Swagger
# Assumption: root dir is ~/Code/github
# adjust as needed
basepath=~/Code/github
swaggerproject=swagger-codegen
dominoproject=Connect2017-DEV1545
echo Generating code
java -jar $basepath/$swaggerproject/modules/swagger-codegen-cli/target/swagger-codegen-cli.jar generate -l ibm-domino-server -i $basepath/$dominoproject/frontend/foodstore.yaml -o $basepath/$dominoproject/swagger/
# Now copy forms / views into the Ondisk project
cp -f $basepath/$dominoproject/swagger/src/formview/*.form $basepath/$dominoproject/nsf_on_disk/Forms/
cp -f $basepath/$dominoproject/swagger/src/formview/*.view $basepath/$dominoproject/nsf_on_disk/Views/