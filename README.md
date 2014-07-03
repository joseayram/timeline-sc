# Timeline for Proposals

This is a script that allow us to show timelines to clients.

## Install

1. **Clone the repo**: git clone https://github.com/joseayram/timeline-sc.git

2. **Install the Gems**: bundle install

3. **Run**: rackup

## How can i use?

Create a yaml config file with the name that you decide (without spaces) and the .yml extension and put into /public/estimates/

Complete the information for your config. The structure for the file is the next:

1. month: This action display a circle with the month name. 
2. iteration: is the node for iteration. **You shouldn't put any text here**.
  1. hours: Specify the hours for your iteration. It's a integer value.
  2. tasks: This node is necesary to group the tasks. **You shouldn't put any text here**.
     1. task: Put here the name of the task. This node can repeat anytimes how you need.

*Example (estimates/example.yml)*:

```
- month: June
- iteration:
    hours: 40
    tasks:
      - task: Example task 1
      - task: Example task 2
      - task: Example task 3
      - task: Example task 4
- iteration:
    hours: 40
    tasks:
      - task: Example task 5
      - task: Example task 6
      - task: Example task 7
- iteration:
    hours: 10
    tasks:
      - task: Example task 8
- month: July
```

**NOTE: Remember to follow the indentation for yaml files: two spaces.**

Can you see the site with url: http://yourhost/#name-of-your-file (*without extension*)

### Demo:

[http://timeline-sc.herokuapp.com/#example](http://timeline-sc.herokuapp.com/#example)