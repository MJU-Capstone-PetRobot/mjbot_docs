
# Info



## Command to Run the Node

```bash
ros2 run random_move random_move.py
```

## Topics

| name       | pub/sub | msg type                  | msg structure                                                                                     | hz       | description                                                     |
|------------|---------|---------------------------|---------------------------------------------------------------------------------------------------|----------|-----------------------------------------------------------------|
| /cmd_vel   | pub     | geometry_msgs/msg/Twist   | linear.x, linear.y, linear.z, angular.x, angular.y, angular.z                                     | Variable | Commands for robot's linear and angular movement.               |
| /rangef     | sub     | sensor_msgs/msg/Range     | range, field_of_view   | Variable | Front Ultrasonic sensor|
| /rangeb     | sub     | sensor_msgs/msg/Range     | range, field_of_view   | Variable | Back Ultrasonic sensor|

