//答え
var A_ans = ["7","5","9","2","6","4","8","1","3"];
var B_ans = ["1","3","6","8","7","5","4","2","9"];
var C_ans = ["2","4","8","1","3","9","5","6","7"];

var D_ans = ["9","1","3","5","2","6","7","4","8"];
var E_ans = ["8","6","5","3","4","7","2","9","1"];
var F_ans = ["4","7","2","9","1","8","6","3","5"];

var G_ans = ["3","2","7","6","5","1","9","8","4"];
var H_ans = ["5","8","1","4","9","2","3","7","6"];
var I_ans = ["6","9","4","7","8","3","1","5","2"];

//問題
var A_question = ["7","5","9","2","6","4","8","1","3"];
var B_question = ["1","3","6","8","7","5","4","2","9"];
var C_question = ["2","4","8","1","3","9","5","6","7"];

var D_question = ["9","1","3","5","2","6","7","4","8"];
var E_question = ["8","6","5","3","4","7","2","9","1"];
var F_question = ["4","7","2","9","1","8","6","3","5"];

var G_question = ["3","2","7","6","5","1","9","8","4"];
var H_question = ["5","8","1","4","9","2","3","7","6"];
var I_question = ["6","9","4","7","8","3","1","5","2"];

//ランダム関数
function randomNm(max, min){
        var x = Math.floor( Math.random() * (max + 1 - min) ) + min ;
       return x;
       }

//ランダム数
var A_i = randomNm(8, 0);
var B_i = randomNm(8, 0);
var C_i = randomNm(8, 0);

var D_i = randomNm(8, 0);
var E_i = randomNm(8, 0);
var F_i = randomNm(8, 0);

var G_i = randomNm(8, 0);
var H_i = randomNm(8, 0);
var I_i = randomNm(8, 0);

A_question[A_i] = "0";
B_question[B_i] = "0";
C_question[C_i] = "0";

D_question[D_i] = "0";
E_question[E_i] = "0";
F_question[F_i] = "0";

G_question[G_i] = "0";
H_question[H_i] = "0";
I_question[I_i] = "0";

//出力
var A1 = document.getElementById("A1");
A1.value = A_question[0];
var A2 = document.getElementById("A2");
A2.value = A_question[1];
var A3 = document.getElementById("A3");
A3.value = A_question[2];
var A4 = document.getElementById("A4");
A4.value = A_question[3];
var A5 = document.getElementById("A5");
A5.value = A_question[4];
var A6 = document.getElementById("A6");
A6.value = A_question[5];
var A7 = document.getElementById("A7");
A7.value = A_question[6];
var A8 = document.getElementById("A8");
A8.value = A_question[7];
var A9 = document.getElementById("A9");
A9.value = A_question[8];

var B1 = document.getElementById("B1");
B1.value = B_question[0];
var B2 = document.getElementById("B2");
B2.value = B_question[1];
var B3 = document.getElementById("B3");
B3.value = B_question[2];
var B4 = document.getElementById("B4");
B4.value = B_question[3];
var B5 = document.getElementById("B5");
B5.value = B_question[4];
var B6 = document.getElementById("B6");
B6.value = B_question[5];
var B7 = document.getElementById("B7");
B7.value = B_question[6];
var B8 = document.getElementById("B8");
B8.value = B_question[7];
var B9 = document.getElementById("B9");
B9.value = B_question[8];

var C1 = document.getElementById("C1");
C1.value = C_question[0];
var C2 = document.getElementById("C2");
C2.value = C_question[1];
var C3 = document.getElementById("C3");
C3.value = C_question[2];
var C4 = document.getElementById("C4");
C4.value = C_question[3];
var C5 = document.getElementById("C5");
C5.value = C_question[4];
var C6 = document.getElementById("C6");
C6.value = C_question[5];
var C7 = document.getElementById("C7");
C7.value = C_question[6];
var C8 = document.getElementById("C8");
C8.value = C_question[7];
var C9 = document.getElementById("C9");
C9.value = C_question[8];

var D1 = document.getElementById("D1");
D1.value = D_question[0];
var D2 = document.getElementById("D2");
D2.value = D_question[1];
var D3 = document.getElementById("D3");
D3.value = D_question[2];
var D4 = document.getElementById("D4");
D4.value = D_question[3];
var D5 = document.getElementById("D5");
D5.value = D_question[4];
var D6 = document.getElementById("D6");
D6.value = D_question[5];
var D7 = document.getElementById("D7");
D7.value = D_question[6];
var D8 = document.getElementById("D8");
D8.value = D_question[7];
var D9 = document.getElementById("D9");
D9.value = D_question[8];

