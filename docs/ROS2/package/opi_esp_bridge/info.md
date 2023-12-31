# Info

## Description

1. package : opi_esp
2. node : opi_esp_comm
3. ros2 run command : `ros2 run opi_esp opi_esp_comm`

## Features

 - Orange Pi와 ESP_M 간의 통신 노드
   1. Subscribe 3 ros2 topics and Transmit command to ESP_M
      1. 3개 토픽 : `표정`, `목 rpy`, `목 z`
   2. Receive data from ESP_M and Pulish ros2 topics
      1. 6개 데이터 : `초음파 센서 2개 측정 거리`, `배터리 잔량`, `배터리 지속 시간`, `터치 여부`, `CO농도`. `GPS`

## Topic list

### Publish

| name          | msg type              | msg structure                                                                                                                                                                                                                | hz    | description              |
| ------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- | ------------------------ |
| /ultrasonic_1 | sensor_msgs/msg/Range | msg.radiation_type = 0 (ULTRASOUND) <br></br> msg.field_of_view = 1.0472 (radian, 60 degree = 1.0472 radian) <br></br> msg.min_range = 0.030 (m) <br></br> msg.max_range = 4.500 (m) <br></br> msg.range = 0.030 ~ 4.500 (m) | 10    | 전방 초음파 센서 측정 거리(m) |
| /ultrasonic_2 | sensor_msgs/msg/Range | msg.radiation_type = 0 (ULTRASOUND) <br></br> msg.field_of_view = 1.0472 (radian, 60 degree = 1.0472 radian) <br></br> msg.min_range = 0.030 (m) <br></br> msg.max_range = 4.500 (m) <br></br> msg.range = 0.030 ~ 4.500 (m) | 10    | 후방 초음파 센서 측정 거리(m) |
| /bat_percent  | std_msgs/msg/String   | msg.data = "0.00" ~ "100.00"                                                                                                                                                                                                     | 0.3   | 배터리 잔량 (%)              |
| /bat_time     | std_msgs/msg/String   | msg.data = "0h 0m" ~ "99h 99m"                                                                                                                                                                                    | 0.3   | 배터리 지속 시간         |
| /touch        | std_msgs/msg/Bool     | msg.data = 0 (no touch) ~ 1 (touch)                                                                                                                                                                                          | event | 터치 상태                |
| /co_ppm       | std_msgs/msg/Int32    | msg.data = 0 ~ 10000                                                                                                                                                                                                         | 0.3   | CO 농도(ppm)             |
| /gps          | std_msgs/msg/String   | msg.data = "37.663998, 127.978462"                                                                                                                                                                                           | 0.2   | Latitude, Longitude      |


### Subscribe

| name      | msg type                  | msg structure                                                                                                                                                                                                                                                            | hz    | description                     |
| --------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----- | ------------------------------- |
| /emo      | std_msgs/msg/String       | msg.data = "daily" ~ "mic_waiting" <br></br> daily (평범) <br></br> wink (기쁨) <br></br> sad (슬픔) <br></br> angry (분노) <br></br> moving (당황) <br></br> blink (눈 깜빡) <br></br> low_bat (배터리 부족) <br></br> danger (위험) <br></br> mic_wating (음성 기다림) | Event | 표정                            |
| /neck_rpyz | geometry_msgs/msg/Quaternion | msg.x = -5 ~ 5 <br></br> msg.y = -5 ~ 5 <br></br> msg.z = -5 ~ 5 <br></br> msg.w = 60 ~ 100        