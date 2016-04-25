<%@page import="com.mycompany.samplehospital.model.User"%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Chat Application</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet"
              href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
        <script
        src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <script
        src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
        <link href='http://fonts.googleapis.com/css?family=Raleway'
              rel='stylesheet' type='text/css'>
        <link rel='stylesheet' type='text/css' media='all' href='chat.css'>
        <link rel='stylesheet' type='text/css' media='all' href='chatbox.css'>
        <link rel="stylesheet"
              href="//cdn.jsdelivr.net/jquery.sidr/2.2.1/stylesheets/jquery.sidr.light.min.css">

        <script src="js/dashboard.js" type="text/javascript"></script>
        <script src="js/chatBoxLogin.js" type="text/javascript"></script>
        <script src="js/Static.js" type="text/javascript"></script>
        <script src="js/notification.js" type="text/javascript"></script>
<script >
    $(document).ready(function () {
        var seesion=$('#getSession').val();
    if(!seesion==1){
         $('#allVacancy').hide();
        
    }
    });
</script>

    </head>
    <body>
        <% if (session.getAttribute("user") == null) { // New location to be redirected
                String site
                        = "http://localhost:8080/sampleHospital/index.html";
                response.sendRedirect(site);
                return;
            } %> <% User newUser = (User) session.getAttribute("user");%>
        <input id="getSession" value=<%= newUser.getId()%> />
        <p id="getCurrentName"><%= newUser.getFullName()%>
        <div id="hidemyauth">
            <input type="text" placeholder="chatbox password" id="chatboxpassword" />
            <button id="checkChatAuthentication" value="getchatroom" />
        </div>


        <nav class="navbar navbar-default sidebar" role="navigation" style="background-color: #3F2860;">
            <div class="container-fluid" id="chattt">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse"
                            data-target="#bs-sidebar-navbar-collapse-1">
                        <span class="sr-only">Toggle navigation</span> <span
                            class="icon-bar"></span> <span class="icon-bar"></span> <span
                            class="icon-bar"></span>
                    </button>
                </div>
                <div class="collapse navbar-collapse"
                     id="bs-sidebar-navbar-collapse-1" style="background-color: #3F2860;">
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="#" style="color:#ef6d3b;">Dashboard<span
                                    style="font-size: 16px;"
                                    class="pull-right hidden-xs showopacity glyphicon glyphicon-home"></span></a></li>
                        <li class="dropdown"><a href="#" class="dropdown-toggle"
                                                data-toggle="dropdown" style="color:#ef6d3b;background-color: #3F2860;">My Task<span class="caret"></span><span
                                    style="font-size: 16px;"
                                    class="pull-right hidden-xs showopacity glyphicon glyphicon-user"></span></a>
                            <ul class="dropdown-menu forAnimate" role="menu" style="color:#ef6d3b;background-color: #3F2860;">
                                <li><a href="{{URL::to('createusuario')}}"> Report</a></li>
                                <li><a href="#">Send report</a></li>
                                <li><a href="#">Attached messages</a></li>
                                <li class="divider"></li>
                                <li><a href="#">Form</a></li>
                                <li class="divider"></li>
                                <li><a href="#">Images</a></li>
                                <div id="chatRoom1">
                                <li id="chatRoom">
                                    <a href="#" data-toggle="modal" data-target="#myModal"
                                       id="chatRoom"> Add Room </a></li>
                                       </div>
                            </ul></li>

                        <li><a href="#" data-toggle="modal"
                               data-target="#notification" id="SendNotification" style="color:#ef6d3b;"> Send
                                Notification </a><span style="font-size: 16px;"
                                                   class="pull-right hidden-xs showopacity glyphicon glyphicon-tags"></span></a></li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="clearfix">
            <div class="container-fluid">
                <ul class="pull-left">
                    <li class="profile-info dropdown"><a href="#"
                                                         class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true" style="color:#ef6d3b;">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Yonina_Tulip.jpg"
                                alt="image" class="test"> <%= newUser.getFullName()%>
                        </a>
                </ul>


                <ul class="pull-left pull-right-xs pull-none-xsm"
                    style="margin-top: 20px;">
                    <li id="notice" class="notifications dropdown"
                        style="padding-right: 10px;" size="2"><a href=""
                                                             class="dropdown-toggle" data-toggle="dropdown"
                                                             data-hover="dropdown" data-close-others="true" id="reset" onclick="reset()" style="color:#ef6d3b;"><span
                                class="glyphicon glyphicon-alert"><span class="badge" id="count">
                                </span></span></a>
                        <ul class="dropdown-menu">
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
                        </ul>
                    </li>

                    <li class="notifications dropdown col-sm-offset-1"><a href="#"
                                                                          class="dropdown-toggle" data-toggle="dropdown"
                                                                          data-hover="dropdown" data-close-others="true" style="color:#ef6d3b;">Reports </a>
                        <ul class="dropdown-menu">
                            <li class="top">
                                <p class="small">
                                    <a href="#" class="pull-right">Mark all read</a> "you have "<strong>
                                        3</strong> "new notifications."

                                </p>
                            </li>
                            <li id="listReports"></li>
                        </ul></li>
                    <li id="message" class="notifications dropdown col-sm-offset-1"
                        style="padding-right: 10px;"><a href="#"
                                                    class="dropdown-toggle" data-toggle="dropdown"
                                                    data-hover="dropdown" data-close-others="true"><span
                                class="glyphicon glyphicon-envelope" style="color:#ef6d3b;"><span class="badge">3
                                </span></span></a>
                        <ul class="dropdown-menu">
                            <li class="top">
                                <p class="small">
                                    <a href="#" class="pull-right">Mark all read</a> "you have "<strong>
                                        3</strong> "new notifications."
                                </p>
                            </li>
                            <li id="listMessage"></li>
                        </ul></li>




                </ul>

                <ul class="pull-right pull-left-xs"
                    style="margin-top: 20px; padding-right: 30px;">
                    <li style="padding-right: 15px;color:#ef6d3b;">Logout</li>

                    <li class="chatinfo" style="padding-right: 15px;"><a
                            href="#sidr" id="rightmenu" style="color:#ef6d3b;"> Chat </a>

                        <div id="sidr">
                            <ul id="listusers" class="userList">


                            </ul>
                            <ul class="GroupChat" id="groupChatBox">

                            </ul>
                        </div>
                </ul>


                <!--  The box for the bit of explanation of the hospital -->
                <div class="jumbotron">
                    <h2 class="text-uppercase" style="position:center;">Jorvi
                        Hospital</h2>
                    <img class="img-responsive"
                         src="http://previews.123rf.com/images/dolgachov/dolgachov1307/dolgachov130701752/21034411-healthcare-medical-and-technology-doctor-showing-something-patient-on-tablet-pc-in-hospital-Stock-Photo.jpg"
                         alt="chatapp" width="300" height="300" style="float: right;">
                    <p class="small" style="position: relative">Neon Theme comes
                        with pre-defined functions to handle layout behaviors. You have
                        tens of options to make your theme layout look differently. In this
                        page, you are going to see how you can show, hide, remove or add
                        layout elements. In order to customize the layer JS file
                        neon-api.js is required to load.</p>

                </div>
            </div>
        </div>



        <!--  the foot element to write many other description of the chat application and the Hospital -->
        <div id="footelement" class="row" >
            <div  style="padding-bottom: 10px; margin-bottom:50px;">
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
                <div class="col-md-4 col-xs-12 col-sm-6 col-lg-2">
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
            </div>
        </div>


        <!--  end of foot element -->

        <div id="footer"> &copy; Shurakshya Kharel And the team. All rights reserved.
        </div>


        <div id="chatbox">
            <div id="eachchatbox">
                <div class="col-md-3">

                    <div class="portlet portlet-default">
                        <div class="portlet-heading">
                            <div class="portlet-title">
                                <h4>
                                    <span id="username" style="color: white"></span>
                                </h4>
                            </div>
                            <div class="portlet-widgets">
                                <div class="btn-group">
                                    <button type="button"
                                            class="btn btn-white dropdown-toggle btn-xs"
                                            data-toggle="dropdown">
                                        Status <span class="caret"></span>
                                    </button>
                                    <button type="button" class="btn btn-white btn-xs"
                                            id="minimize">
                                        <span class="glyphicon glyphicon-minus" style="font-size:12px;"></span>
                                    </button>
                                    <button type="button" class="btn btn-white btn-xs" id="remove">
                                        <span class="glyphicon glyphicon-remove" style="font-size:12px;"></span>
                                    </button>
                                    <ul class="dropdown-menu" role="menu">
                                        <li><a href="#"> Online</a></li>
                                        <li><a href="#"> Away</a></li>
                                        <li><a href="#"> Offline</a></li>
                                    </ul>
                                </div>
                                <span class="divider"></span> <a data-toggle="collapse"
                                                                 data-parent="#accordion" href="#chat"></a>
                            </div>
                            <div class="clearfix" style="background-color: transparent"></div>
                        </div>
                        <div id="chat" class="panel-collapse collapse in">
                            <div class="portlet-body chat-widget"
                                 style="overflow-y: auto; width: auto; height: 300px;">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <p class="text-center text-muted small">time and date
                                            here</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="media-left" style="float:left !important; color:blue;">
                                            <a class="pull-left" href="#"> <img
                                                    src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Yonina_Tulip.jpg"
                                                    class="img-circle" alt="Cinque Terre" width="30" height="30">
                                            </a>
                                            <div class="media-body" style="width:20px;">																				
                                                <p>hello hw r u sodnskbdfbdfbdfnvsdnbkldnvkxcnvosdnvoisdnbx
                                                    <br><span class="small">12:23 PM</span>
                                                </p>
                                            </div>
                                        </div>

                                        <div class="media-right" style="float:right !important; color:red;">
                                            <a class="pull-right"href="#"> <img
                                                    src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Yonina_Tulip.jpg"
                                                    class="img-circle" alt="Cinque Terre" width="30" height="30">
                                            </a>
                                            <div class="media-body" style="width:20px;">																									
                                                <p>something over here nfoidskngosfngisnkngsfbskjbgjksbsjkbsjgbsbjksgbjks
                                                    <br><span class="small">12:23 PM</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div class="portlet-footer">
                                    <form role="form">
                                        <div class="form-group">
                                            <input class="form-control" id="input-area"
                                                   placeholder="Enter message..." />
                                        </div>
                                        <div class="form-group" id="button-append">

                                            <!-- <input type="file" name="datafile" size="40"> 
                 <button type="button" class="btn btn-default pull-right" id="send-button">Send</button>
                                            -->
                                            <div class="clearfix" style="background-color: transparent"></div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <!--  end of chat box -->

        <!-- Modal -->
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog"
             aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"
                                aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 class="modal-title " id="myModalLabel">Room Details</h4>
                    </div>
                    <div class="modal-body">


                        <form role="form">
                            <div class="form-group">
                                <label for="user">Name:</label> <input type="text"
                                                                       class="form-control" id="roomName">
                            </div>
                            <div class="form-group">
                                <label for="password">Password:</label> <input type="password"
                                                                               class="form-control" id="password" required="true">
                            </div>

                            <label for="user">Add Users</label><br> <div
                                id="userList"  multiple >

                            </div>
                        </form>

                    </div>


                    <div class="modal-footer">
                        <button type="button" class="btn btn-default"
                                data-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary"
                                onclick="addRoom();" data-dismiss="modal">Create</button>
                    </div>

                </div>


            </div>
        </div>
        <!--  add room -->


        <!--  Modal send notification -->

        <div class="modal fade" id="notification" tabindex="-1"
             role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"
                                aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 class="modal-title " id="myModalLabel">Notification
                            Details</h4>
                    </div>
                    <div class="modal-body">


                        <form role="form">
                            <div class="form-group">
                                <span id="allfield"></span>
                                <label for="type">Type</label> <select class="form-control"
                                                                       id="sel1" name="type" required>
                                    <option>Emergency</option>
                                    <option>News</option>
                                    <option>Assignments</option>
                                    <option>Announcements</option>
                                    <option>Vacancy</option>
                                    <option>Events</option>

                                </select>
                            </div>
                            <div class="form-group">
                                <label for="user">Receivers </label><br> <div
                                    id="group"  multiple name="receivers" required>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="user">Compose Message </label><br>
                                <textarea class="form-control" rows="5" id="message"
                                          placeholder="Message here..." required></textarea>
                            </div>

                        </form>

                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-default"
                                data-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary"
                                onclick="sendNotification()" data-dismiss="modal">Send</button>
                    </div>

                </div>
            </div>
        </div>

        <!--  end notifications modal -->

    </div>
</div>




<!-- Including the Sidr JS -->
<script
src="//cdn.jsdelivr.net/jquery.sidr/2.2.1/jquery.sidr.min.js"></script>
<%--
<script>
        
</script>
--%>
</body>
</html>
