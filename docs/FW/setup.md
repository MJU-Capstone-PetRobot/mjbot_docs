# Setup

## Hardware

1. [ESP32-S3-WROOM-1 개발보드](https://smartstore.naver.com/bneware/products/6729229592)  
    <img src="./ESP32-S3-WROOM-1%20dev%20board.png" width="30%" height="30%"></img>

2. [MQ-7 일산화탄소 가스 센서 모듈](https://www.devicemart.co.kr/goods/view?no=1327402)  
     <img src="./mq7-module.png" width="30%" height="30%"></img>

## Dev Env
1. Arduino IDE
2. Arduino Library
   1. [AX-12A](https://github.com/likhogub/AX-12A-servo-library/tree/master)
   2. [MQSensorsLib](https://github.com/miguel5612/MQSensorsLib)
   3. [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI.git)

## ESP32_M Pin Wiring

|           |     | Dev Board |     |     |      |          |                |
| --------- | --- | --------- | --- | --- | ---- | -------- | -------------- |
|           |     | 3.3V      |     |     | GND  |          |                |
|           |     | 3.3V      |     |     | TXD0 | UART0 TX | Opi TX (USB-C) |
|           |     | RST(EN)   |     |     | RXD0 | UART0 RX | Opi RX (USB-C) |
|           |     | IO4       |     |     | IO1  | UART1 TX | Neck TX        |
|           |     | IO5       |     |     | IO2  | UART1 RX | Neck RX        |
|           |     | IO6       |     |     | IO42 |          |                |
|           |     | IO7       |     |     | IO41 |          |                |
|           |     | IO15      |     |     | IO40 | UART3 TX | ESP_S TX       |
| 터치 센서 | ADC | IO16      |     |     | IO39 | UART3 RX | ESP_S RX       |
| 가스 센서 | ADC | IO17      |     |     | IO38 |          |                |
|           |     | IO18      |     |     | IO37 | PSRAM    |                |
|           |     | IO8       |     |     | IO36 | PSRAM    |                |
|           |     | IO3       |     |     | IO35 | PSRAM    |                |
|           |     | IO46      |     |     | IO0  |          |                |
|           |     | IO9       |     |     | IO45 |          |                |
| L 눈      | CS  | IO10      |     |     | IO48 | 컬러LED  |                |
| 눈        | RST | IO11      |     |     | IO47 |          |                |
| R 눈      | CS  | IO12      |     |     | IO21 | DC       | 눈             |
| 눈        | DIN | IO13      |     |     | IO20 |          |                |
| 눈        | CLK | IO14      |     |     | IO19 |          |                |
|           |     | VIN(5V)   |     |     | GND  |          |                |
|           |     | GND       |     |     | GND  |          |                |

## ESP32_S Pin Wiring

|                |       | Dev Board |     |     |      |          |                 |
| -------------- | ----- | --------- | --- | --- | ---- | -------- | --------------- |
|                |       | 3.3V      |     |     | GND  |          |                 |
|                |       | 3.3V      |     |     | TXD0 | UART0 TX | USB-C           |
|                |       | RST(EN)   |     |     | RXD0 | UART0 RX | USB-C           |
|                |       | IO4       |     |     | IO1  | UART1 TX | Ultrasonic 1 TX |
|                |       | IO5       |     |     | IO2  | UART1 RX | Ultrasonic 1 RX |
| ESP32_M        | UART1 | IO6       |     |     | IO42 | UART2 TX | Ultrasonic 2 TX |
| ESP32_M        | UART1 | IO7       |     |     | IO41 | UART2 RX | Ultrasonic 2 RX |
|                |       | IO15      |     |     | IO40 |          |                 |
|                |       | IO16      |     |     | IO39 |          |                 |
|                |       | IO17      |     |     | IO38 |          |                 |
|                |       | IO18      |     |     | IO37 | PSRAM    |                 |
|                |       | IO8       |     |     | IO36 | PSRAM    |                 |
|                |       | IO3       |     |     | IO35 | PSRAM    |                 |
|                |       | IO46      |     |     | IO0  |          |                 |
|                |       | IO9       |     |     | IO45 |          |                 |
|                |       | IO10      |     |     | IO48 | 컬러LED  |                 |
| LCD            | I2C1  | IO11      |     |     | IO47 |          |                 |
| LCD            | I2C1  | IO12      |     |     | IO21 |          |                 |
| Current Sensor | I2C   | IO13      |     |     | IO20 |          |                 |
| Current Sensor | I2C   | IO14      |     |     | IO19 |          |                 |
|                |       | VIN(5V)   |     |     | GND  |          |                 |
|                |       | GND       |     |     | GND  |          |                 |
