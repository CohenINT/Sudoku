var board; // הגדרת  הערך שבהמשך יהיה מטריצה  ללוח הסודוקו 


function strgame() {
    {
        document.body.innerHTML = getTableString(9);//קריאה ליצרת טבלת משחק 
        $("input").on("focusout", changeNum);// מצמיד לכול הinput  את האירועה 
        $("button").on("click", evntlis); // מצימיד ארועה  למקשי המשחק 
        $(".b_show").on("mouseover", ShowNum);//מצמיד את האירועה  של הצגת  המספרים בטבלה 
		$(".ckgame").on("click",checIfWin);//מצימד אירועה של בדיקת ניצחון 
		//הוספת קווים הדגשה  ליצירת טבלאות 3*3
        var i = 0;
        for (i = 2  ; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                if (!(i == 8))
                    $('#input-' + i + "-" + j).css("border-bottom-color", "black").css("border-bottom-width", "10px");

            }
            i = i + 2;
        }

        for (i = 3  ; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                $('#input-' + j + "-" + i).css("border-left-color", "black").css("border-left-width", "10px");

            }
            i = i + 2;
        }

    }
}

//בחירת רמה של המשחק  מוחק את הדף ויוצר דף חדש 
function evntlis() {
 //מוחק את דף  
    document.body.innerHTML = "";

    var testgame = $(this).attr("id").toString();// תופס את הid

    if (testgame == "btn_e") {

        setLevel(20);
    }
    if (testgame == "btn_m") {

        setLevel(40);
    }
    if (testgame == "btn_h") {

        setLevel(60);
    }

    strgame();
    StopClock()
    StartClockGame()
    $('#movCalc').on('click', function () {
        window.location.href = "../clac/index.html";
    })
    $('#movForm').on('click', function () {
        window.location.href = "../Form/index.html";
    })

}


function setLevel(level)//קובע את הרמה של המשחק 
{
    var r = 0,i = 0, c = 0;
    var min = 1, max = 3;
//עיגול כלפי מטה
rnd = Math.floor(Math.random() * max) + min;
    Create_Table(rnd)//בחירת לוח משחק 
    while (i < level) {
        r = Math.floor(Math.random() * 9);
        c = Math.floor(Math.random() * 9);
        board[r][c] = "";
        i++;
    }

}




