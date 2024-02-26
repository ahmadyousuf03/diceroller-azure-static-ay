function Rollnumber() {
    d1 = document.getElementById("dice").value;

    d1 = Number(d1);

    document.getElementById('dice').innerHTML = '1';

    async function fetchrolldice() {
        const url = "https://diceroller-azure-nodejs-ay.azurewebsites.net/rolldice";
        document.getElementById('dice').innerHTML = "10";
        console.log('10')
        const response = await fetch(url);
        const responseText = await response.text();
        console.log(responseText);
        document.getElementById("dice").innerHTML = responseText;

    }

    Rollnumber();

}