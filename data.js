var APP_DATA = {
  "scenes": [
    {
      "id": "0-oak-tec-kche",
      "name": "Küchenbereich",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -1.3475686972489385,
        "pitch": 0.1659300670127415,
        "fov": 1.339867637530951
      },
      "linkHotspots": [
        {
          "yaw": 1.3388525904531416,
          "pitch": 0.07993759399572653,
          "rotation": 0,
          "target": "2-oak-tec-bro"
        },
        {
          "yaw": 0.41046943673829794,
          "pitch": 0.08816762275327861,
          "rotation": 0,
          "target": "1-oak-tec-meeting-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-oak-tec-meeting-room",
      "name": "Meeting Bereich",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.3027443157487788,
        "pitch": 0.17702914381885826,
        "fov": 1.339867637530951
      },
      "linkHotspots": [
        {
          "yaw": 1.9894923019190234,
          "pitch": 0.10855921139739877,
          "rotation": 1.5707963267948966,
          "target": "2-oak-tec-bro"
        },
        {
          "yaw": 1.0555815145201244,
          "pitch": 0.1727862772289832,
          "rotation": 3.141592653589793,
          "target": "3-oak-tec-ping-pong-tisch"
        },
        {
          "yaw": 0.6636686963231746,
          "pitch": 0.1155334207296157,
          "rotation": 0,
          "target": "7-oak-tec-produktion-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-oak-tec-bro",
      "name": "Büroflächen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 1.622900875105704,
        "pitch": 0.09892805095760338,
        "fov": 1.339867637530951
      },
      "linkHotspots": [
        {
          "yaw": 0.040806208465332006,
          "pitch": 0.17976497357840415,
          "rotation": 3.141592653589793,
          "target": "3-oak-tec-ping-pong-tisch"
        },
        {
          "yaw": -1.6644467646320198,
          "pitch": 0.01482151296326606,
          "rotation": 0,
          "target": "0-oak-tec-kche"
        },
        {
          "yaw": -0.7522334273792577,
          "pitch": 0.05720234827608728,
          "rotation": 7.853981633974483,
          "target": "1-oak-tec-meeting-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-oak-tec-ping-pong-tisch",
      "name": "Ping Pong Tisch",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.5983852314775611,
        "pitch": 0.17008682445340817,
        "fov": 1.339867637530951
      },
      "linkHotspots": [
        {
          "yaw": -1.8672183854544429,
          "pitch": 0.1865585941441701,
          "rotation": 3.141592653589793,
          "target": "1-oak-tec-meeting-room"
        },
        {
          "yaw": -3.082500041007501,
          "pitch": 0.13197078780220295,
          "rotation": 0,
          "target": "2-oak-tec-bro"
        },
        {
          "yaw": -2.23222151261014,
          "pitch": 0.040626108546499395,
          "rotation": 0,
          "target": "0-oak-tec-kche"
        },
        {
          "yaw": -0.194576758620423,
          "pitch": 0.28124372528343144,
          "rotation": 3.141592653589793,
          "target": "5-oak-tek-produktion-2"
        },
        {
          "yaw": 0.3692359191814667,
          "pitch": 0.2862726890246421,
          "rotation": 3.141592653589793,
          "target": "6-oak-tec-produktion-3"
        },
        {
          "yaw": 0.670673629790592,
          "pitch": 0.27286334398751677,
          "rotation": 3.141592653589793,
          "target": "7-oak-tec-produktion-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-oak-tec-produktion-eingang",
      "name": "Produktion Eingang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.33748686903303415,
        "pitch": -0.22215421969423943,
        "fov": 1.339867637530951
      },
      "linkHotspots": [
        {
          "yaw": -0.2807565323682901,
          "pitch": 0.02017507665991758,
          "rotation": 0,
          "target": "5-oak-tek-produktion-2"
        },
        {
          "yaw": 0.25941588296948837,
          "pitch": 0.04338949603402931,
          "rotation": 0,
          "target": "6-oak-tec-produktion-3"
        },
        {
          "yaw": 0.6744407684489708,
          "pitch": 0.026021366559671577,
          "rotation": 0,
          "target": "7-oak-tec-produktion-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-oak-tek-produktion-2",
      "name": "Produktion Geräte",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -2.09210153391156,
        "pitch": 0.012103319948773006,
        "fov": 1.339867637530951
      },
      "linkHotspots": [
        {
          "yaw": 1.4695179028027656,
          "pitch": -0.07762038700635188,
          "rotation": 0,
          "target": "7-oak-tec-produktion-4"
        },
        {
          "yaw": 1.7144673359396423,
          "pitch": 0.1150262967731912,
          "rotation": 0,
          "target": "6-oak-tec-produktion-3"
        },
        {
          "yaw": 2.950154175977339,
          "pitch": 0.05567159294117019,
          "rotation": 0,
          "target": "4-oak-tec-produktion-eingang"
        },
        {
          "yaw": -2.7715708230581058,
          "pitch": -0.3084072858739155,
          "rotation": 0,
          "target": "1-oak-tec-meeting-room"
        },
        {
          "yaw": 2.94048253209215,
          "pitch": -0.3105786760017786,
          "rotation": 0,
          "target": "3-oak-tec-ping-pong-tisch"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-oak-tec-produktion-3",
      "name": "Lagerflächen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -1.8858949867068198,
        "pitch": 0.33323132954137336,
        "fov": 1.339867637530951
      },
      "linkHotspots": [
        {
          "yaw": 1.4740958070218184,
          "pitch": 0.05868861786134616,
          "rotation": 0,
          "target": "7-oak-tec-produktion-4"
        },
        {
          "yaw": -1.299091992808652,
          "pitch": -0.06644537093652048,
          "rotation": 0,
          "target": "5-oak-tek-produktion-2"
        },
        {
          "yaw": -2.731750940951059,
          "pitch": 0.03479123812671858,
          "rotation": 0,
          "target": "4-oak-tec-produktion-eingang"
        },
        {
          "yaw": -2.287053067540807,
          "pitch": -0.2698383453313298,
          "rotation": 0,
          "target": "1-oak-tec-meeting-room"
        },
        {
          "yaw": -2.664547387712151,
          "pitch": -0.327752626750204,
          "rotation": 0,
          "target": "3-oak-tec-ping-pong-tisch"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-oak-tec-produktion-4",
      "name": "Produktion Übersicht",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.06700157248778105,
        "pitch": -0.02950485730314867,
        "fov": 1.339867637530951
      },
      "linkHotspots": [
        {
          "yaw": -1.3815175766481183,
          "pitch": 0.11730994045845122,
          "rotation": 0,
          "target": "6-oak-tec-produktion-3"
        },
        {
          "yaw": -1.276097489143826,
          "pitch": -0.04353245660621852,
          "rotation": 0,
          "target": "5-oak-tek-produktion-2"
        },
        {
          "yaw": -2.128389747222954,
          "pitch": -0.24473508258220633,
          "rotation": 0,
          "target": "1-oak-tec-meeting-room"
        },
        {
          "yaw": -2.4105550796940154,
          "pitch": -0.29434087400769826,
          "rotation": 0,
          "target": "3-oak-tec-ping-pong-tisch"
        },
        {
          "yaw": -2.5296304974027386,
          "pitch": 0.012951219304522255,
          "rotation": 0,
          "target": "4-oak-tec-produktion-eingang"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
