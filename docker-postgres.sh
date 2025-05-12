#!/bin/bash
docker run --name langua-db \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_DB=langua360 \
  -p 5432:5432 \
  -d postgres:15
