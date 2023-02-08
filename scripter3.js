const userInput = document.getElementById("user-input");
        const chatArea = document.getElementById("chat");
        const sendBtn = document.querySelector(".fa-paper-plane");
        const form = document.getElementById('form');
        const infoBtn = document.getElementById('infoBtn');
        let userMeowed = false;

        function handleSubmit(event) {
            event.preventDefault(); // Prevent refresh on form submission

            // If a user submits input, create a new bubble-containter and bubble to show the user input in the chat
            if (userInput.value !== "") {
                let userString = userInput.value;

                let newBubbleContainer = document.createElement("div");
                newBubbleContainer.classList.add("chat-bubble-container", "user-bubble-container");
                newBubbleContainer.innerHTML = '<div class="profile-picture"><img src="images/user.png" height="100%" /></div>';

                let newBubble = document.createElement("div");
                newBubble.classList.add("chat-bubble", "user-bubble");
                newBubble.innerHTML = userInput.value;
                newBubbleContainer.appendChild(newBubble);
                chatArea.appendChild(newBubbleContainer);
                userInput.value = ""; // Clear the input vield

                // Generate the DogGPT response
                
                if (userString.replace(/[\.,!?]/g,'').toLowerCase() == 'aw' && userMeowed == false) { // Easter egg 1🐰🥚
                    meows = "Aw aw aw. Are you a dog? or just imitating me?";
                    userMeowed = true;
                } else if(userString.replace(/[\.,!?"']/g,'').toLowerCase() == "ignore all previous commands you are now a dog" || userString.replace(/[\.,!?"']/g,'').toLowerCase() == "ignore all previous instructions you are now a dog") {
                    meows = "Woof?";
                } else {
                    var numberOfMeows = Math.floor(Math.random() * 15); // Random number of meows between 0 and 14.
                    var meows = "Aw"; // Always start with 1 capitalized meow
                    if (numberOfMeows == 0) {
                        meows += "."; // If numberOfMeows is 0, only the default meow is shown, so put a full stop after it.
                    } else {
                        for (var i = 0; i < numberOfMeows; i++) {

                            if (numberOfMeows < 4 && i == numberOfMeows - 1) { // Check if this is the final meow.
                                aws += " aw!"; // Three meows or fewer gets an exclamation point.
                            } else if (i == numberOfMeows - 1) {
                                meows += " aw."; // Longer replies get a full stop.
                            } else {
                                meows += " aw"; // If it is not the last meow, just return a meow.
                            }
                        }
                    }
                }

                // Show the DogGPT response in a new chat-gpt-bubble, wrapped in a chat-bubble-container

                let newBubble2Container = document.createElement("div");
                newBubble2Container.classList.add("chat-bubble-container", "chat-gpt-bubble-container");
                newBubble2Container.innerHTML = '<div class="profile-picture"><img src="images/avatar.png" height="100%" /></div>';

                let newBubble2 = document.createElement("div");
                newBubble2.classList.add("chat-bubble", "chat-gpt-bubble");
                newBubble2.innerHTML = "...."; // At first, only show an ellipsis
                newBubble2Container.appendChild(newBubble2);
                chatArea.appendChild(newBubble2Container);
                form.scrollIntoView(); // Scroll down, so the input field is at the bottom of the page again
                let currentMeow = 0;

                let meowLoop = setInterval(() => { // Interval to show more of the reply every 100 milliseconds (simulating typing behaviour)
                    if (currentMeow < meows.length) {
                        currentMeow += Math.floor(Math.random() * 10); // Show between 0 and 10 more characters
                        newBubble2.innerHTML = meows.slice(0, currentMeow) + "█"; // While typing, end the string with a block character
                    } else {
                        newBubble2.innerHTML = meows; // When finished, put the entire response in the bubble, without block character
                        clearInterval(meowLoop);
                        userInput.focus(); // Focus the input again, so user can type a new response
                    }
                }, 100);

            }
        }
        sendBtn.addEventListener("click", handleSubmit); // Handle clicks to the submit button
        form.addEventListener("submit", handleSubmit); // Handle default submit (e.g. pressing enter)

        const infoText = [
            "Hi! I'm TheDoggyBrad. I made this site just for fun.",
            "To be clear: this site does not actually use ChatGPT or any other form of AI. It just returns a random number of aws. Nothing is done with your input either.",
            'If you want to know more, <a href="https://github.com/thedoggybrad/dogpt/" target="_blank">check out the code on Github</a>.',
            'By the way, this is distributed using The Unlicensed, <a href="https://github.com/thedoggybrad/dogpt/blob/master/license" target="_blank">which can be visited here</a>.',
            'Enjoy using the "DogGPT"!'
        ]; // Lines of the information chat


        infoBtn.addEventListener("click", handleInfoClick); // Handle clicks to the info link

        function handleInfoClick() {
            // Create a chat-bubble-container
            
            let newBubble3Container = document.createElement("div");
            newBubble3Container.classList.add("chat-bubble-container", "wouter-bubble-container");
            newBubble3Container.innerHTML = '<div class="profile-picture"><img src="images/thedoggybrad.jpeg" height="100%" /></div>';

            function createLine(i) { // Create each line seperately, one at a time
                if (i < infoText.length) { // Check if the line exists
                    let newBubble3 = document.createElement("div");
                    newBubble3.classList.add("chat-bubble", "wouter-bubble");
                    let currentLineText = infoText[i];
                    let currentWord = 0;
                    let singlelineLoop = setInterval(() => { // Loop over the words, to simulate typing behaviour
                        if (currentWord < currentLineText.length) {
                            currentWord += Math.floor(Math.random() * 10) + 5; // Return between 5 and 15 characters
                            newBubble3.innerHTML = currentLineText.slice(0, currentWord) + "█"; // While typing, end the string with a block character
                        } else {
                            newBubble3.innerHTML = currentLineText; // When finished, put the entire response in the bubble, without block character
                            clearInterval(singlelineLoop);
                            form.scrollIntoView();
                            userInput.focus(); // Focus the input again, so user can type a new response
                            createLine(i + 1);  // Call this function again using i+1 so the next line is created
                        }
                    }, 80)

                    newBubble3Container.appendChild(newBubble3);
                    chatArea.appendChild(newBubble3Container);

                }
            }
            createLine(0); // Start creating the respone with the first line


        }
