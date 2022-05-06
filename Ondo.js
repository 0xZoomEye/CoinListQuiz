const answers = [
  "400,000,000",
  "Users in the waiting room will be given a random spot in the queue when the sale starts. Users who arrive after the sale starts will be placed behind those in the waiting room",
  "BTC, ETH, USDC, USDT, SOL, ALGO",
  "$0.055 per token, $2,000.00 limit",
  "The user's purchase may be cancelled and the user may be banned from future CoinList sales",
  "CoinList.co",
  "coinlistofficialchannel",
  "The user's account will be terminated and all purchases will be cancelled",
];

async function bootstrap(answers) {
  const radios = document.body.querySelectorAll(".quiz .c-label--inline");
  for (let i = 0; i < radios.length; i++) {
    if (answers.includes(radios[i].textContent)) {
      radios[i].querySelectorAll(".c-input")[0].checked = !0;
    }
  }
  setTimeout(() => {
    document.body.querySelector(".js-submit").click();
  }, 2000);
}

bootstrap(answers);
