$(function () {

    // init the validator
    // validator files are included in the download package
    // otherwise download from http://1000hz.github.io/bootstrap-validator

    $('#contact-form').validator();


    // when the form is submitted
    $('#contact-form').on('submit', function (e) {

        // if the validator does not prevent form submit
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            // POST values in the background the the script URL
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    // data = JSON object that contact.php returns

                    // we recieve the type of the message: success x danger and apply it to the 
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    // let's compose Bootstrap alert box HTML
                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    
                    // If we have messageAlert and messageText
                    if (messageAlert && messageText) {
                        // inject the alert to .messages div in our form
                        $('#contact-form').find('.messages').html(alertBox);
                        // empty the form
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    })
});
Chat

New Conversation

🤓 Explain a complex thing

Explain Artificial Intelligence so that I can explain it to my six-year-old child.


🧠 Get suggestions and create new ideas

Please give me the best 10 travel ideas around the world


💭 Translate, summarize, fix grammar and more…

Translate "I love you" French


GPT-4o Mini
Hello, how can I help you today?
Explain Artificial Intelligence so that I can explain it to my six-year-old child.
GPT-4o Mini
Sure! You can explain Artificial Intelligence (AI) to your six-year-old child like this:
"Okay, imagine if there was a really smart robot or computer that can learn and think like people do. This smart machine can help us do lots of things! For example, it can play games with us, answer questions, or even tell us stories. 
Just like how you learn new things by practicing—like riding a bike or playing a game—AI learns by looking at lots and lots of information. It tries to understand them, like how you understand what your favorite toy does.
So, when you talk to a smart speaker or play a video game that feels like it knows what you want, that's AI at work! It's like having a super helpful friend who can think and learn!"
GPT-4o Mini
coin image
9
Upgrade




Ask me anything...



Powered by AITOPIA 
Chat
Ask
Search
Write
Image
ChatFile
Vision
Full Page
