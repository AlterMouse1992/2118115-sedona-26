<?php
$to = "vladimirmk85@gmail.com";//Почтовый ящик на который будет отправленно сообщение
  $subject = "Тема сообщения";//Тема сообщения
  $message = "Message, сообщение!";//Сообщение, письмо
  $headers = "Content-type: text/plain; charset=utf-8 \r\n";//Шапка сообщения, содержит определение типа письма, от кого, и кому отправить ответ на письмо
// Проверяем или метод запроса POST
if($_SERVER["REQUEST_METHOD"] == "POST"){
		// Поочередно проверяем или были переданные параметры формы, или они не пустые
		if(isset($_POST["your-name"]){
			//Если параметр есть, присваеваем ему переданое значение
			$name 		=trim(strip_tags($_POST["your-name"]));
		}
		if(isset($_POST["tel-840"]))
		{
			$number 	= trim(strip_tags($_POST["tel-840"]));
		}
		if (isset( $_POST["text-801"])) {
			$question 	= trim(strip_tags($text-801));
		}
			// Формируем письмо
			$message  = "<html>";
				$message  .= "<body>";
				$message  .= "Телефон: ".$number;
				$message  .= "<br />";
				$message  .= "Имя: ".$name;
				$message  .= "<br />";
				$message  .= "Вопрос: ".$question;
				$message  .= "</body>";
			$message  .= "</html>";
			// Окончание формирования тела письма
			// Посылаем письмо
			if (mail($to, $subject, $message, $headers)){
 echo "Сообщение успешно отправлено";
 } else {
 echo "При отправке сообщения возникли ошибки";
 }
ini_set('display_errors','On');
error_reporting('E_ALL');
?>