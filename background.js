
  // Called when the user clicks on the browser action.


  chrome.tabs.create({ url: chrome.runtime.getURL("dashboard/dashboard.html") });


  document.addEventListener("DOMContentLoaded", function(){  chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    alert(tabs[0].url); 
    chrome.tabs.executeScript({
        code: 'alert("Tab : "+tab.url)'
      });
});})


chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if(message.closeThis) 
    {
        chrome.tabs.remove(sender.tab.id);
        chrome.storage.sync.get(['count'], function(result) {
            if(result.key==0 || result.key==undefined)
            {
            chrome.storage.sync.set({'count': 0});
            }
            else
            {
                chrome.storage.sync.set({'count': result.key+1});                
            }
        });
        
    }
  });


function move() {
    var elem = document.getElementById("loadulation"); 
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var link= document.getElementById('clickr');
    //onclick
    link.addEventListener('click',move);
});
// *****************************************\\