# Info

## node : voice

### description

1. 명령 수신 : 낙상 의심, CO농도, 배터리, 터치

2. 상태 전송 : 감정 상태, 목 제어, 팔 제어

### command
```
ros2 run mjbot_voice mjbot_voice.py
```

### topic list

- /bat, /co_ppm
- /touch
- /emo
- /arm_mode
- /neck_rpy, /neck_z
- /owner_fall

| name          | pub/sub | msg type                               | msg structure             | hz | description |
|---------------|---------|----------------------------------------|---------------------------|----|---|
| /bat          | sub     | example_interfaces/msg/String          | data = "90%, 1h 20m"      | 1 | 배터리 잔량, 남은 시간 |
| /touch        | sub     | example_interfaces/msg/Bool            | data = 0 or 1 <br></br> 1 : touch <br></br> 0 : no touch | event | 터치 상태 |
| /co_ppm       | sub     | example_interfaces/msg/Int32           | data = 20 ~ 2000 | 1 | CO 농도(ppm) |
| /owner_fall   | sub     | example_interfaces/msg/Bool            | data = 0 or 1 <br></br> 1 : fall <br></br> 0 : usual| 낙상 의심 발생 시 | 낙상 의심 여부 |
| /emo          | pub     | example_interfaces/msg/String          | data = "0" ~ "6" <br></br> "0" : NULL <br></br> "1" : close <br></br> "2" : moving <br></br> "3" : wink <br></br> "4" : angry <br></br> "5" : sad <br></br> "6" : daily | 미정 | 감정 상태 |
| /neck_rpy     | pub     | geometry_msgs/msg/Vector3              | x = -5 ~ 5 <br></br> y = -5 ~ 5 <br></br> z = -5 ~ 5 | 미정 | 목 플랫폼 r,p,y  회전 각도 |
| /neck_z       | pub     | std_msgs/msg/UInt16                    | data = 60 ~ 100 | 미정 | 목 플랫폼 z 위아래(직선) 움직임 |
| /arm_mode        | pub     | std_msgs/msg/String                     | data = "walk," "give_right_hand," "hug," or custom modes  | Variable| Receives commands for different arm modes.             |