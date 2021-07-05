
let date = "";
fetch("https://dev.onebanc.ai/assignment.asmx/GetTransactionHistory?userId=1&recipientId=2").then(function (response) {
  return response.json();
}).then(function (data) {
  let Transaction_History = data;
  console.log(Transaction_History);

  let status_message1 = ["Pending", "You Paid", "Expired"];
  let status_message2 = ["Pending", "You Recieved", "Expired"];
  let Transaction_status = ["pending.png", "succesful.jpg", "unsuccessfu.jpg"];



  for (let i = 0; i < Transaction_History.transactions.length; i++) {

    function myFunction() {
      var x = document.createElement("LINK");
      x.setAttribute("rel", "stylesheet");
      x.setAttribute("type", "text/css");
      x.setAttribute("href", "/css/style.css");
      document.head.appendChild(x);
    }
    myFunction()

    var datestring = Transaction_History.transactions[i].transactionDate.toString();
    var datearray = datestring.split(" ");
    var datearrayattheseperator = datestring.split(/-| /);
    console.log(datearrayattheseperator);
    if (date != datearray[0]) {
      date = datearray[0];
      document.write(` 
          <div class="selector">
          <p class="stext">`+ datearrayattheseperator[0] + " " + datearrayattheseperator[1] + " " + datearrayattheseperator[2] + `</p>
          </div>
        `);

    }

    if (Transaction_History.transactions[i].type === 1) {
      if (Transaction_History.transactions[i].direction === 1) {
        document.write(`
              <div class="format1">
              <p class="amount">&#8377 `+ Transaction_History.transactions[i].amount + `</p>
              <p>Transaction Id</p>
              <p style="fontsize: 11px;" >`+ Transaction_History.transactions[i].transactionId + `</p>
              <p class="status"><img src="/imagess/`+ Transaction_status[Transaction_History.transactions[i].status - 1] + `" height="10" width="10"> ` + status_message1[Transaction_History.transactions[i].status - 1] + `</p>
              <p class="details">&gt</p>
              </div>
              <button class="delta"> &gt</button>
              `);
      }
      else {
        document.write(`
              <div class="format2">
              <p class="amount">&#8377 `+ Transaction_History.transactions[i].amount + `</p>
              <p>Transaction Id</p>
              <p style="fontsize: 11px;" >`+ Transaction_History.transactions[i].transactionId + `</p>
              <p class="status"><img src="/imagess/`+ Transaction_status[Transaction_History.transactions[i].status - 1] + `" height="10" width="10"> ` + status_message2[Transaction_History.transactions[i].status - 1] + `</p>
              <button class="delta"> &gt</button>
              </div>
              <div class="date received">`+ datearray[0] + `</div>
              `);
      }
    }
    else {

      if (Transaction_History.transactions[i].direction === 1) {
        document.write(`
              <div class="format1">
              <p class="amount">&#8377 `+ Transaction_History.transactions[i].amount + `</p>
              <button style="cursor:pointer; margin-left:15px; padding-left:30px; padding-right:30px; ">Cancel</button>
              <p class= "status2"><img src="/imagess/request.png" height="10" width="10"> You Requested</p>
              <button class="delta"> &gt</button>
              </div>
              <div class="date sent">`+ datearray[0] + `</div>
              `);
      }
      else {
        document.write(`
              <div class="format2">
              <p class="amount">&#8377 `+ Transaction_History.transactions[i].amount + `</p>
              <div>
              <button style="cursor:pointer; margin-left:15px; margin-right:15px; padding-left:15px; padding-right:15px;">Pay</button>
              <button style="cursor:pointer; padding-left:30px; padding-right:30px;">Decline</button>
              </div>
              <p class= "status2"><img src="/imagess/request.png" height="10" width="10"> Request Received</p>
              <button class="delta"> &gt</button>
              </div>
              <div class="date received">`+ datearray[0] + `</div>
              `);
      }
    }
  }
});