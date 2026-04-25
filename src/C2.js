/*
Câu 2: Trường học Codegym có cách chấm điểm cho học sinh như sau:
    - Điểm của mỗi học sinh nằm trong khoảng từ 0 đến 100.
    - Nếu điểm số của học sinh bé hơn 50 tính là trượt
Trung là một giáo viên tại Codegym và có thói quen làm tròn điểm cho học sinh theo
quy tắc sau:
    - Nếu khoảng cách giữa điểm số của học sinh và bội số tiếp theo của 5 ít hơn 3
thì làm tròn điểm số lên bội số tiếp theo của 5.
    - Nếu điểm số của học sinh bé hơn 48 thì không làm tròn vì kết quả vẫn tính là
trượt.
    Viết hàm thực hiện việc làm tròn điểm số của học sinh theo quy tắc của giáo viên
Trung. (hàm nhận tham số truyền vào là điểm số của học sinh )
Ví dụ:
    - 84 điểm thì làm tròn thành 85 ( 85 – 84 nhỏ hơn 3)
    - 77 điểm thì không làm tròn (80 -77 lớn hơn hoặc bằng 3)
    - 44 điểm thì không làm tròn (kết quả sau khi làm tròn bé hơn 50 bị tính là trượt)
*/

function C2(score){
    if (score > 100 || score < 0){
        console.log("Điểm không hợp lệ")
        return;
    }

    let newScore = score;
    if (score < 48 || score % 5 >= 3){
        newScore = score + 5 - (score % 5);
    }

    console.log("Điểm số học sinh trước khi làm tròn là: " + score);
    console.log("Điểm số học sinh sau khi làm tròn là: " + newScore);
    if(newScore > 50) console.log("Học sinh đỗ");
    else console.log("Học sinh trượt");
}

// INPUT
C2(48);
C2(49);
C2(50);
C2(66);
C2(100);
C2(-1);
