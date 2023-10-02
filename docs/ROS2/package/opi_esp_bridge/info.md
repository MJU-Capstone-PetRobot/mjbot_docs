# Info

## node : opi_esp_comm

### description

1. 명령 수신 : 감정 상태, 목 제어

2. 상태 전송 : 터치, 거리, 배터리, CO농도

### command
```
ros2 run opi_esp opi_esp_comm
```

### topic list

- /bat, /touch, /co_ppm, /distance
    - esp32->orange pi 패킷 수신 이후 바로 pub 됨
- /bat, /co_ppm
    - hz는 esp32에서 결정됨
- /touch
    - 터치 상태 변화 시에만 pub 됨
- /emo
    - 감정 상태 추가 시에 표정 디자인, esp32 fw, opi_esp_comm node 연동 필요

| name          | pub/sub | msg type                               | msg structure             | hz | description |
|---------------|---------|----------------------------------------|---------------------------|----|---|
| /bat          | pub     | example_interfaces/msg/String          | data = "90%, 1h 20m"      | 1 | 배터리 잔량, 남은 시간 |
| /touch        | pub     | example_interfaces/msg/Bool            | data = 0 or 1 <br></br> 1 : touch <br></br> 0 : no touch | event | 터치 상태 |
| /co_ppm       | pub     | example_interfaces/msg/Int32           | data = 20 ~ 2000 | 1 | CO 농도(ppm) |
| /distance     | pub     | example_interfaces/msg/Int32           | data = 30 ~ 4500 | 10 | 초음파 센서 측정 거리(mm) | 
| /emo          | sub     | example_interfaces/msg/String          | data = "0" ~ "6" <br></br> "0" : NULL <br></br> "1" : close <br></br> "2" : moving <br></br> "3" : wink <br></br> "4" : angry <br></br> "5" : sad <br></br> "6" : daily | 15 | 감정 상태 |
| /neck_rpy     | sub     | geometry_msgs/msg/Vector3              | x = -5 ~ 5 <br></br> y = -5 ~ 5 <br></br> z = -5 ~ 5 | 미정 | 목 플랫폼 r,p,y  회전 각도 |
| /neck_z       | sub     | std_msgs/msg/UInt16                    | data = 60 ~ 100 | 미정 | 목 플랫폼 z 위아래(직선) 움직임 |