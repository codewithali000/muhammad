function getnumber(num)
{
    var result = document.getElementById("inp");
    result.value += num
}
function clearall()
{
    var result = document.getElementById("inp")
    result.value = "";
}
function finalresult()
{
    var result = document.getElementById("inp")
    result.value = eval(result.value);
}