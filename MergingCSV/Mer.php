<?php


        

if(file_exists("mergefile.csv")){
    unlink("file.csv");
}
$file1=fopen($_FILES['one']['tmp_name'],"r");
$file2=fopen($_FILES['two']['tmp_name'],"r");

	header("Pragma: public");
	header("Expires: 0");
	header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
	header("Cache-Control: private",false);
	header("Content-Type: application/octet-stream");

	header("Content-Transfer-Encoding: binary"); 
header('Content-Type: application/csv');
header('Content-Disposition: attachment; filename="mergefile.csv";');

$file3 = fopen('php://output', 'w+');
while(!feof($file1)){
    fputs($file3,fgets($file1));

}
$first=true;
while(!feof($file2)){
   # if($first){
    #    $first=false;
     #   fgets($file2);
      #  continue;
	      fputs($file3,fgets($file2));

    }



fclose($file1);
fclose($file2);
fclose($file3);

        
?>
