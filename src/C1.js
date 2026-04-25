 /*
 Câu 1: Cho một mảng số nguyên có số phần tử không vượt quá 20 phần tử, viết
 chương trình tìm tất cả các số có trong mảng là bội chung của 3 và 5, sau đó tính tổng
 của các số đó và hiển thị ra màn hình.
 */

 function C1(arr){
     if (arr.length > 20){
         console.log("Mảng không được vượt quá 20 phần tử");
         return;
     }

     let boiChung = [];
     let count = 0;

     for (let i = 0; i < arr.length; i++){
         if (arr[i] % 3 === 0 && arr[i] % 5 === 0){
             boiChung.push(arr[i]);
             count += arr[i];
         }
     }

     console.log("Các số là bội chung của 3 và 5: " + boiChung.join(", "))
     console.log("Tổng các số đó là: " + count)
 }

 // INPUT
 let arr = [1, 3, 15, 20, 30, 45];
 C1(arr);

 arr.push(33, 60, 75);
 C1(arr);
 