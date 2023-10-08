# Setup


## RKNN Setup

- 작성 예정

## Realsense Setup

### Hardware
- Computer : [Orange Pi 5B](https://github.com/MJU-Capstone-PetRobot/docs/tree/main/Orange_Pi_5B)
- Depth camera : [Intel® RealSense™ Depth Camera D435i](https://github.com/MJU-Capstone-PetRobot/docs/tree/main/Depth_Camera_D435i)
- Connection : USB 3.0

### Software
- OS : Ubuntu 22.04
- Depth camera library : [Intel® RealSense™ SDK 2.0](https://github.com/IntelRealSense/librealsense)

### Prerequisites
`sudo apt-get update && sudo apt-get upgrade && sudo apt-get dist-upgrade`  
`sudo update-grub && sudo reboot`  

`sudo apt-get install -y git libssl-dev libusb-1.0-0-dev pkg-config libgtk-3-dev`  
`sudo apt-get install -y libglfw3-dev libgl1-mesa-dev libglu1-mesa-dev`  

`git clone https://github.com/IntelRealSense/librealsense.git`  
`./scripts/setup_udev_rules.sh`  
`sudo cp config/99-realsense-libusb.rules /etc/udev/rules.d/`  
`sudo udevadm control --reload-rules && udevadm trigger`    

### Building librealsense2 SDK
- `cd ./librealsense`  
- `mkdir build && cd build`  
- `cmake ./ -DBUILD_EXAMPLES=true -DFORCE_RSUSB_BACKEND=true -DBUILD_PYTHON_BINDINGS:bool=true`    
    - `-DBUILD_EXAMPLES=true`
        - C++ sample code build option  
    - `-DFORCE_RSUSB_BACKEND=true`
        - realsense sdk에서 지원하는 커널 버전(5.13, 5.15)과 orange pi 지원 커널 버전(5.10)이 맞지 않아 해당 옵션 추가   
    - `-DBUILD_PYTHON_BINDINGS:bool=true`
        - Build Python bindings for the SDK  
- `sudo make uninstall && make clean && make -j4 && sudo make install`  
- `export PYTHONPATH=$PYTHONPATH:/usr/local/lib/python3.10/pyrealsense2`

### Run example
- The binary demos, tutorials and test files will be copied into `/usr/local/bin`
- 파이썬 예제의 경우 `import pyrealsense2.pyrealsense2 as rs`로 수정한 후 실행
    - [module 'pyrealsense2' has no attribute 'pipeline' #7540](https://github.com/IntelRealSense/librealsense/issues/7540#issuecomment-709433690)

### 참고자료
- [Linux/Ubuntu - RealSense SDK 2.0 Build Guide](https://dev.intelrealsense.com/docs/compiling-librealsense-for-linux-ubuntu-guide)
- [Supported Linux image types and kernel versions](http://www.orangepi.org/orangepiwiki/index.php/Supported_Linux_image_types_and_kernel_versions)
- [Linux Ubuntu Installation](https://github.com/IntelRealSense/librealsense/blob/master/doc/installation.md)  
- [NVIDIA Jetson installation](https://dev.intelrealsense.com/docs/nvidia-jetson-tx2-installation)
- [Build Configuration](https://dev.intelrealsense.com/docs/build-configuration)
- [Realsense 파이썬으로 사용하기](https://velog.io/@zzziito/Realsense-%ED%8C%8C%EC%9D%B4%EC%8D%AC%EC%9C%BC%EB%A1%9C-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)

![img](./orange%20pi%20kernel.png)
![img](./realsense%20kernel%20supported.png)
![img](./realsense%20rsusb.png)
![img](./realsense%20build%20config.png)