# Setup


## Bugfix

1. ESP32 CH341-uart converter disconnect `[BUG-SOLVE]`
    - 상황
        - CH341-uart converter 연결됬다가 바로 끊김
        - <img src="./ESP32%20CH341-uart%20converter%20disconnect.png" width="30%" height="30%">
    - 원인
        - 다른 툴이 통신 방해
    - 해결
        - 그 툴 DISABLE 시킴 
        - ```The problem here is BRLTTY, a program that "provides access to the Linux/Unix console (when in text mode) for a blind person using a refreshable braille display".```
        - https://unix.stackexchange.com/questions/670636/unable-to-use-usb-dongle-based-on-usb-serial-converter-chip
        - <img src="./ESP32%20CH341-uart%20converter%20connect.png" width="30%" height="30%">
