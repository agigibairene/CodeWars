/*
  There was a test in your class and you passed it. Congratulations!
  But you're an ambitious person. You want to know if you're better than the average student in your class.
  You receive an array with your peers' test scores. Now calculate the average and compare your score!
  Return true if you're better, else false!
  Note:
  Your points are not included in the array of your class's points.
  Do not forget them when calculating the average score!
*/

void main() {
  print(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
  betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69);
}

bool betterThanAverage(List<int> classPoints, int yourPoints){
  int totalScore = yourPoints;
  // plus 1 for you since you are not part of the classPoints array
  int numOfStudents = classPoints.length + 1;

  for (int score in classPoints){
    totalScore +=score;
  }
  // calculating average score
  num averageScore = totalScore / numOfStudents;

  // comparing your score to the average score
  return averageScore < yourPoints ? true : false;
}