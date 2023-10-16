var a;
function pass()
{
    if(a==1)
    {
        document.getElementsByName('password').type='password';
        document.getElementById('pass-icon').src="pass-hide.png";
        a=0;

    }
    else
    {
        document.getElementsByName('password').type='text';
        document.getElementById('pass-icon').src="pass-show.png";
        a=1;
    }
}