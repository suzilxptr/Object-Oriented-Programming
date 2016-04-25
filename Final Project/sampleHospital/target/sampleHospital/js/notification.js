/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$.ajax({
        url: 'webapi/users',
        type: 'post',
        data: alert,
        processData: false,
        contentType: 'application/xml',
        success: function (xml) {
            console.log(xml);
        },
        error: function () {
            console.log('error');
        }
    });

function sendNotification() {
  var users=[];
    var type = $('select[name=type]').val();
    var message = $('textarea#message').val();
    var senderId = $('#getSession').val();
    $("input[type=checkbox]:checked").each(function() {
        console.log( $(this).attr('id') );
        users.push($(this).attr('id'));
    });
     var toappend='<content></content><type></type><senderID></senderID><id></id><date></date>';
    console.log(users);
    
    for(var i=0; i<users.length; i++){
       toappend+='<userList id="'+users[i]+'"></userList>';
    }
    console.log(toappend);
        toSend='<alert>'+toappend+'</alert>';
        console.log(toSend);
    if((message!=="") &&(message!=="") ){
       
    var alert = $.parseXML(toSend);
    var ajaxalert = $(alert);
    ajaxalert.find('content').append(message);
    ajaxalert.find('type').append(type);
    ajaxalert.find('senderID').append(senderId);
    console.log(toSend);
    
    for(var i=0; i<users.length; i++){
    ajaxalert.find('#'+users[i]).append(users[i]);
    }
    
    $.ajax({
        url: 'webapi/alerts',
        type: 'post',
        data: alert,
        processData: false,
        contentType: 'application/xml',
        success: function (xml) {
            console.log(xml);
        },
        error: function () {
            console.log('error');
        }
    });
    }
    else{
        $("span#allfeild").append("All field Required !!!!!");
    }
    
}

function reset(){
   count=0;
    var value = document.getElementById("count");
   
    value.innerHTML=count;
}

function getNotificationPolling() {
        setInterval(function () {
            console.log('here');
            $.ajax({
      url: 'webapi/alerts',
        method: "GET",
        datatype: "xml",
        success: getNotification,
        error: function (xhr, ajaxOption, thrownError) {
            console.log(xhr.status);
            console.log(thrownError);
        }

            });
        }, 7000);
    }
    var count;
    var messageID=[];
