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

- 사람 크기와 사람 중심 좌표는 이미지 크기(640x360, 640x480)에 제한 됨

| name        | pub/sub | msg type                     | msg structure                                                                                 | hz    | description    |
| ----------- | ------- | ---------------------------- | --------------------------------------------------------------------------------------------- | ----- | -------------- |
| /owner_size | pub     | std_msgs/msg/Int16MultiArray | data[2] = [width, height] <br></br> width = 0 ~ 640 <br></br> height = 0 ~ 480                | 100   | 사람 크기      |
| /owner_xyz  | pub     | std_msgs/msg/Int16MultiArray | data[3] = [x, y, z] (yes owner) <br></br> x = 0 ~ 640 <br></br> y = 0 ~ 480 <br></br> z = 300 ~ 3000 (mm) <br></br> data[3] = [0, 0, 0] (no owner) | 100   | 사람 중심 좌표 |
| /owner_fall | pub     | std_msgs/msg/Bool            | data = 0 or 1 <br></br> 1 : fall <br></br> 0 : usual                                          | event | 낙상 판단      |