//יצירת טבלה  וכפתורים 
function getTableString(dim) {
    debugger;

    var retString ='<div id="the_name">'+ '<button class="batnmov" id="movForm">' + "Form" + '</button>' + '<button class="batnmov" id="movCalc">' + "Calc" + '</button>'+"project javascrupt Meir Moshe Linoy"+'</div>'//כפתור מעבר בין דפים 
	
	//כפתורים של רמת קושי
+'<div class="btns">' + '<button id="btn_e" value="' + 1 + '">' + "Easy" + '</button>' + '<br><br>' +
        '<button id="btn_m" value="' + 2 + '">' + "Medium" + '</button>' + '<br><br>' + '<button id="btn_h" value="' + 3 + '">' + "Hard" + '</button>' + '<br><br>' +
       '<label id="clock"> ' + "00" + ':' + "00" + '<br>' + '</label>'+'</div>' +//תצוגת שעון 
	   
        '<div id="gameBoard">' + '<br>';//מסגרת למשחק 

		//כפתורים שנוצרים בלולאה  כפתורי עזר 
    for (var num = 1; num < 10; num++)
        retString += '<input type="button"class="b_show" value="' + num + '"></input>';
	//כפתור  של בדיקה אם המשחק נגמר 
       retString += '<input type="button"class="ckgame" value="' + "check" + '"></input>';
	
//יצירת טבלת משחק 
    retString += '<table>'
    for (var i = 0; i < dim; i++) {
        retString += '<tr>'  //בנוסף למה שהיה תוסיף את זה 
        for (var j = 0; j < dim; j++)
            if (board[i][j] == '')   //  הכנסת אחת המטריצות לתוך הטבלה לאחר שחלק ממנה נמחק
                retString += '<td >' + '<input id="input-' + i + '-' + j + '" type="text" value="' + board[i][j] + '">' + '</input></td>';
            else
                retString += '<td >' + '<input id="input-' + i + '-' + j + '" type="text" value="' + board[i][j] + '" readonly class="read">' + '</input></td>';// בשחור הערך יהיה בתוך התא 
        retString += '</tr>'
    }
    retString += '</br>';
    retString += '</table>'+'</div>'; //סוף הטבלה  
    return retString;//שליחת  הטבלה לדף 

    /*****************************************************************/
}
//בחירה באחת מלוחות המשחק 
function Create_Table(option) {

    board1 = [[1,9,6,8,4,5,3,2,7],
             [8,5,7,2,3,1,4,6,9],
             [3,4,2,7,6,9,5,1,8],
             [6,8,3,5,9,4,1,7,2],
             [5,7,1,3,2,6,8,9,4],
             [9,2,4,1,8,7,6,5,3],
             [7,3,8,6,5,2,9,4,1],
             [4,1,5,9,7,8,2,3,6],
             [2,6,9,4,1,3,7,8,5]]
 
 board2= [[5,3,4,6,7,8,9,1,2],
	        [6,7,2,1,9,5,3,4,8],
	        [1,9,8,3,4,2,5,6,7],
			[8,5,9,7,6,1,4,2,3],
			[4,2,6,8,5,3,7,9,1],
			[7,1,3,9,2,4,8,5,6],
			[9,6,1,5,3,7,2,8,4],
			[2,8,7,4,1,9,6,3,5],
			[3,4,5,2,8,6,1,7,9]] 
			
 board3=   [[3,6,4,7,8,5,1,2,9],
	        [1,8,2,4,3,9,6,5,7],
	        [7,9,5,2,1,6,8,3,4],
			[4,7,1,5,9,2,3,6,8],
			[9,5,6,3,7,8,4,1,2],
			[8,2,3,6,4,1,7,9,5],
			[2,1,8,9,6,4,5,7,3],
			[6,3,9,8,5,7,2,4,1],
			[5,4,7,1,2,3,9,8,6]] 
			 
	if(option==1)		
   board = board1;
   else if(option==2)
   board = board2;	
   else 
   board = board3;		 


}
/*****************************************************************/

// function changeNum() מחליפה מספר כאשר יוצאים מהתא 
function changeNum() {
    debugger;
    var temp = $(this).attr("id").toString();// תופס את הid
    temp = temp.split("-"); //example: 'input-0-0' becomes [input, 0, 0]-- מפרק את המחרוזת הזמנית ל ל=מבנה כזה
    board[parseInt(temp[1])][parseInt(temp[2])] = $(this).val();//

    Checking()
}




// בדיקה של חוקי הסודוקו function Checking() 
function Checking() {

    // בדיקה לרוחב 
    /********************************************************/
    i = 0;
    j = 0;
    var my_test1 = 0
    for (i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {
            my_test1 = 0;
            for (x = 0; x < 9; x++) {
                if (board[i][j] == board[i][x]) {
                    my_test1++;
                    if (my_test1 > 1 && board[i][j] != "")
                        $('#input-' + i + "-" + j).css("background-color", "coral");
                    else
                        $('#input-' + i + "-" + j).css("background-color", "white");
                }
            }
        }
    }
    // בדיקה לאורך
    /************************************************************/
    var my_test2 = 0
    for (i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {
            my_test2 = 0;
            for (x = 0; x < 9; x++) {
                if (board[j][i] == board[x][i]) {
                    my_test2++;
                    if (my_test2 > 1 && board[j][i] != "")
                        $('#input-' + j + "-" + i).css("background-color", "coral");

                }
            }
        }
    }

    /************************************************************/
    // בדיקה בתוך  הקוביה הקטנה  
    testCube(0, 0);
}

