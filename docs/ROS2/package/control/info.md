

#### Node: random_move

| **Node: random_move** |                            |
|----------------------|----------------------------|
| **설명**                | 로봇의 무작위 이동을 제어하는 노드입니다.    |
| **노드 실행 명령**         | `ros2 run random_move random_move.py` |
| **토픽**                |                            |

| Name       | Pub/Sub | Msg Type                | Msg Structure                         | 주파수 (Hz) | 설명                                   |
|------------|---------|-------------------------|--------------------------------------|--------------|---------------------------------------|
| `/cmd_vel` | Publish | `geometry_msgs/Twist`   | `linear.x`, `linear.y`, `linear.z`, `angular.x`, `angular.y`, `angular.z` 필드 | 가변 | 로봇의 선속도 및 각속도 명령을 발행합니다. |
| `/rangef`  | Subscribe | `sensor_msgs/Range`     | `range`, `field_of_view` 필드         | 가변 | 전방 초음파 센서로부터의 거리 및 시야 각도 데이터를 구독합니다. |
| `/rangeb`  | Subscribe | `sensor_msgs/Range`     | `range`, `field_of_view` 필드         | 가변 | 후방 초음파 센서로부터의 거리 및 시야 각도 데이터를 구독합니다. |

#### Node: base_control

| **Node: base_control** |                            |
|-----------------------|----------------------------|
| **설명**               | 로봇의 베이스를 제어하는 노드입니다. |
| **노드 실행 명령**        | `ros2 launch mjbot_bringup mjbot_bringup.launch.py` |
| **토픽**               |                            |

| Name              | Pub/Sub | Msg Type                | Msg Structure                  | 주파수 (Hz) | 설명                                |
|-------------------|---------|-------------------------|-------------------------------|--------------|------------------------------------|
| `/cmd_vel`        | Subscribe | `geometry_msgs/Twist`   | `linear`, `angular` 속도        | 50 Hz | 로봇의 네비게이션 속도 명령을 구독합니다.  |
| `/cmd_vel_tracker` | Subscribe | `geometry_msgs/Twist`   | `linear`, `angular` 속도        | 50 Hz | 추적 제어 속도 명령을 구독합니다.     |
| `/cmd_vel_joy`    | Subscribe | `geometry_msgs/Twist`   | `linear`, `angular` 속도        | 50 Hz | 조이스틱 제어 속도 명령을 구독합니다. |

#### Node: Arm Control

| **Node: Arm Control** |                            |
|----------------------|----------------------------|
| **설명**                | 로봇 시스템의 팔을 제어하는 노드입니다.    |
| **노드 실행 명령**         | `ros2 run arm_control arm_control_node` |
| **액션 상태**            | 액션 실행 상태를 나타내는 `action_state` 변수가 있습니다. 다음과 같은 값으로 설정됩니다:
  - 0: None
  - 1: In Progress
  - 2: Succeeded
  - 3: Aborted
  - 4: Rejected |
| **조인트 이름**            | 노드는 다음과 같은 팔 조인트를 제어합니다:
  - 'r_shoulder_pitch'
  - 'r_shoulder_roll'
  - 'r_elbow_pitch'
  - 'l_shoulder_pitch'
  - 'l_shoulder_roll'
  - 'l_elbow_pitch' |
| **토픽**                |                            |

| Name      | Pub/Sub | Msg Type                | Msg Structure             | 주파수 (Hz) | 설명                                |
|-----------|---------|-------------------------|---------------------------|--------------|------------------------------------|
| `/arm_mode` | Subscribe | `std_msgs/msg/String`  | `data` 필드                | 가변 | 다양한 팔 모드에 대한 명령을 수신합니다. |
| `/emo`    | Subscribe | `std_msgs/msg/String`  | `data` 필드                | 가변 | 감정 명령을 수신합니다.             |
| `/joint_states` | Subscribe | `sensor_msgs/msg/JointState` | `name`, `effort` 필드 | 가변 | 조인트 상태 정보를 수신합니다.      |

#### Node: HoldingHandNode

| **Node: HoldingHandNode** |                            |
|-------------------------|----------------------------|
| **설명**                    | 관절 노력을 기반으로 로봇을 "손을 잡는" 모드로 제어하는 노드입니다. |
| **노드 실행 명령**             | `ros2 run <package_name> <executable_name>` (패키지 및 실행 파일 이름을 실제 값으로 대체하세요.) |
| **토픽**                    |                            |

| Name            | Pub/Sub | Msg Type                | Msg Structure                | 주파수 (Hz) | 설명                                    |
|-----------------|---------|-------------------------|-----------------------------|--------------|----------------------------------------|
| `mode`          | Subscribe | `std_msgs/msg/String`  | `data` 필드                   | 10 | 모드 정보를 수신합니다.                   |
| `cmd_vel_walk`  | Publish | `geometry_msgs/msg/Twist` | `linear.x`, `angular.z` 필드 | 10 | 속도 명령을 발행합니다.                  |
| `/joint_states` | Subscribe | `sensor_msgs/msg/JointState` | `name`, `effort` 필드 | 10 | 조인트 상태 정보를 수신합니다.          |

#### Node: idle mode

