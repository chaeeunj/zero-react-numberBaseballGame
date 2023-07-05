export function generateRandomNumber() {
  // 1 ~ 9까지 숫자를 이용
  const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // 랜덤하게 섞어서 4자리 숫자만 이용
  const pickedNumbers = shuffle(candidates).splice(0, 4); // 4자리를 뽑음

  return pickedNumbers;
}

function shuffle(array) {
  // Math.random()을 사용하여 0 ~ 1까지 랜덤하게 뽑아줌
  // array.sort()를 사용하여 섞어줌

  // array.sort() : 음수를 반환하면 내림차순 정렬, 양수를 반환하면 오름차순 정렬을 함
  return array.sort(() => {
    return Math.random() - 0.5; // -0.5 ~ 0.5를 반환
  });
}
