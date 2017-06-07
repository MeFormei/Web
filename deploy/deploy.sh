#!/bin/bash

scp -oStrictHostKeyCheck=no -r . ubuntu@34.211.171.144:/srv/meformei

echo 'Updating files on server'
ssh ubuntu@34.211.171.144 << EOF
docker pull 7robertodantas/meformei-backend:latest
docker-compose stop || true
docker-compose rm -f backend || true
docker rmi 7robertodantas/meformei-backend:current || true
docker tag 7robertodantas/meformei-backend:latest 7robertodantas/meformei-backend:current
docker-compose up -d
EOF