Ext.onReady( 
function()
{
    Ext.Msg.alert("alert","Hello we are ready");
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
);