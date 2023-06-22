var nasaImages = $("#nasa-img");
var input = $("#datepicker").datepicker({ dateFormat: 'yy-mm-dd' });

$('form button').click(function(e){
    e.preventDefault();

    var date = input.val();

    if( date === ""){
        alert('Please fill the field');
        return;
    }

    let url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=" + date + "&api_key=fIrKhkY5B36ErcubUDF2hyBDNw6Sjf6f7PgLe5CD";

    $.get(url, function(data){
        let photos = data.photos;

        if(photos.length === 0){
            alert('No photos available for this date');
            return;
        }

        $('#nasa-img img').remove();

        for(let photo of photos){
            nasaImages.append('<img src="' + photo.img_src + '" alt="' + photo.id + '">');
        }
    });
});