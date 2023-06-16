$(function(){

    $("#attributeList input[type=text][readonly=readonly]").each(function(questionIndex,questionValue) {
    
        var select = "<select id='customAnswerCombo"+questionIndex+"' class='dropdown_single' autofocus='autofocus'><option hidden='' style='display: none !important;' disabled='' selected='' value=''></option></select>";        
        $(select).insertAfter($(this));	
        
        var answerList = $.parseJSON($(this).val());
        
        var answerControlId=$(this).attr('id');
        
        $.each(answerList.questionChoice, function(index, value){
            $("#customAnswerCombo"+questionIndex).append($('<option>', {value: value,text: value}));
        });
        
        $("#customAnswerCombo"+questionIndex).change(function() {
            $("#"+answerControlId+"_Selected").val($(this).prop('selectedIndex'));
        });
        
    });
});