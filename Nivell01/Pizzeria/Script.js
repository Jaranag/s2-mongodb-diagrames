

use('Pizzeria');db.createCollection('Botigues',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "Codi Postal ",
    "Localitat",
    "Provincia"
  ],
  "properties": {
    "Codi Postal ": {
      "bsonType": "string"
    },
    "Localitat": {
      "bsonType": "string"
    },
    "Provincia": {
      "bsonType": "string"
    }
  }
} }});

use('Pizzeria');db.createCollection('Clients',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "Nom",
    "Cognom",
    "Adreça",
    "Codi Postal",
    "Localitat",
    "Provincia",
    "TLF"
  ],
  "properties": {
    "Cognom": {
      "bsonType": "string"
    },
    "Adreça": {
      "bsonType": "string"
    },
    "Codi Postal": {
      "bsonType": "int"
    },
    "Localitat": {
      "bsonType": "string"
    },
    "Nom": {
      "bsonType": "string"
    },
    "Provincia": {
      "bsonType": "string"
    },
    "TLF": {
      "bsonType": "int"
    }
  }
} }});

use('Pizzeria');db.createCollection('Comandes',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "Id_Botiga"
  ],
  "properties": {
    "Preu": {
      "bsonType": "double"
    },
    "Tipus_Comanda": {
      "bsonType": "object",
      "required": [
        "Tipus Comanda"
      ],
      "properties": {
        "Tipus Comanda": {
          "bsonType": "string"
        },
        "Id_Tipus_Comanda": {
          "bsonType": "objectId"
        }
      }
    },
    "Data/Hora": {
      "bsonType": "timestamp"
    },
    "Id_Botiga": {
      "bsonType": "objectId"
    },
    "Productes": {
      "bsonType": "array",
      "items": {
        "bsonType": "object",
        "required": [
          "Id_productes"
        ],
        "properties": {
          "Id_productes": {
            "bsonType": "objectId"
          }
        }
      }
    },
    "Id_Client": {
      "bsonType": "objectId"
    }
  }
} }});

use('Pizzeria');db.createCollection('Empleats',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "Cognom1",
    "Nom",
    "NIF/NIE",
    "TLF",
    "ID_Botiga",
    "Tipus_Empleat"
  ],
  "properties": {
    "ID_Botiga": {
      "bsonType": "objectId"
    },
    "Cognom1": {
      "bsonType": "string"
    },
    "Cognom2": {
      "bsonType": "string"
    },
    "Tipus_Empleat": {
      "bsonType": "object",
      "required": [
        "Id_Tipus_Empleat",
        "Tipus_Empleat"
      ],
      "properties": {
        "Id_Tipus_Empleat": {
          "bsonType": "objectId"
        },
        "Tipus_Empleat": {
          "bsonType": "string"
        }
      }
    },
    "Nom": {
      "bsonType": "string"
    },
    "NIF/NIE": {
      "bsonType": "string"
    },
    "TLF": {
      "bsonType": "int"
    }
  }
} }});

use('Pizzeria');db.createCollection('Productes',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "Tipus_Producte",
    "Nom",
    "Preu",
    "Id_Client"
  ],
  "properties": {
    "Descripció": {
      "bsonType": "string"
    },
    "Preu": {
      "bsonType": "double"
    },
    "Tipus_Producte": {
      "bsonType": "object",
      "required": [
        "Tipus_Producte",
        "Id_TP",
        "Tipus Producte"
      ],
      "properties": {
        "Id_TP": {
          "bsonType": "objectId"
        },
        "Tipus_Producte": {
          "bsonType": "object"
        },
        "Tipus Producte": {
          "bsonType": "string"
        }
      }
    },
    "Categoria Pizza": {
      "bsonType": "object"
    },
    "Imatge": {
      "bsonType": "string"
    },
    "Nom": {
      "bsonType": "string"
    },
    "Id_Client": {
      "bsonType": "objectId"
    }
  }
} }});
