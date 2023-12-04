const url = "http://localhost:7000";
const kyoupuro = document.getElementById("kyoupuro");
const list = document.getElementById("message-list");
const send = document.getElementById("send-message");
const input = document.getElementById("input-message");
const dmbutton = document.getElementById("dmbutton");
const home = document.getElementById("home");
let currentclub;
let user="nararaki";
let dmdata = {
  user: user,
  club: currentclub,
};
let modechange = false;
home.innerText = "home!";
async function main(){
let response=await fetch(url,{
  method:"POST",
  body: JSON.stringify({ user }),
  headers: {
    "Content-Type": "application/json",
  },
})
let isjudge = await response.json();
console.log(isjudge.user)
console.log(isjudge)
if(!isjudge.judge){
  alert("error");
  window.location.href = "http://localhost:7000/error.html";
}
}
main();
dmbutton.addEventListener("click", () => {
  if(!modechange){
  modechange = true;
  home.innerText="DM Mode!";
  }else{
    modechange = false;
    home.innerText = "home!";
  }
});
  dmbutton.innerText = "DM";
　kyoupuro.addEventListener("click", async() => {
    if(!modechange){
    funcinbutton(kyoupuro.value);
    }else{
    currentclub="kyoupuro";
    await funcdmbutton(dmdata);
    }
  });
  send.addEventListener("click", async () => {
    if(!modechange){
    if (input.value != null) {
      let data = {
        currentclub: currentclub,
        input: input.value,
      };
      await sendmessage(data);
      await funcinbutton(currentclub);
      input.value = "";
    }
  }else{
      await postdm(dmdata);
      await funcdmbutton(dmdata);
      input.value = '';
  }
  });
//ここから普通のsnsの関数群
//データ更新
async function funcinbutton(clubname) {
  //let club = clubname;
  currentclub = clubname;
  await showdata(currentclub);
}
//dbに保存したデータを取り出す
async function getdata(senddata) {
  await fetch(`${url}/club`, {
    method: "POST",
    body: JSON.stringify({ senddata }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  try {
    let resultget = await fetch(`${url}/` + `${senddata}`, (error) => {
      if (error) throw error;
    });
    return resultget.json();
  } catch (error) {
    throw error;
  }
}
//メッセージを表示
async function showdata(senddata) {
  let messages = await getdata(senddata);
  addtext(messages);
}
//メッセージ追加
function addtext(messages) {
  console.log(messages);
  if (list === null) {
    console.error("list element is null");
    return;
  }
  while (list.firstChild !== null) {
    list.removeChild(list.firstChild);
  }
  for (let i = 0; i < messages.length; i++) {
    console.log("a");
    let div = document.createElement("div");
    let text = document.createTextNode(messages[i].message);
    div.append(text);
    document.body.append(div);
    list.append(div);
  }
}
//メッセージを送る
async function sendmessage(senddata) {
  await fetch(`${url}` + "/message", {
    method: "POST",
    body: JSON.stringify({ senddata }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
//ここまで
//ここからDM
async function getdm(dmdata) {
  let result = await fetch(url + `/${dmdata.user}`+"/dm", {
    method: "POST",
    body: JSON.stringify({dmdata}),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(result);
  return result.json();
}
async function funcdmbutton(dmdata) { 
  dmdata.club = currentclub; 
  messages = await getdm(dmdata);
  console.log(messages)
  addtext(messages);
}
async function postdm(dmdata){
let postdmdata ={
  user:dmdata.user,
  club:currentclub,
  message:input.value
}
let result = await fetch(url+`/${postdmdata.user}/${postdmdata.club}/senddm`,{
  method:"POST",
  body: JSON.stringify({postdmdata}),
  headers: {
    "Content-Type": "application/json",
  },
})
} 