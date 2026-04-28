#! /usr/bin/env bash

set -e # fail immediately if any command fails
cd ./server
deno task build

REMOTE_USER="inspatial"
REMOTE_HOST="172.238.112.228"
REMOTE_ROOT="/home/inspatial/bioloon"

echo "Uploading BIOLOON Backend Binary"

rsync -avz --progress \
    -e "ssh" \
    "./bioloon" \
    "$REMOTE_USER@$REMOTE_HOST:$REMOTE_ROOT/bioloon"

# echo "Restarting Bioloon backend"

# ssh -o StrictHostKeyChecking=no $REMOTE_USER@$REMOTE_HOST "sudo service bioloon restart"
