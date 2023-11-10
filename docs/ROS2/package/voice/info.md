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
- /owner_fall
- /bat_percent
- /bat_time

| name          | pub/sub | msg type                               | msg structure             | hz | description |
|---------------|---------|----------------------------------------|---------------------------|----|---|
| /bat          | sub     | std_msgs/msg/String          | data = "90%, 1h 20m"      | 1 | 배터리 잔량, 남은 시간 |
| /touch        | sub     | std_msgs/msg/Bool            | data = 0 or 1 <br></br> 1 : touch <br></br> 0 : no touch | event | 터치 상태 |
| /co_ppm       | sub     | std_msgs/msg/Int32           | data = 20 ~ 2000 | 1 | CO 농도(ppm) |
| /owner_fall   | sub     | std_msgs/msg/Bool            | data = 0 or 1 <br></br> 1 : fall <br></br> 0 : usual| 낙상 의심 발생 시 | 낙상 의심 여부 |
| /emo          | pub     | std_msgs/msg/String          | data = "NULL" ~ "mic_waiting" <br></br> "NULL" : NULL <br></br> "close" : close <br></br> "moving" : 당황 <br></br> "wink" : 윙크 <br></br> "angry" :  분노 <br></br> "sad" : 슬픔 <br></br> "daily" : 평소 <br></br> "mic_wating" : 음성 기다림 | 미정 | 감정 상태 |
| /bat_percent  | std_msgs/msg/String   | msg.data = "0.00" ~ "100.00"                                                                                                                                                                                                     | 0.3   | 배터리 잔량 (%)              |
| /bat_time     | std_msgs/msg/String   | msg.data = "0h 0m" ~ "99h 99m"                                                                                                                                                                                    | 0.3   | 배터리 지속 시간         |