/*******************תחלית בדיקת הטבלאות הקטנות **********************/
function testCube(r_i, c_i) //בדיקה לפי קופסא  --> תחילה  קופסא  שמאלית עליונה  
{
    r = r_i;
    c = c_i;
    m = r_i;
    my_test3 = 0;
    for (r = r_i; r < r_i + 3; r++) {
        for (c = c_i; c < c_i + 3; c++) {
            my_test3 = 0;
            for (m = r_i; m < r_i + 3; m++) {
                for (x = c_i; x < c_i + 3; x++) {
                    if (board[r][c] == board[m][x])// צריך לבדוק שוב אם צריך 
                    {
                        my_test3++;
                        if (my_test3 > 1 && board[r][c] != "")
                            $('#input-' + r + "-" + c).css("background-color", "coral");

                    }
                }
            }
        }
    }
    if (c_i == 0) test1(r_i, c_i + 3);//בדיקה קוביה אמצעית עליונה 
    if (c_i == 3) test1(r_i, c_i + 3);//ימנית עליונה  
    if (c_i == 6 && r_i == 6) return 0; //כדי לא למנוע פעולה  אין סופית של בדיקות 
    if (c_i == 6) test1(r_i + 3, c_i = 0);// בעזזרת  רקורסיה  בדקיה על שני  שרות הקוביות 
}


/*********************שעון למשחק *******************/
var myVar;
 sic = 0;
 minute = 0;
flag = 0;
function StartClockGame() {
    if (flag == 1) return 0;  //הגנה  לשעון שהכפתור לא יריץ את הזמן יותר מדי מהר
    flag = 1;
    myVar = setInterval(function () { alertFunc() }, 1000);
}
function alertFunc() {
    sic++;
    sic = checkTime1(sic);
    sic = checkTime(sic);
    if (sic >= 59)
        minute++;
    document.getElementById("clock").innerHTML = "0" + minute + ":" + sic;
}

function StopClock() {
    flag = 0;
    clearInterval(myVar);
    sic = 0;
    minute = 0;
}
function StopClock2() {
    clearInterval(myVar);

}

function checkTime(i) {

    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}
function checkTime1(i) {

    if (i > 59) { i = 0 };  // add zero in front of numbers < 10
    return i;
}
/***********************סוף שעון ********************************/

/**********************************/


$(document).ready(function ()//זה רק העלה  ראשונית 
{

    $('#btn_e').on('click', function () {
        setLevel(20);
        strgame(9);
        StartClockGame()
 

    });

    $('#btn_m').on('click', function () {

        setLevel(40);
        strgame(9);
        StartClockGame()

    });

    $('#btn_h').on('click', function () {
        setLevel(60);
        strgame(9);
        StartClockGame()

    });
    $('#movCalc').on('click', function () {
        window.location.href = "../clac/index.html";
    })
    $('#movForm').on('click', function () {
        window.location.href = "../Form/index.html";
    })


});




function ShowNum() {

    var number = $(this).val();
    $('input[id^="input-"][value="' + number + '"]').css("background", "yellow");

    var color = setTimeout(function () {
        $('input[id^="input-"][value="' + number + '"]').css("background", "white");
    }, 1000 * 1);

}

  function checIfWin()
    {
		var max=0
        var t_r=0
        var t_c=0
        for(t_r=0;t_r<9;t_r++)
        {
            for(t_c=0;t_c<9;t_c++)
            {
				var mxm=$('#input-' + t_r + "-" + t_c).css("background-color")
            if (board[t_r][t_c] != "" && mxm!="rgb(255, 127, 80)") 
                   max++;
            }
			
        }
			if(max==81)
		{
			StopClock2()
			  won();
		}
		else
			alert("לא סיימתה את המשחק  או שיש לך טעות ")


    }
	/***************************************************************/
	  function won()//במקרה ומישהו זוכה
    {

        for (i = 1; i <= 5; i++)
        {
            $('<div/>', {
                text: "You Won!!! Congrats!!!!",
                id: 'div' + i
            }).appendTo("body");
        }
        
        $("div").delay('slow').fadeIn();
      
      	$("<div/>",{
			text: "הזמן שלך הוא "+"0" + minute + ":" + sic,
			id:"element"
			}).appendTo("body");
	
    
    }//end of won() function


	