var E1 = document.getElementById("E1");
E1.value = E_question[0];
var E2 = document.getElementById("E2");
E2.value = E_question[1];
var E3 = document.getElementById("E3");
E3.value = E_question[2];
var E4 = document.getElementById("E4");
E4.value = E_question[3];
var E5 = document.getElementById("E5");
E5.value = E_question[4];
var E6 = document.getElementById("E6");
E6.value = E_question[5];
var E7 = document.getElementById("E7");
E7.value = E_question[6];
var E8 = document.getElementById("E8");
E8.value = E_question[7];
var E9 = document.getElementById("E9");
E9.value = E_question[8];

var F1 = document.getElementById("F1");
F1.value = F_question[0];
var F2 = document.getElementById("F2");
F2.value = F_question[1];
var F3 = document.getElementById("F3");
F3.value = F_question[2];
var F4 = document.getElementById("F4");
F4.value = F_question[3];
var F5 = document.getElementById("F5");
F5.value = F_question[4];
var F6 = document.getElementById("F6");
F6.value = F_question[5];
var F7 = document.getElementById("F7");
F7.value = F_question[6];
var F8 = document.getElementById("F8");
F8.value = F_question[7];
var F9 = document.getElementById("F9");
F9.value = F_question[8];

var G1 = document.getElementById("G1");
G1.value = G_question[0];
var G2 = document.getElementById("G2");
G2.value = G_question[1];
var G3 = document.getElementById("G3");
G3.value = G_question[2];
var G4 = document.getElementById("G4");
G4.value = G_question[3];
var G5 = document.getElementById("G5");
G5.value = G_question[4];
var G6 = document.getElementById("G6");
G6.value = G_question[5];
var G7 = document.getElementById("G7");
G7.value = G_question[6];
var G8 = document.getElementById("G8");
G8.value = G_question[7];
var G9 = document.getElementById("G9");
G9.value = G_question[8];

var H1 = document.getElementById("H1");
H1.value = H_question[0];
var H2 = document.getElementById("H2");
H2.value = H_question[1];
var H3 = document.getElementById("H3");
H3.value = H_question[2];
var H4 = document.getElementById("H4");
H4.value = H_question[3];
var H5 = document.getElementById("H5");
H5.value = H_question[4];
var H6 = document.getElementById("H6");
H6.value = H_question[5];
var H7 = document.getElementById("H7");
H7.value = H_question[6];
var H8 = document.getElementById("H8");
H8.value = H_question[7];
var H9 = document.getElementById("H9");
H9.value = H_question[8];

var I1 = document.getElementById("I1");
I1.value = I_question[0];
var I2 = document.getElementById("I2");
I2.value = I_question[1];
var I3 = document.getElementById("I3");
I3.value = I_question[2];
var I4 = document.getElementById("I4");
I4.value = I_question[3];
var I5 = document.getElementById("I5");
I5.value = I_question[4];
var I6 = document.getElementById("I6");
I6.value = I_question[5];
var I7 = document.getElementById("I7");
I7.value = I_question[6];
var I8 = document.getElementById("I8");
I8.value = I_question[7];
var I9 = document.getElementById("I9");
I9.value = I_question[8];





// ボタンの要素を取得
var button = document.getElementById("button");
 
