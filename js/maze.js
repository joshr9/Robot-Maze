function Maze(width, height) {
  this.width = width
  this.height = height

  this.startX = null
  this.startY = null
  this.startOrientation = null
  this.endX = null
  this.endY = null

  this.spaces = []

  var x, y
  //goes through each column and creates an array element for it
  //That array element will be another empty array
  for (x = 1; x <= width; x++){
    this.spaces[x] = []
    //add one element to the array for each space in the column
    for(y = 1; y <= height; y++){
      this.spaces[x][y] = new MazeSpace
    }
  }

}

// Defines a method called setStart that will be available in all of our maze objects
Maze.prototype.setStart = function(x, y, orientation) {
  this.startX = x
  this.startY = y
  this.startOrientation = orientation
}
 // AKA 2 setter methods to set all 5 of these properties
Maze.prototype.setEnd = function(x, y) {
  this.endX = x
  this.endY = y
}

Maze.prototype.setWall = function(x, y, direction) {
  if(x > 0 && x<= this.width && y > 0 && y <= this.height &&
  ["north", "east", "south", "west"].indexOf(direction) !== -1) {
    this.spaces[x][y].setWall(direction)
    return true
  }
  return false
}
