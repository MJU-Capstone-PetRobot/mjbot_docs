# Ubuntu

## Ubuntu 22.04.2 LTS
- [Download Ubuntu Desktop](https://ubuntu.com/download/desktop)

## Install Ubuntu
### On desktop
1. [How to run an Ubuntu Desktop virtual machine using VirtualBox 7](https://ubuntu.com/tutorials/how-to-run-ubuntu-desktop-on-a-virtual-machine-using-virtualbox#1-overview)  
2. Skip Unattended Installation (자동설치 스킵)  
    ![skip](./img/Skip%20Unattended%20Installation.png)  
    - 자동설치 선택 시 설치 후 터미널이 열리지 않는 버그 발생
        - [Terminal 안열리는 문제](https://velog.io/@jaehyung-eun/Virtual-Box-Ubuntu-%EC%84%A4%EC%B9%98#terminal-%EC%95%88%EC%97%B4%EB%A6%AC%EB%8A%94-%EB%AC%B8%EC%A0%9C)
3. [Install Ubuntu destop](https://ubuntu.com/tutorials/install-ubuntu-desktop#4-boot-from-usb-flash-drive)
    - 이후 수동 설치 진행
4. Open terminal and Type command
    - `sudo apt update`
    - `sudo apt upgrade`   
    
    ![terminal](./img/ubuntu%2022.04%20terminal%20open.png)

### On RPI4
- [How to install Ubuntu Desktop on Raspberry Pi 4](https://ubuntu.com/tutorials/how-to-install-ubuntu-desktop-on-raspberry-pi-4#1-overview)