const btnE1=document.getElementById("btn");
const jokeE1=document.getElementById("joke");

const apikey="CW4+8sfIj+uRPoxH9u+mUg==hkI1IVLedspZAkA9";

const option=
{
    method:"GET",
    headers: {
        "X-Api-Key":apikey,
    },
};

const apiurl="https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getjoke()
{
   try
   {
    jokeE1.innerHTML="Loading..";
    btnE1.disabled=true;
    btnE1.innerText="Wait.."
    const response= await fetch(apiurl,option);
    const data= await response.json();
    btnE1.disabled=false;
    btnE1.innerText="Tell me a Joke";

    jokeE1.innerText=data[0].joke;
   }
   catch(error)
   {
    jokeE1.innerText="There is an problem in fetching the Joke,Please try later"
   }
}


btnE1.addEventListener("click",getjoke);