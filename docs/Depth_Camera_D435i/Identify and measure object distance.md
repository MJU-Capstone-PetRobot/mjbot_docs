# Identify and measure object distance


## Website
- [Identify and Measure precisely Objects distance | with Deep Learning and Intel RealSense](https://youtu.be/_gzcp8dURbU)

## Step

### python 3.9 설치 
- RealSense SDK 2.0가 python version 3.6, 3.7, 3.8, 3.9, 3.10만 지원
    - [Python Wrapper](https://github.com/IntelRealSense/librealsense/tree/master/wrappers/python)  
    ![img](./img/python%20version%20supported.png)  
- [Python Releases for Windows](https://www.python.org/downloads/windows/)  
    ![img](./img/python%203.9.13%20download.png)  
    ![img](./img/add%20python%203.9%20to%20path.png)  
    ![img](./img/success%20install%20pyrealsense2.png)  

### Package 설치
- `pip install opencv-python`
- `pip install pyrealsense2` 

### 예제 코드
- [예제 코드 다운](https://pysource.com/2021/06/24/identify-and-measure-precisely-objects-distance-with-deep-learning-and-intel-realsense/) 회원가입 필요...  
    ![img](./img/download%20ex%20code.png)

### pycharm 설치
- [다운로드 PyCharm](https://www.jetbrains.com/ko-kr/pycharm/download/#section=windows)  
    ![img](./img/download%20pycharm.png)  

### pycharm으로 예제 코드 열기
![img](./img/open%20ex%20code%20on%20pycharm.png)  
![img](./img/project%20opend.png)  

### 예제 실행
- USB3 cable로 연결할 것  
    - USB2 cable 연결시 코드 실행 안됨 [(Couldn't resolve requests)](https://github.com/IntelRealSense/librealsense/issues/2818)  
    ![img](./img/usb2%20can%20make%20error.png)  

![img](./img/run%20example.png)  
![img](./img/output%20of%20example.png)

