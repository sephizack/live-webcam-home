#!/bin/sh

refreshtime=10

node main.js $refreshtime &

while true
do
    fswebcam \
        -S 10 \
        --set power_line_frequency=2 \
        --set brightness=80 \
        --set saturation=50 \
        --deinterlace \
        -r "1280x720" \
        --jpeg 95 \
        --save public/webcam-capture/video0.jpg
    sleep $refreshtime
done

pkill -P $$
