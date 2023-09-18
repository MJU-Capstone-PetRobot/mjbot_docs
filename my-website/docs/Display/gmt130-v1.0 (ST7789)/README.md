# gmt130-v1.0 (ST7789)

## Breif
- board name : [gmt130-v1.0](https://protosupplies.com/product/ips-lcd-1-3-240x240-rgb-display-st7789/)
- LCD display controller : ST7789

![image](https://user-images.githubusercontent.com/48342925/231205033-f228b704-7536-4586-b4ce-e77a1f931cea.png)

## library
- 깃허브에서 다운로드 [Arduino-ST7789-Library](https://github.com/wilmsn/Arduino-ST7789-Library)
- 아두이노 툴에서 Adafruit_GFX 설치

## example Code
- gmt130-v1.0_ST7789_test
- [Arduino-ST7789-Library](https://github.com/wilmsn/Arduino-ST7789-Library)의 예제 수정한 코드
    - 핀 변경
    - Arduino_ST7789 tft = Arduino_ST7789(TFT_DC, TFT_RST, TFT_MOSI, TFT_SCLK);


## Interface
- 보드 기준
    - CS 핀 없음 (SPI에 해당 디바이스만 연결 가능, 여러개 통신 불가)
    - DC 핀이 datasheet상의 WRX과 매치됨, Data인지 Command인지 구분하는 용도
    - SCL 핀은 datasheet상의 DCX과 매치됨, SPI 통신에서 SCLK
    - SDA 핀은 SPI 통신에서 MOSI (Master Out Slave In)

- 4-line serial interface 사용
    - datasheet 55/317p  
    ![image](https://user-images.githubusercontent.com/48342925/231209176-2d028339-7db2-4d8e-b74c-67d3f249853c.png)

## 특이사항
- 우노랑 듀에랑 같은 펌웨어로 돌리는데 듀에에서 디스플레이 동작이 더 느림
- adrafruit에서 제공하는 ST7789 라이브러리는 동작이 안됨. 아마 adafruit 보드와 gmt130-v1.0의 핀맵이 달라서 그런듯 (추측)