let params = new URLSearchParams(window.location.search);

websocket = new WebSocket('ws://' + params.get("ip"));

websocket.onopen = function () {
    console.log("Connected!");
}

websocket.onmessage = function (event) {
    console.log("Received event: " + event.data);
}