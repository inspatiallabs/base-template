#!/usr/bin/env pwsh

# Fail immediately if any command fails
$ErrorActionPreference = "Stop"

Set-Location -Path "./server"
deno task build
if ($LASTEXITCODE -ne 0) { throw "deno task build failed with exit code $LASTEXITCODE" }

$RemoteUser = "inspatial"
$RemoteHost = "172.238.112.228"
$RemoteRoot = "/home/inspatial/bioloon"

Write-Host "Uploading BIOLOON Backend Binary"

rsync -avz --progress `
    -e "ssh" `
    "./bioloon" `
    "${RemoteUser}@${RemoteHost}:${RemoteRoot}/bioloon"
if ($LASTEXITCODE -ne 0) { throw "rsync failed with exit code $LASTEXITCODE" }

Write-Host "Restarting Bioloon backend"

ssh -o StrictHostKeyChecking=no "${RemoteUser}@${RemoteHost}" "sudo service bioloon restart"
if ($LASTEXITCODE -ne 0) { throw "ssh restart failed with exit code $LASTEXITCODE" }