function getNotification(xml) {
    count=0;
    console.log(xml);
    var content;
    var type;
    var id;
    var senderid;
    var usersid;
   var sessionID = $('#getSession').val();
    $(xml).find('alert').each(function () {
       
        content = $(this).find('content').text();
         senderid = $(this).find('senderID').text();
        type = $(this).find('type').text();
         id = $(this).find('id').text();
         var allId=[];
            $(this).find('userList').each(function(){
                
               var id=$(this).text();
                allId.push(id);
               
            }
                    );
             console.log('the Users ids of alert '+id+' is ' + allId);
        
        // for(var i=0; i<valueofID; i++){
           //  var id=$(this).find('userList').attr('id').
             //console.log('the value is'+ id);
             //allid.push[];
        // }
         //usersid = $(this).find('userList').length;
           //console.log('Done just now'+ usersid);
          var date1=$(this).find('date').text();
            var  date=date1.replace('EET','');
     
        
       if(allId.indexOf(sessionID)==-1){
           
       } 
       else{
       if(messageID.indexOf(id)===-1){
              /* adad  Yo sabai ko format aautai xa vacancy,events ra annoucements ko lagi...id sabai define gardeko xu 
 Vancany
                 * <div class="col-md-4 col-xs-12 col-sm-6 col-lg-2">
                    <h1 class="mytitle">Vacancy</h1>
                    <hr>
                    <div id="allVacancy"  >
                        <div class="well" id="vacancy">

                            <p id="content">
                            </p>
                            <p class="small" style="color:blue" id="name">
                                <span class="pull-right" id="date"></span>

                            </p>
                        </div>


                    </div>
                </div>
 Announcement
                        <div class="col-md-4 col-xs-12 col-sm-6 col-lg-2" class="Divall">
                    <h1 class="mytitle">Announcements</h1>
                    <hr>
                    <div id="allAnnouncement" >
                        <div class="well" id="announcement">

                            <p id="content" >
                            </p>
                            <p class="small" style="color:blue" id="name">
                                <span class="pull-right" id="date"></span>

                            </p>
                        </div>

                    </div>

                </div>
  events
                         <div class="col-md-4 col-xs-12 col-sm-6 col-lg-2 col-sm-offset-1">
                    <h1 class="mytitle">Events</h1>
                    <hr>
                    <div id="allEvents" >
                        <div class="well" id="event">

                            <p id="content">
                            </p>
                            <p class="small" style="color:blue" id="name">
                                <span class="pull-right" id="date"></span>

                            </p>
                        </div>
                    </div>
                </div>
 Yo chai mathi notification ma aaune ko id haru xa , yeha chai emergency ra news xa aahiley change gare hunxa...
                        
                         <div id="allalerts">
                                <div id="all">
                                    <li class="wrapit" id="alert">
                                        <p class="small" id="name">

                                            <span class="pull-right" style="color:red;font-sze: 12px;" id="date"></span></p>
                                        <p style="font-size:14px; font-weight:bold; " id="content">
                                            <span class="pull-right"  id="type" ></span> 
                                        </p>
                                        <hr style="border-top:1px solid rgba(199, 191, 191, 0.91); margin:0px;">
                                    </li>
                                </div>
                            </div>
                    tala bata data haru tehi div ma append xa
                 * 
                 * */
              if(type==="News"){
                  var clonedDiv = $('#alert').clone();
                $('#all').prepend(clonedDiv);
                clonedDiv.attr("id",id);
              
                 
                   $('#'+id).find('p#content').append('<p href="#" id='+type+id+' style="color:#90c5a9;" >' + content + '</p>');
                     $('#'+id).find('p#name').append('<li href="#" id='+type+id+' style="color:#ef6d3b;" >' + senderid + '</li>');
                    $('#'+id).find('span#date').append('<li href="#" id='+type+id+' style="color:#ef6d3b;">' + date + '</li>');
                    $('#'+id).find('span#type').append('<li href="#" id='+type+id+' >' + type + '</li>');
                messageID.push(id);
                count++;
                  var value = document.getElementById("count");
                  value.innerHTML=count;
                 //$('span#count')
                //console.log('the count is: '+ count);
            }  
           if(type==="Emergency"){
                var clonedDiv = $('#alert').clone();
                $('#all').prepend(clonedDiv);
                clonedDiv.attr("id",id);
             
                  $('#'+id).find('p#content').append('<p href="#" id='+type+id+' style="color:#90c5a9;" >' + content + '</p>');
                     $('#'+id).find('p#name').append('<li href="#" id='+type+id+' style="color:#ef6d3b;" >' + senderid + '</li>');
                    $('#'+id).find('span#date').append('<li href="#" id='+type+id+' style="color:#ef6d3b;">' + date + '</li>');
                    $('#'+id).find('span#type').append('<li href="#" id='+type+id+' >' + type + '</li>');
                messageID.push(id);
                console.log('the id is '+id);
                count++;
                 console.log('the count is: '+ count);
                 var value = document.getElementById("count");
                  value.innerHTML=count;
            }  
            if(type==="Assignment"){
              var clonedDiv = $('#alert').clone();
                $('#all').prepend(clonedDiv);
                clonedDiv.attr("id",id);
                  $('#'+id).find('p#content').append('<p href="#" id='+type+id+' style="color:#90c5a9;" >' + content + '</p>');
                     $('#'+id).find('p#name').append('<li href="#" id='+type+id+' style="color:#ef6d3b;" >' + senderid + '</li>');
                    $('#'+id).find('span#date').append('<li href="#" id='+type+id+' style="color:#ef6d3b;">' + date + '</li>');
                    $('#'+id).find('span#type').append('<li href="#" id='+type+id+' >' + type + '</li>');
                      messageID.push(id);
            }  
            if(type==="Events"){
              var clonedDiv = $('#event').clone();
                $('#allEvents').prepend(clonedDiv);
                clonedDiv.attr("id",id);
                  $('#'+id).find('p#content').append('<p href="#" id='+type+id+' style="color:#90c5a9;" >' + content + '</p>');
                     $('#'+id).find('p#name').append('<li href="#" id='+type+id+' style="color:#ef6d3b;" >' + senderid + '</li>');
                    $('#'+id).find('span#date').append('<li href="#" id='+type+id+' style="color:#ef6d3b;">' + date + '</li>');
                    $('#'+id).find('span#type').append('<li href="#" id='+type+id+' >' + type + '</li>');
                    messageID.push(id);
            }  
            if(type==="Vacancy"){
                //$('#allVacancy').show();
              var clonedDiv = $('#vacancy').clone();
                $('#allVacancy').prepend(clonedDiv);
                clonedDiv.attr("id",id);
                   $('#'+id).find('p#content').append('<p href="#" id='+type+id+' style="color:#90c5a9;" >' + content + '</p>');
                     $('#'+id).find('p#name').append('<li href="#" id='+type+id+' style="color:#ef6d3b;" >' + senderid + '</li>');
                    $('#'+id).find('span#date').append('<li href="#" id='+type+id+' style="color:#ef6d3b;">' + date + '</li>');
                    $('#'+id).find('span#type').append('<li href="#" id='+type+id+' >' + type + '</li>');
                    messageID.push(id);
                 // $('#allVacancy').hide();
            }  
              
            if(type==="Announcements"){
               // $('#allAnnouncement').show();
              var clonedDiv = $('#announcement').clone();
                $('#allAnnouncement').prepend(clonedDiv);
                clonedDiv.attr("id",id);
                   $('#'+id).find('p#content').append('<p href="#" id='+type+id+' style="color:#90c5a9;" >' + content + '</p>');
                     $('#'+id).find('p#name').append('<li href="#" id='+type+id+' style="color:#ef6d3b;" >' + senderid + '</li>');
                    $('#'+id).find('span#date').append('<li href="#" id='+type+id+' style="color:#ef6d3b;">' + date + '</li>');
                    $('#'+id).find('span#type').append('<li href="#" id='+type+id+' >' + type + '</li>');   
                    messageID.push(id);
                    //  $('#allAnnouncement').hide();
            }  
          
            
         }
       
            else{
                
                
            }    
        
        
        
            }

    });
}


$(document).ready(function () {
     var id1=1;
 
           var id=$('#getSession').val();
           alert(id);
  if(id===78){
      
  
  }
  else if(!id===id1){
     $('#allEvents').hide();
  }
  else{
     $('#allEvents').show();
  }
  
    // $('#allEvents').hide();
    
    getNotificationPolling();
    $.ajax({
        url: 'webapi/alerts',
        method: "GET",
        datatype: "xml",
        success: getNotification,
        error: function (xhr, ajaxOption, thrownError) {
            console.log(xhr.status);
            console.log(thrownError);
        }


    });
});