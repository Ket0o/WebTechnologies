function task1()
{
    var count = document.form1.countElement.value;

    var text = document.form1.arrayInput.value;

    var array = text.split(", ");
    document.getElementById("answer").textContent = "";

    for (var i = 0; i < array.length; i++)
    {
        if (isNaN(parseInt(array[i])))
        {
            document.getElementById("answer").textContent =
            "Ошибка. Введите корректиные данные";
            return;
        }

        array[i] = parseInt(array[i]);
    }

    var Result = 0;

    for(var i = 0; i < array.length; i++)
    {
        Result += 1/array[i];
    }

    Result = 1/Result;

    document.getElementById("answer").textContent =
    "Общее сопротивление цепи: " + Result;
}