

var check = 0;

$('.onlineeventtext,.onsiteevent,.currentfest').click(function(){
    var tagid = this.id;
    $.fn.fullpage.setMouseWheelScrolling(false);
    $.fn.fullpage.setAllowScrolling(false);
    if(tagid ==='cyb2018')
    {
        $('#festdetails h1').text("THEME - Colossal Byto Mirage");
        $('#festdetails p').html("<h3>All problems are illusions of the mind. - Eckhart Tolle</h3>" +
            "<p>The whole history of humanity is an enormous accumulation of data.\n" +
            "Information has been stored for thousands of years. Data has become an\n" +
            "integral part of social lives. Today large data sources are ubiquitous throughout\n" +
            "the world. The mass distribution of the technology and innovative models that\n" +
            "utilize these different kinds of devices and services to incorporate our huge\n" +
            "enormous collection.</p>" +
            "<p>How will be the experience of data with reality?</p>" +
            "<p>Augmented Reality is high end user interface that involves real-time\n" +
            "simulation. It makes us to experience the illusion of the real world. It process\n" +
            "the simulation of data in real world . A new level of entertainment is created\n" +
            "with more intimate and emotional experience which leads to future.</p>" );
    }

    if(tagid ==='eventtxt1')
    {
        $('#festdetails h1').text("TECH CLICK");
        $('#festdetails p').html("<p>It's time to embrace your designing skills. Take a click" +
            "of your own and design it with your creativity and unleash your hidden talents .</p>" +
            "<h3>RULES</h3>" +
            "<li>Maximum 2 contestants from each college .</li>" +
            "<li>Any creative technology photos (photoshop or coreldraw should be used) .</li>" +
            "<li>Each contestant can upload only one photo with caption .</li>" +
            "<li>Judges evaluation is final .</li>" +
            "<li>Short listed photos will be uploaded in website .</li>" +
            "<li>Photo that gets maximum likes will be the winner ." +
            "<h3>EVALUATION</h3>" +
            "<li>Only captions that are related to the topic should be uploaded .</li>" +
            "<li>Evaluation will be held internally and also facebook likes will be considered .</li>" +
            "<h3>INSTRUCTIONS</h3>" +
            "<li>Only 2 contestants are allowed from each Department .</li>" +
            "<li>Photos can be uploaded to the website.</li>" +
            "<li>Shortlisted photos will be uploaded on website and social media.</li>"
           );
    }
    else if(tagid ==='eventtxt2')
    {
        $('#festdetails h1').text("INTRUDER");
        $('#festdetails p').html("<p> Brace your skills ,connect with us . It's time to show your" +
            "networking skills . The world is connected in a network . Better prepare yourself for " +
            "the ride of connectivity .</p>" +
            "<h3>INSTRUCTIONS</h3>" +
            "<li>Network Related and logical Questions will be in the Server . </li>" +
            "<li>Participant will need to write the client api code to Access the Questions .</li>" +
            "<li>Participant Can use any Server Side Language to Access.</li>" +
            "<li>Participant must be send their Answers in JSON format.</li>" +
            "<li>The participants are required to play the event in PC/Laptops .</li>" +
            "<h3>RULES</h3>" +
            "<li>Only one Member Per Department can Participate.</li>" +
            "<li>Any Illegal Activity found Entire College will Be Disqualified.</li>" +
            "<h3>EVALUATION</h3>" +
            "<li>The one with the maximum point at the end of the event is the winner .</li>" +
            "<li>Points are evaluated automatically .</li>");
    }
    else if(tagid ==='eventtxt3')
    {
        $('#festdetails h1').text("MAZEPLOSION");
        $('#festdetails p').html("<h5>LIFE ISN'T ABOUT FINDING PIECES OF APUZZLE IT'S ABOUT CREATING AND " +
            "PUTTING THOSE EXCEPTIONAL PIECES TOGETHER .</h5>" +
            "<p>There is nothing called as clueless crime . It's your capacity to find the clue and " +
            "find the crime . Here you are given with the clue now It's your turn to get rideoff the maze with amazing answer .</p>" +
            "<h3>RULES</h3>" +
            "<li>For Every hint your points will be reduced .</li>" +
            "<li>The participant should answer the question within the given time.</li>" +
            "<h3>EVALUATION</h3>" +
            "<li>The one with the maximum point at the end of the event is the winner .</li>" +
            "<li>Points are evaluated automatically .</li>" +
            "<h3>INSTRUCTIONS</h3>" +
            "<li>Only one student should participate from each college .</li>" +
            "<li>Participate should give the answer related to the given questions .</li>" +
            "<li>Any abusive answer found will be strictly disqualified .</li>");
    }
    else if(tagid ==='eventtxt4')
    {
        $('#festdetails h1').text("CALL IT BATTLE");
        $('#festdetails p').html("");
    }
    else if(tagid ==='event1')
    {
        $('#festdetails h1').text("DOCTRINE");
        $('#festdetails p').html("<p>Be sure you put your feet in the right place , the " +
            "stand firm. Its a perfect time to explore your Knowledge . Be Innovative and unique to" +
            "express your ideas .<br>" +
            "If you think you can or if you think you can't , you are right your attitude " +
            "determines your result .</p>" +
            "<h3>RULES</h3>" +
            "<li>Maximum 2 members per team to be allowed.</li>" +
            "<li>Only one team per college will be permitted.</li>" +
            "<li>Total time of this event is 45 minutes.</li>" +
            "<h3>EVALUATION</h3>" +
            "<li>Algorithm perfection.</li>" +
            "<li>Way of approach to solve and present the algorithm.</li>" +
            "<li>Innoavtion of creation .</li>" +
            "<li>Judges evaluation if final.</li>"+
            "<h3>INSTRUCTIONS</h3>" +
            "<li>Data set and its answer will be given.You will be able to write a algorithm suitable for that.</li>" +
            "<li>Mobile phones and other Electronic Devices are strictly prohibited.</li>"
        );
    }
    else if(tagid ==='event2')
    {
        $('#festdetails h1').text("DALVIK");
        $('#festdetails p').html("<p>This is the challenge to showcase your technical strength" +
            " and compete with other technicians to become " +
            "the ultimate professional. This event provides two stage which focus on quiz and designing paths.  </p>" +
            "<h5> Come on and play with your skills and let everyone to know about it .</h5>" +
            "<h2>PRELIMINARY  ROUND </h2>" +
            "<h3>RULES</h3>" +
            "<li>Maximum 2 members per team to be allowed.</li>" +
            "<li>Only one team per college will be permitted.</li>" +
            "<li>45 minutes for 45 MCQ, each carries 1 mark.</li>" +
            "<li>Shortlisted candidates only allowed for final round.</li>"+
            "<h3>EVALUATION</h3>" +
            "<li>Based on marks obtained from the MCQ for preliminary round.</li>" +
            "<h2>FINAL ROUND </h2>" +
            "<h3>RULES</h3>" +
            "<li>45 minutes for developing designs in android for a given constraints.</li>" +
            "<li>Marks will be awarded as per the level of design and implementations of constraints. </li>" +
            "<h3>EVALUATION</h3>" +
            "<li>Based on innovative and creative ideas in the application for the final round.</li>" +
            "<h3>INSTRUCTIONS</h3>" +
            "<li>Maximum  2 members  per team  allowed . </li>" +
            "<li>Only one team per college will be permitted.</li>" +
            "<li>No internet connectivity will  be provided.</li>" +
            "<li>Any malpractice leads to disqualification.</li>" +
            "<li>Decision of the judges will be final.</li>" +
            "<h2>DETAILS</h2>" +
            "<li>CO-ORDINATOR :  PRIYANKA. AR  &  RAMYA. S</li>" +
            "<li>CONTACT      :  9944361813</li>" +
            "<li>EMAIL        :  dalvik@citcyberfest.com</li>"
        );
    }
    else if(tagid ==='event3')
    {
        $('#festdetails h1').text("TSARAVICH");
        $('#festdetails p').html("<p>WILL BE UPDATED SOON</p>");
    }
    else if(tagid ==='event4')
    {
        $('#festdetails h1').text("CODECHAOS");
        $('#festdetails p').html("<h3>Every Great change is preceded by chaos - Deepak chopra </h3>" +
            "<p>There is a chaos, a chaos in everything . Its our responsibility to sort it out to make life happier. " +
            "yeah that's the motto for this offline event . Codechaos is for those who are always curious about programming ." +
            "If you think you are a programming legend , then this event is tailor-made for you. If you are one of them," +
            "then signup for this event that test's your logical and programming skills.</p>" +
            "<h3>INSTRUCTIONS</h3>" +
            "<h4>ROUND 1</h4>" +
            "<li>It contains objective type questions.</li>" +
            "<li>It contains 30 questions.</li>" +
            "<li>Each answer carries 1 mark.</li>" +
            "<li>Time provided :45 mins</li>" +
            "<li>The candidates selected in this round will be allowed for the next round.</li>" +
            "<h4>Round 2</h4>" +
            "<li>The selected candidates will be provided with jumbled codes.</li>" +
            "<li>The candidates have to find the logic of the problem and solve it.</li>" +
            "<h3>RULES</h3>" +
            "<li>Maximum one team per college.</li>" +
            "<li>Maximum two members per team.</li>" +
            "<li>Electronics devices are strictly prohibited.</li>" +
            "<li>Unethical behavior could lead to disqualification.</li>" +
            "<li>The decision of the judges will be final .</li>" +
            "<h3>CONTACT</h3>" +
            "<li>Elango.S - 7530079236</li>" +
            "<li>codechaos@cyberfest.com</li>"
        );
    }
    else if(tagid ==='event5')
    {
        $('#festdetails h1').text("SLIDOPUS");
        $('#festdetails p').html("<p>Folks are you all set to hit the floor with your" +
            "zenithal ideas, come onward reserve your spaces and be " +
            "equipped to clash your ideas and make a pride and steal the " +
            "reward in your hands.</p>" +
            "<h3>Rubrics</h3>" +
            "<li>Maximum 2 member per team.</li>" +
            "<li>Stage is all your for 8 min.</li>" +
            "<li>Slides Are More than Enough (Avoid Video clips ).</li>" +
            "<li>Judges decision is final.</li>" +
            "<h3>Appraisal</h3>" +
            "<li>Your philosophies .</li>" +
            "<li>Communication.</li>" +
            "<li>Slide preparation .</li>" +
            "<h3>INSTRUCTIONS</h3>" +
            "<li>Only Registered student's must send their abstraction on or" +
            "before 18 th jan via mail.</li>" +
            "<li>Abstraction must contain minimum 250 words .</li>"+
            "<li>A team can send one abstract.</li>"
        );
    }
    else if(tagid ==='event6')
    {
        $('#festdetails h1').text("BRAINSNARE");
        $('#festdetails p').html("<p>It's time to unleash all the knowledge within you in a wide " +
            "range of fields of Computer Science ." +
            "Get ready  .. Give work to your brain and win the competition.</p>"+
            "<h3>RULES</h3>" +
        "<li>Maximum 2 members per team .</li>" +
        "<li>Only one team per college will be permitted. </li>" +
            "<h3>INSTRUCTIONS</h3>"+
            "<h5>Round 1 - </h5>"+
            "<li>Objective type questions  .</li>" +
            "<li>The shortlisted members will be allowed for the next round. </li>"+
            "<h5>Round 2 - </h5>"+
            "<li>Buzzer round .</li>" +
            "<li> Electronic gadgets should not be used in the competition. </li>"+
            "<li>The decision of the jury will be final. </li>"
        );
    }
    $('#festdetails').show();
    check=1000;
    $("#blurdiv").css({'filter': 'blur(5px)'});
});
$('.close').click(function(){
    $('#festdetails').css({'-webkit-animation': 'shrink 1s 1'});
    $('#festdetails').hide(600);
    check=0;
    setTimeout(function(){ $('#festdetails').css({'-webkit-animation': 'grow 1s 1'}); }, 400);
    $('#blurdiv').css({'filter': 'blur(0px)'});
    $.fn.fullpage.setMouseWheelScrolling(true);
    $.fn.fullpage.setAllowScrolling(true);
});


            $('#blurdiv').click(function () {
                {
                    check=check+1;
                    if(check === 1002) {
                        $('#festdetails').css({'-webkit-animation': 'shrink 1s 1'});
                        $('#festdetails').hide(600);
                        setTimeout(function () {
                            $('#festdetails').css({'-webkit-animation': 'grow 1s 1'});
                        }, 400);
                        $('#blurdiv').css({'filter': 'blur(0px)'});
                        $.fn.fullpage.setMouseWheelScrolling(true);
                        $.fn.fullpage.setAllowScrolling(true);
                    }
                }
            });
