# Info

## node : vision_process

### description

1. 객체 인식
    - 적용 예제 : https://zhuanlan.zhihu.com/p/640590635
    - 사용 모델 : [yolov5s-640-640](https://github.com/rockchip-linux/rknpu2/tree/master/examples/rknn_yolov5_demo/model/RK3588)
    
2. 객체 추종
    - 적용 예제 : https://zhuanlan.zhihu.com/p/640613382
    - 사용 알고리즘 : https://github.com/abewley/sort

3. 낙상 감지
    - 객체 인식 bounding box 가로의 미분 값으로 판단

### command
```
ros2 run vision vision_process
```

### topic list

- 이미지 1장 영상 처리 완료 시 5개의 토픽을 바로 pub 하고 있음, 평균 15 FPS
- 사람 크기와 사람 중심 좌표는 이미지 크기(640x360, 640x480)에 제한 됨

| name          | pub/sub | msg type                               | msg structure             | hz | description |
|---------------|---------|----------------------------------------|---------------------------|----|---|
| /fps          | pub     | example_interfaces/msg/Int32           | data = fps                | 15 | 실시간 영상 처리 FPS |
| /owner_exists | pub     | example_interfaces/msg/Bool            | data = 0 or 1 <br></br> 1 : exists <br></br> 0 : not exists | 15 | 사람 존재 여부 |
| /owner_size   | pub     | example_interfaces/msg/Int16MultiArray | data[2] = [width, height] <br></br> width = 0 ~ 640 <br></br> height = 0 ~ 360 (webcam) <br></br> height = 0 ~ 480 (depth)| 15 | 사람 크기 |
| /owner_center | pub     | example_interfaces/msg/Int16MultiArray | data[2] = [x, y] <br></br> x = 0 ~ 640 <br></br> y = 0 ~ 360 (webcam) <br></br> y = 0 ~ 480 (depth)| 15 | 사람 중심 좌표 | 
| /owner_fall   | pub     | example_interfaces/msg/Bool            | data = 0 or 1 <br></br> 1 : fall <br></br> 0 : usual| 15 | 낙상 의심 여부 |