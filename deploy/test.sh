#!/bin/bash

echo 'Testing ssh connection with server'
ssh $user@$host << EOF
echo $host OK || echo $host NOK
exit
EOF