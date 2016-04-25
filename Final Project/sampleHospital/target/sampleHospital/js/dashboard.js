/* global id */

var baseUrl = "http://localhost:8080/sampleHospital/webapi/";
var LastMessageId = 0;
var wsocket;
var serviceLocation = "ws://localhost:8080/sampleHospital/chat/";
var $nickName = $('#getCurrentName').Text;
console.log($nickName)
var chatBoxDetails={};
  function checkAuthentication(RoomName){  
   var chatBoxId = chatBoxDetails[RoomName];
 
   var password =prompt("Please enter password", "eg pass");
    callToserver(chatBoxId,password,RoomName);
   
   
   
    
    }

        
function addRoom() {

 var users=[];
    var roomName = $('#roomName').val();
    console.log('The room name is'+roomName);
    var password = $('#password').val();
   console.log('the password is'+ password);
    $("input[type=checkbox]:checked").each(function() {
        console.log( $(this).attr('id') );
        
        users.push($(this).attr('id'));
    });
    console.log(users);
    var toappend='<chatBoxId></chatBoxId><chatName></chatName><password></password>';
     for(var i=0; i<users.length; i++){
       toappend+='<users id="'+users[i]+'"></users>';
    }
     var toSend='<chatBox>'+toappend+'</chatBox>';
     console.log(toSend);
   // var chatRoom = $.parseXML('<chatBox><chatBoxId></chatBoxId><chatName></chatName><password></password></chatBox>');
   
    var alert = $.parseXML(toSend);
    var ajaxRoom = $(alert);
   
    ajaxRoom.find('password').append(password);
    ajaxRoom.find('chatName').append(roomName);
    for(var i=0; i<users.length; i++){
        ajaxRoom.find('#'+users[i]).append(users[i]);
    }
console.log(toSend);
    $.ajax({
        url: 'webapi/chatbox',
        contentType: 'application/xml',
        processData: false,
        data: alert,
        type: "POST",
        success: function (xml) {
            console.log(xml);
          
        },
        error: function () {
            alert('error adding room');
        }



    });
}


//aahiley teha checkbox append bhaxa aaru tehi ho pahiley ko nai
UsersidList=[];
function getUsers(data, status) {
    console.log("getting users list");
    console.log(data);
    //var userListBox = $(".userListDiv");
    //userListBox.empty();
    //userListBox.append('<ul class="usersList"></ul>');
    console.log('second call');
    $(data).find('user').each(function () {
        var name = $(this).find('fullName').text();
        var otherid = $(this).find('id').text();
        
        console.log('user Id lits:' +UsersidList);
            console.log('called once');
        var myId = $("#getSession").val();


        console.log('myid' + myId);
        console.log('otherid' + otherid);
        if (myId === otherid) {

        } else {
            if(UsersidList.indexOf(otherid)===-1){
            $('#group').append('<input  class="messageCheckbox" type="checkbox" id="'+otherid+'" value=' + name + '\');">' + name + '<a href="javaScript:void(0)"><br>');
            $('#userList').append('<input  class="messageCheckbox" type="checkbox"  id="'+otherid+'" value=' + name + '\');">' + name + '<a href="javaScript:void(0)"><br>');
            $('#listusers').append('<li class=' + name + ' onclick="requestMessage(\'' + myId + '\',\'' + otherid + '\');"><a href="javaScript:void(0)">' + name + '</li>');
            UsersidList.push(otherid);
            }
            else{
            
            
           
           }

        }
        
    });

}


var allChatBox=[];
function getChatBox(data, status) {

    console.log("getting chatBOx list");
    console.log(data);
    var $chatBoxList = $("#groupChatBox");
    $(data).find('chatBox').each(function () {
        var name = $(this).find('chatName').text();
        var chatId = $(this).find('chatBoxId').text();
        
        var userList=[];
          $(this).find('users').each(function () {
          var Id = $(this).text();
           
 
              userList.push(Id);
            
              
          });
           
         var  sessionId = $("#getSession").val();
        
         if(isInArray(sessionId,userList)){
        
        
        chatBoxDetails[name] =chatId;
//append nahune dina ko lagi
if(allChatBox.indexOf(chatId)==-1){
     $chatBoxList.append(' <li id="'+chatId+'" >' + name + '</li>');
     allChatBox.push(chatId);
     }
         }
         console.log(chatId+" contains following user list"+userList);

    });
}
function isInArray(value, array) {
  return array.indexOf(value) > -1;
}


function sendMessage(senderId, recieverId) {
    console.log("send message is called");
    var Inputmessage = $('#messageInput' + senderId + recieverId + '').val();
    var message = $.parseXML('<message><date></date><id></id><senderID></senderID><recieverID></recieverID><content></content></message>');
    var $messageXml = $(message);
    $messageXml.find('content').append(Inputmessage);
    $messageXml.find('senderID').append(senderId);
    $messageXml.find('recieverID').append(recieverId);

    console.log(message);
    $('#messageInput' + senderId + recieverId).val('');
    $.ajax({
        url: baseUrl + "messages/",
        type: "POST",
        dataType: 'xml',
        data: message,
        processData: false,
        contentType: "application/xml",
        success: getMessage,
        error: function (xhr) {
            console.log(xhr.status);
            console.log("error!!!");
        }


    });

}
function requestMessage(senderID, recieverID) {


    var messageBox = 'messageBox' + senderID + recieverID + '';
    var messageContent = 'messageContent' + senderID + recieverID + '';
    var messageInput = 'messageInput' + senderID + recieverID + '';
    var messageButton = 'button' + senderID + recieverID + '';
    if ($("#" + messageBox).length) {



        $("#" + messageBox).toggle(100);





    } else {
        var chatDiv = $('#eachchatbox').html();
        $('#chatbox').append('<div id="' + messageBox + '"></div>');

        console.log("div has been created");
        $("#" + messageBox).html(chatDiv);

        $('#' + messageBox).find("#message-area").attr("id", messageContent);
        $('#' + messageBox).find("#input-area").attr("id", messageInput);


        $('#' + messageBox).find('#button-append').append("<button id='" + messageButton + "' onClick=\"sendMessage('" + senderID + "','" + recieverID + "'); return false;\">send message</button>");





    }



    setInterval(function () {
        $.ajax({
            url: baseUrl + "messages?firstUserId=" + recieverID + "&secondUserId" + senderID,
            method: "GET",
            datatype: "xml",
            success: getMessage,
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
            }
        });

    }, 3000);
}

