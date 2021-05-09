const nums = [3, 4, 9, 6, 2];

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) {
    console.log(nums[i] + ': osztható')
  } else {
    console.log(nums[i] + ': nem osztható')
  }
}