// ボタンをクリックした時の処理
button.addEventListener("click", function(e) {
 
    e.preventDefault();
 
    // 2つの入力フォームの値を取得
    var A1 = document.getElementById("A1").value;
    var A2 = document.getElementById("A2").value;
    var A3 = document.getElementById("A3").value;
    var A4 = document.getElementById("A4").value;
    var A5 = document.getElementById("A5").value;
    var A6 = document.getElementById("A6").value;
    var A7 = document.getElementById("A7").value;
    var A8 = document.getElementById("A8").value;
    var A9 = document.getElementById("A9").value;

    var B1 = document.getElementById("B1").value;
    var B2 = document.getElementById("B2").value;
    var B3 = document.getElementById("B3").value;
    var B4 = document.getElementById("B4").value;
    var B5 = document.getElementById("B5").value;
    var B6 = document.getElementById("B6").value;
    var B7 = document.getElementById("B7").value;
    var B8 = document.getElementById("B8").value;
    var B9 = document.getElementById("B9").value;

    var C1 = document.getElementById("C1").value;
    var C2 = document.getElementById("C2").value;
    var C3 = document.getElementById("C3").value;
    var C4 = document.getElementById("C4").value;
    var C5 = document.getElementById("C5").value;
    var C6 = document.getElementById("C6").value;
    var C7 = document.getElementById("C7").value;
    var C8 = document.getElementById("C8").value;
    var C9 = document.getElementById("C9").value;

    var D1 = document.getElementById("D1").value;
    var D2 = document.getElementById("D2").value;
    var D3 = document.getElementById("D3").value;
    var D4 = document.getElementById("D4").value;
    var D5 = document.getElementById("D5").value;
    var D6 = document.getElementById("D6").value;
    var D7 = document.getElementById("D7").value;
    var D8 = document.getElementById("D8").value;
    var D9 = document.getElementById("D9").value;

    var E1 = document.getElementById("E1").value;
    var E2 = document.getElementById("E2").value;
    var E3 = document.getElementById("E3").value;
    var E4 = document.getElementById("E4").value;
    var E5 = document.getElementById("E5").value;
    var E6 = document.getElementById("E6").value;
    var E7 = document.getElementById("E7").value;
    var E8 = document.getElementById("E8").value;
    var E9 = document.getElementById("E9").value;

    var F1 = document.getElementById("F1").value;
    var F2 = document.getElementById("F2").value;
    var F3 = document.getElementById("F3").value;
    var F4 = document.getElementById("F4").value;
    var F5 = document.getElementById("F5").value;
    var F6 = document.getElementById("F6").value;
    var F7 = document.getElementById("F7").value;
    var F8 = document.getElementById("F8").value;
    var F9 = document.getElementById("F9").value;

    var G1 = document.getElementById("G1").value;
    var G2 = document.getElementById("G2").value;
    var G3 = document.getElementById("G3").value;
    var G4 = document.getElementById("G4").value;
    var G5 = document.getElementById("G5").value;
    var G6 = document.getElementById("G6").value;
    var G7 = document.getElementById("G7").value;
    var G8 = document.getElementById("G8").value;
    var G9 = document.getElementById("G9").value;

    var H1 = document.getElementById("H1").value;
    var H2 = document.getElementById("H2").value;
    var H3 = document.getElementById("H3").value;
    var H4 = document.getElementById("H4").value;
    var H5 = document.getElementById("H5").value;
    var H6 = document.getElementById("H6").value;
    var H7 = document.getElementById("H7").value;
    var H8 = document.getElementById("H8").value;
    var H9 = document.getElementById("H9").value;

    var I1 = document.getElementById("I1").value;
    var I2 = document.getElementById("I2").value;
    var I3 = document.getElementById("I3").value;
    var I4 = document.getElementById("I4").value;
    var I5 = document.getElementById("I5").value;
    var I6 = document.getElementById("I6").value;
    var I7 = document.getElementById("I7").value;
    var I8 = document.getElementById("I8").value;
    var I9 = document.getElementById("I9").value;
 
 
    // 成否
    if(A1 == A_ans[0] && A2 == A_ans[1] && A3 == A_ans[2] && A4 == A_ans[3] && A5 == A_ans[4] && A6 == A_ans[5] && A7 == A_ans[6] && A8 == A_ans[7] && A9 == A_ans[8]){
      if(B1 == B_ans[0] && B2 == B_ans[1] && B3 == B_ans[2] && B4 == B_ans[3] && B5 == B_ans[4] && B6 == B_ans[5] && B7 == B_ans[6] && B8 == B_ans[7] && B9 == B_ans[8]){
	      if(C1 == C_ans[0] && C2 == C_ans[1] && C3 == C_ans[2] && C4 == C_ans[3] && C5 == C_ans[4] && C6 == C_ans[5] && C7 == C_ans[6] && C8 == C_ans[7] && C9 == C_ans[8]){
	        if(D1 == D_ans[0] && D2 == D_ans[1] && D3 == D_ans[2] && D4 == D_ans[3] && D5 == D_ans[4] && D6 == D_ans[5] && D7 == D_ans[6] && D8 == D_ans[7] && D9 == D_ans[8]){
	          if(E1 == E_ans[0] && E2 == E_ans[1] && E3 == E_ans[2] && E4 == E_ans[3] && E5 == E_ans[4] && E6 == E_ans[5] && E7 == E_ans[6] && E8 == E_ans[7] && E9 == E_ans[8]){
		          if(F1 == F_ans[0] && F2 == F_ans[1] && F3 == F_ans[2] && F4 == F_ans[3] && F5 == F_ans[4] && F6 == F_ans[5] && F7 == F_ans[6] && F8 == F_ans[7] && F9 == F_ans[8]){
	              if(G1 == G_ans[0] && G2 == G_ans[1] && G3 == G_ans[2] && G4 == G_ans[3] && G5 == G_ans[4] && G6 == G_ans[5] && G7 == G_ans[6] && G8 == G_ans[7] && G9 == G_ans[8]){
		              if(H1 == H_ans[0] && H2 == H_ans[1] && H3 == H_ans[2] && H4 == H_ans[3] && H5 == H_ans[4] && H6 == H_ans[5] && H7 == H_ans[6] && H8 == H_ans[7] && H9 == H_ans[8]){
	                  if(I1 == I_ans[0] && I2 == I_ans[1] && I3 == I_ans[2] && I4 == I_ans[3] && I5 == I_ans[4] && I6 == I_ans[5] && I7 == I_ans[6] && I8 == I_ans[7] && I9 == I_ans[8]){
                      
				                                    var answer = "true";

	                              }
	                          }	
	                      }
	                  }
                }
            }		
        }
    }
}else{
    var answer = "folse"
}

 
    // 結果
    var resultForm = document.getElementById("resultForm");
    resultForm.value = answer;
});