# Run SDK 2.0 example on win10

##  Website
- [How to Run Intel® RealSense™ SDK 2.0 Examples on Visual Studio 2017 on Windows® 10 machine?](https://www.intel.com/content/www/us/en/support/articles/000030463/emerging-technologies/intel-realsense-technology.html)

## Step
1. Install [CMAKE](https://cmake.org/download/)
2. Clone [Intel® RealSense™ SDK 2.0](https://github.com/IntelRealSense/librealsense) using git  
    ![pic](./img/clone%20sdk.png)
3. Run cmake-gui  
    ![pic](./img/rum%20cmake-gui.png)
4. Fill source code & binaries locations  
    ![pic](./img/fill%20location.png)
5. Configure  
    ![pic](./img/configure.png)  
    ![pic](./img/create%20buile%20directory.png)    
    PC에 Visual Studio 2022 버전을 설치해서 2022로 선택함  
    ![pic](./img/specify%20generator.png)  
    ![pic](./img/configure%20done.png)  
6. Generate  
    ![pic](./img/generate.png)
7. Open Project  
    ![pic](./img/open%20project.png)
    ![pic](./img/vs%20opened.png)
8. Set up as start up project  
    ![pic](./img/set%20up%20as%20start%20up%20project.png)
9. Run align example (F5)  
    ![pic](./img/align%20example.png)
