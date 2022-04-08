function getMinDiff(arr, n, k) {
  arr.sort((a, b) => a - b);
  let ans = arr[n - 1] - arr[0];
  let tempmin, tempmax;
  tempmin = arr[0];
  tempmax = arr[n - 1];
  for (let i = 1; i < n; i++) {
    tempmin = Math.min(arr[0] + k, arr[i] - k);
    tempmax = Math.max(arr[i - 1] + k, arr[n - 1] - k);
    ans = Math.min(ans, tempmax - tempmin);
  }
  return ans;
  // console.log("res==", ans);
}

getMinDiff([1, 2, 3, 5, 6, 7], 6, 6);
