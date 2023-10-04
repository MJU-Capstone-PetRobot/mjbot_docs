## Node: base_control

### Description

로봇의 베이스를 제어

### Command

```bash
ros2 launch mjbot_bringup mjbot_bringup.launch.py
```
### Topic List


- 이 노드는 속도 제어 토픽을 구독합니다.


| Name           | Pub/Sub | Msg Type                                 | Msg Structure                 | Hz          | Description           |
|----------------|---------|------------------------------------------|-------------------------------|-------------|-----------------------|
| `/cmd_vel`     | Sub | `geometry_msgs/msg/Twist`               | `linear`, `angular` velocity  | 50 Hz    | Navigation velocity    |
| `/cmd_vel_tracker` | Sub | `geometry_msgs/msg/Twist`           | `linear`, `angular` velocity  | 50 Hz    | Tracking control velocity |
| `/cmd_vel_joy` | Sub | `geometry_msgs/msg/Twist`               | `linear`, `angular` velocity  | 50 Hz    | Joystick control velocity |

