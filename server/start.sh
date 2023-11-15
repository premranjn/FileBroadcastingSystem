#!/bin/bash

until nc -z db 3306; do
    echo "waiting"
    sleep 5
done

sleep 3
echo "starting server"
$1