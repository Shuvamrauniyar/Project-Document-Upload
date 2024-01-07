function uploadFile() {
    var fileInput = document.getElementById('fileInput');
    var file = fileInput.files[0];
    if (file) {
      // Check if the file size is less than or equal to 5MB (5 * 1024 * 1024 bytes)
      if (file.size <= 5 * 1024 * 1024) {
      
        setTimeout(function () {
          alert('File uploaded successfully!');
        }, 500);
      } else {
        alert('File size exceeds 5MB. Please select a smaller file.');
      }
    } else {
      alert('Please select a file to upload.');
    }
  }

  function clearInput(){
    var fileInput = document.getElementById('fileInput');
    var file = fileInput.files[0];
  //  console.log('clear called');
    if(file){
        fileInput.value = ''; // Clear the file input
    }else {
        alert('No files to Clear');
      }
  }
  