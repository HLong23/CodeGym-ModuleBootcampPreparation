/*
Câu 3: Có một mảng số nguyên gồm n phần tử ( n <= 50) và số nguyên dương k. Đếm
các cặp số trong mảng số nguyên có tổng chia hết cho k.
Ví dụ: Có mảng số nguyên gồm n = 6 phần tử là arr = [1,2,3,4,5,6] và số nguyên
dương là k = 5. Kết quả có 3 cặp số thỏa mãn yêu cầu là (1, 4), (2, 3) và (4, 6).
*/

function C3(arr, k){
    if (arr.length > 50){
        console.log("Mảng không được vượt quá 50 phần tử");
        return;
    }
    
    if (k <= 0) {
        console.log("k phải là số nguyên dương");
        return;
    }

    let pairs = [];
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = i + 1; j < arr.length; j ++){
            if((arr[i] + arr[j]) % k === 0) pairs.push([arr[i],arr[j]]);
        }
    }

    console.log("Số lượng cặp số trong mảng có tổng chia hết cho " + k + " là: " + pairs.length);
    console.log("Các cặp số đó là: ", pairs)
}

// INPUT
let arr = [1, 2, 3, 4, 5, 6];
let k = 5;
C3(arr, k);

arr.push(1, 3, 15, 20, 30, 4);
C3(arr,k);
