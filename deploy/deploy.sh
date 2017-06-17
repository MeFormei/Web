#!/bin/bash

echo 'Updating files on server'
scp -oStrictHostKeyChecking=no -r . $user@$host:~
ssh $user@$host << EOF
docker pull 7robertodantas/backend:latest
docker-compose -f deploy/docker-compose.yml down || true
docker rmi 7robertodantas/backend:current || true
docker tag 7robertodantas/backend:latest 7robertodantas/backend:current
docker-compose -f deploy/docker-compose.yml up -d
EOF