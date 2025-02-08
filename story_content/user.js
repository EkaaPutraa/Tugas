function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6B6AtlpEsJ0":
        Script1();
        break;
      case "5Xty6bqjwws":
        Script2();
        break;
      case "5ha4QkCNAe6":
        Script3();
        break;
      case "6eDaNcj2tD6":
        Script4();
        break;
      case "6C753cyhK4w":
        Script5();
        break;
      case "5tpqTiHxcl0":
        Script6();
        break;
      case "5iFEIdE5O1l":
        Script7();
        break;
      case "6bXjzC8MorP":
        Script8();
        break;
      case "68Wddr9Ys9s":
        Script9();
        break;
      case "5p2NHBUjBKZ":
        Script10();
        break;
      case "67X2Om9Ka1V":
        Script11();
        break;
      case "6Pdgg6A3gng":
        Script12();
        break;
      case "6LsLQzU5gFR":
        Script13();
        break;
      case "5XWEDSSUrnn":
        Script14();
        break;
      case "5mriMs4CetU":
        Script15();
        break;
      case "6kh9S5tNtEM":
        Script16();
        break;
      case "6YnYgrad3hS":
        Script17();
        break;
      case "69nxJTcO0S0":
        Script18();
        break;
      case "6nZwXeJWeYf":
        Script19();
        break;
      case "6EilmpGnEWq":
        Script20();
        break;
      case "5wjBOPOiyEq":
        Script21();
        break;
      case "5yDnFFZgEFj":
        Script22();
        break;
      case "5oJ8tR2XF9l":
        Script23();
        break;
      case "62CnYvUk9w7":
        Script24();
        break;
      case "5ud1Ns4o09b":
        Script25();
        break;
      case "5WzYwlaOlG7":
        Script26();
        break;
      case "6DpWlSZQBHF":
        Script27();
        break;
      case "6ZuDtojcNm2":
        Script28();
        break;
      case "6f2STDFvS1J":
        Script29();
        break;
      case "5bvqQFfU9fj":
        Script30();
        break;
      case "6WeTBWPXfYt":
        Script31();
        break;
      case "6ov0Hch5RQX":
        Script32();
        break;
      case "61L9To3R2I3":
        Script33();
        break;
      case "6UluUZ0bYUQ":
        Script34();
        break;
      case "6PJCTUHQm2N":
        Script35();
        break;
      case "5kqUrGZ47aB":
        Script36();
        break;
      case "6204DizUjAP":
        Script37();
        break;
      case "5xwvH0b9Ks3":
        Script38();
        break;
      case "6ezSCojXr9T":
        Script39();
        break;
      case "6keY1P9fb9z":
        Script40();
        break;
      case "5xTrIrJAWW5":
        Script41();
        break;
      case "5ej0oR005RL":
        Script42();
        break;
      case "5xEBiGxKD5V":
        Script43();
        break;
      case "67BKyn8rq9o":
        Script44();
        break;
      case "5ihgDWYCqzq":
        Script45();
        break;
      case "6gkW4zZFeys":
        Script46();
        break;
      case "5pvPnXx3EFP":
        Script47();
        break;
      case "6l5YgBzcLZ6":
        Script48();
        break;
      case "6UHr2FyQLho":
        Script49();
        break;
      case "6AWE9zJGNiL":
        Script50();
        break;
      case "6l5zOxh4i2S":
        Script51();
        break;
      case "5fi6VSdR2Gx":
        Script52();
        break;
      case "5cSAmMF0aTf":
        Script53();
        break;
      case "6doAARtxyGu":
        Script54();
        break;
      case "5kjb6gqaWDK":
        Script55();
        break;
      case "6KGsU9WJcdX":
        Script56();
        break;
      case "6fXmIWOo40t":
        Script57();
        break;
      case "6ILctfL6f5Z":
        Script58();
        break;
      case "5bMgVZMTxeR":
        Script59();
        break;
      case "6LDZDeqzupi":
        Script60();
        break;
      case "65Qgx3ctbo0":
        Script61();
        break;
      case "6LBarKvYt4r":
        Script62();
        break;
      case "6kdFg7fcW8i":
        Script63();
        break;
      case "6MjE67pZasZ":
        Script64();
        break;
      case "6RRph4bsbUa":
        Script65();
        break;
      case "5X0ZpXLkBhw":
        Script66();
        break;
      case "5bZrpwa9Nq0":
        Script67();
        break;
  }
}

