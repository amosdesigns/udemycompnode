# udemy complete node.js course
class work for udemy the complete node js developer course
*******************
Update: OpenWeather.org Requires An API Key (Free)
Section 5, Lecture 37
In the next several videos, you'll be using http://openweathermap.org to fetch real weather data.

They've changed their API requiring an API Key. Don't worry, it's free and easy to setup. Here are the instructions to follow during the next video to setup your API Key:

Step 1: Get API Key

You can get an API Key by registering for a free 
Once you login to your new account, you should see an API section on the page. Copy the API Key into the clipboard.

Step 2: Update URL

Anytime you use the API, all you need to do is add this API Key to the url. Currently the URL will look like this:

var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation + '&units=imperial';

After you add the API Key, it should look like like the following. Notice the appid query parameter was added. Will talk more about that soon!

var url = 'http://api.openweathermap.org/data/2.5/weather?appid=PASTE_API_KEY_HERE&q=' + encodedLocation + '&units=imperial';

It's a shame they made this change, but after following those two steps, everything will work as expected!
