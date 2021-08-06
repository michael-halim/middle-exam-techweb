$(document).ready(function(){
    var lastSavedTitle ='';
    var lastSavedNotes ='';
    $('.addBtn').click(function(){
        
        var title = $('#title').val();
        var notes = $('#notes').val();
        var string = '<div class="col-3 m-2 border" >'+
                            '<div class="row">'+
                                '<div class="col-12 my-2"><h6 class="close" style="font-size: 15px;">x</h6></div>'+
                                '<div data-toggle="modal" data-target="#exampleModal1" class="col-12 ml-4 my-2"><h3 class="title">'+ title +'</h3></div>'+
                                '<div data-toggle="modal" data-target="#exampleModal1" class="col-12 ml-4 my-2"><h6 class="notes">'+ notes +'</h6></div>'+
                             '</div>'+
                        '</div>'+
                    '</div>';
        $('#notesContent').append(string);
        $('#exampleModal').modal('hide');
        $('#title').val('');
        $('#notes').val('');
    
    }); 
    $('body').on('click', '.close', function () {
        $(this).closest('.border').remove();
    });
    $('body').on('click', '.border', function () {
       var root = $(this).closest('.border');
       var title = root.find('.title').text();
       var notes = root.find('.notes').text();
       var string = '<div class="my-2">Title : <input type="text" id="title" value= "'+ title +'"></div>' +
                    '<div class="my-2" >Notes : <textarea class="form-control" id="notes" style="height: 100px">'+ notes +'</textarea></div>';
        lastSavedTitle = title;
        lastSavedNotes = notes;

       $('#editNotes').html(string);
    });
    $('.editChanges').click(function(){
       
        var title = lastSavedTitle;
        var notes = lastSavedNotes;
        
        var string = '<div class="col-3 m-2 border" >'+
                            '<div class="row">'+
                                '<div class="col-12 my-2"><h6 class="close" style="font-size: 15px;">x</h6></div>'+
                                '<div data-toggle="modal" data-target="#exampleModal1" class="col-12 ml-4 my-2"><h3 class="title">'+ title +'</h3></div>'+
                                '<div data-toggle="modal" data-target="#exampleModal1" class="col-12 ml-4 my-2"><h6 class="notes">'+ notes +'</h6></div>'+
                             '</div>'+
                        '</div>'+
                    '</div>';
        $('#notesContent').append(string);
        $('#exampleModal1').modal('hide');
        $('#title').val('');
        $('#notes').val('');
    });
});