function Script1()
{
  //load the scripts dynamically into the head of the document

function add_line() {
    var line = document.createElement("audio");
    var head=document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src="";
    line.id="bgSong" ;
	line.autoplay = true;
	line.loop = true;
    head.appendChild(line);
}

//but we only want to add these once!
if(document.getElementById('bgSong')==null){
	add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0.5;
}

}

function Script2()
{
  if (!document.getElementById('bgSong')) {  // Cek apakah elemen sudah ada
    var audio = document.createElement('audio');
    audio.id = 'bgSong';
    audio.src = "story_content/external_files/1.mp3";
    audio.preload = "auto";
    document.body.appendChild(audio);
}
}

function Script3()
{
  var audio = document.getElementById('bgSong');
audio.src="story_content/external_files/1.mp3";
audio.load();
audio.play();

}

function Script4()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();  // Melanjutkan dari posisi terakhir
}

}

function Script5()
{
  var audio = document.getElementById('bgSong');
audio.pause(); // Pause audio tanpa reset posisi
}

function Script6()
{
  var audio = document.getElementById('bgSong');
audio.pause(); // Pause audio tanpa reset posisi
}

function Script7()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();  // Melanjutkan dari posisi terakhir
}

}

function Script8()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();  // Melanjutkan dari posisi terakhir
}

}

function Script9()
{
  var audio = document.getElementById('bgSong');
audio.pause(); // Pause audio tanpa reset posisi
}

function Script10()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();  // Melanjutkan dari posisi terakhir
}

}

function Script11()
{
  var audio = document.getElementById('bgSong');
audio.pause(); // Pause audio tanpa reset posisi
}

function Script12()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();  // Melanjutkan dari posisi terakhir
}

}

function Script13()
{
  var audio = document.getElementById('bgSong');
audio.pause(); // Pause audio tanpa reset posisi
}

function Script14()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();  // Melanjutkan dari posisi terakhir
}

}

function Script15()
{
  var audio = document.getElementById('bgSong');
audio.pause(); // Pause audio tanpa reset posisi
}

function Script16()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();  // Melanjutkan dari posisi terakhir
}

}

function Script17()
{
  var audio = document.getElementById('bgSong');
audio.pause(); // Pause audio tanpa reset posisi
}

function Script18()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();  // Melanjutkan dari posisi terakhir
}

}

function Script19()
{
  var audio = document.getElementById('bgSong');
audio.pause(); // Pause audio tanpa reset posisi
}

function Script20()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();  // Melanjutkan dari posisi terakhir
}

}

function Script21()
{
  var audio = document.getElementById('bgSong');
audio.pause(); // Pause audio tanpa reset posisi
}

function Script22()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();  // Melanjutkan dari posisi terakhir
}

}

function Script23()
{
  var audio = document.getElementById('bgSong');
audio.pause(); // Pause audio tanpa reset posisi
}

function Script24()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();  // Melanjutkan dari posisi terakhir
}

}

function Script25()
{
  var audio = document.getElementById('bgSong');
audio.pause(); // Pause audio tanpa reset posisi
}

function Script26()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();  // Melanjutkan dari posisi terakhir
}

}

function Script27()
{
  var audio = document.getElementById('bgSong');
audio.pause(); // Pause audio tanpa reset posisi
}

function Script28()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();  // Melanjutkan dari posisi terakhir
}

}

function Script29()
{
  var audio = document.getElementById('bgSong');
audio.pause(); // Pause audio tanpa reset posisi
}

