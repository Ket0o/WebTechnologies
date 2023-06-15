function EvenOrNotEvenPrint()
{
    var year = new Date().getFullYear();
    var month = new Date().getMonth();
    var today = new Date(year, month, 0).getTime();
    var now = new Date().getTime();
    var week = Math.ceil((now - today) / (1000 * 60 * 60 * 24 * 7));
    if (week % 2)
    {
       document.write("Неделя нечетная");
    }
    else
    {
        document.write("Неделя четная");
    }
}

function EvenOrNotEven()
{
    var flag;
    var year = new Date().getFullYear();
    var month = new Date().getMonth();
    var today = new Date(year, month, 0).getTime();
    var now = new Date().getTime();
    var week = Math.ceil((now - today) / (1000 * 60 * 60 * 24 * 7));
    if (week % 2)
    {
        flag = false;
    }
    else
    {
        flag = true;
    }

    return flag;
}

function TimetableEven(Index)
{
    even = [["ТСиСА 13:15-14:50", "Веб-технологии 16:45-18:20", "Веб-технологии 18:30-20:05", "Веб-технологии 20:15-21:50"],
        ["Структуры данных 13:15-14:50", "ЭДпФКиС 15:00-16:35", "Структуры данных 16:45-18:20", "Структуры данных 18:30-20:05"],
        ["ТВиМС 13:15-14:50", "ООП 16:45-18:20"],
        ["ТВиМС 13:15-14:50", "ППННИРР 15:00-16:35", "ОПД 20:15-21:50"],
        ["Иностранный язык 13:15-14:50", "ЭДпФКиС 15:00-16:35"],
        []]

    var array = 0;
    array = even[Index];
    array.forEach((item, i, array) => { document.write(array[i] + "<br>"); })
}

function TimetableNotEven(Index)
{
    notEven = [["ТСиСА 08:50-10:25", "ТСиСА 10:40-12:15"],
        ["Education design 13:15-14:50", "ЭДпФКиС 15:00-16:35"],
        [],
        ["ТВиМС 15:00-16:35", "ОПД 20:15-21:50"],
        ["Иностранный язык 13:15-14:50", "ЭДпФКиС 15:00-16:35", "ООП 16:45-18:20", "ООП 18:30-20:05"],
        []]

    var array = 0;
    array = notEven[Index];
    array.forEach((item, i, array) => { document.write(array[i] + "<br>"); })

}

function Timetable(day)
{
    if (EvenOrNotEven())
    {
        TimetableEven(day);
    }
    else
    {
        TimetableNotEven(day);
    }
}

