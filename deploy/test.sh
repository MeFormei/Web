#!/bin/bash
echo 'Testing ssh connection with server'
status=$(ssh -o BatchMode=yes -o ConnectTimeout=5 $user@$host echo ok 2>&1)
if [[ $status == ok ]] ; then
  echo auth ok
elif [[ $status == "Permission denied"* ]] ; then
  echo no_auth && exit 126
else
  echo $status && exit 1
fi
