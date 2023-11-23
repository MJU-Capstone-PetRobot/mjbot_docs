# Setup


## RKNN Setup

### Hardware
- Computer : [Orange Pi 5B](https://github.com/MJU-Capstone-PetRobot/docs/tree/main/Orange_Pi_5B)

### Software
- Ubuntu 22.04
- Python 3.10
- [RKNN-ToolKit-Lite2 (python API)](https://github.com/rockchip-linux/rknn-toolkit2)

### Installaion

1. Install python3 and pip3
    - `sudo apt-get update`  
    - `sudo apt-get install -y python3 python3-dev python3-pip gcc`  
2. Install dependent libraries
    - `sudo apt-get install -y python3-opencv`
    - `sudo apt-get install -y python3-numpy`
3. Install RKNN Toolkit Lite2
    - `cd ./rknn-toolkit2/rknn_toolkit_lite2/packages`
    - `pip3 install rknn_toolkit_lite2-1.5.2-cp310-cp310-linux_aarch64.whl`

### Run Demo

- `cd ./rknn-toolkit2/rknn_toolkit_lite2/examples/inference_with_lite`
- `python3 test.py`

## Realsense Setup

### Hardware
- Computer : [Orange Pi 5B](https://github.com/MJU-Capstone-PetRobot/docs/tree/main/Orange_Pi_5B)
- Depth camera : [Intel® RealSense™ Depth Camera D435i](https://github.com/MJU-Capstone-PetRobot/docs/tree/main/Depth_Camera_D435i)
- Connection : USB 3.0

### Software
- Ubuntu 22.04
- Python 3.10
- [Intel® RealSense™ SDK 2.0](https://github.com/IntelRealSense/librealsense)

### Download Source code (zip) & Unzip
- [Intel® RealSense™ SDK 2.0 (v2.53.1)](https://github.com/IntelRealSense/librealsense/releases/tag/v2.53.1)
    - released this Dec 6, 2022  
- The lastest version may not be built correctly.

### Prerequisites
```
sudo apt-get update && sudo apt-get -y upgrade
```
```
sudo apt-get install -y --no-install-recommends \
    python3 \
    python3-setuptools \
    python3-pip \
	python3-dev
```


```
sudo apt-get install -y git libssl-dev libusb-1.0-0-dev pkg-config libgtk-3-dev
```
```
sudo apt-get install -y libglfw3-dev libgl1-mesa-dev libglu1-mesa-dev
```


### Building librealsense2 SDK
```
cd ./librealsense
```

```
~/librealsense$ ./scripts/setup_udev_rules.sh
````

```
~/librealsense$ mkdir build && cd build
```

```
~/librealsense/build$ cmake ../ -DBUILD_EXAMPLES=true -DFORCE_RSUSB_BACKEND=true -DBUILD_PYTHON_BINDINGS:bool=true
```

- `-DBUILD_EXAMPLES=true`
    - C++ sample code build option  
- `-DFORCE_RSUSB_BACKEND=true`
    - realsense sdk에서 지원하는 커널 버전(5.13, 5.15)과 orange pi 지원 커널 버전(5.10)이 맞지 않아 해당 옵션 추가   
- `-DBUILD_PYTHON_BINDINGS:bool=true`
    - Build Python bindings for the SDK 

```
~/librealsense$ sudo make uninstall && make clean && make -j4 && sudo make install
```
```
~/librealsense$ export PYTHONPATH=$PYTHONPATH:/usr/local/lib/python3.10/pyrealsense2
```

### Run example
- The binary demos, tutorials and test files will be copied into `/usr/local/bin`
- 파이썬 스크립트의 경우 `import pyrealsense2.pyrealsense2 as rs`로 수정한 후 실행
    - [module 'pyrealsense2' has no attribute 'pipeline' #7540](https://github.com/IntelRealSense/librealsense/issues/7540#issuecomment-709433690)

### 참고자료
- [How to install librealsense and pyrealsense2 on the Jetson NX](https://www.lieuzhenghong.com/how_to_install_librealsense_on_the_jetson_nx/)
- [Realsense 파이썬으로 사용하기](https://velog.io/@zzziito/Realsense-%ED%8C%8C%EC%9D%B4%EC%8D%AC%EC%9C%BC%EB%A1%9C-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)
- [Linux/Ubuntu - RealSense SDK 2.0 Build Guide](https://dev.intelrealsense.com/docs/compiling-librealsense-for-linux-ubuntu-guide)
- [Supported Linux image types and kernel versions](http://www.orangepi.org/orangepiwiki/index.php/Supported_Linux_image_types_and_kernel_versions)
- [Linux Ubuntu Installation](https://github.com/IntelRealSense/librealsense/blob/master/doc/installation.md)  
- [NVIDIA Jetson installation](https://dev.intelrealsense.com/docs/nvidia-jetson-tx2-installation)
- [Build Configuration](https://dev.intelrealsense.com/docs/build-configuration)

![img](./orange%20pi%20kernel.png)
![img](./realsense%20kernel%20supported.png)
![img](./realsense%20rsusb.png)
![img](./realsense%20build%20config.png)
