function task4()
{
    var name = prompt('Как вас зовут?', "Имя");
    var patronymic = prompt('Ваше отчество?', "Отчество");
    var page_address = document.location.href;

    alert('Привет, ' + name + ' ' + patronymic + ', добро пожаловать на ' + page_address + ', мою замечательную страницу!');
}