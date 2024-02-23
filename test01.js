var startValue = '0.00000001';
var stopPercentage = 0.001;
var maxWait = 0x0;
var stopped = false;
var stopBefore = 0x2;
lostcount = 0x0;
incrementcount = 0x1;
var pmaxbet = prompt("Por favor introduzca el MAXBET que quiere soportar, en el mismo formato:", '0.00000001');
var hilo;
var hilo = prompt("Si quieres jugar HI introduce 0. Si Quieres jugar LO introduce 1", '0');
globalbet = Number(pmaxbet).toFixed(0x8);
var fontsize = "14pt;";
var totalwager = 0x0;
var netwin = 0x0;
var wingoal = 0x88b8;
var wagergoal = 0xaae60;
var startTime;
var endTime;
var jackpotcount = 0x0;
var rollnumber = '';
var contLoseCnt = 0x0;
var wincount = 0x0;
var contWinCnt = 0x0;
var totalwin = 0x0;
var totalloss = 0x0;
var maxloseodd = '';
var maxbetcount = '';
var maxbetodd = '';
var sameoddcount = 0x0;
var currBetSequence = 0x0;
var nextBetSequence = 0x0;
var num1;
var num2;
var num3;
var num4;
var num5;
num1 = Math.random() * 0.44999999999999996 + 1.25;
let odd1 = num1.toFixed(0x2);
num2 = Math.random() * 0.9800000000000004 + 13.01;
let odd2 = num2.toFixed(0x2);
num3 = Math.random() * 0.9800000000000004 + 10.01;
let odd3 = num3.toFixed(0x2);
num4 = Math.random() * 1.9799999999999986 + 15.01;
let odd4 = num4.toFixed(0x2);
num5 = Math.random() * 0.9800000000000004 + 12.01;
let odd5 = num5.toFixed(0x2);
var maxbet = 1e-8.toFixed(0x8);
var balance = +$("#balance").text().replace(" BTC", '') + +$('#bonus_account_balance').text().replace(" BTC", '');
var openBalance = +$("#balance").text().replace(" BTC", '') + +$('#bonus_account_balance').text().replace(" BTC", '');
var preBalance = +$("#balance").text().replace(" BTC", '') + +$("#bonus_account_balance").text().replace(" BTC", '');
var postBalance = +$("#balance").text().replace(" BTC", '') + +$("#bonus_account_balance").text().replace(" BTC", '');
var l = $("#double_your_btc_bet_lo_button");
var h = $('#double_your_btc_bet_hi_button');
var betodds = [[odd1, 1e-8, 2e-8, 3e-8, 5e-8, 8e-8, 1.2e-7, 1.8e-7, 2.8e-7, 4.3e-7, 6.6e-7, 0.00000102, 0.00000157, 0.00000242, 0.00000373, 0.00000574, 0.00000884, 0.00001361, 0.00002096, 0.00003228, 0.00004971, 0.00007655, 0.00011789, 0.00018155, 0.00027958, 0.00043055, 0.00066308, 0.00102114, 0.00157256, 0.00242174, 0.00372948, 0.00574341], [odd2, 3e-8, 4e-8, 5e-8, 6e-8, 7e-8, 9e-8, 1.2e-7, 1.5e-7, 1.8e-7, 2.3e-7, 2.9e-7, 3.6e-7, 4.6e-7, 5.7e-7, 7.2e-7, 9.1e-7, 0.00000114, 0.00000143, 0.00000179, 0.00000225, 0.00000282, 0.00000354, 0.00000444, 0.00000557, 0.00000699, 0.00000877, 0.00001101, 0.00001382, 0.00001734, 0.00002177, 0.00002732, 0.00003428, 0.00004302, 0.000054, 0.00006777, 0.00008505, 0.00010673, 0.00013395, 0.00016811, 0.00021097, 0.00026477, 0.00033229, 0.00041702, 0.00052336, 0.00065682, 0.00082431, 0.00103451, 0.0012983, 0.00162937, 0.00204486, 0.0025663, 0.00322071], [odd3, 3e-8, 4e-8, 5e-8, 6e-8, 7e-8, 9e-8, 1e-7, 1.3e-7, 1.5e-7, 1.8e-7, 2.2e-7, 2.6e-7, 3.1e-7, 3.8e-7, 4.5e-7, 5.5e-7, 6.6e-7, 7.9e-7, 9.5e-7, 0.00000114, 0.00000137, 0.00000165, 0.00000198, 0.00000238, 0.00000286, 0.00000344, 0.00000414, 0.00000497, 0.00000598, 0.00000718, 0.00000864, 0.00001038, 0.00001248, 0.000015, 0.00001803, 0.00002167, 0.00002604, 0.00003131, 0.00003763, 0.00004523, 0.00005437, 0.00006535, 0.00007855, 0.00009442, 0.00011349, 0.00013641, 0.00016397, 0.00019709, 0.00023691, 0.00028476, 0.00034228, 0.00041142, 0.00049453, 0.00059443, 0.0007145, 0.00085883, 0.00103231, 0.00124084, 0.00149149, 0.00179277, 0.00215491, 0.0025902], [odd4, 4e-8, 5e-8, 6e-8, 7e-8, 8e-8, 1e-7, 1.1e-7, 1.3e-7, 1.5e-7, 1.8e-7, 2.1e-7, 2.4e-7, 2.8e-7, 3.3e-7, 3.8e-7, 4.5e-7, 5.2e-7, 6.1e-7, 7.1e-7, 8.3e-7, 9.7e-7, 0.00000114, 0.00000133, 0.00000155, 0.00000181, 0.00000211, 0.00000247, 0.00000288, 0.00000336, 0.00000393, 0.00000459, 0.00000535, 0.00000625, 0.0000073, 0.00000852, 0.00000995, 0.00001161, 0.00001356, 0.00001583, 0.00001848, 0.00002157, 0.00002519, 0.00002941, 0.00003433, 0.00004008, 0.00004679, 0.00005463, 0.00006378, 0.00007447, 0.00008694, 0.0001015, 0.00011851, 0.00013836, 0.00016153, 0.00018859, 0.00022017, 0.00025705, 0.00030011, 0.00035038, 0.00040907, 0.00047759, 0.00055758, 0.00065098, 0.00076001, 0.00088732, 0.00103594, 0.00120946, 0.00141205, 0.00164856, 0.0019247, 0.00224709], [odd5, 2e-8, 3e-8, 4e-8, 5e-8, 6e-8, 8e-8, 1.1e-7, 1.5e-7, 2e-7, 2.7e-7, 3.6e-7, 4.8e-7, 6.4e-7, 8.6e-7, 0.00000114, 0.00000152, 0.00000204, 0.00000272, 0.00000363, 0.00000484, 0.00000647, 0.00000863, 0.00001152, 0.00001539, 0.00002054, 0.00002742, 0.00003661, 0.00004887, 0.00006524, 0.00008709, 0.00011627, 0.00015522, 0.00020722, 0.00027664, 0.00036931, 0.00049303, 0.0006582, 0.00087869, 0.00117305, 0.00156603, 0.00209065, 0.00279101, 0.003726]];
function getHiLow() {
  return true;
}
function generateRandomInt(_0x415b47, _0x484a17) {
  return Math.random() * (_0x484a17 - _0x415b47) + _0x415b47;
}
function nextBet() {
  var _0x44ad40 = $("#double_your_btc_stake").val();
  var _0xab064f = 0x0;
  var _0xab064f = (_0x44ad40 * 0x5).toFixed(0x8);
  incrementcount = incrementcount + 0x1;
  return betodds[currBetSequence - 0x1].length - 0x1 < incrementcount ? (console.log("Betting Limit Reached. Game will stop now."), false) : ($("#double_your_btc_stake").val(betodds[currBetSequence - 0x1][incrementcount].toFixed(0x8)), maxbet < betodds[currBetSequence - 0x1][incrementcount].toFixed(0x8) && (maxbet = betodds[currBetSequence - 0x1][incrementcount].toFixed(0x8), maxbetodd = betodds[currBetSequence - 0x1][0x0], maxbetcount = incrementcount), true);
}
function getRandomWait() {
  var _0x34e95a = Math.floor(Math.random() * 0x0) + 0x0;
  return _0x34e95a;
}
function startGame() {
  startTime = new Date();
  console.log("Game Started for Satoshi Target : 35000 or Wager Target : 700000");
  reset();
  if (hilo == 0x0) {
    h.trigger('click');
  } else {
    l.trigger('click');
  }
}
function stopGame() {
  console.log("Game will stop soon! Let me finish.");
  stopped = true;
}
function reset() {
  lostcount = 0x0;
  incrementcount = 0x1;
  postBalance = +$("#balance").text().replace(" BTC", '') + +$('#bonus_account_balance').text().replace(" BTC", '');
  if (postBalance >= preBalance || sameoddcount >= 0x3) {
    nextBetSequence = Math.ceil(Math.ceil(Math.random() * 0xa) / 0x2);
    while (nextBetSequence == currBetSequence) {
      nextBetSequence = Math.ceil(Math.ceil(Math.random() * 0xa) / 0x2);
    }
    currBetSequence = nextBetSequence;
    console.log("Changing Odds to " + betodds[currBetSequence - 0x1][0x0]);
    sameoddcount = 0x0;
    preBalance = +$("#balance").text().replace(" BTC", '') + +$("#bonus_account_balance").text().replace(" BTC", '');
  } else {
    sameoddcount = sameoddcount + 0x1;
    console.log("%cContinue with same Odds : " + betodds[currBetSequence - 0x1][0x0], "color: red; font-weight: bold;");
  }
  $("#double_your_btc_payout_multiplier").val(betodds[currBetSequence - 0x1][0x0]);
  $('#double_your_btc_stake').val(betodds[currBetSequence - 0x1][incrementcount].toFixed(0x8));
  true;
}
function deexponentize(_0x559ddb) {
  return _0x559ddb * 0x989680;
}
function iHaveEnoughMoni() {
  var _0x1b1923 = parseFloat($("#balance").text()) * 0x989680;
  var _0x229531 = $("#double_your_btc_stake").val() * 0x989680;
  return _0x1b1923 * 0x2 / 0x64 * (_0x229531 * 0x2) > 0.00001;
}
function stopBeforeRedirect() {
  var _0x16f5b9 = parseInt($("title").text());
  if (_0x16f5b9 < 0x2) {
    console.log("Approaching redirect! Stop the game so we don't get redirected while loosing.");
    stopGame();
    return true;
  }
  return false;
}
$("#double_your_btc_bet_lose").unbind();
$("#double_your_btc_bet_win").unbind();
$("#double_your_btc_bet_lose").bind('DOMSubtreeModified', function (_0x1a94ff) {
  if ($(_0x1a94ff.currentTarget).is(":contains(\"lose\")")) {
    wincount = 0x0;
    lostcount = lostcount + 0x1;
    totalloss = totalloss + 0x1;
    if (lostcount > contLoseCnt) {
      contLoseCnt = lostcount;
      maxloseodd = betodds[currBetSequence - 0x1][0x0];
    }
    totalwager = +totalwager + +$("#double_your_btc_stake").val();
    rollnumber = $("#multiplier_first_digit").text() + $("#multiplier_second_digit").text() + $("#multiplier_third_digit").text() + $('#multiplier_fourth_digit').text() + $('#multiplier_fifth_digit').text();
    if (rollnumber == "08888") {
      jackpotcount = jackpotcount + 0x1;
    }
    balance = +$("#balance").text().replace(" BTC", '') + +$('#bonus_account_balance').text().replace(" BTC", '');
    netwin = +balance - +openBalance;
    endTime = new Date();
    var _0x5b0b83 = endTime - startTime;
    _0x5b0b83 /= 0x3e8;
    var _0x1751d2 = Math.round(_0x5b0b83 % 0x3c);
    _0x5b0b83 = Math.floor(_0x5b0b83 / 0x3c);
    var _0x3b90a6 = Math.round(_0x5b0b83 % 0x3c);
    console.log("%cTotal Runtime: " + _0x3b90a6 + " mns, " + _0x1751d2 + " secs, %cWin Bets:" + totalwin + ", %cLose Bets:" + totalloss, "color: black; font-weight: bold; font-size: 14pt;", "color: black; font-weight: bold; font-size: 14pt;", "color: black; font-weight: bold; font-size: 14pt;");
    if (netwin > 0x0) {
      console.log("%cTotal Waged: " + (totalwager * 0x5f5e100).toFixed(0x0) + '/' + 0xaae60 + ", Net Win: " + (netwin * 0x5f5e100).toFixed(0x0) + '/' + 0x88b8, "color: green; font-weight: bold; font-size: 14pt;");
    } else {
      console.log("%cTotal Waged: " + (totalwager * 0x5f5e100).toFixed(0x0) + '/' + 0xaae60 + ", %cNet Win: " + (netwin * 0x5f5e100).toFixed(0x0) + '/' + 0x88b8, "color: green; font-weight: bold; font-size: 14pt;", "color: red; font-weight: bold; font-size: 14pt;");
    }
    console.log("%cMax Loss in a row : " + contLoseCnt + " (Odd:" + maxloseodd + "), Max Win in a row : " + contWinCnt + ", Max Bet : " + maxbet + " (Odd:" + maxbetodd + ',' + maxbetcount + ')', "color: blue; font-size: 14pt;");
    console.log("You LOST! Changing your bet and betting again.");
    betContinue = nextBet();
    if (betContinue) {
      setTimeout(function () {
        if (hilo == 0x0) {
          h.trigger('click');
        } else {
          l.trigger("click");
        }
      }, getRandomWait());
    }
  }
});
$("#double_your_btc_bet_win").bind("DOMSubtreeModified", function (_0x304d0b) {
  if ($(_0x304d0b.currentTarget).is(":contains(\"win\")")) {
    wincount = wincount + 0x1;
    totalwin = totalwin + 0x1;
    if (wincount > contWinCnt) {
      contWinCnt = wincount;
    }
    console.clear();
    rollnumber = $('#multiplier_first_digit').text() + $("#multiplier_second_digit").text() + $("#multiplier_third_digit").text() + $("#multiplier_fourth_digit").text() + $('#multiplier_fifth_digit').text();
    if (rollnumber == "08888") {
      jackpotcount = jackpotcount + 0x1;
    }
    totalwager = +totalwager + +$("#double_your_btc_stake").val();
    balance = +$("#balance").text().replace(" BTC", '') + +$("#bonus_account_balance").text().replace(" BTC", '');
    netwin = +balance - +openBalance;
    endTime = new Date();
    var _0x4de7e2 = endTime - startTime;
    _0x4de7e2 /= 0x3e8;
    var _0x43d243 = Math.round(_0x4de7e2 % 0x3c);
    _0x4de7e2 = Math.floor(_0x4de7e2 / 0x3c);
    var _0x516081 = Math.round(_0x4de7e2 % 0x3c);
    console.log("%cTotal Runtime: " + _0x516081 + " mns, " + _0x43d243 + " secs, %cWin Bets:" + totalwin + ", %cLose Bets:" + totalloss, "color: black; font-weight: bold; font-size: 14pt;", "color: black; font-weight: bold; font-size: 14pt;", "color: black; font-weight: bold; font-size: 14pt;");
    console.log("%cTotal Waged: " + (totalwager * 0x5f5e100).toFixed(0x0) + '/' + 0xaae60 + ", Net Win: " + (netwin * 0x5f5e100).toFixed(0x0) + '/' + 0x88b8, "color: green; font-weight: bold; font-size: 14pt;");
    console.log("%cMax Loss in a row : " + contLoseCnt + " (Odd:" + maxloseodd + "), Max Win in a row : " + contWinCnt + ", Max Bet : " + maxbet + " (Odd:" + maxbetodd + ',' + maxbetcount + ')', "color: blue; font-size: 14pt;");
    console.log("Jackpot: " + jackpotcount);
    if (netwin * 0x5f5e100 >= 0x88b8 || (totalwager * 0x5f5e100).toFixed(0x0) >= 0xaae60) {
      console.log("Win/Wager Goal Achieved. Stopping Game.");
      stopGame();
    }
    if (stopBeforeRedirect()) {
      return;
    }
    if (maxbet >= globalbet) {
      stopGame();
      console.log("Maxbet Goal Achieved. Stopping Game.");
    }
    if (iHaveEnoughMoni()) {
      console.log("You WON!");
      reset();
      if (stopped) {
        stopped = false;
        return false;
      }
    } else {
      console.log("You WON!");
    }
    setTimeout(function () {
      if (hilo == 0x0) {
        h.trigger('click');
      } else {
        l.trigger("click");
      }
    }, getRandomWait());
  }
});
startGame();
