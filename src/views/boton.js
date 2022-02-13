import app from "./app";
import "../database";
import http from "http";
import serialcom from "serialport";
import { createServer } from "http";
import { Server } from "socket.io";
import Data from "../models/Data";
import { Socket } from "socket.io-client";
import serialcom from "serialport";

import server from "../index";

const io = require("socket.io")(server);

const parser = new serialcom("COM3", { baudRate: 9600 }).pipe(
  new serialcom.parsers.Readline({ delimiter: "\n" })
);

const btnLoad = document.getElementById("connect");

btnLoad.addEventListener("click", () => {
  parser.on("data", (datos) => {
    if (datos.includes("Data: ")) {
      console.log(datos);
      io.emit("datos-giro", datos);
    }

    //enviar datos
    datas = datos.split(" ");
    dato1 = parseInt(datas[1], 10);
    dato2 = parseInt(datas[2], 10);
    dato3 = parseInt(datas[3], 10);
    dato4 = parseInt(datas[4], 10);
    dato5 = parseInt(datas[5], 10);
    dato6 = parseInt(datas[6], 10);
    dato7 = parseInt(datas[7], 10);

    const data = new Data({
      temperatura: dato1,
      humedad: dato2,
      presion: dato3,
      gas: dato4,
      monoxido: dato5,
      uv: dato6,
      giroscopio: dato7,
    });

    data.save((err, document) => {
      if (err) console.log(err);
      //console.log(document);
    });
  });
});
