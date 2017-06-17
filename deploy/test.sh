#!/bin/bash
echo 'Executing Unit Test in Backend'
docker pull 7robertodantas/backend:latest
docker run --rm --name backend -it 7robertodantas/backend:latest npm test
echo 'Testing ssh connection with server'
status=$(ssh -o BatchMode=yes -o ConnectTimeout=5 $user@$host echo ok 2>&1)
if [[ $status == ok ]] ; then
  echo auth ok
elif [[ $status == "Permission denied"* ]] ; then
  echo no_auth
else
  echo $status
fi