function Script30()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();  // Melanjutkan dari posisi terakhir
}

}

function Script31()
{
  var audio = document.getElementById('bgSong');
audio.pause(); // Pause audio tanpa reset posisi
}

function Script32()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();  // Melanjutkan dari posisi terakhir
}

}

function Script33()
{
  var audio = document.getElementById('bgSong');
audio.pause(); // Pause audio tanpa reset posisi
}

function Script34()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();  // Melanjutkan dari posisi terakhir
}

}

function Script35()
{
  var audio = document.getElementById('bgSong');
audio.pause(); // Pause audio tanpa reset posisi
}

function Script36()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();  // Melanjutkan dari posisi terakhir
}

}

function Script37()
{
  var audio = document.getElementById('bgSong');
audio.pause(); // Pause audio tanpa reset posisi
}

function Script38()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();  // Melanjutkan dari posisi terakhir
}

}

function Script39()
{
  var audio = document.getElementById('bgSong');
audio.pause(); // Pause audio tanpa reset posisi
}

function Script40()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();  // Melanjutkan dari posisi terakhir
}

}

function Script41()
{
  var audio = document.getElementById('bgSong');
audio.pause(); // Pause audio tanpa reset posisi
}

function Script42()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();  // Melanjutkan dari posisi terakhir
}

}

function Script43()
{
  var audio = document.getElementById('bgSong');
audio.pause(); // Pause audio tanpa reset posisi
}

function Script44()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();  // Melanjutkan dari posisi terakhir
}

}

function Script45()
{
  var audio = document.getElementById('bgSong');
audio.pause(); // Pause audio tanpa reset posisi
}

function Script46()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();  // Melanjutkan dari posisi terakhir
}

}

function Script47()
{
  var audio = document.getElementById('bgSong');
audio.pause(); // Pause audio tanpa reset posisi
}

function Script48()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();  // Melanjutkan dari posisi terakhir
}

}

function Script49()
{
  var audio = document.getElementById('bgSong');
audio.pause(); // Pause audio tanpa reset posisi
}

function Script50()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();  // Melanjutkan dari posisi terakhir
}

}

function Script51()
{
  var audio = document.getElementById('bgSong');
audio.pause(); // Pause audio tanpa reset posisi
}

function Script52()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();  // Melanjutkan dari posisi terakhir
}

}

function Script53()
{
  var audio = document.getElementById('bgSong');
audio.pause(); // Pause audio tanpa reset posisi
}

function Script54()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();  // Melanjutkan dari posisi terakhir
}

}

function Script55()
{
  var audio = document.getElementById('bgSong');
audio.pause(); // Pause audio tanpa reset posisi
}

function Script56()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();  // Melanjutkan dari posisi terakhir
}

}

function Script57()
{
  var audio = document.getElementById('bgSong');
audio.pause(); // Pause audio tanpa reset posisi
}

function Script58()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();  // Melanjutkan dari posisi terakhir
}

}

function Script59()
{
  var audio = document.getElementById('bgSong');
audio.pause(); // Pause audio tanpa reset posisi
}

function Script60()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();  // Melanjutkan dari posisi terakhir
}

}

function Script61()
{
  var audio = document.getElementById('bgSong');
audio.pause(); // Pause audio tanpa reset posisi
}

function Script62()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();  // Melanjutkan dari posisi terakhir
}

}

function Script63()
{
  var audio = document.getElementById('bgSong');
audio.pause(); // Pause audio tanpa reset posisi
}

function Script64()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();  // Melanjutkan dari posisi terakhir
}

}

function Script65()
{
  var audio = document.getElementById('bgSong');
audio.pause(); // Pause audio tanpa reset posisi
}

function Script66()
{
  var audio = document.getElementById('bgSong');
if (audio.paused) {
    audio.play();  // Melanjutkan dari posisi terakhir
}

}

function Script67()
{
  var audio = document.getElementById('bgSong');
audio.pause(); // Pause audio tanpa reset posisi
}

