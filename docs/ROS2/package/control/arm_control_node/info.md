# Info

## Arm Control Node

### Description

The `arm_control_node` is responsible for controlling the arm of a robotic system. It subscribes to the `/arm_mode` topic to receive commands for different arm modes and uses the `FollowJointTrajectory` action to control the arm's joint trajectory.

### Command

To run the node, execute the following command:

```bash
ros2 run arm_control arm_control_node
```


### Action State

The `action_state` variable keeps track of the state of the action execution:
- 0: None
- 1: In Progress
- 2: Succeeded
- 3: Aborted
- 4: Rejected

The node sets this state based on the action's response to goal requests.

### Joint Names

The node controls the following arm joints:

- 'r_shoulder_pitch'
- 'r_shoulder_roll'
- 'r_elbow_pitch'
- 'l_shoulder_pitch'
- 'l_shoulder_roll'
- 'l_elbow_pitch'

### Topic List

The node subscribes to the following topic:



| Name             | Pub/Sub | Msg Type                                | Msg Structure                                              | Hz      | Description                                          |
|------------------|---------|-----------------------------------------|------------------------------------------------------------|---------|------------------------------------------------------|
| /arm_mode        | Sub     | std_msgs/msg/String                     | data = "walk," "give_right_hand," "hug," or custom modes  | Variable| Receives commands for different arm modes.             |

