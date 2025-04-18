#!/bin/bash

docker build -t pandora .

docker run -p 3001:3001 pandora
