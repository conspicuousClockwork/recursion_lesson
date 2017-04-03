Maze =
[ [1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,0,1,0,1,0,1,0,0,0,0,0,1],
  [1,0,1,0,0,0,1,0,1,1,1,0,1],
  [1,0,0,0,1,1,1,0,0,0,0,0,1],
  [1,0,1,0,0,0,0,0,1,1,1,0,1],
  [1,0,1,0,1,1,1,0,1,0,0,0,1],
  [1,0,1,0,1,0,0,0,1,1,1,0,1],
  [1,0,1,0,1,1,1,0,1,0,1,0,1],
  [1,0,0,0,0,0,0,0,0,0,1,2,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1]
];

function exploreMaze(maze,x,y) {

    if (maze[x][y]===1) {
      return false;
    }

    if (maze[x][y]===2) {
      return true;
    }

    maze[x][y] = 1;

    if (exploreMaze(maze,x,y-1)) {
      return true;
    }
    if (exploreMaze(maze,x,y+1)) {
      return true;
    }
    if (exploreMaze(maze,x-1,y)) {
      return true;
    }
    if (exploreMaze(maze,x+1,y)) {
      return true;
    }

    return false
}

console.log(exploreMaze(Maze,1,1));
