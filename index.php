<!DOCTYPE html>
<html lang="en">
<head>
<meta charset = "UTF-8">
<title>GIItch.by </title>

	 <!-- Meta -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="GIITch.by">
    <meta name="author" content="Ustinovich Irina"> 
	<meta name="viewport" content="width=device-width, initial-scale">
	
	
	<link rel="shortcut icon" href="/images/image2.png" type="image/x-icon">
    <link rel="icon" href="/images/image2.png" type="image/x-icon">
    <link rel="stylesheet" href="plugins/bootstrap/css/bootstrap.min.css">   
    <link rel="stylesheet" href="plugins/font-awesome/css/font-awesome.css">
    <link id="theme-style" rel="stylesheet" href="css/styles.css">
	



</head>
<body>
 <?php 
 
  $back = "<p><a href=\"javascript: history.back()\">Вернуться назад</a></p>";
  
  
ini_set('display_errors', 'off'); //прячем ошибки от пользователей
  
$servername = "192.168.0.100:3305";
$database = "site";
$username = "root";
$password = "Qwerty123";
// Создаем соединение
$conn = mysqli_connect($servername, $username, $password, $database);

// Проверяем соединение
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "";

require_once('index_1.html'); 

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];

//Проверка данных формы с помощью PHP

//Сначала создадим функцию для очистки данных от HTML и PHP тегов:

function clean($value = "") {
    $value = trim($value);
    $value = stripslashes($value);
    $value = strip_tags($value);
    $value = htmlspecialchars($value);
    
    return $value;
}
//Здесь, мы использовали функцию trim для удаления пробелов из начала и конца строки.
//Функция stripslashes нужна для удаления экранированных символов ("Ваc зовут O\'reilly?" => "Вас зовут O'reilly?").
//Функция strip_tags нужна для удаления HTML и PHP тегов. Последня функция - htmlspecialchars преобразует специальные символы в HTML-сущности ('&' преобразуется в '&amp;' и т.д.)

//создадим функцию для проверки длинны строки:
function check_length($value = "", $min, $max) {
    $result = (mb_strlen($value) < $min || mb_strlen($value) > $max);
    return !$result;
}
//Нам нужно "прогнать" переменные через эти функции:

$name = clean($name);
$email = clean($email);
$phone = clean($phone);

//Если значения не пустые (проверили с помощью функции empty), то можно продолжать проверку дальше:


if(!empty($name) && !empty($email) && !empty($phone)) 
{
    $email_validate = filter_var($email, FILTER_VALIDATE_EMAIL); 

    if(check_length($name, 2, 25) && check_length($phone, 9, 9) && $email_validate) 
	{
         echo "Спасибо за заявку";
    }

}

//В конце, нам нужно добавить сообщения для уведомления о том, что данные не прошли проверку.

if(!empty($name) && !empty($email) && !empty($phone)) {
    $email_validate = filter_var($email, FILTER_VALIDATE_EMAIL); 

    if(check_length($name, 5, 25) && check_length($phone, 9, 9) && $email_validate) {
        echo "Спасибо за заявку";
		
    } else { // добавили сообщение
        echo "Введенные данные некорректны";
    }
} else { // добавили сообщение
    echo "Заполните пустые поля";
}

//$sql = "INSERT INTO Заявки (name, email, phone) VALUES ('$name','$email', '$phone')";
$name = isset($_POST['name']) ? $_POST['name'] : '';


if (!empty($name)) {
  $sql = "INSERT INTO Заявки (name, email, phone)VALUES ('$name', '$email', '$phone')";


  mysqli_query($conn, $sql);
//$m=1; 
header('Location: https://glitch.ustinovich.online/');
 echo "<p>Ваша заявка принята. Ожидайте звонок от специалиста</p>";
}
else 
{
echo "Ваша заявка не отправлена";
}


//mysqli_close($conn);

//if(isset($m)) 
//{
//echo "<p>Ожидайте звонок от специалиста</p>"; }


//setcookie ('name', 5, time ()+86400*30*12);

//if (isset($_COOKIE['name'])) 
//{
//	echo 'Куки установлена';
//}else{
//	echo 'Куки НЕ установлены';
//}
//echo '<br>'.$_COOKIE['name'];

//setcookie('name', '');
//setcookie('name', 5, time()-86400);

//просмотр страницы
$file = file("count.txt");
$count = implode("", $file);
$count++;
$myfile = fopen("count.txt","w");
fputs($myfile,$count);
fclose($myfile);


/*
$to = 'irina.levchuk96@gmail.com';
//тема письма
$subject = 'Новая зявка на звонок'; 
//сообщение, которое будет отправлено. Каждая строка должна быть разделена сообщением \n
$message = "Добрый день!\n\n У Вас новая заявка на звонок \n от пользователя сайта."; 
//заголовки, которые мы хотим передать.  они разделены символом \r\n \r\n
$headers = "From: webmaster@example.com\r\nReply-To: webmaster@example.com";
//отправить письмо the email
$mail_sent = @mail( $to, $subject, $message, $headers );
//если сообщение отправлено успешно "Mail sent". Otherwise print "Mail failed" 
echo $mail_sent ? "Заявка отправлена" : "Отправить заявку не удалось";
*/


/*if(isset($_POST['name'])){
$to = "irina.levchuk96@gmail.com";; // Здесь нужно написать e-mail, куда будут приходить письма
$from = $_POST['email']; // this is the sender's Email address
$first_name = $_POST['name'];
$subject = "Форма отправки сообщений с сайта";
$subject2 = "Copy of your form submission";
$message = $first_name . " оставил сообщение:" . "\n\n" . $_POST['name'];
$message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['name'];

$headers = "From:" . $from;
$headers2 = "From:" . $to;

mail($to,$subject,$message,$headers);

echo $mail_sent ? "Заявка отправлена,  мы скоро свяжемся с Вами" : "Отправить заявку не удалось";
echo "<br /><br /><a href='https://glitch.ustinovich.online/index.php'>Обновить сайт.</a>";

}*/


?>
<!--<div class='content'>
<h1> Счетчик просмотров страницы </h1>
<p class='views'><span>Просмотров: <?=$count?></span> </p>// вывод счетчика-->

</body>
</html>