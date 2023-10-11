# Info

## node : alert

### description

1. 명령 수신 : 낙상 의심, CO농도

2. 상태 전송 : 

### command
```
ros2 run mjbot_alert mjbot_alert.py
```

### topic list

- /co_ppm
- /owner_fall

| name          | pub/sub | msg type                               | msg structure             | hz | description |
|---------------|---------|----------------------------------------|---------------------------|----|---|
| /co_ppm       | sub     | example_interfaces/msg/Int32           | data = 20 ~ 2000 | 1 | CO 농도(ppm) |
| /owner_fall   | sub     | example_interfaces/msg/Bool            | data = 0 or 1 <br></br> 1 : fall <br></br> 0 : usual| 낙상 의심 발생 시 | 낙상 의심 여부 |