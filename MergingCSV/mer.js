		
    function fileValidation() {
    var Input1 = document.getElementById('formFile1');
    var Input2 = document.getElementById('formFile2');

    var filePath1 = Input1.value;
    var filePath2 = Input1.value;

    var allowedExtensions = /(\.csv|\.CSV)$/i;

    if (!allowedExtensions.exec(filePath1) || !allowedExtensions.exec(filePath2)) {
        alert('Pleasae upload CSV file only');
        Input1.value = '';
        Input2.value = '';
        return false;
    }
    else
    {
        alert("File upload succesfully");
    }

}

	function Validate() {
    var Input1 = document.getElementById('formFile1');
    var Input2 = document.getElementById('formFile2');

    var filePath1 = Input1.value;
    var filePath2 = Input1.value;

    if (filePath1 == 0) 
	{
        alert("Please.....Select the CSV file");
		Input1.value = '';
        Input2.value = '';
        return false;
		
    }
	else {alert("Please Click on OK...File Will Be Downloaded");
	}
	

}
function showMessage(){
				alert("File Not Selected");
			}