function getMessage(data, status) {
    var messageArrayList = [];
    var count;

    console.log("getting messages");
    console.log(data);



    $(data).find('message').each(function () {
        var message = $(this).find('content').text();
        var date = $(this).find('date').text();
        var senderID = $(this).find('senderID').text();
        var receiverID = $(this).find('recieverID').text();
        var messageID = $(this).find('id').text();
        messageArrayList.push([message, date, senderID, receiverID, messageID]);
        count = messageArrayList.length;
        //var lastMessageID=messageArrayList[messageArrayList.length-1][4];
        //console.log('The id'+ lastMessageID);
        console.log('Last Message Id ' + LastMessageId);
        console.log(' And the message is: ' + message);
    });
    console.log('The cout=nt is ' + count);
    for (var i = 0; i < count; i++) {
        if (LastMessageId <= messageArrayList[i][4]) {
            var senderId = messageArrayList[i][2];
            var recieverId = messageArrayList[i][3];
            var message = messageArrayList[i][0];
            LastMessageId = messageArrayList[i][4];
            console.log('The message is ' + message);
            console.log('The last message id  ' + LastMessageId);
            console.log('The count is ' + count);
            LastMessageId++;


            if ($("#messageContent" + senderId + recieverId).length) {
                $("#messageContent" + senderId + recieverId).append('<li>' + message + '</li>');
            } else {
                $("#messageContent" + recieverId + senderId).append('<li>' + message + '</li>');

            }
            //LastMessageId=localStorage.setItem("lastCount",messageArrayList[i][4]);


        }
    }



}

function connectToChatserver(RoomName) {


    if ($("#chatBox" + RoomName).length) {



        ($("#chatBox" + RoomName).toggle(100));





    } else {
        
       
    checkAuthentication(RoomName);

}
}
function getNotification(xml) {
    console.log(xml);
    var content;
    var type;
    var sagar="sagar";
    var sushil="sushil";
    $(xml).find('alert').each(function () {
        content = $(this).find('content').text();
        type = $(this).find('type').text();
        var senderId = $(this).find('senderID').text();
       
        $('#alert').append('<a href="#" data-toggle="modal" data-target='+content+' id="viewAlert">' + type + '</a>');
        // $('#container').find('#alertDetail').attr("id", content);
       // $('#container').find('#id').attr("id", content+sagar);
      //  $('#container').find('#message').attr("id", content+sushil);
        
                
        
        
        
       // $('#container').append(' <div class="modal fade" id="alertDetail" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">');
       // $('#message').append('<li class="form-control">' + " " + content + '</li>');
       // $('#type').append('<li class="form-control">' + type + '</li>');
    });
}

//polling ko lagi
function getChatboxPolling(){
    
    setInterval(function () {
            console.log('here');
           
     $.ajax({
        url: baseUrl + "chatbox",
        method: "GET",
        datatype: "xml",
        success: getChatBox,
        error: function (xhr, ajaxOption, thrownError) {
            console.log(xhr.status);
            console.log(thrownError);
            console.log("error fetching data");
        }


    },7000);
} );  
 }
        

$(document).ready(function () {
     getUsersPolling();
      function getUsersPolling() {
        setInterval(function () {
            console.log('here');
            $.ajax({
                url: 'webapi/users',
                method: "GET",
                datatype: "xml",
                success: getUsers,
                error: function (xhr, ajaxOption, thrownError) {
                    console.log(xhr.status);
                    console.log(thrownError);
                }


            });
        }, 3000);
    }
    $.ajax({
            url: 'webapi/alerts',
            method: "GET",
            datatype: "xml",
            success: getNotification,
            error: function (xhr, ajaxOption, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
            }
        }, 3000);
   

    $("#eachchatbox").hide();
$('#sidr > #groupChatBox').on("click", "li", function (evt) {
        evt.preventDefault();
        var roomName = ($(this).text());
        connectToChatserver(roomName);

    });
   $("#hidemyauth").hide();
    $.ajax({
        url: baseUrl + "users",
        method: "GET",
        datatype: "xml",
        success: getUsers,
        error: function (xhr, ajaxOption, thrownError) {
            console.log(xhr.status);
            console.log(thrownError);
        }


    });
    getChatboxPolling();
    $.ajax({
        url: baseUrl + "chatbox",
        method: "GET",
        datatype: "xml",
        success: getChatBox,
        error: function (xhr, ajaxOption, thrownError) {
            console.log(xhr.status);
            console.log(thrownError);
            console.log("error fetching data");
        }


    });
    $('#getSession').hide();

    $('#rightmenu').sidr({
        side: 'right',
        displace: false
    });




    $('body').on('click', '#minimize', function () {

        var parentdiv = $(this).parents(':eq(3)');
        parentdiv.children('div#chat').hide();

        parentdiv.children('div.portlet-heading').css({
            'background-color': 'blue',
            'position': 'fixed',
            'bottom': '0'
        });




    }).on('click', '#remove', function () {
        var parentdiv = $(this).parents(':eq(4)');
        parentdiv.toggle();
    });

});