| **Node: idle mode** |                            |
|--------------------|----------------------------|
| **설명**              | 팔 움직임 및 모드를 제어하는 노드입니다.     |
| **노드 실행 명령**       | `ros2 run <package_name> <executable_name>` (패키지 및 실행 파일 이름을

 실제 값으로 대체하세요.) |
| **토픽**              |                            |

| Name           | Pub/Sub | Msg Type                | Msg Structure                | 주파수 (Hz) | 설명                                        |
|----------------|---------|-------------------------|-----------------------------|--------------|--------------------------------------------|
| `arm_mode`     | Subscribe | `std_msgs/msg/String`  | `data` 필드                   | 10 | 팔 모드 명령을 수신합니다.                  |
| `emo`          | Subscribe | `std_msgs/msg/String`  | `data` 필드                   | 10 | 감정 명령을 수신합니다.                   |
| `/joint_states` | Subscribe | `sensor_msgs/msg/JointState` | `name`, `effort` 필드 | 10 | 조인트 상태 정보를 수신합니다.            |
| `mode`         | Subscribe | `std_msgs/msg/String`  | `data` 필드                   | 10 | 모드 정보를 수신합니다.                   |
| `owner_fall`   | Subscribe | `std_msgs/msg/Bool`    | `data` 필드                   | 10 | 소유자 추락 상태를 수신합니다.          |
| `co_ppm`       | Subscribe | `std_msgs/msg/Int32`   | `data` 필드                   | 10 | 이산화탄소 (ppm) 농도를 수신합니다. |

#### Node: NeckControllerPublisher

| **Node: NeckControllerPublisher** |                            |
|----------------------------------|----------------------------|
| **설명**                            | 목의 방향 명령을 발행하는 노드입니다. |
| **노드 실행 명령**                     | `ros2 run <package_name> <executable_name>` (패키지 및 실행 파일 이름을 실제 값으로 대체하세요.) |
| **토픽**                            |                            |

| Name         | Pub/Sub | Msg Type              | Msg Structure             | 주파수 (Hz) | 설명                               |
|--------------|---------|-----------------------|---------------------------|--------------|-----------------------------------|
| `neck_rpyz`  | Publish | `geometry_msgs/Quaternion` | `x`, `y`, `z`, `w` 필드  | 가변 | 목 방향 명령 (RPYZ)을 발행합니다. |

#### Node: CommandNeck

| **Node: CommandNeck** |                            |
|-----------------------|----------------------------|
| **설명**                 | 감정에 따라 목 움직임 명령을 처리하는 노드입니다. |
| **노드 실행 명령**          | `ros2 run <package_name> <executable_name>` (패키지 및 실행 파일 이름을 실제 값으로 대체하세요.) |
| **구독하는 토픽**          |                            |

| Name     | Msg Type            | Msg Structure       | 설명                         |
|----------|---------------------|---------------------|------------------------------|
| `emo`    | `std_msgs/msg/String` | `data` 필드       | 감정 명령을 수신합니다.      |
| `owner_xyz` | `std_msgs/Int16MultiArray` | `data` 필드 | 소유자의 얼굴 중심 좌표를 수신합니다. |


#### Node: TrackingDriver

| **Node: TrackingDriver** |                            |
|-------------------------|----------------------------|
| **설명**                  | 추적되는 사람의 위치를 기반으로 로봇을 제어하는 노드입니다. |
| **노드 실행 명령**           | `ros2 run <package_name> <executable_name>` (패키지 및 실행 파일 이름을 실제 값으로 대체하세요.) |
| **토픽**                  |                            |

| Name              | Msg Type                | Msg Structure                  | 설명                               |
|-------------------|-------------------------|-------------------------------|-----------------------------------|
| `cmd_vel_tracker` | `geometry_msgs/Twist`   | `linear.x`, `linear.y`, `linear.z`, `angular.x`, `angular.y`, `angular.z` 필드 | 사람을 추적하기 위한 속도 명령을 발행합니다. |
| `owner_xyz`       | `std_msgs/Int16MultiArray` | `data` 필드                 | 소유자의 얼굴 중심 좌표를 수신합니다. |
| `mode`            | `std_msgs/String`       | `data` 필드                  | 로봇을 구동하기 위한 모드 (예: "tracking")를 수신합니다. |

#### Node: RandomMoveRobot

| **Node: RandomMoveRobot** |                            |
|--------------------------|----------------------------|
| **설명**                     | 장애물 피하 이동 행동을 포함한 로봇의 무작위 이동을 제어하는 노드입니다. |
| **노드 실행 명령**              | `ros2 run <package_name> <executable_name>` (패키지 및 실행 파일 이름을 실제 값으로 대체하세요.) |
| **토픽**                     |                            |

| Name         | Msg Type                | Msg Structure                  | 설명                                      |
|--------------|-------------------------|-------------------------------|------------------------------------------|
| `cmd_vel_rand` | `geometry_msgs/Twist`   | `linear.x`, `linear.y`, `linear.z`, `angular.x`, `angular.y`, `angular.z` 필드 | 무작위 이동 및 장애물 피하 이동을 위한 속도 명령을 발행합니다. |
| `mode`       | `std_msgs/String`       | `data` 필드                  | 무작위 이동을 제어하기 위한 모드 (예: "rand")를 수신합니다. |
| `distance1`  | `sensor_msgs/Range`     | `range`, `field_of_view` 필드 | 거리 센서에서 거리 및 시야 각도 데이터를 수신합니다. |

