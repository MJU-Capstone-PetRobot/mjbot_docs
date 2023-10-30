# Setup

## Dev Env
1. Arduino IDE
   1. Select Board
      1. ESP32S3 Dev Module
2. Arduino Library
   1. ESP_M
      1. [AX-12A](https://github.com/likhogub/AX-12A-servo-library/tree/master)
      2. [MQSensorsLib](https://github.com/miguel5612/MQSensorsLib)
      3. [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI.git)
   2. ESP_S
      1. [SparkFun_ACS37800_Power_Monitor_Arduino_Library](https://github.com/sparkfun/SparkFun_ACS37800_Power_Monitor_Arduino_Library)
      2. [TinyGPSPlus](https://github.com/mikalhart/TinyGPSPlus)

## Custom Setting

### APP size 변경 (3MB -> 6MB)
- [arduino-esp32 package](https://github.com/espressif/arduino-esp32/releases)  

1. app3M_fat9M_16MB.csv 수정
   1. 파일 경로
      1. C:\Users\USER_NAME\AppData\Local\Arduino15\packages\esp32\hardware\esp32\VERSION\tools\partitions
   2. app1 삭제, app0 size 0x600000 수정
      1. 변경 전  
         ![img](./app3M_fat9M_16MB.csv_no_change.png)  
      2. 변경 후  
         ![img](./app3M_fat9M_16MB.csv_change.png)  
2. boards.txt 수정
   1. 파일 경로
      1. C:\Users\USER_NAME\AppData\Local\Arduino15\packages\esp32\hardware\esp32\VERSION\boards.txt
   2. upload.maximum_size 수정
      1. 변경 전 : esp32s3.menu.PartitionScheme.app3M_fat9M_16MB.upload.maximum_size=`3145728`
      2. 변경 후 : esp32s3.menu.PartitionScheme.app3M_fat9M_16MB.upload.maximum_size=`6291456`
3. Arduino IDE 설정
   1. Tools -> Flash Size -> 16MB
      ![img](./flash_size_16mb.png)
   2. Tools -> Partition Schemoe -> 16M Flash (3MB APP/9.9MB FATFS)
      ![img](./partition_scheme_16m_flash.png)
4. Arduino IDE 다시 시작