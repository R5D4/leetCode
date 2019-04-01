function topKFrequent (nums, k) {
    // O(n) create frequency map, key = num; value = freq
    const map = {};
    nums.forEach(n => map[n] = map[n] ? map[n] + 1 : 1);
    // O(n) get map entries [k, v]
    const freqArr = Object.entries(map);
    // O(nlogn) sort values decreasing by freq
    freqArr.sort((a, b) => b[1] - a[1]);
    // O(k) push value of top k frequent entries into result
    const top = [];
    for (let i = 0; i < k; i++) {
        top.push(+freqArr[i][0]);
    }
    return top;
}

exports.topKFrequent = topKFrequent;