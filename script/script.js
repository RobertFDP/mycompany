menu.onclick = function myFunction() { // При клике на menu с помощью метода onclick запускается функция под названем myFunction()
  var x = document.getElementById('myTopnav'); // Затем переменой x мы присваиваем элемент в идентификатором myTopnav

  if (x.className === "topnav"){ // Условие в котором значение атрибута className проверяем, данный оператор сравнивает на идентичность (а если == то на равенство) 
    x.className += " responsive"; // Если содержит класс topNav то добавляется класс responsive(пробел обязателен перед классом)
  } else {
    x.className = "topnav";
  }
}