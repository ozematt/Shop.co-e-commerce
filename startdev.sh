#!/bin/sh

docker compose up -d
docker compose exec -it e-commerce-app sh

# export USER_ID=$(id -u)
# export GROUP_ID=$(id -g)