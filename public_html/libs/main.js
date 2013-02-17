Ext.onReady( 
function()
{
    Ext.Msg.alert("alert","Hello we are ready");
    
    if(typeof(Storage) !== "undefined"){
       Ext.Msg.alert("Storage", "Yeah storage works!");
       if(!localStorage.localCount)
       {
            localStorage.localCount = 0;
            sessionStorage.sessionCount = 0;
       }
       
       if(!sessionStorage.sessionCount)
       {
         sessionStorage.sessionCount =0;      
       }
       
       localStorage.localCount = parseInt(localStorage.localCount) +1;
       sessionStorage.sessionCount = parseInt(sessionStorage.sessionCount) +1;
       
       console.log("Local Storage Count:" + localStorage.localCount );
       console.log("session Storage Count:" + sessionStorage.sessionCount );
    }
    else
    {
    Ext.Msg.confirm("Question", "What is your answer?", 
    function(answer)
    {
        if(answer == "yes")
            {
                Ext.Msg.alert("","You clicked yes!");
            }
         else
            {
                Ext.Msg.alert("", "You clicked no!");
            }
            
            
    });
    }
    
    var content = Ext.get("content");
    content.on("contextmenu",function(){Ext.Msg.alert("Just Testing!")});
}
);