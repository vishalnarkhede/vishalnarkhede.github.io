document.addEventListener("DOMContentLoaded", function(event) {
    var terminal = document.getElementById('cool-content');
    var commandPrompt = pushCommandPrompt(terminal);

    pushCommand(commandPrompt, 'npm run show-description', result1)
        .then (function () {
            var nextCommandPrompt = pushCommandPrompt(terminal);
            terminal.scrollTop = 10000;
            return pushCommand(nextCommandPrompt, 'npm run show-projects', result2);
        })
        .then (function () {
            var nextCommandPrompt = pushCommandPrompt(terminal);
            terminal.scrollTop = 10000;
            return pushCommand(nextCommandPrompt, 'npm run show-hobbies', result3);
        })
        .then (function () {
            terminal.scrollTop = 10000;
        });
    
    function pushCommandPrompt (elem) {
        var terminalCommand = document.createElement('div');
        terminalCommand.classList.add('terminal-command');
        terminalCommand.innerHTML = 'vishal.narkhede$ ';
        elem.appendChild(terminalCommand);
    
        return terminalCommand;
    }
    
    function pushCommand (elem, command, result) {
        var promise = new Promise(function (resolve, reject) {
            var i = 0;
            var interval = setInterval(function () {
                elem.innerHTML += command.charAt(i);
                i++;
    
                if (i === command.length) {
                    clearInterval(interval);
                    setTimeout(function () {
                        pushCommandResult(terminal, result);
                        resolve();
                    }, 1000);
                }
            }, 100);
        })

        return promise;
     }
    
    function pushCommandResult (elem, result) {
        var resultNode = document.createElement('div');
        resultNode.innerHTML = result;
        elem.appendChild(resultNode);
    }
});

var result1 = ''+
'<br>' +
'<div class="terminal-command-result">' +
'    To give a short summary, I am a self-made web developer by profession with keen interest in frontend development.' +
'    I have an education background of Chemical Engineering from IIT Delhi. I am currently based in Amsterdam, Netherlands' +
'    working at a firm known as ServiceNow, as a Frontend Engineer. And for the fun part, I love travelling,' +
'    playing squash and exploring new things in life.' +
'</div>' +
'<br>';

var result2 = '' +
'<br>' +
'<div class="terminal-command-result">' +
    '<strong style="color: #d4cfcf;">' +
        '-> Voko.in (Freelance web developer)<br>' +
        '---------------------------------------------------------------------' +
    '</strong>' +
    '<br>' +
    '<ul>' +
        '<li>Developed and deployed an e-commerce website from scratch using Ruby on Rails and AngularJS</li>' +
        '<li>Built a CMS to manage products, orders, discount codes for website.</li>' +
    '</ul>' +
    '<strong style="color: #d4cfcf;">' +
        '---------------------------------------------------------------------<br>' +
        '-> Ithaka (Freelance android developer)<br>' +
        '---------------------------------------------------------------------' +
    '</strong>' +
    '<br>' +
    'Playstore link: <a href="https://play.google.com/store/apps/details?id=travel.ithaka.android">' +
        'https://play.google.com/store/apps/details?id=travel.ithaka.android</a>' +
    '<br>' +
    'Developed and shipped native and lightweight Android App within 2 weeks, with following key features:' +
    '<ul>' +
        '<li>Chat interface using Konotor library; push notifications for user using Pushbullet APIs</li>' +
        '<li>Material UI using Design Support Library; Flurry Analytics integration for tracking custom events & pages</li>' +
    '</ul>' +
    '<strong style="color: #d4cfcf;">' +
        '---------------------------------------------------------------------<br>' +
        '-> Medlabz (Freelance android developer)<br>' +
        '---------------------------------------------------------------------' +
    '</strong>' +
    '<br>' +
    'Playstore link: <a href="https://play.google.com/store/apps/details?id=com.medlabz.app">https://play.google.com/store/apps/details?id=com.medlabz.app</a>' +
    '<br>' +
    'Developed and shipped native and lightweight Android App within a month, with following key features:' +
    '<ul>' +
        '<li>Smooth typeahead search for various lab tests available at MedLabz partners; caching user preferences</li>' +
        '<li>Login and registration (custom, Facebook, Google etc.) and Complete lab test booking process</li>' +
        '<li>Material UI using Design Support Library; Google Analytics integration for tracking custom events & pages</li>' +
    '</ul>' +
'</div>' +
'<br>';

var result3 = '' +
'<br>' +
'<div class="terminal-command-result">' +
    'Squash, travelling, cooking.' +
'</div><br>';
