(function(){
  let streamers = [
    "esl_csgo",
    "lirik",
    "sing_sing",
    "hsdogdog",
    "esl_ruhub_csgo",
    "summit1g",
    "overwatchcontenders",
    "pokemonvgc",
    "gnumme",
    "izzi",
    "lolesportslas",
    "ESL_SC2",
    "OgamingSC2",
    "cretetion",
    "freecodecamp",
    "imaqtpie",
    "twitch",
    "RobotCaleb",
    "noobs2ninjas"
  ];

  ////ONLINE && OFFLINE streamers

  const onlineOffline = function() {
    for (var i = 0; i < streamers.length; i++) {
      /*jshint loopfunc:true */
      const stuff = function() {
        let api =
          "https://wind-bow.glitch.me/twitch-api/streams/" + streamers[i];
        let offlineIMG =
          "https://t4.ftcdn.net/jpg/00/97/00/09/160_F_97000908_wwH2goIihwrMoeV9QF3BW6HtpsVFaNVM.jpg";
        //============================
        /*Calling the variable i from the loop and putting it in a variable
      so we can use it on our onload request function*/
        let myStreams = streamers[i];
        //=============================
        let request = new XMLHttpRequest();
        request.open("GET", api);
        request.responseType = "json";
        request.send();
        request.onload = function() {
          let data = request.response;

          //Getting another API call if the stream===null
          if (data.stream === null) {
            let offlineAPI =
              "https://wind-bow.glitch.me/twitch-api/channels/" + myStreams;
            request.open("GET", offlineAPI);
            request.responseType = "json";
            request.send();
            request.onload = function() {
              let myData = request.response;

              $("#streamer").prepend(
                '<div class="display"><a href="' +
                  myData.url +
                  '"><img src="' +
                  myData.logo +
                  '" class="logo"></a><a class="name" href="' +
                  myData.url +
                  '">' +
                  myData.display_name +
                  "</a></div><div><p><span>Stream : </span>" +
                  myData.game +
                  "</p><span>Viewers : </span>N/A</p><p><span>Status : </span>" +
                  myStreams +
                  " Is Currently Offline</p></div"
              );
            };
          } else {
            $("#streamer").prepend(
              '<div class="display"><a href="' +
                data.stream.channel.url +
                '"><img src="' +
                data.stream.channel.logo +
                '" class="logo"></a><a class="name" href="' +
                data.stream.channel.url +
                '">' +
                data.stream.channel.display_name +
                "</a></div><div><p><span>Stream : </span>" +
                data.stream.game +
                "</p><p><span>Viewers : </span>" +
                data.stream.viewers +
                '</p><p class="status"><span>Status : </span>' +
                data.stream.channel.status +
                "</p></div>"
            );
          }
        };
      };
      stuff();
    }
  };

  onlineOffline();

  ///Clicking the title to show ONLINE && OFFLINE streamers

  let title = document.querySelector(".myTitle");

  title.addEventListener("click", function() {
    $("#streamer").html("");

    onlineOffline();
  });

  ///ONLINE streamers

  let online = document.querySelector("#online");
  online.addEventListener("click", function() {
    $("#streamer").html("");
    for (var o = 0; o < streamers.length; o++) {
      /*jshint loopfunc:true */
      const onlineStuff = function() {
        let onlineApi =
          "https://wind-bow.glitch.me/twitch-api/streams/" + streamers[o];
        let request = new XMLHttpRequest();
        request.open("GET", onlineApi);
        request.responseType = "json";
        request.send();
        request.onload = function() {
          let data = request.response;

          $("#streamer").prepend(
            '<div class="display"><a href="' +
              data.stream.channel.url +
              '"><img src="' +
              data.stream.channel.logo +
              '" class="logo"></a><a class="name" href="' +
              data.stream.channel.url +
              '">' +
              data.stream.channel.display_name +
              "</a></div><div><p><span>Stream : </span>" +
              data.stream.game +
              "</p><p><span>Viewers : </span>" +
              data.stream.viewers +
              '</p><p class="status"><span>Status : </span>' +
              data.stream.channel.status +
              "</p></div>"
          );
        };
      };
      onlineStuff();
    }
  });

  ///OFFLINE streamers

  let offline = document.querySelector("#offline");

  offline.addEventListener("click", function() {
    for (let p = 0; p < streamers.length; p++) {
      $("#streamer").html("");
      /*jshint loopfunc:true */
      const offlineStuff = function() {
        let offlineApi =
          "https://wind-bow.glitch.me/twitch-api/streams/" + streamers[p];
        let offlineStreams = streamers[p];
        let request = new XMLHttpRequest();
        request.open("GET", offlineApi);
        request.responseType = "json";
        request.send();
        request.onload = function() {
          let data = request.response;

          if (data.stream === null) {
            let myOfflineAPI =
              "https://wind-bow.glitch.me/twitch-api/channels/" +
              offlineStreams;
            request.open("GET", myOfflineAPI);
            request.responseType = "json";
            request.send();
            request.onload = function() {
              let myData = request.response;

              $("#streamer").prepend(
                '<div class="display"><a href="' +
                  myData.url +
                  '"><img src="' +
                  myData.logo +
                  '" class="logo"></a><a class="name" href="' +
                  myData.url +
                  '">' +
                  myData.display_name +
                  "</a></div><div><p><span>Stream : </span>" +
                  myData.game +
                  "</p><span>Viewers : </span>N/A</p><p><span>Status : </span>" +
                  offlineStreams +
                  " Is Currently Offline</p></div"
              );
            };
          }
        };
      };
      offlineStuff();
    }
  });
})();
